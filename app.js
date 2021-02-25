window.onload = ()=>{
    gsap.from(".container",{
        duration:3,
        opacity:0
    });

    gsap.from(".display-1",{
        duration:4,
        opacity:0,
        scale:0,
        delay:1,
        ease:"bounce"
    });

    gsap.from(".logo",{
        duration:1,
        opacity:0,
        xPercent:100,
        delay:2,
        ease:"elastic"
    });

    gsap.from(".year2-div img",{
        duration:0.5,
        opacity:0,
        scale:0,
        delay:3,
        stagger:0.5,
        rotation:360
    });

    gsap.from(".display-3",{
        duration:4,
        opacity:0,
        scale:0,
        delay:4,
        ease:"bounce"
    });

   gsap.from(".logos img",{
        duration:0.5,
        opacity:0,
        scale:0,
        delay:5,
        stagger:0.5,
        rotation:360
    });

}