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
        console.log("cannot debug event listener on static site");
        //console.log(e);
    }

    var activity =
        {
            type:Wix.Activities.Type.ECOMMERCE_CART_ADD
        };

    var onSuccess = function(d){console.log("Activity ID: " + d.activityId + ", Contact ID: " + d.contactId)};
    var onFailure = function(d){console.log("Failure message:" + d)};

    try {
        Wix.Activities.getActivityById(activity, onSuccess, onFailure);
    }
    catch (e){
        console.log("cannot debug getActivityById on static site");
        //console.log(e);
    }

    try {
        var currentMember = Wix.currentMember;
        console.log("currentMember: " + currentMember);
    }
    catch (e){
        console.log("cannot debug currentMember on static site");
        //console.log(e);
    }

    try {
        var siteMap = Wix.getSiteMap;
        console.log(siteMap);
    }
    catch (e){
        console.log("cannot debug getSiteMap on static site");
        //console.log(e);
    }

    console.log("hardly working...")
});
