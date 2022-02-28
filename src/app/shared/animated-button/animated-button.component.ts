import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import * as $ from 'jquery';
import { gsap, Power4 } from 'gsap';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss'],
})
export class AnimatedButtonComponent implements OnInit {
  @ViewChild('btnWrapperEl', { static: true })
  btnWrapperEl?: ElementRef<HTMLDivElement>;

  @ViewChild('btnTextEl', { static: true })
  btnTextEl?: ElementRef<HTMLParagraphElement>;

  @ViewChild('btnPlayEl', { static: true })
  btnPlayEl?: ElementRef<HTMLAnchorElement>;

  @Input() btnText?: string;
  @Input() iconSrc?: string;

  textLeft?: number;

  constructor() {}

  ngOnInit(): void {}

  animateBtn() {
    /*     $('.play-btn')
      .stop()
      .css({ background: '#F25818', border: '1px solid #F25818' })
      .delay(100)
      .animate({ width: '45px' }, 100, function () {
        $('.btn-text').animate({ left: 0 }, 140);
        $('.play-logo').stop().animate({ opacity: '1' }, 100);
      }); */

    this.textLeft =
      (this.btnWrapperEl!.nativeElement.offsetWidth -
        this.btnTextEl!.nativeElement.offsetWidth) /
      2;

    this.btnTextEl &&
      gsap.to(this.btnTextEl?.nativeElement, {
        left: 0,
        duration: 0.15,
      });

    this.btnPlayEl &&
      gsap.to(this.btnPlayEl?.nativeElement, {
        css: {
          background: '#F25818',
          border: '1px solid #F25818',
          width: 45,
        },
        opacity: 0.2,
        duration: 0.1,
        ease: Power4.easeInOut,
      });

    this.btnPlayEl?.nativeElement.firstChild &&
      gsap.to(this.btnPlayEl?.nativeElement.firstChild, {
        opacity: 1,
        duration: 0.8,
        ease: Power4.easeInOut,
      });
  }

  animateBtnRev() {
    /*     $('.play-btn')
      .stop()
      .css({ background: 'transparent', border: '1px solid #f8f9fa' })
      .animate({ width: '100%' }, 50);
    $('.btn-text')
      .stop()
      .animate({ left: this.textLeft }, 200, function () {
        $('.play-logo').stop().animate({ opacity: '0' }, 100);
      }); */

    this.btnTextEl &&
      gsap.to(this.btnTextEl?.nativeElement, {
        left: this.textLeft,
        duration: 0.2,
      });

    this.btnPlayEl &&
      gsap.to(this.btnPlayEl?.nativeElement, {
        css: {
          background: 'transparent',
          border: '1px solid #f8f9fa',
          width: '100%',
        },
        opacity: 0.2,
        duration: 0.1,
        ease: Power4.easeInOut,
      });

    this.btnPlayEl?.nativeElement.firstChild &&
      gsap.to(this.btnPlayEl?.nativeElement.firstChild, {
        opacity: 0,
        duration: 0.4,
        ease: Power4.easeInOut,
      });
  }
}
