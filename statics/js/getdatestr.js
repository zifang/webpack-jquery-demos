define(function(){
	//获取某天多少天后的日期
	var GetDateStr = function(addDayCount,nowdate){
		var dd = new Date(nowdate.replace(/-/g,"/"));
		dd.setDate(dd.getDate()+addDayCount);//获取AddDayCount天后的日期
		var y = dd.getFullYear();
		var m = dd.getMonth()+1;//获取当前月份的日期
		var d = dd.getDate();
		if(m<10){
		    m="0"+m;
		}
		if(d<10){
		    d="0"+d;
		}
		return y+"-"+m+"-"+d;
	};
	//根据年月获取一个月有多少天
	var getMonthCount = function(year,month){
        var dateObj=new Date(year,month,0);
        return dateObj.getDate();
    };
    //根据年月操作符获取上下一个月
    var getYearMonth = function(year,month,operator){
        var date=new Date(year,month,0);
        var y=date.getFullYear();
        var ym="";
        var m="";
        if(operator=="-"){
        	m = date.getMonth();

        }else{
        	m = date.getMonth() + 2;
        }
        if(m==0){
        	y=y-1;
        	ym=y+"-"+"12";
        }else if(m<10){
            m="0"+m;
            ym=y+"-"+m;
        }else if(m>9&&m<=12){
            ym=y+"-"+m;
        }else if(m>12){
            y=y+1;
            ym=y+"-"+"01";
        }
        return ym;
    };
    // Date.prototype.format = function(format){ 
    //     var o = {  
    //         "M+" : this.getMonth() + 1,  
    //         "d+" : this.getDate(),  
    //         "h+" : this.getHours(),  
    //         "m+" : this.getMinutes(),  
    //         "s+" : this.getSeconds(),  
    //         "q+" : Math.floor((this.getMonth() + 3) / 3),  
    //         "S" : this.getMilliseconds()  
    //     }    
    //     if (/(y+)/.test(format))  
    //     {  
    //         format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    //     }    
    //     for (var k in o)  
    //     {  
    //         if (new RegExp("(" + k + ")").test(format))  
    //         {  
    //             format = format.replace(RegExp.$1, RegExp.$1.length == 1? o[k]: ("00" + o[k]).substr(("" + o[k]).length));  
    //         }  
    //     }  
    //     return format;  
    //  } 

　　//调用
    // var startTime="2015-02-03";
    // new Date(startTime)).format('yyyy-MM-dd hh:mm')

	return {
		GetDateStr:GetDateStr,
		getMonthCount:getMonthCount,
		getYearMonth:getYearMonth
	}
});