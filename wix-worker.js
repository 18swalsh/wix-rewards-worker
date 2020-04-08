$(document).ready(function() {
   
   console.log("working hard...")
   setTimeout(function(){
      window.location.reload(1);
   }, 5000);
   
    Wix.Worker.addEventListener(Wix.Events.PAGE_NAVIGATION, function(page) {
        console.log("Visitor navigated to page" + page.toPage);
    });
});
