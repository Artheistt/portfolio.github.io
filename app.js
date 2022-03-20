// splash Screen
let intro = document.querySelector('.intro');
let red = document.querySelector('.red');
let logo = document.querySelector('splash');
let logoSpan = document.querySelectorAll('.logo-splash');

window.addEventListener('DOMContentLoaded', ()=> {

	setTimeout(()=>{

		logoSpan.forEach((span,idx)=> {
			setTimeout(()=>{
				span.classList.add('active');

			}, (idx + 1) * 400)

		});

		setTimeout(()=>{
			logoSpan.forEach((span, idx) =>{

				setTimeout(()=>{
					span.classList.remove('active');
					span.classList.add('fade');
				}, (idx + 1)* 50)
			})
		},1500);

		setTimeout(()=>{
			intro.style.top = '-100vh';
			red.style.top = '-120vh';
		}, 1800);
	});
});
