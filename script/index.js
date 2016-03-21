$(function(){
    $('.logo a:eq(0)').css('color','#3199f4');
    var windowW=window.screen.width;
    var windowH=window.screen.height;
    $('.logo').css({'width':windowW});
    
    //$('.contentThree').css({'width':windowW});

    //约
    $('.about').mouseover(function(){
        if(!$('.about').is(':animated')) {
            $(this).animate({marginLeft: '88%'}, 700);
            $(this).children("div").css({backgroundColor:'#ddd'})
                   .next('div').css({backgroundColor:'#eee'});
            $('.vector').children('i').css({color:'#0089cd'});
        }
    }).mouseout(function(){
        if(!$('.about').is(':animated')){
            $(this).animate({marginLeft:'95.6%'},700);
            $(this).children("div").css({backgroundColor:'#0089cd'})
                .next('div').css({backgroundColor:'#eee'});
            $('.vector').children('i').css({color:'#eee'});
        }
    });
   
    
    $(window).one('scroll',function(){ //当用户滚动指定的元素时，会发生 scroll 事件。
        var top = $(window).scrollTop()+window.innerHeight;  // 滚动条与当前窗口顶部的距离+当前窗口的宽度
        var ys=$('.public,.operate').offset().top ;          
            console.log(top +':' +ys+':'+window.innerHeight);        
        if(top>ys){
              setTimeout(function(){
                $('.public').css({'animation':'public 4s 1'})
                .siblings(':eq(1)').css({'animation':'operate 4s 1'});},100);                
                
        } else if (top<ys) {
            $('.public,.operate').removeAttr('style');
        };
    });   
    //产品
    $('.publicYS').mouseenter(function(){                 
        if(!$(this).is(':animated')){
            $(this).children(':eq(1)').fadeIn('slow').siblings().children('div').css('color','#0089cd');
            $(this).children(':eq(0)').children('div').addClass('bza');
            $(this).css({'animation':'publicYS 4s','animation-play-state':'paused'});
    }
    }).mouseleave(function(){        
        if(!$(this).is(':animated')){
            $(this).children(':eq(1)').fadeOut('slow').siblings().children('div').css('color','#444');
            $(this).children(':eq(0)').children('div').removeClass('bza');
            $(this).removeAttr('style');
        }
    });  

    //梦想计划
    $('.dreamPublicS').hover(function(){      
        if(!$(this).is(':animated')){
           $(this).children('p').addClass('hover1').siblings('img').hide().siblings('span').show();
           $(this).children('p').siblings('span').addClass('hover1');
        }
    },function(){
        if(!$(this).is(':animated')){
          $(this).children('p').removeClass('hover1').siblings('img').show().siblings('span').hide();
          $(this).children('p').siblings('span').removeClass('hover1');
        }
    });  

    // 幻灯片
    var liLength=$('.slideUl li').length;//li的总个数
    var pages=liLength/6; //一共几页   
     current=1;//当前的个数           
    $('.slideLeft').click(function(){  
        $('.slideRight').children('img').show().siblings('.slideImg4').hide();  
        if(1==current){                         
            $(this).children('img').hide().siblings('.slideImg2').show();          
            return false;
        }else{
            $('.slidexs').animate({left:'+=96%'},300); 
            if(2==current){
                $('.slideImg2').show().siblings('.slideImg1').hide();
            } 
            current--;          
        }        
    });
    $('.slideRight').click(function(){          
         $('.slideLeft').children('img').show().siblings('.slideImg2').hide();    
         if(pages==current){
            $(this).children('img').hide().siblings('.slideImg4').show(); 
            return false;
         }else{
            $('.slidexs').animate({left:'-=96%'},300);    
            if(2==current){
                $('.slideImg4').show().siblings('.slideImg3').hide();
            } 
            current++;    
         }             
    });
     
    // //元素相当于窗口的左边的偏移量
    // var publicJU=$('.publicJU').offset().top; 
    // alert(publicJU+'元素相当于窗口的左边的偏移量');

    // //元素相对于窗口的上边的偏移量
    // var publicJU=$('.publicJU').offset().top; 
    // alert(publicJU+'元素相对于窗口的上边的偏移量');  
    
    // //元素相对于滚动条左边的偏移量
    // var publicJU=$('.publicJU').scrollLeft();
    // alert(publicJU+'元素相对于滚动条左边的偏移量');  

    // //元素相对于滚动条顶部的偏移量 
    // var publicJU=$('.publicYS') .scrollTop();
    // alert(publicJU+'元素相对于滚动条顶部的偏移量'); 


    // var left=$(".publicYS").offset().left;
    // alert(left+'a');

    
  
});