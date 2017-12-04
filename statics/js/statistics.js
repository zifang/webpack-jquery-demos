define(["jquery","rangePicker","getdatestr"],function($,dateRangePicker,getdatestr){

	//初始化日期默认为昨天
	var nowdate = new Date();
	var nowmonth = (nowdate.getMonth() +1) > 10 ? nowdate.getMonth()+1:("0"+(nowdate.getMonth()+1))
	var yestarday = nowdate.getFullYear()+"-"+nowmonth+"-"+nowdate.getDate();
	$("#daydatepicker").val(getdatestr.GetDateStr(-1,yestarday));

	$('#weekdatepicker').dateRangePicker({
		singleMonth: true,
		batchMode: 'week',
		showShortcuts: false,
		separator : ' ~ '
	});
	$("#daydatepicker").dateRangePicker({
		autoClose: true,
		singleDate : true,
		showShortcuts: false,
		singleMonth: true
	});
	$("#monthdatepicker").dateRangePicker({
		autoClose: true,
		singleMonth : true,
		showShortcuts: false,
		separator: ' ~ '
	}).bind('datepicker-change',function(event,obj){
		var _value = obj.value;
		var _splitvalue = obj.value.split("~");
		var year = _splitvalue[0].split("-")[0];
		var month = _splitvalue[0].split("-")[1];
		var monthcount = getdatestr.getMonthCount(year,month);
		var _result = year+"-"+month+"-01"+" ~ "+year+"-"+month+"-"+monthcount;
		return $(this).val(_result);
	});

	//切换按钮状态，显示隐藏相应的属性框
	$(".btn-toggle-date").on("click",function(){
		var _type = $(this).attr("id").split("-")[1];
		if(_type=="day"){
			$("#weekdatepicker,#monthdatepicker").hide();
		}else if(_type=="week"){
			$("#daydatepicker,#monthdatepicker").hide();
		}else if(_type=="month"){
			$("#daydatepicker,#weekdatepicker").hide();
		}
		$("#"+_type+"datepicker").show();
		$("#hid-value").val(_type);
		$(this).addClass("active").siblings().removeClass("active");
	});

	$("#btn-prev").on("click",function(e){
		e.preventDefault();
		var objvalue = $("#hid-value").val();
		if(objvalue=="day"){//上一天
			var prevdate = getdatestr.GetDateStr(-1,$("#daydatepicker").val());
			$("#daydatepicker").val(prevdate);
		}else if(objvalue=="week"){//上一周
			var inputval = $("#weekdatepicker").val();
			var prevWeek = "";
			if(inputval!=""){
				prevWeek = getdatestr.GetDateStr(-7,$.trim(inputval.split("~")[0]))+" ~ "+getdatestr.GetDateStr(-7,$.trim(inputval.split("~")[1]));
			}
			$("#weekdatepicker").val(prevWeek);
		}else if(objvalue=="month"){//上一月
			var inputval = $("#monthdatepicker").val();
			var prevmonth="";
			if(inputval!=""){
				var _splitvalue = inputval.split("~");
				var year = _splitvalue[0].split("-")[0];
				var month = _splitvalue[0].split("-")[1];
				var yearmonth = getdatestr.getYearMonth(year,month,"-");
				var monthcount = getdatestr.getMonthCount(year,month);
				var _result = yearmonth +"-01"+" ~ "+ yearmonth +"-" + monthcount;
			}
			$("#monthdatepicker").val(_result);
		}
	});

	$("#btn-next").on("click",function(e){
		e.preventDefault();
		var objvalue = $("#hid-value").val();
		if(objvalue=="day"){//下一天
			var nextdate = getdatestr.GetDateStr(1,$("#daydatepicker").val());
			$("#daydatepicker").val(nextdate);
		}else if(objvalue=="week"){//下一周
			var inputval = $("#weekdatepicker").val();
			var prevWeek="";
			if(inputval!=""){
				prevWeek = getdatestr.GetDateStr(7,$.trim(inputval.split("~")[0]))+" ~ "+getdatestr.GetDateStr(7,$.trim(inputval.split("~")[1]));
			}
			$("#weekdatepicker").val(prevWeek);
		}else if(objvalue=="month"){//下一月
			var inputval = $("#monthdatepicker").val();
			var prevmonth="";
			if(inputval!=""){
				var _splitvalue = inputval.split("~");
				var year = _splitvalue[0].split("-")[0];
				var month = _splitvalue[0].split("-")[1];
				var yearmonth = getdatestr.getYearMonth(year,month,"+");
				var monthcount = getdatestr.getMonthCount(year,month);
				var _result = yearmonth+"-01"+" ~ "+yearmonth+"-"+monthcount;
			}
			$("#monthdatepicker").val(_result);
		}
	});
});