/*
Shery.imageEffect("#back", {style:5, config : 
    {"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},
    "zindex":{"value":-9996999,"range":[-9999999,9999999]},
    "aspect":{"value":2.1875719535735985},
    "ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},
    "shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
    "shapeRadius":{"value":0,"range":[0,2]},
    "currentScroll":{"value":0},"scrollLerp":{"value":0.07},
    "gooey":{"value":true},"infiniteGooey":{"value":false},
    "growSize":{"value":4,"range":[1,15]},
    "durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},
    "displaceAmount":{"value":0.5},
    "masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},
    "scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},
    "noEffectGooey":{"value":true},
    "onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2]},
    "discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},
    "noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},  gooey:true
});
*/

function isDesktop() {

    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone', 'mobile'];
    const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword));

    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    const width = window.innerWidth;
    const isTooSmall = width < 1024; // Minimum laptop size

    const isPortrait = window.matchMedia("(orientation: portrait)").matches && width < 1024;
    
    console.log('Device Check:', {
        userAgent: userAgent,
        isMobile: isMobileUA,
        isTouch: isTouchDevice,
        width: width,
        isPortrait: isPortrait
    });

    if (isMobileUA || isTouchDevice || isTooSmall || isPortrait) {
        return false;
    }
    
    return true;
}

function blockAccess() {
    console.error(' ACCESS DENIED: This website is desktop-only.');
    

    const overlay = document.getElementById('device-block');
    if (overlay) {
        overlay.style.display = 'flex';
    }
    
    // Hide all content
    const main = document.getElementById('main');
    if (main) {
        main.style.display = 'none';
    }

    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
}

function allowAccess() {
    console.log(' ACCESS GRANTED: Desktop device detected.');
    
    const overlay = document.getElementById('device-block');
    if (overlay) {
        overlay.style.display = 'none';
    }
    
    const main = document.getElementById('main');
    if (main) {
        main.style.display = 'block';
    }
}

(function() {
    if (!isDesktop()) {
        blockAccess();
    } else {
        allowAccess();
    }
})();


window.addEventListener('resize', function() {
    if (!isDesktop()) {
        blockAccess();
    }
});

if (isDesktop()) {
    let currentImageIndex = 0;

Shery.imageEffect("#back", {
    style: 5,
    config: {
        "a": { "value": 0.92, "range": [0, 30] },
        "b": { "value": -0.98, "range": [-1, 1] },
        "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
        "aspect": { "value": 2.1875719535735985 },
        "ignoreShapeAspect": { "value": true },
        "shapePosition": { "value": { "x": 0, "y": 0 } },
        "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
        "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
        "shapeRadius": { "value": 0, "range": [0, 2] },
        "currentScroll": { "value": 0 },
        "scrollLerp": { "value": 0.07 },
        "gooey": { "value": true },
        "infiniteGooey": { "value": false },
        "growSize": { "value": 4, "range": [1, 15] },
        "durationOut": { "value": 1, "range": [0.1, 5] },
        "durationIn": { "value": 1.5, "range": [0.1, 5] },
        "displaceAmount": { "value": 0.5 },
        "masker": { "value": true },
        "maskVal": { "value": 1, "range": [1, 5] },
        "scrollType": { "value": 0 },
        "geoVertex": { "range": [1, 64], "value": 1 },
        "noEffectGooey": { "value": true },
        "onMouse": { "value": 1 },
        "noise_speed": { "value": 0.2, "range": [0, 10] },
        "metaball": { "value": 0.15, "range": [0, 2] },
        "discard_threshold": { "value": 0.5, "range": [0, 1] },
        "antialias_threshold": { "value": 0, "range": [0, 0.1] },
        "noise_height": { "value": 0.5, "range": [0, 2] },
        "noise_scale": { "value": 10, "range": [0, 100] }
    },
    gooey: true
});

    
}





