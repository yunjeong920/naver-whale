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
});

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

$(document).ready(function() {
  $("#spreadBtn01").click(function() {
    if ($("#hiddenList01").is(":visible")) {
      $("#hiddenList01").slideUp();
      $("#spreadBtn01").css("transform","rotate(0deg)")
    } else {
      $("#hiddenList01").slideDown();
      $("#spreadBtn01").css("transform","rotate(180deg)")
    }
  });
});

$(document).ready(function() {
  $("#spreadBtn02").click(function() {
    if ($("#hiddenList02").is(":visible")) {
      $("#hiddenList02").slideUp();
      $("#spreadBtn02").css("transform","rotate(0deg)")
    } else {
      $("#hiddenList02").slideDown();
      $("#spreadBtn02").css("transform","rotate(180deg)")
    }
  });
});

$(document).ready(function() {
  $("#spreadBtn03").click(function() {
    if ($("#hiddenList03").is(":visible")) {
      $("#hiddenList03").slideUp();
      $("#spreadBtn03").css("transform","rotate(0deg)")
    } else {
      $("#hiddenList03").slideDown();
      $("#spreadBtn03").css("transform","rotate(180deg)")
    }
  });
});

$(document).ready(function() {
  $("#spreadBtn04").click(function() {
    if ($("#hiddenList04").is(":visible")) {
      $("#hiddenList04").slideUp();
      $("#spreadBtn04").css("transform","rotate(0deg)")
    } else {
      $("#hiddenList04").slideDown();
      $("#spreadBtn04").css("transform","rotate(180deg)")
    }
  });
});

$(document).ready(function() {
  $("#spreadBtn05").click(function() {
    if ($("#hiddenList05").is(":visible")) {
      $("#hiddenList05").slideUp();
      $("#spreadBtn05").css("transform","rotate(0deg)")
    } else {
      $("#hiddenList05").slideDown();
      $("#spreadBtn05").css("transform","rotate(180deg)")
    }
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
