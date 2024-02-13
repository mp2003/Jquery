// console.log($);

let para = $("p").text();
console.log(para);
let newElement = $("<p>hello world</p>");
$("body").append(newElement);
console.log($("body").this);
