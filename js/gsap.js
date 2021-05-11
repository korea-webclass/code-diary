/* 
    기본적으로 inline 에서 transform 에서는 적용이 안됩니다.
    gsap 내부적으로 transform 으로 움직이는건데
    최소한 display: inline-block 로 해야한다.
*/


$(function (){
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.box-01', {
        x: 400,
        rotation: 360,
        duration: 4,
    });

    gsap.to('.box-02', {
        scrollTrigger: {
            trigger: '.box-05',
            markers: true,
            start: "center 50%",
            end: 'bottom, 10%',
            toggleActions: 'play pause reverse none',
        }, 
        x: 400,
        rotation: 360,
        duration: 4,
    });



    // var t1 = gsap.timeline({
    //     repeat: -1,
    //     repeatDelay: 1,
    // });

    // t1.from('.box', {
    //     y: 200, 
    //     duration: 1, 
    //     stagger: 0.2
    // });
    // t1.to('.box', {
    //     y: -200, 
    //     duration: 1, 
    //     stagger: 0.2
    // });



    // var tl3 = gsap.timeline();
    // tl3.to('.box', {x: 100, duration: 1, stagger: {
    //     each: 0.5,
    //     amount: 1,
    //     from: 'end',
    //     from: 'edges',
    //     from: 'center',
    // }});



    // var tl3 = gsap.timeline();
    // tl3.to('.box-01', {x: 100, duration: 1})
    // tl3.to('.box-02', {x: 100, duration: 1}, '-=0.8')
    // tl3.to('.box-03', {x: 100, duration: 1}, '-=0.8')
    // tl3.to('.box-04', {x: 100, duration: 1}, '-=0.8')
    // tl3.to('.box-05', {x: 100, duration: 1}, '-=0.8')
    // tl3.to('.box-06', {x: 100, duration: 1}, '-=0.8')
    // tl3.to('.box-07', {x: 100, duration: 1}, '-=0.8')
    // tl3.to('.box-08', {x: 100, duration: 1}, '-=0.8')
    // tl3.to('.box-09', {x: 100, duration: 1}, '-=0.8')



    // var tl2 = gsap.timeline();
    // tl2.fromTo('.box-01', 
    //     {y: 50}, 
    //     {duration: 3, x: 500, y: 0},
    // );
    // tl2.to('.box-01', 
    //     {duration: 3, x: 0, y: 0},
    // );
    


    // gsap.fromTo('.box-01', {
    //     y: 200
    // },{
    //     duration: 3,
    //     x: 500,
    //     y: 0,
    // });



    // var tl1 = gsap.timeline();
    // tl1.to('.box-01', {
    //     duration: 3, 
    //     x: 500,
    // }).to('.box-01', {
    //     duration: 3,
    //     backgroundColor: 'pink',
    // });

    // // 기본 밑으로 내려가는 애니메이션
    // gsap.to('.box-02', {
    //     y: 200,
    //     duration: 1.5,
    // });
});
