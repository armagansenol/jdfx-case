import {
  style,
  transition,
  animate,
  trigger,
  query,
  animateChild,
  group,
} from '@angular/animations';

export const transition015 = trigger('inOutAnimation0.15', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.15s ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.15s ease-in', style({ opacity: 0 })),
  ]),
]);

export const transition020 = trigger('inOutAnimation0.2', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.2s ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.2s ease-in', style({ opacity: 0 })),
  ]),
]);

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage <=> AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: '0' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('200ms ease-out', style({ opacity: '0' }))]),
      query(':enter', [animate('200ms ease-out', style({ opacity: '1' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
