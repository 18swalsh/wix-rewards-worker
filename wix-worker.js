$(document).ready(function() {
    console.log("working hard");
    console.log(Wix)

    //Wix.onReady(function(){
    try {
        Wix.Worker.addEventListener(Wix.Events.PAGE_NAVIGATION, function(page) {
            console.log("Visitor navigated to page" + page.toPage);
        });
    }
    catch (e){
        console.log(e);
    }

    console.log("hardly working...")
});
