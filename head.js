/**
 * Created by wai on 2015/7/9.
 */

var head_ul1_li_Array, head_ul1_li_selected;
var head_show_img_Array, index, timer;

$(document).ready( function(){

    //初始化位置
    var t = $(window).width();
    $(".head-daohang-container").css( "width", t * 0.75 + "px" );//导航栏容器
    $(".head-daohang-img").css({//倒三角
        "width" : t * 0.15 + "px",
        "left" : ( t - $(".head-daohang-img").width() ) / 2 + "px"
    });
    $(" .head-show-imgs").css( "height", t * 0.25 + "px" );//切换的图片的容器高度

    $(".head").css( "height", $(".head-daohang-container").height() + $(" .head-show-imgs").height() + "px" );//整个头部的高度

    //导航栏
    head_ul1_li_Array = $(".head-ul1").children();

    head_ul1_li_selected = 0;//默认选中第一个列项
    head_ul1_li_Array.eq( head_ul1_li_selected ).addClass("style_head-ul1-li-selected");

    $.each( head_ul1_li_Array, function( i, v ){//设置导航栏每个列项

       head_ul1_li_Array.eq( i ).bind( "mouseover", function(){
           head_ul1_li_Array.eq( head_ul1_li_selected).removeClass("style_head-ul1-li-selected");//删除被选中的列项的选中效果
           head_ul1_li_Array.eq( i ).css({
              "margin-top": "42px",//47-5=42
              "padding-bottom" : "5px"
           });
       });

        head_ul1_li_Array.eq( i ).bind( "mouseleave", function(){
            head_ul1_li_Array.eq( i ).css({
                "margin-top": "47px",
                "padding-bottom" : "0px"
            });
            head_ul1_li_Array.eq( head_ul1_li_selected ).addClass("style_head-ul1-li-selected");
        });

        head_ul1_li_Array.eq( i ).bind( "click", function(){
            head_ul1_li_Array.eq( head_ul1_li_selected).removeClass("style_head-ul1-li-selected");
            head_ul1_li_selected = i;//更改选中状态
            head_ul1_li_Array.eq( head_ul1_li_selected ).addClass("style_head-ul1-li-selected");
        });

    });

    head_show_img_Array = $(".head-show-imgs").children(".head-show-img");//儿子辈
    var head_daohang_img = $(".head-daohang-img");//集合保存

    ////倒三角图片
    //var t = head_show_img_Array.eq(0).width() / 2  -  head_daohang_img.eq(0).width() / 2 + "px";
    // $("#head-daohang-img").css( "left", t );
    ////console.log(head_daohang_img.width() + " " + head_daohang_img.eq(0).width());//每次执行结果会不一样??

    //.href的事件绑定要放在后面，否则虽然添加了类，但没实现类的效果？！！
    $.each( head_show_img_Array, function( i, v ){
        head_show_img_Array.eq(i).addClass( "href" );
    });


    //图片切页
    index = 6;//先修改index再呈现页面
    timer = setInterval( change_head_show_img, 2000 );

    $.each( head_show_img_Array, function( i, v ){
        head_show_img_Array.eq( i ).bind( "mouseover", head_show_img_over );
        head_show_img_Array.eq( i ).bind( "mouseleave", head_show_img_leave);
    });

    var jiantou = $(".head-jiantou").children();
    $.each( jiantou, function( i, v ){
        jiantou.eq( i ).bind( "mouseover", head_show_img_over );
        jiantou.eq( i ).bind( "mouseleave", head_show_img_leave );
    });
    jiantou.eq( 0 ).bind( "click", function(){
        head_show_img_Array.eq( index ).css( "z-index", "1" );
        index = ( index - 1 +  6 ) % 6 ;
        head_show_img_Array.eq( index ).css( "z-index", "2" );
        //马上显示跳转后的页面。若不显示只修改index，继续执行setInterval()，则下一个显示页面是index-1+1的页面
    });
    jiantou.eq( 1 ).bind( "click", function(){
        head_show_img_Array.eq( index ).css( "z-index", "1" );
        index = ( index + 1 ) % 6;
        head_show_img_Array.eq( index ).css( "z-index", "2" );
        //马上显示跳转后的页面。若不显示只修改index，继续执行setInterval()，则下一个显示页面是index+1+1的页面
    });

});

//图片切页
function change_head_show_img(){
    index = ( index + 1 ) % 6;
    //如果放在后面，呈现当前页面后立即执行index+1，暂停2s，
    // 期间用户可能点击下一页，导致又执行index+1，则呈现效果是index+2的页面，不对。
    //所以要放在前面，修改了页面后马上呈现页面，中间间隔小，
    // 可忽略出现+1后还没呈现页面，用户又点击下一页的情况

    $.each( head_show_img_Array, function( i, v ){
        head_show_img_Array.eq( i ).css( "z-index", "1" );
    });
    head_show_img_Array.eq( index).css( "z-index", "2" );
}

//头部图片切换
function head_show_img_over(){//鼠标放在图片/箭头上
    clearInterval( timer );

    var img_height = head_show_img_Array.eq( 0).height();
    $(".last-jiantou").css({//随窗口大小改变而改变
        "display": "block",
        "font-size" : img_height / 3 + "px",
        "top" : img_height / 3 + "px"
    });
    $(".next-jiantou").css({
        "display": "block",
        "font-size" : img_height / 3 + "px",
        "top" : img_height / 3 + "px"
    });
}
function head_show_img_leave(){
    timer = setInterval( change_head_show_img, 2000 );
    $(".last-jiantou").css( "display", "none" );
    $(".next-jiantou").css( "display", "none" );
}