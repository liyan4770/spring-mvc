

/**
 * 点击单号跳转到详细信息
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
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
    window.location.href = rootPath + "/orderInfoCon/forwardOrderInfoNone.htm?orderNum="+orderNum+"&workInstId="+workInstId;
}

function jindutiaozhanshi(value, rows,index) {
    var thisSchedule = rows.thisWeeklyNum;
    var ji= "<div class='progress '>"+
            "<div class='progress-bar progress-bar-success'  style='width:"+thisSchedule+"%;min-width:2em;'>"+
            "<span >"+
            thisSchedule+"%</span>"+
            "</div>"+
            "</div>";
    return ji;
}