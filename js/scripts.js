(function ($) {
  "use strict";

  // Add active state to sidbar nav links
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
    if (this.href === path) {
      $(this).addClass("active");
    }
  });

  // Toggle the side navigation
  $("#sidebarToggle").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("sb-sidenav-toggled");
  });

  // Call the dataTables jQuery plugin
  $(document).ready(function () {
    $("#dataTable").DataTable();
  });

  $("#ch").on("click", function (e) {
    e.preventDefault();
    $("#ch").toggleClass(" btn-primary");
  });
})(jQuery);

function btn_color() {
  var el = document.getElementById("ch");

  if (el.classList) {
    el.classList.toggle("btn-primary");
  } else {
    var classes = el.className.split(" ");
    var i = classes.indexOf("btn-primary");

    if (i >= 0) classes.splice(i, 1);
    else classes.push("btn-primary");
    el.className = classes.join(" ");
  }
}

//Line Chart
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(62, 60, 180)",
      borderColor: "rgb(62, 60, 180)",
      data: [0, 10, 20, 2, 20, 30, 60],
    },
    {
      label: "My second dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [3, 10, 5, 2, 5, 20, 38],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
  },
};

var myChart = new Chart(document.getElementById("chLine"), config);

