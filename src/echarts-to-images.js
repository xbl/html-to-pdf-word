const {JSDOM, DIV} = require('jsdom');
const echarts = require('echarts');

const defaultOpts = {
    devicePixelRatio: 1,
    width: 600,
    height: 480
};

const {window} = new JSDOM(`<!DOCTYPE html><html><body><div id="dom" style="width: 600px; height: 480px;"></div></body></html>`);

async function render(echartOption, opts) {
    const initOption = {...defaultOpts, ...opts};
    const {width, height} = initOption;

    const dom = window.document.getElementById('dom');

    const chart = echarts.init(dom, null);
    // chart.on('finished', () => {
    //     console.log(chart.getDataURL({
    //         pixelRatio: 2,
    //         backgroundColor: '#fff'
    //     }));
    // });
    // chart.on('error', e => reject(e));
    // chart.setOption(echartOption);
}

render({
    title: {
        text: 'ECharts 入门示例'
    },
    animation: false,
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
        }
    ]
});