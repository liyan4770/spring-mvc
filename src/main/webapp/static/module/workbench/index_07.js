$(function(){
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
                    text: '每月设计数量',
                    subtext: '测试'
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
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
                        data: [68, 49, 32, 23, 25, 76, 135, 162, 32, 99, 32, 76]
                    }
                ]
            };
            myChart.setOption(option);
        }
    );
});
