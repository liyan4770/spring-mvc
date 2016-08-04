/**
 * 待阅、代办异步请求
 */
function waitReadAndWaitDo() {
    //查询是否为服务商，如果是接口人给服务上人员配置界面连接，不是给个人信息界面；
    $.ajax({
        url: rootPath + "/workbenchCon/queryUserFlag",
        type: "POST",
        //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
        ContentType: "application/json; charset=utf-8",
        success: function (data) {
            var id = "providerUser";
            if (data.userFlag == "1") {
                var url = rootPath + "/biddingWorkerCon/forwardPrivateBidding";
                var result = "<a href="
                    + url
                    + "><i class='icon-users'></i>服务商人员调整 </a>"
                $("#" + id).append(result);
            }

        }
    });
    //待阅
    $.ajax({
        url: rootPath + "/workbenchCon/queryWaitReadList?rescId =" + $("#resc").val(),
        type: "POST",
        //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
        ContentType: "application/json; charset=utf-8",
        success: function (data) {
            var json_p = eval(data.rows);
            var id = "Needread";
            if (json_p.length >= 0) {
                //上面显示条数
                $("#NeedreadLength").text(json_p.length);
                contentNeedReadInfo(json_p, id);
            }

        }
    });
    //待办
    $.ajax({
        url: rootPath + "/workbenchCon/queryWaitDoList?rescId =" + $("#resc").val(),
        type: "POST",
        //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
        ContentType: "application/json; charset=utf-8",
        success: function (data) {
            var id = "NeedDo";
            var json_p = eval(data.rows);
            if (json_p.length >= 0) {
                //上面显示条数
                $("#NeedDoLength").text(json_p.length);
                contentNeedDoInfo(json_p, id);
            }
        }
    });
    //提醒
    $.ajax({
        url: rootPath + "/workbenchCon/queryRemindList",
        type: "POST",
        //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
        ContentType: "application/json; charset=utf-8",
        success: function (data) {
            var id = "Remind";
            var json_p = eval(data.rows);
            if (json_p.length >= 0) {
                //上面显示条数
                $("#RemindCount").text(json_p.length);
                contentRemindInfo(json_p, id);
            }
        }
    });

    var userType = $("#userType").val();
    if ("01" == userType) {
        //联通用户名
        $.ajax({
            url: rootPath + "/workbenchCon/getUserInfo",
            type: "POST",
            //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
            ContentType: "application/json; charset=utf-8",
            success: function (data) {
                var id = "userName";
                var json_p = eval(data);
                var userName = json_p.user.userName;
                $("#" + id).append(userName);
                //判断当前登陆人是否有城市所属低
                var cityCode = json_p.user.cityCode, type = json_p.user.userType, departNo = json_p.userDepart;
                if ("0" == type) {
                    if (!cityCode || !departNo) {
                        layer.open({
                                type: 2,    //iframe弹出方式
                                shadeClose: false,      //点击遮罩层不关闭layer弹出层
                                fix: true,      //layer不随页面滚动位置
                                scrollbar: false,
                                title: false,
                                closeBtn: 0,
                                shade: 0.5,
                                area: ['80%', '80%'],
                                content: rootPath + "/workbenchCon/openCityTree?decorator=decorator_blank&userType=01"
                            }
                        );
                    }
                }


            }
        });
    } else if ("02" == userType) {
        //服务商用户名
        $.ajax({
            url: rootPath + "/workbenchCon/getWorkerInfo",
            type: "POST",
            //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
            ContentType: "application/json; charset=utf-8",
            success: function (data) {
                var id = "userNameFWS";
                var json_p = eval(data);
                var userNameFWS = json_p.user.userName;
                $("#" + id).append(userNameFWS);
                if($("#userType2").val() != "04") return;//如果不是铁塔人员登录，不进行校验归属地市
                //判断当前登陆人如果是铁塔服务商是否有城市所属低
                var cityCode = json_p.user.cityCode, type = json_p.user.userType, areaCode = json_p.user.areaCode;
                if ("1" == type && (type != null || type != "")) {
                    if (!cityCode || !areaCode) {
                        layer.open({
                                type: 2,    //iframe弹出方式
                                shadeClose: false,      //点击遮罩层不关闭layer弹出层
                                fix: true,      //layer不随页面滚动位置
                                scrollbar: false,
                                title: false,
                                closeBtn: 0,
                                shade: 0.5,
                                area: ['80%', '80%'],
                                content: rootPath + "/workbenchCon/openCityTree?decorator=decorator_blank&userType=04"
                            }
                        );
                    }
                }
            }
        });
    }
}

/**
 * 如果为服务商查询是否为接口人，给对应的服务商人员调整
 * @param json_p
 * @param contentId
 */
