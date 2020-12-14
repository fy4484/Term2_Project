/**
 * 返回顶部功能函数封顶
 * 2020-11-21 by 李先生
 */
$(function (){
    //把函数挂载在window 暴露出去
window.gotoTop = function (options) {

    //准备结构
    var $gotoTopHtml = $(` <div class="backToTop"><img src="${options.imgUrl}" alt=""></div>`);
     //写样式定位
     $gotoTopHtml.css({
      width: '30px',
      height: '50px',
      position: 'fixed',
      bottom: '100px',
      left: '610px',
      marginLeft: '50%',
      //display: 'none',

     })  
   //返回顶部的js代码
   /* 返回顶部 */
   //绑定事件
   $(document).scroll(function () {
       var topDistance = $('html, body').scrollTop();
       //判断
       if (topDistance > 500) {
           $('.backToTop').fadeIn();
       } else {
           $('.backToTop').fadeOut();
       }
   })
  //返回顶部功能
  $('body').on('click','.backToTop',function () {
      $('html,body').animate({
          scrollTop: 0
      }, 300)
  })
    //追加到页面的尾部
      $('body').append($gotoTopHtml)
}



})