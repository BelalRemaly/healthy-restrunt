width = window.screen.availWidth;
if (width > 1100) {
    document.getElementById('nav').style.display = "block";
    window.onscroll = function () {
        fix()
    };

    function scrollToPosition(position) {
        scrollTo({
            top: position,
            behavior: "smooth"
        });
    }
    function fix() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 800) {
            document.getElementById('header').style.position = "fixed";
        }
        else {
            document.getElementById('header').style.position = "static";
        }
    }
    window.onscroll = fix;
    let howItWork_top = document.getElementById('pricing').offsetTop;
    function up() {
        scrollToPosition(0);
    }

    function howItWork() {
        scrollToPosition(795);
    }
    function meals() {
        scrollToPosition(2791);
    }
    function trans() {
        scrollToPosition(3698);
    }
    function pricing() {
        scrollToPosition(4786);
    }
    function tryIt() {
        scrollToPosition(6174);
    }
    let spans = document.querySelectorAll("footer div span");
    spans.forEach(span => {
        span.addEventListener("click", up)
    })
}

if (width < 1100 && width > 1000) {
    document.getElementById('nav').style.display = "block";
    window.onscroll = function () {
        fix()
    };

    function scrollToPosition(position) {
        scrollTo({
            top: position,
            behavior: "smooth"
        });
    }
    function fix() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 800) {
            document.getElementById('header').style.position = "fixed";
        }
        else {
            document.getElementById('header').style.position = "static";
        }
    }
    window.onscroll = fix;

    function up() {
        scrollToPosition(0);
    }

    function howItWork() {
        scrollToPosition(683);
    }
    function meals() {
        scrollToPosition(2692);
    }
    function trans() {
        scrollToPosition(3698);
    }
    function pricing() {
        scrollToPosition(5128);
    }
    function tryIt() {
        scrollToPosition(6494);
    }
    let spans = document.querySelectorAll("footer div span");
    spans.forEach(span => {
        span.addEventListener("click", up)
    })
}
if (width <= 1000 && width > 700) {
    document.getElementById('nav-drop').style.display = "block";
    window.onscroll = function () {
        fix()
    };

    function scrollToPosition(position) {
        scrollTo({
            top: position,
            behavior: "smooth"
        });
    }
    function fix() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 900) {
            document.getElementById('header').style.position = "fixed";
        }
        else {
            document.getElementById('header').style.position = "static";
        }
    }
    window.onscroll = fix;

    function up() {
        scrollToPosition(0);
    }

    function howItWork() {
        scrollToPosition(1193);
    }
    function meals() {
        scrollToPosition(3165);
    }
    function trans() {
        scrollToPosition(4036);
    }
    function pricing() {
        scrollToPosition(5133);
    }
    function tryIt() {
        scrollToPosition(6414);
    }
    let spans = document.querySelectorAll("footer div span");
    spans.forEach(span => {
        span.addEventListener("click", up)
    })
}
if (width <= 700 && width > 400) {
    document.getElementById('nav-drop').style.display = "block";
    window.onscroll = function () {
        fix()
    };

    function scrollToPosition(position) {
        scrollTo({
            top: position,
            behavior: "smooth"
        });
    }
    function fix() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 900) {
            document.getElementById('header').style.position = "fixed";
        }
        else {
            document.getElementById('header').style.position = "static";
        }
    }
    window.onscroll = fix;

    function up() {
        scrollToPosition(0);
    }

    function howItWork() {
        scrollToPosition(998);
    }
    function meals() {
        scrollToPosition(3672);
    }
    function trans() {
        scrollToPosition(5306);
    }
    function pricing() {
        scrollToPosition(7228);
    }
    function tryIt() {
        scrollToPosition(9215);
    }
    let spans = document.querySelectorAll("footer div span");
    spans.forEach(span => {
        span.addEventListener("click", up)
    })
}
if (width <= 400 && width > 300) {
    document.getElementById('nav-drop').style.display = "block";
    window.onscroll = function () {
        fix()
    };

    function scrollToPosition(position) {
        scrollTo({
            top: position,
            behavior: "smooth"
        });
    }
    function fix() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 900) {
            document.getElementById('header').style.position = "fixed";
        }
        else {
            document.getElementById('header').style.position = "static";
        }
    }
    window.onscroll = fix;

    function up() {
        scrollToPosition(0);
    }

    function howItWork() {
        scrollToPosition(998);
    }
    function meals() {
        scrollToPosition(3717);
    }
    function trans() {
        scrollToPosition(5290);
    }
    function pricing() {
        scrollToPosition(7187);
    }
    function tryIt() {
        scrollToPosition(9215);
    }
    let spans = document.querySelectorAll("footer div span");
    spans.forEach(span => {
        span.addEventListener("click", up)
    })
}

let topn = document.getElementById('pricing').offsetTop;
document.getElementById('divnav').innerHTML = topn - 190;


