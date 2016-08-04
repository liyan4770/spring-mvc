<%@ page contentType="text/html;charset=UTF-8" %>
<!-- WATCHME 核心 全局样式 开始-->
<link href="${rootPath}/static/metronic/admin/layout3/css/fonts/googleapis/font-face.css" rel="stylesheet"
      type="text/css">
<link href="${rootPath}/static/metronic/global/plugins/font-awesome-4.4.0/css/font-awesome.min.css" rel="stylesheet"
      type="text/css">
<link href="${rootPath}/static/metronic/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet"
      type="text/css">
<link href="${rootPath}/static/metronic/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"
      type="text/css">
<link href="${rootPath}/static/metronic/global/plugins/uniform/css/uniform.default.css" rel="stylesheet"
      type="text/css">

<link href="${rootPath}/static/metronic/global/css/components-rounded.css" id="style_components" rel="stylesheet"
      type="text/css">
<link href="${rootPath}/static/metronic/global/css/plugins.css" rel="stylesheet" type="text/css">
<link href="${rootPath}/static/metronic/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet"
      type="text/css">
<link href="${rootPath}/static/metronic/admin/layout3/css/layout.css" rel="stylesheet" type="text/css">
<link href="${rootPath}/static/metronic/admin/layout3/css/themes/default.css" rel="stylesheet" type="text/css"
      id="style_color">
<link href="${rootPath}/static/metronic/admin/layout3/css/custom.css" rel="stylesheet" type="text/css">
<link href="${rootPath}/static/metronic/admin/pages/css/timeline-old.css" rel="stylesheet" type="text/css">
<!-- WATCHME 核心 全局样式 结束-->
<!-- 弹出层 CSS modal begin -->
<link href="${rootPath}/static/metronic/global/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css"
      rel="stylesheet" type="text/css"/>
<link href="${rootPath}/static/metronic/global/plugins/bootstrap-modal/css/bootstrap-modal.css" rel="stylesheet"
      type="text/css"/>
<!-- 弹出层 CSS modal end -->
<!-- bootsratp-table 表格控件 CSS 开始 -->
<link href="${rootPath}/static/metronic/global/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet"/>
<!-- bootsratp-table 表格控件 CSS 结束 -->
<!-- 菜单树 CSS begin -->
<link href="${rootPath}/static/metronic/global/plugins/zTree/css/zTreeStyle/zTreeStyle.css" rel="stylesheet"
      type="text/css"/>
<!-- 菜单树 CSS end -->
<link href="${rootPath}/static/metronic/admin/pages/css/error.css" rel="stylesheet" type="text/css"/>

<!----------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------------------------------------------------------------------->
<%--<link rel="shortcut icon" href="${rootPath}/static/metronic/global/img/favicon.ico"/>--%>
<!----------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------------------------------------------------------------------->

<!-- WATCHME 核心插件 开始-->
<!--[if lt IE 9]>
<script>
(function(){if (!window.console || !console.firebug){var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];window.console = {};for (var i = 0; i < names.length; ++i)window.console[names[i]] = function() {arguments.length>0?alert(JSON.stringify(arguments[0])):""}}})();
</script>
<script src="${rootPath}/static/metronic/global/plugins/respond.min.js"></script>
<script src="${rootPath}/static/metronic/global/plugins/echarts/js/html5shiv.js"></script>
<script src="${rootPath}/static/metronic/global/plugins/excanvas.min.js"></script>
<![endif]-->
<script src="${rootPath}/static/metronic/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"
        type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
        type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/jquery.blockui.min.js"  type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/jquery.cokie.min.js"  type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/uniform/jquery.uniform.min.js"
        type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/jquery-form/jquery.form.js" ></script>
<script src="${rootPath}/static/metronic/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js" ></script>

<script src="${rootPath}/static/metronic/global/scripts/metronic.js" type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js"
        type="text/javascript"></script>
<!-- WATCHME 核心插件 结束 -->

<!-- 弹出层 javascript modal begin-->
<script src="${rootPath}/static/metronic/global/plugins/bootstrap-modal/js/bootstrap-modalmanager.js"
        type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/bootstrap-modal/js/bootstrap-modal.js"
        type="text/javascript"></script>
