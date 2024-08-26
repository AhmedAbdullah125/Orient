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
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
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
});
