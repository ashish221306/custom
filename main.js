window.onscroll = function () {
    
    scrolltopvisibility();
  
    

};


var prevScrollpos = window.pageYOffset;
window.onscroll=function(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
       
       
        document.querySelector("header.top").style.top = "0";
        document.querySelector("header.top").style.backgroundColor = "#00695f";
        document.querySelector("header.top").style.padding = "10px";
        document.querySelector("header.top").style.opacity = "1";
        document.querySelector("header.top").style.transition = "1s";
        $('.share').fadeOut()

    } else {
        
        document.querySelector("header.top").style.top = "-150px";
        document.querySelector("header.top").style.backgroundColor = "#009688";
        document.querySelector("header.top").style.transition = "0.6s";
        document.querySelector("header.top").style.padding = "12px";
        document.querySelector("header.top").style.opacity = "0";
        $('.share').fadeIn('slow')

        
        


    }
    prevScrollpos = currentScrollPos;
}

function scrolltopvisibility() {
    if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
        document.querySelector('div.gototop').style.display = "block";
        document.querySelector('.gototop').style.opacity = "1";
       document.querySelector('div.gototop').style.transition = "0.6s linear";
    } else {
        document.querySelector('.gototop').style.display = "none"
        document.querySelector('.gototop').style.opacity = "0"
    }

}
document.querySelector('#navbutton').onclick = function () {
    document.querySelector('div.navbar').classList.toggle('show');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
if(document.querySelector('.search-container').classList.contains('showSearchContainer')){
    document.querySelector('.search-container').classList.remove('showSearchContainer')
}
}

document.querySelector('.gototop').addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})

//share buttons//

//facebbok
var shareBonus = 'Thank you so much to share .....'
var currentUrl = window.location.href;
var title = window.document.title;
var facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
var twitterShareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}`;
var pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${currentUrl}&media=&description=`;
var linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}&summary=&source=${currentUrl}`;
var gmailShareUrl = `mailto:info@example.com?&subject=${title}&body=${currentUrl}`;
var telegramShareUrl = `https://t.me/share/url?url=${currentUrl}&text=${title}`;
var messengerShareUrl = `fb-messenger://share?link=${currentUrl}`;
var whatsappShareUrl = `https://api.whatsapp.com/send?&text=${title}%20${currentUrl}`;
var textmessageShareUrl = `sms:mobilenumber?body=${currentUrl}`
var instaShareUrl = `https://msng.link/o/?&url=${currentUrl}`
var hashtags = `love_status,romantic_status`
var bookmarkUrl = `https://www.google.com/bookmarks/mark?op=edit&bkmk=${currentUrl}&title=${title}&annotation=${title}&labels=${hashtags}`


var messsage = document.querySelector('.message');
function fadeOut() {
    messsage.style.display = 'none';
    

}
function fadeIn() {
    messsage.style.display = 'block';
    messsage.style.transition = '0.6s linear';
    messsage.style.opacity = "1";
    messsage.style.width = "80%";
    messsage.style.height = "auto";
    
    messsage.innerHTML = shareBonus
}

document.getElementById('facebook').onclick = function (e) {
    e.preventDefault();
    window.open(facebookShareUrl, "_blank");
    fadeIn();
    setTimeout(fadeOut, 4000)

}

// document.getElementById('linkedin').onclick = function (e) {
//     e.preventDefault();
//     window.open(linkedinShareUrl, "_blank");
//     alert(shareBonus);

// }
// document.getElementById('pinterest').onclick = function (e) {
//     e.preventDefault();
//     window.open(pinterestShareUrl, "_blank");
//     alert(shareBonus);

// }
document.getElementById('whatsapp').onclick = function (e) {
    e.preventDefault();
    window.open(whatsappShareUrl, "_blank");
    fadeIn();
    fadeOut();






}
document.getElementById('messenger').onclick = function (e) {
    e.preventDefault();
    window.open(messengerShareUrl, "_blank");
    alert(shareBonus);

}
document.getElementById('gmail').onclick = function (e) {
    e.preventDefault();
    window.open(gmailShareUrl, "_blank");
    alert(shareBonus);

}

document.getElementById('telegram').onclick = function (e) {
    e.preventDefault();
    window.open(telegramShareUrl, "_blank");
    alert(shareBonus);

}
document.getElementById('instagram').onclick = function (e) {
    e.preventDefault();
    window.open(instaShareUrl, "_blank");
    alert(shareBonus)
}
document.getElementById('twitter').onclick = function (e) {
    e.preventDefault();
    window.open(twitterShareUrl, "_blank");
    alert(shareBonus)
}
document.getElementById('bookmark').onclick = function (e) {
    e.preventDefault();
    window.open(bookmarkUrl, "_blank");
    alert(shareBonus)
}

document.getElementById('pinterest').onclick = function (e) {
    e.preventDefault();
    window.open(pinterestShareUrl, "_blank");
    alert(shareBonus)
}

document.getElementById('fullscreen').onclick = function () {

    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }

    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

        
/////////////copy on click///////////////////////
function copy() {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = document.querySelector('.post .status').textContent;
    document.querySelector('.post .status').style.backgroundColor = 'rgba(255, 246, 143, 0.7)'
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
    messsage.textContent = 'status copied';
    this.innerHTML = 'copied';
   
    setTimeout(fadeOut, 1000);
}
$('.post button').click(function(){
$('.message').fadeIn();
})


   $(document).ready(function(){
    $('.category li').prepend('<i class="fa fa-hand-o-right"></i>')
    $('.download').click(function(){
      var src=$(this).prev().attr('src');
      $(this).attr('download','')
      $(this).attr('href',src)
    
    })
    $('.main img').click(function(){
       // window.location.href=$(this).attr('src')
    })
    $('img').attr('loading','lazy')
   })

document.querySelector('#searchButton').addEventListener('click',function(e){
e.preventDefault();
var x=document.querySelector('.search-container');
x.classList.toggle('showSearchContainer');

})
