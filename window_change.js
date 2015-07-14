/**
 * Created by wai on 2015/7/14.
 */
$(document).ready( function(){

    var window_width = $(window).width();
    var head_show_img_Array = $(" .head-show-imgs").children("head-show-img");

   window.onresize = function(){//监听窗口改变事件

       window_width = $(window).width();

       //头部
       if( window_width > 450 ){
           $(".head-daohang-container").css( "width", window_width * 0.75 + "px" );//导航栏容器
           $(".head-daohang-img").css({//倒三角
               "display" : "block",
               "width" : window_width * 0.15 + "px",
               "left" : ( window_width - $(".head-daohang-img").width() ) / 2 + "px"
           });

           $.each( head_show_img_Array, function( i, v ){//切换图片的容器高度
              head_show_img_Array.eq( i).css( "display", "block" ); //显示
           });
       }
       else{
           $(".head-daohang-container").css( "width", window_width );
           $(".head-daohang-img").css( "display", "none" );

           $.each( head_show_img_Array, function( i, v ){
               head_show_img_Array.eq( i).css( "display", "none" ); //隐藏
           });
       }
       $(".head").css( "height", $(".head-daohang-container").height() + head_show_img_Array.eq( 0 ).height() + "px" );//整个头部的高度
   }
});