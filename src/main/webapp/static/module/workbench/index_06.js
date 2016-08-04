

function operateFormatter(value, row, index) {
    var workInstId = row.WORK_INST_ID;
    var orderNum = row.ORDER_NUM;
    return '<a  onclick=viewOrderInfos("'+orderNum+'","'+workInstId+'")>'+value+'</a>';
}
/**
 * 打开浏览页面
 * @param workInstId
 */
function viewOrderInfos(orderNum,workInstId){
   // window.location.href = rootPath + "/orderInfoCon/forwardOrderInfoNone.htm?orderNum="+orderNum+"&workInstId="+workInstId;
}

function openSheJi(value, row, index) {
    var projectNo = row.PROJECT_NO;
    //var providerType = "03";
    var i;
    if(value==0||value=="0"){
        return 0;
    }else{
        return '<a href="javascript:void(0);" projectNo="'+projectNo+'" onclick="openProviderSign(this,3)">' + value + '</a>';
    }
}
function openShiGong(value, row, index) {
    var projectNo = row.PROJECT_NO;
    var providerType = "01";
    if(value==0||value=="0"){
        return 0;
    }else{
        return '<a href="javascript:void(0);" projectNo="'+projectNo+'" onclick="openProviderSign(this,3)">' + value + '</a>';
    }
}
function openJianLi(value, row, index) {
    var projectNo = row.PROJECT_NO;
    var providerType = "02";
    var i;
    if(value==0||value=="0"){
        i = 0;
    }else{
        i= '<a href="javascript:void(0);" projectNo="'+projectNo+'" onclick="openProviderSign(this,3)">' + value + '</a>';
    }
    return i;
}

function openProviderSign(obj,index){
    var projectNo=$(obj).attr("projectNo");
    var providerType="0"+index;
    window.location.href = rootPath + "/providerSignCon/forwardProviderSign.htm?projectNo="+projectNo+"&providerType="+providerType;
}

function selectTable(){
    $('#table').bootstrapTable("destroy");
    $('#table').bootstrapTable({
        url: rootPath + "/scwgWorkbenchCon/selectConstructList?&type="+1
    });
}