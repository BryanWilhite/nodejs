window.onload = function(e) {
    var c = document.getElementById('canv');
    var $ = c.getContext('2d');
    var w = c.width = window.innerWidth;
    var h = c.height = window.innerHeight;
    var w2 = w * 0.5;
    var h2 = h * 0.5;
    var ŭ = 0;
    var topiary = new branch(80, 0, 0);
    var cnt = 0;

    function anim() {
        cnt++;
        ŭ -= .5;
        if (cnt % 2) {
            draw();
        }
        window.requestAnimationFrame(anim);
    }
    anim();

    function draw() {
        $.save();
        $.clearRect(0, 0, w, h);
        $.translate(w2, h * 0.98);
        $.rotate(-Math.PI * 0.5);
        topiary.disp($);
        $.restore();
    }

    function branch(len, ang, gen) {
        this.len = len;
        this.ang = ang;
        this.gen = gen;
        this.limb = [];
        this.sway = 0;
        this.mult = rnd(0.01, 0.1);
        this.spawn = 0;
        this.vel = 0;

        if (gen < 10) {
            this.limb.push(new branch(len * rnd(0.8, 0.99),
                rnd(0, Math.PI / 6), this.gen + 1));
            this.limb.push(new branch(len * rnd(0.8, 0.99),
                rnd(0, -Math.PI / 6), this.gen + 1));
        }

        this.disp = function($) {
            this.sway++;
            $.save();
            this.vel *= 0.9;
            var dif = 1 - this.spawn;
            this.vel += (dif * 0.1);
            this.spawn += this.vel;

            $.strokeStyle = "hsla(" + (ŭ % 360) + ",100%,50%,1)";
            $.lineWidth = 1;
            $.beginPath();
            $.rotate(this.ang + (Math.sin(this.sway * this.mult) * Math.PI / 128));
            $.moveTo(0, 0);
            $.lineTo(this.len * this.spawn, 0);
            $.stroke();

            $.translate(this.len * this.spawn, 0);

            if (this.spawn > 0.6) {
                for (var i = 0; i < this.limb.length; i++) {
                    var limb = this.limb[i];
                    limb.disp($);
                }
            }
            $.restore();
        };
    }

    function rnd(min, max) {
        return Math.random() * (max - min) + min;
    }

};
