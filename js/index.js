if (
	document.cookie &&
	JSON.parse(document.cookie)['kind'] ===
		'identitytoolkit#VerifyPasswordResponse'
) {
	document.addEventListener('DOMContentLoaded', () => {
		document.getElementById('login-link').style.visibility = 'hidden';
	});
}

const goToLogin = () => {
	window.location.pathname = 'routes/login.html';
};

const goToPage = (url) => {
	window.open('https://' + url, '_blank').focus();
};

document.addEventListener('DOMContentLoaded', () => {
	if (screen.width >= 600) {
		var swiper = new Swiper('.mySwiper', {
			slidesPerView: 4,
			spaceBetween: 10,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 5000,
			},
		});
	} else {
		document.getElementById('testimony-container').style.display = 'none';
	}

	window.addEventListener('resize', () => {
		document.getElementById('testimony-container').style.display = 'block';
		if (screen.width >= 600) {
			var swiper = new Swiper('.mySwiper', {
				slidesPerView: 4,
				spaceBetween: 10,
				centeredSlides: true,
				loop: true,
				autoplay: {
					delay: 5000,
				},
			});
		} else {
			document.getElementById('testimony-container').style.display = 'none';
		}
	});

	let hovermenu = document.getElementById('dropdown-menu-container');
	let hoverbutton = document.getElementById('dropdownMenuButton1');
	let hoverul = document.getElementById('dropdown-menu-show');

	hovermenu.addEventListener('mouseover', () => {
		hoverbutton.classList.add('show');
		hoverul.classList.add('show');
		hoverul.style =
			'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 49px)';
	});
	hovermenu.addEventListener('mouseleave', () => {
		hoverbutton.classList.remove('show');
		hoverul.classList.remove('show');
	});
});
