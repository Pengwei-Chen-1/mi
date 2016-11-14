
/*********页面头部、底部的加载********/
$("#top").load("data/header.php");
$("#nav").load("data/nav.php");
$("#footer").load("data/footer.php");

$(document.body).on('click','#a_login',function(){
    $('div.modal').show(300);
});
/**********modal login的异步请求**********/
var loginName = null;
$('#bt_login').click(function(){
    var data = $('#login_form').serialize();//序列化表单值
    $.post('data/login.php',data,function(obj){
       //console.log(data);
       if(obj.code===100){
           $('.modal').fadeOut();
           loginName = $('[name="uname"]').val();
           $('.login').html('欢迎回来：'+loginName).css({'font-weight':'bold','color':'#B0B0B0','font-family':'microsoft yahei'});
       }else{
           $('.modal .alert').html(obj.msg);
       }
    });
});

/*********banner部分的鼠标进入时间********/
$('.banner_lf').on('mouseover',function(e){
    var target= e.target;
    if(target!=this){
        while(target.parentNode!=this){
            target=target.parentNode;
        }
        $(target).find(".banner_box").show();
        $(target).find("a").addClass("hover");
    }

});
$('.banner_lf').on('mouseout',function(e){
    var target= e.target;
    if(target!=this){
        while(target.parentNode!=this){
            target=target.parentNode;
        }
        $(target).find(".banner_box").hide();
        $(target).find("a").removeClass("hover");
    }

});
/********广告轮播********/
var imgs=[
    {"i":0,"img":"Image/banner_01.jpg"},
    {"i":1,"img":"Image/banner_02.jpg"},
    {"i":2,"img":"Image/banner_03.jpg"},
    {"i":3,"img":"Image/banner_04.jpg"},
    {"i":4,"img":"Image/banner_05.jpg"}
];
var adv={
    LIWIDTH:0,
    DISTANCE:0,
    DURATION:1000,
    STEPS:200,
    interval:0,
    step:0,
    moved:0,
    timer:null,
    WAIT:3000,
    canAuto:true,  //是否启动自动轮播
    init:function(){
        this.LIWIDTH=parseFloat(getComputedStyle($("#slider")[0]).width);
        $("#imgs").css("width",this.LIWIDTH*5+"px");
        this.interval=this.DURATION/this.STEPS;
        this.updateView();
        //绑定indexs的鼠标进入事件,调用move方法
        $("#indexs").on("mouseover",function(e){
            var target = e.target;
            if(target.nodeName=="LI"){
                var n=$(target).attr("data-i")-$("#indexs>.hover").attr("data-i");
                this.move(n);
            }
        }.bind(this));
        this.autoMove();
        //为slider绑定鼠标进入事件,canAuto为false
        $("#slider").on("mouseover",function(){
            this.canAuto=false;
        }.bind(this));
        //为slider绑定鼠标移出事件,canAuto为ture
        $("#slider").on("mouseout",function(){
            this.canAuto=true;
        }.bind(this));
    },
    autoMove:function(){//启动自动轮播
        this.timer = setTimeout(function(){
            //如果canAuto为true,调用move方法
            if(this.canAuto){
                this.move(1);
            }else{//如果canAuto为false,启动一次性定时器
                this.autoMove();
            }
        }.bind(this),this.WAIT);
    },
    updateView:function(){
        for(var i= 0,htmlImgs="",htmlIdxs="";i<imgs.length;i++){
            htmlImgs+='<li><img src='+imgs[i].img+'></li>';
            htmlIdxs+='<li data-i='+i+'></li>';
        }
        $("#imgs").html(htmlImgs);
        $("#imgs").css('width',this.LIWID*imgs.length+"px");
        $("#indexs").html(htmlIdxs);
        $($("#indexs>li")[imgs[0].i]).addClass("hover");
    },
    move:function(n){
        //清除定时器防止动画的叠加
        clearInterval(this.timer);
        this.timer=null;
        if(n<0){//如果右移
            //先将删除的n个拼接到imgs的开头,然后更新界面
            imgs = imgs.splice(imgs.length+n,-n).concat(imgs);
            this.updateView();
            //计算出left的值
            var left = parseFloat(getComputedStyle($("#imgs")[0]).left);
            //计算出start的值  n<0
            var start = left+this.LIWIDTH*n;
            $("#imgs")[0].style.left = start+"px";
            //end=0
            var end = 0;
        }else{//n>0时 左移
            // 获取imgs的left 为开始值start
            var start = parseFloat(getComputedStyle($("#imgs")[0]).left);
            //停止时的距离  end=-this.LIWIDTH*n;
            var end = -this.LIWIDTH*n;
        }
        //移动的距离  Distance=end-start;
        this.DISTANCE = -(end-start);
        //每一移一步的距离 step= distance/steps;
        this.step = this.DISTANCE/this.STEPS;
        //启动周期性定时器调用moveStep方法,序号保存在timer中
        this.timer = setInterval(this.moveStep.bind(this,n),this.interval);



    },
    moveStep:function(n){
        //获取imgs的left,保存在left中
        var left = parseFloat(getComputedStyle($("#imgs")[0]).left);
        //每一移动一步从新计算left的值 left=left-step;
        $("#imgs")[0].style.left = left-this.step+"px";
        //moved++;
        this.moved++;
        //如果moved==steps,停止定时器,清除timer,moved=0;
        if(this.moved==this.STEPS){
            clearInterval(this.timer);
            this.timer = null;
            this.moved = 0;
            if(n>0) {
                //移动结束后将移动的图片截取后拼接在imgs后面
                imgs = imgs.concat(imgs.splice(0, n));
                //从新更新页面
                this.updateView();
            }
            $("#imgs")[0].style.left = "";
            this.autoMove();
        }
    }
};
adv.init();
/**********鼠标悬停时的动画效果***********/
$(".balance_car").on("mouseover",function(){
    $(".balance_car").addClass("animation_active");
});
$(".balance_car").on("mouseout",function(){
    $(".balance_car").removeClass("animation_active");
});
$("dl").on("mouseover",function(){
        $(this).addClass("animation_active");
});
$("dl").on("mouseout",function(){
        $(this).removeClass("animation_active");
});
/*******异步加载的事件代理*******/
$(".main_dl").on("mouseover",'dl',function(){
    $(this).addClass("animation_active");
});
$(".main_dl").on("mouseout",'dl',function(){
    $(this).removeClass("animation_active");
});
/*************/
$(".main_left>a").on("mouseover",function(){
    $(this).addClass("animation_active");
});
$(".main_left>a").on("mouseout",function(){
    $(this).removeClass("animation_active");
});
$(".main_more>a").on("mouseover",function(){
    $(this).addClass("animation_active");
});
$(".main_more>a").on("mouseout",function(){
    $(this).removeClass("animation_active");
});
/***********页面加载完成后异步请求match类型的数据************/
$(function(){
    $.getJSON('data/select.php',{type:'match'},function(obj){
        console.log(arguments);
        var html = "";
        $.each(obj,function(i,p){
           console.log(p);
            html += `
            <dl>
                <dt>
                    <a href="#"><img src="${p.pic}"></a>
                </dt>
                <dd>
                    <a href="#" class="pdt_name">${p.pname}</a>
                </dd>
                <dd class="price">${p.price}</dd>
                <dd>${p.pevaluate}</dd>
            </dl>
            `;
        });
        $('.main_center>div.main_dl').html(html);
    });
});
/***********鼠标点击在某个类型下,异步请求该类型的数据************/
$('.main_top>h2').on('click',function(){
    $(this).addClass('hover').siblings('.hover').removeClass('hover');

    var type = $(this).data('type');
    $.getJSON('data/select.php',{'type':type},function(obj){
        var html = "";
        $.each(obj,function(i,p){
            html += `
            <dl>
                <dt>
                    <a href="#"><img src="${p.pic}"></a>
                </dt>
                <dd>
                    <a href="#" class="pdt_name">${p.pname}</a>
                </dd>
                <dd class="price">${p.price}</dd>
                <dd>${p.pevaluate}</dd>
            </dl>
            `;
        });
        $('.main_center>.main_dl').html(html);
    });
});








