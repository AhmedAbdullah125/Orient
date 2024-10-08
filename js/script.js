let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
//Aos
AOS.init();
//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
//swiper
const swiper2 = new Swiper('.swiperPartner', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 5,
    }
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const swiper3 = new Swiper('.swiperAdvantages', {
  // Optional parameters
  speed: 12000,
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  loop: true,
  freeMode: true,
  mousewheel: 
		{
			invert: true,
		},
});
const swiper4 = new Swiper('.offersSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    540: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 7000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});



const swiper5 = new Swiper('.hotelsSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      navigation: false,
    },

    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },

  pagination: {
    el: '.swiper-pagination',
  },

});

const swiper6 = new Swiper('.testimonialsSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 1,
      navigation: false,
    },

    991: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    }
  },

  pagination: {
    el: '.swiper-pagination',
  },

});
$('#iconified').on('keyup', function () {
  var input = $(this);
  if (input.val().length === 0) {
    input.addClass('empty');
  } else {
    input.removeClass('empty');
  }
});

//fixed nav3
$stickyNav = $(".top-header");
$initNav = $(".nav-header");
$(window).on("scroll load", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $stickyNav.addClass("fixed-nav", 500);
    $initNav.addClass("smaller-nav");
  } else {
    $stickyNav.removeClass("fixed-nav", 500);
    $initNav.removeClass("smaller-nav");

  }
  if (scroll <= 100) {
    $stickyNav.removeClass("fixed-nav", 500);
    $initNav.removeClass("smaller-nav");

  }
});
var $stickyheader = $("header");
lastScroll = 0;
$(window).on("scroll load", function () {
  var scroll = $(window).scrollTop();
  if (lastScroll - scroll > 0) {
    $stickyheader.addClass("fixed-header", { duration: 1000 });
  } else {
    $stickyheader.removeClass("fixed-header", { duration: 500 });
  }
  lastScroll = scroll;
  if (scroll == 0) {
    $stickyheader.removeClass("fixed-header", { duration: 500 });
  }
});

$(document).ready(function () {
  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $(".navgition ul").toggleClass("container");
    $("body").toggleClass("overflow");
    $(".menu-bars").toggleClass("open-bars");
  });
  if ($(window).width() <= 1199) {
    //slide down menu
    $(".menu-item-has-children > a").click(function (e) {
      e.preventDefault();
      $(this).siblings(".sub-menu").slideToggle(400);
      if ($(window).width() <= 991) {
        $(this).toggleClass("active");
        $(".menu-item-has-children > a").not(this).removeClass("active");
      }
    });
  }
  const dateExists = document.getElementsByClassName("selector").length > 0;
  if (dateExists) {
    // commonjs // flatpicker date input
    $(".selector").flatpickr({});
    //flatpicker for events page to dispaly today
    $(".select-date").flatpickr({
      minDate: "today",
      maxDate: new Date().fp_incr(14), // 14 days from now
      defaultDate: "today",
    });
  }
  const timeExists = document.getElementsByClassName("time-select").length > 0;
  if (dateExists) {
    $(".time-select").flatpickr({
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      defaultDate: "13:45",
    });
  }
  const selectExists =
    document.getElementsByClassName("select_input").length > 0;
  if (selectExists) {
    const $select2 = $(".select_input");
    $select2.select2();
  }
  //////////* fixed arrow to top*//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
