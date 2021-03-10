$(function(){


    // 헤더 메뉴창 클릭
    $('.header .burger a').on('click',function(e){
        e.preventDefault();
        $('.header .panel').toggleClass('active');
    });

    $('.header .panel .close').on('click',function(){
        $('.header .panel').removeClass('active');
    });

    //팝업 창 클릭
    $('.popUp').on('click',function(){
        //$('.popUpImg').show();
        $('.cont .main_c .popUpImg').show();
    });

    $('.cont .main_c .popUpImg').on('click',function(){
        $('.cont .main_c .popUpImg').hide();
    });

})