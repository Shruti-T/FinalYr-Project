(function ($) {
  "use strict";
  var mainApp = {
    initFunction: function () {
      /*MENU 
              ------------------------------------*/
      $("#main-menu").metisMenu();

      $(window).bind("load resize", function () {
        if ($(this).width() < 768) {
          $("div.sidebar-collapse").addClass("collapse");
        } else {
          $("div.sidebar-collapse").removeClass("collapse");
        }
      });

      /* MORRIS BAR CHART
              -----------------------------------------*/
      Morris.Bar({
        element: "morris-bar-chart",
        data: [
          {
            y: "Jan",
            a: 0.007,
          },
          {
            y: "Feb",
            a: 0.008,
          },
          {
            y: "March",
            a: 0.006,
          },
          {
            y: "April",
            a: 0.004,
          },
          {
            y: "May",
            a: 0.006,
          },
          {
            y: "June",
            a: 0.004,
          },
          {
            y: "July",
            a: 0.003,
          },
          {
            y: "Aug",
            a: 0.002,
          },
          {
            y: "Sept",
            a: 0.004,
          },
          {
            y: "Oct",
            a: 0.001,
          },
          {
            y: "Nov",
            a: 0.002,
          },
          {
            y: "Dec",
            a: 0.002,
          },
        ],
        xkey: "y",
        ykeys: ["a"],
        labels: ["Sales"],
        hideHover: "auto",
        resize: true,
      });

      /* MORRIS LINE CHART-----------------------*/
      Morris.Line({
        element: "morris-line-chart",
        data: [
          {
            y: "2016",
            a: 78.83,
            b: 93.75,
          },
          {
            y: "2017",
            a: 87.83,
            b: 84.66,
          },
          {
            y: "2018",
            a: 85.08,
            b: 82.33,
          },
          {
            y: "2019",
            a: 82.58,
            b: 93.12,
          },
          {
            y: "2020",
            a: 90.21,
          },
          {
            y: "2021",
            a: 79.33,
            b: 77.92,
          },
          {
            y: "2022",
            a: 86.54,
          },
        ],
        xkey: "y",
        ykeys: ["a", "b"],
        labels: ["Arabica", "Robusta"],
        hideHover: "auto",
        resize: true,
      });
    },

    initialization: function () {
      mainApp.initFunction();
    },
  };
  // Initializing ///

  $(document).ready(function () {
    mainApp.initFunction();
  });
})(jQuery);
