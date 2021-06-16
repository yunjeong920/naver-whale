$(function(){
  $("#sub").hide();
  $("#main-nav").mouseenter(function(){
    let parentElem = $(this).parent();
    let subElem = $(this).parent().find('#sub');
    subElem.stop();
    subElem.slideDown();
    parentElem.mouseleave(function(){
      subElem.stop();
      subElem.slideUp(900);
    })
  })

  // $("#main-nav,#sub").mouseenter(function(){
  //   $("#sub").stop();
  //   $("#sub").slideDown();
  // }).mouseleave(function(){
  //   $("#sub").stop();
  //   $("#sub").slideUp(900);
  // });


  $(document).ready(function() {

    $('.menu_btn>a').on('click', function() {
      $('.menu_bg').show();
      $('.sidebar_menu').show().animate({
        right: 0
      });
    });
    $('.close_btn>a').on('click', function() {
      $('.menu_bg').hide();
      $('.sidebar_menu').animate({
        right: '-' + 50 + '%'
      }, function() {
        $('.sidebar_menu').hide();
      });
    });
  });

  $(".menu_wrap li").each(function(){
    let numButton = $(this).find("button");
    numButton.click(function(){
      let offsetUl = $(this).next();
      if (offsetUl.is(":visible")) {
        offsetUl.slideUp();
        $(this).css("transform","rotate(0deg)")
      } else {
        offsetUl.slideDown();
        $(this).css("transform","rotate(180deg)")
      }
    });
  });


  // 탭메뉴
  $("ul.tabs li").click(function(){
    var tab_id = $(this).attr("data-tab");
    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");
    $(this).addClass("current");
    $("#"+tab_id).addClass("current");
  });
});
