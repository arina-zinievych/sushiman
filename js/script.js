import { animate, inView } from 'motion';


inView('.header__nav', ({ target }) => {
    animate(
        target.querySelector('.header__logo h4'), {
            opacity: ['0', '1'],
            y: ['-50px', '0']
        },
        { duration: 0.4, easing: 'linear' }
    ),
    animate(
        target.querySelector('.header__menu'), {
            opacity: ['0', '1'],
            y: ['-50px', '0']
        },
        { duration: 0.4, easing: 'linear' }
    ),
    animate(
        target.querySelector('.header__menu-mobile'), {
            opacity: ['0', '1'],
            y: ['-50px', '0']
        },
        { duration: 0.4, easing: 'linear' }
    )
});

inView('section.hero', ({ target }) => {
    animate(
        target.querySelector('.hero-image img'), {
            opacity: ['0', '1'],
            y: ['400px', '0']
        },
        { duration: 0.4, easing: 'linear' }
    ),
    animate(
        target.querySelector('.hero-image h2'), {
            opacity: ['0', '1'],
            y: ['400px', '0']
        },
        { duration: 0.6, easing: 'linear' }
    ),
    animate(
        target.querySelector('.hero-content-info'), {
            opacity: ['0', '1'],
            x: ['-400px', '0']
        },
        { duration: 0.4, easing: 'linear' }
    ),
    animate(
        target.querySelector('.hero-content__testimonial'), {
            opacity: ['0', '1'],
            y: ['400px', '0']
        },
        { duration: 0.6, easing: 'linear' }
    )
});

inView('section.about-us', ({ target }) => {
    animate(
        target.querySelector('.about-us__image-sushi3 img'), {
            opacity: ['0', '1'],
            x: ['-400px', '0']
        },
        { duration: 0.6, easing: 'linear' }
    ),
    animate(
        target.querySelector('.about-us__image-sushi2 img'), {
            opacity: ['0', '1'],
            x: ['-400px', '0']
        },
        { duration: 0.6, easing: 'linear' }
    ),
    animate(
        target.querySelector('.about-us__content'), {
            opacity: ['0', '1'],
            x: ['400px', '0']
        },
        { duration: 0.6, easing: 'linear' }
    )
});

inView('section.popular-foods', ({ target }) => {
    animate(
        target.querySelector('.popular-foods__title'), {
            opacity: ['0', '1'],
            y: ['-200px', '0']
        },
        { duration: 0.8, easing: 'linear' }
    ),
    animate(
        target.querySelector('.popular-foods__filters'), {
            opacity: ['0', '1'],
            y: ['80px', '0']
        },
        { duration: 0.8, easing: 'linear' }
    ),
    animate(
        target.querySelector('.popular-foods__catalogue'), {
            opacity: ['0', '1'],
            y: ['400px', '0']
        },
        { duration: 0.8, easing: 'linear' }
    )
});

inView('section.trending', ({ target }) => {
    animate(
        target.querySelector('.trending-sushi .trending__content'), {
            opacity: ['0', '1'],
            x: ['-400px', '0']
        },
        { duration: 0.8, easing: 'linear' }
    ),
    animate(
        target.querySelector('.trending-sushi .trending__image img'), {
            opacity: ['0', '1'],
            x: ['400px', '0']
        },
        { duration: 0.8, easing: 'linear' }
    ),
    animate(
        target.querySelector('.trending__discover'), {
            opacity: ['0', '1'],
            scale: ['1.4', '1']
    },
        { duration: 0.8, easing: 'linear' }
    ),
    animate(
        target.querySelector('.trending-drinks .trending__image img'), {
            opacity: ['0', '1'],
            x: ['-400px', '0']
    },
        { duration: 0.8, easing: 'linear' }
    ),
    animate(
        target.querySelector('.trending-drinks .trending__content'), {
            opacity: ['0', '1'],
            x: ['400px', '0']
    },
        { duration: 0.8, easing: 'linear' }
    )
});

inView('section.subscription', ({ target }) => {
    animate(
        target.querySelector('h2'), {
            opacity: ['0', '1'],
            scale: ['0.4', '1']
        },
        { duration: 1, easing: 'linear' }
    ),
    animate(
        target.querySelector('p'), {
            opacity: ['0', '1'],
            y: ['400px', '0']
        },
        { duration: 1, easing: 'linear' }
    ),
    animate(
        target.querySelector('.subscription__form'), {
            opacity: ['0', '1'],
            y: ['400px', '0']
        },
        { duration: 1, easing: 'linear' }
    )
});
