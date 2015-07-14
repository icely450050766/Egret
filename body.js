/**
 * Created by wai on 2015/7/10.
 */
var window_width;

$(document).ready( function(){

    window_width = $(window).width();
    $(".container").css( "width", window_width * 0.9 + "px" );

    //设置标题
    set_title_style( "body-top-content-title", "body-top-content-title-dot" );
    set_title_style( "body-center-content-title", "body-center-content-title-dot" );
    set_title_style( "body-bottom-top-content-title", "body-bottom-top-content-title-dot" );
    set_title_style( "body-bottom-bottom-content-title", "body-bottom-bottom-content-title-dot" );

    var body_bottom_top_box_Array = $(".body-bottom-top-content").children();
    $.each( body_bottom_top_box_Array, function( i, v ){
        body_bottom_top_box_Array.eq( i).addClass("href");
    });

    var body_bottom_bottom_box_Array = $(".body-bottom-bottom-content-img").children();
    $.each( body_bottom_bottom_box_Array, function( i, v ){
        body_bottom_bottom_box_Array.eq( i ).addClass("href");
    });

});

function set_title_style( title, dot ){//传入的是字符串（id），设置标题样式：下边界+小圆点（居中）
    var title_width = document.getElementById( title ).offsetWidth;

    var t = ( window_width - title_width ) / 2;
    document.getElementById( title ).style.offsetLeft = t + "px";//距左像素长度

    var dot = document.getElementById( dot );//绝对布局
    dot.style.left = title_width / 2  + "px";//距左
    var title_height = document.getElementById( title ).offsetHeight;
    dot.style.top = title_height - 6 + "px";//距上
}