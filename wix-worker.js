$(document).ready(function() {
    console.log("working hard");
    console.log(Wix)
   /*
   var sleep = Math.random() * 16;
   if (sleep >= 8) {
      console.log("working hard...")
      setTimeout(function(){
         window.location.reload(1);
      }, 5000);
   }


   setTimeout(function(){
         window.location.reload(1);
      }, 5000);

   */
    Wix.onReady(function(){
        Wix.Worker.addEventListener(Wix.Events.PAGE_NAVIGATION, function(page) {
            console.log("Visitor navigated to page" + page.toPage);
        });
    });

    console.log("hardly working...")
});
