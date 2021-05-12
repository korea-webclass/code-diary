/* 
    기본적으로 inline 에서 transform 에서는 적용이 안됩니다.
    gsap 내부적으로 transform 으로 움직이는건데
    최소한 display: inline-block 로 해야한다.
*/


$(function (){

    // function top_bar() {
    //     var $menu1ItemLine = $('.top-bar__menu-1-item-line');
    //     $('.top-bar__menu-1 > ul > li').mouseenter(function() {
    //         var $li = $(this);

    //         var left = $li.position().left;
    //         var width = $li.outerWidth();

    //         $menu1ItemLine.css({
    //             left: left,
    //             width: width
    //         });
    //         // console.log("left : " + left + ", width: " + width);
    //     });
    //     $('.top-bar__menu-1 > ul > li').eq(0).mouseenter();
    // };
    // top_bar();















    // 스크롤 트리거 플러그인 활성화
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.section-1 > img', {
        duration: 1,
        x: 400,
        opacity: 0,
        scrollTrigger: {
            trigger: '.section-1 > img', 
            markers: true, 
            start: "top 50%", 
            end: 'bottom 20%', 
            toggleActions: 'play none none reverse', 
        }
    });

    gsap.from('.section-2 > img', {
        duration: 1,
        y: 400,
        opacity: 0,
        scrollTrigger: '.section-2 > img',
    });






    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to('.box-01', {
    //     x: 400,
    //     rotation: 360,
    //     duration: 4,
    // });

    // gsap.to('.box-02', {
    //     scrollTrigger: {
    //         trigger: '.box-05',
    //         markers: true,
    //         start: "center 50%",
    //         end: 'bottom, 10%',
    //         toggleActions: 'play pause reverse none',
    //     }, 
    //     x: 400,
    //     rotation: 360,
    //     duration: 4,
    // });



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