function providerUser(data, id) {  //json_p为数据内容 contentId 是放在ul的id
    if (data != null && data != "" && data.length > 0) {
        if (data.userFlag = 1) {
            var url = rootPath + "/biddingWorkerCon/forwardPrivateBidding";
            var result = "<li class='active'>"
                + "<a href="
                + url
                + "><i class='icon-home'></i>服务商员工 </a></li>"
            $("#" + id).append(result);
        }
    }
}
/**
 * 待阅数据插入
 * @param json_p
 * @param contentId
 */
function contentNeedReadInfo(json_p, contentId) {  //json_p为数据内容 contentId 是放在ul的id
    if (json_p != null && json_p != "" && json_p.length > 0) {
        var result = '';
        for (var i = 0; i < json_p.length; i++) { //循环数据
            var instName = json_p[i].FLOW_INST_NAME;//名称
            var jobName = json_p[i].JOB_NAME;  //状态
            var disposeDays = json_p[i].DISPOSE_DAYS;   //天数
            var state = json_p[i].COMPLETION_FLAG;  //颜色状态
            var orderNum = json_p[i].ORDER_NUM;
            var workInstId = json_p[i].WORK_INST_ID;
            var colourImg;//图片颜色
            var colourState;//图片颜色
            var url = rootPath + "/orderInfoCon/forwardOrderInfo.htm?orderNum=" + orderNum + "&workInstId=" + workInstId + "&sessionOperId=89";
            if (state == 0) {
                colourImg = "<div  class=\"label label-sm label-success\">";
                colourState = "<span class=\"label label-sm label-success\">";
            } else {
                colourImg = "<div  class=\"label label-sm label-danger\">";
                colourState = "<span class=\"label label-sm label-danger\">";
            }

            var temp = " <li>"
                + "<a href="
                + url
                + ">"
                + "      <div class=\"col1\">"
                + "      <div class=\"cont\">"
                + "       <div class=\"cont-col1\">"
                + colourImg
                + "       <i class=\"fa fa-bell-o\"></i>"
                + "       </div>"
                + "       </div>"
                + "       <div class=\"cont-col2\">"
                + "       <div class=\"desc\">"
                + instName
                + colourState
                + jobName + "</span>"
                + "       </div>"
                + "       </div>"
                + "       </div>"
                + "       </div>"
                + "       </a>"
                + "       <div class=\"col2\">"
                + "       <div class=\"date\">"
                + disposeDays + "天前"
                + "       </div>"
                + "       </div>"
                + "       </li> ";
            result = result + temp;
        }
        $("#" + contentId).append(result);
    } else {
        //暂无数据
    }
}
/**
 * 待办数据插入
 * @param json_p
 * @param contentId
 */
function contentNeedDoInfo(json_p, contentId) {  //json_p为数据内容 contentId 是放在ul的id
    if (json_p != null && json_p != "" && json_p.length > 0) {
        var result = '';
        for (var i = 0; i < json_p.length; i++) { //循环数据
            var instName = json_p[i].FLOW_INST_NAME;//名称
            var jobName = json_p[i].JOB_NAME;  //状态
            var disposeDays = json_p[i].DISPOSE_DAYS;   //天数
            var state = json_p[i].COMPLETION_FLAG;  //颜色状态
            var orderNum = json_p[i].ORDER_NUM;
            var workInstId = json_p[i].WORK_INST_ID;
            var url = rootPath + "/orderInfoCon/forwardOrderInfo.htm?orderNum=" + orderNum + "&workInstId=" + workInstId + "&sessionOperId=90";
            var colourImg;//图片颜色
            var colourState;//图片颜色
            if (state == 0) {
                colourImg = "<div  class=\"label label-sm label-success\">";
                colourState = "<span class=\"label label-sm label-success\">";
            } else {
                colourImg = "<div  class=\"label label-sm label-danger\">";
                colourState = "<span class=\"label label-sm label-danger\">";
            }
            var temp = " <li>"
                + "<a href="
                + url
                + ">"
                + "      <div class=\"col1\">"
                + "      <div class=\"cont\">"
                + "       <div class=\"cont-col1\">"
                + colourImg
                + "       <i class=\"fa fa-bell-o\"></i>"
                + "       </div>"
                + "       </div>"
                + "       <div class=\"cont-col2\">"
                + "       <div class=\"desc\">"
                + instName
                + colourState
                + jobName + "</span>"
                + "       </div>"
                + "       </div>"
                + "       </div>"
                + "       </div>"
                + "       </a>"
                + "       <div class=\"col2\">"
                + "       <div class=\"date\">"
                + disposeDays + "天前"
                + "       </div>"
                + "       </div>"
                + "       </li> ";
            result = result + temp;
        }
        $("#" + contentId).append(result);
    } else {
        //暂无数据
    }
}

/**
 * 提醒数据插入
 * @param json_p
 * @param contentId
 */
