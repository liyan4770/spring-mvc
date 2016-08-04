<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8"/>
    <title>springboot</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <script>rootPath = "${rootPath}";</script>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="${rootPath}/static/metronic/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"
          type="text/css"/>
    <link href="${rootPath}/static/metronic/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet"
          type="text/css"/>
    <link href="${rootPath}/static/metronic/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"
          type="text/css"/>
    <link href="${rootPath}/static/metronic/global/plugins/uniform/css/uniform.default.css" rel="stylesheet"
          type="text/css"/>
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN PAGE LEVEL STYLES -->
    <link href="${rootPath}/static/metronic/global/plugins/select2/select2.css" rel="stylesheet" type="text/css"/>
    <link href="${rootPath}/static/metronic/admin/pages/css/login-soft.css" rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL SCRIPTS -->
    <!-- BEGIN THEME STYLES -->
    <link href="${rootPath}/static/metronic/global/css/components-rounded.css" id="style_components" rel="stylesheet"
          type="text/css"/>
    <link href="${rootPath}/static/metronic/global/css/plugins.css" rel="stylesheet" type="text/css"/>
    <link href="${rootPath}/static/metronic/admin/layout3/css/layout.css" rel="stylesheet" type="text/css"/>
    <link id="style_color" href="${rootPath}/static/metronic/admin/layout3/css/themes/default.css" rel="stylesheet"
          type="text/css"/>
    <link href="${rootPath}/static/metronic/admin/layout3/css/custom.css" rel="stylesheet" type="text/css"/>
    <!-- END THEME STYLES -->
    <link rel="shortcut icon" href="${rootPath}/static/metronic/global/img/favicon.ico"/>
    <!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
    <!-- BEGIN CORE PLUGINS -->
    <!--[if lt IE 9]>
    <script src="${rootPath}/static/metronic/global/plugins/respond.min.js"></script>
    <script src="${rootPath}/static/metronic/global/plugins/excanvas.min.js"></script>
    <![endif]-->
    <script src="${rootPath}/static/metronic/global/plugins/jquery.min.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/bootstrap/js/bootstrap.min.js"
            type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/jquery.blockui.min.js"
            type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/uniform/jquery.uniform.min.js"
            type="text/javascript"></script>
    <!-- END CORE PLUGINS -->
    <!-- BEGIN PAGE LEVEL PLUGINS -->
    <script type="text/javascript"
            src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/jquery.validate.js"></script>
    <script type="text/javascript"
            src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/localization/messages_zh.min.js"
            async></script>
    <script type="text/javascript"
            src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/jquery.metadata.js"></script>
    <script type="text/javascript"
            src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/watchme-methods.js"></script>
    <script type="text/javascript"
            src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/additional-methods.min.js"
            async></script>
    <script src="${rootPath}/static/metronic/global/plugins/backstretch/jquery.backstretch.min.js"
            type="text/javascript"></script>
    <script type="text/javascript" src="${rootPath}/static/metronic/global/plugins/select2/select2.min.js"
            ></script>
    <!-- END PAGE LEVEL PLUGINS -->
    <script src="${rootPath}/static/metronic/global/plugins/layer/layer.js" type="text/javascript"></script>
    <!-- BEGIN PAGE LEVEL SCRIPTS -->
    <script src="${rootPath}/static/metronic/global/scripts/metronic.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/admin/pages/scripts/login-soft.js" type="text/javascript"></script>
    <!-- END PAGE LEVEL SCRIPTS -->
    <script src="${rootPath}/static/custom/js/wmSelect/wmSelectRegit.js"></script>
    <script src="${rootPath}/static/custom/js/common.js"></script>
    <script>
        jQuery(document).ready(function () {

            if (window != top || typeof(isLoginLogin) == "boolean") {   //判断是否在使用页面中出现未登陆
                top.location.href = "${rootPath}/login";
            }

            Metronic.init();
            Login.init();

            $.backstretch(["${rootPath}/static/metronic/admin/pages/media/login_slice/bg.png"]);

            /*$("#select2_pro").wmselect2({
                "tt": "select2_pro_user",
                "key": "PROVIDER_NO",
                "name": "PROVIDER_NAME",
                "wmtable": "tm_provider",
                "wmwhere": "PROVIDER_TYPE"
            });*/

            $(".login-form input[name='username']").focus();
        });

        function registersub() {
            if ($("#registerPro").valid()) {
                layer.msg('处理中...', {icon: 16, shade: 0.3, shadeClose: false, time: 0});
                $.ajax({
                    type: "POST",
                    url: rootPath + "/async/registCon/providerRegist?" + $("#registerPro").serialize(),
                    success: function (data, textstatus) {
                        layer.closeAll();
                        if (data.flag == '1') {
                            layer.msg('注册成功，系统登录名为身份证号后10位，请联系管理员激活账号', {icon: 16, time: 0});
                            window.setTimeout(function () {
                                top.location.href = "${rootPath}/login?" + Math.random();
                            }, 3000);
                        } else {
                            layer.msg(data.msg, {time: 5000});
                        }
                    },
                    error: function (data, textstatus) {
                        layer.closeAll();
                        layer.alert('提交失败！');
                    }
                });
            }
        }
    </script>
