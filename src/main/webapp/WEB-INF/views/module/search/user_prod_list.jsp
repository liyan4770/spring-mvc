<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<html>
<head>
    <meta charset="utf-8"/>
    <title>用户产品列表</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <script type="text/javascript" src="${rootPath}/static/module/search/user_prod_list.js"></script>
    <script>
        jQuery(document).ready(function () {
            Metronic.init(); // init metronic core componets
            Layout.init(); // init layout 菜单初始化需要用到 页脚的滚动到页首控件也用到
        });
    </script>
</head>
<body>
<div class="page-container">
    <div class="page-content">
        <div class="container">
            <ul class="page-breadcrumb breadcrumb">
                <li>
                    <a href="${rootPath}/index" target="_top">首页</a><i class="fa fa-circle"></i>
                </li>
                <li class="active">用户产品列表</li>
            </ul>
            <div class="row">
                <div class="col-md-12">
                    <div class="portlet light bordered">
                        <div class="portlet-title">
                            <div class="caption">
                  <span class="caption-subject font-green-sharp bold uppercase">
                  <i class="fa fa-gift"></i> 搜索条件
                  </span>
                            </div>
                            <div class="tools">
                                <a href="javascript:;" class="collapse">
                                </a>
                            </div>
                        </div>
                        <div class="portlet-body form">
                            <form action="javascript:;" id="searchForm" class="form-horizontal">
                                <div class="form-body">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="col-md-4 control-label">产品名称：</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="text" id="PROD_NAME" name="PROD_NAME">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="col-md-4 control-label">创建人：</label>
                                                <div class="col-md-8">
                                                    <input class="form-control" type="text" id="CREATE_USER" name="CREATE_USER">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button type="button" class="btn green" onclick="selectList()" >查询
                                        </button>
                                        <button type="button" class="btn" onclick="reset()">重置
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="portlet light bordered">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-cogs font-green-sharp"></i>
                                <span class="caption-subject font-green-sharp bold uppercase">用户产品列表</span>
                            </div>
                            <div class="actions btn-set">
                                <button class="btn green-haze btn-circle" onclick="showAddObjForm('/userProdController/showAddUserProdObj')">
                                    <i class="fa fa-check"></i>添加
                                </button>
                                <button class="btn green-haze btn-circle" onclick="showUpdateObjForm('/userProdController/showUpdateUserProdObj')">
                                    <i class="fa fa-check"></i>修改
                                </button>
                                <button class="btn red-sunglo btn-circle" onclick="deleteObjForm('/userProdController/deleteUserProdObj')">
                                    <i class="fa fa-check"></i>删除
                                </button>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <table id="table" class="table table-striped table-bordered table-hover"
                                   data-toggle="table"
                                   data-url="${rootPath}/userProdController/queryUserProdList"
                                   data-method="post"
                                   data-content-type="application/x-www-form-urlencoded"
                                   data-query-params="queryParams"
                                   data-pagination="true"
                                   data-click-to-select="true"
                                   data-side-pagination="server"
                                   data-page-list="[5, 10, 20, 50, 200]"
                                   data-show-refresh="true" <%--显示刷新按钮--%>
                                   data-show-toggle="true" <%--显示卡片视图--%>
                                   data-show-pagination-switch="true"<%--显示“隐藏分页”按钮--%>
                                   data-show-columns="true"<%--显示列选项--%>
                                   data-search="true"
                                   data-search-align="left">
                                <thead>
                                <tr>
                                    <th  data-radio="true"></th>
                                    <th data-field="ID" data-align="center" >编码</th>
                                    <th data-field="PROD_NAME" data-align="center">产品名称</th>
                                    <th data-field="PROD_TYPE" <%--data-formatter="normalLink" --%> data-align="center">产品类型</th>
                                    <th data-field="CREATE_DATE" data-align="center">创建时间</th>
                                    <th data-field="CREATE_USER" data-align="center">创建人</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ajax -->
<div id="add-modal" class="modal container fade" tabindex="-1">
</div>
<div id="update-modal" class="modal container fade" tabindex="-1">
</div>
</body>
</html>