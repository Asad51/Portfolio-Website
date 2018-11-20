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

}

function sendMail() {
    var email = document.getElementsByName("email");
    var name = document.getElementsByName("name");
    var msg = document.getElementsByName("msg");
    var subject = "Email Response";
    var body = name + "\n" + email + "\n" + msg;
    window.open(`mailto:asad.cse.ru.15@gmail.com?subject=${subject}&body=${body}`);
}