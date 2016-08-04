/**
 * 柱状图取值
 */
$(function () {
    var arr1 = [];
    var arr2 = [];
    $.ajax({
        url: rootPath + "/shejiWorkbenchCon/selectDesignNum",
        data: {},
        type: 'POST',
        dataType: "json", //可以是text，如果用text，返回的结果为字符串；如果需要json格式的，可是设置为json
        ContentType: "application/json; charset=utf-8",
        success: function (data) {
            trees = data;
            if (trees) {
                for (var i = 0; i < trees.length; i++) {
                    arr1.push(trees[i].NAME);
                    arr2.push(trees[i].NUM);
                }
            }
            designNum(arr1,arr2);
        },
        error: function (data) {
            layer.msg("失败");
        }
    });
})

/**
 * 柱状图初始化
 * @param arr1
 * @param arr2
 */
function designNum(arr1,arr2){
    if(arr1[0]==null){
        arr1.push('无');
        arr2.push('0');
    }
    require.config({
        paths: {
            echarts: rootPath + '/static/metronic/global/plugins/echarts'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/map'
        ],
        function (ec) {
            //--- 折柱 ---

            var myChart = ec.init(document.getElementById('main'));

            var option = {
                title: {
                    text: '月设计数量',
                    subtext: '设计院'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['数量']
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: arr1
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '数量',
                        type: 'bar',
                        data: arr2
                    }
                ]
            };
            myChart.setOption(option);
        }
    );
};