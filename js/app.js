$(document).ready(function(){
  if($(window).outerWidth() < 1024){
    $('#section-2').css({'height':`${$(window).height()*2}px`});
    $('#section-2 > div:nth-child(1)').css({'top':`${$(window).height()}px`});
    $('#section-3').css({'height':`${$(window).height()*2}px`});
  }
  if($(window).outerWidth() >= 1024){
    $('#section-2').css({'height':`${$(window).height()}px`});
    $('#section-2 > div:nth-child(1)').css({'top':`0`});
    $('#section-3').css({'height':`${$(window).height()}px`});
  }
  if($(window).outerWidth() >= 1400){
    $('circle').attr({'cx':'128','cy':'128','r':'120'});
  }
  if($(window).outerWidth() < 1400 && $(window).outerWidth() >= 768){
    $('circle').attr({'cx':'111','cy':'111','r':'105'});
  }
  if($(window).outerWidth() < 768){
    $('circle').attr({'cx':'79','cy':'79','r':'75'});
  }
  $('#section-1 > div:nth-child(2) > div:nth-child(2)')
  .css({'left':
  `${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
  $('#section-1 > div:nth-child(2) > div:nth-child(2) > div > button')
  .css({'left':
  `${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
  $('#section-2 > div:nth-child(1) > div:nth-child(1)').css({'height':`${$(window).height()}px`});
  $('#section-1 > div:nth-child(1)').css({'height':`${$(window).height()}px`});
  $('#section-2 > div:nth-child(2)').css({'height':`${$(window).height()}px`});
  $('#section-3 > div:nth-child(1)').css({'height':`${$(window).height()}px`});
  $('#section-3 > div:nth-child(2)').css({'height':`${$(window).height()}px`});
  setTimeout(() => {
    if(($('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()) <= ($(window).height())){
      $('#section-1 > div:nth-child(2)').css({'height':`${$(window).height()}px`});
      $('#section-1').css({'height':`${$(window).height()}px`});
    }
    if(($('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()) > ($(window).height())){
      if($(window).outerWidth() >= 768){
        $('#section-1 > div:nth-child(2)').css({'height':`${$('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()}px`});
        $('#section-1').css({'height':`${$('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()}px`});
      }
      if($(window).outerWidth() < 768){
        $('#section-1 > div:nth-child(2)').css({'height':`${$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()}px`});
        $('#section-1').css({'height':`${$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()}px`});
      }
    }
  }, 500);
  let number= 0;
  let num = $('#section-2 > div:nth-child(1) > div:nth-child(2) > div:last-child > div span:nth-child(2)');
  for(let i=0 ; i<$(num).length ; i++){
    $(num)[i].innerHTML= number;
  }
  let dval=754;
  window.onscroll = ()=>{
      if(($('#section-2 > div:nth-child(2)').hasClass('fixClass')) &&
      ($('#section-2 > div:nth-child(2)').hasClass('fixed'))){
        $('#section-2 > div:nth-child(2)').removeClass('fixed').addClass('absolute');
      }
      let s1_1=$('#section-1 > div:nth-child(1)').outerHeight();
      let s1_2=$('#section-1 > div:nth-child(2)').outerHeight();
      let s1=$('#section-1').outerHeight();
      let s2_1=$('#section-2 > div:nth-child(1)').outerHeight();
      let s2_2=$('#section-2 > div:nth-child(2)').outerHeight();
      let s2=$('#section-2').outerHeight();
      if ($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight() > 0){
        let valCircleLg= 
        ($('#section-1 > div:nth-child(2)').outerHeight())
         +
        ($(window).height()*0.65) 
         +
        ($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())
         - 
        ($(window).height()) 
         -
        ($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:last-child > div').outerHeight()*0.5)
         -
         parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:last-child').css('paddingBottom'));
        let valCircleSm =
        ($('#section-1 > div:nth-child(2)').outerHeight())
         +
        ($(window).height()*1.65) 
         +
        ($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())
         - 
        ($(window).height()) 
         -
        ($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:last-child > div').outerHeight()*0.5)
         -
         parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:last-child').css('paddingBottom'));
        let valCircleDfl =
        ($('#section-1 > div:nth-child(2)').outerHeight())
         +
        ($(window).height()*1.65) 
         +
        ($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())
         - 
        ($(window).height()) 
         -
        ($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:last-child > div').outerHeight()*0.75)
         -
         parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:last-child').css('paddingBottom'));
        if (($(window).scrollTop() > valCircleLg && $(window).outerWidth()>=1024) 
        || 
        ($(window).scrollTop() > valCircleSm 
        && $(window).outerWidth()<1024 && $(window).outerWidth() >= 576) 
        || 
        ($(window).scrollTop() > valCircleDfl && $(window).outerWidth() < 576)) {
            if($(num)[0].innerHTML == 0 && $(num)[1].innerHTML == 0){
              setInterval(() => {
                if(dval > 0){
                  dval-=13;
                  $('svg circle:nth-child(2)').css({'stroke-dashoffset':`${dval}`});
                }
              }, 50);
              let [num1,num2]=[0,0];
              setInterval(() => {
                if(num1 <= 110){
                  $(num)[0].innerHTML=num1;
                  num1+=2;
                }
              }, 40);
              setInterval(() => {
                if(num2 <= 800){
                  $(num)[1].innerHTML=num2;
                  num2+=20;
                }
              }, 45);
            }
        }
        let valLg= 
        ($('#section-1 > div:nth-child(2)').outerHeight())
         +
        ($(window).height()*0.65) 
         +
        ($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())
         - 
        ($(window).height());
        if ($(window).scrollTop() < s1_2 && $(window).outerWidth() >= 1024){
          $('#section-2 > div:nth-child(2)').removeClass('fixed').addClass('absolute')
          .css({'bottom':`${$('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()-($(window).height()*0.35)}px`,'height':`${$(window).height()}px`});
          $('#section-2 button').css({'position':'absolute','top':'0','right':'0'});
        }
        if ($(window).scrollTop() > s1 && $(window).scrollTop() < valLg 
        && $(window).outerWidth() >= 1024) {
          $('#section-2 > div:nth-child(2)').removeClass('absolute').addClass('fixed')
          .css({'bottom':`0`,'top':`0`,'height':`${$(window).height()}px`});
          $('#section-2 button').css({'position':'fixed','top':'65%','right':'25%'});
        }
        if ($(window).scrollTop() > valLg && $(window).outerWidth() >= 1024){
          $('#section-2 > div:nth-child(2)').removeClass('fixed').addClass('absolute')
          .css({'top':`${$('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()-$(window).height()*0.35}px`,'height':`${$(window).height()}px`});
          $('#section-2 button')
          .css({'position':'absolute'
          ,'top':`${($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())-($(window).height()*0.35)}px`,'right':'0'});
        }
        if (($(window).scrollTop() < s1+$(window).height()) 
           &&
           ($(window).outerWidth() < 1024)){
              $('#section-2 button')
              .css({'position':'absolute'
              ,'top':`-${$(window).height()*(0.65)*(0.95)}px`
              ,'right':`${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
        }
        if ( ($(window).scrollTop() > s1+$(window).height()) 
           && 
           ($(window).scrollTop() < (s1+s2-(parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').css('paddingBottom'))*2)))
            && 
          ($(window).outerWidth() < 1024)){
            $('#section-2 button')
            .css({'position':'fixed','top':'3%'
            ,'right':`${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
        }
        if (($(window).scrollTop() > (s1+s2-(parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').css('paddingBottom'))*2)))
           &&
          ($(window).outerWidth() < 1024)){
              $('#section-2 button')
              .css({'position':'absolute'
              ,'top':`${$('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()
              -(parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').css('paddingBottom'))*2)}px`
              ,'right':`${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
        }
      }
      if (($(window).scrollTop() < s1_2 - $(window).height())
       && ($(window).outerWidth() >= 1024)){
        $('#section-1 > div:nth-child(1)').removeClass('absolute').addClass('fixed')
        .css({'top':`0`,'height':`${$(window).height()}px`});
      }
      if (($(window).scrollTop() > s1_2 - $(window).height()) 
      && ($(window).outerWidth() >= 1024)){
        $('#section-1 > div:nth-child(1)').removeClass('fixed').addClass('absolute')
        .css({'height':`${$(window).height()}px`});
        if(($('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()) <= ($(window).height())){
          $('#section-1 > div:nth-child(1)').css({'top':`0`});
        }
        else{
          $('#section-1 > div:nth-child(1)').css({'top':`${s1_2-$(window).height()}px`});
        }
      }
      if ($(window).scrollTop()+1 > s1) {
        $($('#section-2 > div:nth-child(2) > div p')[0])
        .css({'opacity':'1','transform':'translateY(0)'});
        setTimeout(() => {
          $($('#section-2 > div:nth-child(2) > div p')[1])
        .css({'opacity':'1'});
        }, 1000);
      }
  }
  $(window).resize(()=>{
    if($(window).outerWidth() >= 1400){
      $('circle').attr({'cx':'128','cy':'128','r':'120'});
    }
    if($(window).outerWidth() < 1400 && $(window).outerWidth() >= 768){
      $('circle').attr({'cx':'111','cy':'111','r':'105'});
    }
    if($(window).outerWidth() < 768){
      $('circle').attr({'cx':'79','cy':'79','r':'75'});
    }
    $('#section-1 > div:nth-child(2) > div:nth-child(2)')
    .css({'left':
    `${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
    $('#section-1 > div:nth-child(2) > div:nth-child(2) > div > button')
    .css({'left':
    `${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
    if($('#section-1 > div:nth-child(2) > div:nth-child(2) > div').hasClass('block')
    && $(window).outerWidth()>= 768){
      $('#section-1 > div:nth-child(2) > div:nth-child(2) > div')
        .removeClass('block').addClass('hidden');
        $('body').removeClass('overflow-hidden');
    }
    if($(window).outerWidth() < 1024){
      $('#section-2 > div:nth-child(2)').css({'top':'0','bottom':'unset'});
      if($('#section-2 > div:nth-child(2)').hasClass('fixed')){
        $('#section-2 > div:nth-child(2)').removeClass('fixed').addClass('absolute');
      }
      $('#section-3').css({'height':`${$(window).height()*2}px`});
        $('#section-2 > div:nth-child(1)').css({'top':`${$(window).height()}px`});
        if(!($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight() > 0)){
          $('#section-2').css({'height':`${$(window).height()*2}px`});
        }
        if($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight() > 0){
          $('#section-2').css({'height':`${$('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()+($(window).height()*1.65)}px`});
        }
    }
    if($(window).outerWidth() >= 1024){
      $('#section-3').css({'height':`${$(window).height()}px`});
        $('#section-2 > div:nth-child(1)').css({'top':`0`});
        if(!($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight() > 0)){
          $('#section-2').css({'height':`${$(window).height()}px`});
        }
        if($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight() > 0){
          $('#section-2').css({'height':`${$('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()+($(window).height()*0.65)}px`});
        }
    }
    $('#section-3 > div:nth-child(1)').css({'height':`${$(window).height()}px`});
    $('#section-3 > div:nth-child(2)').css({'height':`${$(window).height()}px`});
    $('#section-2 > div:nth-child(2)').css({'height':`${$(window).height()}px`});
    let s1_1=$('#section-1 > div:nth-child(1)').outerHeight();
    let s1_2=$('#section-1 > div:nth-child(2)').outerHeight();
    let s1=$('#section-1').outerHeight();
    let s2_1=$('#section-2 > div:nth-child(1)').outerHeight();
    let s2_2=$('#section-2 > div:nth-child(2)').outerHeight();
    let s2=$('#section-2').outerHeight();
    if(($('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()) <= ($(window).height())){
      $('#section-1 > div:nth-child(2)').css({'height':`${$(window).height()}px`});
      $('#section-1').css({'height':`${$(window).height()}px`});
    }
    if(($('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()) > ($(window).height())){
      if($(window).outerWidth() >= 768){
        $('#section-1 > div:nth-child(2)').css({'height':`${$('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()}px`});
        $('#section-1').css({'height':`${$('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()}px`});
      }
      if($(window).outerWidth() < 768){
        $('#section-1 > div:nth-child(2)').css({'height':`${$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()}px`});
        $('#section-1').css({'height':`${$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()}px`});
      }
    }
      if ((($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()) > 0)){
        let valLg= 
        ($('#section-1 > div:nth-child(2)').outerHeight())
         +
        ($(window).height()*0.65) 
         +
        ($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())
         - 
        ($(window).height());
        if ($(window).scrollTop() < s1_2 && $(window).outerWidth() >= 1024){
          $('#section-2 > div:nth-child(2)').removeClass('fixed').addClass('absolute')
          .css({'bottom':`${$('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()-($(window).height()*0.35)}px`,'height':`${$(window).height()}px`});
          $('#section-2 button').css({'position':'absolute','top':'0','right':'0'});
        }
        if ($(window).scrollTop() > s1_2 && $(window).scrollTop() < valLg 
        && $(window).outerWidth() >= 1024) {
          $('#section-2 > div:nth-child(2)').removeClass('absolute').addClass('fixed')
          .css({'bottom':`0`,'top':`0`,'height':`${$(window).height()}px`});
          $('#section-2 button').css({'position':'fixed','top':'65%','right':'25%'});
        }
        if ($(window).scrollTop() > valLg && $(window).outerWidth() >= 1024){
          $('#section-2 > div:nth-child(2)').removeClass('fixed').addClass('absolute')
          .css({'top':`${$('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()-$(window).height()*0.35}px`,'height':`${$(window).height()}px`});
          $('#section-2 button')
          .css({'position':'absolute'
          ,'top':`${($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())-($(window).height()*0.35)}px`,'right':'0'});
        }
        if (($(window).scrollTop() < s1+$(window).height()) 
           &&
           ($(window).outerWidth() < 1024)){
              $('#section-2 button')
              .css({'position':'absolute'
              ,'top':`-${$(window).height()*(0.65)*(0.95)}px`
              ,'right':`${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
        }
        if ( ($(window).scrollTop() > s1+$(window).height()) 
           && 
           ($(window).scrollTop() < (s1+s2-(parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').css('paddingBottom'))*2)))
            && 
          ($(window).outerWidth() < 1024)){
            $('#section-2 button')
            .css({'position':'fixed','top':'3%'
            ,'right':`${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
        }
        if (($(window).scrollTop() > (s1+s2-(parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').css('paddingBottom'))*2)))
           &&
          ($(window).outerWidth() < 1024)){
              $('#section-2 button')
              .css({'position':'absolute'
              ,'top':`${$('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight()
              -(parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').css('paddingBottom'))*2)}px`
              ,'right':`${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
        }
      }
      if (($(window).scrollTop() < s1_2 - $(window).height())
       && ($(window).outerWidth() >= 1024)){
        console.log(0);
        $('#section-1 > div:nth-child(1)').removeClass('absolute').addClass('fixed')
        .css({'top':`0`,'height':`${$(window).height()}px`});
      }
      if (($(window).scrollTop() > s1_2 - $(window).height()) 
      && ($(window).outerWidth() >= 1024)){
        $('#section-1 > div:nth-child(1)').removeClass('fixed').addClass('absolute')
        .css({'height':`${$(window).height()}px`});
        if(($('#section-1 > div:nth-child(2) > div:nth-child(1)').outerHeight()+$('#section-1 > div:nth-child(2) > div:last-child').outerHeight()) <= ($(window).height())){
          $('#section-1 > div:nth-child(1)').css({'top':`0`});
        }
        else{
          $('#section-1 > div:nth-child(1)').css({'top':`${$('#section-1 > div:nth-child(2)').outerHeight()-$(window).height()}px`});
          console.log($('#section-1 > div:nth-child(2)').outerHeight()-$(window).height());
        }
      }
      if($('#section-2').hasClass('activePlus')){
        $('#section-2 > div:nth-child(1) > div:nth-child(1)').css({'height':`${$(window).height()*0.65}px`});
      }
      if(!$('#section-2').hasClass('activePlus')){
        $('#section-2 > div:nth-child(1) > div:nth-child(1)').css({'height':`${$(window).height()}px`});
      }
  });
    $('#section-2 > div:nth-child(1) > div:nth-child(1)').click(()=>{
      if(!$('#section-2').hasClass('active')){
        $('#section-2').addClass('active');
        $('#section-2 nav ul')
        .removeClass('xl:text-2-5xl lg:text-2xl')
        .addClass('xl2:text-xl xl:text-lg lg:text-base');
        $('#section-2 nav ul > li').removeClass('lg:px-5').addClass('lg:px-3');
        $('#section-2 > div:nth-child(2) > div > p:nth-child(1)')
        .removeClass('xl:text-6xl lg:text-5-5xl')
        .addClass('xl:text-5xl lg:text-4-5xl');
        $('#section-2 > div:nth-child(2) > div > p:nth-child(2)')
        .removeClass('xl:text-4xl lg:text-3xl')
        .addClass('xl:text-3xl lg:text-2-5xl');
          if($(window).outerWidth() < 1024){
            $(window).scrollTop($('header').outerHeight()+$(window).height());
          }
          if($(window).outerWidth() >= 1024){
            $(window).scrollTop($('header').outerHeight());
          }
          $('#section-2 > div:nth-child(1) > div:nth-child(1) > div').css({'opacity':'1'});
          $('#section-2 > div:nth-child(2) > div p:last-child')
          .addClass('text-white');
          $('#section-2 > div:nth-child(1) > div:nth-child(1)')
          .css({'transform':'scale(1.0)'});
          $('#section-2 > div').addClass('transition-width duration-1000');
          $('#section-2 > div:nth-child(1)').removeClass(`lg:w-3/5`).addClass('lg:w-3/4');
          $('#section-2 > div:nth-child(2)').removeClass(`lg:w-2/5`).addClass('lg:w-1/4');
          setTimeout(() => {
            $('#section-2').addClass('activePlus');
            $('#section-2 > div:nth-child(1) > div:nth-child(1)').css({'transition':'all 1s','height':`${$(window).height()*0.65}px`});
            $('#section-2 > div:nth-child(1)').removeClass('overflow-hidden');
            $('#section-2 > div').removeClass('transition-width duration-1000');
          }, 1000);
          function appear(){
              return new Promise( (resolve , reject) => {
                setTimeout( () => {
                  resolve($('#section-2 > div:nth-child(1) > div:nth-child(2)')
                  .css({'height':'auto','overflow':'unset','opacity':'1'}));
                },2000);
              });
          }
          appear().then(xfunc);
          function xfunc(){
            $('#section-2 > div:nth-child(1) > div:nth-child(1)').css({'transition':'none'});
            $('#section-2 > div:nth-child(2)').css({'height':`${$(window).height()}px`});
            if($(window).outerWidth() < 1024){
              $('#section-2').css({'height':`${($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())+($(window).height()*1.65)}px`});
              $('#section-2 button')
              .css({'position':'absolute','top':`-${$(window).height()*(0.65)*(0.95)}px`,'right':`${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
              if($(window).scrollTop() > 
              ($('#section-1 > div:nth-child(2)').outerHeight()+$(window).height())){
                $('#section-2 button').css({'position':'fixed','top':'3%','right':`${parseInt($('#section-2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css('paddingRight'))*0.75}px`});
              }
            }
            if($(window).outerWidth() >= 1024){
              $('#section-2').css({'height':`${($('#section-2 > div:nth-child(1) > div:nth-child(2)').outerHeight())+($(window).height()*0.65)}px`});
              $('#section-2 button').css({'position':'absolute','top':'0','right':'0'});
              if(($(window).scrollTop() > $('#section-1 > div:nth-child(2)').outerHeight())
              && ($('#section-2 > div:nth-child(2)').hasClass('absolute'))){
                $('#section-2 > div:nth-child(2)')
                .removeClass('absolute').addClass('fixed').css({'bottom':`0`,'top':`0`});
                $('#section-2 button').css({'position':'fixed','top':'65%','right':'25%'});
              }
            }
          }
      }
    });
    $('#section-2 button').click( ()=>{
      $('#section-2').removeClass('activePlus');
      if($(window).outerWidth() < 1024){
        $(window).scrollTop($('header').outerHeight()+$(window).height());
      }
      if($(window).outerWidth() >= 1024){
        $(window).scrollTop($('header').outerHeight());
      }
      $('#section-2 > div:nth-child(1) > div:nth-child(1)').css({'transition':'all 1s'});
      $('#section-2 > div:nth-child(1) > div:nth-child(2)').css({'opacity':'0'});
      setTimeout( () => {
        $('#section-2 > div:nth-child(2)').addClass('fixClass');
        $('#section-2 > div:nth-child(1)').addClass('overflow-hidden');
        $('#section-2 > div:nth-child(1) > div:nth-child(2)').css({'height':'0', 'overflow':'hidden'});
        if($(window).outerWidth() >= 1024){
          $('#section-2').css({'height':`${$(window).height()}px`});
        }
        if($(window).outerWidth() < 1024){
          $('#section-2').css({'height':`${$(window).height()*2}px`});
        }
        if($('#section-2 > div:nth-child(2)').hasClass('fixed')){
          $('#section-2 > div:nth-child(2)').removeClass('fixed').addClass('absolute');
        }
        $('#section-2 > div:nth-child(1) > div:nth-child(1)').css({'height':`${$(window).height()}px`});
        setTimeout(() => {
          $('#section-2 > div:nth-child(2)').removeClass('fixClass');
        }, 500);
        setTimeout(()=>{
          $('#section-2 > div:nth-child(2) > div > p:nth-child(1)')
          .removeClass('xl:text-5xl lg:text-4-5xl')
          .addClass('xl:text-6xl lg:text-5-5xl');
          $('#section-2 > div:nth-child(2) > div > p:nth-child(2)')
          .removeClass('xl:text-3xl lg:text-2-5xl')
          .addClass('xl:text-4xl lg:text-3xl');
          $('#section-2 > div').addClass('transition-width duration-1000');
          $('#section-2 > div:nth-child(1)').removeClass(`lg:w-3/4`).addClass('lg:w-3/5');
          $('#section-2 > div:nth-child(2)').removeClass(`lg:w-1/4`).addClass('lg:w-2/5');
          $('#section-2 > div:nth-child(1) > div:nth-child(1)').css({'transition':'transform 1s'});
          setTimeout(() => {
            $('#section-2 > div').removeClass('transition-width duration-1000');
            $('#section-2 nav ul')
            .removeClass('xl2:text-xl xl:text-lg lg:text-base')
            .addClass('xl:text-2-5xl lg:text-2xl');
            $('#section-2 nav ul > li').removeClass('lg:px-3').addClass('lg:px-5');
            if($('#section-2 > div:nth-child(1) > div:nth-child(1)').is(':hover')){
              $('#section-2 > div:nth-child(1) > div:nth-child(1) > div')
              .css({'opacity':'1'});
              $('#section-2 > div:nth-child(1) > div:nth-child(1)')
              .css({'transform':'scale(1.1)'});
            }
            if(!$('#section-2 > div:nth-child(1) > div:nth-child(1)').is(':hover')){
              $('#section-2 > div:nth-child(1) > div:nth-child(1) > div')
              .css({'opacity':'0'});
              $('#section-2 > div:nth-child(1) > div:nth-child(1)')
              .css({'transform':'scale(1.0)'});
            }
            if($('#section-2 > div:nth-child(2) > div p:last-child').is(':hover')){
              $('#section-2 > div:nth-child(2) > div p:last-child')
              .addClass('text-white');
            }
            if(!$('#section-2 > div:nth-child(2) > div p:last-child').is(':hover')){
              $('#section-2 > div:nth-child(2) > div p:last-child')
              .removeClass('text-white');
            }
            $('#section-2').removeClass('active');
          }, 1000);
        },1000);
      },1000);
    });
    for(let k=0 ; k < $('.list-items li a').length ; k++){
      $($('.list-items li a')[k]).hover(()=>{
        $($('.list-items li')[k]).addClass('activeW');
      },()=>{
       $($('.list-items li')[k]).removeClass('activeW');
      });
    }
    $($('#section-2 > div:nth-child(1) > div:nth-child(1) h5')).hover(()=>{
      $('#section-2 > div:nth-child(1) > div:nth-child(1) h5').removeClass('text-shadow-1').addClass('text-shadow-2');
    },()=>{
      $('#section-2 > div:nth-child(1) > div:nth-child(1) h5').removeClass('text-shadow-2').addClass('text-shadow-1');
    });
    $('#section-2 > div:nth-child(1) > div:nth-child(1)').hover(()=>{
       $('#section-2:not(.active) > div:nth-child(1) > div:nth-child(1) > div').css({'opacity':'1'});
    },()=>{
      $('#section-2:not(.active) > div:nth-child(1) > div:nth-child(1) > div').css({'opacity':'0'});
    });
    $('#section-2:not(.active) > div:nth-child(2) > div p:last-child').hover(()=>{
      $('#section-2:not(.active) > div:nth-child(2) > div p:last-child')
      .addClass('text-white');
    },()=>{
      $('#section-2:not(.active) > div:nth-child(2) > div p:last-child')
      .removeClass('text-white');
    });
    $('#section-2:not(.active) > div:nth-child(1) > div:nth-child(1)').hover(()=>{
      $('#section-2:not(.active) > div:nth-child(1) > div:nth-child(1)')
      .css({'transform':'scale(1.1)'});
    },()=>{
      $('#section-2:not(.active) > div:nth-child(1) > div:nth-child(1)')
      .css({'transform':'scale(1.0)'});
    });
    $('#section-1 > div:nth-child(2) > div:nth-child(2) > button').click( ()=>{
        $('#section-1 > div:nth-child(2) > div:nth-child(2) > div')
        .removeClass('hidden').addClass('block');
        $('body').addClass('overflow-hidden');
    });
    $('#section-1 > div:nth-child(2) > div:nth-child(2) > div > button').click( ()=>{
        $('#section-1 > div:nth-child(2) > div:nth-child(2) > div')
        .removeClass('block').addClass('hidden');
        $('body').removeClass('overflow-hidden');
    });
    $('#section-1 > div:nth-child(2) > div:nth-child(2) li a').click( ()=>{
        $('#section-1 > div:nth-child(2) > div:nth-child(2) > div')
        .removeClass('block').addClass('hidden');
        $('body').removeClass('overflow-hidden');
    });
});