//скрытие меню при нажатии на esc
document.addEventListener("keyup", function(event) {
    if (event.keyCode == 27){
        $('.header-menu').removeClass('header-menu--active');
        $('.hamburger').removeClass('hamburger--active');
        document.querySelector('.logo').classList.toggle('logo--active');
    }
});

$(document).on('mouseup', function (e){
    var div = $(".header-menu");
    // var hamburger = $(".hamburger");
    var titer = $(".titer-top")
    if (!div.is(e.target) && !titer.is(e.target)  && div.has(e.target).length === 0) {
        document.querySelector('.header-menu').classList.remove('header-menu--active');
    }
});

//события на клик для меню, гамбргера, и логотипа
document.querySelector('.hamburger').onclick = function() {
    document.querySelector('.hamburger').classList.add('hamburger--active');
    document.querySelector('.header-menu').classList.toggle('header-menu--active');
    document.querySelector('.logo').classList.toggle('logo--active');
}

  
// паралакс гречки
document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll('.grain-item').forEach(layer => {
    let x = (window.innerWidth  - e.pageX * 2) / 100;
    let y = (window.innerHeight - e.pageY * 2) / 100;
    
    layer.style.transform = `translate(${x}px,${y}px)`;
  })
}

$( document ).ready(function() {
    $("#rlevance").slider({
        animate: "slow",
        range: "min",    
        value: 76,
        slide : function(event, ui) {    
            $("#result-rlevance").text(ui.value);        
        }
    });
    $( "#result-polzunok" ).text($( "#polzunok" ).slider( "value" ));  

    $("#time").slider({
        animate: "slow",
        range: true,
        max: 80,
        min: 2,  
        values: [ 2, 30 ],
        slide : function(event, ui) {    
            $("#result-time").text( ui.values[ 0 ] + " - " + ui.values[ 1 ] + " мин " );        
        }   
    });
    $( "#result-time" ).text($("#time").slider("values", 0) + " - " + $("#time").slider("values", 1) + " мин.");


    jQuery(function($){
        $('.tel').mask('+7 (999) 999-99-99');
    });

});


$('#fullpage').fullpage({
    autoScrolling:true,
    scrollHorizontally: true,
    anchors:['firstPage', 'secondPage'],
    responsiveWidth: 500,
});


$("#rlevance").ionRangeSlider({
    prefix: 'на все ',
    postfix: ' %',
    min: 0,
    max: 100,
    skin: 'big',
    keyboard: true,
    hide_min_max: true
});

$("#time").ionRangeSlider({
    type: 'double',
    min: 0,
    max: 100,
    skin: 'big',
    keyboard: true,
    hide_min_max: true,
    drag_interval: true,
});