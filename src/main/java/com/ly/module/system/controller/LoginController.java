package com.ly.module.system.controller;

import com.ly.module.system.service.IndexService;
import com.ly.util.tools.IMap;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *LoginCon 负责打开登录页面(GET请求)和登录出错页面(POST请求)，
 *
 * 真正登录的POST请求由Filter完成,
 *
 */
@Controller
@RequestMapping("/")
public class LoginController {

    private static final Logger log = LoggerFactory.getLogger(LoginController.class);


    @RequestMapping(value = "login", method =  RequestMethod.GET)
    public String login() {
     /*   Subject subject = SecurityUtils.getSubject();
        if (subject.isAuthenticated() || subject.isRemembered()) {
            return "redirect:/index";
        }*/
        return "login";
    }

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public String staffLogin(HttpServletRequest request, HttpServletResponse response) {
        IMap iMap = new IMap(request);
        String username = iMap.getString("username");
        String password = iMap.getString("password");
        String captcha = iMap.getString("captcha");
        boolean remember = iMap.getBoolean("remember");
        if (StringUtils.isBlank(username)) {
            request.setAttribute("errorMessage", "用户名不能为空");
            return "login";
        }
        if (StringUtils.isBlank(password)) {
            request.setAttribute("errorMessage", "密码不能为空");
            return "login";
        }

        return "redirect:/index";


//        if(StringUtils.isBlank(captcha)){
//            request.setAttribute("errorMessage", "验证码不能为空");
//            return "login";
//        }

       /* Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password.toCharArray(), remember, null, captcha);
        try {
            subject.login(token);

            //存入http缓存
            HttpSession session = request.getSession();
            Session shiroSession = subject.getSession();
            session.setAttribute(OrderConstants.CURRENT_USER, shiroSession.getAttribute("tmUser"));//当前用户
            session.setAttribute(OrderConstants.CURRENT_USER_NAME, username);//当前用户登录id
            session.setAttribute(OrderConstants.USER_GRID, shiroSession.getAttribute("tmUserGrid"));//当前用户所属网格
            session.setAttribute(OrderConstants.USER_DEPART, shiroSession.getAttribute("tmUserDepart"));//当前用户所属部门
            //session.setAttribute(OrderConstants.CURRENT_WORKER, shiroSession.getAttribute("tmWorker"));//当前用户(服务商)
            session.setAttribute(OrderConstants.USER_PROVIDER, shiroSession.getAttribute("tmProvider"));//当前用户所属服务商
            TmUserSession tmUserSession = (TmUserSession) shiroSession.getAttribute("tmUserSession");
            session.setAttribute(OrderConstants.USER_SESSION, tmUserSession);
            if(tmUserSession != null){
                session.setAttribute("userId",tmUserSession.getUserId());
                session.setAttribute("userName",tmUserSession.getUserName());
                session.setAttribute("userTel",tmUserSession.getUserTel());
                session.setAttribute("areaCode",tmUserSession.getAreaCode());
                session.setAttribute("areaName",tmUserSession.getAreaName());
                session.setAttribute("cityCode",tmUserSession.getCityCode());
                session.setAttribute("cityName",tmUserSession.getCityName());
                session.setAttribute("departName",tmUserSession.getDepartName());
                session.setAttribute("departNo",tmUserSession.getDepartNo());
                session.setAttribute("positionId",tmUserSession.getPositionId());
                session.setAttribute("positionName",tmUserSession.getPositionName());
            }

            if ("123456".equals(password)){
                session.setAttribute("updatePasswdFlag",true);
            }else if(loginService.checkUserTel(username)) {
                session.setAttribute("updateUserTelFlag", true);
            }

            //当前登录人的主机信息存储到session中
            String userHost = request.getRemoteHost();
            String sessionId = session.getId();
            UserSession userSession = new UserSession();
            userSession.setUsername(username);
            userSession.setSessid(sessionId);
            userSession.setAddr(userHost);

            String CHECK_SESSION_SWITCH =ConfigHelper.getConfig("CHECK_SESSION_SWITCH");
            if (StringUtil.isNotEmpty(CHECK_SESSION_SWITCH)&&"1".equals(CHECK_SESSION_SWITCH)){
                checkSessionExists(username, sessionId);
            }

            return "redirect:/index";

        }catch (AuthenticationException e) {
            if (e instanceof UnGrantedPermissionsException) {
                request.setAttribute("errorMessage", "该账户没有激活授权请联系管理员");
            }else{
                request.setAttribute("errorMessage", "用户名或者密码不正确");
            }
            return "login";
        }*/



    }

    /**
     * 没有权限
     *
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/unauth")
    public String unauth(Model model) throws Exception {
        if (!SecurityUtils.getSubject().isAuthenticated()) {
            return "redirect:/login";
        }
        return "error/403";
    }

    /**
     * 登出系统
     *
     * @return
     */
    @RequestMapping( "logout")
    public String logout() {
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        return "redirect:/";
    }


    @Autowired
    private IndexService indexService;

    @RequestMapping("index")
    public String index() {
        return "index";
    }


    //测试页面
    @RequestMapping("stepForm")
    public String stepForm(){return "module/stepForm";}
}
