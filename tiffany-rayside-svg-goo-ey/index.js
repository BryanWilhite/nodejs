window.onload = function(e) {
    /*
    Heavily Influenced by "The Man In Blue's Blobular" http://www.themaninblue.com/experiment/Blobular/ (found on Creative Bloq http://www.creativebloq.com/design/examples-svg-7112785)
    This is a pretty sad attempt at recreating it - it's not nearly as good. Has some kinks, but it works. 
    */
    var _svg = "http://www.w3.org/2000/svg";
    var _xlnk = "http://www.w3.org/1999/xlink";
    var midX = 400;
    var midY = 400;
    var mt = true;
    var thi = 85;

    var cY_X = function(a, b, r, x) {
        return Math.sqrt(Math.pow(r, 2) - Math.pow(x - a, 2));
    };

    var calc = function(o, pt) {
        var tan = (pt[1] - o[1]) / (pt[0] - o[0]);
        var ang = Math.atan(tan) / Math.PI * 180 + 90;

        if (pt[0] < o[0]) {
            ang += 180;
        }
        return ang;
    }

    var Goo = function(r, a, b) {
        var _goo = this;
        this.c1rad = r;
        this.c1p1 = a;
        this.c1p2 = b;
        this._c1p1_ = a;
        this._c1p2_ = b;
        this.msdn = [a, b];
        this.fuse = thi;
        this.c2rad = 50;
        this.c2p1 = 0;
        this.c2p2 = 0 - this.c1rad + this.c2rad - 1;
        this.pth = document.createElementNS(_svg, "path");
        this.pth.setAttributeNS(null, "class", "pth");
        this.pth.or = this;

        this.reset = function() {
            this.pth.setAttributeNS(null, "transform", "translate(" + this.c1p1 + "," + this.c1p2 + ")");
            var pthd = "m 0 " + -this.c1rad + " A " + this.c1rad + " " + this.c1rad + " 0 1 1 0 " + this.c1rad;
            pthd += "A " + this.c1rad + " " + this.c1rad + " 0 1 1 0 " + -this.c1rad;

            this.pth.setAttribute("d", pthd);
        };

        this.split = function(dist, ang) {
            this.pth.setAttributeNS(null, "transform", "translate(" + this.c1p1 + "," + this.c1p2 + ") rotate(" + ang + ",0,0)");
            this.c2p2 = 0 - this.c1mrad + this.c2rad - dist;

            this.fuse = thi;
            var fina = 0 - this.c1mnrad - this.fuse * 2 - this.c2rad;
            var srta = 0 - this.c1mrad + this.c2rad - 1;
            var diffa = srta - fina;
            var _diffa = this.c2p2 - fina;
            var dper = _diffa / diffa;
            this.c1rad = this.c1mnrad + (this.c1mrad - this.c1mnrad) * dper;

            var angA = this.c1rad + this.fuse;
            var angB = this.c2rad + this.fuse;
            var angC = Math.abs(this.c2p2 - 0);
            var aper = (angA + angB + angC) / 2;
            var aa = Math.sqrt(Math.abs(aper * (aper - angA) * (aper - angB) * (aper - angC)));

            if (angC >= angA) {
                var anght = 2 * aa / angC;
                var angbi = Math.sqrt(Math.pow(angA, 2) - Math.pow(anght, 2));
            } else {
                var anght = 2 * aa / angA;
                var angbi = Math.sqrt(Math.pow(angC, 2) - Math.pow(anght, 2));
            }

            var c1tan = anght / angbi;
            var c1ang = Math.atan(c1tan);
            var c1sin = Math.sin(c1ang);
            var c1iX = c1sin * this.c1rad;
            var c1cos = Math.cos(c1ang);
            var c1iY = c1cos * this.c1rad;

            var fusec1ht = 0 + c1sin * (this.c1rad + this.fuse);
            var fusec1bi = 0 - c1cos * (this.c1rad + this.fuse);

            var pt1X = 0 - c1iX;
            var pt1Y = 0 - c1iY;
            var pt2X = 0 + c1iX;
            var pt2Y = 0 - c1iY;

            var c2tan = (this.c2p2 - fusec1bi) / (this.c2p1 - fusec1ht);
            var c2ang = Math.atan(c2tan);
            var c2iX = fusec1ht - Math.cos(c2ang) * (this.fuse);
            var c2iY = fusec1bi - Math.sin(c2ang) * (this.fuse);

            var pthd = "M " + pt1X + " " + pt1Y + " A " + this.c1rad + " " + this.c1rad + " 0 1 0 " + pt2X + " " + pt2Y;

            if (fusec1ht - this.fuse <= 0 && this.c2p2 < fusec1bi) {
                var xxY = cY_X(fusec1ht, fusec1bi, this.fuse, 0);

                pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 0 " + (fusec1bi + xxY);
                pthd += "m 0 -" + (xxY * 2);
            }

            pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 " + c2iX + " " + c2iY;

            var lcfl = 1;

            if (fusec1bi < this.c2p2) {
                lcfl = 0;
            }
            pthd += "a " + this.c2rad + " " + this.c2rad + " 0 " + lcfl + " 0 " + ((c2iX - 0) * -2) + " 0";

            if (fusec1ht - this.fuse <= 0 && this.c2p2 < fusec1bi) {
                pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 0 " + (fusec1bi - xxY);
                pthd += "m 0 " + (xxY * 2);
            }
            pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 " + pt1X + " " + pt1Y;
            pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 " + pt1X + " " + pt1Y;
            this.pth.setAttribute("d", pthd);
        };
        this.dfuse = function(dist, ang) {
            this.pth.setAttributeNS(null, "class", "pth joining");
            this.pth.setAttributeNS(null, "transform", "translate(" + this.c1p1 + "," + this.c1p2 + ") rotate(" + ang + ",0,0)");

            this.c2p2 = 0 - this.c1mrad + this.c2rad - dist;

            this.fCmnrad = 1;
            this.fCmrad = 200;

            var srta = 0 - this.c1mnrad - this.c2rad;
            var fina = 0 - this.c1mrad + this.c2rad - 1;
            var diffa = srta - fina;
            var _diffa = this.c2p2 - fina;
            var dper = _diffa / diffa;
            this.fuse = this.fCmrad - (this.fCmrad - this.fCmnrad) * dper;
            this.c1rad = this.c1mrad - (this.c1mrad - this.c1mnrad) * dper;

            var angA = this.c1rad + this.fuse;
            var angB = this.c2rad + this.fuse;
            var angC = Math.abs(this.c2p2);
            var aper = (angA + angB + angC) / 2;
            var aa = Math.sqrt(aper * (aper - angA) * (aper - angB) * (aper - angC));

            if (angC >= angA) {
                var anght = 2 * aa / angC;
                var angbi = Math.sqrt(Math.pow(angA, 2) - Math.pow(anght, 2));
            } else {
                var anght = 2 * aa / angA;
                var angbi = Math.sqrt(Math.pow(angC, 2) - Math.pow(anght, 2));
            }

            var c1tan = anght / angbi;
            var c1ang = Math.atan(c1tan);
            var c1sin = Math.sin(c1ang);
            var c1iX = c1sin * this.c1rad;
            var c1cos = Math.cos(c1ang);
            var c1iY = c1cos * this.c1rad;

            var fusec1ht = c1sin * (this.c1rad + this.fuse);
            var fusec1bi = -c1cos * (this.c1rad + this.fuse);

            var pt1X = -c1iX;
            var pt1Y = -c1iY;
            var pt2X = c1iX;
            var pt2Y = -c1iY;

            var c2tan = (this.c2p2 - fusec1bi) / (this.c2p1 - fusec1ht);
            var c2ang = Math.atan(c2tan);
            var c2iX = fusec1ht - Math.cos(c2ang) * (this.fuse);
            var c2iY = fusec1bi - Math.sin(c2ang) * (this.fuse);

            var pthd = "M " + pt1X + " " + pt1Y + " A " + this.c1rad + " " + this.c1rad + " 0 1 0 " + pt2X + " " + pt2Y;

            if (fusec1ht - this.fuse <= 0 && this.c2p2 < fusec1bi) {
                var xxY = cY_X(fusec1ht, fusec1bi, this.fuse, 0);

                pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 0 " + (fusec1bi + xxY);
                pthd += "m 0 -" + (xxY * 2);
            }
            pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 " + c2iX + " " + c2iY;
            var lcfl = 1;
            if (fusec1bi < this.c2p2) {
                lcfl = 0;
            }
            pthd += "a " + this.c2rad + " " + this.c2rad + " 0 " + lcfl + " 0 " + (c2iX * -2) + " 0";

            if (fusec1ht - this.fuse <= 0 && this.c2p2 < fusec1bi) {
                pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 0 " + (fusec1bi - xxY);
                pthd += "m 0 " + (xxY * 2);
            }

            pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 " + pt1X + " " + pt1Y;

            pthd += "A " + this.fuse + " " + this.fuse + " 0 0 1 " + pt1X + " " + pt1Y;

            this.pth.setAttribute("d", pthd);
        };

        this.brk = function(pts) {
            var inc = thi / 4;
            var curra = this.c2p2 + inc;

            if (curra > -this.c1rad + this.c2rad - 1) {
                this.c1rad = this.c1mrad;
                this.reset();
            } else {
                var dist = -curra - (this.c1mrad - this.c2rad);
                var ang = calc([this.c1p1, this.c1p2], pts);

                this.split(dist, ang);
                setTimeout(function() {
                    _goo.brk(pts);
                }, 25);
            }
        }

        this.fuse_ = function(pts) {
            var inc = 20;
            var curra = this.c2p2 + inc;

            if (curra > -this.c1rad + this.c2rad - 1) {
                this.c1rad = this.c1mrad;
                this.pth.setAttributeNS(null, "class", "pth");
                this.reset();
            } else {
                var dist = -curra - (this.c1mrad - this.c2rad);
                var ang = calc([this.c1p1, this.c1p2], pts);

                this.dfuse(dist, ang);
                setTimeout(function() {
                    _goo.fuse_(pts);
                }, 25);
            }
        }

        this.mousedown = function(e) {
            _goo.msdn = _to(e.clientX, e.clientY);
            _goo._c1p1_ = _goo.c1p1;
            _goo._c1p2_ = _goo.c1p2;
            _goo.od = Math.sqrt(Math.pow(_goo.msdn[0] - _goo.c1p1, 2) + Math.pow(_goo.msdn[1] - _goo.c1p2, 2));
            _goo.c2rad = _goo.c1rad - _goo.od;

            if (_goo.od < 20) {
                document.addEventListener("mousemove", _goo.mousemove, false);
                document.addEventListener("mouseup", _goo.mouseup, false);
            } else {
                var c1area = Math.PI * Math.pow(_goo.c1rad, 2);
                var c2area = Math.PI * Math.pow(_goo.c2rad, 2);
                var nxtarea = c1area - c2area;

                _goo.c1mrad = _goo.c1rad;
                _goo.c1mnrad = Math.sqrt(nxtarea / Math.PI);

                document.addEventListener("mousemove", _goo.mvsplit, false);
                document.addEventListener("mouseup", _goo.msupSplit, false);
            }

            e.stopPropagation();
            e.preventDefault();
        };
        this.mousemove = function(e) {
            var pts = _to(e.clientX, e.clientY);

            _goo.pth.setAttributeNS(null, "class", "pth");

            _goo.c1p1 = _goo._c1p1_ + pts[0] - _goo.msdn[0];
            _goo.c1p2 = _goo._c1p2_ + pts[1] - _goo.msdn[1];

            if (mt == true) {
                var paths = document.getElementsByTagName("path");

                for (var i = 0; i < paths.length; i++) {
                    var or = paths[i].or;

                    var dist = Math.sqrt(Math.pow(_goo.c1p1 - or.c1p1, 2) + Math.pow(_goo.c1p2 - or.c1p2, 2))

                    if (paths[i] != _goo.pth && dist < _goo.c1rad + or.c1rad) {
                        var c1area = Math.PI * Math.pow(or.c1rad, 2);
                        var c2area = Math.PI * Math.pow(_goo.c1rad, 2);
                        var nxtarea = c1area + c2area;

                        if (_goo.c1rad < or.c1rad) {
                            or.c1mnrad = or.c1rad;
                            or.c1mrad = Math.sqrt(nxtarea / Math.PI);
                            or.c2rad = _goo.c1rad;
                            or.c2oa = _goo._c1p1_;
                            or.c2ob = _goo._c1p2_;
                            or.msdn = _goo.msdn;
                            var dd = dist - or.c1mrad + or.c2rad;
                            if (dd < 1) {
                                dd = 1;
                            }
                            or.dfuse(dd, calc([or.c1p1, or.c1p2], [_goo.c1p1, _goo.c1p2]));
                            document.addEventListener("mousemove", or.mvfuse, false);
                            document.addEventListener("mouseup", or.msupFuse, false);
                            document.removeEventListener("mousemove", _goo.mousemove, false);
                            document.removeEventListener("mouseup", _goo.mouseup, false);
                            _goo.pth.parentNode.removeChild(_goo.pth);
                        } else {
                            or.c1mnrad = _goo.c1rad;
                            or.c1mrad = Math.sqrt(nxtarea / Math.PI);
                            or.c2rad = or.c1rad;
                            or.c2oa = or.c1p1;
                            or.c2ob = or.c1p2;
                            or.c1rad = _goo.c1rad;
                            or.c1p1 = _goo.c1p1;
                            or.c1p2 = _goo.c1p2;
                            or._c1p1_ = _goo._c1p1_;
                            or._c1p2_ = _goo._c1p2_;
                            or.msdn = _goo.msdn;

                            var dd = dist - or.c1mrad + or.c2rad;
                            if (dd < 1) {
                                dd = 1;
                            }
                            or.dfuse(dd, calc([or.c1p1, or.c1p2], [or.c2oa, or.c2ob]));
                            document.addEventListener("mousemove", or.mvfusea, false);
                            document.addEventListener("mouseup", or.msupfusea, false);
                            document.removeEventListener("mousemove", _goo.mousemove, false);
                            document.removeEventListener("mouseup", _goo.mouseup, false);
                            _goo.pth.parentNode.removeChild(_goo.pth);
                        }
                        break;
                    }
                }
            }
            _goo.reset();
            e.stopPropagation();
            e.preventDefault();
        };

        this.mvsplit = function(e) {
            var pts = _to(e.clientX, e.clientY);
            var dist = Math.sqrt(Math.pow(pts[0] - _goo.c1p1, 2) + Math.pow(pts[1] - _goo.c1p2, 2));

            if (dist > _goo.c1rad + _goo.fuse * 2 + _goo.c2rad) {
                var apart = new Goo(_goo.c2rad, pts[0], pts[1]);
                apart.pth.setAttributeNS(null, "class", "pth joining");
                document.addEventListener("mousemove", apart.mousemove, false);
                document.addEventListener("mouseup", apart.mouseup, false);
                document.removeEventListener("mousemove", _goo.mvsplit, false);
                document.removeEventListener("mouseup", _goo.msupSplit, false);
                this.c1rad = this.c1mnrad;
                _goo.reset();
            } else {
                var dd = dist - _goo.od;
                if (dd < 1) {
                    dd = 1;
                }
                _goo.split(dd, calc([_goo.c1p1, _goo.c1p2], pts));
            }
            e.stopPropagation();
            e.preventDefault();
        };

        this.mvfuse = function(e) {
            var pts = _to(e.clientX, e.clientY);
            var dist = Math.sqrt(Math.pow(_goo.c2oa + pts[0] - _goo.msdn[0] - _goo.c1p1, 2) + Math.pow(_goo.c2ob + pts[1] - _goo.msdn[1] - _goo.c1p2, 2));
            if (dist > _goo.c1mnrad + _goo.c2rad) {
                var apart = new Goo(_goo.c2rad, pts[0], pts[1]);
                document.addEventListener("mousemove", apart.mousemove, false);
                document.addEventListener("mouseup", apart.mouseup, false);
                document.removeEventListener("mousemove", _goo.mvfuse, false);
                document.removeEventListener("mouseup", _goo.msupFuse, false);
                _goo.pth.setAttributeNS(null, "class", "pth");
                _goo.c1rad = _goo.c1mnrad;
                _goo.reset();
            } else {
                var dd = dist - _goo.c1mrad + _goo.c2rad;
                if (dd < 1) {
                    dd = 1;
                }
                _goo.dfuse(dd, calc([_goo.c1p1, _goo.c1p2], [_goo.c2oa + pts[0] - _goo.msdn[0], _goo.c2ob + pts[1] - _goo.msdn[1]]));
            }
            e.stopPropagation();
            e.preventDefault();
        };

        this.mvfusea = function(e) {
            var pts = _to(e.clientX, e.clientY);
            _goo.c1p1 = _goo._c1p1_ + pts[0] - _goo.msdn[0];
            _goo.c1p2 = _goo._c1p2_ + pts[1] - _goo.msdn[1];
            var dist = Math.sqrt(Math.pow(_goo.c1p1 - _goo.c2oa, 2) + Math.pow(_goo.c1p2 - _goo.c2ob, 2));

            if (dist > _goo.c1mnrad + _goo.c2rad) {
                var apart = new Goo(_goo.c2rad, _goo.c2oa, _goo.c2ob);
                document.addEventListener("mousemove", _goo.mousemove, false);
                document.addEventListener("mouseup", _goo.mouseup, false);
                document.removeEventListener("mousemove", _goo.mvfusea, false);
                document.removeEventListener("mouseup", _goo.msupfusea, false);
                _goo.c1rad = _goo.c1mnrad;
                _goo.reset();
            } else {
                var dd = dist - _goo.c1mrad + _goo.c2rad;

                if (dd < 1) {
                    dd = 1;
                }
                _goo.dfuse(dd, calc([_goo.c1p1, _goo.c1p2], [_goo.c2oa, _goo.c2ob]));
            }
            e.stopPropagation();
            e.preventDefault();
        };

        this.mouseup = function(e) {
            _goo.pth.setAttributeNS(null, "class", "pth");
            document.removeEventListener("mousemove", _goo.mousemove, false);
            document.removeEventListener("mouseup", _goo.mouseup, false);
            e.stopPropagation();
            e.preventDefault();
        };

        this.msupSplit = function(e) {
            var pts = _to(e.clientX, e.clientY);
            _goo.brk(pts);
            document.removeEventListener("mousemove", _goo.mvsplit, false);
            document.removeEventListener("mouseup", _goo.msupSplit, false);
            e.stopPropagation();
            e.preventDefault();
        };

        this.msupFuse = function(e) {
            var pts = _to(e.clientX, e.clientY);
            _goo.fuse_(pts);
            document.removeEventListener("mousemove", _goo.mvfuse, false);
            document.removeEventListener("mouseup", _goo.msupFuse, false);
            e.stopPropagation();
            e.preventDefault();
        };

        this.msupfusea = function(e) {
            _goo.fuse_([_goo.c2oa, _goo.c2ob]);
            document.removeEventListener("mousemove", _goo.mvfusea, false);
            document.removeEventListener("mouseup", _goo.msupfusea, false);
            e.stopPropagation();
            e.preventDefault();
        };

        this.pth.addEventListener("mousedown", this.mousedown, false);
        document.getElementsByTagName("svg")[0].appendChild(this.pth);
        this.reset();
    };

    var B = function(xPos, xPer) {
        thi = 10 + Math.round(xPer * 400);
    };

    var vws = function() {
        var sz = [0, 0];
        sz = [window.innerWidth, window.innerHeight];
        return sz;
    };

    var _to = function(gx, gy) {
        var spt = [0, 0];
        var svg = document.getElementsByTagName("svg")[0];
        var vb = svg.viewBox.baseVal;
        var vbw = vb.width;
        var vbh = vb.height;
        var vbr = vbw / vbh;
        var vps = vws();
        var vpr = vps[0] / vps[1];

        if (vbr <= vpr) {
            spt[1] = gy * (vbh / vps[1]);

            var vbgw = vbw * (vps[1] / vbh);
            var vboX = (vps[0] - vbgw) / 2;
            spt[0] = (gx - vboX) * (vbh / vps[1]);
        } else {
            spt[0] = gx * (vbw / vps[0]);

            var vbgh = vbh * (vps[0] / vbw);
            var vboY = (vps[1] - vbgh) / 2;
            spt[1] = (gy - vboY) * (vbw / vps[0]);
        }

        return spt;
    };

    var set = function() {
        new Goo(200, midX, midY);
    };
    set();
};