</head>
<body class="login">
<div class="loginTop">欢迎进入我的系统V0.1，请登录！</div>
<div class="logo col-md-12">
    <div class="col-md-offset-2 col-md-3 col-sm-5">
        <img style="width: 100%;"
             src="${rootPath}/static/metronic/admin/pages/media/login_slice/logo.png"/>
    </div>
</div>
<div class="menu-toggler sidebar-toggler">
</div>
<div class="col-md-10 col-md-offset-2">
    <div class="content col-md-10 col-sm-12 col-xs-12">
        <div class="col-md-7 col-sm-7">
            <img src="${rootPath}/static/metronic/admin/pages/media/login_slice/admin_img_2.png" style="width: 100%"/>
        </div>
        <div class="col-md-4 col-sm-4">
            <form class="login-form" id="loginForm"
                  onsubmit="if( $('#loginForm').valid() ) layer.msg('登录中...', {icon: 16,shade:0.3,shadeClose:false,time:0});"
                  action="${rootPath}/login" method="post">
                <h3 class="form-title">用户登录</h3>

                <c:if test="${errorMessage != null}">
                    <div class="alert alert-danger">
                        <button class="close" data-close="alert"></button>
                        <span>${errorMessage}</span>
                    </div>
                </c:if>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">用户名</label>

                    <div class="input-icon">
                        <i class="fa fa-user"></i>
                        <input class="form-control placeholder-no-fix" type="text" autocomplete="off"
                               placeholder="用户名"
                               name="username" value="${userId}"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">密码</label>

                    <div class="input-icon">
                        <i class="fa fa-lock"></i>
                        <input class="form-control placeholder-no-fix" type="password" autocomplete="off"
                               placeholder="密码"
                               name="password" value=""/>
                    </div>
                </div>
                <%--<div class="form-actions form-group">
                    &lt;%&ndash;<label class="checkbox">
                        <input type="checkbox" name="remember" value="true"/> 记住我
                    </label>&ndash;%&gt;
                    &lt;%&ndash;<label class="checkbox" style="float:right;">
                        <a href="javascript:;" id="forget-password">忘记密码?</a></label>&ndash;%&gt;
                </div>--%>
                <div class="form-actions form-group">
                    <button type="submit" style="background-color: #f58728;border-color: #f38323;"
                            class="btn btn-primary btn-lg btn-block">登录 <i
                            class="m-icon-swapright m-icon-white"></i>
                    </button>
                </div>
                <div class="create-account">
                    <p>
                        点击 &nbsp; <a href="javascript:;" id="register-btn"
                                     class="btn btn-circle default yellow-stripe btn-xs">
                       注册新用户 </a>
                    </p>
                </div>
            </form>
            <form class="forget-form" method="post">
                <h3>忘记密码 ?</h3>
                <p>
                    输入邮箱用于找回您的密码 .
                </p>
                <div class="form-group">
                    <div class="input-icon">
                        <i class="fa fa-envelope"></i>
                        <input class="form-control placeholder-no-fix" type="text" autocomplete="off"
                               placeholder="Email"
                               name="email"/>
                    </div>
                </div>
                <div class="form-actions">
                    <button type="button" id="back-btn" class="btn">
                        <i class="m-icon-swapleft"></i> 返回
                    </button>
                    <button type="submit" class="btn blue pull-right">
                        提交找回 <i class="m-icon-swapright m-icon-white"></i>
                    </button>
                </div>
            </form>
            <form class="register-form" id="registerPro" method="post">
                <h3>新用户注册</h3>

                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">姓名</label>

                    <div class="input-icon" title="系统登录名为身份证号后10位">
                        <i class="fa fa-user"></i>
                        <input class="form-control placeholder-no-fix"
                               validate="{required:true,isChinese:true,rangelength:[2,4]}"
                               type="text" autocomplete="off" placeholder="用户名"
                               name="userName"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">密码</label>

                    <div class="input-icon">
                        <i class="fa fa-lock"></i>
                        <input class="form-control placeholder-no-fix"
                               validate="{required:true,minlength:5}" type="password"
                               id="register_password" placeholder="密码" name="password"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">再次输入密码</label>

                    <div class="controls">
                        <div class="input-icon">
                            <i class="fa fa-check"></i>
                            <input class="form-control placeholder-no-fix"
                                   validate="{required:true,notEqualTo:'#register_password'}" type="password"
                                   placeholder="再次输入密码" name="rpassword"/>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">身份证号</label>

                    <div class="input-icon" data-fix="-5,90">
                        <i class="fa fa-envelope"></i>
                        <input class="form-control placeholder-no-fix isIdCardNo"
                               validate="{required:true,isIdCardNo:true}"
                               type="text" placeholder="身份证号" name="userNumber"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">性别</label>
                    <select name="userSex" validate="{required:true}" class="select2 form-control">
                        <option value="">--请选择--</option>
                        <option value="M">男</option>
                        <option value="F">女</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">邮箱</label>

                    <div class="input-icon">
                        <i class="fa fa-envelope"></i>
                        <input class="form-control placeholder-no-fix" validate="{required:true,isEmail:true}"
                               type="text" placeholder="邮箱" name="userEmail"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">电话号码</label>

                    <div class="input-icon" data-fix="-5,90">
                        <i class="fa fa-check"></i>
                        <input class="form-control placeholder-no-fix" validate="{required:true,isTel:true}" type="text"
                               placeholder="电话号码" name="userTel"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">选择单位</label>

                    <div class="input-icon">
                        <i class="fa fa-check"></i>
                        <select name="provider" validate="{required:true}" id="select2_pro"
                                class="select2 form-control">
                            <option value="">--请选择--</option>
                            <option value="01">施工单位</option>
                            <option value="02">监理单位</option>
                            <option value="03">设计单位</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">选择服务商</label>

                    <div class="input-icon">
                        <i class="fa fa-check"></i>
                        <select name="providerNo" id="select2_pro_user" validate="{required:true}"
                                class="select2 form-control">
                        </select></div>
                </div>
                <div class="form-group">
                    <label class="control-label visible-ie8 visible-ie9">类型</label>

                    <div class="input-icon">
                        <i class="fa fa-check"></i>
                        <select name="userFlag" id="userFlag" validate="{required:true}" class="form-control">
                            <option value="">--请选择--</option>
                            <option value="0">普通员工</option>
                            <option value="1">接口人</option>
                        </select></div>
                </div>
                <div class="form-actions">
                    <button id="register-back-btn" type="button" class="btn">
                        <i class="m-icon-swapleft"></i> 返回
                    </button>
                    <button type="button" onclick="registersub()" id="register-submit-btn" title="系统登录名为身份证号后10位"
                            class="btn blue pull-right">
                        确认注册 <i class="m-icon-swapright m-icon-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="copyright col-md-12 col-sm-12 col-xs-12" style="margin-top: 30px;height: 60px;">
    2015 &copy; springboot. All Rights Reserved.
</div>
</body>
</html>