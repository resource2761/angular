import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swiper from 'swiper';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as M from '../assets/materialize/js/materialize.min.js';
// import Swiper core and required components
import SwiperCore,  { Navigation, Pagination,EffectFlip,EffectCoverflow,  
  Scrollbar, A11y, Autoplay, Lazy, EffectFade } from 'swiper/core';
  import * as $ from 'jquery' 

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectCoverflow,  Lazy, EffectFade, EffectFlip]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angdemo';
  options={};
  deviceInfo:any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    //navText: ['Next', 'Previous'],
    navText: ['Next', 'Previous'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  

  dynamicSlides = [
    {
      id: 1,
      src:'https://via.placeholder.com/600/92c952',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'https://via.placeholder.com/600/771796',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'https://via.placeholder.com/600/24f355',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'https://via.placeholder.com/600/d32776',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'https://via.placeholder.com/600/f66b97',
      alt:'Side 5',
      title:'Side 5'
    },

    {
      id: 6,
      src:'https://www.youtube.com/watch?v=JpxsRwnRwCQ',
      alt:'Side 6',
      title:'Side 6'
    },
  ]

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:5000,
    lazyLoad:true,
    
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    center:true,
    autoHeight:true,
    autoWidth:true,
    
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }


  constructor(private deviceService: DeviceDetectorService) 
  { 

   
    

  }

  devicedetails()
  {
    this.deviceInfo = this.deviceService.getDeviceInfo();
     const isMobile = this.deviceService.isMobile();
     const isTablet = this.deviceService.isTablet();
     const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log('Mobile :'+isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log('Tab :'+isTablet);  // returns if the device us a tablet (iPad etc)
    console.log('Desktop:'+isDesktopDevice); // returns if the app is running on a Desktop browser.
  }


  onSwiper(swiper) {
    console.log(swiper)
  }
  onSlideChange() {
    console.log('slide change')
  }

  goto_event(id:any)
  {
    alert(id)
  }

  ngOnInit()
  {

    this.devicedetails();

 document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      //var instances = M.Carousel.init(elems, this.options);
      var instances = M.Carousel.init(elems, 
        {
          fullWidth: false,
          duration:300,
          indicators:true,
          autoplay:true
        });

      
    });
  }

  drop()
  {
    $(".dropdown-button").dropdown();
  }
  
}
