




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
  //  window.location.href = rootPath + "/orderInfoCon/forwardOrderInfoNone.htm?orderNum="+orderNum+"&workInstId="+workInstId;
}