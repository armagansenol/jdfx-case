import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { gsap, Power4 } from 'gsap';
import { Power1, Power3 } from 'gsap/all';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('pinkScreen', { static: true })
  pinkScreen?: ElementRef<HTMLDivElement>;

  @ViewChild('whiteScreen', { static: true })
  whiteScreen?: ElementRef<HTMLDivElement>;

  @ViewChild('transitionScreen', { static: true })
  transitionScreen?: ElementRef<HTMLDivElement>;

  @ViewChild('navMenu', { static: true })
  navMenu?: ElementRef<HTMLDivElement>;

  @ViewChild('textWrapper', { static: true })
  textWrapper?: ElementRef<HTMLDivElement>;

  navMenuTL = gsap.timeline();
  textWrapperTL = gsap.timeline();

  isMenuOpen = false;

  slideUpDuration = 900;

  constructor() {}

  ngOnInit(): void {}

  animateMenu() {
    if (this.isMenuOpen) {
      this.slideUp();
      this.isMenuOpen = false;
    } else if (!this.isMenuOpen) {
      this.slideDown();
      this.isMenuOpen = true;
    }
  }

  slideUp() {
    /*     $('.nav-menu').slideUp(this.slideUpDuration);
    $('.menu-btn').css({ color: '#f8f9fa', transition: '0.8s ease' });
    $('.btn-underline').animate({ opacity: '0' }, 400, function () {
      $('.btn-underline').css({ width: '0' });
    });
    $('.nav-menu-item').animate({ fontSize: '400px' });
    $('.nav-menu').slideUp({ duration: 400, queue: false }); */

    if (this.pinkScreen) {
      gsap.to(this.pinkScreen.nativeElement, {
        css: {
          display: 'none',
          height: '0',
        },
        duration: 0.3,
      });
    }

    if (this.whiteScreen) {
      gsap.to(this.whiteScreen.nativeElement, {
        css: {
          display: 'none',
          height: '0',
        },
        duration: 0.3,
      });
    }

    if (this.navMenu) {
      gsap.to(this.navMenu.nativeElement, {
        css: {
          display: 'none',
          height: '0',
        },
        duration: 0.3,
      });
    }
  }

  slideDown() {
    // pink screen
    //$('.pink').slideDown(800);
    if (this.pinkScreen) {
      gsap.to(this.pinkScreen.nativeElement, {
        css: {
          display: 'block',
          height: '100%',
        },
        duration: 0.8,
        ease: Power1.easeInOut,
      });
    }

    // white screen
    //$('.white').delay(50).slideDown(1000);
    if (this.whiteScreen) {
      gsap.to(this.whiteScreen.nativeElement, {
        css: {
          display: 'block',
          height: '100%',
        },
        duration: 1,
        delay: 0.05,
        ease: Power1.easeInOut,
      });
    }

    // transition text
    //$('.transition-screen').delay(50).slideDown(800);
    if (this.transitionScreen) {
      gsap.to(this.transitionScreen.nativeElement, {
        css: {
          display: 'block',
        },
        duration: 0.8,
        delay: 0.05,
        ease: Power1.easeInOut,
      });
    }

    // nav menu
    /*     $('.nav-menu')
      .delay(1500)
      .slideDown(600, function () {
        $('.pink').slideUp();
        $('.white').slideUp();
        $('.transition-screen').slideUp();
      });
    $('.nav-menu-item').animate({ fontSize: '250px' });

    $('.btn-underline')
      .delay(1400)
      .css({ opacity: 1 })
      .animate({ width: '100%' }, this.slideUpDuration);
    $('.menu-btn').css({ color: '#000000', transition: '0.6s ease' });
    $('.menu-btn span').css({ opacity: '0', transition: '0.6s ease' }); */
    this.textWrapper &&
      this.textWrapperTL
        .fromTo(
          this.textWrapper!.nativeElement,
          { css: { display: 'block', transform: 'scale(4)', y: -1800 } },
          { css: { transform: 'scale(1)', y: 0 }, duration: 0.9 }
        )
        .fromTo(
          this.textWrapper!.nativeElement,
          { css: { transform: 'scale(1)' } },
          { css: { transform: 'scale(0)' }, delay: 0.4, duration: 1.25 }
        )
        .to(this.textWrapper!.nativeElement, {
          css: { display: 'none' },
        });

    if (this.navMenu) {
      this.navMenuTL
        .to(this.navMenu.nativeElement, {
          css: {
            display: 'block',
            height: '100%',
          },
          duration: 0.8,
          delay: 1.5,
          ease: Power4.easeInOut,
        })
        .fromTo(
          this.navMenu.nativeElement.firstChild,
          {
            css: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            },
          },
          { css: { y: '-50%', x: '-50%' }, duration: 0.9 }
        )
        .to([this.pinkScreen!.nativeElement, this.whiteScreen!.nativeElement], {
          css: {
            display: 'none',
            height: '0',
          },
          duration: 0.3,
        });
    }
  }
}
