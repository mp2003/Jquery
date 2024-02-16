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

  const promise = $.ajax({
    url: URL,
    method: "get",
  });

  promise
    .done((data) => {
      const list = $(".ajax-list");
      for (let i = 0; i < 10; i++) {
        console.log(data[i].title);
        let className = "";
        if (data[i].completed) className = "completed";
        // console.log(className);
        list.append(
          "<li class='" +
            className +
            "'>" +
            JSON.stringify(data[i].title) +
            "</li>"
        );
        // console.log(
        //   "<li class='" +
        //     className +
        //     "'>" +
        //     JSON.stringify(data[i].title) +
        //     "</li>"
        // );
      }
    })
    .fail((error) => console.log(error))
    .always(() => console.log("promise completed"));
});
