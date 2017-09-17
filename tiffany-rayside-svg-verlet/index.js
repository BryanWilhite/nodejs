var ss = 465; //svg size
var p = document.getElementById('p'),
    poly, $;

function Pt(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Pt.dist = function(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

function Rect(x, y, w, h) {
    this.x = 0;
    this.y = 0;
    this.w = w || 0;
    this.h = h || 0;
    this.l = x; //left
    this.r = x + w; //right
    this.t = y; //top
    this.b = y + h; //bottom
}
//verlet point
function vPt(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.px = this.x;
    this.py = this.y;
}
//update
vPt.prototype.upd = function() {
    var tmpX = this.x,
        tmpY = this.y;
    this.x += this.getX();
    this.y += this.getY();
    this.px = tmpX;
    this.py = tmpY;
}
//set position
vPt.prototype.setPos = function(x, y) {
    this.x = this.px = x;
    this.y = this.py = y;
}
//contain
vPt.prototype.cont = function(rect) {
    this.x = Math.max(rect.l, Math.min(rect.r, this.x));
    this.y = Math.max(rect.t, Math.min(rect.b, this.y));
}
//set verlet x
vPt.prototype.setX = function(val) {
    this.px = this.x - val;
}
//get verlet x
vPt.prototype.getX = function() {
    return this.x - this.px;
}
//set verlet y
vPt.prototype.setY = function(val) {
    this.py = this.y - val;
}
//get verlet y
vPt.prototype.getY = function() {
    return this.y - this.py;
}
//verlet lines
function vLine(ptA, ptB, k, length) {
    this.ptA = ptA;
    this.ptB = ptB;
    this.k = k || 0.5;
    this.length = length || Pt.dist(ptA, ptB);
}
//update lines
vLine.prototype.upd = function() {
    var dx = this.ptB.x - this.ptA.x,
        dy = this.ptB.y - this.ptA.y,
        dist = Math.sqrt(dx * dx + dy * dy),
        diff = (this.length - dist) / dist,
        offX = diff * dx * this.k,
        offY = diff * dy * this.k;
    this.ptA.x -= offX;
    this.ptA.y -= offY;
    this.ptB.x += offX;
    this.ptB.y += offY;
}

//polygon (point, vertex, size, var k)
function Poly(pt, vert, size, k) {
    this.vert = vert;
    this.pts = [];
    this.lines = [];
    this.vx = 0.2;

    for (var v = 0; v < 2 * Math.PI; v += 2 * Math.PI / vert) {
        this.pts.push(
            new vPt(Math.cos(v) * size + pt.x, Math.sin(v) * size + pt.y));
    }

    for (var i = 0, n = this.pts.length; i < n; i++) {
        pt = this.pts[i];
        for (var j = 0, m = this.pts.length; j < m; j++) {
            if (i !== j) {
                this.lines.push(
                    new vLine(pt, this.pts[j], k));
            }
        }
    }
}

Poly.prototype.upd = function() {
    var pt,
        line,
        i = 0,
        n = this.pts.length;

    for (; i < n; i++) {
        pt = this.pts[i];
        pt.y += this.vx;
        pt.upd();
        pt.cont($);
    }

    i = 0;
    n = this.lines.length;
    for (; i < n; i++) {
        line = this.lines[i];
        line.upd();
    }
}

Poly.prototype.draw = function() {
    var pt, line, i, n;
    var d = 'M ' + this.pts[0].x + ' ' + this.pts[0].y + ' L ';
    i = 0;
    n = this.pts.length;
    for (; i < n; i++) {
        pt = this.pts[i];
        d += ' ' + pt.x + ' ' + pt.y;
    }
    d += ' Q ';
    i = 0;
    n = this.lines.length;
    for (; i < n; i++) {
        line = this.lines[i];
        d += ' ' + line.ptA.x + ' ' + line.ptA.y;
        d += ' ' + line.ptB.x + ' ' + line.ptB.y;
    }
    d += ' Z';
    p.setAttribute('d', d);
}

var msdn, prevX = 0,
    prevY = 0;

window.addEventListener("mousedown", function(e) {
    msdn = true;
    prevX = e.clientX;
    prevY = e.clientY;
});

window.addEventListener("touchstart", function(e) {
    msdn = true;
    prevX = e.touches[0].clientX;
    prevY = e.touches[0].clientY;
});

window.addEventListener("mouseup", function(e) {
    msdn = false;
});

window.addEventListener("touchend", function(e) {
    msdn = false;
});

window.addEventListener("mousemove", function(e) {
    if (msdn) {
        for (var i = 0; i < poly.pts.length; i++) {
            poly.pts[i].x += (e.clientX - prevX) / 8;
            poly.pts[i].y += (e.clientY - prevY) / 8;
        }
        prevX = e.clientX;
        prevY = e.clientY;
    }
});

window.addEventListener("touchmove", function(e) {
    e.preventDefault();
    if (msdn) {
        for (var i = 0; i < poly.pts.length; i++) {
            poly.pts[i].x += (e.touches[0].clientX - prevX) / 8;
            poly.pts[i].y += (e.touches[0].clientY - prevY) / 8;
        }
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
    }
});

$ = new Rect(0, 0, ss, ss);
poly = new Poly(new Pt(220, 90), 9, 80, 0.025);

function loop() {
    poly.upd();
    poly.draw();
    window.requestAnimationFrame(loop);
}
loop();

document.getElementById('ptrng').addEventListener('change', function(e) {
    poly = new Poly(new Pt(220, 90), e.currentTarget.value, 80, 0.025);
});
