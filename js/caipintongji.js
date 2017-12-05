
import '../statics/css/daterangepicker.min.css';
import '../statics/css/daterangepicker.custom.css';
import '../statics/css/work.css';

import  $ from '../statics/js/jquery.min.js';
import echarts from '../statics/js/echarts.min.js';
import '../js/common.js';

//初始化图表
var myChart = echarts.init(document.getElementById('mainChart'));
var binChart = echarts.init(document.getElementById('binChart'));
// 指定图表的配置项和数据
var option = {
	tooltip : {
      show: true,
      trigger: 'item',
      formatter: function(data) {
           var res = '<div style="padding:10px;">';
      		res += '<p style="margin:0 0 5px;padding-bottom:5px;border-bottom:1px solid #ddd;">' + data.data.name + '</p>';
            res += '单价：' + data.data.price + ' 元 / ' + data.data.unit; 
            res += '<br/>本周销量：' + data.data.value;
            res += '</div>';
            return res;
      }
	},
calculable : true,
grid: {
     borderWidth: 0
},
backgroundColor:'#f6fafc',
xAxis: {
	type: 'category',
      splitLine:{
      	show: false
      },
      axisLabel:{
               interval:0,
               rotate:45,
               margin:5,
               textStyle:{
                   color:"#6e838d"
               }
          },
        data: ['剁椒鱼头','泉水牛肉','糖醋里脊','风味羊排','蓝莓山药','四川泡菜','泉水鸭胗','醋溜土豆丝','水煮肉片','竹香烤牛柳']
    },
yAxis : [
    {
        type : 'value',
        name: "总数",
        splitLine: {
        	lineStyle : {  
        		color:'#ccc',
        		width:1,
                    type : 'dotted'  
                }  
        }
    }
],
series : [
    {
        // name:'剁椒鱼头',
        type:'bar',
        formatter:function(value){
        	return value;
        },
        barWidth : 25, 
        itemStyle:{
        	normal:{
        		color:function(params){
        			var colorList = [
        				'#f08786','#72c4b9','#6b82af','#dd83da','#f9cb65','#81d1f3','#81ce5b','#a9bde1','#f89f7c','#bf98e0'
        			];
        			return colorList[params.dataIndex];
        		}
        	}
        },
         data:[
            {value:10, name:'剁椒鱼头', price:20, unit:'份'},
            {value:20, name:'泉水牛肉', price:40, unit:'份'},
            {value:30, name:'糖醋里脊', price:20, unit:'份'},
            {value:50, name:'风味羊排', price:50, unit:'份'},
            {value:100, name:'蓝莓山药', price:40, unit:'份'},
            {value:120, name:'四川泡菜', price:60, unit:'份'},
            {value:150, name:'泉水鸭胗', price:10, unit:'份'},
            {value:200, name:'醋溜土豆丝', price:20, unit:'份'},
            {value:230, name:'水煮肉片', price:30, unit:'份'},
            {value:250, name:'竹香烤牛柳', price:20, unit:'份'}
        ]
    }
]
};
var option2 = {
tooltip : {
    trigger: 'item',
      formatter: function(data) {
           var res = '<div style="padding:10px;">';
      		res += '<p style="margin:0 0 5px;padding-bottom:5px;border-bottom:1px solid #ddd;">' + data.data.name + '</p>';
            res += '单价：' + data.data.price + ' 元 / ' + data.data.unit; 
            res += '<br/>本周销量：' + data.data.value;
            res += '</div>';
            return res;
        }
},
legend: {
    orient : 'vertical',
    x : 'right',
    align:'left',
    padding: [70,40],
    textStyle:{
            color:"#6e838d"
        },
    data: ['剁椒鱼头','泉水牛肉','糖醋里脊','风味羊排','蓝莓山药','四川泡菜','泉水鸭胗','醋溜土豆丝','水煮肉片','竹香烤牛柳']
},
calculable : true,
backgroundColor:'#f6fafc',
series : [
    {
        name:'',
        type:'pie',
        radius : '55%',
        center: ['36%', '50%'],
        itemStyle : {
                 normal : {
                     label : {
                         show : false
                     },
                     labelLine : {
                         show : false
                     },
                     color:function(params){
        			var colorList = [
        				'#f08786','#72c4b9','#6b82af','#dd83da','#f9cb65','#81d1f3','#81ce5b','#a9bde1','#f89f7c','#bf98e0'
        			];
        			return colorList[params.dataIndex];
        		}
                 }
              },
        data:[
            {value:10, name:'剁椒鱼头', price:20, unit:'份'},
            {value:20, name:'泉水牛肉', price:40, unit:'份'},
            {value:30, name:'糖醋里脊', price:20, unit:'份'},
            {value:50, name:'风味羊排', price:50, unit:'份'},
            {value:100, name:'蓝莓山药', price:40, unit:'份'},
            {value:120, name:'四川泡菜', price:60, unit:'份'},
            {value:150, name:'泉水鸭胗', price:10, unit:'份'},
            {value:200, name:'醋溜土豆丝', price:20, unit:'份'},
            {value:230, name:'水煮肉片', price:30, unit:'份'},
            {value:250, name:'竹香烤牛柳', price:20, unit:'份'}
        ]
    }
]
}
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
binChart.setOption(option2);
