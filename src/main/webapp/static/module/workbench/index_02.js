/**
 * 项目信息链接请求超
 * @param value
 * @param rows
 * @returns {string}
 */


function operateFormatter(value, row, index) {
    var workInstId = row.workInstId;
    var orderNum = row.orderNum;
    var i;
    if(workInstId==null||orderNum==null){
        i = null;
    }else{
        i='<a  onclickhre=viewOrderInfos("'+orderNum+'","'+workInstId+'")>'+value+'</a>'
    }
    return i;
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
/**
 * 需要修改打开浏览页面
 * @param workInstId
 */
function viewOrderInfos(orderNum,workInstId){
    var url = rootPath + "/orderInfoCon/forwardOrderInfoNone.htm?iframe=show&decorator=decorator_blank&orderNum="+orderNum+"&workInstId="+workInstId;

    //window.location.href = url;
    window.open (url, "newwindow", "height=1000, width=1300, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
}


function selectTable(){
    $('#table4').bootstrapTable("destroy");
    $('#table4').bootstrapTable({
        url: rootPath + "/constructEvolveCon/qrySupervisorEvolveList?&type="+1
    });
}

function selectTable2(){
    $('#table2').bootstrapTable("destroy");
    $('#table2').bootstrapTable({
        url: rootPath + "/scwgWorkbenchCon/selectManagerList?&type="+1
    });
}