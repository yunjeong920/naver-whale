$(function(){
  $("#sub").hide();
  $("#main-nav").hover(function(){
    $(this).parent().find('#sub').slideDown();
    $(this).parent().hover(function(){

    },function(){
      $(this).parent().find("#sub").slideUp(900);
    })
  })
})

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

// 탭메뉴
$(function(){
  $("ul.tabs li").click(function(){
    var tab_id = $(this).attr("data-tab");
    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");
    $(this).addClass("current");
    $("#"+tab_id).addClass("current");
  })
})
