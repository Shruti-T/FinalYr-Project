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
            y: "1990",
            a: 0.7,
            b: 0.2,
            c: 0.1,
            d: 0.6,
          },
          {
            y: "1995",
            a: 1,
            b: 0.2,
            c: 0.1,
            d: 0.5,
          },
          {
            y: "2000",
            a: 1.5,
            b: 0.3,
            c: 0.2,
            d: 0.4,
          },
          {
            y: "2010",
            a: 1.9,
            b: 0.4,
            c: 0.3,
            d: 0.4,
          },
        ],
        xkey: "y",
        ykeys: ["a", "b", "c", "d"],
        labels: ["Brazil", "Indonesia ", "Vietnam", "Columbia"],
        hideHover: "auto",
        resize: true,
      });

      /* MORRIS DONUT CHART
			----------------------------------------*/
      Morris.Donut({
        element: "morris-donut-chart",
        data: [
          {
            label: "Delivery",
            value: 51,
          },
          {
            label: "Retailers",
            value: 24,
          },
          {
            label: "Exporters",
            value: 10,
          },
          {
            label: "Producers",
            value: 15,
          },
        ],
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
