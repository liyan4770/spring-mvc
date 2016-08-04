package com.ly.util.exception;

import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.Method;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * 不必在Controller中对异常进行处理，抛出即可，由此异常解析器统一控制。<br>
 * ajax请求（有@ResponseBody的Controller）发生错误，输出JSON。<br>
 * 页面请求（无@ResponseBody的Controller）发生错误，输出错误页面。<br>
 * 需要与AnnotationMethodHandlerAdapter使用同一个messageConverters<br>
 * Controller中需要有专门处理异常的方法。
 *
 *
 * */
public class MethodExceptionResolver extends ExceptionHandlerExceptionResolver {

    private static final Logger LOG = LoggerFactory.getLogger(MethodExceptionResolver.class);

    private String defaultErrorView;

    public String getDefaultErrorView() {
        return defaultErrorView;
    }

    public void setDefaultErrorView(String defaultErrorView) {
        this.defaultErrorView = defaultErrorView;
    }

    @Override
    protected ModelAndView doResolveHandlerMethodException(HttpServletRequest request,
                                                           HttpServletResponse response, HandlerMethod handlerMethod, Exception exception) {
        String ip= "";
        try {
            ip= InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            LOG.error("获取本地ip地址异常",e);
        }
        LOG.error("{} 系统异常",ip, exception);
        JSONObject json = new JSONObject();
        json.put("detailMessage",WmException.getStackTrace(exception));
        json.put("cause", String.valueOf(exception));
        ModelAndView returnValue = super.doResolveHandlerMethodException(request, response, handlerMethod, exception);
        if (handlerMethod == null) {//处理方法不支持GET 或者POST方法时候的异常信息
            if( null == returnValue) {
                returnValue = new ModelAndView();
                if (null == returnValue.getViewName()) {
                    returnValue.setViewName(defaultErrorView);

                    if(exception instanceof WmException){
                        WmExceptionEnums enums = ((WmException) exception).getEnums();
                        returnValue.addObject("code",enums.getId());
                        returnValue.addObject("msg",enums.getDesc());
                    }else{
                        returnValue.addObject("code", WmExceptionEnums.FAILURE.getId());
                        returnValue.addObject("msg",WmExceptionEnums.FAILURE.getDesc());
                        returnValue.addObject("cause", String.valueOf(exception));
                        returnValue.addObject("detailMessage",WmException.getStackTrace(exception));
                    }

                }
            }
            return returnValue;
        }

        Method method = handlerMethod.getMethod();

        if (method == null) {
            return null;
        }
        //如果定义了ExceptionHandler则返回相应的Map中的数据

        ResponseBody responseBodyAnn = AnnotationUtils.findAnnotation(method, ResponseBody.class);
        if (responseBodyAnn != null) {//处理有ResponseBody注解的方法异常信息
            try {
                ResponseStatus responseStatusAnn = AnnotationUtils.findAnnotation(method, ResponseStatus.class);
                if (responseStatusAnn != null) {
                    HttpStatus responseStatus = responseStatusAnn.value();
                    String reason = responseStatusAnn.reason();
                    if (!StringUtils.hasText(reason)) {
                        response.setStatus(responseStatus.value());
                    } else {
                        try {
                            response.sendError(responseStatus.value(), reason);
                        } catch (IOException e) { }
                    }
                }
                // 如果没有ExceptionHandler注解那么returnValue就为空
                if (returnValue == null) {

                    if(exception instanceof WmException){
                        WmExceptionEnums enums = ((WmException) exception).getEnums();
                        json.put("code", enums.getId());
                        json.put("msg", enums.getDesc());
                    }else{
                        json.put("code", WmExceptionEnums.FAILURE.getId());
                        json.put("msg", WmExceptionEnums.FAILURE.getDesc());
                    }
                    handleResponseError(json, request, response);
                    return new ModelAndView();
                }
                return handleResponseBody(returnValue, request, response);
            } catch (Exception e) {
                return null;
            }
        }

        if( null == returnValue) {//处理普通方法异常信息
            returnValue = new ModelAndView();
            if (null == returnValue.getViewName()) {
                returnValue.setViewName(defaultErrorView);

                if(exception instanceof WmException){
                    WmExceptionEnums enums = ((WmException) exception).getEnums();
                    returnValue.addObject("code",enums.getId());
                    returnValue.addObject("msg",enums.getDesc());
                }else{
                    returnValue.addObject("code", WmExceptionEnums.FAILURE.getId());
                    returnValue.addObject("msg",WmExceptionEnums.FAILURE.getDesc());
                    returnValue.addObject("cause", String.valueOf(exception));
                    returnValue.addObject("detailMessage",WmException.getStackTrace(exception));
                }

            }
        }
        return returnValue;
    }


    @SuppressWarnings({ "unchecked", "rawtypes" })
    private ModelAndView handleResponseBody(ModelAndView returnValue, HttpServletRequest request,
                                            HttpServletResponse response) throws ServletException, IOException {
        Map value = returnValue.getModelMap();
        HttpInputMessage inputMessage = new ServletServerHttpRequest(request);
        List<MediaType> acceptedMediaTypes = inputMessage.getHeaders().getAccept();
        if (acceptedMediaTypes.isEmpty()) {
            acceptedMediaTypes = Collections.singletonList(MediaType.ALL);
        }
        MediaType.sortByQualityValue(acceptedMediaTypes);
        HttpOutputMessage outputMessage = new ServletServerHttpResponse(response);
        Class<?> returnValueType = value.getClass();
        List<HttpMessageConverter<?>> messageConverters = super.getMessageConverters();
        if (messageConverters != null) {
            for (MediaType acceptedMediaType : acceptedMediaTypes) {
                for (HttpMessageConverter messageConverter : messageConverters) {
                    if (messageConverter.canWrite(returnValueType, acceptedMediaType)) {
                        messageConverter.write(value, acceptedMediaType, outputMessage);
                        return new ModelAndView();
                    }
                }
            }
        }
        if (logger.isWarnEnabled()) {
            logger.warn("Could not find HttpMessageConverter that supports return type [" + returnValueType + "] and "
                    + acceptedMediaTypes);
        }
        return null;
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    private ModelAndView handleResponseError(JSONObject returnValue, HttpServletRequest request,
                                             HttpServletResponse response) throws ServletException, IOException {
        HttpInputMessage inputMessage = new ServletServerHttpRequest(request);
        List<MediaType> acceptedMediaTypes = inputMessage.getHeaders().getAccept();
        if (acceptedMediaTypes.isEmpty()) {
            acceptedMediaTypes = Collections.singletonList(MediaType.ALL);
        }
        MediaType.sortByQualityValue(acceptedMediaTypes);
        HttpOutputMessage outputMessage = new ServletServerHttpResponse(response);
        Class<?> returnValueType = returnValue.getClass();
        List<HttpMessageConverter<?>> messageConverters = super.getMessageConverters();
        if (messageConverters != null) {
            for (MediaType acceptedMediaType : acceptedMediaTypes) {
                for (HttpMessageConverter messageConverter : messageConverters) {
                    if (messageConverter.canWrite(returnValueType, acceptedMediaType)) {
                        messageConverter.write(returnValue, acceptedMediaType, outputMessage);
                        return new ModelAndView();
                    }
                }
            }
        }
        if (logger.isWarnEnabled()) {
            logger.warn("Could not find HttpMessageConverter that supports return type [" + returnValueType + "] and "
                    + acceptedMediaTypes);
        }
        return null;
    }

}
