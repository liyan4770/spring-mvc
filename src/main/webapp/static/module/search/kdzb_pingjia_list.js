
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
 * 点击单号跳转到详细信息
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
function operateFormatter(value, row, index) {
    var requireId = row.REQUIRE_ID;
    return '<a  onclick=showReportDetail("'+requireId+'")>'+value+'</a>';
}
/**
 * 需要修改打开浏览页面
 * @param orderNum
 * @param workInstId
 */
function showReportDetail(requireId){
    var $modal = $('#detailList');
    $('body').modalmanager('loading');
    //setTimeout(function(){
    $modal.load(rootPath+'/reportCon/showkdzbDetail?requireId='+requireId, '', function(){
        $modal.modal().css({
            width:'1200px',
            'margin-left': function () {
                return -($(this).width() / 2);
            }
        });//给弹出中的表单添加验证
    });
   // window.location.href = rootPath + "/orderInfoCon/forwardOrderInfoNone.htm?orderNum="+orderNum+"&workInstId="+workInstId;
}
