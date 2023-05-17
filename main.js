document.addEventListener("DOMContentLoaded", function() {

	let radios1 = document.querySelectorAll('#form1 .radio');
    for (var i = 0; i < radios1.length; i++) {
        radios1[i].addEventListener('change', function() {
            localStorage.setItem("timeStorage", this.value);
            timeStorage=this.value;
        });
    }

    let radios2 = document.querySelectorAll('#form2 .radio');
    for (var i = 0; i < radios2.length; i++) {
        radios2[i].addEventListener('change', function() {
            localStorage.setItem("timeStorage2", this.value);
            timeStorage2=this.value;
        });
    }

	let radios3 = document.querySelectorAll('#form3 .radio');
    for (var i = 0; i < radios3.length; i++) {
        radios3[i].addEventListener('change', function() {
            // localStorage.setItem(this.name, this.value);
        });
    }

    let radios4 = document.querySelectorAll('#form4 .radio');
    for (var i = 0; i < radios4.length; i++) {
        radios4[i].addEventListener('change', function() {
            // localStorage.setItem(this.name, this.value);
        });
    }

	let radios5 = document.querySelectorAll('#form5 .radio');
    for (var i = 0; i < radios1.length; i++) {
        radios1[i].addEventListener('change', function() {
            // localStorage.setItem(this.name, this.value);
        });
    }

    let radios6 = document.querySelectorAll('#form6 .radio');
    for (var i = 0; i < radios6.length; i++) {
        radios6[i].addEventListener('change', function() {
            localStorage.setItem("mainq", this.value);
            mainquestion = this.value
            console.log(this.value)
        });
    }

	let radios7 = document.querySelectorAll('#form7 .radio');
    for (var i = 0; i < radios7.length; i++) {
        radios7[i].addEventListener('change', function() {
            // localStorage.setItem(this.name, this.value);
        });
    }

	let radios8 = document.querySelectorAll('#form8 .radio');
    for (var i = 0; i < radios8.length; i++) {
        radios8[i].addEventListener('change', function() {
            // localStorage.setItem(this.name, this.value);
        });
    }
  });

// $(function() {
// 	$('a[href*="#"]').on('click', function(e) {
// 	  e.preventDefault();
// 	  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
// 	});
//   });

