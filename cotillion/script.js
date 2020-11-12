$(function () {

    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: "#one",
            duration: 400, // the scene should last for a scroll distance of 400px
            offset: 100 // start this scene after scrolling for 100px
        })
        .setClassToggle("#sunrise", "show") // add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#two",
            duration: "400%", // the scene should last for a scroll distance of 400% of the height, this will get it to stay in the position
            offset: 100 // start this scene after scrolling for 100px
        })
        .setClassToggle("#day", "show") // add class toggle
        .addTo(controller);
    

    new ScrollMagic.Scene({
            triggerElement: "#three",
            duration: 400, // the scene should last for a scroll distance of 500px
            offset: 100 // start this scene after scrolling for 100px
        })
        .setClassToggle("#moon", "show") // add class toggle
        .addTo(controller);


});
