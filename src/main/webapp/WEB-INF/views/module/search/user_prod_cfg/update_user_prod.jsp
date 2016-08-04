<%@ page contentType="text/html;charset=UTF-8" %>
<div class="row">
    <div class="col-md-12">
        <div class="portlet light" >
            <div class="portlet-title">
                <div class="caption">
                  <span class="caption-subject font-green-sharp bold uppercase">
                    <i class="fa fa-gift"></i> 用户产品更新
                  </span>
                </div>
                <div class="tools">
                    <a href="javascript:;" class="collapse">
                    </a>
                </div>
            </div>
            <div class="portlet-body form">
                <!-- BEGIN FORM-->
                <form action="javascript:;" id="updateObjForm" class="form-horizontal" method="post">
                    <input type="hidden" id="ID" name="ID" VALUE="${obj.ID}">
                    <div class="form-body" >
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            你有某种形式的错误,请检查下面的输入框!
                        </div>
                        <div class="alert alert-success display-hide">
                            <button class="close" data-close="alert"></button>
                            输入内容验证成功!
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label col-md-3"><span class="required"> * </span>产品名称：</label>
                                    <div class="col-md-8">
                                        <div class="input-icon right">
                                            <i class="fa"></i>
                                            <input type="text" class="form-control" id="PROD_NAME" name="PROD_NAME" validate="{required:true}" value="${obj.PROD_NAME}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label col-md-3"><span class="required"> * </span>产品类型：</label>
                                    <div class="col-md-8">
                                        <div class="input-icon right">
                                            <i class="fa"></i>
                                            <input type="text" class="form-control" id="PROD_TYPE" name="PROD_TYPE" validate="{required:true,number:true}" value="${obj.PROD_TYPE}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </form>
                <!-- END FORM-->
                <div class="form-actions">
                    <div class="row">
                        <div class="col-md-offset-5 col-md-5">
                            <button type="button" data-loading-text="稍等"  onclick="updateObjForm(this,'/userProdController/updateUserProdObj?ID=${obj.ID}')" class="btn blue">提交</button>
                            <button type="button" class="btn default" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
