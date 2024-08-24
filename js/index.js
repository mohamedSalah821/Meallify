/// <reference types="../@types/jquery"/>

let secTwoOffset=$('.section-two').offset().top;

$(window).on('scroll' , function(){
    let wScroll=$(window).scrollTop();
    if(wScroll>secTwoOffset - 90){
        $('.nav-bar').css({cssText : `background-color : rgba(0,0,0,0.9) !important`})
        $('.nav-bar a').css({cssText : `color: #fff`})
    }else{
        $('.nav-bar').css({cssText : 'background-color : #fff' })
        $('.nav-bar a').css({cssText : 'color: #000' })
    }
})