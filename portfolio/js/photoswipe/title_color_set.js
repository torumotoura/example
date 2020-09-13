$(function() {

  $(document).ready(function(){
  $('.logo-title').mousemove(function(e){
  
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('.logo-title').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(10,52,74), '+rYP/8+'px '+rXP/60+'px rgba(106,149,168), '+rXP/70+'px '+rYP/12+'px rgba(42,108,142)');
     
   });
  });
});

