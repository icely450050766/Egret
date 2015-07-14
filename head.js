/**
 * Created by wai on 2015/7/9.
 */

var head_ul1_li_Array, head_ul1_li_selected;
var head_show_img_Array, index, timer;

$(document).ready( function(){

    //��ʼ��λ��
    var t = $(window).width();
    $(".head-daohang-container").css( "width", t * 0.75 + "px" );//����������
    $(".head-daohang-img").css({//������
        "width" : t * 0.15 + "px",
        "left" : ( t - $(".head-daohang-img").width() ) / 2 + "px"
    });
    $(" .head-show-imgs").css( "height", t * 0.25 + "px" );//�л���ͼƬ�������߶�

    $(".head").css( "height", $(".head-daohang-container").height() + $(" .head-show-imgs").height() + "px" );//����ͷ���ĸ߶�

    //������
    head_ul1_li_Array = $(".head-ul1").children();

    head_ul1_li_selected = 0;//Ĭ��ѡ�е�һ������
    head_ul1_li_Array.eq( head_ul1_li_selected ).addClass("style_head-ul1-li-selected");

    $.each( head_ul1_li_Array, function( i, v ){//���õ�����ÿ������

       head_ul1_li_Array.eq( i ).bind( "mouseover", function(){
           head_ul1_li_Array.eq( head_ul1_li_selected).removeClass("style_head-ul1-li-selected");//ɾ����ѡ�е������ѡ��Ч��
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
            head_ul1_li_selected = i;//����ѡ��״̬
            head_ul1_li_Array.eq( head_ul1_li_selected ).addClass("style_head-ul1-li-selected");
        });

    });

    head_show_img_Array = $(".head-show-imgs").children(".head-show-img");//���ӱ�
    var head_daohang_img = $(".head-daohang-img");//���ϱ���

    ////������ͼƬ
    //var t = head_show_img_Array.eq(0).width() / 2  -  head_daohang_img.eq(0).width() / 2 + "px";
    // $("#head-daohang-img").css( "left", t );
    ////console.log(head_daohang_img.width() + " " + head_daohang_img.eq(0).width());//ÿ��ִ�н���᲻һ��??

    //.href���¼���Ҫ���ں��棬������Ȼ������࣬��ûʵ�����Ч��������
    $.each( head_show_img_Array, function( i, v ){
        head_show_img_Array.eq(i).addClass( "href" );
    });


    //ͼƬ��ҳ
    index = 6;//���޸�index�ٳ���ҳ��
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
        //������ʾ��ת���ҳ�档������ʾֻ�޸�index������ִ��setInterval()������һ����ʾҳ����index-1+1��ҳ��
    });
    jiantou.eq( 1 ).bind( "click", function(){
        head_show_img_Array.eq( index ).css( "z-index", "1" );
        index = ( index + 1 ) % 6;
        head_show_img_Array.eq( index ).css( "z-index", "2" );
        //������ʾ��ת���ҳ�档������ʾֻ�޸�index������ִ��setInterval()������һ����ʾҳ����index+1+1��ҳ��
    });

});

//ͼƬ��ҳ
function change_head_show_img(){
    index = ( index + 1 ) % 6;
    //������ں��棬���ֵ�ǰҳ�������ִ��index+1����ͣ2s��
    // �ڼ��û����ܵ����һҳ��������ִ��index+1�������Ч����index+2��ҳ�棬���ԡ�
    //����Ҫ����ǰ�棬�޸���ҳ������ϳ���ҳ�棬�м���С��
    // �ɺ��Գ���+1��û����ҳ�棬�û��ֵ����һҳ�����

    $.each( head_show_img_Array, function( i, v ){
        head_show_img_Array.eq( i ).css( "z-index", "1" );
    });
    head_show_img_Array.eq( index).css( "z-index", "2" );
}

//ͷ��ͼƬ�л�
function head_show_img_over(){//������ͼƬ/��ͷ��
    clearInterval( timer );

    var img_height = head_show_img_Array.eq( 0).height();
    $(".last-jiantou").css({//�洰�ڴ�С�ı���ı�
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