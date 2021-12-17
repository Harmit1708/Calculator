"use strict";

document.getElementById("demo").onkeypress = function (e) {
  var x = e.key;
  if (x == Number(x) || x == "+" || x == "-" || x == "/" || x == "*") {
    return true;
  } else {
    return false;
  }
};

document.getElementById("equal").addEventListener("click", () => {
  var x = document.querySelector("input").value;
  var result = eval(x);
  document.getElementById("demo").value = result;
});

function myfunction(x) {
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
}

function Clear_function() {
  document.getElementById("demo").value = "";
}

function backspace() {
  debugger;
  var back = document.querySelector("input").value;
  var result = back.substring(0, back.length - 1);
  document.getElementById("demo").value = result;
}

function mul(x) {
  var select = document.querySelector("input").value;
  var final = select.substring(select.length - 1, select.length);
  if (final == Number(final)) {
    document.querySelector("input").value =
      document.querySelector("input").value + x;
  } else {
    final = select.substring(0, select.length-1);
    document.querySelector("input").value = final + x;
  }
}


function div(x) {
  var select = document.querySelector("input").value;
  var final = select.substring(select.length - 1, select.length);
  if (final == Number(final)) {
    document.querySelector("input").value =
      document.querySelector("input").value + x;
  } else {
    final = select.substring(0, select.length - 1);
    document.querySelector("input").value = final + x;
  }
}


function sub(x) {
  var select = document.querySelector("input").value;
  var final = select.substring(select.length - 1, select.length);
  if (final == Number(final)) {
    document.querySelector("input").value =
      document.querySelector("input").value + x;
  } else {
    final = select.substring(0, select.length - 1);
    document.querySelector("input").value = final + x;
  }
}

function add(x) {
  var select = document.querySelector("input").value;
  var final = select.substring(select.length - 1, select.length);
  if (final == Number(final)) {
    document.querySelector("input").value =
      document.querySelector("input").value + x;
  } else {
    final = select.substring(0, select.length - 1);
    document.querySelector("input").value = final + x;
  }
}


