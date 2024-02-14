// console.log($);

$(document).ready(function () {
  console.log($(".home"));
  setInterval(() => {
    $(".home").hide(5000);
    $(".home").show(5000);
  }, 10000);

  function scrollToContainer(containerClass) {
    $("html, body").animate(
      {
        scrollTop: $("." + containerClass).offset().top,
      },
      "slow"
    );
  }

  // Example: Scroll to the 'code-container' after 3 seconds
  setTimeout(function () {
    scrollToContainer("code-container");
  }, 3000);
  setTimeout(function () {
    scrollToContainer("start-container");
  }, 6000);
});
