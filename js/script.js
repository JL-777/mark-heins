$('document').ready(function(){


    /*Mobile menu*/ 
    $('.mobile-menu').click(function(){
        $('nav').toggleClass('active')
    })

    /*maps function*/

    function maps(){
      if($('body').is('.contactPage')){
        var map = L.map('map-contact').setView([25.768982, -80.20328], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([25.768982, -80.20328]).addTo(map)
      } else if($('body').is('.propertyPage1')){
        var map = L.map('pp1-map').setView([25.768982, -80.20328], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([25.768982, -80.20328]).addTo(map)
      } else if($('body').is('.propertyPage2')){
        var map = L.map('pp2-map').setView([25.822994, -80.216804], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([25.822994, -80.216804]).addTo(map)
      } else if($('body').is('.propertyPage3')){
        var map = L.map('pp3-map').setView([25.704399, -80.283258], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([25.704399, -80.283258]).addTo(map)
      } else if($('body').is('.propertyPage4')){
        var map = L.map('pp4-map').setView([25.753942, -80.236952], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([25.753942, -80.236952]).addTo(map)
      } else if($('body').is('.propertyPage5')){
        var map = L.map('pp5-map').setView([25.76204, -80.193517], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([25.76204, -80.193517]).addTo(map)
      } else if($('body').is('.propertyPage6')){
        var map = L.map('pp6-map').setView([25.78559, -80.226738], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([25.78559, -80.226738]).addTo(map)
      }


    } 


    maps();

    



    /*Function Slider Homepage Properties */ 
    function sliderHome(){
        var queryMin = window.matchMedia("(max-width: 767px)");
        var queryTa = window.matchMedia("(max-width: 1024px)");
        var queryMax = window.matchMedia("(min-width: 1025px)");
        

        if(queryMin.matches){
            $('swiper-container').css("display", "block");
            var swiper = new Swiper('.ss1', {
                slidesPerView: 1,
                spaceBetween: 1,
                freeMode: true,
                pagination: {
                  el: '.swiper-pagination1',
                  clickable: true,
                },
              });
        } else if(queryTa.matches) {
            $('swiper-container').css("display", "block");
            var swiper = new Swiper('.ss1', {
                slidesPerView: 1.5,
                spaceBetween: 1,
                freeMode: true,
                pagination: {
                  el: '.swiper-pagination1',
                  clickable: true,
                },
              });
        } 
    }

    /*Function Slider Property Page */

    function propertySlider(){
      var swiper = new Swiper('.ss2', {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    

    /*Function Slider about page */ 
    function slideAbout(){
      var swiper = new Swiper('.ss3', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }



/*Conditional to show slider acording to page*/

    $(function(){
        if($('body').is('.homePage, .viewProperties')){
            sliderHome();
        } else if($('body').is('.viewProperties')){
            slideProperties();
        } else if($('body').is('.aboutPage')){
          
          slideAbout();
          sliderHome();
        } else if($('body').is('.propertyPage1, .propertyPage2, .propertyPage3, .propertyPage4, .propertyPage5, .propertyPage6')){
          propertySlider();
        }

    })

}) 



