package com.ly.util.siteMesh;

import org.sitemesh.DecoratorSelector;
import org.sitemesh.content.Content;
import org.sitemesh.webapp.WebAppContext;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * 基于request参数decorator值进行动态定位装饰器的选择器
 * 如果decorator参数有值，则返回"/WEB-INF/views/layouts/" + decorator + ".jsp"作为目标装饰模板页面
 */
public class ParamDecoratorSelector implements DecoratorSelector<WebAppContext> {

    private DecoratorSelector<WebAppContext> defaultDecoratorSelector;

    public ParamDecoratorSelector(DecoratorSelector<WebAppContext> defaultDecoratorSelector) {
        this.defaultDecoratorSelector = defaultDecoratorSelector;
    }

    public String[] selectDecoratorPaths(Content content, WebAppContext context) throws IOException {
        // build decorator based on the request
        HttpServletRequest request = context.getRequest();
        String decorator = request.getParameter("decorator");
        if ("decorator_blank".equals(decorator)) {
            //按照参数值返回对应路径下面的jsp装饰模板页码
            return new String[] { "/WEB-INF/views/decorators/decorator-blank.jsp" };
        }
        String[] defaultUrl = defaultDecoratorSelector.selectDecoratorPaths(content, context);
        if(defaultUrl.length>0 && "/WEB-INF/views/decorators/decorator.jsp".equals(defaultUrl[0])){
            String  positionId = (String) request.getSession().getAttribute("positionId");
            if("999999".equals(positionId)){
                return new String[] { "/WEB-INF/views/decorators/decorator-blank.jsp" };
            }
        }


        // Otherwise, fallback to the standard configuration
        return defaultDecoratorSelector.selectDecoratorPaths(content, context);
    }
}