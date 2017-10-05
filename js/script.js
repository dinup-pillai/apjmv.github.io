$('.nav-item').on('click',function(e){
   e.preventDefault();

  //Remove any previous active classes
  $('.nav-item').removeClass('active');

  //Add active class to the clicked item
  $(this).addClass('active');
  
  $('.section').removeClass('visible');
  
  $($(this).find('.nav-link').attr('data-refid')).addClass('visible');
});

/*$(function(){
  $(".navbar-nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});*/

$(document).ready(function () {
    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });
});

$(function(){ 
     var navMain = $("#navbarsExampleDefault");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });
