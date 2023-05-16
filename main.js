document.addEventListener("DOMContentLoaded", function() {

	let radios1 = document.querySelectorAll('#form1 .radio');
    for (var i = 0; i < radios1.length; i++) {
        radios1[i].addEventListener('change', function() {
            localStorage.setItem(this.name, this.value);
        });
    }

    let radios2 = document.querySelectorAll('#form2 .radio');
    for (var i = 0; i < radios2.length; i++) {
        radios2[i].addEventListener('change', function() {
            localStorage.setItem(this.name, this.value);
        });
    }

	let radios3 = document.querySelectorAll('#form3 .radio');
    for (var i = 0; i < radios1.length; i++) {
        radios1[i].addEventListener('change', function() {
            localStorage.setItem(this.name, this.value);
        });
    }

    let radios4 = document.querySelectorAll('#form4 .radio');
    for (var i = 0; i < radios2.length; i++) {
        radios2[i].addEventListener('change', function() {
            localStorage.setItem(this.name, this.value);
        });
    }

	let radios5 = document.querySelectorAll('#form5 .radio');
    for (var i = 0; i < radios1.length; i++) {
        radios1[i].addEventListener('change', function() {
            localStorage.setItem(this.name, this.value);
        });
    }

    let radios6 = document.querySelectorAll('#form6 .radio');
    for (var i = 0; i < radios2.length; i++) {
        radios2[i].addEventListener('change', function() {
            localStorage.setItem(this.name, this.value);
        });
    }

	let radios7 = document.querySelectorAll('#form7 .radio');
    for (var i = 0; i < radios2.length; i++) {
        radios2[i].addEventListener('change', function() {
            localStorage.setItem(this.name, this.value);
        });
    }

	let radios8 = document.querySelectorAll('#form8 .radio');
    for (var i = 0; i < radios2.length; i++) {
        radios2[i].addEventListener('change', function() {
            localStorage.setItem(this.name, this.value);
        });
    }
  });;

$(function() {
	$('a[href*="#"]').on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
  });

