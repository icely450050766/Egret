/**
 * Created by wai on 2015/7/14.
 */
$(document).ready( function(){

    var window_width = $(window).width();
    var head_show_img_Array = $(" .head-show-imgs").children("head-show-img");

   window.onresize = function(){//�������ڸı��¼�

       window_width = $(window).width();

       //ͷ��
       if( window_width > 450 ){
           $(".head-daohang-container").css( "width", window_width * 0.75 + "px" );//����������
           $(".head-daohang-img").css({//������
               "display" : "block",
               "width" : window_width * 0.15 + "px",
               "left" : ( window_width - $(".head-daohang-img").width() ) / 2 + "px"
           });

           $.each( head_show_img_Array, function( i, v ){//�л�ͼƬ�������߶�
              head_show_img_Array.eq( i).css( "display", "block" ); //��ʾ
           });
       }
       else{
           $(".head-daohang-container").css( "width", window_width );
           $(".head-daohang-img").css( "display", "none" );

           $.each( head_show_img_Array, function( i, v ){
               head_show_img_Array.eq( i).css( "display", "none" ); //����
           });
       }
       $(".head").css( "height", $(".head-daohang-container").height() + head_show_img_Array.eq( 0 ).height() + "px" );//����ͷ���ĸ߶�
   }
});