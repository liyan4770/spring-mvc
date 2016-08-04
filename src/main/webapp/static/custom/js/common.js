//不可动
$(function () {
    //设置ajax请求全局默认设置
    $.ajaxSetup({
        async: true,
        traditional: true,
        dataType: "json",
        //type: "POST",
        cache: false, //关闭AJAX缓存
        error: function (jqXHR, textStatus, errorThrown) {
            var msg = $.parseJSON(jqXHR.responseText).error;
            alert(msg);
        },
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        complete: function (XMLHttpRequest, textStatus) {
            //通过XMLHttpRequest取得响应头，sessionstatus
            var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus");
            if (sessionstatus == "timeout") {
                top.location.href = rootPath + "/login";
            }
            XMLHttpRequest = null;
        }
    });
});


/**可以通过定位的方式，在input-icon类div中添加：data-fix="-5,80"，前面数字为上下坐标：像素值，后面为左右坐标：%比值，且都能为负数；
 * 如果不添加，则默认为-20，60
 *
 *
 * 校验方式一（有error提示）
 * @param formId
 */
function initValid(formId) {
    var form = $('#' + formId);
    var error = $('.alert-danger', form);
    var success = $('.alert-success', form);

    form.validate({
        errorElement: 'span', //错误信息展示标签
        errorClass: 'help-block help-block-error', // 错误标签class类
        focusInvalid: false, // do not focus the last invalid input
        ignore: "",  // 验证所有的表单，包括隐藏input
        debug: false, //debug
        invalidHandler: function (event, validator) { //display error alert on form submit
            success.hide();
            error.show();
            Metronic.scrollTo(error, -200);
        },

        errorPlacement: function (error, element) { // render error placement for each input type
            var icon = $(element).parent('.input-icon').children('i');
            icon.removeClass('fa-check').addClass("fa-warning");
            icon.attr("title", error.text());

            var inputxy = $.trim($(element).parent('.input-icon').attr("data-fix"));
            var x = 0;
            var y = 0;
            if (inputxy != "" && inputxy != null) {
                x = parseInt(inputxy.split(",")[0]);
                y = parseInt(inputxy.split(",")[1]);
            }

            if (error.text() != "" && error.text() != null) {
                var st = $(element).parent('.input-icon');
                if (st.find(".layui-layer-tips").length > 0) {
                    st.find(".layui-layer-tips").remove();
                }
                $(element).parent(".input-icon").append(
                    "<div class=\"layui-layer layui-anim layui-layer-tips\" type=\"tips\" contype=\"object\" " +
                    "style=\"position: absolute;top:" + (x == 0 ? "-20" : x) + "px!important;left:" + (y == 0 ? "60" : y) + "%!important;min-width:70px;\"><div class=\"layui-layer-content\">" + error.text() + "<i class=\"layui-layer-TipsG layui-layer-TipsR\"></i>" +
                    "</div><span class=\"layui-layer-setwin\"></span></div>"
                );
            }
        },

        highlight: function (element) { // hightlight error inputs
            $(element)
                .closest('.form-group').removeClass("has-success").addClass('has-error'); // set error class to the control group
        },

        unhighlight: function (element) { // revert the change done by hightlight

        },

        success: function (label, element) {
            var icon = $(element).parent('.input-icon').children('i');
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
            icon.removeClass("fa-warning").addClass("fa-check");
            var st = $(element).parent('.input-icon');
            if (st.find(".layui-layer-tips").length > 0) {
                st.find(".layui-layer-tips").remove();
            }
        },

        submitHandler: function (form) {
            error.hide();
            success.show();
            // form.submit();
        }
    });
}


/**
 * 校验方式二 错误信息在input外,也可以通过定位的方式，在input-icon类div中添加：data-fix="-5,80"，前面数字为上下坐标：像素值，后面为左右坐标：%比值，且都能为负数；
 * 如果不添加，则默认为-20，60
 * @param formId
 */
