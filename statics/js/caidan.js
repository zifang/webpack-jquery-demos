define(["jquery"],function($){
	$(function(){
		$("#selectAll").on("click",function(){
			var $_this = $(this);
			if($_this.prop("checked")==true){
				$(".item-list .item input[type=checkbox]").each(function(){
					$(this).attr("checked","checked").parent().addClass("checked");
				});
			}else{
				$(".item-list .item input[type=checkbox]").each(function(){
					$(this).attr("checked","").parent().removeClass("checked");
				});
			}
		});
	});
});