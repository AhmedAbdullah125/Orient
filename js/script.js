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
    delay: 3000,
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
//form wizard
function activeStep(ele, stepId) {
  var nextStep = "#step_" + stepId;
  $(".step").not(nextStep).hide();
  $(nextStep).show();
  if ($(ele).hasClass("btn-irv-default")) {
    var activeHead = stepId;
    var activeStep = "#activeStep-" + activeHead;
    $(activeStep).removeClass("active");
  } else if (stepId == 3) {
    var activeHead = stepId - 1;
    var lastHead = stepId;
    var activeStep = "#activeStep-" + activeHead;
    var activelast = "#activeStep-" + lastHead;
    $(activeStep).addClass("active");
    $(activelast).addClass("active");
  } else {
    var activeHead = stepId;
    var activeStep = "#activeStep-" + activeHead;
    $(activeStep).addClass("active");
  }
}
