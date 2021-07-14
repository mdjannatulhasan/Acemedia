$(document).ready(function () {
    $(".nav li").click(function(){
        $(".nav li").removeClass("active-li");
        $(this).addClass("active-li")
    });
    $("#toggler-icon").click(function () {
        $("#nav-menu-mobile").toggle("active");
    });
    $("#cross").click(function () {
        $("#nav-menu-mobile").toggle("active");
    });
    $("body").click(function () {
        $("#nav-menu-mobile").removeClass("active");
    });
    $(".tabcontent:first-child").css("display", "block");
    $(".tablinks").click(function () {
        $(".tabcontent").css("display", "none");
        var menuId = 'm' + this.id;
        console.log(menuId);
        $(document.getElementById(menuId)).toggle("active-menu");
    });
    $("#menu-btn").click(function () {
        $("#mobile-meny").toggle("active");
    });
    $("#mobile-meny").click(function () {
        $("#mobile-meny").toggle("active");
    });

    const secOne = document.querySelectorAll(".slider .sec-content");
    const options = {
        root:null,
        threshold:0,
        rootMargin: "-280px 0px -500px 0px",
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            console.log(entry);
            var tabId = entry.target.id + "-btn";
            if(entry.isIntersecting){
                entry.target.style.backgroundColor = 'lightBlue';
                document.getElementById(tabId).classList.add('active-title');
            }else{
                entry.target.style.backgroundColor = 'white';
                document.getElementById(tabId).classList.remove('active-title');
            }
        })
    },options);
    
    secOne.forEach(section => {
        observer.observe(section);
    });
});