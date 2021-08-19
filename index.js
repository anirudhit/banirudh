$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#ab-middle").css("background-size","150% auto");
    }else{
        $("#ab-middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#ab-loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#ab-loading").removeClass("animated fadeOut");
      $("#ab-loading").css("display","none");
    },800);
},1450);