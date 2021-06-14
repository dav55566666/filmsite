var play_vid = 0

$(".video_block_box").click(function(event){
  if(play_vid==0){
    play_vid=1
    $(this).children(".vid_show").show()
    $(this).children(".video_block_box img").hide()
    $(this).children(".video_block_box button").hide()
    $(this).children(".vid_show").get(0).play();
    $(this).children(".vid_show").css("z-index","5")
    $(this).children(".sale_cont_flex_item_video_text").hide()

  }
  else {
    $(this).children(".vid_show").hide();
    $(this).children(".video_block_box img").show()
    $(this).children(".video_block_box button").show()
    $(this).children(".vid_show").get(0).pause();
    $(this).children(".vid_show").css("z-index","-2")
    $(this).children(".sale_cont_flex_item_video_text").show()
    play_vid=0
  }
})
var b = 6;
if($(window).width()<885){
  b = 2
}
var swiper = new Swiper('.swiper-container1', {
	slidesPerView: b,
	spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination115',
  },
  navigation: {
    nextEl: '.next_ssale115',
    prevEl: '.prev_ssale115',
  },
});
var swiper = new Swiper('.swiper-container2', {
	spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.next_ssale1',
    prevEl: '.prev_ssale1',
  },
  pagination: {
    el: '.swiper-pagination1',
  },
});
var swiper = new Swiper('.swiper-container3', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.next_ssale2',
    prevEl: '.prev_ssale2',
  },
  pagination: {
    el: '.swiper-pagination2',
  },
});
var swiper = new Swiper('.mount', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.arrov_next1',
    prevEl: '.arrov_prev1',
  },
  pagination: {
    el: '.swiper-pagination2',
  },
});
var swiper = new Swiper('.mount_days', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.arrov_next2',
    prevEl: '.arrov_prev2',
  },
  pagination: {
    el: '.swiper-pagination2',
  },
});
var menu=0;
$(".open_menu").click(function(){
  if(menu==0){
    $(".header_cont_rigth").slideDown(500)
    menu=1
  }
  else{
    $(".header_cont_rigth").slideUp(500)
    menu=0
  }
})
$(".cuantminus").click(function(){
  if($(this).siblings("input").val()>0){
    $(this).siblings("input").val(+$(this).siblings("input").val()-1)
  }
})
$(".cuantplus").click(function(){
    $(this).siblings("input").val(+$(this).siblings("input").val()+1)
})
var bra = 0
$(".open_mest").click(function(event){
  if(bra == 0){
    $(".set_parking").slideDown(500)
    bra = 1
  }else{
    $(".set_parking").slideUp(500)
    bra = 0
  }
})
$(".add_mest").click(function(){
  $(".select_mest input").val($(this).val());
  $(".section_flex button").removeClass("selected")
  $(this).addClass("selected")
  $(".set_parking").slideUp(500)
  bra = 0
})
