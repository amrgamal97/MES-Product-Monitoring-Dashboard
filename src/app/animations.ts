import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const animator = trigger('animator', [
  transition('* <=> *', [
    query(
      ':enter,:leave',
      style({ position: 'fixed', width: '100%', zIndex: 2 }),
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translate(100%)', opacity: '0' }),
          animate(
            '0.2s ease-out',
            style({ transform: 'translate(0%)', opacity: '1' })
          ),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translate(0%)', opacity: '1' }),
          animate(
            '0.2s ease-out',
            style({ transform: 'translate(-100%)', opacity: '0' })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
