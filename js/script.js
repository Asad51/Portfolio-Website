window.onload = function() {
    var header = document.getElementById("nav");
    var links = header.getElementsByClassName("nav-item");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

window.onscroll = function() {
    var header = document.getElementById("nav");    
    var links = header.getElementsByClassName("nav-item");
    var scroollHeight = document.body.scrollTop;

    if(scrollHeight < 700){
        removeClass(links)
        .then(applyClass(links[0]));
    }
    else if(scrollHeight > 700 && scrollHeight < 1300){
        removeClass(links)
        .then(applyClass(links[1]));
    }
    else if(scrollHeight > 1300 && scrollHeight < 1900){
        removeClass(links)
        .then(applyClass(links[2]));
    }
    else{
        removeClass(links)
        .then(applyClass(links[3]));
    }
}

function removeClass(links){
    for(var i=0; i<links.length; i++){
        links[0].className.replace(" active", "");
    }
}

function applyClass(link){
    link.className += " active";
}

function sendMail() {
    var email = document.getElementsByName("email");
    var name = document.getElementsByName("name");
    var msg = document.getElementsByName("msg");
    var subject = "Email Response";
    var body = name + "\n" + email + "\n" + msg;
    window.open(`mailto:asad.cse.ru.15@gmail.com?subject=${subject}&body=${body}`);
}