$(document).ready(function () {

  const input = $("#input");
  const error = $("#error-msg");
  const counter = $("#counter");
  const container = $("#container");

  $("#form").submit(function (e) {
    e.preventDefault();

    const text = input.val().trim();

    if (text.length === 0) {
      error.text("Please enter some content!");
      return;
    }

    if (text.length > 140) {
      error.text("Content exceeds 140 characters!");
      return;
    }

    error.text("");

    container.prepend(`<p>${text}</p>`);

    input.val("");
    counter.text(140);
  });

  input.on("input", function () {
    error.text("");

    const length = input.val().length;
    const remaining = 140 - length;

    counter.text(remaining);

    if (remaining < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black");
    }
  });

});