/**
 * Created by wangqiang on 2015/5/18.
 */
(function($){
    $.fn.extend({
        wmsearch:function(options){
            var defaults = {
                ajax_url:true
            }
            var options = $.extend(defaults, options);

            return this.each(function(){
                $(".h2").remove();
                var mythis = $(this);

                $(document).on("click",".select4_box li",function(){
                    mythis.val($(this).text());
                    $(".select4_box").remove();
                });

                $(document).click(function(event) {
                    $(".select4_box").remove();
                });

                $(".select4_box").click(function(event) {
                    event.stopPropagation();
                });

                mythis.click(function(event) {
                    var val = $(this).val();
                    var mythis = $(this);
                    var width = $(this).width()+14+"px";
                    var top = $(this).position().top+30;
                    var left = $(this).position().left;
                    $.ajax({
                        url:options.ajax_url,
                        dataType:"json",
                        data:{name:val},
                        success:function(json){
                            if(json){
                                var html = '<div class="select4_box"><ul>';
                                $.each(json,function(k,v){
                                    html += '<li alt="'+v.id+'">'+v.name+'</li>';
                                });
                                html+='</ul></div>'
                                $(".select4_box").remove();
                                mythis.after(html);
                                $(".select4_box").css({top:top,left:left,width:width});
                            }
                        }
                    });
                });

                mythis.keyup(function(event) {
                    if(event.keyCode==40){
                        var index = $(".select4_box li.active").index()+1;
                        $(".select4_box li").eq(index).addClass('active').siblings().removeClass('active');
                        mythis.val($(".select4_box li.active").text());
                    }else if(event.keyCode==38){
                        var index = $(".select4_box li.active").index()-1;
                        if(index<0){
                            index = $(".select4_box li").length-1;
                        }
                        $(".select4_box li").eq(index).addClass('active').siblings().removeClass('active');
                        mythis.val($(".select4_box li.active").text());
                    }else if(event.keyCode==13){
                        event.stopPropagation();
                        alert($(".select4_box li.active").text());
                        mythis.val($(".select4_box li.active").text());
                        return false;
                    }else{
                        mythis.trigger("click");
                    }
                });

            });


        }
    });
})(jQuery);