// Your JS code here.
	const slideIns = document.querySelectorAll('.slide-in');
		const slideInContainer = document.querySelector('.slide-in-container');
		const debounce = (func, delay) => {
			let debounceTimer;
			return function() {
				const context = this;
				const args = arguments;
				clearTimeout(debounceTimer);
				debounceTimer = setTimeout(() => func.apply(context, args), delay);
			}
		};
		const checkSlide = () => {
			const slideInAt = (window.scrollY + window.innerHeight) - slideInContainer.clientHeight / 2;
			const containerBottom = slideInContainer.offsetTop + slideInContainer.clientHeight;
			slideIns.forEach(slideIn => {
				const imageBottom = slideIn.offsetTop + slideIn.clientHeight;
				const isHalfShown = slideIn.offsetTop < slideInAt;
				const isNotScrolledPast = imageBottom > window.scrollY;
				if (isHalfShown && isNotScrolledPast) {
					slideIn.classList.add('active');
				} else {
					slideIn.classList.remove('active');
				}
			});
		};
		window.addEventListener('scroll', debounce(checkSlide, 20));