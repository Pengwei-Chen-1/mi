/****购物车下拉框****/

$("#top").on("mouseover",".shop_cart",function(){
	$(".shop_cart").find(".shop_box").show();
	$(".shop_cart").find(".shop").addClass("hover");

});
$("#top").on("mouseout",".shop_cart",function(){
	$(".shop_cart").find(".shop_box").hide();
	$(".shop_cart").find(".shop").removeClass("hover");

});
/***************nav下拉菜单****************/
$("#nav").on("mouseover","#nav_menus",function(e){
	var target= e.target;
	if(target!=this){
		while(target.parentNode!=this){
			target=target.parentNode;
		}
		$(target).find(".nav_img").show();
		$(target).find("a").addClass("hover");
	}

})

$("#nav").on("mouseout","#nav_menus",function(e){
	var target = e.target;
	if(target!=this){
		while(target.parentNode!=this){
			target=target.parentNode;
		}
		$(target).find(".nav_img").hide();
		$(target).find("a").removeClass("hover");
	}
})