function initPopupValid(formId) {
    var form = $('#' + formId);

    form.validate({
        errorElement: 'span', //default input error message container
        errorClass: 'help-block help-block-error', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: "",  // validate all fields including form hidden input

        WMHandler: function () {
            if ($(".layui-layer-tips").length > 0)
                Metronic.scrollTo($(".layui-layer-tips"), 0);
        },

        errorPlacement: function (error, element) { // render error placement for each input type
            var icon = $(element).parent('.input-icon').children('i');
            icon.removeClass('fa-check').addClass("fa-warning");
            icon.attr("title", error.text());

            var inputxy = $.trim($(element).parent('.input-icon').attr("data-fix"));
            var x = 0;
            var y = 0;
            if (inputxy != "" && inputxy != null) {
                x = parseInt(inputxy.split(",")[0]);
                y = parseInt(inputxy.split(",")[1]);
            }

            if (error.text() != "" && error.text() != null) {
                var st = $(element).parent('.input-icon');
                if (st.find(".layui-layer-tips").length > 0) {
                    st.find(".layui-layer-tips").remove();
                }
                $(element).parent(".input-icon").append(
                    "<div class=\"layui-layer layui-anim layui-layer-tips\" type=\"tips\" contype=\"object\" " +
                    "style=\"position: absolute;top:" + (x == 0 ? "-20" : x) + "px!important;left:" + (y == 0 ? "60" : y) + "%!important;min-width:110px;\"><div class=\"layui-layer-content\">" + error.text() + "<i class=\"layui-layer-TipsG layui-layer-TipsR\"></i>" +
                    "</div><span class=\"layui-layer-setwin\"></span></div>"
                );
            }
        },

        highlight: function (element) { // hightlight error inputs
            $(element)
                .closest('.form-group').removeClass("has-success").addClass('has-error'); // set error class to the control group
        }
        ,

        unhighlight: function (element) { // revert the change done by hightlight

        }
        ,

        success: function (label, element) {
            var icon = $(element).parent('.input-icon').children('i');
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
            icon.removeClass("fa-warning").addClass("fa-check");
            var st = $(element).parent('.input-icon');
            if (st.find(".layui-layer-tips").length > 0) {
                st.find(".layui-layer-tips").remove();
            }
        }
        ,

        submitHandler: function (form) {
        }
    });
}

//获取查询条件，不带form
function getQueryParams(params) {
    return $.param(params);
}

//获取查询条件 返回json格式
function getQueryParams(params, formId) {
    return $("#" + formId).serialize() + "&" + $.param(params);
}


//select联动
function select_link(params, tt, typeId) {
    var arr = params.split(',');
    var selecter = [];
    for (var i = 0; i < arr.length; i++) {
        selecter.push(arr[i]);
    }
    $.ajax({
        //url: "/pim/myBaseCon/initSelectLink",
        url: rootPath + "/myBaseCon/initSelectLink",
        type: "post",//可选get
        dataType: "json",
        data: {
            typeId: typeId
        },
        success: function (data, textstatus) {
            $("#" + tt).cxSelect({
                selects: selecter,
                url: data
            });
        }
    });

}

/**
 * convertTree(data, "rescId", "parentRescId", "0")
 *
 * 行id和父id在同一条数据转为树状数据
 *
 * @param data  数据数组
 * @param st1  本id
 * @param st2  父id
 * @param start  父id开始位置
 * @returns {Array}
 */
function convertTree(data, st1, st2, start) {
    var newD = new Array();
    if (Object.prototype.toString.call(data) == '[object Array]') {
        function addNode(nodata) {
            var newDN = new Array();
            var num = 0;
            for (var i = 0; i < data.length; i++) {
                if (nodata[st1] == data[i][st2]) {
                    num++;
                    newDN.push(data[i]);
                }
            }
            $.extend(nodata, {children: newDN});
            for (var j = 0; j < num; j++) {
                var num2 = 0;
                for (var k = 0; k < data.length; k++) {
                    nodata.children[j][st1] == data[k][st2] ? num2++ : num2;
                }
                if (num2 > 0) addNode(nodata.children[j]);
            }
            return nodata;
        }

        for (var i = 0; i < data.length; i++) {
            if (data[i][st2] == start) {
                var num = 0;
                for (var j = 0; j < data.length; j++) {
                    data[i][st1] == data[j][st2] ? num++ : "";
                }
                newD.push(num > 0 ? addNode(data[i]) : data[i]);
            }
        }
    }
    return newD;
}

/**
 * form表格验证
 * @param data
 * @returns {boolean}
 */
function wmValidate(data) {
    var bool = true, defaults = {
        formId: "",
        ttId: ""
    };
    $.extend(defaults, data);
    if (defaults.ttId == "") {
        $.extend(defaults, {ttId: defaults.formId});
    }
    $("#" + defaults.formId).valid();

    $("#" + defaults.ttId).find("input,select,textarea").each(function () {
        var st = $(this).parent('.input-icon');
        if (st.find(".layui-layer-tips").length > 0) {
            bool = false;
        }
    });
    return bool;
}


