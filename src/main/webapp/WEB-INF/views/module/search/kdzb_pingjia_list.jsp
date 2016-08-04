<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <title>宽带质量考核</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <script src="${rootPath}/static/module/search/kdzb_pingjia_list.js"></script>
    <script src="${rootPath}/static/metronic/global/plugins/echarts/echarts.js"></script>
    <script src="${rootPath}/static/metronic/global/plugins/echarts/MyEcharts.js"></script>
    <script src="${rootPath}/static/custom/js/WapCharts.js"></script>
    <script type="text/javascript">
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
                <li class="active">宽带质量考核</li>
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
                                                <label class="col-md-4 control-label">需求编码：</label>

                                                <div class="col-md-8">
                                                    <input class="form-control" type="text" id="requireId"
                                                           name="requireId">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="col-md-4 control-label">需求名称：</label>

                                                <div class="col-md-8">
                                                    <input class="form-control" type="text" id="requireName"
                                                           name="requireName">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="col-md-4 control-label">日期：</label>

                                                <div class="col-md-8">
                                                    <img onclick="WdatePicker({el:'buildYear',dateFmt:'yyyyMM',alwaysUseStartDate:true,skin:'twoer'})"
                                                         src="${rootPath}/static/custom/js/My97DatePicker/skin/datePicker.gif"
                                                         style="cursor: pointer;float: right;right:8px;margin:4px 10px 4px 10px;position: absolute;width: 16px;height: 22px;"
                                                         align="absmiddle">
                                                    <input id="buildYear" name="buildYear" class="form-control"
                                                           type="text" style="cursor: pointer;" placeholder="" readonly
                                                           onClick="WdatePicker({dateFmt:'yyyyMM',alwaysUseStartDate:true})">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <fieldset id="city_china">
                                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-md-4 control-label">发起地市：</label>

                                                    <div class="col-md-8">
                                                        <select class="form-control" name="eparchyCode" id="eparchyCode">
                                                            <wm:option typeId="AREA_CODE" isFull="true"/>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div class="text-right">
                                        <button type="button" class="btn green" onclick="selectList()">查询
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
                                <span class="caption-subject font-green-sharp bold uppercase">宽带质量考核信息</span>
                            </div>
                            <div class="actions btn-set">
                                <%--<button class="btn green-haze btn-circle" onclick="showAddUser()"><i--%>
                                <%--class="fa fa-check"></i>添加--%>
                                <%--</button>--%>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <table id="table" class="table table-striped table-bordered table-hover"
                                   data-toggle="table"
                                   data-url="${rootPath}/reportCon/qryKdzbPingjiaList"
                                   data-method="post"
                                   data-content-type="application/x-www-form-urlencoded"
                                   data-query-params="queryParams"
                                   data-pagination="true"
                                   data-side-pagination="server"
                                   data-page-list="[5, 10, 20, 50, 200]"
                                   data-show-refresh="true" <%--显示刷新按钮--%>
                                   data-show-toggle="true" <%--显示卡片视图--%>
                                   data-show-pagination-switch="true"<%--显示“隐藏分页”按钮--%>
                                   data-show-columns="true"<%--显示列选项--%>
                                   <%--data-search="true"--%>
                                   data-search-align="left">
                                <thead>
                                <tr>
                                    <%--<th  data-radio="true"></th>--%>
                                    <%-- <th data-formatter="rowNumFormatter">序号</th>--%>
                                    <th data-field="REQUIRE_ID" data-formatter="operateFormatter" >需求编码</th>
                                    <th data-field="REQUIRE_NAME" ><label style="min-width: 100px;"></label>需求名称<label style="min-width: 100px;"></label></th>
                                        <th data-field="CREATE_AREA_CODE" >地市编码</th>
                                        <th data-field="CREATE_AREA_NAME" >地市名称</th>
                                        <th data-field="CREATE_GRID_NO" >网格编码</th>
                                        <th data-field="CREATE_GRID_NAME" >网格名称</th>
                                        <th data-field="CREATE_USER_ID" >创建人ID</th>
                                        <th data-field="CREATE_USER_NAME" >创建人名称</th>
                                        <th data-field="SPECIALTY_ONE" >一级专业线</th>
                                        <th data-field="SPECIALTY_TWO" >二级专业线</th>
                                        <th data-field="SPECIALTY_THREE" >三级专业线</th>
                                        <%--<th data-field="TOTAL_SCORE" >总分数</th>--%>
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
<div id="detailList" class="modal container fade" tabindex="-1" style="width: 1200px;">
</div>
</body>
</html>
