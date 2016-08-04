
/**
 * 分页插件参数及表单参数回传
 * @param params
 * @returns {*}
 */
function queryParams(params) {
    return getQueryParams(params, "searchForm");
}
/**
 * 表单信息reset
 */
function reset(){
    $('#searchForm').resetForm();
}

function selectList() {
    $('#table').bootstrapTable('refresh');
}

/**
 * 页面信息新增
 */
function showAddObjForm(showUrl) {
    var $modal = $('#add-modal');
    $('body').modalmanager('loading');
    setTimeout(function(){
        $modal.load(rootPath+showUrl, '', function(){
            $modal.modal();
            initPopupValid("addObjForm");//给弹出中的表单添加验证
        });
    }, 300);
}

function addObjForm(btn,addurl){
    if(!$("#addObjForm").valid()) return;
    $(btn).button('loading');//屏蔽提交按钮，防止二次提交
    var url = rootPath+addurl;
    $('#addObjForm').ajaxSubmit({
        type:"post",//可选get
        url: url,
        dataType:"json",//服务器返回的数据类型 可选XML ,Json jsonp script html text等
        success:function(data,textstatus) {
            if(data.flag==1){
                layer.msg(data.msg);
                $('#add-modal').modal("hide");
                $("#table").bootstrapTable('refresh');//刷新表格
            }else if(data.flag==0){
                layer.msg(data.msg);
            }
        },
        error:function(data,textstatus){
            layer.msg('操作失败'+data.responseText, {icon: 7});
        }
    });
}

/**
 * 页面信息修改
 */
function showUpdateObjForm(showUrl) {
    var selections = $('#table').bootstrapTable('getSelections');
    if(selections.length == 0){
        layer.msg('请选择一行数据进行操作！', function(){});
        return;
    }
    var $modal = $('#update-modal');
    $('body').modalmanager('loading');
    setTimeout(function(){
    $modal.load(rootPath+showUrl+'?ID='+selections[0].ID, '', function(){
        $modal.modal();
        initPopupValid("updateObjForm");//给弹出中的表单添加验证
    });
    }, 300);
}
/**
 * 子页面点击提交后的回调函数
 */
function updateObjForm(btn,updateUrl){
    if(!$("#updateObjForm").valid()) return;
    $(btn).button('loading');//屏蔽提交按钮，防止二次提交
    var url = rootPath+updateUrl;
    $('#updateObjForm').ajaxSubmit({
        type:"post",//可选get
        url: url,
        dataType:"json",//服务器返回的数据类型 可选XML ,Json jsonp script html text等
        success:function(data,textstatus) {
            if(data.flag==1){
                layer.msg(data.msg);
                $('#update-modal').modal("hide");
                $("#table").bootstrapTable('refresh');//刷新表格
            }else if(data.flag==0){
                layer.msg(data.msg);
            }
        },
        error:function(data,textstatus){
            layer.msg('操作失败'+data.responseText, {icon: 7});
        }
    });
}


/**
 * 删除用户
 */
function deleteObjForm(delUrl) {
    var selections = $('#table').bootstrapTable('getSelections');
    if(selections.length == 0){
        layer.msg('请选择数据进行操作！', function(){});
        return;
    }

    var id = selections[0].ID;
    layer.confirm("确定删除么？",function() {
        $.ajax({
            type: "post",//可选get
            url: rootPath + delUrl,
            data: {ID: id},
            async: false,
            dataType: "json",//服务器返回的数据类型 可选XML ,Json jsonp script html text等
            success: function (data, textstatus) {
                if (data.flag == 1) {
                    layer.msg(data.msg, {icon: 1, time: 500});
                    $("#table").bootstrapTable('refresh');//刷新表格
                } else if (data.flag == 0) {
                    layer.msg(data.msg);
                }
            },
            error: function (data, textstatus) {
                layer.msg(data.responseText);
            }
        });
    });
}

