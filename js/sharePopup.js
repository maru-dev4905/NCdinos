var sharePopup = $(".share-popup");
var sharePopupDim = $(".share-popup-dim");
var shareOpenBtn = $(".share-link");
var shareCloseBtn = $(".share-popup-close");

shareOpenBtn.click(function(){
    sharePopup.addClass("show");
    sharePopupDim.addClass("show");
});
shareCloseBtn.click(function(){
    sharePopup.removeClass("show");
    sharePopupDim.removeClass("show");
});
var btn = $("button");

$("button").click(function(){

})