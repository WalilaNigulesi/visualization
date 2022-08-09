//var ROOT_PATH = 'C:/Users/zihaozhang/Desktop';
var dom = document.getElementById("main");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

var itemStyle = {
  opacity: 0.05,
};
// var sizeFunction = function (x) {
//   var y = Math.sqrt(x / 5e8) + 0.1;
//   return y * 80;
// };
//[latitude,longitude,time,speed,angle,date]
var schema = [
  { name: "latitude", index: 0, text: "纬度", unit: "" },
  { name: "longitude", index: 1, text: "经度", unit: "" },
  { name: "date", index: 2, text: "速度", unit: "" },
  { name: "angle", index: 4, text: "航向", unit: "°" },
  { name: "speed", index: 3, text: "速度", unit: "节" },
];

var res = [];
for (var i = 0; i < data.series.length; i++) {
  res.push({
    name: data.series[i][2],
    value: [data.series[i][0], data.series[i][1], data.series[i][3], data.series[i][4]]
  });
}

option = {
  baseOption: {
    timeline: {
      axisType: "category",
      orient: "vertical",
      autoPlay: false,
      inverse: true,
      playInterval: 1000,
      left: null,
      right: 0,
      top: 20,
      bottom: 20,
      width: 55,
      height: null,
      symbol: "none",
      checkpointStyle: {
        borderWidth: 2,
      },
      controlStyle: {
        showNextBtn: false,
        showPrevBtn: false,
      },
      data: [],
    },
    // title: [
    //   {
    //     text: data.timeline[0],
    //     textAlign: 'center',
    //     left: '63%',
    //     top: '55%',
    //     textStyle: {
    //       fontSize: 150
    //     }
    //   },
    //   {
    //     text: '各国人均寿命与GDP关系演变',
    //     left: 'center',
    //     top: 10,
    //     textStyle: {
    //       fontWeight: 'normal',
    //       fontSize: 20
    //     }
    //   }
    // ],
    tooltip: {
      padding: 5,
      borderWidth: 1,
      formatter: function (obj) {
        var value = obj.value;
        // prettier-ignore
        return schema[3].text + ':' + value[3] + '<br>'
          + schema[1].text + ':' + value[1] + schema[1].unit + '<br>'
          + schema[0].text + ':' + value[0] + schema[0].unit + '<br>'
          + schema[2].text + ':' + value[2] + '<br>';
      },
    },
    geo: {
      map: "world",
      center: [124.076558, 37.841682],
      zoom: 9,
      roam: true,
      layoutCenter: ["50%", "50%"],

      layoutSize: 300,
    },
    visualMap: [
      {
        min: 14,
        max: 20,
        dimension: 2,
        //length:400,
        left: "center",
        orient: "horizontal",
        calculable: true,
        realtime: true,
        range: [14, 20],
        //categories: data.counties,
        inRange: {
          color: ["blue", "red"],
        },
      },
    ],
    series: [
      {
        type: "scatter",
        itemStyle: itemStyle,
        coordinateSystem: "geo",
        data: data.series[0],
        symbolSize: 10,
      },
    ],
  },
  options: [],
};

for (var n = 0; n < data.timeline.length; n++) {
  option.baseOption.timeline.data.push(data.timeline[n]);
}
option.options.push({

  series: {
    name: data.series[n][2],
    type: "scatter",
    coordinateSystem: "geo",

    itemStyle: itemStyle,
    data: res,
    encode: {
      value: 2
    },
    symbolSize: 10,
  },
});

myChart.setOption(option);
