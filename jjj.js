
$(document).ready(function(){
    $("#openModals").click(function(){
        $("#myModals").fadeIn();
    });
    $(".closes").click(function(){
        $("#myModals").fadeOut();
    });
    $(window).click(function(event){
        if ($(event.target).is("#myModals")) {
            $("#myModals").fadeOut();
        }
    });
});