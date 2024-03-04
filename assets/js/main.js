(function($) {
  "use strict";
  


  $(".barBtn, .close").click(function(){
    $(".sideNav").toggleClass("active");
  });


  $(".Ingredient__tb .flex a").click(function(event){
    event.preventDefault()
    $(this).toggleClass("active");
});

$('#PasteBtn').click(function(){
  $(this).fadeOut()
  $(".ingredient__text").fadeIn(500)
})


$('.close-sh').click(function(){
  $("#PasteBtn").fadeIn()
  $(".ingredient__text").fadeOut()
})

$('.RunSummary__list__last').click(function(){
  $(".RunSummary__hide").fadeToggle(500);
  $(this).toggleClass('active');
})


  $('.select__blk select').niceSelect();

  
  $(".selectTwo select").select2({
    placeholder: "Choose",
    allowClear: true
});

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});


})(jQuery);
