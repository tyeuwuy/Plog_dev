		jQuery(document).ready(function($) {
		$('.owl-carousel').owlCarousel({
		loop:true,
		margin:16,
		responsiveClass:true,
		autoplay:true,
		nav:false,
		loop:true,
		dots: false,
		responsive:{
		0:{
		items:1
		},
		600:{
		items:1
		},
		1000:{
		items:2

		},
		1440:{
		items:1
		}

		}
		})
		$('.owl-carousel-3').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
		0:{
		items:1
		},
		600:{
		items:2
		},
		1000:{
		items:3
		}
		}
		})
		});