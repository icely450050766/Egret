/**
 * Created by wai on 2015/7/14.
 */
$(document).ready( function(){

    var tail_a_Array = $(".tail_p").children("a");
    $.each( tail_a_Array, function( i, v ){
        tail_a_Array.eq( i).addClass("href");
    });

    var tail_p_Array = $(".tail").children("p");//行高24px
    var temp = 5;
    $.each( tail_p_Array, function( i, v ){
        tail_p_Array.eq( i).css( "top", temp + "px" );
        temp += 24;//行高24px
    });

    //那就是绑定的时候只把已经设置class的绑定了函数。新增的class的标签没有绑定函数??
    $(".href").bind( "click", function(){//链接（放在最后绑定）
        window.location.assign("local.html");//加载新页面
    });

});