/**
 * 上传文件公用方法，具体参照workinfo下的上传办法，数据格式如下，如需其它参数，添加即可，此方法已做兼容，会自动识别
 {
 auto: true,
 queueID: "QueueID",
 multi: false,
 width: '63',
 height: '34',
 buttonText: '浏览文件',
 removeCompleted: true,
 url: rootPath + '/fileCon/uploadFile',
 maxSizeFile: 30,
 successFunction: uploadfiyAndfive
 }

 1 successFunction为上传成功所掉方法，三个参数id, file, data请参照以上实例
 2 如果不要进度条queueID：fasle
 3 auto为false不自动上传

 注：其它参数请参照http://www.uploadify.com/documentation/，本方法封装了UploadiFive和Uploadify两套框架，故实现了兼容性。若增加功能，两套框架不相同的参数和方法都需要引入。

 yucj
 */
function fileUploadSe(id, dufData) {

    var fiyData = {
        swf: rootPath + '/static/metronic/global/plugins/uploadify/uploadify.swf',        //效果flash地址
        fileTypeDesc: '支持的格式：',           //在浏览窗口底部的文件类型下拉菜单中显示的文本
        fileTypeExts: '*.jpg;*.jpge;*.gif;*.png;*.docx;*.rar;',
        queueSizeLimit: 1,
        //检测FLASH失败调用
        onFallback: function () {
            layer.msg("您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。");
        },
        //上传到服务器，服务器返回相应信息到data里
        onUploadSuccess: function (file, data, response) {
            dufData.successFunction(id, file, data);
        }
    };

    $.extend(fiyData, dufData);
    $.extend(fiyData, {uploader: dufData.url, fileSizeLimit: dufData.maxSizeFile + "MB"});

    var fiveData = {
        onFallback: function () {
            $("#" + id).uploadify(fiyData);
        },
        //上传到服务器，服务器返回相应信息到data里
        onUploadComplete: function (file, data) {
            dufData.successFunction(id, file, data);
        }
    };

    $.extend(fiveData, dufData);
    $.extend(fiveData, {uploadScript: dufData.url, fileSizeLimit: dufData.maxSizeFile * 1024});

    $("#" + id).uploadifive(fiveData);
}

/**
 * 大写下划线转驼峰
 * @param name
 * @constructor
 */
function TNameX(name) {
    var arr = name.split("_");
    var sts = "";
    for (var i = 0; i < arr.length; i++) {
        var st = arr[i].toLowerCase();
        sts = sts + st.substring(0, 1).toUpperCase() + st.substring(1);
    }
    return sts;
}

/**
 * 序列化div片段，非form使用，
 *
 * 1.返回json对象，而非字符串，其中checkbox key为其name，value为数组，故后台接收checkbox数据应该为：
 *      String[] value = request.getParameterValues("name");
 *
 * 2.可以直接使用不使用参数，默认取body下的所有表单，具体参数说明：
 *      serializeJSON（{id:"id"}）；基本用法，取id下的div片段中的所有表单项。
 *      name为所取得key值，value为所取得value值。
 *      scan为要取的表单type。
 *      clear为要剔除的表单type。
 *
 */
function serializeJSON(data) {
    var dufData = {
        scan: ["select", "checkbox", "radio", "textarea"],
        clear: [],
        id: "",
        name: "name",
        value: "value"
    }, REDA = {};

    $.extend(dufData, data == null ? {} : data);

    dufData.scan = $.grep(dufData.scan, function (n, i) {
        var bool = true;
        for (var j = 0; j < dufData.clear.length; j++) {
            if (dufData.clear[j] == n) bool = false;
        }
        return bool;
    }, false);

    var name = dufData.name, value = dufData.value, id = dufData.id == "" ? $("body") : $("#" + dufData.id);

    id.find("input[type='text'],input[type='hidden'],input[type='password']").each(function () {
        $.extend(REDA, $.parseJSON("{\"" + $(this).attr(name) + "\":\"" + (value == "value" ? $(this).val() : $(this).attr(value)) + "\"}"))
    });

    for (var i = 0; i < dufData.scan.length; i++) {
        if (dufData.scan[i] == "select" || dufData.scan[i] == "textarea") {
            id.find("select,textarea").each(function () {
                $.extend(REDA, $.parseJSON("{\"" + $(this).attr(name) + "\":\"" + (value == "value" ? $(this).val() : $(this).attr(value)) + "\"}"))
            });
        } else if (dufData.scan[i] == "radio") {
            id.find("input[type='radio']").each(function () {
                if ($(this).attr("checked") == "checked")
                    $.extend(REDA, $.parseJSON("{\"" + $(this).attr(name) + "\":\"" + (value == "value" ? $(this).val() : $(this).attr(value)) + "\"}"))
            });
        } else if (dufData.scan[i] == "checkbox") {
            var arrCheckBox = new Array(), arr = new Array();
            id.find("input[type='checkbox']").each(function () {
                if ($(this).attr("checked") == "checked") {
                    arrCheckBox.push($.parseJSON("{\"" + $(this).attr(name) + "\":\"" + (value == "value" ? $(this).val() : $(this).attr(value)) + "\"}"));
                }
            });
            for (var j = 0; j < arrCheckBox.length; j++) {
                for (var x in arrCheckBox[j]) {
                    if (arr.join(",").indexOf(x) == -1) {
                        arr.push(x);
                        var valueArr = new Array(), obj = new Object();
                        for (var k = 0; k < arrCheckBox.length; k++) {
                            for (var y in arrCheckBox[k]) {
                                if (x === y)
                                    valueArr.push(arrCheckBox[k][y]);
                            }
                        }
                        obj[x] = valueArr;
                        $.extend(REDA, obj);
                    }
                }
            }
        }
    }
    return REDA;
}

