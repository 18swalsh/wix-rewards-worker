$(document).ready(function() {
    console.log("working hard");
    console.log(Wix)

    //Wix.onReady(function(){
        Wix.Worker.addEventListener(Wix.Events.PAGE_NAVIGATION, function(page) {
            console.log("Visitor navigated to page" + page.toPage);
        });


    });



    console.log("hardly working...")
});
