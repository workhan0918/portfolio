$(function(){
//script 영역
  $("header").load("./header.html");
  $(".thumb_nail_area ul li").click(function(){
    $(".thumb_nail_area ul li").removeClass("active");
    // $(".owl-stage .owl-item").removeClass("active");
    $(this).addClass("active");
    let indexNum = $(this).index();
    let itemNum = $(".owl-item")[indexNum];
    $(".owl-item").removeClass("active");
    $(itemNum).addClass("active");
  });
});