<script src="${rootPath}/static/metronic/admin/pages/scripts/ui-extended-modals.js" ></script>
<!-- 弹出层 javascript modal end-->
<!-- bootsratp-table 表格控件 开始 -->
<!--[if lt IE 9]>
<script src="${rootPath}/static/metronic/global/plugins/ie8.array.indexof.js"></script>
<script>
$(function(){var $style;$style = $('<style type="text/css">:before,:after{content:none !important}</style>');$('head').append($style);return setTimeout((function() {return $style.remove();}), 0);});
</script>
<![endif]-->
<script src="${rootPath}/static/metronic/global/plugins/bootstrap-table/bootstrap-table.min.js"></script>
<script src="${rootPath}/static/metronic/global/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
<!-- bootsratp-table 表格控件 结束 -->
<!-- 菜单树begin-->
<script type="text/javascript"
        src="${rootPath}/static/metronic/global/plugins/zTree/js/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript"
        src="${rootPath}/static/metronic/global/plugins/zTree/js/jquery.ztree.excheck-3.5.js" ></script>
<script type="text/javascript"
        src="${rootPath}/static/metronic/global/plugins/zTree/js/jquery.ztree.exedit-3.5.js" ></script>
<!-- 菜单树end-->
<!-- 表单验证 开始 javascript-->
<script type="text/javascript"
        src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/jquery.validate.js"></script>
<script type="text/javascript"
        src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/localization/messages_zh.min.js" ></script>
<script type="text/javascript"
        src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/jquery.metadata.js" ></script>
<script type="text/javascript"
        src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/watchme-methods.js" ></script>
<script type="text/javascript"
        src="${rootPath}/static/metronic/global/plugins/jquery-validation/js/additional-methods.min.js" ></script>
<!-- 表单验证 结束 javascript-->
<!-- 页面基本javascript脚本 开始-->
<script src="${rootPath}/static/metronic/admin/layout3/scripts/layout.js" type="text/javascript"></script>
<script src="${rootPath}/static/metronic/admin/layout3/scripts/demo.js" type="text/javascript" ></script>
<!-- 页面基本avascript脚本 结束-->

<!-- My97DatePicker -->
<script src="${rootPath}/static/custom/js/My97DatePicker/WdatePicker.js" ></script>

<!-- layer 弹出层 begin-->
<script src="${rootPath}/static/metronic/global/plugins/layer/layer.js" type="text/javascript"></script>
<!-- layer 弹出层 end-->

<!-- 文件上传 begin-->
<script src="${rootPath}/static/metronic/global/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js"
        type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/jquery-file-upload/js/jquery.iframe-transport.js"
        type="text/javascript"></script>
<script src="${rootPath}/static/metronic/global/plugins/jquery-file-upload/js/jquery.fileupload.js"
        type="text/javascript"></script>
<!-- 文件上传 end-->

<!-- 自定义 begin-->
<script src="${rootPath}/static/custom/js/wmSelect/wmSelect.js" ></script>
<script src="${rootPath}/static/custom/js/cxSelect/jquery.cxselect.min.js"  type="text/javascript"></script>
<script src="${rootPath}/static/custom/js/jxls/jxls.export.js" ></script>
<script src="${rootPath}/static/custom/js/common.js"></script>
<script src="${rootPath}/static/custom/js/formatter.js"></script>
<script src="${rootPath}/static/custom/js/verify.js" ></script>
<!-- 自定义 end-->

<!--文件上传组件 uploadify begin-->
<script src="${rootPath}/static/metronic/global/plugins/uploadify/jquery.uploadify.js" ></script>
<link href="${rootPath}/static/metronic/global/plugins/uploadify/uploadify.css"  rel="stylesheet" type="text/css"/>

<script src="${rootPath}/static/metronic/global/plugins/uploadifive-v1.2.2-standard/jquery.uploadifive.js"
        ></script>
<link href="${rootPath}/static/metronic/global/plugins/uploadifive-v1.2.2-standard/uploadifive.css" rel="stylesheet"
       type="text/css"/>
<!--文件上传组件 uploadify end-->



