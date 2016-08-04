var zTree;
var setting = {
    view: {
        dblClickExpand: false
    },
    data: {
        key: {
            name: "departName"
        },
        simpleData: {
            enable: true,
            idKey: "departNo",
            pIdKey: "parentDepartNo",
            rootPId: 1

        }
    },
    callback: {
        onClick: onClick
    }
};
function onClick(e, treeId, treeNode) {
    var treeDepartNo = treeNode.departNo;
    selectDepartId(treeId, treeNode, treeDepartNo);
}
function selectDepartId(treeId, treeNode, treeDepartNo) {
    if (!treeNode.isParent) {
        var v_name = treeNode.departName;
        var v_id = treeNode.departNo;
        $("#departName").val(v_name);
        $("#departNo").attr("value", v_id);
    }
}

$("#getCityTree").addClass("container2");

$(function () {
    Metronic.init();
    Layout.init();
    initPage();
    $("#cityId").wmselect2({
        "tt": "city2Id",
        "key": "CITY_CODE",
        "name": "CITY_NAME",
        "wmtable": "TM_CITY",
        "wmwhere": "PARENT_CITY_CODE"
    });
});

function showMenu() {
    var cityObj = $("#departName");
    var cityOffset = $("#departName").offset();
    $("#menuContent").css({
        left: cityOffset.left + "px",
        top: cityOffset.top + cityObj.outerHeight() + "px"
    }).slideDown("fast");

    $("body").bind("mousedown", onBodyDown);
}
function onBodyDown(event) {
    if (!(event.target.id == "departName" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length > 0)) {
        hideMenu();
    }
}
function hideMenu() {
    $("#menuContent").fadeOut("fast");
    $("body").unbind("mousedown", onBodyDown);
}
function initPage() {
    $.ajax({
        url: rootPath + '/userPositionCon/selectAllDept',
        type: 'POST',
        dataType: "text", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
        ContentType: "application/json; charset=utf-8",
        success: function (data) {
            departNodes = data;
            $.fn.zTree.init($("#treeDemo"), setting, eval('(' + departNodes + ')'));
        },
        error: function (data) {
            alert("失败");
        }
    });
    $("#btnAjaxSubmit").click(function () {
        doSubmit();
    });
}

//保存cityCode到tm_user表中
function saveCityTree(el) {
    var cityCode = $("#city2Id").val();
    var parentCityCode = "";
    var departName = $("#departName").val();
    if (cityCode == "" && $("#cityId").find("option:selected").text() == "省公司") {
        cityCode = $("#cityId").val();
        parentCityCode = $("#cityCode").val();
    } else {
        parentCityCode = $("#cityId").val();
    }
    if (cityCode == "") {
        layer.msg("请选择一个地市");
        return;
    }

    if (!departName && $("#userType2").val() != "04") {
        layer.msg("请选择部门！");
        return;
    }

    $.ajax({
        url: rootPath + "/workbenchCon/updateTmUserCityCode",
        type: "POST",
        //  dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
        ContentType: "application/json; charset=utf-8",
        beforeSend: function () {
            layer.msg('处理中...', {icon: 16, shade: 0.3, shadeClose: false, time: 0});
        },
        data: {
            "cityCode": cityCode,
            "parentCityCode": parentCityCode,
            departNo: $("#departNo").val(),
            userType: $("#userType2").val()
        },
        success: function (data) {
            layer.closeAll();
            var json_p = eval(data);
            if (json_p.flag == true) {
                $(el).hide().prev().removeClass("hidden");
                layer.msg("保存成功");
            } else {
                layer.msg("保存失败");
            }

        }
    });
    $("#getCityTree").modal("hide");
}