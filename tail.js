/**
 * Created by wai on 2015/7/14.
 */
$(document).ready( function(){

    var tail_a_Array = $(".tail_p").children("a");
    $.each( tail_a_Array, function( i, v ){
        tail_a_Array.eq( i).addClass("href");
    });

    var tail_p_Array = $(".tail").children("p");//�и�24px
    var temp = 5;
    $.each( tail_p_Array, function( i, v ){
        tail_p_Array.eq( i).css( "top", temp + "px" );
        temp += 24;//�и�24px
    });

    //�Ǿ��ǰ󶨵�ʱ��ֻ���Ѿ�����class�İ��˺�����������class�ı�ǩû�а󶨺���??
    $(".href").bind( "click", function(){//���ӣ��������󶨣�
        window.location.assign("local.html");//������ҳ��
    });

});