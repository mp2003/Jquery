// console.log($);

$(document).ready(function () {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  console.log($(".home"));
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

  function fetchData() {
    return $.ajax({
      url: URL,
      method: "GET",
    });
  }
  var promise = fetchData();
  promise
    .done((data) => {
      const ajax = $(".ajax-list");
      const ajaxList = $(".ajax-list li");
      // console.log(data.length);
      for (var i = 0; i < 10; i++) {
        console.log(data[i].completed);
        const completedClass = data[i].completed ? "completed" : "";

        // Append a new <li> element with the title and class
        ajax.append(
          "<li class='" +
            completedClass +
            "'>" +
            JSON.stringify(data[i].title) +
            "</li>"
        );
      }
    })
    .fail((error) => console.log(error))
    .always(() => console.log("promise completed"));
});
