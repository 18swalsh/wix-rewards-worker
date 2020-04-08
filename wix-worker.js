$(document).ready(function() {
   console.log("working...")
    Wix.Worker.addEventListener(Wix.Events.PAGE_NAVIGATION, function(page) {
        console.log("Visitor navigated to page" + page.toPage);
    });
  });
