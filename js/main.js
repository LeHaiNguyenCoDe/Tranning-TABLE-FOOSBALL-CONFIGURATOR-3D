$('.btn-container').on('click',function() {
  // $(this).addClass('active').siblings().removeClass('active')
  $('.btn-container').removeClass('active')
  $(this).addClass('active')
})

// $(function() {
//   const myArray = $('.title').split("").join("<br/>");
// })
$('.brick-container').on('click',function() {
  $(this).addClass('active').removeClass('active')
})



$(function() {
  // Handler for .ready() called.
  // $('#simple').height($($('#a')[1]).height())
  // $('#simple').height($('#a').height() + $('#a').padding())
  $('#simple').css('padding-top', $('#a').height())
  // $('#simple').($('#a').height())
  console.log($('#a').height());
});



$("#simple").height()