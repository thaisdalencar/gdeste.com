$(document).ready(function(){
	$(document).keydown(function(e) {
		    // ESCAPE key pressed
		    if (e.keyCode == 27) {
		    	$("#myModal1").close();
		        //window.close();
		        alert("fhuhu");
		    }
		});

	/*$("#proj1").css(
			{"background":  "url(static/images/LampadaVetorSeletor.png)", 
			"background-size": "100px 100px", 
			"width": "100px", 
			"height": "100px"});*/
	/*parallax*/
	 $('div.bgParallax').each(function(){
        var $obj = $(this);
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $obj.data('speed')); 
             /*$(window).scrollTop() pega o valor de quanto a página já rolou do topo, esse valor é dividido pelo $obj.data(‘speed’), que é o valor que colocamos no atributo data-speed de cada div.bgParallax.*/
            var bgpos = '50% '+ yPos + 'px';//tipo se uma rola 50px a outra tela vai rolar so 25px
            $obj.css('background-position', bgpos );
        }); 
    });
	/*etiqueta*/
    Sticker.init('.sticker');
    
	$("#op1 a").click(function (){
		$('html, body').animate({
			scrollTop: $("#testeprojeto").offset().top
		}, 1000);
	});
	$("#op2").click(function (){
		$('html, body').animate({
			scrollTop: $("#tela2").offset().top
		}, 1000);
	});
	$("#op3").click(function (){
		$('html, body').animate({
			scrollTop: $("#tela3").offset().top
		}, 1000);
	});
	$("#op4").click(function (){
		$('html, body').animate({
			scrollTop: $("#tela6").offset().top
		}, 1000);
	});
	$("#op5").click(function (){
		$('html, body').animate({
			scrollTop: $("#tela5").offset().top
		}, 1000);
	});
	$("#back3").click(function(){
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 1000);
	}); 


	$('.dialog .close').click(function() {
        $(this).parent().fadeOut(500);
        return false;
    });

    // display dialog on click by labels
    $('#mostar').click(function() {
        $('.dialog p').html( $("#label1").html()).parent().fadeIn(500);
        return false;
    });

    // close dialog on click outside
    $('.container').click(function() {
        $('.dialog').fadeOut(500);
    });

})