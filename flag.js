const tl = gsap.timeline({deaults: {duration: 0.75, ease: "power1.out"}})

tl.fromTo('.flag-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5})
tl.fromTo('.flag', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation:'0deg'}, '<50%')
tl.fromTo('.text', {x:30, opacity: 0}, {x:0, opacity:1},'<')

const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.flag-container', {opacity: 0, y: 100, duration: 0.75, ease: 'power1.out'})
})

tl.fromTo('.flag', {y:0, rotation: '0deg'}, {y:-20, rotation: '10deg', yoyo: true, repeat: -1})
