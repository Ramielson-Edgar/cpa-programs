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

        tl.to(image, { "clip-path": "inset(0 0 200% 0)", ease: "power1.inOut", });

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





 
    ScrollTrigger.matchMedia({
        '(max-width:768px)': function () {

            const container = document.querySelector('.list-container')
            let items = gsap.utils.toArray(".cpa-program-why__item");

            gsap.to(items, {
                xPercent: -110 * (items.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    end: "+=3000"
                }
            })

        },

        // '(max-width:576px)': function () {

        //     const container = document.querySelector('.list-container')
        //     let items = gsap.utils.toArray(".cpa-program-why__item");

        //     gsap.to(items, {
        //         xPercent: -90 * (items.length - 1),
        //         ease: "none",
        //         scrollTrigger: {
        //             trigger: container,
        //             pin: true,
        //             scrub: 1,
        //             end: "+=3000"
        //         }
        //     })





        // },

    }
    )

})


