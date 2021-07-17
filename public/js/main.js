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
        threshold:1,
        rootMargin: "-90px 0px 0px 0px",
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
    $(".ta-kontakt").waypoint(function(direction){
        $(".ta-kontakt h2").addClass('animate__animated animate__zoomIn animate__slow')
    },{
        offset:'40%'
    });
    $(".ta-kontakt").waypoint(function(direction){
        $(".ta-kontakt .btn").addClass('animate__animated animate__zoomIn animate__slow')
    },{
        offset:'40%'
    });
    $(".slider").waypoint(function(direction){
        $(".slider .tab-buttons").addClass('animate__animated animate__fadeInLeft animate__slow')
    },{
        offset:'40%'
    });
    $(".slider").waypoint(function(direction){
        $(".slider .sec-content").addClass('animate__animated animate__fadeInRight animate__slow')
    },{
        offset:'40%'
    });
    $(".consulting .leftCol").waypoint(function(direction){
        $(".consulting .leftCol").addClass('animate__animated animate__fadeInLeft animate__slow')
    },{
        offset:'40%'
    });
    $(".consulting .rightCol").waypoint(function(direction){
        $(".consulting .rightCol").addClass('animate__animated animate__fadeInRight animate__slow')
    },{
        offset:'40%'
    });
    $(".blogg").waypoint(function(direction){
        $(".blogg h2").addClass('animate__animated animate__zoomIn animate__slow')
    },{
        offset:'40%'
    });
    $(".blogg").waypoint(function(direction){
        $(".blogg .sec-p").addClass('animate__animated animate__zoomIn animate__slow')
    },{
        offset:'40%'
    });
    $(".blogg .s-1").waypoint(function(direction){
        $(".blogg .s-1").addClass('animate__animated animate__fadeInLeft animate__slow')
    },{
        offset:'20%'
    });
    $(".blogg .s-2").waypoint(function(direction){
        $(".blogg .s-2").addClass('animate__animated animate__fadeInUp animate__slow')
    },{
        offset:'20%'
    });
    $(".blogg .s-3").waypoint(function(direction){
        $(".blogg .s-3").addClass('animate__animated animate__fadeInRight animate__slow')
    },{
        offset:'20%'
    });
    $(".booking .b1").waypoint(function(direction){
        $(".booking .b1").addClass('animate__animated animate__fadeInTopLeft animate__slow')
    },{
        offset:'40%'
    });
    $(".booking .b3").waypoint(function(direction){
        $(".booking .b3").addClass('animate__animated animate__fadeInBottomLeft animate__slow')
    },{
        offset:'40%'
    });
    $(".booking .b2").waypoint(function(direction){
        $(".booking .b2").addClass('animate__animated animate__fadeInTopRight animate__slow')
    },{
        offset:'40%'
    });
    $(".booking .b4").waypoint(function(direction){
        $(".booking .b4").addClass('animate__animated animate__fadeInBottomRight animate__slow')
    },{
        offset:'40%'
    });
    $(".form .leftCol").waypoint(function(direction){
        $(".form .leftCol").addClass('animate__animated animate__fadeInLeft animate__slow')
    },{
        offset:'40%'
    });
    $(".form .rightCol").waypoint(function(direction){
        $(".form .rightCol").addClass('animate__animated animate__fadeInRight animate__slow')
    },{
        offset:'40%'
    });
});