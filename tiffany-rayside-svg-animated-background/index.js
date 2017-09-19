window.onload = function(e) {
    window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var rect = document.querySelectorAll('rect'),
        path = document.querySelectorAll('path'),
        seg = [].map.call(path, function(p) {
            return p.pathSegList
        }),
        size = [].map.call(rect, function(r) {
            return r.transform.baseVal.getItem(0);
        }),
        off = [].map.call(rect, function(r) {
            return r.transform.baseVal.getItem(1);
        }),
        rots = [].map.call(rect, function(r) {
            return r.transform.baseVal.getItem(2);
        });

    function radius(lays, rad) {
        rad = Math.max(Math.min(rad, 43), 0);
        for (var i = 5; i < 15; i += 3) {
            var seg2 = seg[lays].getItem(i + 1);
            seg[lays].getItem(i).x = seg2.r1 = seg2.r2 = rad;
        }
        return rad;
    }
    //rotate
    function rot(layer, degrees) {
        rots[layer].setRotate(degrees, 0, 0);
    }
    //translate
    function trans(layer, x, y) {
        off[layer].setTranslate(x, y);
    }
    //scale
    function scale(layer, scale) {
        size[layer].setScale(scale, scale);
    }
    //calls
    radius(0, 35);
    radius(1, 25);
    rot(1, 35);
    scale(0, .88);
    //animate
    function anim() {
        var t = Date.now();
        trans(0, Math.sin(t / 7000) * 150, Math.sin(t / 3000) * 120);
        rot(1, Math.sin(t / 19000) * 30);
        window.requestAnimationFrame(anim);
    }
    anim();
};
