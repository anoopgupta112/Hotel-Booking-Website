

var moreDiv = document.getElementById("more-div");
var viewMoreDisplay = false;
function viewMore() {
    moreDiv.style.display = "block"
    if (!viewMoreDisplay) {
        viewMoreDisplay = true;
        moreDiv.innerHTML = `<div id="cityImg"> <div> <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg" class="d-"
            id="ContImg1">
   
    <div class="ImgLocation">Chennai</div>
</div>
<div>
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg" id="ContImg2"> <div class="ImgLocation">Agra</div>
</div>
<div>
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg" id="ContImg3">
    <div class="ImgLocation">Jaipur</div>
</div>
<div><img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg"
        id="ContImg4">
    <div class="ImgLocation">Bengaluru</div>
</div>
</div>`
    }
    else {

        viewMoreDisplay = false;

        moreDiv.style.display = "none"
    }
}



