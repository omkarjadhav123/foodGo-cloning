
/* checkout [part] */
document.addEventListener('DOMContentLoaded', function () {
  const deliveryRadio = document.getElementById('delivery');
  const pickupRadio = document.getElementById('pickup');
  const deliveryAmountRow = document.getElementById('delivery_amount');
  const grandTotal = document.querySelector('.grand_total');

  const deliveryDateLabel = document.getElementById('delivery_date');
  const pickupDateLabel = document.getElementById('pickup_date');
  const deliveryTimeLabel = document.getElementById('delivery1_time');
  const pickupTimeLabel = document.getElementById('pickup_time');

  let subtotal = 219.00;
  let cgst = 16.11;
  let sgst = 16.11;
  let deliveryFee = 20.00;

  function updateTotal(isDelivery) {
      let total = subtotal + cgst + sgst;
      if (isDelivery) {
          total += deliveryFee;
          deliveryAmountRow.style.display = 'block flex';
      } else {
          deliveryAmountRow.style.display = 'none'; 
      }
      grandTotal.textContent = `$${total.toFixed(2)}`;
  }

  function updateLabels(isDelivery) {
      if (isDelivery) {
          deliveryDateLabel.classList.remove('d-none');
          deliveryTimeLabel.classList.remove('d-none');

          pickupDateLabel.classList.add('d-none');
          pickupTimeLabel.classList.add('d-none');
      } else {
          pickupDateLabel.classList.remove('d-none');
          pickupTimeLabel.classList.remove('d-none');

          deliveryDateLabel.classList.add('d-none');
          deliveryTimeLabel.classList.add('d-none');
      }
  }

  updateTotal(deliveryRadio.checked);
  updateLabels(deliveryRadio.checked);
  deliveryRadio.addEventListener('change', function () {
      if (this.checked) {
          updateTotal(true); 
          updateLabels(true); 
      }
  });

  pickupRadio.addEventListener('change', function () {
      if (this.checked) {
          updateTotal(false);
          updateLabels(false);  
      }
  });
});

/* new add offer slider */
$(document).ready(function () {
  $("#offer-slider").owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      nav: true,
      navText: ["<", ">"],
      autoplay: false,
      autoplayTimeout: 10000,
      autoplayHoverPause: false,
      smartSpeed: 5000,
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 1,
          },
          1000: {
              items: 1,
          },
      },
  });

  function adjustAnimationDuration() {
      $(".offer-text").each(function () {
          var textWidth = $(this).width();
          var duration = textWidth / 20;
          $(this).css("animation-duration", duration + "s");
      });
  }

  adjustAnimationDuration();
  $(window).resize(adjustAnimationDuration);
});

/* verstically carousel [part] */

$('.carousel').carousel({
  interval: 2000,
  direction: 'vertical'
})

/* horizontally banner-slider */
$(document).ready(function(){
  $("#bannerSlider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      slideTransition: "linear",
      smartSpeed: 1000,
      responsive:{
          0:{
              items: 1
          },
          540:{
              items: 2
          },
          992:{
              items: 3
          }
      }
  });
});

/* categories */
$(document).ready(function(){
  var owl = $("#category-carousel").owlCarousel({
      items: 4,
      loop: false,
      margin: 10,
      nav: true,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: {
          0: {
              items: 1
          },
          576: {
              items: 2
          },
          768: {
              items: 3
          },
          992: {
              items: 4
          }
      }
  });

  owl.on('changed.owl.carousel', function(event) {
      var item = event.item.index;
      var tab = $(event.target).find(".owl-item").eq(item).find(".item").data('tab');
      $('#foodCategoryTabsContent .tab-pane').removeClass('show active');
      $('#foodCategoryTabsContent #' + tab).addClass('show active');
  });

  $('.category-wrapper').click(function() {
      var tab = $(this).parent().data('tab');
      $('#foodCategoryTabsContent .tab-pane').removeClass('show active');
      $('#foodCategoryTabsContent #' + tab).addClass('show active');
  });
});

function showitem(slug, url) {
  console.log("Show item: " + slug + " - URL: " + url);
}

/* treding down [part] */
$(document).ready(function () {
  $("#slider11").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    margin: 15,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
});

/* banner-slider [part] */
$(document).ready(function () {
  $("#banner-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 5000,
    flex: 1 ,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1090: {
        items: 5,
      }
    },
  });
});

/* testimonial sections */
$(document).ready(function () {
  $("#testimonials-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 3,
      },
      853: {
        items: 2,
      },
      912: {
        items: 2,
      },
      1090: {
        items: 4,
      }
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});

/* menu banner-sections */
$(document).ready(function(){
  $(".banner-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items: 1
          },
          768:{
              items: 1
          },
          1090: {
            items: 2,
          }
      }
  });
});

/* our Team [part] */
$(document).ready(function () {
  $("#team-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
  });
});

/* top deals of the today [part] */
$(document).ready(function () {
  $("#dealsCarousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1090: {
        items: 5,
      }
    },
  });
});

// Countdown timer
function updateCountdown() {
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* latest blogs */
$(document).ready(function () {
  $("#blog-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1090: {
        items: 4,
      }
    },
  });
});

/* our gallary */
$(document).ready(function () {
  $("#gallery-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    smartSpeed: 5000,
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1018: {
        items: 4,
      },
      1090: {
        items: 6,
      }
    },
  });
});



