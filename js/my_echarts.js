$(document).ready(function(){

	  	// 基于准备好的dom，初始化echarts实例
			var chart =document.getElementById('mainOne1')
		   var myChart = echarts.init(chart);
		 			 // 指定图表的配置项和数据
		  var option = {
		      grid:{
		                top:"50px",
		                left:"15px",
		                right:"15px",
		                bottom:"20px"
		            },
		      tooltip: {},
		      legend: {
		          data:['营业额','退款额','消费额'],
		          icon:'rect ',
				  itemWidth:20,
				  itemHeight:3,
				  itemGap:10,
		          // 图例按钮的位置
		          top:10,
				  left:10,
				  padding:1,
		          // 按钮颜色
		              textStyle: {
		           color: '#fft'
		          },
		          // 图例列表的布局朝向。
		          orient:'horizontal',
		           //   selected: {
		           //                "周统计": false,
		           //                "月统计": false,
		           //                //图例为‘全部’的一项默认置灰
		           //                　　
		           // },
		           // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，
		           // selectedMode:'single'
		      },
		      xAxis: {
		          data: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日'],
		      //坐标轴轴线相关设置。
		              axisLine:{
		           show:false,
		           lineStyle:{
		          type:'dashed',
		          color:'#333'
		      }
		          },
		          // X轴刻度设置
		                     axisTick:{                   
		            show:false
		          }, 
		         // X轴文字颜色
		       axisLabel: {
		      show: true,
		      textStyle: {
		      color: '#000'
		      },
			
		  },
		      // 设置网线
		  splitLine:{
		      show: true,
		       lineStyle:{
		           color: '#ccc',
		           width: 1,
		          type: 'solid'
		      }
		  	 
		  },
		  boundaryGap:false
		      },
		      yAxis: {
		          type:'value',
		          min:0,
		          max:10,
		          // 设置Y轴间隔多少显示
		          // interval:500,
		          //坐标轴轴线相关设置。
		            axisLine:{
		           show:true,
		 
		           lineStyle:{
		          type:'solid',
		          color:'#ccc'
		      }
		  },
		  // 设置网线
		  splitLine:{
		      show: true,
		       lineStyle:{
		           color: '#ccc',
		           width: 1,
		          type: 'solid'
		      }
		 
		  },
		          // y轴文字颜色
		       axisLabel: {
		      show: true,
		      textStyle: {
		      color: '#000'
		      }
		  },
		  //坐标轴刻度相关设置。
		     axisTick:{                   
		    show:false
		  },   
		      },
		      series: [
	
		      {
		          name: '营业额',
		          type: 'line',
		          data: [2,3,4,5,2,1,3,4,5,6,9,10,2,10,2,3,4,1,6,7,3,2,5,8,1],
		        
		          itemStyle:{
		              normal:{
		                  color:'#60CDEF'
		              }
		          },
		              // 拐折点圆的大小
		             symbolSize:10,
		              symbol: "circle",   
		          // 柱的间距
		          barGap:'0%',
		                     itemStyle:{
		          normal:{
		 			
		              label : {
		 				 show: true,
		                  color:'#000'
		              },
		              color:'#5ECBEF',        //拐点圆点颜色
		              borderColor:'#fff', //拐点圆点边框颜色
		              lineStyle:{
		                  width:2,
		                   color:'#5ECBEF'    //折线的颜色
		              }
		          }
		      },
		      // 折线弧度设置
		      smooth:0.5,
		      // 显示最大值与最小
		      // markPoint:{
		      //     data:
		      //     [
		      //     {type: 'max', name: '最大值'},
		      //      {type: 'min', name: '最小值'}
		      //     ]
		      // }
		 
		      },
			  
		     {
		       name: '退款额',
		          type: 'line',
		           data: [1,2,3,4,2,2,1,2,2,3,4,1,7,7,3,1,10,3,8,3,2,1,2,6,5],
		              itemStyle:{
		              normal:{
		                  color:'#8e3262'
		              }
		          },
		                  // 拐折点圆的大小
		             symbolSize:10,
		              symbol: "circle",   
		          // 柱的间距
		          barGap:'0%',
		                     itemStyle:{
		          normal:{
		 			   label : {
		 			  show: true,
		 			     color:'#000'
		 			 },
		              color:'#56A96A',        //拐点圆点颜色
		              borderColor:'#fff', //拐点圆点边框颜色
		              lineStyle:{
		                  width:2,
		                   color:'#56A96A'    //折线的颜色
		              }
		          }
		              },
		              smooth:0.5,
		      },
		 {
		       name: '消费额',
		          type: 'line',
		           data: [5,2,3,4,5,6,7,10,5,1,8,3,6,4,10,7,9,4,5,8,1,8,3,1,5],
		              itemStyle:{
		           
		          },
		                  // 拐折点圆的大小
		             symbolSize:10,
		              symbol: "circle",   
		          // 柱的间距
		          barGap:'0%',
		                     itemStyle:{
		          normal:{
		 			   label : {
		 				 show: true,
		                  color:'#000'
		              },
		              color:'#B83F20',        //拐点圆点颜色
		              borderColor:'#fff', //拐点圆点边框颜色
		              lineStyle:{
		                  width:2,
		                   color:'#B83F20'    //折线的颜色
		              }
		          }
		      },
		      smooth:0.5,
		      }
		      ]
		  };
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
				  window.onresize = myChart.resize;
	
})
			