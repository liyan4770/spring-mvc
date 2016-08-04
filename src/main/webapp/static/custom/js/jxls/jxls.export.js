/**
 * Created by zhulijun on 2015/6/1.
 */
//调用样例
//function exportTo(){
//    var statementId="com.watchme.system.user.dao.TmUserMapper.selectMapList";
//    exportJxls("tm_user.xlsx","用户导出.xlsx",statementId,$("#exp").serialize());
//}
function exportJxls(templateName,expName,statementId,params){
    var exportURL=rootPath+"/myBaseCon/exportJxls?tempName="+templateName+"&expName="+expName+"&statementId="+statementId+"&"+params;
    if(confirm("您确定导出吗？")){
        $('#expTemp').remove();
        $("<div id='expTemp'></div>").appendTo($(document.body)).css('display','none')
            .append('<iframe name="IF_4down" width="0" height="0"></iframe>')
            .append('<form id="exportform" action="'+ exportURL +'" method="post" target="IF_4down" accept-charset="UTF-8">'+
            '<input type="hidden" id="reportName" name="reportName"/>'+
            '<input type="hidden" id="periodText_" name="periodText_"/>'+
            '<input type="hidden" id="headerJSON" name="headerJSON"/></form>');
        $("#reportName").val(expName);
        document.charset = "UTF-8";
        $("#exportform").submit().remove();
    };
}