function contentRemindInfo(json_p, contentId) {  //json_p为数据内容 contentId 是放在ul的id
    if (json_p != null && json_p != "" && json_p.length > 0) {
        var result = '';
        for (var i = 0; i < json_p.length; i++) { //循环数据
            var instName = json_p[i].REMIND_INST_NAME;//名称
            var jobName = '';  //状态
            var disposeDays = json_p[i].DISPOSE_DAYS;   //天数
            var state = json_p[i].REMIND_TYPE;  //颜色状态

            //var orderNum = json_p[i].ORDER_NUM;
            var workInstId = json_p[i].REMIND_INST_ID;
            var url = "showRemind(" + workInstId + ");";
            var colourImg;//图片颜色
            var colourState;//图片颜色
            if (state == 0) {
                colourImg = "<div  class=\"label label-sm label-success\"> <i class=\"fa fa-bell-o\"></i>";
                colourState = "<span class=\"label label-sm label-success\">";
                jobName = "一般";
            } else if (state == 1) {
                colourImg = "<div  class=\"label label-sm label-warning\"> <i class=\"fa fa-bullhorn\"></i>";
                colourState = "<span class=\"label label-sm label-warning\">";
                jobName = "注意";
            } else {
                colourImg = "<div  class=\"label label-sm label-danger\"> <i class=\"fa fa-bolt\"></i>";
                colourState = "<span class=\"label label-sm label-danger\">";
                jobName = "重要";
            }

            var temp = " <li>"
                + "<a onclick="
                + url
                + ">"
                + "      <div class=\"col1\">"
                + "      <div class=\"cont\">"
                + "       <div class=\"cont-col1\">"
                + colourImg
                + "       </div>"
                + "       </div>"
                + "       <div class=\"cont-col2\">"
                + "       <div class=\"desc\">"
                + instName
                + colourState
                + jobName + "</span>"
                + "       </div>"
                + "       </div>"
                + "       </div>"
                + "       </div>"
                + "       </a>"
                + "       <div class=\"col2\">"
                + "       <div class=\"date\">"
                + disposeDays + "天前"
                + "       </div>"
                + "       </div>"
                + "       </li> ";
            result = result + temp;
        }
        $("#" + contentId).append(result);
    } else {
        //暂无数据
    }
}

function showRemind(instId) {

    var $modal = $('#update-remind');
    $('body').modalmanager('loading');

    //setTimeout(function(){
    $modal.load(rootPath + '/workbenchCon/showRemindOne?remindInstId=' + instId, '', function () {
        $modal.modal().css({
            width: '700px',
            'margin-left': function () {
                return -($(this).width() / 2);
            }
        });//给弹出中的表单添加验证
    });

}
/**
 * 公告展示
 * @param json_p
 * @param id
 * @constructor
 */
function NoticeInfo(json_p, id) {
    if (json_p != null && json_p != "" && json_p.length > 0) {
        var result = '';
        for (var i = 0; i < json_p.length; i++) { //循环数据
            var noticeTitle = json_p[i].noticeTitle;//标题
            /*var tempNoticeTile = "";
             if(noticeTitle.length>25){
             tempNoticeTile = noticeTitle.substr(0,25)+"...";
             }else{
             tempNoticeTile = noticeTitle.substr(0,25);
             }*/
            var noticeId = json_p[i].noticeId;//id
            noticeId
            var br = "";
            if (json_p.length - 1 == i) {
                br = "<br>";
            }
            var temp = "  <h4 >"
                + "       <span class=\"profile-desc-text\">"
                + "       <a onclick=\"showNotice(" + noticeId + ")\" >"
                + noticeTitle
                + "      </a></span></h4>"
                + br;
            result = result + temp;
        }
        $("#" + id).append(result);
    } else {
        //暂无数据
    }
}

function moreOne(mark) {
    $("#mark").val(mark);
}
/**
 * 点击更多跳转待办待阅（1为待办 2为待阅）
 */
function morkto() {
    var mark = $("#mark").val();
    if (mark == 1) {
        window.location.href = rootPath + "/workTaskCon/forwardWaitDoTask?sessionOperId=89";
    }
    if (mark == 2) {
        window.location.href = rootPath + "/workTaskCon/forwardWaitReadTask?sessionOperId=90";
    }
}

/**
 *  公告展示
 */
$.ajax({
    url: rootPath + "/workbenchCon/queryNoticeList",
    type: "POST",
    //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
    ContentType: "application/json; charset=utf-8",
    success: function (data) {
        var id = "notices";
        var json_p = eval(data.rows);
        if (json_p.length >= 0) {
            //上面显示条数
            NoticeInfo(json_p, id);
        }
    }
});

/**
 * 公告详情(公告循环里调用)
 */
function showNotice(id) {
    var $modal = $('#fullone');
    $('body').modalmanager('loading');
    $modal.load(rootPath + "/workbenchCon/showNotice?noticeId=" + id, '', function () {
        $modal.modal();
    });
}

/**
 * 公告下载
 */
function downTest() {
    var fileId = $("#fileId").val();
    var url = rootPath + "/workbenchCon/noticeDownLoad?fileId=" + fileId;
    window.location.href = url;
}