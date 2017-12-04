import '../statics/css/work.css';

import  $ from '../statics/js/jquery.min.js';
/*!
 * router v0.1.0 (QQ:1058007757)
 * Copyright 2016
 * Licensed under the  MIT license
 */

	  $('#myModal').on('okHide', function(e){console.log('okHide')})
	  $('#myModa2').on('okHide', function(e){console.log('okHide')})
		var offsetHeight=$('.sui-modal').height();
		var top1=-offsetHeight/2
		$('.sui-modal').css('margin-top',top1)
	//下拉导航
	$(".header .menu-bar-li").mouseenter(function(){
		$(this).addClass('active');
		$(this).find(".top-bar-hide").stop().slideDown('fast');
	})
	$(".header .menu-bar-li").mouseleave(function(){
		$(this).removeClass('active');
		$(this).find(".top-bar-hide").stop().slideUp('fast');
	})

//下拉选择器通用模块
	$(".select").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
	})
	//我的收藏
	$('.list-card li').mouseover(function(){
		$(this).siblings('li').find('.x-icon').css('display','none')
		$(this).find('.x-icon').css('display','block')
	});
	$('.list-card li').mouseleave(function(){
		$(this).find('.x-icon').css('display','none')
	});
	$('.list-card .x-icon').on('click',function(){
		$(this).parent().remove();
	})
	$('.mycollect .menu-bar .top-bar-hide li button').click(function(){
		$(this).toggleClass('active')
	})
	//弹窗
	$(".js-layer").on('click',function(){
		$('.js-pop-layers').show();
		$('.cover').show();
	});
	$(".js-cancle").on('click',function(){
		$('.js-pop-layers').hide();
		$('.cover').hide();
	});

	// 设置内容最小高度
	$(function(){
		$(".main .content").css("min-height",windowHeight() - 140 );
		$(window).resize(function(){
			$(".main .content").css("min-height",windowHeight() - 140 );
		});
	});

	//获取窗体高度
	function windowHeight() {
	    var de = document.documentElement;
	    return self.innerHeight||(de && de.clientHeight)||document.body.clientHeight;
	}
	
	// 门店智能提示
	 // $('#autocomplete-ajax').autocomplete({
	 //        serviceUrl: 'json/ac-strings.json',
	 //        lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
	 //            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
	 //            return re.test(suggestion.value);
	 //        },
	 //        // onSelect: function (suggestion) {
	 //        //   $("#selection-ajax").html('您选择了'+suggestion.value);
	 //        // },
	 //        onInvalidateSelection: function() {
	 //          $('#selection-ajax').html('You selected: none');
	 //        }
	 //    });

	$("#addBtn").on("click",function(e){
		e.preventDefault();
		$("#myEditModal").modal('show');
		$(".type-box").addClass("pt30");
		$("#toggle-box").hide();
	});

	$(".btn-edit").on("click",function(e){
		e.preventDefault();
		$("#myEditModal").modal('show');
		$("#toggle-box").show();
		$(".type-box").removeClass("pt30");
	});

	//显示隐藏分类编号框
	$("#addBtn").on("click",function(e){
		$("#toggle-box").hide();
	});


	// 员工添加交互
	$(".search-result-list .checkbox-pretty input").on("click",function(){
		var $_this = $(this);
		var _dropdownText = $(".slelect-role").val();
		if(_dropdownText == "店长"||_dropdownText == "服务员"){
			var _checkCount = $(".search-result-list .checkbox-pretty input[type=checkbox]:checked").length;
			if(_checkCount>1){
				$("#alertInfo").modal("show");
				return false;
			}
		}
	});

	$(".slelect-role").change(function(){
		var _dropdownText = $(this).val();
		if(_dropdownText=="店长"||_dropdownText=="服务员"){
			$(".search-result-list .checkbox-pretty input[type=checkbox]:checked").each(function(){
				$(this).parent().removeClass("checked");
				$(this).attr("checked",false);
			});
		}
	});

	// form表单的异步提交 阻止提交事件，自己提交表单
	/*$("#form1").on("submit",function(e){
		e.preventDefault();
		$("#form1").validate({
			success:function(){
				alert("aaa");
			}
		});

	});*/


