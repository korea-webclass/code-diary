/* 
    기본적으로 inline 에서 transform 에서는 적용이 안됩니다.
    gsap 내부적으로 transform 으로 움직이는건데
    최소한 display: inline-block 로 해야한다.
*/

$(function () {
    // 7편
    gsap.registerPlugin(ScrollTrigger);

    // .section01 > img 스크롤 내렸다가, 올렸다가 애니메이션
    gsap.from('.section01 > img', {
        x: 600,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: '.section01 > img',
            markers: true,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse none reverse'
        }
    });

    gsap.from('.section02 > img', {
        y: 600,
        duration: 1,
        opacity: 0,
        scrollTrigger: '.section02 > img'
    });

    // 스크롤하면 한번 나타나는 애니메이션
    // gsap.from('.section01 > img', {
    //     x: 600,
    //     duration: 1,
    //     opacity: 0,
    //     scrollTrigger: '.section01 > img'
    // });

    // gsap.from('.section02 > img', {
    //     y: 600,
    //     duration: 1,
    //     opacity: 0,
    //     scrollTrigger: '.section02 > img'
    // });








    // 6편
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to('.box-2', {
    //     scrollTrigger: '.box-3',
    //     duration: 1,
    //     x: 400,
    //     rotation: 360,
    //     duration: 4,
    // });

    // gsap.to('.box-3', {
    //     scrollTrigger: {
    //         trigger: '.box-3',
    //         markers: true,
    //         start: 'center center',
    //         end: "bottom, 10%",
    //         toggleActions: 'play pause reverse complete'
    //     },
    //     duration: 1,
    //     x: 400,
    //     rotation: 360,
    //     duration: 4,
    // });

    // .box-3 보이면 .box-2 동작
    // gsap.to('.box-2', {
    //     scrollTrigger: '.box-3',
    //     duration: 1,
    //     x: 400,
    //     rotation: 360,
    //     duration: 4,
    // });

    // 일반적인 코드  : .box-3 보이면 .box-3 동작
    // gsap.to('.box-3', {
    //     scrollTrigger: '.box-3',
    //     duration: 1,
    //     x: 400,
    //     rotation: 360,
    //     duration: 4,
    // });









    // 5편
    // var tl = gsap.timeline({
    //     repeat: -1,
    //     repeatDelay: 5,
    // });
    
    // tl.from('.section-1-text > span > span', {
    //     y: 300,
    //     duration: 1,
    //     stagger: 0.2,
    // });

    // tl.to('.section-1-text > span > span', {
    //     y: -300,
    //     duration: 1,
    //     stagger: {
    //         each: 0.2,
    //         from: 'end',
    //     }
    // }, '+=3');

    // gsap.from('.section-1-text > span > span', {
    //     y: 300,
    //     duration: 1,
    //     stagger: 0.2,
    // });
    










    // 4편
    // gsap.timeline()
    // .to('.box', {
    //     duration: 1, 
    //     rotation: 360, 
    //     y: 100,
    //     stagger: {
    //         amount: 1,
    //         from: 'center',
    //     } 
    // })
    // .to('.box', {
    //     duration: 1, 
    //     rotation: 0, 
    //     y: 0,
    //     stagger: {
    //         amount: 1,
    //         from: 'center',
    //     } 
    // });

    // gsap.to('.demo > .box', {
    //     y: 100,
    //     duration: 1,
    //     stagger: {
    //         // each: 1,
    //         amount: 1,
    //         from: 'edges',
    //     },
    // });

    // gsap.to('.demo > .box', {
    //     y: 100,
    //     duration: 1,
    //     stagger: 0.3,
    // });

    // 순서대로 애니메이션 주는 코드
    // var tl1 = gsap.timeline();
    // tl1.to('.demo > .box:nth-child(1)', {
    //     y: 100,
    //     duration: 1,
    // });
    // tl1.to('.demo > .box:nth-child(2)', {
    //     y: 100,
    //     duration: 1,
    // }, '-=0.9');
    // tl1.to('.demo > .box:nth-child(3)', {
    //     y: 100,
    //     duration: 1,
    // }, '-=0.9');
    // tl1.to('.demo > .box:nth-child(4)', {
    //     y: 100,
    //     duration: 1,
    // }, '-=0.9');
    // tl1.to('.demo > .box:nth-child(5)', {
    //     y: 100,
    //     duration: 1,
    // }, '-=0.9');









    // 3편
    // gsap.fromTo('.box-1', {x: 100}, {
    //     y: 500, 
    //     duration: 3,
    // });

    // var tl1 = gsap.timeline();
    // tl1.fromTo('.box-1', {x:0}, {
    //     duration: 2,
    //     x: 500,
    // });
    // tl1.to('.box-1', {
    //     duration: 2,
    //     x: 100,
    // });









    // 2편
    // timeline(); 및 순차적으로 애니메이션
    // var tl1 = gsap.timeline();

    // tl1.to('.box-1', {
    //     x: 500,
    //     // x: -500,
    //     duration: 3,
    // })
    // .to('.box-1', {
    //     rotation: 360,
    //     duration: 5,
    // }, '-=3')
    // .to('.box-1', {
    //     backgroundColor: 'pink',
    //     duration: 1,
    // })
    // .to('.box-1', {
    //     backgroundColor: 'red',
    //     x: 0,
    //     duration: 10,
    // });










    // 1편
    // 기본 밑으로 내려가는 애니메이션
    // gsap.to('.box-1', {
    //     x: 500, // 가로값
    //     // rotation: 45, // 회전하기
    //     duration: 5 // 시간
    // });

    // gsap.from('.box-2', {
    //     x: 500, // 가로값
    //     // rotation: 45, // 회전하기
    //     duration: 5 // 시간
    // });










    // 스크롤 트리거 플러그인 활성화
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.from('.section-1 > img', {
    //     duration: 1,
    //     x: 400,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: '.section-1 > img', 
    //         markers: true, 
    //         start: 'top 50%', 
    //         end: 'bottom 20%', 
    //         toggleActions: 'play none none reverse', 
    //     }
    // });

    // gsap.from('.section-2 > img', {
    //     duration: 1,
    //     y: 400,
    //     opacity: 0,
    //     scrollTrigger: '.section-2 > img',
    // });
});
