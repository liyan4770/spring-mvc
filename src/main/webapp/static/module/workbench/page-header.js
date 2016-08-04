var pageHeader = function () {
    return {
        init: function () {
            /*****************************************************-**************************************************************/
            /******************************************************查询所有待办信息(右上角快捷方式)********************************/
            /******************************************************-*************************************************************/

//待办
            $.ajax({
                url: rootPath + "/workbenchCon/queryWaitDoList",
                type: "POST",
                //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
                ContentType: "application/json; charset=utf-8",
                success: function (data) {
                    var id = "views_1";
                    var json_p = eval(data.rows);
                    if (json_p.length >= 0) {
                        //上面显示条数
                        $("#viewsLength_1").text(json_p.length);
                        $("#viewsLength_2").text(json_p.length);
                        NeedDoInfo(json_p, id);
                    }
                }
            });

            function NeedDoInfo(json_p, contentId) {  //json_p为数据内容 contentId 是放在ul的id
                if (json_p != null && json_p != "" && json_p.length > 0) {
                    var result = '';
                    for (var i = 0; i < json_p.length; i++) { //循环数据
                        var instName = json_p[i].FLOW_INST_NAME;//名称
                        var jobName = json_p[i].JOB_NAME;  //状态
                        var disposeDays = json_p[i].DISPOSE_DAYS;   //天数
                        var orderNum = json_p[i].ORDER_NUM;
                        var workInstId = json_p[i].WORK_INST_ID;
                        var url = rootPath + "/orderInfoCon/forwardOrderInfo.htm?orderNum=" + orderNum + "&workInstId=" + workInstId;
                        var temp = ' <li>'
                            + '<div class=\"col2\">'
                            + '<div class=\"date\">'
                            + disposeDays + "天前"
                            + '</div></div>'
                            + '<a href='
                            + url
                            + '>'
                            + '<div class=\"cont-col2\">'
                            + "<div class=\"desc\">"
                            + '<span class=\"details\">'
                            + instName
                            + '</span></div></div></a>'
                            + '</li>';
                        result = result + temp;
                    }
                    $("#" + contentId).append(result);
                } else {
                    //暂无数据
                }
            }


            /*********************************************-*******************************************************/
            /*************************************动态菜单加载*****************************************************/
            /*********************************************-*******************************************************/

            var indentStr1 = "";
            var indentStr2 = "";
            var indentStr3 = "";
            var indentStr4 = "";
            var indentStr5 = "";
            var indentStr6 = "";
            var indentStr7 = "";
            var menus = "";
            $.ajax({
                url: rootPath + "/userMenuCon/selectUserMenuTree",
                data: {},
                type: 'POST',
                dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
                ContentType: "application/json; charset=utf-8",
                success: function (data) {
                    menus = data;
                    menus_data(menus);
                    commonIndexFun();
                },
                error: function (data) {
                    //    alert("失败");
                }
            });

            function menus_data(menus) {
                if (menus.length != 0) {
                    //判断资源不小于0
                    for (var i = 0; i < menus.length; i++) {
                        if (menus[i].id == '2') {
                            addNode2(menus[i].children);
                        }
                        if (menus[i].id == '3') {
                            addNode3(menus[i].children);
                        }
                        if (menus[i].id == '4') {
                            addNode4(menus[i].children);
                        }
                        if (menus[i].id == '5') {
                            addNode5(menus[i].children);
                        }
                        if (menus[i].id == '6') {
                            addNode6(menus[i].children);
                        }
                        if (menus[i].id == '9') {
                            addNode8(menus[i].children);
                        }
                        if (menus[i].id == '8') {
                            addNode7(menus[i].children);
                        }
                    }
                }
                $("#menu_1").after(indentStr1);
                $("#menu_2").after(indentStr2);
                $("#menu_3").after(indentStr3);
                $("#menu_4").after(indentStr4);
                // $("#menu_5").after(indentStr5);
                $("#menu_6").after(indentStr6);
                $("#menu_7").after(indentStr7);
            }

            /**********************添加业务视图菜单start*******************************/
            function addNode2(menu_data) {
                if (menu_data != null && menu_data.length != 0) {
                    //判断资源不小于0
                    for (var j = 0; j < menu_data.length; j++) {
                        if (menu_data[j].state == "0") {
                            //判断是否是文件夹
                            var nodeData = menu_data[j].children;
                            indentStr1 = indentStr1
                                + " <li class=\" dropdown-submenu\">"
                                + " <a href=\"javascript:;\">"
                                + " <i class="
                                + menu_data[j].attributes.icon
                                + "></i> "
                                + menu_data[j].text
                                + " </a>"
                                + " <ul class=\"dropdown-menu\">"
                            if (nodeData != "" && nodeData != null) {
                                //如果有孩子
                                new addNode2(nodeData);
                            }
                            indentStr1 = indentStr1 + "</ul></li>";
                        } else {
                            addData2(menu_data[j]);
                        }
                    }
                }
            };
            function addData2(data) {
                var addresc = "";
                if (data.attributes.url != "#") {
                    addresc = addresc + "?sessionOperId=" + data.id;
                }
                indentStr1 = indentStr1
                    + "<li class=\" \"> <a class='commonIndexMenuA' href=\""
                    + rootPath + "/"
                    + data.attributes.url
                    + addresc
                    + "\">"
                    + data.text
                    + " </a>"
                    + " </li>";
            };
            /***************************添加业务视图菜单end**************************************/
            /**********************添加综合查询菜单start*******************************/
            function addNode3(menu_data) {
                if (menu_data != null && menu_data.length != 0) {
                    //判断资源不小于0
                    for (var j = 0; j < menu_data.length; j++) {
                        if (menu_data[j].state == "0") {
                            //判断是否是文件夹
                            var nodeData = menu_data[j].children;
                            indentStr2 = indentStr2
                                + " <div class=\"col-md-6\">"
                                + " <ul class=\"mega-menu-submenu\">"
                                + " <li>"
                                + " <h3>"
                                + menu_data[j].text
                                + " </h3>"
                                + " </li>"
                            if (nodeData != "" && nodeData != null) {
                                //如果有孩子
                                new addNode3(nodeData);
                            }
                            indentStr2 = indentStr2 + "</ul></div>";
                        } else {
                            addData3(menu_data[j]);
                        }
                    }
                }
            };
            function addData3(data) {
                var addresc = "";
                if (data.attributes.url != "#") {
                    addresc = addresc + "?sessionOperId=" + data.id;
                }
                indentStr2 = indentStr2
                    + "<li class=\" \"> <a class='commonIndexMenuA' href=\""
                    + rootPath + "/"
                    + data.attributes.url
                    + addresc
                    + "\">"
                    + "<i class=\"fa fa-angle-right\"></i>"
                    + data.text
                    + " </a>"
                    + " </li>";

            };
            /***************************添加综合查询菜单end**************************************/
            /**********************添加规则引擎菜单start*******************************/
            function addNode4(menu_data) {
                if (menu_data != null && menu_data.length != 0) {
                    //判断资源不小于0
                    for (var j = 0; j < menu_data.length; j++) {
                        if (menu_data[j].state == "0") {
                            //判断是否是文件夹
                            var nodeData = menu_data[j].children;
                            indentStr3 = indentStr3
                                + " <li class=\" dropdown-submenu\">"
                                + " <a href=\"javascript:;\">"
                                + " <i class="
                                + menu_data[j].attributes.icon
                                + "></i> "
                                + menu_data[j].text
                                + " </a>"
                                + " <ul class=\"dropdown-menu\">"
                            if (nodeData != "" && nodeData != null) {
                                //如果有孩子
                                new addNode4(nodeData);
                            }
                            indentStr3 = indentStr3 + "</ul></li>";
                        } else {
                            addData4(menu_data[j]);
                        }
                    }
                }
            };
            function addData4(data) {
                var addresc = "";
                if (data.attributes.url != "#") {
                    addresc = addresc + "?sessionOperId=" + data.id;
                }
                indentStr3 = indentStr3
                    + "<li class=\" \"> <a class='commonIndexMenuA' href=\""
                    + rootPath + "/"
                    + data.attributes.url
                    + addresc
                    + "\">"
                    + data.text
                    + " </a>"
                    + " </li>";
            };

            /*if (menu_data != null && menu_data.length != 0) {
             //判断资源不小于0
             for (var j = 0; j < menu_data.length; j++) {
             if (menu_data[j].state == "0") {
             //判断是否是文件夹
             var nodeData = menu_data[j].children;
             indentStr3 = indentStr3
             + " <li class=\" dropdown-submenu\">"
             + " <a href=\"javascript:;\">"
             + " <i class="
             + menu_data[j].attributes.icon
             + "></i> "
             + menu_data[j].text
             + "</a>"
             + "<ul class=\"dropdown-menu\">"
             if (nodeData != "" && nodeData != null) {
             //如果有孩子
             new addNode4(nodeData);
             }
             indentStr3 = indentStr3 + "</ul></li>";
             } else {
             addData4(menu_data[j]);
             }
             }
             }
             };
             function addData4(data) {
             indentStr3 = indentStr3
             + "<li class=\" \"> <a href=\""
             + rootPath+"/"
             + data.attributes.url
             + "\">"
             + "<i class="
             + data.attributes.icon
             + "></i>"
             + data.text
             + " </a>"
             + " </li>";
             };*/
            /***************************添加规则引擎菜单end**************************************/
            /**********************添加标准模板库菜单start*******************************/
            function addNode5(menu_data) {
                if (menu_data != null && menu_data.length != 0) {
                    //判断资源不小于0
                    for (var j = 0; j < menu_data.length; j++) {
                        if (menu_data[j].state == "0") {
                            //判断是否是文件夹
                            var nodeData = menu_data[j].children;
                            indentStr4 = indentStr4
                                + " <li class=\" dropdown-submenu\">"
                                + " <a href=\"javascript:;\">"
                                + " <i class="
                                + menu_data[j].attributes.icon
                                + "></i> "
                                + menu_data[j].text
                                + " </a>"
                                + " <ul class=\"dropdown-menu\">"
                            if (nodeData != "" && nodeData != null) {
                                //如果有孩子
                                new addNode5(nodeData);
                            }
                            indentStr4 = indentStr4 + "</ul></li>";
                        } else {
                            addData5(menu_data[j]);
                        }
                    }
                }
            };
            function addData5(data) {
                var addresc = "";
                if (data.attributes.url != "#") {
                    addresc = addresc + "?sessionOperId=" + data.id;
                }
                indentStr4 = indentStr4
                    + "<li class=\" \"> <a class='commonIndexMenuA' href=\""
                    + rootPath + "/"
                    + data.attributes.url
                    + addresc
                    + "\">"
                    + data.text
                    + " </a>"
                    + " </li>";
            };
            /*function addNode5(menu_data) {
             if (menu_data != null && menu_data.length != 0) {
             //判断资源不小于0
             for (var j = 0; j < menu_data.length; j++) {
             if (menu_data[j].state == "1") {
             //判断是否是文件夹
             var nodeData = menu_data[j].children;
             indentStr4 = indentStr4
             + " <li>"
             + " <a href=\""
             + rootPath+"/"
             + menu_data[j].attributes.url
             + ">"
             + "<i class=\"fa fa-angle-right\"></i>"
             + menu_data[j].text
             if (nodeData != "" && nodeData != null) {
             //如果有孩子
             new addNode5(nodeData);
             }
             indentStr4 = indentStr4 + "</ul></li>";
             } else {
             addData5(menu_data[j]);
             }
             }
             }
             };
             function addData5(data) {
             indentStr4 = indentStr4
             + "<li class=\" \"> <a href=\""
             + rootPath+"/"
             + data.attributes.url
             + "\">"
             + "<i class=\"fa fa-angle-right\"></i> "
             + data.text
             + " </a>"
             + " </li>";
             };*/
            /***************************添加标准模板库菜单end**************************************/
            /**********************添加统计报表菜单start*******************************/
            function addNode6(menu_data) {
                if (menu_data != null && menu_data.length != 0) {
                    //判断资源不小于0
                    for (var j = 0; j < menu_data.length; j++) {
                        if (menu_data[j].state == "0") {
                            //判断是否是文件夹
                            var nodeData = menu_data[j].children;
                            indentStr5 = indentStr5
                                + " <li class=\" dropdown-submenu\">"
                                + " <a href=\"javascript:;\">"
                                + " <i class="
                                + menu_data[j].attributes.icon
                                + "></i>"
                                + menu_data[j].text
                                + " </a>"
                                + "<ul class=\"dropdown-menu\">"
                            if (nodeData != "" && nodeData != null) {
                                //如果有孩子
                                new addNode6(nodeData);
                            }
                            indentStr5 = indentStr5 + "</ul></li>";
                        } else {
                            addData6(menu_data[j]);
                        }
                    }
                }
            };
            function addData6(data) {
                var addresc = "";
                if (data.attributes.url != "#") {
                    addresc = addresc + "?sessionOperId=" + data.id;
                }
                indentStr5 = indentStr5
                    + "<li class=\" \"> <a class='commonIndexMenuA' href=\""
                    + rootPath + "/"
                    + data.attributes.url
                    + addresc
                    + "\">"
                    + data.text
                    + " </a>"
                    + " </li>";
            };

            function addNode7(menu_data) {
                if (menu_data != null && menu_data.length != 0) {
                    //判断资源不小于0
                    for (var j = 0; j < menu_data.length; j++) {
                        if (menu_data[j].state == "0") {
                            //判断是否是文件夹
                            var nodeData = menu_data[j].children;
                            indentStr6 = indentStr6
                                + " <li class=\" dropdown-submenu\">"
                                + " <a href=\"javascript:;\">"
                                + " <i class="
                                + menu_data[j].attributes.icon
                                + "></i>"
                                + menu_data[j].text
                                + " </a>"
                                + "<ul class=\"dropdown-menu\">"
                            if (nodeData != "" && nodeData != null) {
                                //如果有孩子
                                new addNode7(nodeData);
                            }
                            indentStr6 = indentStr6 + "</ul></li>";
                        } else {
                            addData7(menu_data[j]);
                        }
                    }
                }
            };
            function addData7(data) {
                var addresc = "";
                if (data.attributes.url != "#") {
                    addresc = addresc + "?sessionOperId=" + data.id;
                }
                indentStr6 = indentStr6
                    + "<li class=\" \"> <a class='commonIndexMenuA' href=\""
                    + rootPath + "/"
                    + data.attributes.url
                    + addresc
                    + "\">"
                    + data.text
                    + " </a>"
                    + " </li>";
            };

            function addNode8(menu_data) {
                if (menu_data != null && menu_data.length != 0) {
                    //判断资源不小于0
                    for (var j = 0; j < menu_data.length; j++) {
                        if (menu_data[j].state == "0") {
                            //判断是否是文件夹
                            var nodeData = menu_data[j].children;
                            indentStr7 = indentStr7
                                + " <li class=\" dropdown-submenu\">"
                                + " <a href=\"javascript:;\">"
                                + " <i class="
                                + menu_data[j].attributes.icon
                                + "></i>"
                                + menu_data[j].text
                                + " </a>"
                                + "<ul class=\"dropdown-menu\">"
                            if (nodeData != "" && nodeData != null) {
                                //如果有孩子
                                new addNode8(nodeData);
                            }
                            indentStr6 = indentStr6 + "</ul></li>";
                        } else {
                            addData8(menu_data[j]);
                        }
                    }
                }
            };
            function addData8(data) {
                var addresc = "";
                if (data.attributes.url != "#") {
                    addresc = addresc + "?sessionOperId=" + data.id;
                }
                indentStr7 = indentStr7
                    + "<li class=\" \"> <a class='commonIndexMenuA' href=\""
                    + rootPath + "/"
                    + data.attributes.url
                    + addresc
                    + "\">"
                    + data.text
                    + " </a>"
                    + " </li>";
            };
            /***************************添加统计报表菜单end**************************************/

            function commonIndexFun() {
                var url = location.pathname + location.search;
                $(".commonIndexMenuA").each(function () {
                    if ($(this).attr("href") == url) commonIndexFunSet(this);
                });
            }

            function commonIndexFunSet(el) {
                $(el).closest("li").addClass("active");
                if ($(el).closest("li").length > 0)
                    commonIndexFunSet($(el).closest("li").parent());
            }
        },
        openPim2: function (userId) {
            /*$.ajax({
                url: rootPath + '/sso/loginPim2',
                type: 'POST',
                async: false,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    if (data.flag == "1") {
                        window.location = 'http://133.193.9.27:8003/pim/pages/HomePageCon/forwardHomePage.htm';
                    }
                }
            });*/
            layer.msg('加载中...', {icon: 16, shade: 0.3, shadeClose: false, time: 0});
            window.location = pim2RootPath+'/pages/login/LoginCon/pim3Login.htm?staffId=' + userId;
        }
    }
}();

/**
 * 启动加载头上的菜单
 */
pageHeader.init();