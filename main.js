document.addEventListener("DOMContentLoaded", function() {
	let radios = document.querySelectorAll('.radio');
	for (var i = radios.length - 1; i >= 0; i--) {
	  radios[i].addEventListener('change', function() {
		localStorage.setItem("quiz", this.value); 
	  });
	}
  });;

$(function() {
	$('a[href*="#"]').on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
  });

