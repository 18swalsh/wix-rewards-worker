$(document).ready(function() {
    console.log("working hard");
    console.log(Wix)

    let currentMember;
    let siteMap;
    let instanceId;

    //Wix.onReady(function(){

    //add event listener for page navigation
    try {
        Wix.Worker.addEventListener(Wix.Events.PAGE_NAVIGATION, function(page) {
            console.log("Visitor navigated to page" + page.toPage);
        });
        console.log("Event listener added: PAGE_NAVIGATION");
    }
    catch (e){
        console.log("cannot debug event listener on static site");
        //console.log(e);
    }


    //get instanceId
    try {
        instanceId = Wix.Worker.Utils.getInstanceId();
        console.log("instanceId: " + instanceId);
    }
    catch (e){
        console.log("cannot debug getInstanceId on static site");
        //console.log(e);
    }


    try {
    var activity =
        {
            type:Wix.Activities.Type.ECOMMERCE_CART_ADD
        };
    }
    catch (e){
        console.log("could not get ECOMMERCE_CART_ADD");
        //console.log(e);
    }

    var onSuccess = function(d){console.log("Activity ID: " + d.activityId + ", Contact ID: " + d.contactId)};
    var onFailure = function(d){console.log("Failure message:" + d)};

    try {
        Wix.Activities.getActivityById(activity, onSuccess, onFailure);
    }
    catch (e){
        console.log("cannot debug getActivityById");
        //console.log(e);
    }

    try {
        Wix.Worker.currentMember(function(memberDetails){
            currentMember = memberDetails;
            currentMemberId = memberDetails.id;
            console.log("currentMember: " + currentMemberId);
        });

    }
    catch (e){
        console.log("cannot debug currentMember on static site");
        //console.log(e);
    }

    try {
        Wix.Worker.getSiteMap(function(wixSiteMap) {
            siteMap = wixSiteMap;
            console.log("siteMap:vvv")
            console.log(siteMap);
        });

    }
    catch (e){
        console.log("cannot debug getSiteMap on static site");
        //console.log(e);
    }

    console.log("hardly working...")
});
