/**
 * Created by wangqiang on 2015/5/15.
 */
(function ($) {
    $.fn.extend({
        wmselect2: function (options) {
            var defaults = {
                tt: true,
                key: true,
                name: true,
                value: true,
                wmtable: true,
                wmwhere: true
            }
            var options = $.extend(defaults, options);

            return this.each(function () {
                var mythis = $(this);

                mythis.change(function (event) {
                    $("#" + options.tt).empty();//先置空
                    $("#" + options.tt).append($('<option value="">--请选择--</option>'));//加上--请选择--选项
                    if (mythis.val() == "")
                        return;//无值，返回

                    $.ajax({
                        url: rootPath + "/async/registCon/initWmSelect",
                        type: "POST",
                        dataType: "json",
                        data: {
                            key: options.key,    //表字段  作为option的value使用
                            name: options.name,  //表字段  作为option的text使用
                            value: options.value,  //默认值
                            wmtable: options.wmtable,    //查询的表名
                            wmwhere: options.wmwhere + "=" + mythis.val()
                        },
                        success: function (data, textstatus) {
                            $("#" + options.tt).append(data.optionStr);//后台数据加到下拉框
                        }
                    });
                });

            });


        }
    });
})(jQuery);