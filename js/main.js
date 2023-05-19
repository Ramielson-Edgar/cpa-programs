window.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.cpa-program-advantages__body-title span')
    const firstCounter = document.querySelector('.cpa-program-advantages__item:first-child')

    window.addEventListener('scroll', () => {
        benefitsCounter()
    })

    function hasReached(el) {
        let top = el.getBoundingClientRect().top
        console.log(top)

        if (window.innerHeight >= top + el.offsetHeight) return true
        return false
    }

    function updateCounter(num, maxNum) {
        const currentNum = +num.innerText

        if (currentNum < maxNum) {
            num.innerText = currentNum + 1;
            setTimeout(() => {
                updateCounter(num, maxNum)
            }, 3)
        }
    }

    function benefitsCounter() {
        if (!hasReached) return false

        counters.forEach(el => {
            let target = el.dataset.target

            setTimeout(() => {
                updateCounter(el, target)
            }, 400)
        })
    }

    // =========== Gsap ============= //

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    var images = gsap.utils.toArray('.panel:not(.img-5)');

    images.forEach((image, i) => {

        var tl = gsap.timeline({

            scrollTrigger: {
                trigger: " .wrapper",
                start: () => "top -" + (window.innerHeight * (i + 0.1)),
                end: () => "+=" + window.innerHeight,
                scrub: 1,
            }
        })

        tl.to(image, { "clip-path": "inset(0 0 200% 0)", ease: "power3.inOut",});

    });



    gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });


    var texts = gsap.utils.toArray('.panel-text');


    texts.forEach((text, i) => {

        var tl = gsap.timeline({

            scrollTrigger: {
                trigger: ".wrapper",
                start: () => "top -" + (window.innerHeight * i),
                end: () => "+=" + window.innerHeight,
                scrub: 1,
            }

        })

        gsap
            .from(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top bottom",
                    scrub: 1,
                },
                duration: 1, y: 50,
            })

    });



    gsap.to(".hero-img-1", {
        scrollTrigger: {
            start: "top bottom",
            scrub: 1,
        },
        y: 100,
    })

    gsap.to(".hero-img-2", {
        scrollTrigger: {
            start: "top bottom",
            scrub: 1,
        },
        y: -100,
    })


    gsap.to(".profit-icons", {
        scrollTrigger: {
            start: "top bottom",
            scrub: 1,
        },
        y: 60,
    })

 



})