/**
 * sleep方法
 * @param numberMillis
 */
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

/**
 * 刷新滚动条，页面div片段加载后需要掉此方法
 */
function scrollerResh() {
    $(".scroller").each(function () {
        if ($(this).attr("data-initialized")) {
            return;
        }

        var height;

        if ($(this).attr("data-height")) {
            height = $(this).attr("data-height");
        } else {
            height = $(this).css('height');
        }

        $(this).slimScroll({
            allowPageScroll: true,
            size: '7px',
            color: ($(this).attr("data-handle-color") ? $(this).attr("data-handle-color") : '#4DB3A4'),
            wrapperClass: ($(this).attr("data-wrapper-class") ? $(this).attr("data-wrapper-class") : 'slimScrollDiv'),
            railColor: ($(this).attr("data-rail-color") ? $(this).attr("data-rail-color") : '#eaeaea'),
            position: false ? 'left' : 'right',
            height: height,
            alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
            railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
            disableFadeOut: true
        });

        $(this).attr("data-initialized", "1");
    });
}

/**
 * 判断javascript对象是否为空（null 或者 {} ）
 * @param obj
 * @returns {boolean}
 */
function isEmpty(obj) {
    for (var name in obj) {
        return false;
    }
    return true;
}

/**
 * 验证ajax提交后的返回数据是否有异常信息，如果有提示系统错误
 * title,content这两个参数如果不写，则使用data中的msg和detailMassge代替
 * @param data ajax返回的数据
 * @param title 重写的提示框标题
 * @param content 重写的提示框内容
 */
function handleErrorMsg(data, title, content) {
    var titleTmp = typeof(title) == "undefined" ? data.msg : title;
    var contentTmp = typeof(content) == "undefined" ? data.detailMessage : content;
    for (var x in data) {
        if (x == "cause") {
            layer.open({
                content: titleTmp
                , icon: 7
                , btn: ["查看详情"]
                , yes: function (index, layero) {
                    layer.open({
                        type: 1,
                       // scrollbar: false,     //layer弹出时，主页面滚动条禁用
                        maxmin: true,
                        title: "错误详情",
                        //skin: 'layui-layer-rim',
                        area: ['820px', '550px'],
                        content: contentTmp
                    });
                }, cancel: function (index) {
                    layer.closeAll();
                }
            });
            return false;
        }
    }
    return true;
}

/**
 * ajax成功后所调js
 *
 * msg,[fun1,[fun2]]
 * 参数：第一个所展示内容，第二/三个非必需，点击确定按钮和销毁后所掉函数
 */
function handleSuccessMsg(msg, fun1, fun2) {
    layer.open({
        content: msg
        , icon: 7
        , btn: ["确定"]
        , yes: function (index, layero) {
            typeof fun1 == "function" ? fun1() : ""
        }
        , cancel: function (index) {
            typeof fun2 == "function" ? fun2() : (typeof fun1 == "function" ? fun1() : "")
        }
    });
}

/**
 *input内容过长，弹出展示全部内容
 * @param sizzle
 */
function titleMsg(sizzle) {
    $(sizzle).on('mouseover', function () {
        var that = this, width = parseInt($(this).css("width").replace("px", "")) - 25, str = $(that).val() == null ? "" : $(that).val().match(/[\u4e00-\u9fa5]/g);
        if ($(that).val() != "" && (str == null ? 0 : str.length) >= width / 18 || ($(that).val() == null ? 0 : $(that).val().length) >= width / 9) {
            layer.tips($(that).val(), that, {tips: [1, "#f90"], time: 3000});
            $(that).on('mouseout', function () {
                layer.closeAll();
            });
        }
    });
}