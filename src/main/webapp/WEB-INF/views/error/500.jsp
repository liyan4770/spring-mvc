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
    <title>500</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="${rootPath}/static/metronic/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"
          type="text/css">
    <link href="${rootPath}/static/metronic/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet"
          type="text/css">
    <link href="${rootPath}/static/metronic/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"
          type="text/css">
    <link href="${rootPath}/static/metronic/global/plugins/uniform/css/uniform.default.css" rel="stylesheet"
          type="text/css">
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN PAGE LEVEL STYLES -->
    <link href="${rootPath}/static/metronic/admin/pages/css/error.css" rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL STYLES -->
    <!-- BEGIN THEME STYLES -->
    <link href="${rootPath}/static/metronic/global/css/components-rounded.css" id="style_components" rel="stylesheet"
          type="text/css">
    <link href="${rootPath}/static/metronic/global/css/plugins.css" rel="stylesheet" type="text/css">
    <link href="${rootPath}/static/metronic/admin/layout3/css/layout.css" rel="stylesheet" type="text/css">
    <link href="${rootPath}/static/metronic/admin/layout3/css/themes/default.css" rel="stylesheet" type="text/css"
          id="style_color">
    <link href="${rootPath}/static/metronic/admin/layout3/css/custom.css" rel="stylesheet" type="text/css">
    <!-- END THEME STYLES -->

    <!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
    <!-- BEGIN CORE PLUGINS -->
    <!--[if lt IE 9]>
    <script src="${rootPath}/static/metronic/global/plugins/respond.min.js"></script>
    <script src="${rootPath}/static/metronic/global/plugins/excanvas.min.js"></script>
    <![endif]-->
    <script src="${rootPath}/static/metronic/global/plugins/jquery.min.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
    <!-- IMPORTANT! Load jquery-ui.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
    <script src="${rootPath}/static/metronic/global/plugins/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/bootstrap/js/bootstrap.min.js"
            type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"
            type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
            type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/jquery.cokie.min.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/global/plugins/uniform/jquery.uniform.min.js"
            type="text/javascript"></script>
    <!-- END CORE PLUGINS -->
    <script src="${rootPath}/static/metronic/global/scripts/metronic.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/admin/layout3/scripts/layout.js" type="text/javascript"></script>
    <script src="${rootPath}/static/metronic/admin/layout3/scripts/demo.js" type="text/javascript"></script>
    <script>
        jQuery(document).ready(function () {
            Metronic.init(); // init metronic core components
            Layout.init(); // init current layout

        });
    </script>
</head>
<body>
<div class="page-container">
    <div class="page-content">
        <div class="container">

            <!-- BEGIN PAGE BREADCRUMB -->
            <ul class="page-breadcrumb breadcrumb">
                <li></li>
            </ul>
            <!-- END PAGE BREADCRUMB -->
            <!-- BEGIN PAGE CONTENT INNER -->
            <div class="row">
                <div class="col-md-12 page-500">
                    <div class=" number">
                        500
                    </div>
                    <div class=" details">
                        <h3>服务器暂时无法响应</h3>

                        <p>
                            你访问的页面无法正确显示<br/>
                            请您联系管理员或技术支持，谢谢！<br/><br/>
                        </p>

                        <p class="hidden hiddenP500">
                            ${detailMessage}
                        </p>
                    </div>
                </div>
                <div class="col-md-12 text-center">
                    <button type="button"
                            onclick="$('.hiddenP500').removeClass('hidden');$(this).hide();"
                            class="btn btn-circle btn-sm btn-warning"><i class="icon-wrench"></i> 查看错误详情
                    </button>
                </div>
            </div>
            <!-- END PAGE CONTENT INNER -->
        </div>
        <!-- BEGIN PAGE CONTENT -->
    </div>
    <!-- END PAGE CONTENT -->
</div>
</body>
<!-- END BODY -->
</html>