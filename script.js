function myFunction() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "light" ? "dark" : "light";
  }
  function stepFunction(event) {
    debugger;
    var element = document.getElementsByClassName("collapse");
    for (var i = 0; i < element.length; i++) {
      if (element[i] !== event.target.ariaControls) {
        element[i].classList.remove("show");
      }
    }
  }

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
      },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });