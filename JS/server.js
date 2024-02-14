// console.log($);

$(document).ready(function () {
  console.log($(".home"));
  setInterval(() => {
    $(".home").hide(5000);
    $(".home").show(5000);
  }, 10000);
});
