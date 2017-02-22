$(document).ready(function(){

<<<<<<< HEAD
	$("#logotipo").on("mouseover",function(){
		
=======
	$("#logotipo").on("mouseover", function(){

>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8
		$("#banner h1").addClass("efeito");

	}).on("mouseout", function(){

		$("#banner h1").removeClass("efeito");

	});

	$("#input-search").on("focus", function(){

		$("li.search").addClass("ativo");

	}).on("blur", function(){

<<<<<<< HEAD
		$("li.search").removeClass("ativo");				
=======
		$("li.search").removeClass("ativo");
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8

	});

	$(".thumbnails").owlCarousel({
<<<<<<< HEAD
 
      //autoPlay: 3000,
      items : 4
 
  	});

  	var owl = $(".thumbnails").data('owlCarousel');

  	$('#btn-news-prev').on("click", function(){

  		owl.prev();

  	});

  	$('#btn-news-next').on("click", function(){

  		owl.next();

  	});

  	$("#page-up").on("click", function(event){

  		$("body").animate({
  			scrollTop:0
  		}, 1000);

  		event.preventDefault();

  	});

  	$("#btn-bars").on("click", function(){

  		$("header").toggleClass("open-menu");

  	});

  	$("#menu-mobile-mask, .btn-close").on("click", function(){

  		$("header").removeClass("open-menu");


  	});

  	$("#btn-search").on("click", function(){

  		$("header").toggleClass("open-search");
  		$("#input-search-mobile").focus();

  	});
=======
		//autoPlay: 3000,
		items: 4
	});

	var owl = $(".thumbnails").data('owlCarousel');

	$('#btn-news-prev').on("click", function(){
		owl.prev();
	});

	$('#btn-news-next').on("click", function(){
		owl.next();
	});

	$("#page-up").on("click", function(event){
		$('body').animate({
			scrollTop: 0
		}, 1000);

		event.preventDefault();
	});

	$("#btn-bars").on("click", function(){
		$("header").toggleClass("open-menu");
	});

	$("#menu-mobile-mask, .btn-close").on("click", function(){
		$("header").removeClass("open-menu");
	});

	$("#btn-search").on("click", function(){
		$("header").toggleClass("open-search");
	});
>>>>>>> b59888b35be9fbcd2b1e966395eb66cc2f7f38d8

});