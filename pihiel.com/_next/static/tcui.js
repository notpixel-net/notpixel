var Yh = Object.create,
    _l = Object.freeze,
    Li = Object.defineProperty;
var Zh = Object.getOwnPropertyDescriptor;
var Qh = Object.getOwnPropertyNames;
var Xh = Object.getPrototypeOf,
    Jh = Object.prototype.hasOwnProperty;
var eg = (t, e, n) => e in t ? Li(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var Ll = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var tg = (t, e, n, r) => {
    if (e && typeof e == "object" || typeof e == "function")
        for (let o of Qh(e)) !Jh.call(t, o) && o !== n && Li(t, o, {
            get: () => e[o],
            enumerable: !(r = Zh(e, o)) || r.enumerable
        });
    return t
};
var Wi = (t, e, n) => (n = t != null ? Yh(Xh(t)) : {}, tg(e || !t || !t.__esModule ? Li(n, "default", {
    value: t,
    enumerable: !0
}) : n, t));
var W = (t, e, n) => eg(t, typeof e != "symbol" ? e + "" : e, n);
var E = (t, e) => _l(Li(t, "raw", {
    value: _l(e || t.slice())
}));
var $i = Ll((Y6, Ni) => {
    (function(t) {
        "use strict";
        var e = function(u) {
                var m, p = new Float64Array(16);
                if (u)
                    for (m = 0; m < u.length; m++) p[m] = u[m];
                return p
            },
            n = function() {
                throw new Error("no PRNG")
            },
            r = new Uint8Array(16),
            o = new Uint8Array(32);
        o[0] = 9;
        var i = e(),
            a = e([1]),
            s = e([56129, 1]),
            c = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
            d = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
            h = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
            f = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
            b = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

        function w(u, m, p, l) {
            u[m] = p >> 24 & 255, u[m + 1] = p >> 16 & 255, u[m + 2] = p >> 8 & 255, u[m + 3] = p & 255, u[m + 4] = l >> 24 & 255, u[m + 5] = l >> 16 & 255, u[m + 6] = l >> 8 & 255, u[m + 7] = l & 255
        }

        function S(u, m, p, l, y) {
            var C, A = 0;
            for (C = 0; C < y; C++) A |= u[m + C] ^ p[l + C];
            return (1 & A - 1 >>> 8) - 1
        }

        function k(u, m, p, l) {
            return S(u, m, p, l, 16)
        }

        function $(u, m, p, l) {
            return S(u, m, p, l, 32)
        }

        function q(u, m, p, l) {
            for (var y = l[0] & 255 | (l[1] & 255) << 8 | (l[2] & 255) << 16 | (l[3] & 255) << 24, C = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, A = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, te = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, pe = l[4] & 255 | (l[5] & 255) << 8 | (l[6] & 255) << 16 | (l[7] & 255) << 24, se = m[0] & 255 | (m[1] & 255) << 8 | (m[2] & 255) << 16 | (m[3] & 255) << 24, Ge = m[4] & 255 | (m[5] & 255) << 8 | (m[6] & 255) << 16 | (m[7] & 255) << 24, ue = m[8] & 255 | (m[9] & 255) << 8 | (m[10] & 255) << 16 | (m[11] & 255) << 24, ke = m[12] & 255 | (m[13] & 255) << 8 | (m[14] & 255) << 16 | (m[15] & 255) << 24, Be = l[8] & 255 | (l[9] & 255) << 8 | (l[10] & 255) << 16 | (l[11] & 255) << 24, Le = p[16] & 255 | (p[17] & 255) << 8 | (p[18] & 255) << 16 | (p[19] & 255) << 24, Me = p[20] & 255 | (p[21] & 255) << 8 | (p[22] & 255) << 16 | (p[23] & 255) << 24, Ie = p[24] & 255 | (p[25] & 255) << 8 | (p[26] & 255) << 16 | (p[27] & 255) << 24, Re = p[28] & 255 | (p[29] & 255) << 8 | (p[30] & 255) << 16 | (p[31] & 255) << 24, Ee = l[12] & 255 | (l[13] & 255) << 8 | (l[14] & 255) << 16 | (l[15] & 255) << 24, de = y, me = C, ce = A, he = j, ge = te, ae = pe, U = se, M = Ge, Y = ue, K = ke, z = Be, ee = Le, ve = Me, We = Ie, Ne = Re, De = Ee, x, Ke = 0; Ke < 20; Ke += 2) x = de + ve | 0, ge ^= x << 7 | x >>> 25, x = ge + de | 0, Y ^= x << 9 | x >>> 23, x = Y + ge | 0, ve ^= x << 13 | x >>> 19, x = ve + Y | 0, de ^= x << 18 | x >>> 14, x = ae + me | 0, K ^= x << 7 | x >>> 25, x = K + ae | 0, We ^= x << 9 | x >>> 23, x = We + K | 0, me ^= x << 13 | x >>> 19, x = me + We | 0, ae ^= x << 18 | x >>> 14, x = z + U | 0, Ne ^= x << 7 | x >>> 25, x = Ne + z | 0, ce ^= x << 9 | x >>> 23, x = ce + Ne | 0, U ^= x << 13 | x >>> 19, x = U + ce | 0, z ^= x << 18 | x >>> 14, x = De + ee | 0, he ^= x << 7 | x >>> 25, x = he + De | 0, M ^= x << 9 | x >>> 23, x = M + he | 0, ee ^= x << 13 | x >>> 19, x = ee + M | 0, De ^= x << 18 | x >>> 14, x = de + he | 0, me ^= x << 7 | x >>> 25, x = me + de | 0, ce ^= x << 9 | x >>> 23, x = ce + me | 0, he ^= x << 13 | x >>> 19, x = he + ce | 0, de ^= x << 18 | x >>> 14, x = ae + ge | 0, U ^= x << 7 | x >>> 25, x = U + ae | 0, M ^= x << 9 | x >>> 23, x = M + U | 0, ge ^= x << 13 | x >>> 19, x = ge + M | 0, ae ^= x << 18 | x >>> 14, x = z + K | 0, ee ^= x << 7 | x >>> 25, x = ee + z | 0, Y ^= x << 9 | x >>> 23, x = Y + ee | 0, K ^= x << 13 | x >>> 19, x = K + Y | 0, z ^= x << 18 | x >>> 14, x = De + Ne | 0, ve ^= x << 7 | x >>> 25, x = ve + De | 0, We ^= x << 9 | x >>> 23, x = We + ve | 0, Ne ^= x << 13 | x >>> 19, x = Ne + We | 0, De ^= x << 18 | x >>> 14;
            de = de + y | 0, me = me + C | 0, ce = ce + A | 0, he = he + j | 0, ge = ge + te | 0, ae = ae + pe | 0, U = U + se | 0, M = M + Ge | 0, Y = Y + ue | 0, K = K + ke | 0, z = z + Be | 0, ee = ee + Le | 0, ve = ve + Me | 0, We = We + Ie | 0, Ne = Ne + Re | 0, De = De + Ee | 0, u[0] = de >>> 0 & 255, u[1] = de >>> 8 & 255, u[2] = de >>> 16 & 255, u[3] = de >>> 24 & 255, u[4] = me >>> 0 & 255, u[5] = me >>> 8 & 255, u[6] = me >>> 16 & 255, u[7] = me >>> 24 & 255, u[8] = ce >>> 0 & 255, u[9] = ce >>> 8 & 255, u[10] = ce >>> 16 & 255, u[11] = ce >>> 24 & 255, u[12] = he >>> 0 & 255, u[13] = he >>> 8 & 255, u[14] = he >>> 16 & 255, u[15] = he >>> 24 & 255, u[16] = ge >>> 0 & 255, u[17] = ge >>> 8 & 255, u[18] = ge >>> 16 & 255, u[19] = ge >>> 24 & 255, u[20] = ae >>> 0 & 255, u[21] = ae >>> 8 & 255, u[22] = ae >>> 16 & 255, u[23] = ae >>> 24 & 255, u[24] = U >>> 0 & 255, u[25] = U >>> 8 & 255, u[26] = U >>> 16 & 255, u[27] = U >>> 24 & 255, u[28] = M >>> 0 & 255, u[29] = M >>> 8 & 255, u[30] = M >>> 16 & 255, u[31] = M >>> 24 & 255, u[32] = Y >>> 0 & 255, u[33] = Y >>> 8 & 255, u[34] = Y >>> 16 & 255, u[35] = Y >>> 24 & 255, u[36] = K >>> 0 & 255, u[37] = K >>> 8 & 255, u[38] = K >>> 16 & 255, u[39] = K >>> 24 & 255, u[40] = z >>> 0 & 255, u[41] = z >>> 8 & 255, u[42] = z >>> 16 & 255, u[43] = z >>> 24 & 255, u[44] = ee >>> 0 & 255, u[45] = ee >>> 8 & 255, u[46] = ee >>> 16 & 255, u[47] = ee >>> 24 & 255, u[48] = ve >>> 0 & 255, u[49] = ve >>> 8 & 255, u[50] = ve >>> 16 & 255, u[51] = ve >>> 24 & 255, u[52] = We >>> 0 & 255, u[53] = We >>> 8 & 255, u[54] = We >>> 16 & 255, u[55] = We >>> 24 & 255, u[56] = Ne >>> 0 & 255, u[57] = Ne >>> 8 & 255, u[58] = Ne >>> 16 & 255, u[59] = Ne >>> 24 & 255, u[60] = De >>> 0 & 255, u[61] = De >>> 8 & 255, u[62] = De >>> 16 & 255, u[63] = De >>> 24 & 255
        }

        function P(u, m, p, l) {
            for (var y = l[0] & 255 | (l[1] & 255) << 8 | (l[2] & 255) << 16 | (l[3] & 255) << 24, C = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, A = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, te = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, pe = l[4] & 255 | (l[5] & 255) << 8 | (l[6] & 255) << 16 | (l[7] & 255) << 24, se = m[0] & 255 | (m[1] & 255) << 8 | (m[2] & 255) << 16 | (m[3] & 255) << 24, Ge = m[4] & 255 | (m[5] & 255) << 8 | (m[6] & 255) << 16 | (m[7] & 255) << 24, ue = m[8] & 255 | (m[9] & 255) << 8 | (m[10] & 255) << 16 | (m[11] & 255) << 24, ke = m[12] & 255 | (m[13] & 255) << 8 | (m[14] & 255) << 16 | (m[15] & 255) << 24, Be = l[8] & 255 | (l[9] & 255) << 8 | (l[10] & 255) << 16 | (l[11] & 255) << 24, Le = p[16] & 255 | (p[17] & 255) << 8 | (p[18] & 255) << 16 | (p[19] & 255) << 24, Me = p[20] & 255 | (p[21] & 255) << 8 | (p[22] & 255) << 16 | (p[23] & 255) << 24, Ie = p[24] & 255 | (p[25] & 255) << 8 | (p[26] & 255) << 16 | (p[27] & 255) << 24, Re = p[28] & 255 | (p[29] & 255) << 8 | (p[30] & 255) << 16 | (p[31] & 255) << 24, Ee = l[12] & 255 | (l[13] & 255) << 8 | (l[14] & 255) << 16 | (l[15] & 255) << 24, de = y, me = C, ce = A, he = j, ge = te, ae = pe, U = se, M = Ge, Y = ue, K = ke, z = Be, ee = Le, ve = Me, We = Ie, Ne = Re, De = Ee, x, Ke = 0; Ke < 20; Ke += 2) x = de + ve | 0, ge ^= x << 7 | x >>> 25, x = ge + de | 0, Y ^= x << 9 | x >>> 23, x = Y + ge | 0, ve ^= x << 13 | x >>> 19, x = ve + Y | 0, de ^= x << 18 | x >>> 14, x = ae + me | 0, K ^= x << 7 | x >>> 25, x = K + ae | 0, We ^= x << 9 | x >>> 23, x = We + K | 0, me ^= x << 13 | x >>> 19, x = me + We | 0, ae ^= x << 18 | x >>> 14, x = z + U | 0, Ne ^= x << 7 | x >>> 25, x = Ne + z | 0, ce ^= x << 9 | x >>> 23, x = ce + Ne | 0, U ^= x << 13 | x >>> 19, x = U + ce | 0, z ^= x << 18 | x >>> 14, x = De + ee | 0, he ^= x << 7 | x >>> 25, x = he + De | 0, M ^= x << 9 | x >>> 23, x = M + he | 0, ee ^= x << 13 | x >>> 19, x = ee + M | 0, De ^= x << 18 | x >>> 14, x = de + he | 0, me ^= x << 7 | x >>> 25, x = me + de | 0, ce ^= x << 9 | x >>> 23, x = ce + me | 0, he ^= x << 13 | x >>> 19, x = he + ce | 0, de ^= x << 18 | x >>> 14, x = ae + ge | 0, U ^= x << 7 | x >>> 25, x = U + ae | 0, M ^= x << 9 | x >>> 23, x = M + U | 0, ge ^= x << 13 | x >>> 19, x = ge + M | 0, ae ^= x << 18 | x >>> 14, x = z + K | 0, ee ^= x << 7 | x >>> 25, x = ee + z | 0, Y ^= x << 9 | x >>> 23, x = Y + ee | 0, K ^= x << 13 | x >>> 19, x = K + Y | 0, z ^= x << 18 | x >>> 14, x = De + Ne | 0, ve ^= x << 7 | x >>> 25, x = ve + De | 0, We ^= x << 9 | x >>> 23, x = We + ve | 0, Ne ^= x << 13 | x >>> 19, x = Ne + We | 0, De ^= x << 18 | x >>> 14;
            u[0] = de >>> 0 & 255, u[1] = de >>> 8 & 255, u[2] = de >>> 16 & 255, u[3] = de >>> 24 & 255, u[4] = ae >>> 0 & 255, u[5] = ae >>> 8 & 255, u[6] = ae >>> 16 & 255, u[7] = ae >>> 24 & 255, u[8] = z >>> 0 & 255, u[9] = z >>> 8 & 255, u[10] = z >>> 16 & 255, u[11] = z >>> 24 & 255, u[12] = De >>> 0 & 255, u[13] = De >>> 8 & 255, u[14] = De >>> 16 & 255, u[15] = De >>> 24 & 255, u[16] = U >>> 0 & 255, u[17] = U >>> 8 & 255, u[18] = U >>> 16 & 255, u[19] = U >>> 24 & 255, u[20] = M >>> 0 & 255, u[21] = M >>> 8 & 255, u[22] = M >>> 16 & 255, u[23] = M >>> 24 & 255, u[24] = Y >>> 0 & 255, u[25] = Y >>> 8 & 255, u[26] = Y >>> 16 & 255, u[27] = Y >>> 24 & 255, u[28] = K >>> 0 & 255, u[29] = K >>> 8 & 255, u[30] = K >>> 16 & 255, u[31] = K >>> 24 & 255
        }

        function F(u, m, p, l) {
            q(u, m, p, l)
        }

        function re(u, m, p, l) {
            P(u, m, p, l)
        }
        var L = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

        function Z(u, m, p, l, y, C, A) {
            var j = new Uint8Array(16),
                te = new Uint8Array(64),
                pe, se;
            for (se = 0; se < 16; se++) j[se] = 0;
            for (se = 0; se < 8; se++) j[se] = C[se];
            for (; y >= 64;) {
                for (F(te, j, A, L), se = 0; se < 64; se++) u[m + se] = p[l + se] ^ te[se];
                for (pe = 1, se = 8; se < 16; se++) pe = pe + (j[se] & 255) | 0, j[se] = pe & 255, pe >>>= 8;
                y -= 64, m += 64, l += 64
            }
            if (y > 0)
                for (F(te, j, A, L), se = 0; se < y; se++) u[m + se] = p[l + se] ^ te[se];
            return 0
        }

        function N(u, m, p, l, y) {
            var C = new Uint8Array(16),
                A = new Uint8Array(64),
                j, te;
            for (te = 0; te < 16; te++) C[te] = 0;
            for (te = 0; te < 8; te++) C[te] = l[te];
            for (; p >= 64;) {
                for (F(A, C, y, L), te = 0; te < 64; te++) u[m + te] = A[te];
                for (j = 1, te = 8; te < 16; te++) j = j + (C[te] & 255) | 0, C[te] = j & 255, j >>>= 8;
                p -= 64, m += 64
            }
            if (p > 0)
                for (F(A, C, y, L), te = 0; te < p; te++) u[m + te] = A[te];
            return 0
        }

        function T(u, m, p, l, y) {
            var C = new Uint8Array(32);
            re(C, l, y, L);
            for (var A = new Uint8Array(8), j = 0; j < 8; j++) A[j] = l[j + 16];
            return N(u, m, p, A, C)
        }

        function R(u, m, p, l, y, C, A) {
            var j = new Uint8Array(32);
            re(j, C, A, L);
            for (var te = new Uint8Array(8), pe = 0; pe < 8; pe++) te[pe] = C[pe + 16];
            return Z(u, m, p, l, y, te, j)
        }
        var X = function(u) {
            this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0;
            var m, p, l, y, C, A, j, te;
            m = u[0] & 255 | (u[1] & 255) << 8, this.r[0] = m & 8191, p = u[2] & 255 | (u[3] & 255) << 8, this.r[1] = (m >>> 13 | p << 3) & 8191, l = u[4] & 255 | (u[5] & 255) << 8, this.r[2] = (p >>> 10 | l << 6) & 7939, y = u[6] & 255 | (u[7] & 255) << 8, this.r[3] = (l >>> 7 | y << 9) & 8191, C = u[8] & 255 | (u[9] & 255) << 8, this.r[4] = (y >>> 4 | C << 12) & 255, this.r[5] = C >>> 1 & 8190, A = u[10] & 255 | (u[11] & 255) << 8, this.r[6] = (C >>> 14 | A << 2) & 8191, j = u[12] & 255 | (u[13] & 255) << 8, this.r[7] = (A >>> 11 | j << 5) & 8065, te = u[14] & 255 | (u[15] & 255) << 8, this.r[8] = (j >>> 8 | te << 8) & 8191, this.r[9] = te >>> 5 & 127, this.pad[0] = u[16] & 255 | (u[17] & 255) << 8, this.pad[1] = u[18] & 255 | (u[19] & 255) << 8, this.pad[2] = u[20] & 255 | (u[21] & 255) << 8, this.pad[3] = u[22] & 255 | (u[23] & 255) << 8, this.pad[4] = u[24] & 255 | (u[25] & 255) << 8, this.pad[5] = u[26] & 255 | (u[27] & 255) << 8, this.pad[6] = u[28] & 255 | (u[29] & 255) << 8, this.pad[7] = u[30] & 255 | (u[31] & 255) << 8
        };
        X.prototype.blocks = function(u, m, p) {
            for (var l = this.fin ? 0 : 2048, y, C, A, j, te, pe, se, Ge, ue, ke, Be, Le, Me, Ie, Re, Ee, de, me, ce, he = this.h[0], ge = this.h[1], ae = this.h[2], U = this.h[3], M = this.h[4], Y = this.h[5], K = this.h[6], z = this.h[7], ee = this.h[8], ve = this.h[9], We = this.r[0], Ne = this.r[1], De = this.r[2], x = this.r[3], Ke = this.r[4], Ye = this.r[5], Ze = this.r[6], He = this.r[7], Oe = this.r[8], Fe = this.r[9]; p >= 16;) y = u[m + 0] & 255 | (u[m + 1] & 255) << 8, he += y & 8191, C = u[m + 2] & 255 | (u[m + 3] & 255) << 8, ge += (y >>> 13 | C << 3) & 8191, A = u[m + 4] & 255 | (u[m + 5] & 255) << 8, ae += (C >>> 10 | A << 6) & 8191, j = u[m + 6] & 255 | (u[m + 7] & 255) << 8, U += (A >>> 7 | j << 9) & 8191, te = u[m + 8] & 255 | (u[m + 9] & 255) << 8, M += (j >>> 4 | te << 12) & 8191, Y += te >>> 1 & 8191, pe = u[m + 10] & 255 | (u[m + 11] & 255) << 8, K += (te >>> 14 | pe << 2) & 8191, se = u[m + 12] & 255 | (u[m + 13] & 255) << 8, z += (pe >>> 11 | se << 5) & 8191, Ge = u[m + 14] & 255 | (u[m + 15] & 255) << 8, ee += (se >>> 8 | Ge << 8) & 8191, ve += Ge >>> 5 | l, ue = 0, ke = ue, ke += he * We, ke += ge * (5 * Fe), ke += ae * (5 * Oe), ke += U * (5 * He), ke += M * (5 * Ze), ue = ke >>> 13, ke &= 8191, ke += Y * (5 * Ye), ke += K * (5 * Ke), ke += z * (5 * x), ke += ee * (5 * De), ke += ve * (5 * Ne), ue += ke >>> 13, ke &= 8191, Be = ue, Be += he * Ne, Be += ge * We, Be += ae * (5 * Fe), Be += U * (5 * Oe), Be += M * (5 * He), ue = Be >>> 13, Be &= 8191, Be += Y * (5 * Ze), Be += K * (5 * Ye), Be += z * (5 * Ke), Be += ee * (5 * x), Be += ve * (5 * De), ue += Be >>> 13, Be &= 8191, Le = ue, Le += he * De, Le += ge * Ne, Le += ae * We, Le += U * (5 * Fe), Le += M * (5 * Oe), ue = Le >>> 13, Le &= 8191, Le += Y * (5 * He), Le += K * (5 * Ze), Le += z * (5 * Ye), Le += ee * (5 * Ke), Le += ve * (5 * x), ue += Le >>> 13, Le &= 8191, Me = ue, Me += he * x, Me += ge * De, Me += ae * Ne, Me += U * We, Me += M * (5 * Fe), ue = Me >>> 13, Me &= 8191, Me += Y * (5 * Oe), Me += K * (5 * He), Me += z * (5 * Ze), Me += ee * (5 * Ye), Me += ve * (5 * Ke), ue += Me >>> 13, Me &= 8191, Ie = ue, Ie += he * Ke, Ie += ge * x, Ie += ae * De, Ie += U * Ne, Ie += M * We, ue = Ie >>> 13, Ie &= 8191, Ie += Y * (5 * Fe), Ie += K * (5 * Oe), Ie += z * (5 * He), Ie += ee * (5 * Ze), Ie += ve * (5 * Ye), ue += Ie >>> 13, Ie &= 8191, Re = ue, Re += he * Ye, Re += ge * Ke, Re += ae * x, Re += U * De, Re += M * Ne, ue = Re >>> 13, Re &= 8191, Re += Y * We, Re += K * (5 * Fe), Re += z * (5 * Oe), Re += ee * (5 * He), Re += ve * (5 * Ze), ue += Re >>> 13, Re &= 8191, Ee = ue, Ee += he * Ze, Ee += ge * Ye, Ee += ae * Ke, Ee += U * x, Ee += M * De, ue = Ee >>> 13, Ee &= 8191, Ee += Y * Ne, Ee += K * We, Ee += z * (5 * Fe), Ee += ee * (5 * Oe), Ee += ve * (5 * He), ue += Ee >>> 13, Ee &= 8191, de = ue, de += he * He, de += ge * Ze, de += ae * Ye, de += U * Ke, de += M * x, ue = de >>> 13, de &= 8191, de += Y * De, de += K * Ne, de += z * We, de += ee * (5 * Fe), de += ve * (5 * Oe), ue += de >>> 13, de &= 8191, me = ue, me += he * Oe, me += ge * He, me += ae * Ze, me += U * Ye, me += M * Ke, ue = me >>> 13, me &= 8191, me += Y * x, me += K * De, me += z * Ne, me += ee * We, me += ve * (5 * Fe), ue += me >>> 13, me &= 8191, ce = ue, ce += he * Fe, ce += ge * Oe, ce += ae * He, ce += U * Ze, ce += M * Ye, ue = ce >>> 13, ce &= 8191, ce += Y * Ke, ce += K * x, ce += z * De, ce += ee * Ne, ce += ve * We, ue += ce >>> 13, ce &= 8191, ue = (ue << 2) + ue | 0, ue = ue + ke | 0, ke = ue & 8191, ue = ue >>> 13, Be += ue, he = ke, ge = Be, ae = Le, U = Me, M = Ie, Y = Re, K = Ee, z = de, ee = me, ve = ce, m += 16, p -= 16;
            this.h[0] = he, this.h[1] = ge, this.h[2] = ae, this.h[3] = U, this.h[4] = M, this.h[5] = Y, this.h[6] = K, this.h[7] = z, this.h[8] = ee, this.h[9] = ve
        }, X.prototype.finish = function(u, m) {
            var p = new Uint16Array(10),
                l, y, C, A;
            if (this.leftover) {
                for (A = this.leftover, this.buffer[A++] = 1; A < 16; A++) this.buffer[A] = 0;
                this.fin = 1, this.blocks(this.buffer, 0, 16)
            }
            for (l = this.h[1] >>> 13, this.h[1] &= 8191, A = 2; A < 10; A++) this.h[A] += l, l = this.h[A] >>> 13, this.h[A] &= 8191;
            for (this.h[0] += l * 5, l = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += l, l = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += l, p[0] = this.h[0] + 5, l = p[0] >>> 13, p[0] &= 8191, A = 1; A < 10; A++) p[A] = this.h[A] + l, l = p[A] >>> 13, p[A] &= 8191;
            for (p[9] -= 8192, y = (l ^ 1) - 1, A = 0; A < 10; A++) p[A] &= y;
            for (y = ~y, A = 0; A < 10; A++) this.h[A] = this.h[A] & y | p[A];
            for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, C = this.h[0] + this.pad[0], this.h[0] = C & 65535, A = 1; A < 8; A++) C = (this.h[A] + this.pad[A] | 0) + (C >>> 16) | 0, this.h[A] = C & 65535;
            u[m + 0] = this.h[0] >>> 0 & 255, u[m + 1] = this.h[0] >>> 8 & 255, u[m + 2] = this.h[1] >>> 0 & 255, u[m + 3] = this.h[1] >>> 8 & 255, u[m + 4] = this.h[2] >>> 0 & 255, u[m + 5] = this.h[2] >>> 8 & 255, u[m + 6] = this.h[3] >>> 0 & 255, u[m + 7] = this.h[3] >>> 8 & 255, u[m + 8] = this.h[4] >>> 0 & 255, u[m + 9] = this.h[4] >>> 8 & 255, u[m + 10] = this.h[5] >>> 0 & 255, u[m + 11] = this.h[5] >>> 8 & 255, u[m + 12] = this.h[6] >>> 0 & 255, u[m + 13] = this.h[6] >>> 8 & 255, u[m + 14] = this.h[7] >>> 0 & 255, u[m + 15] = this.h[7] >>> 8 & 255
        }, X.prototype.update = function(u, m, p) {
            var l, y;
            if (this.leftover) {
                for (y = 16 - this.leftover, y > p && (y = p), l = 0; l < y; l++) this.buffer[this.leftover + l] = u[m + l];
                if (p -= y, m += y, this.leftover += y, this.leftover < 16) return;
                this.blocks(this.buffer, 0, 16), this.leftover = 0
            }
            if (p >= 16 && (y = p - p % 16, this.blocks(u, m, y), m += y, p -= y), p) {
                for (l = 0; l < p; l++) this.buffer[this.leftover + l] = u[m + l];
                this.leftover += p
            }
        };

        function I(u, m, p, l, y, C) {
            var A = new X(C);
            return A.update(p, l, y), A.finish(u, m), 0
        }

        function v(u, m, p, l, y, C) {
            var A = new Uint8Array(16);
            return I(A, 0, p, l, y, C), k(u, m, A, 0)
        }

        function ne(u, m, p, l, y) {
            var C;
            if (p < 32) return -1;
            for (R(u, 0, m, 0, p, l, y), I(u, 16, u, 32, p - 32, u), C = 0; C < 16; C++) u[C] = 0;
            return 0
        }

        function J(u, m, p, l, y) {
            var C, A = new Uint8Array(32);
            if (p < 32 || (T(A, 0, 32, l, y), v(m, 16, m, 32, p - 32, A) !== 0)) return -1;
            for (R(u, 0, m, 0, p, l, y), C = 0; C < 32; C++) u[C] = 0;
            return 0
        }

        function Q(u, m) {
            var p;
            for (p = 0; p < 16; p++) u[p] = m[p] | 0
        }

        function Pe(u) {
            var m, p, l = 1;
            for (m = 0; m < 16; m++) p = u[m] + l + 65535, l = Math.floor(p / 65536), u[m] = p - l * 65536;
            u[0] += l - 1 + 37 * (l - 1)
        }

        function Ue(u, m, p) {
            for (var l, y = ~(p - 1), C = 0; C < 16; C++) l = y & (u[C] ^ m[C]), u[C] ^= l, m[C] ^= l
        }

        function ze(u, m) {
            var p, l, y, C = e(),
                A = e();
            for (p = 0; p < 16; p++) A[p] = m[p];
            for (Pe(A), Pe(A), Pe(A), l = 0; l < 2; l++) {
                for (C[0] = A[0] - 65517, p = 1; p < 15; p++) C[p] = A[p] - 65535 - (C[p - 1] >> 16 & 1), C[p - 1] &= 65535;
                C[15] = A[15] - 32767 - (C[14] >> 16 & 1), y = C[15] >> 16 & 1, C[14] &= 65535, Ue(A, C, 1 - y)
            }
            for (p = 0; p < 16; p++) u[2 * p] = A[p] & 255, u[2 * p + 1] = A[p] >> 8
        }

        function ut(u, m) {
            var p = new Uint8Array(32),
                l = new Uint8Array(32);
            return ze(p, u), ze(l, m), $(p, 0, l, 0)
        }

        function kt(u) {
            var m = new Uint8Array(32);
            return ze(m, u), m[0] & 1
        }

        function qt(u, m) {
            var p;
            for (p = 0; p < 16; p++) u[p] = m[2 * p] + (m[2 * p + 1] << 8);
            u[15] &= 32767
        }

        function bt(u, m, p) {
            for (var l = 0; l < 16; l++) u[l] = m[l] + p[l]
        }

        function wt(u, m, p) {
            for (var l = 0; l < 16; l++) u[l] = m[l] - p[l]
        }

        function _e(u, m, p) {
            var l, y, C = 0,
                A = 0,
                j = 0,
                te = 0,
                pe = 0,
                se = 0,
                Ge = 0,
                ue = 0,
                ke = 0,
                Be = 0,
                Le = 0,
                Me = 0,
                Ie = 0,
                Re = 0,
                Ee = 0,
                de = 0,
                me = 0,
                ce = 0,
                he = 0,
                ge = 0,
                ae = 0,
                U = 0,
                M = 0,
                Y = 0,
                K = 0,
                z = 0,
                ee = 0,
                ve = 0,
                We = 0,
                Ne = 0,
                De = 0,
                x = p[0],
                Ke = p[1],
                Ye = p[2],
                Ze = p[3],
                He = p[4],
                Oe = p[5],
                Fe = p[6],
                xt = p[7],
                tt = p[8],
                gt = p[9],
                pt = p[10],
                mt = p[11],
                At = p[12],
                _t = p[13],
                Lt = p[14],
                Wt = p[15];
            l = m[0], C += l * x, A += l * Ke, j += l * Ye, te += l * Ze, pe += l * He, se += l * Oe, Ge += l * Fe, ue += l * xt, ke += l * tt, Be += l * gt, Le += l * pt, Me += l * mt, Ie += l * At, Re += l * _t, Ee += l * Lt, de += l * Wt, l = m[1], A += l * x, j += l * Ke, te += l * Ye, pe += l * Ze, se += l * He, Ge += l * Oe, ue += l * Fe, ke += l * xt, Be += l * tt, Le += l * gt, Me += l * pt, Ie += l * mt, Re += l * At, Ee += l * _t, de += l * Lt, me += l * Wt, l = m[2], j += l * x, te += l * Ke, pe += l * Ye, se += l * Ze, Ge += l * He, ue += l * Oe, ke += l * Fe, Be += l * xt, Le += l * tt, Me += l * gt, Ie += l * pt, Re += l * mt, Ee += l * At, de += l * _t, me += l * Lt, ce += l * Wt, l = m[3], te += l * x, pe += l * Ke, se += l * Ye, Ge += l * Ze, ue += l * He, ke += l * Oe, Be += l * Fe, Le += l * xt, Me += l * tt, Ie += l * gt, Re += l * pt, Ee += l * mt, de += l * At, me += l * _t, ce += l * Lt, he += l * Wt, l = m[4], pe += l * x, se += l * Ke, Ge += l * Ye, ue += l * Ze, ke += l * He, Be += l * Oe, Le += l * Fe, Me += l * xt, Ie += l * tt, Re += l * gt, Ee += l * pt, de += l * mt, me += l * At, ce += l * _t, he += l * Lt, ge += l * Wt, l = m[5], se += l * x, Ge += l * Ke, ue += l * Ye, ke += l * Ze, Be += l * He, Le += l * Oe, Me += l * Fe, Ie += l * xt, Re += l * tt, Ee += l * gt, de += l * pt, me += l * mt, ce += l * At, he += l * _t, ge += l * Lt, ae += l * Wt, l = m[6], Ge += l * x, ue += l * Ke, ke += l * Ye, Be += l * Ze, Le += l * He, Me += l * Oe, Ie += l * Fe, Re += l * xt, Ee += l * tt, de += l * gt, me += l * pt, ce += l * mt, he += l * At, ge += l * _t, ae += l * Lt, U += l * Wt, l = m[7], ue += l * x, ke += l * Ke, Be += l * Ye, Le += l * Ze, Me += l * He, Ie += l * Oe, Re += l * Fe, Ee += l * xt, de += l * tt, me += l * gt, ce += l * pt, he += l * mt, ge += l * At, ae += l * _t, U += l * Lt, M += l * Wt, l = m[8], ke += l * x, Be += l * Ke, Le += l * Ye, Me += l * Ze, Ie += l * He, Re += l * Oe, Ee += l * Fe, de += l * xt, me += l * tt, ce += l * gt, he += l * pt, ge += l * mt, ae += l * At, U += l * _t, M += l * Lt, Y += l * Wt, l = m[9], Be += l * x, Le += l * Ke, Me += l * Ye, Ie += l * Ze, Re += l * He, Ee += l * Oe, de += l * Fe, me += l * xt, ce += l * tt, he += l * gt, ge += l * pt, ae += l * mt, U += l * At, M += l * _t, Y += l * Lt, K += l * Wt, l = m[10], Le += l * x, Me += l * Ke, Ie += l * Ye, Re += l * Ze, Ee += l * He, de += l * Oe, me += l * Fe, ce += l * xt, he += l * tt, ge += l * gt, ae += l * pt, U += l * mt, M += l * At, Y += l * _t, K += l * Lt, z += l * Wt, l = m[11], Me += l * x, Ie += l * Ke, Re += l * Ye, Ee += l * Ze, de += l * He, me += l * Oe, ce += l * Fe, he += l * xt, ge += l * tt, ae += l * gt, U += l * pt, M += l * mt, Y += l * At, K += l * _t, z += l * Lt, ee += l * Wt, l = m[12], Ie += l * x, Re += l * Ke, Ee += l * Ye, de += l * Ze, me += l * He, ce += l * Oe, he += l * Fe, ge += l * xt, ae += l * tt, U += l * gt, M += l * pt, Y += l * mt, K += l * At, z += l * _t, ee += l * Lt, ve += l * Wt, l = m[13], Re += l * x, Ee += l * Ke, de += l * Ye, me += l * Ze, ce += l * He, he += l * Oe, ge += l * Fe, ae += l * xt, U += l * tt, M += l * gt, Y += l * pt, K += l * mt, z += l * At, ee += l * _t, ve += l * Lt, We += l * Wt, l = m[14], Ee += l * x, de += l * Ke, me += l * Ye, ce += l * Ze, he += l * He, ge += l * Oe, ae += l * Fe, U += l * xt, M += l * tt, Y += l * gt, K += l * pt, z += l * mt, ee += l * At, ve += l * _t, We += l * Lt, Ne += l * Wt, l = m[15], de += l * x, me += l * Ke, ce += l * Ye, he += l * Ze, ge += l * He, ae += l * Oe, U += l * Fe, M += l * xt, Y += l * tt, K += l * gt, z += l * pt, ee += l * mt, ve += l * At, We += l * _t, Ne += l * Lt, De += l * Wt, C += 38 * me, A += 38 * ce, j += 38 * he, te += 38 * ge, pe += 38 * ae, se += 38 * U, Ge += 38 * M, ue += 38 * Y, ke += 38 * K, Be += 38 * z, Le += 38 * ee, Me += 38 * ve, Ie += 38 * We, Re += 38 * Ne, Ee += 38 * De, y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = A + y + 65535, y = Math.floor(l / 65536), A = l - y * 65536, l = j + y + 65535, y = Math.floor(l / 65536), j = l - y * 65536, l = te + y + 65535, y = Math.floor(l / 65536), te = l - y * 65536, l = pe + y + 65535, y = Math.floor(l / 65536), pe = l - y * 65536, l = se + y + 65535, y = Math.floor(l / 65536), se = l - y * 65536, l = Ge + y + 65535, y = Math.floor(l / 65536), Ge = l - y * 65536, l = ue + y + 65535, y = Math.floor(l / 65536), ue = l - y * 65536, l = ke + y + 65535, y = Math.floor(l / 65536), ke = l - y * 65536, l = Be + y + 65535, y = Math.floor(l / 65536), Be = l - y * 65536, l = Le + y + 65535, y = Math.floor(l / 65536), Le = l - y * 65536, l = Me + y + 65535, y = Math.floor(l / 65536), Me = l - y * 65536, l = Ie + y + 65535, y = Math.floor(l / 65536), Ie = l - y * 65536, l = Re + y + 65535, y = Math.floor(l / 65536), Re = l - y * 65536, l = Ee + y + 65535, y = Math.floor(l / 65536), Ee = l - y * 65536, l = de + y + 65535, y = Math.floor(l / 65536), de = l - y * 65536, C += y - 1 + 37 * (y - 1), y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = A + y + 65535, y = Math.floor(l / 65536), A = l - y * 65536, l = j + y + 65535, y = Math.floor(l / 65536), j = l - y * 65536, l = te + y + 65535, y = Math.floor(l / 65536), te = l - y * 65536, l = pe + y + 65535, y = Math.floor(l / 65536), pe = l - y * 65536, l = se + y + 65535, y = Math.floor(l / 65536), se = l - y * 65536, l = Ge + y + 65535, y = Math.floor(l / 65536), Ge = l - y * 65536, l = ue + y + 65535, y = Math.floor(l / 65536), ue = l - y * 65536, l = ke + y + 65535, y = Math.floor(l / 65536), ke = l - y * 65536, l = Be + y + 65535, y = Math.floor(l / 65536), Be = l - y * 65536, l = Le + y + 65535, y = Math.floor(l / 65536), Le = l - y * 65536, l = Me + y + 65535, y = Math.floor(l / 65536), Me = l - y * 65536, l = Ie + y + 65535, y = Math.floor(l / 65536), Ie = l - y * 65536, l = Re + y + 65535, y = Math.floor(l / 65536), Re = l - y * 65536, l = Ee + y + 65535, y = Math.floor(l / 65536), Ee = l - y * 65536, l = de + y + 65535, y = Math.floor(l / 65536), de = l - y * 65536, C += y - 1 + 37 * (y - 1), u[0] = C, u[1] = A, u[2] = j, u[3] = te, u[4] = pe, u[5] = se, u[6] = Ge, u[7] = ue, u[8] = ke, u[9] = Be, u[10] = Le, u[11] = Me, u[12] = Ie, u[13] = Re, u[14] = Ee, u[15] = de
        }

        function Gt(u, m) {
            _e(u, m, m)
        }

        function Pn(u, m) {
            var p = e(),
                l;
            for (l = 0; l < 16; l++) p[l] = m[l];
            for (l = 253; l >= 0; l--) Gt(p, p), l !== 2 && l !== 4 && _e(p, p, m);
            for (l = 0; l < 16; l++) u[l] = p[l]
        }

        function Mi(u, m) {
            var p = e(),
                l;
            for (l = 0; l < 16; l++) p[l] = m[l];
            for (l = 250; l >= 0; l--) Gt(p, p), l !== 1 && _e(p, p, m);
            for (l = 0; l < 16; l++) u[l] = p[l]
        }

        function H(u, m, p) {
            var l = new Uint8Array(32),
                y = new Float64Array(80),
                C, A, j = e(),
                te = e(),
                pe = e(),
                se = e(),
                Ge = e(),
                ue = e();
            for (A = 0; A < 31; A++) l[A] = m[A];
            for (l[31] = m[31] & 127 | 64, l[0] &= 248, qt(y, p), A = 0; A < 16; A++) te[A] = y[A], se[A] = j[A] = pe[A] = 0;
            for (j[0] = se[0] = 1, A = 254; A >= 0; --A) C = l[A >>> 3] >>> (A & 7) & 1, Ue(j, te, C), Ue(pe, se, C), bt(Ge, j, pe), wt(j, j, pe), bt(pe, te, se), wt(te, te, se), Gt(se, Ge), Gt(ue, j), _e(j, pe, j), _e(pe, te, Ge), bt(Ge, j, pe), wt(j, j, pe), Gt(te, j), wt(pe, se, ue), _e(j, pe, s), bt(j, j, se), _e(pe, pe, j), _e(j, se, ue), _e(se, te, y), Gt(te, Ge), Ue(j, te, C), Ue(pe, se, C);
            for (A = 0; A < 16; A++) y[A + 16] = j[A], y[A + 32] = pe[A], y[A + 48] = te[A], y[A + 64] = se[A];
            var ke = y.subarray(32),
                Be = y.subarray(16);
            return Pn(ke, ke), _e(Be, Be, ke), ze(u, Be), 0
        }

        function V(u, m) {
            return H(u, m, o)
        }

        function D(u, m) {
            return n(m, 32), V(u, m)
        }

        function O(u, m, p) {
            var l = new Uint8Array(32);
            return H(l, p, m), re(u, r, l, L)
        }
        var G = ne,
            le = J;

        function Ce(u, m, p, l, y, C) {
            var A = new Uint8Array(32);
            return O(A, y, C), G(u, m, p, l, A)
        }

        function be(u, m, p, l, y, C) {
            var A = new Uint8Array(32);
            return O(A, y, C), le(u, m, p, l, A)
        }
        var nt = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function ht(u, m, p, l) {
            for (var y = new Int32Array(16), C = new Int32Array(16), A, j, te, pe, se, Ge, ue, ke, Be, Le, Me, Ie, Re, Ee, de, me, ce, he, ge, ae, U, M, Y, K, z, ee, ve = u[0], We = u[1], Ne = u[2], De = u[3], x = u[4], Ke = u[5], Ye = u[6], Ze = u[7], He = m[0], Oe = m[1], Fe = m[2], xt = m[3], tt = m[4], gt = m[5], pt = m[6], mt = m[7], At = 0; l >= 128;) {
                for (ge = 0; ge < 16; ge++) ae = 8 * ge + At, y[ge] = p[ae + 0] << 24 | p[ae + 1] << 16 | p[ae + 2] << 8 | p[ae + 3], C[ge] = p[ae + 4] << 24 | p[ae + 5] << 16 | p[ae + 6] << 8 | p[ae + 7];
                for (ge = 0; ge < 80; ge++)
                    if (A = ve, j = We, te = Ne, pe = De, se = x, Ge = Ke, ue = Ye, ke = Ze, Be = He, Le = Oe, Me = Fe, Ie = xt, Re = tt, Ee = gt, de = pt, me = mt, U = Ze, M = mt, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = (x >>> 14 | tt << 18) ^ (x >>> 18 | tt << 14) ^ (tt >>> 9 | x << 23), M = (tt >>> 14 | x << 18) ^ (tt >>> 18 | x << 14) ^ (x >>> 9 | tt << 23), Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, U = x & Ke ^ ~x & Ye, M = tt & gt ^ ~tt & pt, Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, U = nt[ge * 2], M = nt[ge * 2 + 1], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, U = y[ge % 16], M = C[ge % 16], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, ce = z & 65535 | ee << 16, he = Y & 65535 | K << 16, U = ce, M = he, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = (ve >>> 28 | He << 4) ^ (He >>> 2 | ve << 30) ^ (He >>> 7 | ve << 25), M = (He >>> 28 | ve << 4) ^ (ve >>> 2 | He << 30) ^ (ve >>> 7 | He << 25), Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, U = ve & We ^ ve & Ne ^ We & Ne, M = He & Oe ^ He & Fe ^ Oe & Fe, Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, ke = z & 65535 | ee << 16, me = Y & 65535 | K << 16, U = pe, M = Ie, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = ce, M = he, Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, pe = z & 65535 | ee << 16, Ie = Y & 65535 | K << 16, We = A, Ne = j, De = te, x = pe, Ke = se, Ye = Ge, Ze = ue, ve = ke, Oe = Be, Fe = Le, xt = Me, tt = Ie, gt = Re, pt = Ee, mt = de, He = me, ge % 16 === 15)
                        for (ae = 0; ae < 16; ae++) U = y[ae], M = C[ae], Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = y[(ae + 9) % 16], M = C[(ae + 9) % 16], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, ce = y[(ae + 1) % 16], he = C[(ae + 1) % 16], U = (ce >>> 1 | he << 31) ^ (ce >>> 8 | he << 24) ^ ce >>> 7, M = (he >>> 1 | ce << 31) ^ (he >>> 8 | ce << 24) ^ (he >>> 7 | ce << 25), Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, ce = y[(ae + 14) % 16], he = C[(ae + 14) % 16], U = (ce >>> 19 | he << 13) ^ (he >>> 29 | ce << 3) ^ ce >>> 6, M = (he >>> 19 | ce << 13) ^ (ce >>> 29 | he << 3) ^ (he >>> 6 | ce << 26), Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, y[ae] = z & 65535 | ee << 16, C[ae] = Y & 65535 | K << 16;
                U = ve, M = He, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = u[0], M = m[0], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, u[0] = ve = z & 65535 | ee << 16, m[0] = He = Y & 65535 | K << 16, U = We, M = Oe, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = u[1], M = m[1], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, u[1] = We = z & 65535 | ee << 16, m[1] = Oe = Y & 65535 | K << 16, U = Ne, M = Fe, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = u[2], M = m[2], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, u[2] = Ne = z & 65535 | ee << 16, m[2] = Fe = Y & 65535 | K << 16, U = De, M = xt, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = u[3], M = m[3], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, u[3] = De = z & 65535 | ee << 16, m[3] = xt = Y & 65535 | K << 16, U = x, M = tt, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = u[4], M = m[4], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, u[4] = x = z & 65535 | ee << 16, m[4] = tt = Y & 65535 | K << 16, U = Ke, M = gt, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = u[5], M = m[5], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, u[5] = Ke = z & 65535 | ee << 16, m[5] = gt = Y & 65535 | K << 16, U = Ye, M = pt, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = u[6], M = m[6], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, u[6] = Ye = z & 65535 | ee << 16, m[6] = pt = Y & 65535 | K << 16, U = Ze, M = mt, Y = M & 65535, K = M >>> 16, z = U & 65535, ee = U >>> 16, U = u[7], M = m[7], Y += M & 65535, K += M >>> 16, z += U & 65535, ee += U >>> 16, K += Y >>> 16, z += K >>> 16, ee += z >>> 16, u[7] = Ze = z & 65535 | ee << 16, m[7] = mt = Y & 65535 | K << 16, At += 128, l -= 128
            }
            return l
        }

        function xe(u, m, p) {
            var l = new Int32Array(8),
                y = new Int32Array(8),
                C = new Uint8Array(256),
                A, j = p;
            for (l[0] = 1779033703, l[1] = 3144134277, l[2] = 1013904242, l[3] = 2773480762, l[4] = 1359893119, l[5] = 2600822924, l[6] = 528734635, l[7] = 1541459225, y[0] = 4089235720, y[1] = 2227873595, y[2] = 4271175723, y[3] = 1595750129, y[4] = 2917565137, y[5] = 725511199, y[6] = 4215389547, y[7] = 327033209, ht(l, y, m, p), p %= 128, A = 0; A < p; A++) C[A] = m[j - p + A];
            for (C[p] = 128, p = 256 - 128 * (p < 112 ? 1 : 0), C[p - 9] = 0, w(C, p - 8, j / 536870912 | 0, j << 3), ht(l, y, C, p), A = 0; A < 8; A++) w(u, 8 * A, l[A], y[A]);
            return 0
        }

        function Rt(u, m) {
            var p = e(),
                l = e(),
                y = e(),
                C = e(),
                A = e(),
                j = e(),
                te = e(),
                pe = e(),
                se = e();
            wt(p, u[1], u[0]), wt(se, m[1], m[0]), _e(p, p, se), bt(l, u[0], u[1]), bt(se, m[0], m[1]), _e(l, l, se), _e(y, u[3], m[3]), _e(y, y, d), _e(C, u[2], m[2]), bt(C, C, C), wt(A, l, p), wt(j, C, y), bt(te, C, y), bt(pe, l, p), _e(u[0], A, j), _e(u[1], pe, te), _e(u[2], te, j), _e(u[3], A, pe)
        }

        function Kt(u, m, p) {
            var l;
            for (l = 0; l < 4; l++) Ue(u[l], m[l], p)
        }

        function $r(u, m) {
            var p = e(),
                l = e(),
                y = e();
            Pn(y, m[2]), _e(p, m[0], y), _e(l, m[1], y), ze(u, l), u[31] ^= kt(p) << 7
        }

        function Hr(u, m, p) {
            var l, y;
            for (Q(u[0], i), Q(u[1], a), Q(u[2], a), Q(u[3], i), y = 255; y >= 0; --y) l = p[y / 8 | 0] >> (y & 7) & 1, Kt(u, m, l), Rt(m, u), Rt(u, u), Kt(u, m, l)
        }

        function fr(u, m) {
            var p = [e(), e(), e(), e()];
            Q(p[0], h), Q(p[1], f), Q(p[2], a), _e(p[3], h, f), Hr(u, p, m)
        }

        function hr(u, m, p) {
            var l = new Uint8Array(64),
                y = [e(), e(), e(), e()],
                C;
            for (p || n(m, 32), xe(l, m, 32), l[0] &= 248, l[31] &= 127, l[31] |= 64, fr(y, l), $r(u, y), C = 0; C < 32; C++) m[C + 32] = u[C];
            return 0
        }
        var _n = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

        function ja(u, m) {
            var p, l, y, C;
            for (l = 63; l >= 32; --l) {
                for (p = 0, y = l - 32, C = l - 12; y < C; ++y) m[y] += p - 16 * m[l] * _n[y - (l - 32)], p = Math.floor((m[y] + 128) / 256), m[y] -= p * 256;
                m[y] += p, m[l] = 0
            }
            for (p = 0, y = 0; y < 32; y++) m[y] += p - (m[31] >> 4) * _n[y], p = m[y] >> 8, m[y] &= 255;
            for (y = 0; y < 32; y++) m[y] -= p * _n[y];
            for (l = 0; l < 32; l++) m[l + 1] += m[l] >> 8, u[l] = m[l] & 255
        }

        function za(u) {
            var m = new Float64Array(64),
                p;
            for (p = 0; p < 64; p++) m[p] = u[p];
            for (p = 0; p < 64; p++) u[p] = 0;
            ja(u, m)
        }

        function Ul(u, m, p, l) {
            var y = new Uint8Array(64),
                C = new Uint8Array(64),
                A = new Uint8Array(64),
                j, te, pe = new Float64Array(64),
                se = [e(), e(), e(), e()];
            xe(y, l, 32), y[0] &= 248, y[31] &= 127, y[31] |= 64;
            var Ge = p + 64;
            for (j = 0; j < p; j++) u[64 + j] = m[j];
            for (j = 0; j < 32; j++) u[32 + j] = y[32 + j];
            for (xe(A, u.subarray(32), p + 32), za(A), fr(se, A), $r(u, se), j = 32; j < 64; j++) u[j] = l[j];
            for (xe(C, u, p + 64), za(C), j = 0; j < 64; j++) pe[j] = 0;
            for (j = 0; j < 32; j++) pe[j] = A[j];
            for (j = 0; j < 32; j++)
                for (te = 0; te < 32; te++) pe[j + te] += C[j] * y[te];
            return ja(u.subarray(32), pe), Ge
        }

        function zh(u, m) {
            var p = e(),
                l = e(),
                y = e(),
                C = e(),
                A = e(),
                j = e(),
                te = e();
            return Q(u[2], a), qt(u[1], m), Gt(y, u[1]), _e(C, y, c), wt(y, y, u[2]), bt(C, u[2], C), Gt(A, C), Gt(j, A), _e(te, j, A), _e(p, te, y), _e(p, p, C), Mi(p, p), _e(p, p, y), _e(p, p, C), _e(p, p, C), _e(u[0], p, C), Gt(l, u[0]), _e(l, l, C), ut(l, y) && _e(u[0], u[0], b), Gt(l, u[0]), _e(l, l, C), ut(l, y) ? -1 : (kt(u[0]) === m[31] >> 7 && wt(u[0], i, u[0]), _e(u[3], u[0], u[1]), 0)
        }

        function Oa(u, m, p, l) {
            var y, C = new Uint8Array(32),
                A = new Uint8Array(64),
                j = [e(), e(), e(), e()],
                te = [e(), e(), e(), e()];
            if (p < 64 || zh(te, l)) return -1;
            for (y = 0; y < p; y++) u[y] = m[y];
            for (y = 0; y < 32; y++) u[y + 32] = l[y];
            if (xe(A, u, p), za(A), Hr(j, te, A), fr(te, m.subarray(32)), Rt(j, te), $r(C, j), p -= 64, $(m, 0, C, 0)) {
                for (y = 0; y < p; y++) u[y] = 0;
                return -1
            }
            for (y = 0; y < p; y++) u[y] = m[y + 64];
            return p
        }
        var Fa = 32,
            Pi = 24,
            Bo = 32,
            Kr = 16,
            Io = 32,
            _i = 32,
            Eo = 32,
            Ro = 32,
            qa = 32,
            Ml = Pi,
            Oh = Bo,
            Fh = Kr,
            Ln = 64,
            gr = 32,
            Vr = 64,
            Ga = 32,
            Ya = 64;
        t.lowlevel = {
            crypto_core_hsalsa20: re,
            crypto_stream_xor: R,
            crypto_stream: T,
            crypto_stream_salsa20_xor: Z,
            crypto_stream_salsa20: N,
            crypto_onetimeauth: I,
            crypto_onetimeauth_verify: v,
            crypto_verify_16: k,
            crypto_verify_32: $,
            crypto_secretbox: ne,
            crypto_secretbox_open: J,
            crypto_scalarmult: H,
            crypto_scalarmult_base: V,
            crypto_box_beforenm: O,
            crypto_box_afternm: G,
            crypto_box: Ce,
            crypto_box_open: be,
            crypto_box_keypair: D,
            crypto_hash: xe,
            crypto_sign: Ul,
            crypto_sign_keypair: hr,
            crypto_sign_open: Oa,
            crypto_secretbox_KEYBYTES: Fa,
            crypto_secretbox_NONCEBYTES: Pi,
            crypto_secretbox_ZEROBYTES: Bo,
            crypto_secretbox_BOXZEROBYTES: Kr,
            crypto_scalarmult_BYTES: Io,
            crypto_scalarmult_SCALARBYTES: _i,
            crypto_box_PUBLICKEYBYTES: Eo,
            crypto_box_SECRETKEYBYTES: Ro,
            crypto_box_BEFORENMBYTES: qa,
            crypto_box_NONCEBYTES: Ml,
            crypto_box_ZEROBYTES: Oh,
            crypto_box_BOXZEROBYTES: Fh,
            crypto_sign_BYTES: Ln,
            crypto_sign_PUBLICKEYBYTES: gr,
            crypto_sign_SECRETKEYBYTES: Vr,
            crypto_sign_SEEDBYTES: Ga,
            crypto_hash_BYTES: Ya,
            gf: e,
            D: c,
            L: _n,
            pack25519: ze,
            unpack25519: qt,
            M: _e,
            A: bt,
            S: Gt,
            Z: wt,
            pow2523: Mi,
            add: Rt,
            set25519: Q,
            modL: ja,
            scalarmult: Hr,
            scalarbase: fr
        };

        function Pl(u, m) {
            if (u.length !== Fa) throw new Error("bad key size");
            if (m.length !== Pi) throw new Error("bad nonce size")
        }

        function qh(u, m) {
            if (u.length !== Eo) throw new Error("bad public key size");
            if (m.length !== Ro) throw new Error("bad secret key size")
        }

        function Jt() {
            for (var u = 0; u < arguments.length; u++)
                if (!(arguments[u] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
        }

        function Gh(u) {
            for (var m = 0; m < u.length; m++) u[m] = 0
        }
        t.randomBytes = function(u) {
                var m = new Uint8Array(u);
                return n(m, u), m
            }, t.secretbox = function(u, m, p) {
                Jt(u, m, p), Pl(p, m);
                for (var l = new Uint8Array(Bo + u.length), y = new Uint8Array(l.length), C = 0; C < u.length; C++) l[C + Bo] = u[C];
                return ne(y, l, l.length, m, p), y.subarray(Kr)
            }, t.secretbox.open = function(u, m, p) {
                Jt(u, m, p), Pl(p, m);
                for (var l = new Uint8Array(Kr + u.length), y = new Uint8Array(l.length), C = 0; C < u.length; C++) l[C + Kr] = u[C];
                return l.length < 32 || J(y, l, l.length, m, p) !== 0 ? null : y.subarray(Bo)
            }, t.secretbox.keyLength = Fa, t.secretbox.nonceLength = Pi, t.secretbox.overheadLength = Kr, t.scalarMult = function(u, m) {
                if (Jt(u, m), u.length !== _i) throw new Error("bad n size");
                if (m.length !== Io) throw new Error("bad p size");
                var p = new Uint8Array(Io);
                return H(p, u, m), p
            }, t.scalarMult.base = function(u) {
                if (Jt(u), u.length !== _i) throw new Error("bad n size");
                var m = new Uint8Array(Io);
                return V(m, u), m
            }, t.scalarMult.scalarLength = _i, t.scalarMult.groupElementLength = Io, t.box = function(u, m, p, l) {
                var y = t.box.before(p, l);
                return t.secretbox(u, m, y)
            }, t.box.before = function(u, m) {
                Jt(u, m), qh(u, m);
                var p = new Uint8Array(qa);
                return O(p, u, m), p
            }, t.box.after = t.secretbox, t.box.open = function(u, m, p, l) {
                var y = t.box.before(p, l);
                return t.secretbox.open(u, m, y)
            }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
                var u = new Uint8Array(Eo),
                    m = new Uint8Array(Ro);
                return D(u, m), {
                    publicKey: u,
                    secretKey: m
                }
            }, t.box.keyPair.fromSecretKey = function(u) {
                if (Jt(u), u.length !== Ro) throw new Error("bad secret key size");
                var m = new Uint8Array(Eo);
                return V(m, u), {
                    publicKey: m,
                    secretKey: new Uint8Array(u)
                }
            }, t.box.publicKeyLength = Eo, t.box.secretKeyLength = Ro, t.box.sharedKeyLength = qa, t.box.nonceLength = Ml, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(u, m) {
                if (Jt(u, m), m.length !== Vr) throw new Error("bad secret key size");
                var p = new Uint8Array(Ln + u.length);
                return Ul(p, u, u.length, m), p
            }, t.sign.open = function(u, m) {
                if (Jt(u, m), m.length !== gr) throw new Error("bad public key size");
                var p = new Uint8Array(u.length),
                    l = Oa(p, u, u.length, m);
                if (l < 0) return null;
                for (var y = new Uint8Array(l), C = 0; C < y.length; C++) y[C] = p[C];
                return y
            }, t.sign.detached = function(u, m) {
                for (var p = t.sign(u, m), l = new Uint8Array(Ln), y = 0; y < l.length; y++) l[y] = p[y];
                return l
            }, t.sign.detached.verify = function(u, m, p) {
                if (Jt(u, m, p), m.length !== Ln) throw new Error("bad signature size");
                if (p.length !== gr) throw new Error("bad public key size");
                var l = new Uint8Array(Ln + u.length),
                    y = new Uint8Array(Ln + u.length),
                    C;
                for (C = 0; C < Ln; C++) l[C] = m[C];
                for (C = 0; C < u.length; C++) l[C + Ln] = u[C];
                return Oa(y, l, l.length, p) >= 0
            }, t.sign.keyPair = function() {
                var u = new Uint8Array(gr),
                    m = new Uint8Array(Vr);
                return hr(u, m), {
                    publicKey: u,
                    secretKey: m
                }
            }, t.sign.keyPair.fromSecretKey = function(u) {
                if (Jt(u), u.length !== Vr) throw new Error("bad secret key size");
                for (var m = new Uint8Array(gr), p = 0; p < m.length; p++) m[p] = u[32 + p];
                return {
                    publicKey: m,
                    secretKey: new Uint8Array(u)
                }
            }, t.sign.keyPair.fromSeed = function(u) {
                if (Jt(u), u.length !== Ga) throw new Error("bad seed size");
                for (var m = new Uint8Array(gr), p = new Uint8Array(Vr), l = 0; l < 32; l++) p[l] = u[l];
                return hr(m, p, !0), {
                    publicKey: m,
                    secretKey: p
                }
            }, t.sign.publicKeyLength = gr, t.sign.secretKeyLength = Vr, t.sign.seedLength = Ga, t.sign.signatureLength = Ln, t.hash = function(u) {
                Jt(u);
                var m = new Uint8Array(Ya);
                return xe(m, u, u.length), m
            }, t.hash.hashLength = Ya, t.verify = function(u, m) {
                return Jt(u, m), u.length === 0 || m.length === 0 || u.length !== m.length ? !1 : S(u, 0, m, 0, u.length) === 0
            }, t.setPRNG = function(u) {
                n = u
            },
            function() {
                var u = typeof self < "u" ? self.crypto || self.msCrypto : null;
                if (u && u.getRandomValues) {
                    var m = 65536;
                    t.setPRNG(function(p, l) {
                        var y, C = new Uint8Array(l);
                        for (y = 0; y < l; y += m) u.getRandomValues(C.subarray(y, y + Math.min(l - y, m)));
                        for (y = 0; y < l; y++) p[y] = C[y];
                        Gh(C)
                    })
                }
            }()
    })(typeof Ni < "u" && Ni.exports ? Ni.exports : self.nacl = self.nacl || {})
});
var Fc = Ll((eM, oa) => {
    (function() {
        "use strict";
        var t = {}.hasOwnProperty;

        function e() {
            for (var o = "", i = 0; i < arguments.length; i++) {
                var a = arguments[i];
                a && (o = r(o, n(a)))
            }
            return o
        }

        function n(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return e.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var i = "";
            for (var a in o) t.call(o, a) && o[a] && (i = r(i, a));
            return i
        }

        function r(o, i) {
            return i ? o ? o + " " + i : o + i : o
        }
        typeof oa < "u" && oa.exports ? (e.default = e, oa.exports = e) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
            return e
        }) : window.classNames = e
    })()
});
var Wl = "3.0.5";
var Dl = Wl;
var Uo = class Uo extends Error {
    get info() {
        return ""
    }
    constructor(e, n) {
        super(e, n), this.message = "".concat(Uo.prefix, " ").concat(this.constructor.name).concat(this.info ? ": " + this.info : "").concat(e ? "\n" + e : ""), Object.setPrototypeOf(this, Uo.prototype)
    }
};
W(Uo, "prefix", "[TON_CONNECT_SDK_ERROR]");
var oe = Uo;
var Di = class t extends oe {
    get info() {
        return "Passed DappMetadata is in incorrect format."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var jr = class t extends oe {
    get info() {
        return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var zr = class t extends oe {
    get info() {
        return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var Mo = class t extends oe {
    get info() {
        return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var Or = class t extends oe {
    get info() {
        return "Send transaction or other protocol methods called while wallet is not connected."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};

function Nl(t) {
    return "jsBridgeKey" in t
}
var zo = Wi($i());
var og = Symbol.for("nodejs.util.inspect.custom"),
    rn = og;

function Vt(t) {
    return new TextEncoder().encode(t)
}

function Zn(t) {
    let e = atob(t),
        n = e.length,
        r = new Uint8Array(n);
    for (let o = 0; o < n; o++) r[o] = e.charCodeAt(o);
    return r
}

function vt(t) {
    let e = new Uint8Array(t.length / 2);
    for (let n = 0; n < t.length; n += 2) e[n / 2] = parseInt(t.slice(n, n + 2), 16);
    return e
}

function Xe(t) {
    return Array.from(t).map(e => e.toString(16).padStart(2, "0")).join("")
}

function pr(t) {
    let e = "";
    for (let n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
    return btoa(e)
}

function Po(t) {
    return new TextDecoder("utf-8").decode(t)
}

function Vl(t) {
    let e = new ArrayBuffer(4);
    return new DataView(e).setInt32(0, t, !0), new Uint8Array(e)
}

function jt(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e[n]) return !1;
    return !0
}

function Fr(t) {
    let e = t.reduce((o, i) => o + i.length, 0),
        n = new Uint8Array(e),
        r = 0;
    for (let o of t) n.set(o, r), r += o.length;
    return n
}

function mr(t) {
    let n = 0,
        r = new Uint8Array(t.length + 2);
    r.set(t);
    for (let o of r) {
        let i = 128;
        for (; i > 0;) n <<= 1, o & i && (n += 1), i >>= 1, n > 65535 && (n &= 65535, n ^= 4129)
    }
    return new Uint8Array([Math.floor(n / 256), n % 256])
}
var Za = 17,
    Ol = 81,
    Qa = 128;

function jl(t) {
    if (typeof t == "string" && !Dt.isFriendly(t)) throw new Error("Unknown address type");
    let e = t instanceof Uint8Array ? t : Zn(t);
    if (e.length !== 36) throw new Error("Unknown address type: byte length is not equal to 36");
    let n = e.subarray(0, 34),
        r = e.subarray(34, 36),
        o = mr(n);
    if (!(o[0] === r[0] && o[1] === r[1])) throw new Error("Invalid checksum: " + t);
    let i = n[0],
        a = !1,
        s = !1;
    if (i & Qa && (a = !0, i = i ^ Qa), i !== Za && i !== Ol) throw "Unknown address tag";
    s = i === Za;
    let c = null;
    n[1] === 255 ? c = -1 : c = n[1];
    let d = n.subarray(2, 34);
    return {
        isTestOnly: a,
        isBounceable: s,
        workchain: c,
        hashPart: d
    }
}
var zl;
zl = rn;
var Wn = class Wn {
        constructor(e, n) {
            W(this, "workChain");
            W(this, "hash");
            W(this, "toRawString", () => this.workChain + ":" + Xe(this.hash));
            W(this, "toRaw", () => {
                let e = new Uint8Array(36);
                return e.set(this.hash), e.set([this.workChain, this.workChain, this.workChain, this.workChain], 32), e
            });
            W(this, "toStringBuffer", e => {
                let n = e && e.testOnly !== void 0 ? e.testOnly : !1,
                    o = (e && e.bounceable !== void 0 ? e.bounceable : !0) ? Za : Ol;
                n && (o |= Qa);
                let i = new Uint8Array(34);
                i[0] = o, i[1] = this.workChain, i.set(this.hash, 2);
                let a = new Uint8Array(36);
                return a.set(i), a.set(mr(i), 34), a
            });
            W(this, "toString", e => {
                let n = e && e.urlSafe !== void 0 ? e.urlSafe : !0,
                    r = this.toStringBuffer(e);
                return n ? pr(r).replace(/\+/g, "-").replace(/\//g, "_") : pr(r)
            });
            W(this, zl, () => this.toString());
            if (n.length !== 32) throw new Error("Invalid address hash length: " + n.length);
            this.workChain = e, this.hash = n, Object.freeze(this)
        }
        static isAddress(e) {
            return e instanceof Wn
        }
        static isFriendly(e) {
            return !(e.length !== 48 || !/[A-Za-z0-9+/_-]+/.test(e))
        }
        static isRaw(e) {
            if (e.indexOf(":") === -1) return !1;
            let [n, r] = e.split(":");
            return !(!Number.isInteger(parseFloat(n)) || !/[a-f0-9]+/.test(r.toLowerCase()) || r.length !== 64)
        }
        static normalize(e) {
            return typeof e == "string" ? Wn.parse(e).toString() : e.toString()
        }
        static parse(e) {
            if (Wn.isFriendly(e)) return this.parseFriendly(e).address;
            if (Wn.isRaw(e)) return this.parseRaw(e);
            throw new Error("Unknown address type: " + e)
        }
        static parseRaw(e) {
            let n = parseInt(e.split(":")[0]),
                r = vt(e.split(":")[1]);
            return new Wn(n, r)
        }
        static parseFriendly(e) {
            if (e instanceof Uint8Array) {
                let n = jl(e);
                return {
                    isBounceable: n.isBounceable,
                    isTestOnly: n.isTestOnly,
                    address: new Wn(n.workchain, n.hashPart)
                }
            } else {
                let n = e.replace(/\-/g, "+").replace(/_/g, "/"),
                    r = jl(n);
                return {
                    isBounceable: r.isBounceable,
                    isTestOnly: r.isTestOnly,
                    address: new Wn(r.workchain, r.hashPart)
                }
            }
        }
        equals(e) {
            return e.workChain !== this.workChain ? !1 : jt(e.hash, this.hash)
        }
    },
    Dt = Wn;
var Fl;
Fl = rn;
var Xa = class Xa {
        constructor(e, n) {
            W(this, "value");
            W(this, "bits");
            W(this, Fl, () => this.toString());
            this.value = e, this.bits = n
        }
        static isAddress(e) {
            return e instanceof Xa
        }
        toString() {
            return "External<".concat(this.bits, ":").concat(this.value, ">")
        }
    },
    yr = Xa;
var Ja = "abcdefghijklmnopqrstuvwxyz234567";

function es(t) {
    let e = t.byteLength,
        n = 0,
        r = 0,
        o = "";
    for (let i = 0; i < e; i++)
        for (r = r << 8 | t[i], n += 8; n >= 5;) o += Ja[r >>> n - 5 & 31], n -= 5;
    return n > 0 && (o += Ja[r << 5 - n & 31]), o
}

function ig(t, e) {
    let n = t.indexOf(e);
    if (n === -1) throw new Error("Invalid character found: " + e);
    return n
}

function ts(t) {
    let e;
    e = t.toLowerCase();
    let {
        length: n
    } = e, r = 0, o = 0, i = 0, a = new Uint8Array(n * 5 / 8 | 0);
    for (let s = 0; s < n; s++) o = o << 5 | ig(Ja, e[s]), r += 5, r >= 8 && (a[i++] = o >>> r - 8 & 255, r -= 8);
    return a
}
var ql;
ql = rn;
var Hi = class Hi {
        constructor(e) {
            W(this, "address");
            W(this, "toRaw", () => Xe(this.address).toUpperCase());
            W(this, "toString", () => {
                let e = new Uint8Array(1 + this.address.length);
                e[0] = 45, e.set(this.address, 1);
                let n = mr(e),
                    r = new Uint8Array(e.length + n.length);
                return r.set(e), r.set(n, e.length), es(r).slice(1)
            });
            W(this, ql, () => this.toString());
            if (e.length !== 32) throw Error("Invalid address");
            this.address = e
        }
        static parseFriendly(e) {
            if (e.length !== 55) throw Error("Invalid address");
            e = "f" + e;
            let n = ts(e);
            if (n[0] !== 45) throw Error("Invalid address");
            let r = n.slice(33),
                o = mr(n.slice(0, 33));
            if (!jt(o, r)) throw Error("Invalid address");
            return new Hi(n.slice(1, 33))
        }
        static parseRaw(e) {
            let n = Zn(e);
            return new Hi(n)
        }
        equals(e) {
            return jt(this.address, e.address)
        }
    },
    ns = Hi;
var Dn = class {
    constructor(e = 1023) {
        W(this, "_buffer");
        W(this, "_length");
        this._buffer = new Uint8Array(Math.ceil(e / 8)), this._length = 0
    }
    get length() {
        return this._length
    }
    writeBit(e) {
        let n = this._length;
        if (n > this._buffer.length * 8) throw new Error("BitBuilder overflow");
        (typeof e == "boolean" && e === !0 || typeof e == "number" && e > 0) && (this._buffer[n / 8 | 0] |= 1 << 7 - n % 8), this._length++
    }
    writeBits(e) {
        for (let n = 0; n < e.length; n++) this.writeBit(e.at(n))
    }
    writeBuffer(e) {
        if (this._length % 8 === 0) {
            if (this._length + e.length * 8 > this._buffer.length * 8) throw new Error("BitBuilder overflow");
            this._buffer.set(e, this._length / 8), this._length += e.length * 8
        } else
            for (let n = 0; n < e.length; n++) this.writeUint(e[n], 8)
    }
    writeUint(e, n) {
        if (n < 0 || !Number.isSafeInteger(n)) throw Error("invalid bit length. Got ".concat(n));
        let r = BigInt(e);
        if (n === 0) {
            if (r !== BigInt(0)) throw Error("value is not zero for ".concat(n, " bits. Got ").concat(e));
            return
        }
        let o = BigInt(1) << BigInt(n);
        if (r < 0 || r >= o) throw Error("bitLength is too small for a value ".concat(e, ". Got ").concat(n));
        if (this._length + n > this._buffer.length * 8) throw new Error("BitBuilder overflow");
        let i = 8 - this._length % 8;
        if (i > 0) {
            let a = Math.floor(this._length / 8);
            if (n < i) {
                let s = Number(r);
                this._buffer[a] |= s << i - n, this._length += n
            } else {
                let s = Number(r >> BigInt(n - i));
                this._buffer[a] |= s, this._length += i
            }
        }
        for (n -= i; n > 0;) n >= 8 ? (this._buffer[this._length / 8] = Number(r >> BigInt(n - 8) & BigInt(255)), this._length += 8, n -= 8) : (this._buffer[this._length / 8] = Number(r << BigInt(8 - n) & BigInt(255)), this._length += n, n = 0)
    }
    writeInt(e, n) {
        let r = BigInt(e);
        if (n < 0 || !Number.isSafeInteger(n)) throw Error("invalid bit length. Got ".concat(n));
        if (n === 0) {
            if (e !== BigInt(0)) throw Error("value is not zero for ".concat(n, " bits. Got ").concat(e));
            return
        }
        if (n === 1) {
            if (e !== -BigInt(1) && e !== BigInt(0)) throw Error("value is not zero or -1 for ".concat(n, " bits. Got ").concat(e));
            this.writeBit(e === -BigInt(1));
            return
        }
        let o = BigInt(1) << BigInt(n) - BigInt(1);
        if (r < -o || r >= o) throw Error("value is out of range for ".concat(n, " bits. Got ").concat(e));
        r < 0 ? (this.writeBit(!0), r = o + r) : this.writeBit(!1), this.writeUint(r, n - 1)
    }
    writeVarUint(e, n) {
        let r = BigInt(e);
        if (n < 0 || !Number.isSafeInteger(n)) throw Error("invalid bit length. Got ".concat(n));
        if (r < 0) throw Error("value is negative. Got ".concat(e));
        if (r === BigInt(0)) {
            this.writeUint(0, n);
            return
        }
        let o = Math.ceil(r.toString(2).length / 8),
            i = o * 8;
        this.writeUint(o, n), this.writeUint(r, i)
    }
    writeVarInt(e, n) {
        let r = BigInt(e);
        if (n < 0 || !Number.isSafeInteger(n)) throw Error("invalid bit length. Got ".concat(n));
        if (r === BigInt(0)) {
            this.writeUint(0, n);
            return
        }
        let o = r > 0 ? r : -r,
            i = 1 + Math.ceil(o.toString(2).length / 8),
            a = i * 8;
        this.writeUint(i, n), this.writeInt(r, a)
    }
    writeCoins(e) {
        this.writeVarUint(e, 4)
    }
    writeAddress(e) {
        if (e == null) {
            this.writeUint(0, 2);
            return
        }
        if (Dt.isAddress(e)) {
            this.writeUint(2, 2), this.writeUint(0, 1), this.writeInt(e.workChain, 8), this.writeBuffer(e.hash);
            return
        }
        if (yr.isAddress(e)) {
            this.writeUint(1, 2), this.writeUint(e.bits, 9), this.writeUint(e.value, e.bits);
            return
        }
        throw Error("Invalid address. Got ".concat(e))
    }
    build() {
        return new Ct(this._buffer, 0, this._length)
    }
    buffer() {
        if (this._length % 8 !== 0) throw new Error("BitBuilder buffer is not byte aligned");
        return this._buffer.subarray(0, this._length / 8)
    }
};

function qr(t) {
    let e = new Dn(Math.ceil(t.length / 8) * 8);
    e.writeBits(t);
    let n = Math.ceil(t.length / 8) * 8 - t.length;
    for (let r = 0; r < n; r++) r === 0 ? e.writeBit(1) : e.writeBit(0);
    return e.buffer()
}

function Gl(t) {
    let e = 0;
    for (let n = t.length - 1; n >= 0; n--)
        if (t[n] !== 0) {
            let r = t[n],
                o = r & -r;
            o & 1 || (o = Math.log2(o) + 1), n > 0 && (e = n << 3), e += 8 - o;
            break
        }
    return new Ct(t, 0, e)
}
var Yl;
Yl = rn;
var br = class br {
    constructor(e, n, r) {
        W(this, "_offset");
        W(this, "_length");
        W(this, "_data");
        W(this, Yl, () => this.toString());
        if (r < 0) throw new Error("Length ".concat(r, " is out of bounds"));
        this._length = r, this._data = e, this._offset = n
    }
    static isBitString(e) {
        return e instanceof br
    }
    get length() {
        return this._length
    }
    at(e) {
        if (e >= this._length) throw new Error("Index ".concat(e, " > ").concat(this._length, " is out of bounds"));
        if (e < 0) throw new Error("Index ".concat(e, " < 0 is out of bounds"));
        let n = this._offset + e >> 3,
            r = 7 - (this._offset + e) % 8;
        return (this._data[n] & 1 << r) !== 0
    }
    substring(e, n) {
        if (e > this._length) throw new Error("Offset(".concat(e, ") > ").concat(this._length, " is out of bounds"));
        if (e < 0) throw new Error("Offset(".concat(e, ") < 0 is out of bounds"));
        if (n === 0) return br.EMPTY;
        if (e + n > this._length) throw new Error("Offset ".concat(e, " + Length ").concat(n, " > ").concat(this._length, " is out of bounds"));
        return new br(this._data, this._offset + e, n)
    }
    subbuffer(e, n) {
        if (e > this._length) throw new Error("Offset ".concat(e, " is out of bounds"));
        if (e < 0) throw new Error("Offset ".concat(e, " is out of bounds"));
        if (e + n > this._length) throw new Error("Offset + Lenght = ".concat(e + n, " is out of bounds"));
        if (n % 8 !== 0 || (this._offset + e) % 8 !== 0) return null;
        let r = this._offset + e >> 3,
            o = r + (n >> 3);
        return this._data.subarray(r, o)
    }
    equals(e) {
        if (this._length !== e._length) return !1;
        for (let n = 0; n < this._length; n++)
            if (this.at(n) !== e.at(n)) return !1;
        return !0
    }
    toString() {
        let e = qr(this);
        if (this._length % 4 === 0) {
            let n = Xe(e.subarray(0, Math.ceil(this._length / 8))).toUpperCase();
            return this._length % 8 === 0 ? n : n.substring(0, n.length - 1)
        } else {
            let n = Xe(e).toUpperCase();
            return this._length % 8 <= 4 ? n.substring(0, n.length - 1) + "_" : n + "_"
        }
    }
};
W(br, "EMPTY", new br(new Uint8Array(0), 0, 0));
var Ct = br;
var Bt = class t {
    constructor(e, n = 0) {
        W(this, "_bits");
        W(this, "_offset");
        W(this, "_checkpoints", []);
        this._bits = e, this._offset = n
    }
    get offset() {
        return this._offset
    }
    get remaining() {
        return this._bits.length - this._offset
    }
    skip(e) {
        if (e < 0 || this._offset + e > this._bits.length) throw new Error("Index ".concat(this._offset + e, " is out of bounds"));
        this._offset += e
    }
    reset() {
        this._checkpoints.length > 0 ? this._offset = this._checkpoints.pop() : this._offset = 0
    }
    save() {
        this._checkpoints.push(this._offset)
    }
    loadBit() {
        let e = this._bits.at(this._offset);
        return this._offset++, e
    }
    preloadBit() {
        return this._bits.at(this._offset)
    }
    loadBits(e) {
        let n = this._bits.substring(this._offset, e);
        return this._offset += e, n
    }
    preloadBits(e) {
        return this._bits.substring(this._offset, e)
    }
    loadBuffer(e) {
        let n = this._preloadBuffer(e, this._offset);
        return this._offset += e * 8, n
    }
    preloadBuffer(e) {
        return this._preloadBuffer(e, this._offset)
    }
    loadUint(e) {
        return this._toSafeInteger(this.loadUintBig(e), "loadUintBig")
    }
    loadUintBig(e) {
        let n = this.preloadUintBig(e);
        return this._offset += e, n
    }
    preloadUint(e) {
        return this._toSafeInteger(this._preloadUint(e, this._offset), "preloadUintBig")
    }
    preloadUintBig(e) {
        return this._preloadUint(e, this._offset)
    }
    loadInt(e) {
        let n = this._preloadInt(e, this._offset);
        return this._offset += e, this._toSafeInteger(n, "loadUintBig")
    }
    loadIntBig(e) {
        let n = this._preloadInt(e, this._offset);
        return this._offset += e, n
    }
    preloadInt(e) {
        return this._toSafeInteger(this._preloadInt(e, this._offset), "preloadIntBig")
    }
    preloadIntBig(e) {
        return this._preloadInt(e, this._offset)
    }
    loadVarUint(e) {
        let n = Number(this.loadUint(e));
        return this._toSafeInteger(this.loadUintBig(n * 8), "loadVarUintBig")
    }
    loadVarUintBig(e) {
        let n = Number(this.loadUint(e));
        return this.loadUintBig(n * 8)
    }
    preloadVarUint(e) {
        let n = Number(this._preloadUint(e, this._offset));
        return this._toSafeInteger(this._preloadUint(n * 8, this._offset + e), "preloadVarUintBig")
    }
    preloadVarUintBig(e) {
        let n = Number(this._preloadUint(e, this._offset));
        return this._preloadUint(n * 8, this._offset + e)
    }
    loadVarInt(e) {
        let n = Number(this.loadUint(e));
        return this._toSafeInteger(this.loadIntBig(n * 8), "loadVarIntBig")
    }
    loadVarIntBig(e) {
        let n = Number(this.loadUint(e));
        return this.loadIntBig(n * 8)
    }
    preloadVarInt(e) {
        let n = Number(this._preloadUint(e, this._offset));
        return this._toSafeInteger(this._preloadInt(n * 8, this._offset + e), "preloadVarIntBig")
    }
    preloadVarIntBig(e) {
        let n = Number(this._preloadUint(e, this._offset));
        return this._preloadInt(n * 8, this._offset + e)
    }
    loadCoins() {
        return this.loadVarUintBig(4)
    }
    preloadCoins() {
        return this.preloadVarUintBig(4)
    }
    loadAddress() {
        let e = Number(this._preloadUint(2, this._offset));
        if (e === 2) return this._loadInternalAddress();
        throw new Error("Invalid address: " + e)
    }
    loadMaybeAddress() {
        let e = Number(this._preloadUint(2, this._offset));
        if (e === 0) return this._offset += 2, null;
        if (e === 2) return this._loadInternalAddress();
        throw new Error("Invalid address")
    }
    loadExternalAddress() {
        if (Number(this._preloadUint(2, this._offset)) === 1) return this._loadExternalAddress();
        throw new Error("Invalid address")
    }
    loadMaybeExternalAddress() {
        let e = Number(this._preloadUint(2, this._offset));
        if (e === 0) return this._offset += 2, null;
        if (e === 1) return this._loadExternalAddress();
        throw new Error("Invalid address")
    }
    loadAddressAny() {
        let e = Number(this._preloadUint(2, this._offset));
        if (e === 0) return this._offset += 2, null;
        if (e === 2) return this._loadInternalAddress();
        if (e === 1) return this._loadExternalAddress();
        throw Error(e === 3 ? "Unsupported" : "Unreachable")
    }
    loadPaddedBits(e) {
        if (e % 8 !== 0) throw new Error("Invalid number of bits");
        let n = e;
        for (;;)
            if (this._bits.at(this._offset + n - 1)) {
                n--;
                break
            } else n--;
        let r = this._bits.substring(this._offset, n);
        return this._offset += e, r
    }
    clone() {
        return new t(this._bits, this._offset)
    }
    _preloadInt(e, n) {
        if (e == 0) return BigInt(0);
        let r = this._bits.at(n),
            o = BigInt(0);
        for (let i = 0; i < e - 1; i++) this._bits.at(n + 1 + i) && (o += BigInt(1) << BigInt(e - i - 1 - 1));
        return r && (o = o - (BigInt(1) << BigInt(e - 1))), o
    }
    _preloadUint(e, n) {
        if (e == 0) return BigInt(0);
        let r = BigInt(0);
        for (let o = 0; o < e; o++) this._bits.at(n + o) && (r += BigInt(1) << BigInt(e - o - 1));
        return r
    }
    _preloadBuffer(e, n) {
        let r = this._bits.subbuffer(n, e * 8);
        if (r) return r;
        let o = new Uint8Array(e);
        for (let i = 0; i < e; i++) o[i] = Number(this._preloadUint(8, n + i * 8));
        return o
    }
    _loadInternalAddress() {
        if (Number(this._preloadUint(2, this._offset)) !== 2 || this._preloadUint(1, this._offset + 2) !== BigInt(0)) throw Error("Invalid address");
        let n = Number(this._preloadInt(8, this._offset + 3)),
            r = this._preloadBuffer(32, this._offset + 11);
        return this._offset += 267, new Dt(n, r)
    }
    _loadExternalAddress() {
        if (Number(this._preloadUint(2, this._offset)) !== 1) throw Error("Invalid address");
        let n = Number(this._preloadUint(9, this._offset + 2)),
            r = this._preloadUint(n, this._offset + 11);
        return this._offset += 11 + n, new yr(r, n)
    }
    _toSafeInteger(e, n) {
        if (BigInt(Number.MAX_SAFE_INTEGER) < e || e < BigInt(Number.MIN_SAFE_INTEGER)) throw new TypeError("".concat(e, " is out of safe integer range. Use ").concat(n, " instead"));
        return Number(e)
    }
};
var Nt = class t {
    constructor(e = 0) {
        W(this, "_mask", 0);
        W(this, "_hashIndex");
        W(this, "_hashCount");
        this._mask = e, this._hashIndex = ag(this._mask), this._hashCount = this._hashIndex + 1
    }
    get value() {
        return this._mask
    }
    get level() {
        return 32 - Math.clz32(this._mask)
    }
    get hashIndex() {
        return this._hashIndex
    }
    get hashCount() {
        return this._hashCount
    }
    apply(e) {
        return new t(this._mask & (1 << e) - 1)
    }
    isSignificant(e) {
        return e === 0 || (this._mask >> e - 1) % 2 !== 0
    }
};

function ag(t) {
    return t = t - (t >> 1 & 1431655765), t = (t & 858993459) + (t >> 2 & 858993459), (t + (t >> 4) & 252645135) * 16843009 >> 24
}

function Ki(t, e) {
    let n = new Bt(t);
    if (t.length !== 264) throw new Error('Library cell must have exactly (8 + 256) bits, got "'.concat(t.length, '"'));
    let o = n.loadUint(8);
    if (o !== 2) throw new Error('Library cell must have type 2, got "'.concat(o, '"'));
    return {}
}

function _o(t, e) {
    let n = new Bt(t);
    if (t.length !== 280) throw new Error('Merkle Proof cell must have exactly (8 + 256 + 16) bits, got "'.concat(t.length, '"'));
    if (e.length !== 1) throw new Error('Merkle Proof cell must have exactly 1 ref, got "'.concat(e.length, '"'));
    let o = n.loadUint(8);
    if (o !== 3) throw new Error('Merkle Proof cell must have type 3, got "'.concat(o, '"'));
    let i = n.loadBuffer(32),
        a = n.loadUint(16),
        s = e[0].hash(0),
        c = e[0].depth(0);
    if (a !== c) throw new Error('Merkle Proof cell ref depth must be exactly "'.concat(a, '", got "').concat(c, '"'));
    if (!jt(i, s)) throw new Error('Merkle Proof cell ref hash must be exactly "'.concat(Xe(i), '", got "').concat(Xe(s), '"'));
    return {
        proofDepth: a,
        proofHash: i
    }
}

function rs(t) {
    return Ae().storeUint(3, 8).storeBuffer(t.hash(0)).storeUint(t.depth(0), 16).storeRef(t).endCell({
        exotic: !0
    })
}

function Lo(t, e) {
    let n = new Bt(t),
        r = 8 + 2 * 272;
    if (t.length !== r) throw new Error('Merkle Update cell must have exactly (8 + (2 * (256 + 16))) bits, got "'.concat(t.length, '"'));
    if (e.length !== 2) throw new Error('Merkle Update cell must have exactly 2 refs, got "'.concat(e.length, '"'));
    let o = n.loadUint(8);
    if (o !== 4) throw new Error('Merkle Update cell type must be exactly 4, got "'.concat(o, '"'));
    let i = n.loadBuffer(32),
        a = n.loadBuffer(32),
        s = n.loadUint(16),
        c = n.loadUint(16);
    if (s !== e[0].depth(0)) throw new Error('Merkle Update cell ref depth must be exactly "'.concat(s, '", got "').concat(e[0].depth(0), '"'));
    if (!jt(i, e[0].hash(0))) throw new Error('Merkle Update cell ref hash must be exactly "'.concat(Xe(i), '", got "').concat(Xe(e[0].hash(0)), '"'));
    if (c !== e[1].depth(0)) throw new Error('Merkle Update cell ref depth must be exactly "'.concat(c, '", got "').concat(e[1].depth(0), '"'));
    if (!jt(a, e[1].hash(0))) throw new Error('Merkle Update cell ref hash must be exactly "'.concat(Xe(a), '", got "').concat(Xe(e[1].hash(0)), '"'));
    return {
        proofDepth1: s,
        proofDepth2: c,
        proofHash1: i,
        proofHash2: a
    }
}

function Wo(t, e) {
    let n = new Bt(t),
        r = n.loadUint(8);
    if (r !== 1) throw new Error('Pruned branch cell must have type 1, got "'.concat(r, '"'));
    if (e.length !== 0) throw new Error("Pruned Branch cell can't has refs, got \"".concat(e.length, '"'));
    let o;
    if (t.length === 280) o = new Nt(1);
    else {
        if (o = new Nt(n.loadUint(8)), o.level < 1 || o.level > 3) throw new Error('Pruned Branch cell level must be >= 1 and <= 3, got "'.concat(o.level, "/").concat(o.value, '"'));
        let c = 16 + o.apply(o.level - 1).hashCount * 272;
        if (t.length !== c) throw new Error("Pruned branch cell must have exactly ".concat(c, ' bits, got "').concat(t.length, '"'))
    }
    let i = [],
        a = [],
        s = [];
    for (let c = 0; c < o.level; c++) a.push(n.loadBuffer(32));
    for (let c = 0; c < o.level; c++) s.push(n.loadUint(16));
    for (let c = 0; c < o.level; c++) i.push({
        depth: s[c],
        hash: a[c]
    });
    return {
        mask: o.value,
        pruned: i
    }
}

function sg(t, e) {
    let n = Wo(t, e),
        r = [],
        o = [],
        i = new Nt(n.mask);
    for (let a = 0; a < n.pruned.length; a++) r.push(n.pruned[a].depth), o.push(n.pruned[a].hash);
    return {
        type: 1,
        depths: r,
        hashes: o,
        mask: i
    }
}

function lg(t, e) {
    let n = Ki(t, e),
        r = [],
        o = [],
        i = new Nt;
    return {
        type: 2,
        depths: r,
        hashes: o,
        mask: i
    }
}

function cg(t, e) {
    let n = _o(t, e),
        r = [],
        o = [],
        i = new Nt(e[0].level() >> 1);
    return {
        type: 3,
        depths: r,
        hashes: o,
        mask: i
    }
}

function ug(t, e) {
    let n = Lo(t, e),
        r = [],
        o = [],
        i = new Nt((e[0].level() | e[1].level()) >> 1);
    return {
        type: 4,
        depths: r,
        hashes: o,
        mask: i
    }
}

function Zl(t, e) {
    let r = new Bt(t).preloadUint(8);
    if (r === 1) return sg(t, e);
    if (r === 2) return lg(t, e);
    if (r === 3) return cg(t, e);
    if (r === 4) return ug(t, e);
    throw Error("Invalid exotic cell type: " + r)
}

function os(t, e) {
    let n = BigInt(t);
    if (e === "int") return n === BigInt(0) || n === -BigInt(1) ? 1 : (n > 0 ? n : -n).toString(2).length + 1;
    if (e === "uint") {
        if (n < 0) throw Error("value is negative. Got ".concat(t));
        return n.toString(2).length
    } else throw Error("invalid mode. Got ".concat(e))
}
var Qn = 2197175160;

function Do(t) {
    let e = -1;
    for (let n = 0; n < t.length; n++) e ^= t[n], e = e & 1 ? e >>> 1 ^ Qn : e >>> 1, e = e & 1 ? e >>> 1 ^ Qn : e >>> 1, e = e & 1 ? e >>> 1 ^ Qn : e >>> 1, e = e & 1 ? e >>> 1 ^ Qn : e >>> 1, e = e & 1 ? e >>> 1 ^ Qn : e >>> 1, e = e & 1 ? e >>> 1 ^ Qn : e >>> 1, e = e & 1 ? e >>> 1 ^ Qn : e >>> 1, e = e & 1 ? e >>> 1 ^ Qn : e >>> 1;
    return e = e ^ 4294967295, Vl(e)
}

function is(t, e, n) {
    return t.length + (n !== -1 ? 1 : 0) * 8 + e * 32
}

function as(t) {
    let e = t.length;
    return Math.ceil(e / 8) + Math.floor(e / 8)
}

function Ql(t, e, n, r, o, i) {
    let a = Math.ceil(e.length / 8),
        s = new Uint8Array(2 + a + 34 * n.length),
        c = 0;
    s[c++] = is(n, o, i), s[c++] = as(t), s.set(qr(e), c), c += a;
    for (let d of n) {
        let h;
        i == 3 || i == 4 ? h = d.depth(r + 1) : h = d.depth(r), s[c++] = Math.floor(h / 256), s[c++] = h % 256
    }
    for (let d of n) {
        let h;
        i == 3 || i == 4 ? h = d.hash(r + 1) : h = d.hash(r), s.set(h, c), c += 32
    }
    return s
}

function Xl(t) {
    let e = [t],
        n = new Map,
        r = new Set,
        o = [];
    for (; e.length > 0;) {
        let d = [...e];
        e = [];
        for (let h of d) {
            let f = Xe(h.hash());
            if (!n.has(f)) {
                r.add(f), n.set(f, {
                    cell: h,
                    refs: h.refs.map(b => Xe(b.hash()))
                });
                for (let b of h.refs) e.push(b)
            }
        }
    }
    let i = new Set;

    function a(d) {
        if (!r.has(d)) return;
        if (i.has(d)) throw Error("Not a DAG");
        i.add(d);
        let h = n.get(d).refs;
        for (let f = h.length - 1; f >= 0; f--) a(h[f]);
        o.push(d), i.delete(d), r.delete(d)
    }
    for (; r.size > 0;) {
        let d = Array.from(r)[0];
        a(d)
    }
    let s = new Map;
    for (let d = 0; d < o.length; d++) s.set(o[o.length - d - 1], d);
    let c = [];
    for (let d = o.length - 1; d >= 0; d--) {
        let h = o[d],
            f = n.get(h);
        c.push({
            cell: f.cell,
            refs: f.refs.map(b => s.get(b))
        })
    }
    return c
}

function Jl(t) {
    return dg(t & 7)
}

function dg(t) {
    let e = 0;
    for (let n = 0; n < 3; n++) e += t & 1, t = t >> 1;
    return e + 1
}

function fg(t, e) {
    let n = t.loadUint(8),
        r = n % 8,
        o = !!(n & 8),
        i = t.loadUint(8),
        a = Math.ceil(i / 2),
        s = !!(i % 2),
        c = n >> 5,
        d = (n & 16) != 0,
        f = d ? Jl(c) * 32 : 0,
        b = d ? Jl(c) * 2 : 0;
    t.skip(f * 8), t.skip(b * 8);
    let w = Ct.EMPTY;
    a > 0 && (s ? w = t.loadPaddedBits(a * 8) : w = t.loadBits(a * 8));
    let S = [];
    for (let k = 0; k < r; k++) S.push(t.loadUint(e * 8));
    return {
        bits: w,
        refs: S,
        exotic: o
    }
}

function hg(t, e) {
    return 2 + Math.ceil(t.bits.length / 8) + t.refs.length * e
}

function gg(t) {
    let e = new Bt(new Ct(t, 0, t.length * 8)),
        n = e.loadUint(32);
    if (n === 1761568243) {
        let r = e.loadUint(8),
            o = e.loadUint(8),
            i = e.loadUint(r * 8),
            a = e.loadUint(r * 8),
            s = e.loadUint(r * 8),
            c = e.loadUint(o * 8),
            d = e.loadBuffer(i * o),
            h = e.loadBuffer(c);
        return {
            size: r,
            offBytes: o,
            cells: i,
            roots: a,
            absent: s,
            totalCellSize: c,
            index: d,
            cellData: h,
            root: [0]
        }
    } else if (n === 2898503464) {
        let r = e.loadUint(8),
            o = e.loadUint(8),
            i = e.loadUint(r * 8),
            a = e.loadUint(r * 8),
            s = e.loadUint(r * 8),
            c = e.loadUint(o * 8),
            d = e.loadBuffer(i * o),
            h = e.loadBuffer(c),
            f = e.loadBuffer(4);
        if (!jt(Do(t.subarray(0, t.length - 4)), f)) throw Error("Invalid CRC32C");
        return {
            size: r,
            offBytes: o,
            cells: i,
            roots: a,
            absent: s,
            totalCellSize: c,
            index: d,
            cellData: h,
            root: [0]
        }
    } else if (n === 3052313714) {
        let r = e.loadUint(1),
            o = e.loadUint(1),
            i = e.loadUint(1),
            a = e.loadUint(2),
            s = e.loadUint(3),
            c = e.loadUint(8),
            d = e.loadUint(s * 8),
            h = e.loadUint(s * 8),
            f = e.loadUint(s * 8),
            b = e.loadUint(c * 8),
            w = [];
        for (let $ = 0; $ < h; $++) w.push(e.loadUint(s * 8));
        let S = null;
        r && (S = e.loadBuffer(d * c));
        let k = e.loadBuffer(b);
        if (o) {
            let $ = e.loadBuffer(4);
            if (!jt(Do(t.subarray(0, t.length - 4)), $)) throw Error("Invalid CRC32C")
        }
        return {
            size: s,
            offBytes: c,
            cells: d,
            roots: h,
            absent: f,
            totalCellSize: b,
            index: S,
            cellData: k,
            root: w
        }
    } else throw Error("Invalid magic")
}

function ec(t) {
    let e = gg(t),
        n = new Bt(new Ct(e.cellData, 0, e.cellData.length * 8)),
        r = [];
    for (let i = 0; i < e.cells; i++) {
        let a = fg(n, e.size);
        r.push({ ...a,
            result: null
        })
    }
    for (let i = r.length - 1; i >= 0; i--) {
        if (r[i].result) throw Error("Impossible");
        let a = [];
        for (let s of r[i].refs) {
            if (!r[s].result) throw Error("Invalid BOC file");
            a.push(r[s].result)
        }
        r[i].result = new Yt({
            bits: r[i].bits,
            refs: a,
            exotic: r[i].exotic
        })
    }
    let o = [];
    for (let i = 0; i < e.root.length; i++) o.push(r[e.root[i]].result);
    return o
}

function pg(t, e, n, r) {
    let o = is(t.refs, t.mask.value, t.type),
        i = as(t.bits);
    r.writeUint(o, 8), r.writeUint(i, 8), r.writeBuffer(qr(t.bits));
    for (let a of e) r.writeUint(a, n * 8)
}

function tc(t, e) {
    let n = Xl(t),
        r = n.length,
        o = e.idx,
        i = e.crc32,
        a = !1,
        s = 0,
        c = Math.max(Math.ceil(os(r, "uint") / 8), 1),
        d = 0,
        h = [];
    for (let k of n) {
        let $ = hg(k.cell, c);
        d += $, h.push(d)
    }
    let f = Math.max(Math.ceil(os(d, "uint") / 8), 1),
        b = (6 + 3 * c + f + 1 * c + (o ? r * f : 0) + d + (i ? 4 : 0)) * 8,
        w = new Dn(b);
    if (w.writeUint(3052313714, 32), w.writeBit(o), w.writeBit(i), w.writeBit(a), w.writeUint(s, 2), w.writeUint(c, 3), w.writeUint(f, 8), w.writeUint(r, c * 8), w.writeUint(1, c * 8), w.writeUint(0, c * 8), w.writeUint(d, f * 8), w.writeUint(0, c * 8), o)
        for (let k = 0; k < r; k++) w.writeUint(h[k], f * 8);
    for (let k = 0; k < r; k++) pg(n[k].cell, n[k].refs, c, w);
    if (i) {
        let k = Do(w.buffer());
        w.writeBuffer(k)
    }
    let S = w.buffer();
    if (S.length !== b / 8) throw Error("Internal error");
    return S
}
var fc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    hc = "ARRAYBUFFER not supported by this environment",
    gc = "UINT8ARRAY not supported by this environment";

function nc(t, e, n, r) {
    let o, i, a, s = e || [0],
        c = (n = n || 0) >>> 3,
        d = r === -1 ? 3 : 0;
    for (o = 0; o < t.length; o += 1) a = o + c, i = a >>> 2, s.length <= i && s.push(0), s[i] |= t[o] << 8 * (d + r * (a % 4));
    return {
        value: s,
        binLen: 8 * t.length + n
    }
}

function Qr(t, e, n) {
    switch (e) {
        case "UTF8":
        case "UTF16BE":
        case "UTF16LE":
            break;
        default:
            throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")
    }
    switch (t) {
        case "HEX":
            return function(r, o, i) {
                return function(a, s, c, d) {
                    let h, f, b, w;
                    if (a.length % 2 != 0) throw new Error("String of HEX type must be in byte increments");
                    let S = s || [0],
                        k = (c = c || 0) >>> 3,
                        $ = d === -1 ? 3 : 0;
                    for (h = 0; h < a.length; h += 2) {
                        if (f = parseInt(a.substr(h, 2), 16), isNaN(f)) throw new Error("String of HEX type contains invalid characters");
                        for (w = (h >>> 1) + k, b = w >>> 2; S.length <= b;) S.push(0);
                        S[b] |= f << 8 * ($ + d * (w % 4))
                    }
                    return {
                        value: S,
                        binLen: 4 * a.length + c
                    }
                }(r, o, i, n)
            };
        case "TEXT":
            return function(r, o, i) {
                return function(a, s, c, d, h) {
                    let f, b, w, S, k, $, q, P, F = 0,
                        re = c || [0],
                        L = (d = d || 0) >>> 3;
                    if (s === "UTF8")
                        for (q = h === -1 ? 3 : 0, w = 0; w < a.length; w += 1)
                            for (f = a.charCodeAt(w), b = [], 128 > f ? b.push(f) : 2048 > f ? (b.push(192 | f >>> 6), b.push(128 | 63 & f)) : 55296 > f || 57344 <= f ? b.push(224 | f >>> 12, 128 | f >>> 6 & 63, 128 | 63 & f) : (w += 1, f = 65536 + ((1023 & f) << 10 | 1023 & a.charCodeAt(w)), b.push(240 | f >>> 18, 128 | f >>> 12 & 63, 128 | f >>> 6 & 63, 128 | 63 & f)), S = 0; S < b.length; S += 1) {
                                for ($ = F + L, k = $ >>> 2; re.length <= k;) re.push(0);
                                re[k] |= b[S] << 8 * (q + h * ($ % 4)), F += 1
                            } else
                                for (q = h === -1 ? 2 : 0, P = s === "UTF16LE" && h !== 1 || s !== "UTF16LE" && h === 1, w = 0; w < a.length; w += 1) {
                                    for (f = a.charCodeAt(w), P === !0 && (S = 255 & f, f = S << 8 | f >>> 8), $ = F + L, k = $ >>> 2; re.length <= k;) re.push(0);
                                    re[k] |= f << 8 * (q + h * ($ % 4)), F += 2
                                }
                    return {
                        value: re,
                        binLen: 8 * F + d
                    }
                }(r, e, o, i, n)
            };
        case "B64":
            return function(r, o, i) {
                return function(a, s, c, d) {
                    let h, f, b, w, S, k, $, q = 0,
                        P = s || [0],
                        F = (c = c || 0) >>> 3,
                        re = d === -1 ? 3 : 0,
                        L = a.indexOf("=");
                    if (a.search(/^[a-zA-Z0-9=+/]+$/) === -1) throw new Error("Invalid character in base-64 string");
                    if (a = a.replace(/=/g, ""), L !== -1 && L < a.length) throw new Error("Invalid '=' found in base-64 string");
                    for (f = 0; f < a.length; f += 4) {
                        for (S = a.substr(f, 4), w = 0, b = 0; b < S.length; b += 1) h = fc.indexOf(S.charAt(b)), w |= h << 18 - 6 * b;
                        for (b = 0; b < S.length - 1; b += 1) {
                            for ($ = q + F, k = $ >>> 2; P.length <= k;) P.push(0);
                            P[k] |= (w >>> 16 - 8 * b & 255) << 8 * (re + d * ($ % 4)), q += 1
                        }
                    }
                    return {
                        value: P,
                        binLen: 8 * q + c
                    }
                }(r, o, i, n)
            };
        case "BYTES":
            return function(r, o, i) {
                return function(a, s, c, d) {
                    let h, f, b, w, S = s || [0],
                        k = (c = c || 0) >>> 3,
                        $ = d === -1 ? 3 : 0;
                    for (f = 0; f < a.length; f += 1) h = a.charCodeAt(f), w = f + k, b = w >>> 2, S.length <= b && S.push(0), S[b] |= h << 8 * ($ + d * (w % 4));
                    return {
                        value: S,
                        binLen: 8 * a.length + c
                    }
                }(r, o, i, n)
            };
        case "ARRAYBUFFER":
            try {
                new ArrayBuffer(0)
            } catch {
                throw new Error(hc)
            }
            return function(r, o, i) {
                return function(a, s, c, d) {
                    return nc(new Uint8Array(a), s, c, d)
                }(r, o, i, n)
            };
        case "UINT8ARRAY":
            try {
                new Uint8Array(0)
            } catch {
                throw new Error(gc)
            }
            return function(r, o, i) {
                return nc(r, o, i, n)
            };
        default:
            throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
    }
}

function rc(t, e, n, r) {
    switch (t) {
        case "HEX":
            return function(o) {
                return function(i, a, s, c) {
                    let d = "0123456789abcdef",
                        h, f, b = "",
                        w = a / 8,
                        S = s === -1 ? 3 : 0;
                    for (h = 0; h < w; h += 1) f = i[h >>> 2] >>> 8 * (S + s * (h % 4)), b += d.charAt(f >>> 4 & 15) + d.charAt(15 & f);
                    return c.outputUpper ? b.toUpperCase() : b
                }(o, e, n, r)
            };
        case "B64":
            return function(o) {
                return function(i, a, s, c) {
                    let d, h, f, b, w, S = "",
                        k = a / 8,
                        $ = s === -1 ? 3 : 0;
                    for (d = 0; d < k; d += 3)
                        for (b = d + 1 < k ? i[d + 1 >>> 2] : 0, w = d + 2 < k ? i[d + 2 >>> 2] : 0, f = (i[d >>> 2] >>> 8 * ($ + s * (d % 4)) & 255) << 16 | (b >>> 8 * ($ + s * ((d + 1) % 4)) & 255) << 8 | w >>> 8 * ($ + s * ((d + 2) % 4)) & 255, h = 0; h < 4; h += 1) S += 8 * d + 6 * h <= a ? fc.charAt(f >>> 6 * (3 - h) & 63) : c.b64Pad;
                    return S
                }(o, e, n, r)
            };
        case "BYTES":
            return function(o) {
                return function(i, a, s) {
                    let c, d, h = "",
                        f = a / 8,
                        b = s === -1 ? 3 : 0;
                    for (c = 0; c < f; c += 1) d = i[c >>> 2] >>> 8 * (b + s * (c % 4)) & 255, h += String.fromCharCode(d);
                    return h
                }(o, e, n)
            };
        case "ARRAYBUFFER":
            try {
                new ArrayBuffer(0)
            } catch {
                throw new Error(hc)
            }
            return function(o) {
                return function(i, a, s) {
                    let c, d = a / 8,
                        h = new ArrayBuffer(d),
                        f = new Uint8Array(h),
                        b = s === -1 ? 3 : 0;
                    for (c = 0; c < d; c += 1) f[c] = i[c >>> 2] >>> 8 * (b + s * (c % 4)) & 255;
                    return h
                }(o, e, n)
            };
        case "UINT8ARRAY":
            try {
                new Uint8Array(0)
            } catch {
                throw new Error(gc)
            }
            return function(o) {
                return function(i, a, s) {
                    let c, d = a / 8,
                        h = s === -1 ? 3 : 0,
                        f = new Uint8Array(d);
                    for (c = 0; c < d; c += 1) f[c] = i[c >>> 2] >>> 8 * (h + s * (c % 4)) & 255;
                    return f
                }(o, e, n)
            };
        default:
            throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
    }
}
var Ho = 4294967296,
    fe = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    Nn = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
    $n = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
    Ko = "Chosen SHA variant is not supported",
    pc = "Cannot set numRounds with MAC";

function zi(t, e) {
    let n, r, o = t.binLen >>> 3,
        i = e.binLen >>> 3,
        a = o << 3,
        s = 4 - o << 3;
    if (o % 4 != 0) {
        for (n = 0; n < i; n += 4) r = o + n >>> 2, t.value[r] |= e.value[n >>> 2] << a, t.value.push(0), t.value[r + 1] |= e.value[n >>> 2] >>> s;
        return (t.value.length << 2) - 4 >= i + o && t.value.pop(), {
            value: t.value,
            binLen: t.binLen + e.binLen
        }
    }
    return {
        value: t.value.concat(e.value),
        binLen: t.binLen + e.binLen
    }
}

function oc(t) {
    let e = {
            outputUpper: !1,
            b64Pad: "=",
            outputLen: -1
        },
        n = t || {},
        r = "Output length must be a multiple of 8";
    if (e.outputUpper = n.outputUpper || !1, n.b64Pad && (e.b64Pad = n.b64Pad), n.outputLen) {
        if (n.outputLen % 8 != 0) throw new Error(r);
        e.outputLen = n.outputLen
    } else if (n.shakeLen) {
        if (n.shakeLen % 8 != 0) throw new Error(r);
        e.outputLen = n.shakeLen
    }
    if (typeof e.outputUpper != "boolean") throw new Error("Invalid outputUpper formatting option");
    if (typeof e.b64Pad != "string") throw new Error("Invalid b64Pad formatting option");
    return e
}

function Xn(t, e, n, r) {
    let o = t + " must include a value and format";
    if (!e) {
        if (!r) throw new Error(o);
        return r
    }
    if (e.value === void 0 || !e.format) throw new Error(o);
    return Qr(e.format, e.encoding || "UTF8", n)(e.value)
}
var Yr = class {
    constructor(e, n, r) {
        let o = r || {};
        if (this.t = n, this.i = o.encoding || "UTF8", this.numRounds = o.numRounds || 1, isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds) throw new Error("numRounds must a integer >= 1");
        this.o = e, this.h = [], this.u = 0, this.l = !1, this.A = 0, this.H = !1, this.S = [], this.p = []
    }
    update(e) {
        let n, r = 0,
            o = this.m >>> 5,
            i = this.C(e, this.h, this.u),
            a = i.binLen,
            s = i.value,
            c = a >>> 5;
        for (n = 0; n < c; n += o) r + this.m <= a && (this.U = this.v(s.slice(n, n + o), this.U), r += this.m);
        return this.A += r, this.h = s.slice(r >>> 5), this.u = a % this.m, this.l = !0, this
    }
    getHash(e, n) {
        let r, o, i = this.R,
            a = oc(n);
        if (this.K) {
            if (a.outputLen === -1) throw new Error("Output length must be specified in options");
            i = a.outputLen
        }
        let s = rc(e, i, this.T, a);
        if (this.H && this.g) return s(this.g(a));
        for (o = this.F(this.h.slice(), this.u, this.A, this.L(this.U), i), r = 1; r < this.numRounds; r += 1) this.K && i % 32 != 0 && (o[o.length - 1] &= 16777215 >>> 24 - i % 32), o = this.F(o, i, 0, this.B(this.o), i);
        return s(o)
    }
    setHMACKey(e, n, r) {
        if (!this.M) throw new Error("Variant does not support HMAC");
        if (this.l) throw new Error("Cannot set MAC key after calling update");
        let o = Qr(n, (r || {}).encoding || "UTF8", this.T);
        this.k(o(e))
    }
    k(e) {
        let n = this.m >>> 3,
            r = n / 4 - 1,
            o;
        if (this.numRounds !== 1) throw new Error(pc);
        if (this.H) throw new Error("MAC key already set");
        for (n < e.binLen / 8 && (e.value = this.F(e.value, e.binLen, 0, this.B(this.o), this.R)); e.value.length <= r;) e.value.push(0);
        for (o = 0; o <= r; o += 1) this.S[o] = 909522486 ^ e.value[o], this.p[o] = 1549556828 ^ e.value[o];
        this.U = this.v(this.S, this.U), this.A = this.m, this.H = !0
    }
    getHMAC(e, n) {
        let r = oc(n);
        return rc(e, this.R, this.T, r)(this.Y())
    }
    Y() {
        let e;
        if (!this.H) throw new Error("Cannot call getHMAC without first setting MAC key");
        let n = this.F(this.h.slice(), this.u, this.A, this.L(this.U), this.R);
        return e = this.v(this.p, this.B(this.o)), e = this.F(n, this.R, this.m, e, this.R), e
    }
};

function Gr(t, e) {
    return t << e | t >>> 32 - e
}

function yn(t, e) {
    return t >>> e | t << 32 - e
}

function mc(t, e) {
    return t >>> e
}

function ic(t, e, n) {
    return t ^ e ^ n
}

function yc(t, e, n) {
    return t & e ^ ~t & n
}

function bc(t, e, n) {
    return t & e ^ t & n ^ e & n
}

function mg(t) {
    return yn(t, 2) ^ yn(t, 13) ^ yn(t, 22)
}

function $t(t, e) {
    let n = (65535 & t) + (65535 & e);
    return (65535 & (t >>> 16) + (e >>> 16) + (n >>> 16)) << 16 | 65535 & n
}

function yg(t, e, n, r) {
    let o = (65535 & t) + (65535 & e) + (65535 & n) + (65535 & r);
    return (65535 & (t >>> 16) + (e >>> 16) + (n >>> 16) + (r >>> 16) + (o >>> 16)) << 16 | 65535 & o
}

function $o(t, e, n, r, o) {
    let i = (65535 & t) + (65535 & e) + (65535 & n) + (65535 & r) + (65535 & o);
    return (65535 & (t >>> 16) + (e >>> 16) + (n >>> 16) + (r >>> 16) + (o >>> 16) + (i >>> 16)) << 16 | 65535 & i
}

function bg(t) {
    return yn(t, 7) ^ yn(t, 18) ^ mc(t, 3)
}

function wg(t) {
    return yn(t, 6) ^ yn(t, 11) ^ yn(t, 25)
}

function xg(t) {
    return [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
}

function wc(t, e) {
    let n, r, o, i, a, s, c, d = [];
    for (n = e[0], r = e[1], o = e[2], i = e[3], a = e[4], c = 0; c < 80; c += 1) d[c] = c < 16 ? t[c] : Gr(d[c - 3] ^ d[c - 8] ^ d[c - 14] ^ d[c - 16], 1), s = c < 20 ? $o(Gr(n, 5), yc(r, o, i), a, 1518500249, d[c]) : c < 40 ? $o(Gr(n, 5), ic(r, o, i), a, 1859775393, d[c]) : c < 60 ? $o(Gr(n, 5), bc(r, o, i), a, 2400959708, d[c]) : $o(Gr(n, 5), ic(r, o, i), a, 3395469782, d[c]), a = i, i = o, o = Gr(r, 30), r = n, n = s;
    return e[0] = $t(n, e[0]), e[1] = $t(r, e[1]), e[2] = $t(o, e[2]), e[3] = $t(i, e[3]), e[4] = $t(a, e[4]), e
}

function vg(t, e, n, r) {
    let o, i = 15 + (e + 65 >>> 9 << 4),
        a = e + n;
    for (; t.length <= i;) t.push(0);
    for (t[e >>> 5] |= 128 << 24 - e % 32, t[i] = 4294967295 & a, t[i - 1] = a / Ho | 0, o = 0; o < t.length; o += 16) r = wc(t.slice(o, o + 16), r);
    return r
}
var Cg = class extends Yr {
    constructor(t, e, n) {
        if (t !== "SHA-1") throw new Error(Ko);
        super(t, e, n);
        let r = n || {};
        this.M = !0, this.g = this.Y, this.T = -1, this.C = Qr(this.t, this.i, this.T), this.v = wc, this.L = function(o) {
            return o.slice()
        }, this.B = xg, this.F = vg, this.U = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.m = 512, this.R = 160, this.K = !1, r.hmacKey && this.k(Xn("hmacKey", r.hmacKey, this.T))
    }
};

function ac(t) {
    let e;
    return e = t == "SHA-224" ? Nn.slice() : $n.slice(), e
}

function sc(t, e) {
    let n, r, o, i, a, s, c, d, h, f, b, w = [];
    for (n = e[0], r = e[1], o = e[2], i = e[3], a = e[4], s = e[5], c = e[6], d = e[7], b = 0; b < 64; b += 1) w[b] = b < 16 ? t[b] : yg(yn(S = w[b - 2], 17) ^ yn(S, 19) ^ mc(S, 10), w[b - 7], bg(w[b - 15]), w[b - 16]), h = $o(d, wg(a), yc(a, s, c), fe[b], w[b]), f = $t(mg(n), bc(n, r, o)), d = c, c = s, s = a, a = $t(i, h), i = o, o = r, r = n, n = $t(h, f);
    var S;
    return e[0] = $t(n, e[0]), e[1] = $t(r, e[1]), e[2] = $t(o, e[2]), e[3] = $t(i, e[3]), e[4] = $t(a, e[4]), e[5] = $t(s, e[5]), e[6] = $t(c, e[6]), e[7] = $t(d, e[7]), e
}
var Sg = class extends Yr {
        constructor(t, e, n) {
            if (t !== "SHA-224" && t !== "SHA-256") throw new Error(Ko);
            super(t, e, n);
            let r = n || {};
            this.g = this.Y, this.M = !0, this.T = -1, this.C = Qr(this.t, this.i, this.T), this.v = sc, this.L = function(o) {
                return o.slice()
            }, this.B = ac, this.F = function(o, i, a, s) {
                return function(c, d, h, f, b) {
                    let w, S, k = 15 + (d + 65 >>> 9 << 4),
                        $ = d + h;
                    for (; c.length <= k;) c.push(0);
                    for (c[d >>> 5] |= 128 << 24 - d % 32, c[k] = 4294967295 & $, c[k - 1] = $ / Ho | 0, w = 0; w < c.length; w += 16) f = sc(c.slice(w, w + 16), f);
                    return S = b === "SHA-224" ? [f[0], f[1], f[2], f[3], f[4], f[5], f[6]] : f, S
                }(o, i, a, s, t)
            }, this.U = ac(t), this.m = 512, this.R = t === "SHA-224" ? 224 : 256, this.K = !1, r.hmacKey && this.k(Xn("hmacKey", r.hmacKey, this.T))
        }
    },
    B = class {
        constructor(e, n) {
            this.N = e, this.I = n
        }
    };

function lc(t, e) {
    let n;
    return e > 32 ? (n = 64 - e, new B(t.I << e | t.N >>> n, t.N << e | t.I >>> n)) : e !== 0 ? (n = 32 - e, new B(t.N << e | t.I >>> n, t.I << e | t.N >>> n)) : t
}

function bn(t, e) {
    let n;
    return e < 32 ? (n = 32 - e, new B(t.N >>> e | t.I << n, t.I >>> e | t.N << n)) : (n = 64 - e, new B(t.I >>> e | t.N << n, t.N >>> e | t.I << n))
}

function xc(t, e) {
    return new B(t.N >>> e, t.I >>> e | t.N << 32 - e)
}

function kg(t, e, n) {
    return new B(t.N & e.N ^ t.N & n.N ^ e.N & n.N, t.I & e.I ^ t.I & n.I ^ e.I & n.I)
}

function Ag(t) {
    let e = bn(t, 28),
        n = bn(t, 34),
        r = bn(t, 39);
    return new B(e.N ^ n.N ^ r.N, e.I ^ n.I ^ r.I)
}

function ln(t, e) {
    let n, r;
    n = (65535 & t.I) + (65535 & e.I), r = (t.I >>> 16) + (e.I >>> 16) + (n >>> 16);
    let o = (65535 & r) << 16 | 65535 & n;
    return n = (65535 & t.N) + (65535 & e.N) + (r >>> 16), r = (t.N >>> 16) + (e.N >>> 16) + (n >>> 16), new B((65535 & r) << 16 | 65535 & n, o)
}

function Tg(t, e, n, r) {
    let o, i;
    o = (65535 & t.I) + (65535 & e.I) + (65535 & n.I) + (65535 & r.I), i = (t.I >>> 16) + (e.I >>> 16) + (n.I >>> 16) + (r.I >>> 16) + (o >>> 16);
    let a = (65535 & i) << 16 | 65535 & o;
    return o = (65535 & t.N) + (65535 & e.N) + (65535 & n.N) + (65535 & r.N) + (i >>> 16), i = (t.N >>> 16) + (e.N >>> 16) + (n.N >>> 16) + (r.N >>> 16) + (o >>> 16), new B((65535 & i) << 16 | 65535 & o, a)
}

function Bg(t, e, n, r, o) {
    let i, a;
    i = (65535 & t.I) + (65535 & e.I) + (65535 & n.I) + (65535 & r.I) + (65535 & o.I), a = (t.I >>> 16) + (e.I >>> 16) + (n.I >>> 16) + (r.I >>> 16) + (o.I >>> 16) + (i >>> 16);
    let s = (65535 & a) << 16 | 65535 & i;
    return i = (65535 & t.N) + (65535 & e.N) + (65535 & n.N) + (65535 & r.N) + (65535 & o.N) + (a >>> 16), a = (t.N >>> 16) + (e.N >>> 16) + (n.N >>> 16) + (r.N >>> 16) + (o.N >>> 16) + (i >>> 16), new B((65535 & a) << 16 | 65535 & i, s)
}

function No(t, e) {
    return new B(t.N ^ e.N, t.I ^ e.I)
}

function Ig(t) {
    let e = bn(t, 19),
        n = bn(t, 61),
        r = xc(t, 6);
    return new B(e.N ^ n.N ^ r.N, e.I ^ n.I ^ r.I)
}

function Eg(t) {
    let e = bn(t, 1),
        n = bn(t, 8),
        r = xc(t, 7);
    return new B(e.N ^ n.N ^ r.N, e.I ^ n.I ^ r.I)
}

function Rg(t) {
    let e = bn(t, 14),
        n = bn(t, 18),
        r = bn(t, 41);
    return new B(e.N ^ n.N ^ r.N, e.I ^ n.I ^ r.I)
}
var Ug = [new B(fe[0], 3609767458), new B(fe[1], 602891725), new B(fe[2], 3964484399), new B(fe[3], 2173295548), new B(fe[4], 4081628472), new B(fe[5], 3053834265), new B(fe[6], 2937671579), new B(fe[7], 3664609560), new B(fe[8], 2734883394), new B(fe[9], 1164996542), new B(fe[10], 1323610764), new B(fe[11], 3590304994), new B(fe[12], 4068182383), new B(fe[13], 991336113), new B(fe[14], 633803317), new B(fe[15], 3479774868), new B(fe[16], 2666613458), new B(fe[17], 944711139), new B(fe[18], 2341262773), new B(fe[19], 2007800933), new B(fe[20], 1495990901), new B(fe[21], 1856431235), new B(fe[22], 3175218132), new B(fe[23], 2198950837), new B(fe[24], 3999719339), new B(fe[25], 766784016), new B(fe[26], 2566594879), new B(fe[27], 3203337956), new B(fe[28], 1034457026), new B(fe[29], 2466948901), new B(fe[30], 3758326383), new B(fe[31], 168717936), new B(fe[32], 1188179964), new B(fe[33], 1546045734), new B(fe[34], 1522805485), new B(fe[35], 2643833823), new B(fe[36], 2343527390), new B(fe[37], 1014477480), new B(fe[38], 1206759142), new B(fe[39], 344077627), new B(fe[40], 1290863460), new B(fe[41], 3158454273), new B(fe[42], 3505952657), new B(fe[43], 106217008), new B(fe[44], 3606008344), new B(fe[45], 1432725776), new B(fe[46], 1467031594), new B(fe[47], 851169720), new B(fe[48], 3100823752), new B(fe[49], 1363258195), new B(fe[50], 3750685593), new B(fe[51], 3785050280), new B(fe[52], 3318307427), new B(fe[53], 3812723403), new B(fe[54], 2003034995), new B(fe[55], 3602036899), new B(fe[56], 1575990012), new B(fe[57], 1125592928), new B(fe[58], 2716904306), new B(fe[59], 442776044), new B(fe[60], 593698344), new B(fe[61], 3733110249), new B(fe[62], 2999351573), new B(fe[63], 3815920427), new B(3391569614, 3928383900), new B(3515267271, 566280711), new B(3940187606, 3454069534), new B(4118630271, 4000239992), new B(116418474, 1914138554), new B(174292421, 2731055270), new B(289380356, 3203993006), new B(460393269, 320620315), new B(685471733, 587496836), new B(852142971, 1086792851), new B(1017036298, 365543100), new B(1126000580, 2618297676), new B(1288033470, 3409855158), new B(1501505948, 4234509866), new B(1607167915, 987167468), new B(1816402316, 1246189591)];

function cc(t) {
    return t === "SHA-384" ? [new B(3418070365, Nn[0]), new B(1654270250, Nn[1]), new B(2438529370, Nn[2]), new B(355462360, Nn[3]), new B(1731405415, Nn[4]), new B(41048885895, Nn[5]), new B(3675008525, Nn[6]), new B(1203062813, Nn[7])] : [new B($n[0], 4089235720), new B($n[1], 2227873595), new B($n[2], 4271175723), new B($n[3], 1595750129), new B($n[4], 2917565137), new B($n[5], 725511199), new B($n[6], 4215389547), new B($n[7], 327033209)]
}

function uc(t, e) {
    let n, r, o, i, a, s, c, d, h, f, b, w, S = [];
    for (n = e[0], r = e[1], o = e[2], i = e[3], a = e[4], s = e[5], c = e[6], d = e[7], b = 0; b < 80; b += 1) b < 16 ? (w = 2 * b, S[b] = new B(t[w], t[w + 1])) : S[b] = Tg(Ig(S[b - 2]), S[b - 7], Eg(S[b - 15]), S[b - 16]), h = Bg(d, Rg(a), ($ = s, q = c, new B((k = a).N & $.N ^ ~k.N & q.N, k.I & $.I ^ ~k.I & q.I)), Ug[b], S[b]), f = ln(Ag(n), kg(n, r, o)), d = c, c = s, s = a, a = ln(i, h), i = o, o = r, r = n, n = ln(h, f);
    var k, $, q;
    return e[0] = ln(n, e[0]), e[1] = ln(r, e[1]), e[2] = ln(o, e[2]), e[3] = ln(i, e[3]), e[4] = ln(a, e[4]), e[5] = ln(s, e[5]), e[6] = ln(c, e[6]), e[7] = ln(d, e[7]), e
}
var Mg = class extends Yr {
        constructor(t, e, n) {
            if (t !== "SHA-384" && t !== "SHA-512") throw new Error(Ko);
            super(t, e, n);
            let r = n || {};
            this.g = this.Y, this.M = !0, this.T = -1, this.C = Qr(this.t, this.i, this.T), this.v = uc, this.L = function(o) {
                return o.slice()
            }, this.B = cc, this.F = function(o, i, a, s) {
                return function(c, d, h, f, b) {
                    let w, S, k = 31 + (d + 129 >>> 10 << 5),
                        $ = d + h;
                    for (; c.length <= k;) c.push(0);
                    for (c[d >>> 5] |= 128 << 24 - d % 32, c[k] = 4294967295 & $, c[k - 1] = $ / Ho | 0, w = 0; w < c.length; w += 32) f = uc(c.slice(w, w + 32), f);
                    return S = b === "SHA-384" ? [f[0].N, f[0].I, f[1].N, f[1].I, f[2].N, f[2].I, f[3].N, f[3].I, f[4].N, f[4].I, f[5].N, f[5].I] : [f[0].N, f[0].I, f[1].N, f[1].I, f[2].N, f[2].I, f[3].N, f[3].I, f[4].N, f[4].I, f[5].N, f[5].I, f[6].N, f[6].I, f[7].N, f[7].I], S
                }(o, i, a, s, t)
            }, this.U = cc(t), this.m = 1024, this.R = t === "SHA-384" ? 384 : 512, this.K = !1, r.hmacKey && this.k(Xn("hmacKey", r.hmacKey, this.T))
        }
    },
    Pg = [new B(0, 1), new B(0, 32898), new B(2147483648, 32906), new B(2147483648, 2147516416), new B(0, 32907), new B(0, 2147483649), new B(2147483648, 2147516545), new B(2147483648, 32777), new B(0, 138), new B(0, 136), new B(0, 2147516425), new B(0, 2147483658), new B(0, 2147516555), new B(2147483648, 139), new B(2147483648, 32905), new B(2147483648, 32771), new B(2147483648, 32770), new B(2147483648, 128), new B(0, 32778), new B(2147483648, 2147483658), new B(2147483648, 2147516545), new B(2147483648, 32896), new B(0, 2147483649), new B(2147483648, 2147516424)],
    _g = [
        [0, 36, 3, 41, 18],
        [1, 44, 10, 45, 2],
        [62, 6, 43, 15, 61],
        [28, 55, 25, 21, 56],
        [27, 20, 39, 8, 14]
    ];

function ls(t) {
    let e, n = [];
    for (e = 0; e < 5; e += 1) n[e] = [new B(0, 0), new B(0, 0), new B(0, 0), new B(0, 0), new B(0, 0)];
    return n
}

function Lg(t) {
    let e, n = [];
    for (e = 0; e < 5; e += 1) n[e] = t[e].slice();
    return n
}

function ji(t, e) {
    let n, r, o, i, a = [],
        s = [];
    if (t !== null)
        for (r = 0; r < t.length; r += 2) e[(r >>> 1) % 5][(r >>> 1) / 5 | 0] = No(e[(r >>> 1) % 5][(r >>> 1) / 5 | 0], new B(t[r + 1], t[r]));
    for (n = 0; n < 24; n += 1) {
        for (i = ls(), r = 0; r < 5; r += 1) a[r] = (c = e[r][0], d = e[r][1], h = e[r][2], f = e[r][3], b = e[r][4], new B(c.N ^ d.N ^ h.N ^ f.N ^ b.N, c.I ^ d.I ^ h.I ^ f.I ^ b.I));
        for (r = 0; r < 5; r += 1) s[r] = No(a[(r + 4) % 5], lc(a[(r + 1) % 5], 1));
        for (r = 0; r < 5; r += 1)
            for (o = 0; o < 5; o += 1) e[r][o] = No(e[r][o], s[r]);
        for (r = 0; r < 5; r += 1)
            for (o = 0; o < 5; o += 1) i[o][(2 * r + 3 * o) % 5] = lc(e[r][o], _g[r][o]);
        for (r = 0; r < 5; r += 1)
            for (o = 0; o < 5; o += 1) e[r][o] = No(i[r][o], new B(~i[(r + 1) % 5][o].N & i[(r + 2) % 5][o].N, ~i[(r + 1) % 5][o].I & i[(r + 2) % 5][o].I));
        e[0][0] = No(e[0][0], Pg[n])
    }
    var c, d, h, f, b;
    return e
}

function vc(t) {
    let e, n, r = 0,
        o = [0, 0],
        i = [4294967295 & t, t / Ho & 2097151];
    for (e = 6; e >= 0; e--) n = i[e >> 2] >>> 8 * e & 255, n === 0 && r === 0 || (o[r + 1 >> 2] |= n << 8 * (r + 1), r += 1);
    return r = r !== 0 ? r : 1, o[0] |= r, {
        value: r + 1 > 4 ? o : [o[0]],
        binLen: 8 + 8 * r
    }
}

function ss(t) {
    return zi(vc(t.binLen), t)
}

function dc(t, e) {
    let n, r = vc(e);
    r = zi(r, t);
    let o = e >>> 2,
        i = (o - r.value.length % o) % o;
    for (n = 0; n < i; n++) r.value.push(0);
    return r.value
}
var Wg = class extends Yr {
        constructor(t, e, n) {
            let r = 6,
                o = 0;
            super(t, e, n);
            let i = n || {};
            if (this.numRounds !== 1) {
                if (i.kmacKey || i.hmacKey) throw new Error(pc);
                if (this.o === "CSHAKE128" || this.o === "CSHAKE256") throw new Error("Cannot set numRounds for CSHAKE variants")
            }
            switch (this.T = 1, this.C = Qr(this.t, this.i, this.T), this.v = ji, this.L = Lg, this.B = ls, this.U = ls(), this.K = !1, t) {
                case "SHA3-224":
                    this.m = o = 1152, this.R = 224, this.M = !0, this.g = this.Y;
                    break;
                case "SHA3-256":
                    this.m = o = 1088, this.R = 256, this.M = !0, this.g = this.Y;
                    break;
                case "SHA3-384":
                    this.m = o = 832, this.R = 384, this.M = !0, this.g = this.Y;
                    break;
                case "SHA3-512":
                    this.m = o = 576, this.R = 512, this.M = !0, this.g = this.Y;
                    break;
                case "SHAKE128":
                    r = 31, this.m = o = 1344, this.R = -1, this.K = !0, this.M = !1, this.g = null;
                    break;
                case "SHAKE256":
                    r = 31, this.m = o = 1088, this.R = -1, this.K = !0, this.M = !1, this.g = null;
                    break;
                case "KMAC128":
                    r = 4, this.m = o = 1344, this.X(n), this.R = -1, this.K = !0, this.M = !1, this.g = this._;
                    break;
                case "KMAC256":
                    r = 4, this.m = o = 1088, this.X(n), this.R = -1, this.K = !0, this.M = !1, this.g = this._;
                    break;
                case "CSHAKE128":
                    this.m = o = 1344, r = this.O(n), this.R = -1, this.K = !0, this.M = !1, this.g = null;
                    break;
                case "CSHAKE256":
                    this.m = o = 1088, r = this.O(n), this.R = -1, this.K = !0, this.M = !1, this.g = null;
                    break;
                default:
                    throw new Error(Ko)
            }
            this.F = function(a, s, c, d, h) {
                return function(f, b, w, S, k, $, q) {
                    let P, F, re = 0,
                        L = [],
                        Z = k >>> 5,
                        N = b >>> 5;
                    for (P = 0; P < N && b >= k; P += Z) S = ji(f.slice(P, P + Z), S), b -= k;
                    for (f = f.slice(P), b %= k; f.length < Z;) f.push(0);
                    for (P = b >>> 3, f[P >> 2] ^= $ << P % 4 * 8, f[Z - 1] ^= 2147483648, S = ji(f, S); 32 * L.length < q && (F = S[re % 5][re / 5 | 0], L.push(F.I), !(32 * L.length >= q));) L.push(F.N), re += 1, 64 * re % k == 0 && (ji(null, S), re = 0);
                    return L
                }(a, s, 0, d, o, r, h)
            }, i.hmacKey && this.k(Xn("hmacKey", i.hmacKey, this.T))
        }
        O(t, e) {
            let n = function(o) {
                let i = o || {};
                return {
                    funcName: Xn("funcName", i.funcName, 1, {
                        value: [],
                        binLen: 0
                    }),
                    customization: Xn("Customization", i.customization, 1, {
                        value: [],
                        binLen: 0
                    })
                }
            }(t || {});
            e && (n.funcName = e);
            let r = zi(ss(n.funcName), ss(n.customization));
            if (n.customization.binLen !== 0 || n.funcName.binLen !== 0) {
                let o = dc(r, this.m >>> 3);
                for (let i = 0; i < o.length; i += this.m >>> 5) this.U = this.v(o.slice(i, i + (this.m >>> 5)), this.U), this.A += this.m;
                return 4
            }
            return 31
        }
        X(t) {
            let e = function(r) {
                let o = r || {};
                return {
                    kmacKey: Xn("kmacKey", o.kmacKey, 1),
                    funcName: {
                        value: [1128353099],
                        binLen: 32
                    },
                    customization: Xn("Customization", o.customization, 1, {
                        value: [],
                        binLen: 0
                    })
                }
            }(t || {});
            this.O(t, e.funcName);
            let n = dc(ss(e.kmacKey), this.m >>> 3);
            for (let r = 0; r < n.length; r += this.m >>> 5) this.U = this.v(n.slice(r, r + (this.m >>> 5)), this.U), this.A += this.m;
            this.H = !0
        }
        _(t) {
            let e = zi({
                value: this.h.slice(),
                binLen: this.u
            }, function(n) {
                let r, o, i = 0,
                    a = [0, 0],
                    s = [4294967295 & n, n / Ho & 2097151];
                for (r = 6; r >= 0; r--) o = s[r >> 2] >>> 8 * r & 255, o === 0 && i === 0 || (a[i >> 2] |= o << 8 * i, i += 1);
                return i = i !== 0 ? i : 1, a[i >> 2] |= i << 8 * i, {
                    value: i + 1 > 4 ? a : [a[0]],
                    binLen: 8 + 8 * i
                }
            }(t.outputLen));
            return this.F(e.value, e.binLen, this.A, this.L(this.U), t.outputLen)
        }
    },
    Zr = class {
        constructor(e, n, r) {
            if (e == "SHA-1") this.P = new Cg(e, n, r);
            else if (e == "SHA-224" || e == "SHA-256") this.P = new Sg(e, n, r);
            else if (e == "SHA-384" || e == "SHA-512") this.P = new Mg(e, n, r);
            else {
                if (e != "SHA3-224" && e != "SHA3-256" && e != "SHA3-384" && e != "SHA3-512" && e != "SHAKE128" && e != "SHAKE256" && e != "CSHAKE128" && e != "CSHAKE256" && e != "KMAC128" && e != "KMAC256") throw new Error(Ko);
                this.P = new Wg(e, n, r)
            }
        }
        update(e) {
            return this.P.update(e), this
        }
        getHash(e, n) {
            return this.P.getHash(e, n)
        }
        setHMACKey(e, n, r) {
            this.P.setHMACKey(e, n, r)
        }
        getHMAC(e, n) {
            return this.P.getHMAC(e, n)
        }
    };

function Oi(t) {
    let e;
    typeof t == "string" ? e = Xe(Vt(t)) : e = Xe(t);
    let n = new Zr("SHA-256", "HEX");
    n.update(e);
    let r = n.getHash("HEX");
    return vt(r)
}
var Og = Wi($i());
var Fg = Wi($i());

function cs(t, e, n) {
    let r, o = null;
    if (t === -1) {
        let b = 0;
        for (let w of n) b = b | w.mask.value;
        r = new Nt(b)
    } else if (t === 1) o = Wo(e, n), r = new Nt(o.mask);
    else if (t === 3) {
        let b = _o(e, n);
        r = new Nt(n[0].mask.value >> 1)
    } else if (t === 4) {
        let b = Lo(e, n);
        r = new Nt((n[0].mask.value | n[1].mask.value) >> 1)
    } else if (t === 2) {
        let b = Ki(e, n);
        r = new Nt
    } else throw new Error("Unsupported exotic type");
    let i = [],
        a = [],
        s = t === 1 ? 1 : r.hashCount,
        d = r.hashCount - s;
    for (let b = 0, w = 0; b <= r.level; b++) {
        if (!r.isSignificant(b)) continue;
        if (w < d) {
            w++;
            continue
        }
        let S;
        if (w === d) {
            if (!(b === 0 || t === 1)) throw Error("Invalid");
            S = e
        } else {
            if (!(b !== 0 && t !== 1)) throw Error("Invalid: " + b + ", " + t);
            S = new Ct(a[w - d - 1], 0, 256)
        }
        let k = 0;
        for (let F of n) {
            let re;
            t == 3 || t == 4 ? re = F.depth(b + 1) : re = F.depth(b), k = Math.max(k, re)
        }
        n.length > 0 && k++;
        let $ = Ql(e, S, n, b, r.apply(b).value, t),
            q = new Uint8Array(Oi($)),
            P = w - d;
        i[P] = k, a[P] = q, w++
    }
    let h = [],
        f = [];
    if (o)
        for (let b = 0; b < 4; b++) {
            let {
                hashIndex: w
            } = r.apply(b), {
                hashIndex: S
            } = r;
            w !== S ? (h.push(o.pruned[w].hash), f.push(o.pruned[w].depth)) : (h.push(a[0]), f.push(i[0]))
        } else
            for (let b = 0; b < 4; b++) h.push(a[r.apply(b).hashIndex]), f.push(i[r.apply(b).hashIndex]);
    return {
        mask: r,
        hashes: h,
        depths: f
    }
}

function Sc(t) {
    if (t.remainingBits % 8 !== 0) throw new Error("Invalid string length: ".concat(t.remainingBits));
    if (t.remainingRefs !== 0 && t.remainingRefs !== 1) throw new Error("invalid number of refs: ".concat(t.remainingRefs));
    let e;
    return t.remainingBits === 0 ? e = new Uint8Array(0) : e = t.loadBuffer(t.remainingBits / 8), t.remainingRefs === 1 && (e = Fr([e, Sc(t.loadRef().beginParse())])), e
}

function Vo(t) {
    return Po(Sc(t))
}

function kc(t, e) {
    if (t.length > 0) {
        let n = Math.floor(e.availableBits / 8);
        if (t.length > n) {
            let r = t.subarray(0, n),
                o = t.subarray(n);
            e = e.storeBuffer(r);
            let i = Ae();
            kc(o, i), e = e.storeRef(i.endCell())
        } else e = e.storeBuffer(t)
    }
}

function us(t, e) {
    kc(Vt(t), e)
}
var Ac;
Ac = rn;
var qi = class qi {
        constructor(e, n) {
            W(this, "_reader");
            W(this, "_refs");
            W(this, "_refsOffset");
            W(this, Ac, () => this.toString());
            this._reader = e.clone(), this._refs = [...n], this._refsOffset = 0
        }
        get remainingBits() {
            return this._reader.remaining
        }
        get offsetBits() {
            return this._reader.offset
        }
        get remainingRefs() {
            return this._refs.length - this._refsOffset
        }
        get offsetRefs() {
            return this._refsOffset
        }
        skip(e) {
            return this._reader.skip(e), this
        }
        loadBit() {
            return this._reader.loadBit()
        }
        preloadBit() {
            return this._reader.preloadBit()
        }
        loadBoolean() {
            return this.loadBit()
        }
        loadMaybeBoolean() {
            return this.loadBit() ? this.loadBoolean() : null
        }
        loadBits(e) {
            return this._reader.loadBits(e)
        }
        preloadBits(e) {
            return this._reader.preloadBits(e)
        }
        loadUint(e) {
            return this._reader.loadUint(e)
        }
        loadUintBig(e) {
            return this._reader.loadUintBig(e)
        }
        preloadUint(e) {
            return this._reader.preloadUint(e)
        }
        preloadUintBig(e) {
            return this._reader.preloadUintBig(e)
        }
        loadMaybeUint(e) {
            return this.loadBit() ? this.loadUint(e) : null
        }
        loadMaybeUintBig(e) {
            return this.loadBit() ? this.loadUintBig(e) : null
        }
        loadInt(e) {
            return this._reader.loadInt(e)
        }
        loadIntBig(e) {
            return this._reader.loadIntBig(e)
        }
        preloadInt(e) {
            return this._reader.preloadInt(e)
        }
        preloadIntBig(e) {
            return this._reader.preloadIntBig(e)
        }
        loadMaybeInt(e) {
            return this.loadBit() ? this.loadInt(e) : null
        }
        loadMaybeIntBig(e) {
            return this.loadBit() ? this.loadIntBig(e) : null
        }
        loadVarUint(e) {
            return this._reader.loadVarUint(e)
        }
        loadVarUintBig(e) {
            return this._reader.loadVarUintBig(e)
        }
        preloadVarUint(e) {
            return this._reader.preloadVarUint(e)
        }
        preloadVarUintBig(e) {
            return this._reader.preloadVarUintBig(e)
        }
        loadVarInt(e) {
            return this._reader.loadVarInt(e)
        }
        loadVarIntBig(e) {
            return this._reader.loadVarIntBig(e)
        }
        preloadVarInt(e) {
            return this._reader.preloadVarInt(e)
        }
        preloadVarIntBig(e) {
            return this._reader.preloadVarIntBig(e)
        }
        loadCoins() {
            return this._reader.loadCoins()
        }
        preloadCoins() {
            return this._reader.preloadCoins()
        }
        loadMaybeCoins() {
            return this._reader.loadBit() ? this._reader.loadCoins() : null
        }
        loadAddress() {
            return this._reader.loadAddress()
        }
        loadMaybeAddress() {
            return this._reader.loadMaybeAddress()
        }
        loadExternalAddress() {
            return this._reader.loadExternalAddress()
        }
        loadMaybeExternalAddress() {
            return this._reader.loadMaybeExternalAddress()
        }
        loadAddressAny() {
            return this._reader.loadAddressAny()
        }
        loadRef() {
            if (this._refsOffset >= this._refs.length) throw new Error("No more references");
            return this._refs[this._refsOffset++]
        }
        preloadRef() {
            if (this._refsOffset >= this._refs.length) throw new Error("No more references");
            return this._refs[this._refsOffset]
        }
        loadMaybeRef() {
            return this.loadBit() ? this.loadRef() : null
        }
        preloadMaybeRef() {
            return this.preloadBit() ? this.preloadRef() : null
        }
        loadBuffer(e) {
            return this._reader.loadBuffer(e)
        }
        preloadBuffer(e) {
            return this._reader.preloadBuffer(e)
        }
        loadStringTail() {
            return Vo(this)
        }
        loadMaybeStringTail() {
            return this.loadBit() ? Vo(this) : null
        }
        loadStringRefTail() {
            return Vo(this.loadRef().beginParse())
        }
        loadMaybeStringRefTail() {
            let e = this.loadMaybeRef();
            return e ? Vo(e.beginParse()) : null
        }
        loadDict(e, n) {
            return on.load(e, n, this)
        }
        loadDictDirect(e, n) {
            return on.loadDirect(e, n, this)
        }
        endParse() {
            if (this.remainingBits > 0 || this.remainingRefs > 0) throw new Error("Slice is not empty")
        }
        asCell() {
            return Ae().storeSlice(this).endCell()
        }
        asBuilder() {
            return Ae().storeSlice(this)
        }
        clone(e = !1) {
            if (e) {
                let n = this._reader.clone();
                return n.reset(), new qi(n, this._refs)
            } else {
                let n = new qi(this._reader, this._refs);
                return n._refsOffset = this._refsOffset, n
            }
        }
        toString() {
            return this.asCell().toString()
        }
    },
    Xr = qi;
var Tc;
Tc = rn;
var Jr = class Jr {
    constructor(e) {
        W(this, "type");
        W(this, "bits");
        W(this, "refs");
        W(this, "mask");
        W(this, "_hashes", []);
        W(this, "_depths", []);
        W(this, "beginParse", (e = !1) => {
            if (this.isExotic && !e) throw new Error("Exotic cells cannot be parsed");
            return new Xr(new Bt(this.bits), this.refs)
        });
        W(this, "hash", (e = 3) => this._hashes[Math.min(this._hashes.length - 1, e)]);
        W(this, "depth", (e = 3) => this._depths[Math.min(this._depths.length - 1, e)]);
        W(this, "level", () => this.mask.level);
        W(this, "equals", e => jt(this.hash(), e.hash()));
        W(this, Tc, () => this.toString());
        let n = Ct.EMPTY;
        e && e.bits && (n = e.bits);
        let r = [];
        e && e.refs && (r = [...e.refs]);
        let o, i, a, s = -1;
        if (e && e.exotic) {
            let c = Zl(n, r),
                d = cs(c.type, n, r);
            a = d.mask, i = d.depths, o = d.hashes, s = c.type
        } else {
            if (r.length > 4) throw new Error("Invalid number of references");
            if (n.length > 1023) throw new Error("Bits overflow: ".concat(n.length, " > 1023"));
            let c = cs(-1, n, r);
            a = c.mask, i = c.depths, o = c.hashes, s = -1
        }
        this.type = s, this.bits = n, this.refs = r, this.mask = a, this._depths = i, this._hashes = o, Object.freeze(this), Object.freeze(this.refs), Object.freeze(this.bits), Object.freeze(this.mask), Object.freeze(this._depths), Object.freeze(this._hashes)
    }
    static fromBoc(e) {
        return ec(e)
    }
    static fromBase64(e) {
        let n = Jr.fromBoc(Zn(e));
        if (n.length !== 1) throw new Error("Deserialized more than one cell");
        return n[0]
    }
    static fromHex(e) {
        let n = Jr.fromBoc(vt(e));
        if (n.length !== 1) throw new Error("Deserialized more than one cell");
        return n[0]
    }
    get isExotic() {
        return this.type !== -1
    }
    toBoc(e) {
        let n = e && e.idx !== null && e.idx !== void 0 ? e.idx : !1,
            r = e && e.crc32 !== null && e.crc32 !== void 0 ? e.crc32 : !0;
        return tc(this, {
            idx: n,
            crc32: r
        })
    }
    toBase64() {
        return pr(this.toBoc())
    }
    toString(e) {
        let n = e || "",
            r = "x";
        this.isExotic && (this.type === 3 ? r = "p" : this.type === 4 ? r = "u" : this.type === 1 && (r = "p"));
        let o = n + (this.isExotic ? r : "x") + "{" + this.bits.toString() + "}";
        for (let i in this.refs) {
            let a = this.refs[i];
            o += "\n" + a.toString(n + " ")
        }
        return o
    }
    asSlice() {
        return this.beginParse()
    }
    asBuilder() {
        return Ae().storeSlice(this.asSlice())
    }
};
W(Jr, "EMPTY", new Jr);
var Yt = Jr;

function Bc(t) {
    let e = 0;
    for (; t.loadBit();) e++;
    return e
}

function Zg(t) {
    return Ae().storeUint(1, 8).storeUint(1, 8).storeBuffer(t.hash(0)).storeUint(t.depth(0), 16).endCell({
        exotic: !0
    })
}

function ds(t, e, n, r) {
    let o = e.asCell();
    if (r.length == 0) return Zg(o);
    let i = e.loadBit() ? 1 : 0,
        a = 0,
        s = t;
    if (i === 0) {
        a = Bc(e);
        for (let c = 0; c < a; c++) s += e.loadBit() ? "1" : "0"
    } else if ((e.loadBit() ? 1 : 0) === 0) {
        a = e.loadUint(Math.ceil(Math.log2(n + 1)));
        for (let d = 0; d < a; d++) s += e.loadBit() ? "1" : "0"
    } else {
        let d = e.loadBit() ? "1" : "0";
        a = e.loadUint(Math.ceil(Math.log2(n + 1)));
        for (let h = 0; h < a; h++) s += d
    }
    if (n - a === 0) return o; {
        let c = o.beginParse(),
            d = c.loadRef(),
            h = c.loadRef();
        if (!d.isExotic) {
            let f = r.filter(b => s + "0" === b.slice(0, s.length + 1));
            d = ds(s + "0", d.beginParse(), n - a - 1, f)
        }
        if (!h.isExotic) {
            let f = r.filter(b => s + "1" === b.slice(0, s.length + 1));
            h = ds(s + "1", h.beginParse(), n - a - 1, f)
        }
        return Ae().storeSlice(c).storeRef(d).storeRef(h).endCell()
    }
}

function Gi(t, e, n) {
    e.forEach(o => {
        if (!t.has(o)) throw new Error('Trying to generate merkle proof for a missing key "'.concat(o, '"'))
    });
    let r = Ae().storeDictDirect(t).asSlice();
    return ds("", r, n.bits, e.map(o => n.serialize(o).toString(2).padStart(n.bits, "0")))
}

function eo(t, e, n) {
    return rs(Gi(t, e, n))
}

function Qg(t, e) {
    return Ae().storeUint(4, 8).storeBuffer(t.hash(0)).storeBuffer(e.hash(0)).storeUint(t.depth(0), 16).storeUint(e.depth(0), 16).storeRef(t).storeRef(e).endCell({
        exotic: !0
    })
}

function fs(t, e, n, r) {
    let o = eo(t, [e], n).refs[0];
    t.set(e, r);
    let i = eo(t, [e], n).refs[0];
    return Qg(o, i)
}

function Xg(t) {
    let e = 0;
    for (; t.loadBit();) e++;
    return e
}

function hs(t, e, n, r, o) {
    let i = e.loadBit() ? 1 : 0,
        a = 0,
        s = t;
    if (i === 0) {
        a = Xg(e);
        for (let c = 0; c < a; c++) s += e.loadBit() ? "1" : "0"
    } else if ((e.loadBit() ? 1 : 0) === 0) {
        a = e.loadUint(Math.ceil(Math.log2(n + 1)));
        for (let d = 0; d < a; d++) s += e.loadBit() ? "1" : "0"
    } else {
        let d = e.loadBit() ? "1" : "0";
        a = e.loadUint(Math.ceil(Math.log2(n + 1)));
        for (let h = 0; h < a; h++) s += d
    }
    if (n - a === 0) r.set(BigInt("0b" + s), o(e));
    else {
        let c = e.loadRef(),
            d = e.loadRef();
        c.isExotic || hs(s + "0", c.beginParse(), n - a - 1, r, o), d.isExotic || hs(s + "1", d.beginParse(), n - a - 1, r, o)
    }
}

function Ic(t, e, n) {
    let r = new Map;
    return t && hs("", t, e, r, n), r
}

function Ec(t, e = 0) {
    if (t.length === 0) return "";
    let n = t[0].slice(e);
    for (let r = 1; r < t.length; r++) {
        let o = t[r];
        for (; o.indexOf(n, e) !== e;)
            if (n = n.substring(0, n.length - 1), n === "") return n
    }
    return n
}

function Jg(t, e) {
    for (; t.length < e;) t = "0" + t;
    return t
}

function ep(t, e) {
    if (t.size === 0) throw Error("Internal inconsistency");
    let n = new Map,
        r = new Map;
    for (let [o, i] of t.entries()) o[e] === "0" ? n.set(o, i) : r.set(o, i);
    if (n.size === 0) throw Error("Internal inconsistency. Left emtpy.");
    if (r.size === 0) throw Error("Internal inconsistency. Right emtpy.");
    return {
        left: n,
        right: r
    }
}

function tp(t, e) {
    if (t.size === 0) throw Error("Internal inconsistency");
    if (t.size === 1) return {
        type: "leaf",
        value: Array.from(t.values())[0]
    };
    let {
        left: n,
        right: r
    } = ep(t, e);
    return {
        type: "fork",
        left: gs(n, e + 1),
        right: gs(r, e + 1)
    }
}

function gs(t, e = 0) {
    if (t.size === 0) throw Error("Internal inconsistency");
    let n = Ec(Array.from(t.keys()), e);
    return {
        label: n,
        node: tp(t, n.length + e)
    }
}

function np(t, e) {
    let n = new Map;
    for (let r of Array.from(t.keys())) {
        let o = Jg(r.toString(2), e);
        n.set(o, t.get(r))
    }
    return gs(n)
}

function rp(t, e) {
    e.storeBit(0);
    for (let n = 0; n < t.length; n++) e.storeBit(1);
    return e.storeBit(0), t.length > 0 && e.storeUint(BigInt("0b" + t), t.length), e
}

function op(t) {
    return 1 + t.length + 1 + t.length
}

function ip(t, e, n) {
    n.storeBit(1), n.storeBit(0);
    let r = Math.ceil(Math.log2(e + 1));
    return n.storeUint(t.length, r), t.length > 0 && n.storeUint(BigInt("0b" + t), t.length), n
}

function ap(t, e) {
    return 2 + Math.ceil(Math.log2(e + 1)) + t.length
}

function sp(t, e, n, r) {
    r.storeBit(1), r.storeBit(1), r.storeBit(t);
    let o = Math.ceil(Math.log2(n + 1));
    r.storeUint(e, o)
}

function lp(t) {
    return 3 + Math.ceil(Math.log2(t + 1))
}

function cp(t) {
    if (t.length === 0 || t.length === 1) return !0;
    for (let e = 1; e < t.length; e++)
        if (t[e] !== t[0]) return !1;
    return !0
}

function up(t, e) {
    let n = "short",
        r = op(t),
        o = ap(t, e);
    if (o < r && (r = o, n = "long"), cp(t)) {
        let i = lp(e);
        i < r && (r = i, n = "same")
    }
    return n
}

function dp(t, e, n) {
    let r = up(t, e);
    r === "short" ? rp(t, n) : r === "long" ? ip(t, e, n) : r === "same" && sp(t[0] === "1", t.length, e, n)
}

function fp(t, e, n, r) {
    if (t.type === "leaf" && n(t.value, r), t.type === "fork") {
        let o = Ae(),
            i = Ae();
        ps(t.left, e - 1, n, o), ps(t.right, e - 1, n, i), r.storeRef(o), r.storeRef(i)
    }
}

function ps(t, e, n, r) {
    dp(t.label, e, r), fp(t.node, e - t.label.length, n, r)
}

function ms(t, e, n, r) {
    let o = np(t, e);
    ps(o, e, n, r)
}

function to(t) {
    if (typeof t == "number") {
        if (!Number.isSafeInteger(t)) throw Error("Invalid key type: not a safe integer: " + t);
        return "n:" + t.toString(10)
    } else {
        if (typeof t == "bigint") return "b:" + t.toString(10);
        if (Dt.isAddress(t)) return "a:" + t.toString();
        if (t instanceof Uint8Array) return "f:" + Xe(t);
        if (Ct.isBitString(t)) return "B:" + t.toString();
        throw Error("Invalid key type")
    }
}

function jo(t) {
    let e = t.slice(0, 2),
        n = t.slice(2);
    if (e === "n:") return parseInt(n, 10);
    if (e === "b:") return BigInt(n);
    if (e === "a:") return Dt.parse(n);
    if (e === "f:") return vt(n);
    if (e === "B:") {
        let r = n.slice(-1) == "_";
        if (r || n.length % 2 != 0) {
            let i = r ? n.length - 1 : n.length,
                a = n.substr(0, i) + "0";
            return !r && i & 1 ? new Ct(vt(a), 0, i << 2) : Gl(vt(a))
        } else return new Ct(vt(n), 0, n.length << 2)
    }
    throw Error("Invalid key type: " + e)
}
var cn = class cn {
    constructor(e, n, r) {
        W(this, "_key");
        W(this, "_value");
        W(this, "_map");
        this._key = n, this._value = r, this._map = e
    }
    static empty(e, n) {
        return e && n ? new cn(new Map, e, n) : new cn(new Map, null, null)
    }
    static load(e, n, r) {
        let o;
        if (r instanceof Yt) {
            if (r.isExotic) return cn.empty(e, n);
            o = r.beginParse()
        } else o = r;
        let i = o.loadMaybeRef();
        return i && !i.isExotic ? cn.loadDirect(e, n, i.beginParse()) : cn.empty(e, n)
    }
    static loadDirect(e, n, r) {
        if (!r) return cn.empty(e, n);
        let o;
        r instanceof Yt ? o = r.beginParse() : o = r;
        let i = Ic(o, e.bits, n.parse),
            a = new Map;
        for (let [s, c] of i) a.set(to(e.parse(s)), c);
        return new cn(a, e, n)
    }
    get size() {
        return this._map.size
    }
    get(e) {
        return this._map.get(to(e))
    }
    has(e) {
        return this._map.has(to(e))
    }
    set(e, n) {
        return this._map.set(to(e), n), this
    }
    delete(e) {
        let n = to(e);
        return this._map.delete(n)
    }
    clear() {
        this._map.clear()
    }*[Symbol.iterator]() {
        for (let [e, n] of this._map) yield [jo(e), n]
    }
    keys() {
        return Array.from(this._map.keys()).map(e => jo(e))
    }
    values() {
        return Array.from(this._map.values())
    }
    store(e, n, r) {
        if (this._map.size === 0) e.storeBit(0);
        else {
            let o = this._key;
            n != null && (o = n);
            let i = this._value;
            if (r != null && (i = r), !o) throw Error("Key serializer is not defined");
            if (!i) throw Error("Value serializer is not defined");
            let a = new Map;
            for (let [c, d] of this._map) a.set(o.serialize(jo(c)), d);
            e.storeBit(1);
            let s = Ae();
            ms(a, o.bits, i.serialize, s), e.storeRef(s.endCell())
        }
    }
    storeDirect(e, n, r) {
        if (this._map.size === 0) throw Error("Cannot store empty dictionary directly");
        let o = this._key;
        n != null && (o = n);
        let i = this._value;
        if (r != null && (i = r), !o) throw Error("Key serializer is not defined");
        if (!i) throw Error("Value serializer is not defined");
        let a = new Map;
        for (let [s, c] of this._map) a.set(o.serialize(jo(s)), c);
        ms(a, o.bits, i.serialize, e)
    }
    generateMerkleProof(e) {
        return eo(this, e, this._key)
    }
    generateMerkleProofDirect(e) {
        return Gi(this, e, this._key)
    }
    generateMerkleUpdate(e, n) {
        return fs(this, e, this._key, n)
    }
};
W(cn, "Keys", {
    Address: () => hp(),
    BigInt: e => gp(e),
    Int: e => pp(e),
    BigUint: e => mp(e),
    Uint: e => yp(e),
    Uint8Array: e => bp(e),
    BitString: e => wp(e)
}), W(cn, "Values", {
    BigInt: e => vp(e),
    Int: e => xp(e),
    BigVarInt: e => Cp(e),
    BigUint: e => Ap(e),
    Uint: e => kp(e),
    BigVarUint: e => Sp(e),
    Bool: () => Tp(),
    Address: () => Bp(),
    Cell: () => Ip(),
    Buffer: e => Rp(e),
    BitString: e => Up(e),
    Dictionary: (e, n) => Ep(e, n)
});
var on = cn;

function hp() {
    return {
        bits: 267,
        serialize: t => {
            if (!Dt.isAddress(t)) throw Error("Key is not an address");
            return Ae().storeAddress(t).endCell().beginParse().preloadUintBig(267)
        },
        parse: t => Ae().storeUint(t, 267).endCell().beginParse().loadAddress()
    }
}

function gp(t) {
    return {
        bits: t,
        serialize: e => {
            if (typeof e != "bigint") throw Error("Key is not a bigint");
            return Ae().storeInt(e, t).endCell().beginParse().loadUintBig(t)
        },
        parse: e => Ae().storeUint(e, t).endCell().beginParse().loadIntBig(t)
    }
}

function pp(t) {
    return {
        bits: t,
        serialize: e => {
            if (typeof e != "number") throw Error("Key is not a number");
            if (!Number.isSafeInteger(e)) throw Error("Key is not a safe integer: " + e);
            return Ae().storeInt(e, t).endCell().beginParse().loadUintBig(t)
        },
        parse: e => Ae().storeUint(e, t).endCell().beginParse().loadInt(t)
    }
}

function mp(t) {
    return {
        bits: t,
        serialize: e => {
            if (typeof e != "bigint") throw Error("Key is not a bigint");
            if (e < 0) throw Error("Key is negative: " + e);
            return Ae().storeUint(e, t).endCell().beginParse().loadUintBig(t)
        },
        parse: e => Ae().storeUint(e, t).endCell().beginParse().loadUintBig(t)
    }
}

function yp(t) {
    return {
        bits: t,
        serialize: e => {
            if (typeof e != "number") throw Error("Key is not a number");
            if (!Number.isSafeInteger(e)) throw Error("Key is not a safe integer: " + e);
            if (e < 0) throw Error("Key is negative: " + e);
            return Ae().storeUint(e, t).endCell().beginParse().loadUintBig(t)
        },
        parse: e => Number(Ae().storeUint(e, t).endCell().beginParse().loadUint(t))
    }
}

function bp(t) {
    return {
        bits: t * 8,
        serialize: e => {
            if (!(e instanceof Uint8Array)) throw Error("Key is not a buffer");
            return Ae().storeBuffer(e).endCell().beginParse().loadUintBig(t * 8)
        },
        parse: e => Ae().storeUint(e, t * 8).endCell().beginParse().loadBuffer(t)
    }
}

function wp(t) {
    return {
        bits: t,
        serialize: e => {
            if (!Ct.isBitString(e)) throw Error("Key is not a BitString");
            return Ae().storeBits(e).endCell().beginParse().loadUintBig(t)
        },
        parse: e => Ae().storeUint(e, t).endCell().beginParse().loadBits(t)
    }
}

function xp(t) {
    return {
        serialize: (e, n) => {
            n.storeInt(e, t)
        },
        parse: e => e.loadInt(t)
    }
}

function vp(t) {
    return {
        serialize: (e, n) => {
            n.storeInt(e, t)
        },
        parse: e => e.loadIntBig(t)
    }
}

function Cp(t) {
    return {
        serialize: (e, n) => {
            n.storeVarInt(e, t)
        },
        parse: e => e.loadVarIntBig(t)
    }
}

function Sp(t) {
    return {
        serialize: (e, n) => {
            n.storeVarUint(e, t)
        },
        parse: e => e.loadVarUintBig(t)
    }
}

function kp(t) {
    return {
        serialize: (e, n) => {
            n.storeUint(e, t)
        },
        parse: e => e.loadUint(t)
    }
}

function Ap(t) {
    return {
        serialize: (e, n) => {
            n.storeUint(e, t)
        },
        parse: e => e.loadUintBig(t)
    }
}

function Tp() {
    return {
        serialize: (t, e) => {
            e.storeBit(t)
        },
        parse: t => t.loadBit()
    }
}

function Bp() {
    return {
        serialize: (t, e) => {
            e.storeAddress(t)
        },
        parse: t => t.loadAddress()
    }
}

function Ip() {
    return {
        serialize: (t, e) => {
            e.storeRef(t)
        },
        parse: t => t.loadRef()
    }
}

function Ep(t, e) {
    return {
        serialize: (n, r) => {
            n.store(r)
        },
        parse: n => on.load(t, e, n)
    }
}

function Rp(t) {
    return {
        serialize: (e, n) => {
            if (e.length !== t) throw Error("Invalid buffer size");
            n.storeBuffer(e)
        },
        parse: e => e.loadBuffer(t)
    }
}

function Up(t) {
    return {
        serialize: (e, n) => {
            if (e.length !== t) throw Error("Invalid BitString size");
            n.storeBits(e)
        },
        parse: e => e.loadBits(t)
    }
}

function Ae() {
    return new Yi
}
var Yi = class t {
    constructor() {
        W(this, "_bits");
        W(this, "_refs");
        this._bits = new Dn, this._refs = []
    }
    get bits() {
        return this._bits.length
    }
    get refs() {
        return this._refs.length
    }
    get availableBits() {
        return 1023 - this.bits
    }
    get availableRefs() {
        return 4 - this.refs
    }
    storeBit(e) {
        return this._bits.writeBit(e), this
    }
    storeBits(e) {
        return this._bits.writeBits(e), this
    }
    storeBuffer(e, n) {
        if (n != null && e.length !== n) throw Error("Buffer length ".concat(e.length, " is not equal to ").concat(n));
        return this._bits.writeBuffer(e), this
    }
    storeMaybeBuffer(e, n) {
        return e !== null ? (this.storeBit(1), this.storeBuffer(e, n)) : this.storeBit(0), this
    }
    storeUint(e, n) {
        return this._bits.writeUint(e, n), this
    }
    storeMaybeUint(e, n) {
        return e != null ? (this.storeBit(1), this.storeUint(e, n)) : this.storeBit(0), this
    }
    storeInt(e, n) {
        return this._bits.writeInt(e, n), this
    }
    storeMaybeInt(e, n) {
        return e != null ? (this.storeBit(1), this.storeInt(e, n)) : this.storeBit(0), this
    }
    storeVarUint(e, n) {
        return this._bits.writeVarUint(e, n), this
    }
    storeMaybeVarUint(e, n) {
        return e != null ? (this.storeBit(1), this.storeVarUint(e, n)) : this.storeBit(0), this
    }
    storeVarInt(e, n) {
        return this._bits.writeVarInt(e, n), this
    }
    storeMaybeVarInt(e, n) {
        return e != null ? (this.storeBit(1), this.storeVarInt(e, n)) : this.storeBit(0), this
    }
    storeCoins(e) {
        return this._bits.writeCoins(e), this
    }
    storeMaybeCoins(e) {
        return e != null ? (this.storeBit(1), this.storeCoins(e)) : this.storeBit(0), this
    }
    storeAddress(e) {
        return this._bits.writeAddress(e), this
    }
    storeRef(e) {
        if (this._refs.length >= 4) throw new Error("Too many references");
        if (e instanceof Yt) this._refs.push(e);
        else if (e instanceof t) this._refs.push(e.endCell());
        else throw new Error("Invalid argument");
        return this
    }
    storeMaybeRef(e) {
        return e ? (this.storeBit(1), this.storeRef(e)) : this.storeBit(0), this
    }
    storeSlice(e) {
        let n = e.clone();
        for (n.remainingBits > 0 && this.storeBits(n.loadBits(n.remainingBits)); n.remainingRefs > 0;) this.storeRef(n.loadRef());
        return this
    }
    storeMaybeSlice(e) {
        return e ? (this.storeBit(1), this.storeSlice(e)) : this.storeBit(0), this
    }
    storeBuilder(e) {
        return this.storeSlice(e.endCell().beginParse())
    }
    storeMaybeBuilder(e) {
        return e ? (this.storeBit(1), this.storeBuilder(e)) : this.storeBit(0), this
    }
    storeWritable(e) {
        return typeof e == "object" ? e.writeTo(this) : e(this), this
    }
    storeMaybeWritable(e) {
        return e ? (this.storeBit(1), this.storeWritable(e)) : this.storeBit(0), this
    }
    store(e) {
        return this.storeWritable(e), this
    }
    storeStringTail(e) {
        return us(e, this), this
    }
    storeMaybeStringTail(e) {
        return e != null ? (this.storeBit(1), us(e, this)) : this.storeBit(0), this
    }
    storeStringRefTail(e) {
        return this.storeRef(Ae().storeStringTail(e)), this
    }
    storeMaybeStringRefTail(e) {
        return e != null ? (this.storeBit(1), this.storeStringRefTail(e)) : this.storeBit(0), this
    }
    storeDict(e, n, r) {
        return e ? e.store(this, n, r) : this.storeBit(0), this
    }
    storeDictDirect(e, n, r) {
        return e.storeDirect(this, n, r), this
    }
    endCell(e) {
        return new Yt({
            bits: this._bits.build(),
            refs: this._refs,
            exotic: e == null ? void 0 : e.exotic
        })
    }
    asCell() {
        return this.endCell()
    }
    asSlice() {
        return this.endCell().beginParse()
    }
};
var S7 = BigInt("-9223372036854775808"),
    k7 = BigInt("9223372036854775807");
var oB = new Int16Array([0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920]);

function E0(t, e) {
    let n = pr(t);
    return e ? encodeURIComponent(n) : n
}

function R0(t, e) {
    return e && (t = decodeURIComponent(t)), Zn(t)
}

function U0(t, e = !1) {
    let n;
    return t instanceof Uint8Array ? n = t : (typeof t != "string" && (t = JSON.stringify(t)), n = Vt(t)), E0(n, e)
}

function M0(t, e = !1) {
    let n = R0(t, e);
    return {
        toString() {
            return Po(n)
        },
        toObject() {
            try {
                return JSON.parse(Po(n))
            } catch {
                return null
            }
        },
        toUint8Array() {
            return n
        }
    }
}
var xr = {
    encode: U0,
    decode: M0
};

function bs(t, e) {
    let n = new Uint8Array(t.length + e.length);
    return n.set(t), n.set(e, t.length), n
}

function ws(t, e) {
    if (e >= t.length) throw new Error("Index is out of buffer");
    let n = t.slice(0, e),
        r = t.slice(e);
    return [n, r]
}
var er = class {
    constructor(e) {
        W(this, "nonceLength", 24);
        W(this, "keyPair");
        W(this, "sessionId");
        this.keyPair = e ? this.createKeypairFromString(e) : this.createKeypair(), this.sessionId = Xe(this.keyPair.publicKey)
    }
    createKeypair() {
        return zo.default.box.keyPair()
    }
    createKeypairFromString(e) {
        return {
            publicKey: vt(e.publicKey),
            secretKey: vt(e.secretKey)
        }
    }
    createNonce() {
        return zo.default.randomBytes(this.nonceLength)
    }
    encrypt(e, n) {
        let r = new TextEncoder().encode(e),
            o = this.createNonce(),
            i = zo.default.box(r, o, n, this.keyPair.secretKey);
        return bs(o, i)
    }
    decrypt(e, n) {
        let [r, o] = ws(e, this.nonceLength), i = zo.default.box.open(o, r, n, this.keyPair.secretKey);
        if (!i) throw new Error("Decryption error");
        return new TextDecoder().decode(i)
    }
    stringifyKeypair() {
        return {
            publicKey: Xe(this.keyPair.publicKey),
            secretKey: Xe(this.keyPair.secretKey)
        }
    }
};
var vr = class t extends oe {
    get info() {
        return "User rejects the action in the wallet."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var Cr = class t extends oe {
    get info() {
        return "Request to the wallet contains errors."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var Sr = class t extends oe {
    get info() {
        return "App tries to send rpc request to the injected wallet while not connected."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var Oo = class t extends oe {
    get info() {
        return "There is an attempt to connect to the injected wallet while it is not exists in the webpage."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var tr = class t extends oe {
    get info() {
        return "Passed address is in incorrect format."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var no = class t extends oe {
    get info() {
        return "Passed hex is in incorrect format."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var un = class t extends oe {
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};
var _c = {
        0: un,
        300: vr,
        1: Cr,
        100: Sr,
        2: zr,
        3: jr
    },
    xs = class {
        parseError(e) {
            let n = un;
            return e.code in _c && (n = _c[e.code] || un), new n(e.message)
        }
    },
    Lc = new xs;
var Qi = class {
    isError(e) {
        return "error" in e
    }
};
var Wc = {
        0: un,
        300: vr,
        1: Cr,
        100: Sr
    },
    vs = class extends Qi {
        convertToRpcRequest(e) {
            return {
                method: "sendTransaction",
                params: [JSON.stringify(e)]
            }
        }
        parseAndThrowError(e) {
            let n = un;
            throw e.error.code in Wc && (n = Wc[e.error.code] || un), new n(e.error.message)
        }
        convertFromRpcResponse(e) {
            return {
                boc: e.result
            }
        }
    },
    Fo = new vs;
var Xi = class {
    constructor(e, n) {
        this.storage = e;
        W(this, "storeKey");
        this.storeKey = "ton-connect-storage_http-bridge-gateway::" + n
    }
    async storeLastEventId(e) {
        return this.storage.setItem(this.storeKey, e)
    }
    async removeLastEventId() {
        return this.storage.removeItem(this.storeKey)
    }
    async getLastEventId() {
        let e = await this.storage.getItem(this.storeKey);
        return e || null
    }
};

function Ut(t) {
    let e = new AbortController;
    return t != null && t.aborted ? e.abort() : t == null || t.addEventListener("abort", () => e.abort(), {
        once: !0
    }), e
}
async function Ji(t, e) {
    return new Promise((n, r) => {
        var i, a;
        if ((i = e == null ? void 0 : e.signal) != null && i.aborted) {
            r(new oe("Delay aborted"));
            return
        }
        let o = setTimeout(() => n(), t);
        (a = e == null ? void 0 : e.signal) == null || a.addEventListener("abort", () => {
            clearTimeout(o), r(new oe("Delay aborted"))
        })
    })
}
async function nr(t, e) {
    var s, c;
    let n = (s = e == null ? void 0 : e.attempts) != null ? s : 10,
        r = (c = e == null ? void 0 : e.delayMs) != null ? c : 200,
        o = Ut(e == null ? void 0 : e.signal);
    if (typeof t != "function") throw new oe("Expected a function, got ".concat(typeof t));
    let i = 0,
        a;
    for (; i < n;) {
        if (o.signal.aborted) throw new oe("Aborted after attempts ".concat(i));
        try {
            return await t({
                signal: o.signal
            })
        } catch (d) {
            a = d, i++, i < n && await Ji(r)
        }
    }
    throw a
}

function dt(...t) {
    try {
        console.debug("[TON_CONNECT_SDK]", ...t)
    } catch {}
}

function wn(...t) {
    try {
        console.error("[TON_CONNECT_SDK]", ...t)
    } catch {}
}

function Dc(...t) {
    try {
        console.warn("[TON_CONNECT_SDK]", ...t)
    } catch {}
}

function Nc(t, e) {
    let n = null,
        r = null,
        o = null,
        i = null,
        a = null,
        s = async (f, ...b) => {
            if (i = f != null ? f : null, a == null || a.abort(), a = Ut(f), a.signal.aborted) throw new oe("Resource creation was aborted");
            r = b != null ? b : null;
            let w = t(a.signal, ...b);
            o = w;
            let S = await w;
            if (o !== w && S !== n) throw await e(S), new oe("Resource creation was aborted by a new resource creation");
            return n = S, n
        };
    return {
        create: s,
        current: () => n != null ? n : null,
        dispose: async () => {
            try {
                let f = n;
                n = null;
                let b = o;
                o = null;
                try {
                    a == null || a.abort()
                } catch {}
                await Promise.allSettled([f ? e(f) : Promise.resolve(), b ? e(await b) : Promise.resolve()])
            } catch {}
        },
        recreate: async f => {
            let b = n,
                w = o,
                S = r,
                k = i;
            if (await Ji(f), b === n && w === o && S === r && k === i) return await s(i, ...S != null ? S : []);
            throw new oe("Resource recreation was aborted by a new resource creation")
        }
    }
}

function $c(t, e) {
    let n = e == null ? void 0 : e.timeout,
        r = e == null ? void 0 : e.signal,
        o = Ut(r);
    return new Promise(async (i, a) => {
        if (o.signal.aborted) {
            a(new oe("Operation aborted"));
            return
        }
        let s;
        typeof n < "u" && (s = setTimeout(() => {
            o.abort(), a(new oe("Timeout after ".concat(n, "ms")))
        }, n)), o.signal.addEventListener("abort", () => {
            clearTimeout(s), a(new oe("Operation aborted"))
        }, {
            once: !0
        });
        let c = {
            timeout: n,
            abort: o.signal
        };
        await t((...d) => {
            clearTimeout(s), i(...d)
        }, () => {
            clearTimeout(s), a()
        }, c)
    })
}

function P0(t) {
    return t.slice(-1) === "/" ? t.slice(0, -1) : t
}

function Cs(t, e) {
    return P0(t) + "/" + e
}

function dn(t) {
    if (!t) return !1;
    let e = new URL(t);
    return e.protocol === "tg:" || e.hostname === "t.me"
}

function qo(t) {
    return t.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--")
}
var ro = class {
    constructor(e, n, r, o, i) {
        this.bridgeUrl = n;
        this.sessionId = r;
        this.listener = o;
        this.errorsListener = i;
        W(this, "ssePath", "events");
        W(this, "postPath", "message");
        W(this, "heartbeatMessage", "heartbeat");
        W(this, "defaultTtl", 300);
        W(this, "defaultReconnectDelay", 2e3);
        W(this, "defaultResendDelay", 5e3);
        W(this, "eventSource", Nc(async (e, n) => {
            let r = {
                bridgeUrl: this.bridgeUrl,
                ssePath: this.ssePath,
                sessionId: this.sessionId,
                bridgeGatewayStorage: this.bridgeGatewayStorage,
                errorHandler: this.errorsHandler.bind(this),
                messageHandler: this.messagesHandler.bind(this),
                signal: e,
                openingDeadlineMS: n
            };
            return await _0(r)
        }, async e => {
            e.close()
        }));
        W(this, "bridgeGatewayStorage");
        this.bridgeGatewayStorage = new Xi(e, n)
    }
    get isReady() {
        let e = this.eventSource.current();
        return (e == null ? void 0 : e.readyState) === EventSource.OPEN
    }
    get isClosed() {
        let e = this.eventSource.current();
        return (e == null ? void 0 : e.readyState) !== EventSource.OPEN
    }
    get isConnecting() {
        let e = this.eventSource.current();
        return (e == null ? void 0 : e.readyState) === EventSource.CONNECTING
    }
    async registerSession(e) {
        await this.eventSource.create(e == null ? void 0 : e.signal, e == null ? void 0 : e.openingDeadlineMS)
    }
    async send(e, n, r, o) {
        var c;
        let i = {};
        typeof o == "number" ? i.ttl = o : (i.ttl = o == null ? void 0 : o.ttl, i.signal = o == null ? void 0 : o.signal, i.attempts = o == null ? void 0 : o.attempts);
        let a = new URL(Cs(this.bridgeUrl, this.postPath));
        a.searchParams.append("client_id", this.sessionId), a.searchParams.append("to", n), a.searchParams.append("ttl", ((i == null ? void 0 : i.ttl) || this.defaultTtl).toString()), a.searchParams.append("topic", r);
        let s = xr.encode(e);
        await nr(async d => {
            let h = await this.post(a, s, d.signal);
            if (!h.ok) throw new oe("Bridge send failed, status ".concat(h.status))
        }, {
            attempts: (c = i == null ? void 0 : i.attempts) != null ? c : Number.MAX_SAFE_INTEGER,
            delayMs: this.defaultResendDelay,
            signal: i == null ? void 0 : i.signal
        })
    }
    pause() {
        this.eventSource.dispose().catch(e => wn("Bridge pause failed, ".concat(e)))
    }
    async unPause() {
        await this.eventSource.recreate(0)
    }
    async close() {
        await this.eventSource.dispose().catch(e => wn("Bridge close failed, ".concat(e)))
    }
    setListener(e) {
        this.listener = e
    }
    setErrorsListener(e) {
        this.errorsListener = e
    }
    async post(e, n, r) {
        let o = await fetch(e, {
            method: "post",
            body: n,
            signal: r
        });
        if (!o.ok) throw new oe("Bridge send failed, status ".concat(o.status));
        return o
    }
    async errorsHandler(e, n) {
        if (this.isConnecting) throw e.close(), new oe("Bridge error, failed to connect");
        if (this.isReady) {
            try {
                this.errorsListener(n)
            } catch {}
            return
        }
        if (this.isClosed) return e.close(), dt("Bridge reconnecting, ".concat(this.defaultReconnectDelay, "ms delay")), await this.eventSource.recreate(this.defaultReconnectDelay);
        throw new oe("Bridge error, unknown state")
    }
    async messagesHandler(e) {
        if (e.data === this.heartbeatMessage || (await this.bridgeGatewayStorage.storeLastEventId(e.lastEventId), this.isClosed)) return;
        let n;
        try {
            n = JSON.parse(e.data)
        } catch (r) {
            throw new oe("Bridge message parse failed, message ".concat(r.data))
        }
        this.listener(n)
    }
};
async function _0(t) {
    return await $c(async (e, n, r) => {
        var d;
        let i = Ut(r.signal).signal;
        if (i.aborted) {
            n(new oe("Bridge connection aborted"));
            return
        }
        let a = new URL(Cs(t.bridgeUrl, t.ssePath));
        a.searchParams.append("client_id", t.sessionId);
        let s = await t.bridgeGatewayStorage.getLastEventId();
        if (s && a.searchParams.append("last_event_id", s), i.aborted) {
            n(new oe("Bridge connection aborted"));
            return
        }
        let c = new EventSource(a.toString());
        c.onerror = async h => {
            if (i.aborted) {
                c.close(), n(new oe("Bridge connection aborted"));
                return
            }
            try {
                let f = await t.errorHandler(c, h);
                f !== c && c.close(), f && f !== c && e(f)
            } catch (f) {
                c.close(), n(f)
            }
        }, c.onopen = () => {
            if (i.aborted) {
                c.close(), n(new oe("Bridge connection aborted"));
                return
            }
            e(c)
        }, c.onmessage = h => {
            if (i.aborted) {
                c.close(), n(new oe("Bridge connection aborted"));
                return
            }
            t.messageHandler(h)
        }, (d = t.signal) == null || d.addEventListener("abort", () => {
            c.close(), n(new oe("Bridge connection aborted"))
        })
    }, {
        timeout: t.openingDeadlineMS,
        signal: t.signal
    })
}

function kr(t) {
    return !("connectEvent" in t)
}
var xn = class {
    constructor(e) {
        this.storage = e;
        W(this, "storeKey", "ton-connect-storage_bridge-connection")
    }
    async storeConnection(e) {
        if (e.type === "injected") return this.storage.setItem(this.storeKey, JSON.stringify(e));
        if (!kr(e)) {
            let r = {
                    sessionKeyPair: e.session.sessionCrypto.stringifyKeypair(),
                    walletPublicKey: e.session.walletPublicKey,
                    bridgeUrl: e.session.bridgeUrl
                },
                o = {
                    type: "http",
                    connectEvent: e.connectEvent,
                    session: r,
                    lastWalletEventId: e.lastWalletEventId,
                    nextRpcRequestId: e.nextRpcRequestId
                };
            return this.storage.setItem(this.storeKey, JSON.stringify(o))
        }
        let n = {
            type: "http",
            connectionSource: e.connectionSource,
            sessionCrypto: e.sessionCrypto.stringifyKeypair()
        };
        return this.storage.setItem(this.storeKey, JSON.stringify(n))
    }
    async removeConnection() {
        return this.storage.removeItem(this.storeKey)
    }
    async getConnection() {
        let e = await this.storage.getItem(this.storeKey);
        if (!e) return null;
        let n = JSON.parse(e);
        if (n.type === "injected") return n;
        if ("connectEvent" in n) {
            let r = new er(n.session.sessionKeyPair);
            return {
                type: "http",
                connectEvent: n.connectEvent,
                lastWalletEventId: n.lastWalletEventId,
                nextRpcRequestId: n.nextRpcRequestId,
                session: {
                    sessionCrypto: r,
                    bridgeUrl: n.session.bridgeUrl,
                    walletPublicKey: n.session.walletPublicKey
                }
            }
        }
        return {
            type: "http",
            sessionCrypto: new er(n.sessionCrypto),
            connectionSource: n.connectionSource
        }
    }
    async getHttpConnection() {
        let e = await this.getConnection();
        if (!e) throw new oe("Trying to read HTTP connection source while nothing is stored");
        if (e.type === "injected") throw new oe("Trying to read HTTP connection source while injected connection is stored");
        return e
    }
    async getHttpPendingConnection() {
        let e = await this.getConnection();
        if (!e) throw new oe("Trying to read HTTP connection source while nothing is stored");
        if (e.type === "injected") throw new oe("Trying to read HTTP connection source while injected connection is stored");
        if (!kr(e)) throw new oe("Trying to read HTTP-pending connection while http connection is stored");
        return e
    }
    async getInjectedConnection() {
        let e = await this.getConnection();
        if (!e) throw new oe("Trying to read Injected bridge connection source while nothing is stored");
        if ((e == null ? void 0 : e.type) === "http") throw new oe("Trying to read Injected bridge connection source while HTTP connection is stored");
        return e
    }
    async storedConnectionType() {
        let e = await this.storage.getItem(this.storeKey);
        return e ? JSON.parse(e).type : null
    }
    async storeLastWalletEventId(e) {
        let n = await this.getConnection();
        if (n && n.type === "http" && !kr(n)) return n.lastWalletEventId = e, this.storeConnection(n)
    }
    async getLastWalletEventId() {
        let e = await this.getConnection();
        if (e && "lastWalletEventId" in e) return e.lastWalletEventId
    }
    async increaseNextRpcRequestId() {
        let e = await this.getConnection();
        if (e && "nextRpcRequestId" in e) {
            let n = e.nextRpcRequestId || 0;
            return e.nextRpcRequestId = n + 1, this.storeConnection(e)
        }
    }
    async getNextRpcRequestId() {
        let e = await this.getConnection();
        return e && "nextRpcRequestId" in e && e.nextRpcRequestId || 0
    }
};
var Go = class t {
    constructor(e, n) {
        this.storage = e;
        this.walletConnectionSource = n;
        W(this, "type", "http");
        W(this, "standardUniversalLink", "tc://");
        W(this, "connectionStorage");
        W(this, "pendingRequests", new Map);
        W(this, "session", null);
        W(this, "gateway", null);
        W(this, "pendingGateways", []);
        W(this, "listeners", []);
        W(this, "defaultOpeningDeadlineMS", 12e3);
        W(this, "defaultRetryTimeoutMS", 2e3);
        W(this, "abortController");
        this.connectionStorage = new xn(e)
    }
    static async fromStorage(e) {
        let r = await new xn(e).getHttpConnection();
        return kr(r) ? new t(e, r.connectionSource) : new t(e, {
            bridgeUrl: r.session.bridgeUrl
        })
    }
    connect(e, n) {
        var a;
        let r = Ut(n == null ? void 0 : n.signal);
        (a = this.abortController) == null || a.abort(), this.abortController = r, this.closeGateways();
        let o = new er;
        this.session = {
            sessionCrypto: o,
            bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
        }, this.connectionStorage.storeConnection({
            type: "http",
            connectionSource: this.walletConnectionSource,
            sessionCrypto: o
        }).then(async () => {
            r.signal.aborted || await nr(s => {
                var c;
                return this.openGateways(o, {
                    openingDeadlineMS: (c = n == null ? void 0 : n.openingDeadlineMS) != null ? c : this.defaultOpeningDeadlineMS,
                    signal: s == null ? void 0 : s.signal
                })
            }, {
                attempts: Number.MAX_SAFE_INTEGER,
                delayMs: this.defaultRetryTimeoutMS,
                signal: r.signal
            })
        });
        let i = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
        return this.generateUniversalLink(i, e)
    }
    async restoreConnection(e) {
        var i, a;
        let n = Ut(e == null ? void 0 : e.signal);
        if ((i = this.abortController) == null || i.abort(), this.abortController = n, n.signal.aborted) return;
        this.closeGateways();
        let r = await this.connectionStorage.getHttpConnection();
        if (!r || n.signal.aborted) return;
        let o = (a = e == null ? void 0 : e.openingDeadlineMS) != null ? a : this.defaultOpeningDeadlineMS;
        if (kr(r)) return this.session = {
            sessionCrypto: r.sessionCrypto,
            bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
        }, await this.openGateways(r.sessionCrypto, {
            openingDeadlineMS: o,
            signal: n == null ? void 0 : n.signal
        });
        if (Array.isArray(this.walletConnectionSource)) throw new oe("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
        if (this.session = r.session, this.gateway && (dt("Gateway is already opened, closing previous gateway"), await this.gateway.close()), this.gateway = new ro(this.storage, this.walletConnectionSource.bridgeUrl, r.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), !n.signal.aborted) {
            this.listeners.forEach(s => s(r.connectEvent));
            try {
                await nr(s => this.gateway.registerSession({
                    openingDeadlineMS: o,
                    signal: s.signal
                }), {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: this.defaultRetryTimeoutMS,
                    signal: n.signal
                })
            } catch {
                await this.disconnect({
                    signal: n.signal
                });
                return
            }
        }
    }
    sendRequest(e, n) {
        let r = {};
        return typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal, r.attempts = n == null ? void 0 : n.attempts), new Promise(async (o, i) => {
            var c;
            if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) throw new oe("Trying to send bridge request without session");
            let a = (await this.connectionStorage.getNextRpcRequestId()).toString();
            await this.connectionStorage.increaseNextRpcRequestId(), dt("Send http-bridge request:", { ...e,
                id: a
            });
            let s = this.session.sessionCrypto.encrypt(JSON.stringify({ ...e,
                id: a
            }), vt(this.session.walletPublicKey));
            try {
                await this.gateway.send(s, this.session.walletPublicKey, e.method, {
                    attempts: r == null ? void 0 : r.attempts,
                    signal: r == null ? void 0 : r.signal
                }), (c = r == null ? void 0 : r.onRequestSent) == null || c.call(r), this.pendingRequests.set(a.toString(), o)
            } catch (d) {
                i(d)
            }
        })
    }
    closeConnection() {
        this.closeGateways(), this.listeners = [], this.session = null, this.gateway = null
    }
    async disconnect(e) {
        return new Promise(async n => {
            let r = !1,
                o = null,
                i = () => {
                    r || (r = !0, this.removeBridgeAndSession().then(n))
                };
            try {
                this.closeGateways();
                let a = Ut(e == null ? void 0 : e.signal);
                o = setTimeout(() => {
                    a.abort()
                }, this.defaultOpeningDeadlineMS), await this.sendRequest({
                    method: "disconnect",
                    params: []
                }, {
                    onRequestSent: i,
                    signal: a.signal,
                    attempts: 1
                })
            } catch (a) {
                dt("Disconnect error:", a), r || this.removeBridgeAndSession().then(n)
            } finally {
                o && clearTimeout(o), i()
            }
        })
    }
    listen(e) {
        return this.listeners.push(e), () => this.listeners = this.listeners.filter(n => n !== e)
    }
    pause() {
        var e;
        (e = this.gateway) == null || e.pause(), this.pendingGateways.forEach(n => n.pause())
    }
    async unPause() {
        let e = this.pendingGateways.map(n => n.unPause());
        this.gateway && e.push(this.gateway.unPause()), await Promise.all(e)
    }
    async pendingGatewaysListener(e, n, r) {
        if (!this.pendingGateways.includes(e)) {
            await e.close();
            return
        }
        return this.closeGateways({
            except: e
        }), this.gateway && (dt("Gateway is already opened, closing previous gateway"), await this.gateway.close()), this.session.bridgeUrl = n, this.gateway = e, this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)), this.gateway.setListener(this.gatewayListener.bind(this)), this.gatewayListener(r)
    }
    async gatewayListener(e) {
        let n = JSON.parse(this.session.sessionCrypto.decrypt(xr.decode(e.message).toUint8Array(), vt(e.from)));
        if (dt("Wallet message received:", n), !("event" in n)) {
            let o = n.id.toString(),
                i = this.pendingRequests.get(o);
            if (!i) {
                dt("Response id ".concat(o, " doesn't match any request's id"));
                return
            }
            i(n), this.pendingRequests.delete(o);
            return
        }
        if (n.id !== void 0) {
            let o = await this.connectionStorage.getLastWalletEventId();
            if (o !== void 0 && n.id <= o) {
                wn("Received event id (=".concat(n.id, ") must be greater than stored last wallet event id (=").concat(o, ") "));
                return
            }
            n.event !== "connect" && await this.connectionStorage.storeLastWalletEventId(n.id)
        }
        let r = this.listeners;
        n.event === "connect" && await this.updateSession(n, e.from), n.event === "disconnect" && (dt("Removing bridge and session: received disconnect event"), await this.removeBridgeAndSession()), r.forEach(o => o(n))
    }
    async gatewayErrorsListener(e) {
        throw new oe("Bridge error ".concat(JSON.stringify(e)))
    }
    async updateSession(e, n) {
        this.session = { ...this.session,
            walletPublicKey: n
        };
        let r = e.payload.items.find(i => i.name === "ton_addr"),
            o = { ...e,
                payload: { ...e.payload,
                    items: [r]
                }
            };
        await this.connectionStorage.storeConnection({
            type: "http",
            session: this.session,
            lastWalletEventId: e.id,
            connectEvent: o,
            nextRpcRequestId: 0
        })
    }
    async removeBridgeAndSession() {
        this.closeConnection(), await this.connectionStorage.removeConnection()
    }
    generateUniversalLink(e, n) {
        return dn(e) ? this.generateTGUniversalLink(e, n) : this.generateRegularUniversalLink(e, n)
    }
    generateRegularUniversalLink(e, n) {
        let r = new URL(e);
        return r.searchParams.append("v", 2.toString()), r.searchParams.append("id", this.session.sessionCrypto.sessionId), r.searchParams.append("r", JSON.stringify(n)), r.toString()
    }
    generateTGUniversalLink(e, n) {
        let o = this.generateRegularUniversalLink("about:blank", n).split("?")[1],
            i = "tonconnect-" + qo(o),
            a = this.convertToDirectLink(e),
            s = new URL(a);
        return s.searchParams.append("startapp", i), s.toString()
    }
    convertToDirectLink(e) {
        let n = new URL(e);
        return n.searchParams.has("attach") && (n.searchParams.delete("attach"), n.pathname += "/start"), n.toString()
    }
    async openGateways(e, n) {
        if (Array.isArray(this.walletConnectionSource)) {
            this.pendingGateways.map(r => r.close().catch()), this.pendingGateways = this.walletConnectionSource.map(r => {
                let o = new ro(this.storage, r.bridgeUrl, e.sessionId, () => {}, () => {});
                return o.setListener(i => this.pendingGatewaysListener(o, r.bridgeUrl, i)), o
            }), await Promise.allSettled(this.pendingGateways.map(r => nr(o => {
                var i;
                return this.pendingGateways.some(a => a === r) ? r.registerSession({
                    openingDeadlineMS: (i = n == null ? void 0 : n.openingDeadlineMS) != null ? i : this.defaultOpeningDeadlineMS,
                    signal: o.signal
                }) : r.close()
            }, {
                attempts: Number.MAX_SAFE_INTEGER,
                delayMs: this.defaultRetryTimeoutMS,
                signal: n == null ? void 0 : n.signal
            })));
            return
        } else return this.gateway && (dt("Gateway is already opened, closing previous gateway"), await this.gateway.close()), this.gateway = new ro(this.storage, this.walletConnectionSource.bridgeUrl, e.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), await this.gateway.registerSession({
            openingDeadlineMS: n == null ? void 0 : n.openingDeadlineMS,
            signal: n == null ? void 0 : n.signal
        })
    }
    closeGateways(e) {
        var n;
        (n = this.gateway) == null || n.close(), this.pendingGateways.filter(r => r !== (e == null ? void 0 : e.except)).forEach(r => r.close()), this.pendingGateways = []
    }
};

function ks(t, e) {
    return As(t, [e])
}

function As(t, e) {
    return !t || typeof t != "object" ? !1 : e.every(n => n in t)
}

function Hc(t) {
    try {
        return !ks(t, "tonconnect") || !ks(t.tonconnect, "walletInfo") ? !1 : As(t.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"])
    } catch {
        return !1
    }
}
var Ar = class Ar {
    constructor() {
        W(this, "storage", {})
    }
    static getInstance() {
        return Ar.instance || (Ar.instance = new Ar), Ar.instance
    }
    get length() {
        return Object.keys(this.storage).length
    }
    clear() {
        this.storage = {}
    }
    getItem(e) {
        var n;
        return (n = this.storage[e]) != null ? n : null
    }
    key(e) {
        var r;
        let n = Object.keys(this.storage);
        return e < 0 || e >= n.length ? null : (r = n[e]) != null ? r : null
    }
    removeItem(e) {
        delete this.storage[e]
    }
    setItem(e, n) {
        this.storage[e] = n
    }
};
W(Ar, "instance");
var ea = Ar;

function oo() {
    if (!(typeof window > "u")) return window
}

function Kc() {
    let t = oo();
    if (!t) return [];
    try {
        return Object.keys(t)
    } catch {
        return []
    }
}

function Vc() {
    var e;
    let t = (e = oo()) == null ? void 0 : e.location.origin;
    return t ? t + "/tonconnect-manifest.json" : ""
}

function jc() {
    if (L0()) return localStorage;
    if (W0()) throw new oe("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
    return ea.getInstance()
}

function L0() {
    try {
        return typeof localStorage < "u"
    } catch {
        return !1
    }
}

function W0() {
    return typeof process < "u" && process.versions != null && process.versions.node != null
}
var rr = class rr {
    constructor(e, n) {
        this.injectedWalletKey = n;
        W(this, "type", "injected");
        W(this, "unsubscribeCallback", null);
        W(this, "injectedWallet");
        W(this, "connectionStorage");
        W(this, "listenSubscriptions", !1);
        W(this, "listeners", []);
        let r = rr.window;
        if (!rr.isWindowContainsWallet(r, n)) throw new Oo;
        this.connectionStorage = new xn(e), this.injectedWallet = r[n].tonconnect
    }
    static async fromStorage(e) {
        let r = await new xn(e).getInjectedConnection();
        return new rr(e, r.jsBridgeKey)
    }
    static isWalletInjected(e) {
        return rr.isWindowContainsWallet(this.window, e)
    }
    static isInsideWalletBrowser(e) {
        return rr.isWindowContainsWallet(this.window, e) ? this.window[e].tonconnect.isWalletBrowser : !1
    }
    static getCurrentlyInjectedWallets() {
        return this.window ? Kc().filter(([r, o]) => Hc(o)).map(([r, o]) => ({
            name: o.tonconnect.walletInfo.name,
            appName: o.tonconnect.walletInfo.app_name,
            aboutUrl: o.tonconnect.walletInfo.about_url,
            imageUrl: o.tonconnect.walletInfo.image,
            tondns: o.tonconnect.walletInfo.tondns,
            jsBridgeKey: r,
            injected: !0,
            embedded: o.tonconnect.isWalletBrowser,
            platforms: o.tonconnect.walletInfo.platforms
        })) : []
    }
    static isWindowContainsWallet(e, n) {
        return !!e && n in e && typeof e[n] == "object" && "tonconnect" in e[n]
    }
    connect(e) {
        this._connect(2, e)
    }
    async restoreConnection() {
        try {
            dt("Injected Provider restoring connection...");
            let e = await this.injectedWallet.restoreConnection();
            dt("Injected Provider restoring connection response", e), e.event === "connect" ? (this.makeSubscriptions(), this.listeners.forEach(n => n(e))) : await this.connectionStorage.removeConnection()
        } catch (e) {
            await this.connectionStorage.removeConnection(), console.error(e)
        }
    }
    closeConnection() {
        this.listenSubscriptions && this.injectedWallet.disconnect(), this.closeAllListeners()
    }
    async disconnect() {
        return new Promise(e => {
            let n = () => {
                this.closeAllListeners(), this.connectionStorage.removeConnection().then(e)
            };
            try {
                this.injectedWallet.disconnect(), n()
            } catch (r) {
                dt(r), this.sendRequest({
                    method: "disconnect",
                    params: []
                }, n)
            }
        })
    }
    closeAllListeners() {
        var e;
        this.listenSubscriptions = !1, this.listeners = [], (e = this.unsubscribeCallback) == null || e.call(this)
    }
    listen(e) {
        return this.listeners.push(e), () => this.listeners = this.listeners.filter(n => n !== e)
    }
    async sendRequest(e, n) {
        var a;
        let r = {};
        typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal);
        let o = (await this.connectionStorage.getNextRpcRequestId()).toString();
        await this.connectionStorage.increaseNextRpcRequestId(), dt("Send injected-bridge request:", { ...e,
            id: o
        });
        let i = this.injectedWallet.send({ ...e,
            id: o
        });
        return i.then(s => dt("Wallet message received:", s)), (a = r == null ? void 0 : r.onRequestSent) == null || a.call(r), i
    }
    async _connect(e, n) {
        try {
            dt("Injected Provider connect request: protocolVersion: ".concat(e, ", message:"), n);
            let r = await this.injectedWallet.connect(e, n);
            dt("Injected Provider connect response:", r), r.event === "connect" && (await this.updateSession(), this.makeSubscriptions()), this.listeners.forEach(o => o(r))
        } catch (r) {
            dt("Injected Provider connect error:", r);
            let o = {
                event: "connect_error",
                payload: {
                    code: 0,
                    message: r == null ? void 0 : r.toString()
                }
            };
            this.listeners.forEach(i => i(o))
        }
    }
    makeSubscriptions() {
        this.listenSubscriptions = !0, this.unsubscribeCallback = this.injectedWallet.listen(e => {
            dt("Wallet message received:", e), this.listenSubscriptions && this.listeners.forEach(n => n(e)), e.event === "disconnect" && this.disconnect()
        })
    }
    updateSession() {
        return this.connectionStorage.storeConnection({
            type: "injected",
            jsBridgeKey: this.injectedWalletKey,
            nextRpcRequestId: 0
        })
    }
};
W(rr, "window", oo());
var fn = rr;
var ta = class {
    constructor() {
        W(this, "localStorage");
        this.localStorage = jc()
    }
    async getItem(e) {
        return this.localStorage.getItem(e)
    }
    async removeItem(e) {
        this.localStorage.removeItem(e)
    }
    async setItem(e, n) {
        this.localStorage.setItem(e, n)
    }
};
var Tr = class {
    constructor() {
        W(this, "window", oo())
    }
    async dispatchEvent(e, n) {
        var o;
        let r = new CustomEvent(e, {
            detail: n
        });
        (o = this.window) == null || o.dispatchEvent(r)
    }
    async addEventListener(e, n, r) {
        var o;
        return (o = this.window) == null || o.addEventListener(e, n, r), () => {
            var i;
            return (i = this.window) == null ? void 0 : i.removeEventListener(e, n)
        }
    }
};

function Yo() {
    return {
        type: "request-version"
    }
}

function Zo(t) {
    return {
        type: "response-version",
        version: t
    }
}

function vn(t) {
    return {
        ton_connect_sdk_lib: t.ton_connect_sdk_lib,
        ton_connect_ui_lib: t.ton_connect_ui_lib
    }
}

function io(t, e) {
    var o, i, a, s, c, d, h, f;
    let r = ((o = e == null ? void 0 : e.connectItems) == null ? void 0 : o.tonProof) && "proof" in e.connectItems.tonProof ? "ton_proof" : "ton_addr";
    return {
        wallet_address: (a = (i = e == null ? void 0 : e.account) == null ? void 0 : i.address) != null ? a : null,
        wallet_type: (s = e == null ? void 0 : e.device.appName) != null ? s : null,
        wallet_version: (c = e == null ? void 0 : e.device.appVersion) != null ? c : null,
        auth_type: r,
        custom_data: {
            chain_id: (h = (d = e == null ? void 0 : e.account) == null ? void 0 : d.chain) != null ? h : null,
            provider: (f = e == null ? void 0 : e.provider) != null ? f : null,
            ...vn(t)
        }
    }
}

function Qo(t) {
    return {
        type: "connection-started",
        custom_data: vn(t)
    }
}

function Xo(t, e) {
    return {
        type: "connection-completed",
        is_success: !0,
        ...io(t, e)
    }
}

function Jo(t, e, n) {
    return {
        type: "connection-error",
        is_success: !1,
        error_message: e,
        error_code: n != null ? n : null,
        custom_data: vn(t)
    }
}

function ei(t) {
    return {
        type: "connection-restoring-started",
        custom_data: vn(t)
    }
}

function ti(t, e) {
    return {
        type: "connection-restoring-completed",
        is_success: !0,
        ...io(t, e)
    }
}

function ni(t, e) {
    return {
        type: "connection-restoring-error",
        is_success: !1,
        error_message: e,
        custom_data: vn(t)
    }
}

function Ts(t, e) {
    var n, r, o, i;
    return {
        valid_until: (n = String(e.validUntil)) != null ? n : null,
        from: (i = (o = e.from) != null ? o : (r = t == null ? void 0 : t.account) == null ? void 0 : r.address) != null ? i : null,
        messages: e.messages.map(a => {
            var s, c;
            return {
                address: (s = a.address) != null ? s : null,
                amount: (c = a.amount) != null ? c : null
            }
        })
    }
}

function ri(t, e, n) {
    return {
        type: "transaction-sent-for-signature",
        ...io(t, e),
        ...Ts(e, n)
    }
}

function oi(t, e, n, r) {
    return {
        type: "transaction-signed",
        is_success: !0,
        signed_transaction: r.boc,
        ...io(t, e),
        ...Ts(e, n)
    }
}

function ii(t, e, n, r, o) {
    return {
        type: "transaction-signing-failed",
        is_success: !1,
        error_message: r,
        error_code: o != null ? o : null,
        ...io(t, e),
        ...Ts(e, n)
    }
}

function ai(t, e, n) {
    return {
        type: "disconnection",
        scope: n,
        ...io(t, e)
    }
}
var na = class {
    constructor(e) {
        W(this, "eventPrefix", "ton-connect-");
        W(this, "tonConnectSdkVersion");
        W(this, "tonConnectUiVersion", null);
        W(this, "eventDispatcher");
        var n;
        this.eventDispatcher = (n = e == null ? void 0 : e.eventDispatcher) != null ? n : new Tr, this.tonConnectSdkVersion = e.tonConnectSdkVersion, this.init().catch()
    }
    get version() {
        return vn({
            ton_connect_sdk_lib: this.tonConnectSdkVersion,
            ton_connect_ui_lib: this.tonConnectUiVersion
        })
    }
    async init() {
        try {
            await this.setRequestVersionHandler(), this.tonConnectUiVersion = await this.requestTonConnectUiVersion()
        } catch {}
    }
    async setRequestVersionHandler() {
        await this.eventDispatcher.addEventListener("ton-connect-request-version", async () => {
            await this.eventDispatcher.dispatchEvent("ton-connect-response-version", Zo(this.tonConnectSdkVersion))
        })
    }
    async requestTonConnectUiVersion() {
        return new Promise(async (e, n) => {
            try {
                await this.eventDispatcher.addEventListener("ton-connect-ui-response-version", r => {
                    e(r.detail.version)
                }, {
                    once: !0
                }), await this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", Yo())
            } catch (r) {
                n(r)
            }
        })
    }
    dispatchUserActionEvent(e) {
        try {
            this.eventDispatcher.dispatchEvent("".concat(this.eventPrefix).concat(e.type), e).catch()
        } catch {}
    }
    trackConnectionStarted(...e) {
        try {
            let n = Qo(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackConnectionCompleted(...e) {
        try {
            let n = Xo(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackConnectionError(...e) {
        try {
            let n = Jo(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackConnectionRestoringStarted(...e) {
        try {
            let n = ei(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackConnectionRestoringCompleted(...e) {
        try {
            let n = ti(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackConnectionRestoringError(...e) {
        try {
            let n = ni(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackDisconnection(...e) {
        try {
            let n = ai(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackTransactionSentForSignature(...e) {
        try {
            let n = ri(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackTransactionSigned(...e) {
        try {
            let n = oi(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
    trackTransactionSigningFailed(...e) {
        try {
            let n = ii(this.version, ...e);
            this.dispatchUserActionEvent(n)
        } catch {}
    }
};
var si = class t extends oe {
    get info() {
        return "Wallet doesn't support requested feature method."
    }
    constructor(...e) {
        super(...e), Object.setPrototypeOf(this, t.prototype)
    }
};

function zc(t, e) {
    let n = t.includes("SendTransaction"),
        r = t.find(o => o && typeof o == "object" && o.name === "SendTransaction");
    if (!n && !r) throw new si("Wallet doesn't support SendTransaction feature.");
    if (r && r.maxMessages !== void 0) {
        if (r.maxMessages < e.requiredMessagesNumber) throw new si("Wallet is not able to handle such SendTransaction request. Max support messages number is ".concat(r.maxMessages, ", but ").concat(e.requiredMessagesNumber, " is required."));
        return
    }
    Dc("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.")
}

function Hn(t) {
    return Oc(t) && t.injected
}

function Br(t) {
    return Hn(t) && t.embedded
}

function Oc(t) {
    return "jsBridgeKey" in t
}

function li(t) {
    return "bridgeUrl" in t
}
var ci = class {
    constructor(e) {
        W(this, "wallets", []);
        let n = [];
        e.filter(o => !this.isCorrectWalletConfigDTO(o)).length && (e = e.filter(o => this.isCorrectWalletConfigDTO(o)));
        try {
            n = fn.getCurrentlyInjectedWallets()
        } catch (o) {
            wn(o)
        }
        this.wallets = this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(e), n)
    }
    getWallets() {
        return this.wallets
    }
    getEmbeddedWallet() {
        let e = this.wallets.filter(Br);
        return e.length !== 1 ? null : e[0]
    }
    walletConfigDTOListToWalletConfigList(e) {
        return e.map(n => {
            let o = {
                name: n.name,
                appName: n.app_name,
                imageUrl: n.image,
                aboutUrl: n.about_url,
                tondns: n.tondns,
                platforms: n.platforms
            };
            return n.bridge.forEach(i => {
                if (i.type === "sse" && (o.bridgeUrl = i.url, o.universalLink = n.universal_url, o.deepLink = n.deepLink), i.type === "js") {
                    let a = i.key;
                    o.jsBridgeKey = a, o.injected = fn.isWalletInjected(a), o.embedded = fn.isInsideWalletBrowser(a)
                }
            }), o
        })
    }
    mergeWalletsLists(e, n) {
        return [...new Set(e.concat(n).map(o => o.name)).values()].map(o => {
            let i = e.find(s => s.name === o),
                a = n.find(s => s.name === o);
            return { ...i && { ...i
                },
                ...a && { ...a
                }
            }
        })
    }
    isCorrectWalletConfigDTO(e) {
        if (!e || typeof e != "object") return !1;
        let n = "name" in e,
            r = "app_name" in e,
            o = "image" in e,
            i = "about_url" in e,
            a = "platforms" in e;
        if (!n || !o || !i || !a || !r || !e.platforms || !Array.isArray(e.platforms) || !e.platforms.length || !("bridge" in e) || !Array.isArray(e.bridge) || !e.bridge.length) return !1;
        let s = e.bridge;
        if (s.some(h => !h || typeof h != "object" || !("type" in h))) return !1;
        let c = s.find(h => h.type === "sse");
        if (c && (!("url" in c) || !c.url || !e.universal_url)) return !1;
        let d = s.find(h => h.type === "js");
        return !(d && (!("key" in d) || !d.key))
    }
};
var ao = class ao {
    constructor(e) {
        W(this, "tracker");
        W(this, "walletsList");
        W(this, "dappSettings");
        W(this, "bridgeConnectionStorage");
        W(this, "_wallet", null);
        W(this, "provider", null);
        W(this, "statusChangeSubscriptions", []);
        W(this, "statusChangeErrorSubscriptions", []);
        W(this, "abortController");
        var n;
        if (this.dappSettings = {
                manifestUrl: (e == null ? void 0 : e.manifestUrl) || Vc(),
                storage: (e == null ? void 0 : e.storage) || new ta
            }, this.walletsList = new ci((n = e == null ? void 0 : e.walletsList) != null ? n : []), ao.walletsList = this.walletsList, this.tracker = new na({
                eventDispatcher: e == null ? void 0 : e.eventDispatcher,
                tonConnectSdkVersion: Dl
            }), !this.dappSettings.manifestUrl) throw new Di("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
        this.bridgeConnectionStorage = new xn(this.dappSettings.storage)
    }
    static getWallets() {
        return this.walletsList.getWallets()
    }
    get connected() {
        return this._wallet !== null
    }
    get account() {
        var e;
        return ((e = this._wallet) == null ? void 0 : e.account) || null
    }
    get wallet() {
        return this._wallet
    }
    set wallet(e) {
        this._wallet = e, this.statusChangeSubscriptions.forEach(n => n(this._wallet))
    }
    getWallets() {
        return this.walletsList.getWallets()
    }
    onStatusChange(e, n) {
        return this.statusChangeSubscriptions.push(e), n && this.statusChangeErrorSubscriptions.push(n), () => {
            this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter(r => r !== e), n && (this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter(r => r !== n))
        }
    }
    connect(e, n) {
        var i, a;
        let r = {};
        if (typeof n == "object" && "tonProof" in n && (r.request = n), typeof n == "object" && ("openingDeadlineMS" in n || "signal" in n || "request" in n) && (r.request = n == null ? void 0 : n.request, r.openingDeadlineMS = n == null ? void 0 : n.openingDeadlineMS, r.signal = n == null ? void 0 : n.signal), this.connected) throw new Mo;
        let o = Ut(r == null ? void 0 : r.signal);
        if ((i = this.abortController) == null || i.abort(), this.abortController = o, o.signal.aborted) throw new oe("Connection was aborted");
        return (a = this.provider) == null || a.closeConnection(), this.provider = this.createProvider(e), o.signal.addEventListener("abort", () => {
            var s;
            (s = this.provider) == null || s.closeConnection(), this.provider = null
        }), this.tracker.trackConnectionStarted(), this.provider.connect(this.createConnectRequest(r == null ? void 0 : r.request), {
            openingDeadlineMS: r == null ? void 0 : r.openingDeadlineMS,
            signal: o.signal
        })
    }
    async restoreConnection(e) {
        var d, h;
        this.tracker.trackConnectionRestoringStarted();
        let n = Ut(e == null ? void 0 : e.signal);
        if ((d = this.abortController) == null || d.abort(), this.abortController = n, n.signal.aborted) {
            this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
            return
        }
        let r = await this.bridgeConnectionStorage.storedConnectionType(),
            o = this.walletsList.getEmbeddedWallet();
        if (n.signal.aborted) {
            this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
            return
        }
        let i = null;
        try {
            switch (r) {
                case "http":
                    i = await Go.fromStorage(this.dappSettings.storage);
                    break;
                case "injected":
                    i = await fn.fromStorage(this.dappSettings.storage);
                    break;
                default:
                    if (o) i = this.createProvider(o);
                    else return
            }
        } catch {
            this.tracker.trackConnectionRestoringError("Provider is not restored"), await this.bridgeConnectionStorage.removeConnection(), i == null || i.closeConnection(), i = null;
            return
        }
        if (n.signal.aborted) {
            i == null || i.closeConnection(), this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
            return
        }
        if (!i) {
            wn("Provider is not restored"), this.tracker.trackConnectionRestoringError("Provider is not restored");
            return
        }(h = this.provider) == null || h.closeConnection(), this.provider = i, i.listen(this.walletEventsListener.bind(this));
        let a = () => {
            this.tracker.trackConnectionRestoringError("Connection restoring was aborted"), i == null || i.closeConnection(), i = null
        };
        n.signal.addEventListener("abort", a);
        let s = nr(async f => {
                await (i == null ? void 0 : i.restoreConnection({
                    openingDeadlineMS: e == null ? void 0 : e.openingDeadlineMS,
                    signal: f.signal
                })), n.signal.removeEventListener("abort", a), this.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : this.tracker.trackConnectionRestoringError("Connection restoring failed")
            }, {
                attempts: Number.MAX_SAFE_INTEGER,
                delayMs: 2e3,
                signal: e == null ? void 0 : e.signal
            }),
            c = new Promise(f => setTimeout(() => f(), 12e3));
        return Promise.race([s, c])
    }
    async sendTransaction(e, n) {
        let r = {};
        typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal);
        let o = Ut(r == null ? void 0 : r.signal);
        if (o.signal.aborted) throw new oe("Transaction sending was aborted");
        this.checkConnection(), zc(this.wallet.device.features, {
            requiredMessagesNumber: e.messages.length
        }), this.tracker.trackTransactionSentForSignature(this.wallet, e);
        let {
            validUntil: i,
            ...a
        } = e, s = e.from || this.account.address, c = e.network || this.account.chain, d = await this.provider.sendRequest(Fo.convertToRpcRequest({ ...a,
            valid_until: i,
            from: s,
            network: c
        }), {
            onRequestSent: r.onRequestSent,
            signal: o.signal
        });
        if (Fo.isError(d)) return this.tracker.trackTransactionSigningFailed(this.wallet, e, d.error.message, d.error.code), Fo.parseAndThrowError(d);
        let h = Fo.convertFromRpcResponse(d);
        return this.tracker.trackTransactionSigned(this.wallet, e, h), h
    }
    async disconnect(e) {
        var o;
        if (!this.connected) throw new Or;
        let n = Ut(e == null ? void 0 : e.signal),
            r = this.abortController;
        if (this.abortController = n, n.signal.aborted) throw new oe("Disconnect was aborted");
        this.onWalletDisconnected("dapp"), await ((o = this.provider) == null ? void 0 : o.disconnect({
            signal: n.signal
        })), r == null || r.abort()
    }
    createProvider(e) {
        let n;
        return !Array.isArray(e) && Nl(e) ? n = new fn(this.dappSettings.storage, e.jsBridgeKey) : n = new Go(this.dappSettings.storage, e), n.listen(this.walletEventsListener.bind(this)), n
    }
    walletEventsListener(e) {
        switch (e.event) {
            case "connect":
                this.onWalletConnected(e.payload);
                break;
            case "connect_error":
                this.onWalletConnectError(e.payload);
                break;
            case "disconnect":
                this.onWalletDisconnected("wallet")
        }
    }
    onWalletConnected(e) {
        let n = e.items.find(i => i.name === "ton_addr"),
            r = e.items.find(i => i.name === "ton_proof");
        if (!n) throw new oe("ton_addr connection item was not found");
        let o = {
            device: e.device,
            provider: this.provider.type,
            account: {
                address: n.address,
                chain: n.network,
                walletStateInit: n.walletStateInit,
                publicKey: n.publicKey
            }
        };
        r && (o.connectItems = {
            tonProof: r
        }), this.wallet = o, this.tracker.trackConnectionCompleted(o)
    }
    onWalletConnectError(e) {
        let n = Lc.parseError(e);
        if (this.statusChangeErrorSubscriptions.forEach(r => r(n)), dt(n), this.tracker.trackConnectionError(e.message, e.code), n instanceof zr || n instanceof jr) throw wn(n), n
    }
    onWalletDisconnected(e) {
        this.tracker.trackDisconnection(this.wallet, e), this.wallet = null
    }
    checkConnection() {
        if (!this.connected) throw new Or
    }
    createConnectRequest(e) {
        let n = [{
            name: "ton_addr"
        }];
        return e != null && e.tonProof && n.push({
            name: "ton_proof",
            payload: e.tonProof
        }), {
            manifestUrl: this.dappSettings.manifestUrl,
            items: n
        }
    }
};
W(ao, "walletsList"), W(ao, "isWalletInjected", e => fn.isWalletInjected(e)), W(ao, "isInsideWalletBrowser", e => fn.isInsideWalletBrowser(e));
var or = ao;
var D0 = 81,
    N0 = 128;

function ra(t, e = !1) {
    let {
        wc: n,
        hex: r
    } = $0(t), o = D0;
    e && (o |= N0);
    let i = new Int8Array(34);
    i[0] = o, i[1] = n, i.set(r, 2);
    let a = new Uint8Array(36);
    return a.set(i), a.set(H0(i), 34), xr.encode(a).replace(/\+/g, "-").replace(/\//g, "_")
}

function $0(t) {
    if (!t.includes(":")) throw new tr("Wrong address ".concat(t, '. Address must include ":".'));
    let e = t.split(":");
    if (e.length !== 2) throw new tr("Wrong address ".concat(t, '. Address must include ":" only once.'));
    let n = parseInt(e[0]);
    if (n !== 0 && n !== -1) throw new tr("Wrong address ".concat(t, ". WC must be eq 0 or -1, but ").concat(n, " received."));
    let r = e[1];
    if ((r == null ? void 0 : r.length) !== 64) throw new tr("Wrong address ".concat(t, ". Hex part must be 64bytes length, but ").concat(r == null ? void 0 : r.length, " received."));
    return {
        wc: n,
        hex: K0(r)
    }
}

function H0(t) {
    let n = 0,
        r = new Uint8Array(t.length + 2);
    r.set(t);
    for (let o of r) {
        let i = 128;
        for (; i > 0;) n <<= 1, o & i && (n += 1), i >>= 1, n > 65535 && (n &= 65535, n ^= 4129)
    }
    return new Uint8Array([Math.floor(n / 256), n % 256])
}
var Bs = {};
for (let t = 0; t <= 255; t++) {
    let e = t.toString(16);
    e.length < 2 && (e = "0" + e), Bs[e] = t
}

function K0(t) {
    t = t.toLowerCase();
    let e = t.length;
    if (e % 2 !== 0) throw new no("Hex string must have length a multiple of 2: " + t);
    let n = e / 2,
        r = new Uint8Array(n);
    for (let o = 0; o < n; o++) {
        let i = o * 2,
            a = t.substring(i, i + 2);
        if (!Bs.hasOwnProperty(a)) throw new no("Invalid hex character: " + a);
        r[o] = Bs[a]
    }
    return r
}
var gi = Wi(Fc(), 1);
var V0 = Object.defineProperty,
    j0 = Object.defineProperties,
    z0 = Object.getOwnPropertyDescriptors,
    qc = Object.getOwnPropertySymbols,
    O0 = Object.prototype.hasOwnProperty,
    F0 = Object.prototype.propertyIsEnumerable,
    Ds = (t, e, n) => e in t ? V0(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    Je = (t, e) => {
        for (var n in e || (e = {})) O0.call(e, n) && Ds(t, n, e[n]);
        if (qc)
            for (var n of qc(e)) F0.call(e, n) && Ds(t, n, e[n]);
        return t
    },
    Xt = (t, e) => j0(t, z0(e));
var we = (t, e, n) => (Ds(t, typeof e != "symbol" ? e + "" : e, n), n),
    Qe = (t, e, n) => new Promise((r, o) => {
        var i = c => {
                try {
                    s(n.next(c))
                } catch (d) {
                    o(d)
                }
            },
            a = c => {
                try {
                    s(n.throw(c))
                } catch (d) {
                    o(d)
                }
            },
            s = c => c.done ? r(c.value) : Promise.resolve(c.value).then(i, a);
        s((n = n.apply(t, e)).next())
    }),
    Gc, Yc, Zc, Qc, Xc, Jc, eu, tu, C1 = {
        context: void 0,
        registry: void 0,
        effects: void 0,
        done: !1,
        getContextId() {
            return nu(this.context.count)
        },
        getNextContextId() {
            return nu(this.context.count++)
        }
    };

function nu(t) {
    let e = String(t),
        n = e.length - 1;
    return C1.context.id + (n ? String.fromCharCode(96 + n) : "") + e
}
var q0 = (t, e) => t === e,
    gn = Symbol("solid-proxy"),
    S1 = typeof Proxy == "function",
    Ns = Symbol("solid-track"),
    ga = {
        equals: q0
    },
    k1 = M1,
    qn = 1,
    pa = 2,
    A1 = {
        owned: null,
        cleanups: null,
        context: null,
        owner: null
    },
    ot = null,
    Is = null,
    G0 = null,
    st = null,
    Ht = null,
    zn = null,
    Ra = 0;

function pi(t, e) {
    let n = st,
        r = ot,
        o = t.length === 0,
        i = e === void 0 ? r : e,
        a = o ? A1 : {
            owned: null,
            cleanups: null,
            context: i ? i.context : null,
            owner: i
        },
        s = o ? t : () => t(() => Et(() => wi(a)));
    ot = a, st = null;
    try {
        return Lr(s, !0)
    } finally {
        st = n, ot = r
    }
}

function Te(t, e) {
    e = e ? Object.assign({}, ga, e) : ga;
    let n = {
            value: t,
            observers: null,
            observerSlots: null,
            comparator: e.equals || void 0
        },
        r = o => (typeof o == "function" && (o = o(n.value)), U1(n, o));
    return [R1.bind(n), r]
}

function T1(t, e, n) {
    let r = Pa(t, e, !0, qn);
    vo(r)
}

function Ve(t, e, n) {
    let r = Pa(t, e, !1, qn);
    vo(r)
}

function St(t, e, n) {
    k1 = J0;
    let r = Pa(t, e, !1, qn);
    (!n || !n.render) && (r.user = !0), zn ? zn.push(r) : vo(r)
}

function ie(t, e, n) {
    n = n ? Object.assign({}, ga, n) : ga;
    let r = Pa(t, e, !0, 0);
    return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, vo(r), R1.bind(r)
}

function B1(t) {
    return Lr(t, !1)
}

function Et(t) {
    if (st === null) return t();
    let e = st;
    st = null;
    try {
        return t()
    } finally {
        st = e
    }
}

function Y0(t, e, n) {
    let r = Array.isArray(t),
        o, i = n && n.defer;
    return a => {
        let s;
        if (r) {
            s = Array(t.length);
            for (let d = 0; d < t.length; d++) s[d] = t[d]()
        } else s = t();
        if (i) return i = !1, a;
        let c = Et(() => e(s, o, a));
        return o = s, c
    }
}

function I1(t) {
    St(() => Et(t))
}

function zt(t) {
    return ot === null || (ot.cleanups === null ? ot.cleanups = [t] : ot.cleanups.push(t)), t
}

function $s() {
    return st
}

function E1() {
    return ot
}

function Z0(t, e) {
    let n = ot,
        r = st;
    ot = t, st = null;
    try {
        return Lr(e, !0)
    } catch (o) {
        il(o)
    } finally {
        ot = n, st = r
    }
}

function Ua(t, e) {
    let n = Symbol("context");
    return {
        id: n,
        Provider: tm(n),
        defaultValue: t
    }
}

function Ot(t) {
    let e;
    return ot && ot.context && (e = ot.context[t.id]) !== void 0 ? e : t.defaultValue
}

function Ma(t) {
    let e = ie(t),
        n = ie(() => Hs(e()));
    return n.toArray = () => {
        let r = n();
        return Array.isArray(r) ? r : r != null ? [r] : []
    }, n
}

function R1() {
    if (this.sources && this.state)
        if (this.state === qn) vo(this);
        else {
            let t = Ht;
            Ht = null, Lr(() => ya(this), !1), Ht = t
        }
    if (st) {
        let t = this.observers ? this.observers.length : 0;
        st.sources ? (st.sources.push(this), st.sourceSlots.push(t)) : (st.sources = [this], st.sourceSlots = [t]), this.observers ? (this.observers.push(st), this.observerSlots.push(st.sources.length - 1)) : (this.observers = [st], this.observerSlots = [st.sources.length - 1])
    }
    return this.value
}

function U1(t, e, n) {
    let r = t.value;
    return (!t.comparator || !t.comparator(r, e)) && (t.value = e, t.observers && t.observers.length && Lr(() => {
        for (let o = 0; o < t.observers.length; o += 1) {
            let i = t.observers[o],
                a = Is && Is.running;
            a && Is.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? Ht.push(i) : zn.push(i), i.observers && P1(i)), a || (i.state = qn)
        }
        if (Ht.length > 1e6) throw Ht = [], new Error
    }, !1)), e
}

function vo(t) {
    if (!t.fn) return;
    wi(t);
    let e = Ra;
    Q0(t, t.value, e)
}

function Q0(t, e, n) {
    let r, o = ot,
        i = st;
    st = ot = t;
    try {
        r = t.fn(e)
    } catch (a) {
        return t.pure && (t.state = qn, t.owned && t.owned.forEach(wi), t.owned = null), t.updatedAt = n + 1, il(a)
    } finally {
        st = i, ot = o
    }(!t.updatedAt || t.updatedAt <= n) && (t.updatedAt != null && "observers" in t ? U1(t, r) : t.value = r, t.updatedAt = n)
}

function Pa(t, e, n, r = qn, o) {
    let i = {
        fn: t,
        state: r,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: e,
        owner: ot,
        context: ot ? ot.context : null,
        pure: n
    };
    return ot === null || ot !== A1 && (ot.owned ? ot.owned.push(i) : ot.owned = [i]), i
}

function ma(t) {
    if (t.state === 0) return;
    if (t.state === pa) return ya(t);
    if (t.suspense && Et(t.suspense.inFallback)) return t.suspense.effects.push(t);
    let e = [t];
    for (;
        (t = t.owner) && (!t.updatedAt || t.updatedAt < Ra);) t.state && e.push(t);
    for (let n = e.length - 1; n >= 0; n--)
        if (t = e[n], t.state === qn) vo(t);
        else if (t.state === pa) {
        let r = Ht;
        Ht = null, Lr(() => ya(t, e[0]), !1), Ht = r
    }
}

function Lr(t, e) {
    if (Ht) return t();
    let n = !1;
    e || (Ht = []), zn ? n = !0 : zn = [], Ra++;
    try {
        let r = t();
        return X0(n), r
    } catch (r) {
        n || (zn = null), Ht = null, il(r)
    }
}

function X0(t) {
    if (Ht && (M1(Ht), Ht = null), t) return;
    let e = zn;
    zn = null, e.length && Lr(() => k1(e), !1)
}

function M1(t) {
    for (let e = 0; e < t.length; e++) ma(t[e])
}

function J0(t) {
    let e, n = 0;
    for (e = 0; e < t.length; e++) {
        let r = t[e];
        r.user ? t[n++] = r : ma(r)
    }
    for (e = 0; e < n; e++) ma(t[e])
}

function ya(t, e) {
    t.state = 0;
    for (let n = 0; n < t.sources.length; n += 1) {
        let r = t.sources[n];
        if (r.sources) {
            let o = r.state;
            o === qn ? r !== e && (!r.updatedAt || r.updatedAt < Ra) && ma(r) : o === pa && ya(r, e)
        }
    }
}

function P1(t) {
    for (let e = 0; e < t.observers.length; e += 1) {
        let n = t.observers[e];
        n.state || (n.state = pa, n.pure ? Ht.push(n) : zn.push(n), n.observers && P1(n))
    }
}

function wi(t) {
    let e;
    if (t.sources)
        for (; t.sources.length;) {
            let n = t.sources.pop(),
                r = t.sourceSlots.pop(),
                o = n.observers;
            if (o && o.length) {
                let i = o.pop(),
                    a = n.observerSlots.pop();
                r < o.length && (i.sourceSlots[a] = r, o[r] = i, n.observerSlots[r] = a)
            }
        }
    if (t.tOwned) {
        for (e = t.tOwned.length - 1; e >= 0; e--) wi(t.tOwned[e]);
        delete t.tOwned
    }
    if (t.owned) {
        for (e = t.owned.length - 1; e >= 0; e--) wi(t.owned[e]);
        t.owned = null
    }
    if (t.cleanups) {
        for (e = t.cleanups.length - 1; e >= 0; e--) t.cleanups[e]();
        t.cleanups = null
    }
    t.state = 0
}

function em(t) {
    return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
        cause: t
    })
}

function il(t, e = ot) {
    throw em(t)
}

function Hs(t) {
    if (typeof t == "function" && !t.length) return Hs(t());
    if (Array.isArray(t)) {
        let e = [];
        for (let n = 0; n < t.length; n++) {
            let r = Hs(t[n]);
            Array.isArray(r) ? e.push.apply(e, r) : e.push(r)
        }
        return e
    }
    return t
}

function tm(t, e) {
    return function(r) {
        let o;
        return Ve(() => o = Et(() => (ot.context = Xt(Je({}, ot.context), {
            [t]: r.value
        }), Ma(() => r.children))), void 0), o
    }
}
var nm = Symbol("fallback");

function ru(t) {
    for (let e = 0; e < t.length; e++) t[e]()
}

function rm(t, e, n = {}) {
    let r = [],
        o = [],
        i = [],
        a = 0,
        s = e.length > 1 ? [] : null;
    return zt(() => ru(i)), () => {
        let c = t() || [],
            d = c.length,
            h, f;
        return c[Ns], Et(() => {
            let w, S, k, $, q, P, F, re, L;
            if (d === 0) a !== 0 && (ru(i), i = [], r = [], o = [], a = 0, s && (s = [])), n.fallback && (r = [nm], o[0] = pi(Z => (i[0] = Z, n.fallback())), a = 1);
            else if (a === 0) {
                for (o = new Array(d), f = 0; f < d; f++) r[f] = c[f], o[f] = pi(b);
                a = d
            } else {
                for (k = new Array(d), $ = new Array(d), s && (q = new Array(d)), P = 0, F = Math.min(a, d); P < F && r[P] === c[P]; P++);
                for (F = a - 1, re = d - 1; F >= P && re >= P && r[F] === c[re]; F--, re--) k[re] = o[F], $[re] = i[F], s && (q[re] = s[F]);
                for (w = new Map, S = new Array(re + 1), f = re; f >= P; f--) L = c[f], h = w.get(L), S[f] = h === void 0 ? -1 : h, w.set(L, f);
                for (h = P; h <= F; h++) L = r[h], f = w.get(L), f !== void 0 && f !== -1 ? (k[f] = o[h], $[f] = i[h], s && (q[f] = s[h]), f = S[f], w.set(L, f)) : i[h]();
                for (f = P; f < d; f++) f in k ? (o[f] = k[f], i[f] = $[f], s && (s[f] = q[f], s[f](f))) : o[f] = pi(b);
                o = o.slice(0, a = d), r = c.slice(0)
            }
            return o
        });

        function b(w) {
            if (i[f] = w, s) {
                let [S, k] = Te(f);
                return s[f] = k, e(c[f], S)
            }
            return e(c[f])
        }
    }
}

function g(t, e) {
    return Et(() => t(e || {}))
}

function ia() {
    return !0
}
var Ks = {
    get(t, e, n) {
        return e === gn ? n : t.get(e)
    },
    has(t, e) {
        return e === gn ? !0 : t.has(e)
    },
    set: ia,
    deleteProperty: ia,
    getOwnPropertyDescriptor(t, e) {
        return {
            configurable: !0,
            enumerable: !0,
            get() {
                return t.get(e)
            },
            set: ia,
            deleteProperty: ia
        }
    },
    ownKeys(t) {
        return t.keys()
    }
};

function Es(t) {
    return (t = typeof t == "function" ? t() : t) ? t : {}
}

function om() {
    for (let t = 0, e = this.length; t < e; ++t) {
        let n = this[t]();
        if (n !== void 0) return n
    }
}

function kn(...t) {
    let e = !1;
    for (let a = 0; a < t.length; a++) {
        let s = t[a];
        e = e || !!s && gn in s, t[a] = typeof s == "function" ? (e = !0, ie(s)) : s
    }
    if (S1 && e) return new Proxy({
        get(a) {
            for (let s = t.length - 1; s >= 0; s--) {
                let c = Es(t[s])[a];
                if (c !== void 0) return c
            }
        },
        has(a) {
            for (let s = t.length - 1; s >= 0; s--)
                if (a in Es(t[s])) return !0;
            return !1
        },
        keys() {
            let a = [];
            for (let s = 0; s < t.length; s++) a.push(...Object.keys(Es(t[s])));
            return [...new Set(a)]
        }
    }, Ks);
    let n = {},
        r = Object.create(null);
    for (let a = t.length - 1; a >= 0; a--) {
        let s = t[a];
        if (!s) continue;
        let c = Object.getOwnPropertyNames(s);
        for (let d = c.length - 1; d >= 0; d--) {
            let h = c[d];
            if (h === "__proto__" || h === "constructor") continue;
            let f = Object.getOwnPropertyDescriptor(s, h);
            if (!r[h]) r[h] = f.get ? {
                enumerable: !0,
                configurable: !0,
                get: om.bind(n[h] = [f.get.bind(s)])
            } : f.value !== void 0 ? f : void 0;
            else {
                let b = n[h];
                b && (f.get ? b.push(f.get.bind(s)) : f.value !== void 0 && b.push(() => f.value))
            }
        }
    }
    let o = {},
        i = Object.keys(r);
    for (let a = i.length - 1; a >= 0; a--) {
        let s = i[a],
            c = r[s];
        c && c.get ? Object.defineProperty(o, s, c) : o[s] = c ? c.value : void 0
    }
    return o
}

function al(t, ...e) {
    if (S1 && gn in t) {
        let o = new Set(e.length > 1 ? e.flat() : e[0]),
            i = e.map(a => new Proxy({
                get(s) {
                    return a.includes(s) ? t[s] : void 0
                },
                has(s) {
                    return a.includes(s) && s in t
                },
                keys() {
                    return a.filter(s => s in t)
                }
            }, Ks));
        return i.push(new Proxy({
            get(a) {
                return o.has(a) ? void 0 : t[a]
            },
            has(a) {
                return o.has(a) ? !1 : a in t
            },
            keys() {
                return Object.keys(t).filter(a => !o.has(a))
            }
        }, Ks)), i
    }
    let n = {},
        r = e.map(() => ({}));
    for (let o of Object.getOwnPropertyNames(t)) {
        let i = Object.getOwnPropertyDescriptor(t, o),
            a = !i.get && !i.set && i.enumerable && i.writable && i.configurable,
            s = !1,
            c = 0;
        for (let d of e) d.includes(o) && (s = !0, a ? r[c][o] = i.value : Object.defineProperty(r[c], o, i)), ++c;
        s || (a ? n[o] = i.value : Object.defineProperty(n, o, i))
    }
    return [...r, n]
}
var _1 = t => "Stale read from <".concat(t, ">.");

function Ci(t) {
    let e = "fallback" in t && {
        fallback: () => t.fallback
    };
    return ie(rm(() => t.each, t.children, e || void 0))
}

function Se(t) {
    let e = t.keyed,
        n = ie(() => t.when, void 0, {
            equals: (r, o) => e ? r === o : !r == !o
        });
    return ie(() => {
        let r = n();
        if (r) {
            let o = t.children;
            return typeof o == "function" && o.length > 0 ? Et(() => o(e ? r : () => {
                if (!Et(n)) throw _1("Show");
                return t.when
            })) : o
        }
        return t.fallback
    }, void 0, void 0)
}

function Si(t) {
    let e = !1,
        n = (i, a) => (e ? i[1] === a[1] : !i[1] == !a[1]) && i[2] === a[2],
        r = Ma(() => t.children),
        o = ie(() => {
            let i = r();
            Array.isArray(i) || (i = [i]);
            for (let a = 0; a < i.length; a++) {
                let s = i[a].when;
                if (s) return e = !!i[a].keyed, [a, s, i[a]]
            }
            return [-1]
        }, void 0, {
            equals: n
        });
    return ie(() => {
        let [i, a, s] = o();
        if (i < 0) return t.fallback;
        let c = s.children;
        return typeof c == "function" && c.length > 0 ? Et(() => c(e ? a : () => {
            if (Et(o)[0] !== i) throw _1("Match");
            return s.when
        })) : c
    }, void 0, void 0)
}

function It(t) {
    return t
}
var Vs = Symbol("store-raw"),
    uo = Symbol("store-node"),
    Vn = Symbol("store-has"),
    L1 = Symbol("store-self");

function W1(t) {
    let e = t[gn];
    if (!e && (Object.defineProperty(t, gn, {
            value: e = new Proxy(t, sm)
        }), !Array.isArray(t))) {
        let n = Object.keys(t),
            r = Object.getOwnPropertyDescriptors(t);
        for (let o = 0, i = n.length; o < i; o++) {
            let a = n[o];
            r[a].get && Object.defineProperty(t, a, {
                enumerable: r[a].enumerable,
                get: r[a].get.bind(e)
            })
        }
    }
    return e
}

function ba(t) {
    let e;
    return t != null && typeof t == "object" && (t[gn] || !(e = Object.getPrototypeOf(t)) || e === Object.prototype || Array.isArray(t))
}

function po(t, e = new Set) {
    let n, r, o, i;
    if (n = t != null && t[Vs]) return n;
    if (!ba(t) || e.has(t)) return t;
    if (Array.isArray(t)) {
        Object.isFrozen(t) ? t = t.slice(0) : e.add(t);
        for (let a = 0, s = t.length; a < s; a++) o = t[a], (r = po(o, e)) !== o && (t[a] = r)
    } else {
        Object.isFrozen(t) ? t = Object.assign({}, t) : e.add(t);
        let a = Object.keys(t),
            s = Object.getOwnPropertyDescriptors(t);
        for (let c = 0, d = a.length; c < d; c++) i = a[c], !s[i].get && (o = t[i], (r = po(o, e)) !== o && (t[i] = r))
    }
    return t
}

function wa(t, e) {
    let n = t[e];
    return n || Object.defineProperty(t, e, {
        value: n = Object.create(null)
    }), n
}

function xi(t, e, n) {
    if (t[e]) return t[e];
    let [r, o] = Te(n, {
        equals: !1,
        internal: !0
    });
    return r.$ = o, t[e] = r
}

function im(t, e) {
    let n = Reflect.getOwnPropertyDescriptor(t, e);
    return !n || n.get || !n.configurable || e === gn || e === uo || (delete n.value, delete n.writable, n.get = () => t[gn][e]), n
}

function D1(t) {
    $s() && xi(wa(t, uo), L1)()
}

function am(t) {
    return D1(t), Reflect.ownKeys(t)
}
var sm = {
    get(t, e, n) {
        if (e === Vs) return t;
        if (e === gn) return n;
        if (e === Ns) return D1(t), n;
        let r = wa(t, uo),
            o = r[e],
            i = o ? o() : t[e];
        if (e === uo || e === Vn || e === "__proto__") return i;
        if (!o) {
            let a = Object.getOwnPropertyDescriptor(t, e);
            $s() && (typeof i != "function" || t.hasOwnProperty(e)) && !(a && a.get) && (i = xi(r, e, i)())
        }
        return ba(i) ? W1(i) : i
    },
    has(t, e) {
        return e === Vs || e === gn || e === Ns || e === uo || e === Vn || e === "__proto__" ? !0 : ($s() && xi(wa(t, Vn), e)(), e in t)
    },
    set() {
        return !0
    },
    deleteProperty() {
        return !0
    },
    ownKeys: am,
    getOwnPropertyDescriptor: im
};

function xa(t, e, n, r = !1) {
    if (!r && t[e] === n) return;
    let o = t[e],
        i = t.length;
    n === void 0 ? (delete t[e], t[Vn] && t[Vn][e] && o !== void 0 && t[Vn][e].$()) : (t[e] = n, t[Vn] && t[Vn][e] && o === void 0 && t[Vn][e].$());
    let a = wa(t, uo),
        s;
    if ((s = xi(a, e, o)) && s.$(() => n), Array.isArray(t) && t.length !== i) {
        for (let c = t.length; c < i; c++)(s = a[c]) && s.$();
        (s = xi(a, "length", i)) && s.$(t.length)
    }(s = a[L1]) && s.$()
}

function N1(t, e) {
    let n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1) {
        let o = n[r];
        xa(t, o, e[o])
    }
}

function lm(t, e) {
    if (typeof e == "function" && (e = e(t)), e = po(e), Array.isArray(e)) {
        if (t === e) return;
        let n = 0,
            r = e.length;
        for (; n < r; n++) {
            let o = e[n];
            t[n] !== o && xa(t, n, o)
        }
        xa(t, "length", r)
    } else N1(t, e)
}

function ui(t, e, n = []) {
    let r, o = t;
    if (e.length > 1) {
        r = e.shift();
        let a = typeof r,
            s = Array.isArray(t);
        if (Array.isArray(r)) {
            for (let c = 0; c < r.length; c++) ui(t, [r[c]].concat(e), n);
            return
        } else if (s && a === "function") {
            for (let c = 0; c < t.length; c++) r(t[c], c) && ui(t, [c].concat(e), n);
            return
        } else if (s && a === "object") {
            let {
                from: c = 0,
                to: d = t.length - 1,
                by: h = 1
            } = r;
            for (let f = c; f <= d; f += h) ui(t, [f].concat(e), n);
            return
        } else if (e.length > 1) {
            ui(t[r], e, [r].concat(n));
            return
        }
        o = t[r], n = [r].concat(n)
    }
    let i = e[0];
    typeof i == "function" && (i = i(o, n), i === o) || r === void 0 && i == null || (i = po(i), r === void 0 || ba(o) && ba(i) && !Array.isArray(i) ? N1(o, i) : xa(t, r, i))
}

function sl(...[t, e]) {
    let n = po(t || {}),
        r = Array.isArray(n),
        o = W1(n);

    function i(...a) {
        B1(() => {
            r && a.length === 1 ? lm(n, a[0]) : ui(n, a)
        })
    }
    return [o, i]
}
var [qe, aa] = sl({
    buttonRootId: null,
    language: "en",
    returnStrategy: "back",
    twaReturnUrl: void 0,
    walletsListConfiguration: {},
    enableAndroidBackHandler: !0
}), di = class {
    constructor() {
        we(this, "storage", {})
    }
    static getInstance() {
        return di.instance || (di.instance = new di), di.instance
    }
    get length() {
        return Object.keys(this.storage).length
    }
    clear() {
        this.storage = {}
    }
    getItem(t) {
        var e;
        return (e = this.storage[t]) != null ? e : null
    }
    key(t) {
        var e;
        let n = Object.keys(this.storage);
        return t < 0 || t >= n.length ? null : (e = n[t]) != null ? e : null
    }
    removeItem(t) {
        delete this.storage[t]
    }
    setItem(t, e) {
        this.storage[t] = e
    }
}, $1 = di;
we($1, "instance");
var cm = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
    um = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...cm]),
    dm = new Set(["innerHTML", "textContent", "innerText", "children"]),
    fm = Object.assign(Object.create(null), {
        className: "class",
        htmlFor: "for"
    }),
    hm = Object.assign(Object.create(null), {
        class: "className",
        formnovalidate: {
            $: "formNoValidate",
            BUTTON: 1,
            INPUT: 1
        },
        ismap: {
            $: "isMap",
            IMG: 1
        },
        nomodule: {
            $: "noModule",
            SCRIPT: 1
        },
        playsinline: {
            $: "playsInline",
            VIDEO: 1
        },
        readonly: {
            $: "readOnly",
            INPUT: 1,
            TEXTAREA: 1
        }
    });

function gm(t, e) {
    let n = hm[t];
    return typeof n == "object" ? n[e] ? n.$ : void 0 : n
}
var pm = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
    mm = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
    ym = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    };

function bm(t, e, n) {
    let r = n.length,
        o = e.length,
        i = r,
        a = 0,
        s = 0,
        c = e[o - 1].nextSibling,
        d = null;
    for (; a < o || s < i;) {
        if (e[a] === n[s]) {
            a++, s++;
            continue
        }
        for (; e[o - 1] === n[i - 1];) o--, i--;
        if (o === a) {
            let h = i < r ? s ? n[s - 1].nextSibling : n[i - s] : c;
            for (; s < i;) t.insertBefore(n[s++], h)
        } else if (i === s)
            for (; a < o;)(!d || !d.has(e[a])) && e[a].remove(), a++;
        else if (e[a] === n[i - 1] && n[s] === e[o - 1]) {
            let h = e[--o].nextSibling;
            t.insertBefore(n[s++], e[a++].nextSibling), t.insertBefore(n[--i], h), e[o] = n[i]
        } else {
            if (!d) {
                d = new Map;
                let f = s;
                for (; f < i;) d.set(n[f], f++)
            }
            let h = d.get(e[a]);
            if (h != null)
                if (s < h && h < i) {
                    let f = a,
                        b = 1,
                        w;
                    for (; ++f < o && f < i && !((w = d.get(e[f])) == null || w !== h + b);) b++;
                    if (b > h - s) {
                        let S = e[a];
                        for (; s < h;) t.insertBefore(n[s++], S)
                    } else t.replaceChild(n[s++], e[a++])
                } else a++;
            else e[a++].remove()
        }
    }
}
var ou = "_$DX_DELEGATE";

function wm(t, e, n, r = {}) {
    let o;
    return pi(i => {
        o = i, e === document ? t() : Mt(e, t(), e.firstChild ? null : void 0, n)
    }, r.owner), () => {
        o(), e.textContent = ""
    }
}

function je(t, e, n) {
    let r, o = () => {
            let a = document.createElement("template");
            return a.innerHTML = t, n ? a.content.firstChild.firstChild : a.content.firstChild
        },
        i = e ? () => Et(() => document.importNode(r || (r = o()), !0)) : () => (r || (r = o())).cloneNode(!0);
    return i.cloneNode = i, i
}

function xm(t, e = window.document) {
    let n = e[ou] || (e[ou] = new Set);
    for (let r = 0, o = t.length; r < o; r++) {
        let i = t[r];
        n.has(i) || (n.add(i), e.addEventListener(i, Im))
    }
}

function ye(t, e, n) {
    n == null ? t.removeAttribute(e) : t.setAttribute(e, n)
}

function vm(t, e, n, r) {
    r == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, r)
}

function Cm(t, e, n) {
    n ? t.setAttribute(e, "") : t.removeAttribute(e)
}

function ll(t, e) {
    e == null ? t.removeAttribute("class") : t.className = e
}

function Sm(t, e, n, r) {
    if (r) Array.isArray(n) ? (t["$$".concat(e)] = n[0], t["$$".concat(e, "Data")] = n[1]) : t["$$".concat(e)] = n;
    else if (Array.isArray(n)) {
        let o = n[0];
        t.addEventListener(e, n[0] = i => o.call(t, n[1], i))
    } else t.addEventListener(e, n, typeof n != "function" && n)
}

function km(t, e, n = {}) {
    let r = Object.keys(e || {}),
        o = Object.keys(n),
        i, a;
    for (i = 0, a = o.length; i < a; i++) {
        let s = o[i];
        !s || s === "undefined" || e[s] || (iu(t, s, !1), delete n[s])
    }
    for (i = 0, a = r.length; i < a; i++) {
        let s = r[i],
            c = !!e[s];
        !s || s === "undefined" || n[s] === c || !c || (iu(t, s, !0), n[s] = c)
    }
    return n
}

function Am(t, e, n) {
    if (!e) return n ? ye(t, "style") : e;
    let r = t.style;
    if (typeof e == "string") return r.cssText = e;
    typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), e || (e = {});
    let o, i;
    for (i in n) e[i] == null && r.removeProperty(i), delete n[i];
    for (i in e) o = e[i], o !== n[i] && (r.setProperty(i, o), n[i] = o);
    return n
}

function H1(t, e = {}, n, r) {
    let o = {};
    return r || Ve(() => o.children = mo(t, e.children, o.children)), Ve(() => typeof e.ref == "function" && Mr(e.ref, t)), Ve(() => Tm(t, e, n, !0, o, !0)), o
}

function Mr(t, e, n) {
    return Et(() => t(e, n))
}

function Mt(t, e, n, r) {
    if (n !== void 0 && !r && (r = []), typeof e != "function") return mo(t, e, r, n);
    Ve(o => mo(t, e(), o, n), r)
}

function Tm(t, e, n, r, o = {}, i = !1) {
    e || (e = {});
    for (let a in o)
        if (!(a in e)) {
            if (a === "children") continue;
            o[a] = au(t, a, null, o[a], n, i, e)
        }
    for (let a in e) {
        if (a === "children") {
            r || mo(t, e.children);
            continue
        }
        let s = e[a];
        o[a] = au(t, a, s, o[a], n, i, e)
    }
}

function Bm(t) {
    return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase())
}

function iu(t, e, n) {
    let r = e.trim().split(/\s+/);
    for (let o = 0, i = r.length; o < i; o++) t.classList.toggle(r[o], n)
}

function au(t, e, n, r, o, i, a) {
    let s, c, d, h, f;
    if (e === "style") return Am(t, n, r);
    if (e === "classList") return km(t, n, r);
    if (n === r) return r;
    if (e === "ref") i || n(t);
    else if (e.slice(0, 3) === "on:") {
        let b = e.slice(3);
        r && t.removeEventListener(b, r, typeof r != "function" && r), n && t.addEventListener(b, n, typeof n != "function" && n)
    } else if (e.slice(0, 10) === "oncapture:") {
        let b = e.slice(10);
        r && t.removeEventListener(b, r, !0), n && t.addEventListener(b, n, !0)
    } else if (e.slice(0, 2) === "on") {
        let b = e.slice(2).toLowerCase(),
            w = pm.has(b);
        if (!w && r) {
            let S = Array.isArray(r) ? r[0] : r;
            t.removeEventListener(b, S)
        }(w || n) && (Sm(t, b, n, w), w && xm([b]))
    } else if (e.slice(0, 5) === "attr:") ye(t, e.slice(5), n);
    else if (e.slice(0, 5) === "bool:") Cm(t, e.slice(5), n);
    else if ((f = e.slice(0, 5) === "prop:") || (d = dm.has(e)) || !o && ((h = gm(e, t.tagName)) || (c = um.has(e))) || (s = t.nodeName.includes("-") || "is" in a)) f && (e = e.slice(5), c = !0), e === "class" || e === "className" ? ll(t, n) : s && !c && !d ? t[Bm(e)] = n : t[h || e] = n;
    else {
        let b = o && e.indexOf(":") > -1 && ym[e.split(":")[0]];
        b ? vm(t, b, e, n) : ye(t, fm[e] || e, n)
    }
    return n
}

function Im(t) {
    let e = t.target,
        n = "$$".concat(t.type),
        r = t.target,
        o = t.currentTarget,
        i = c => Object.defineProperty(t, "target", {
            configurable: !0,
            value: c
        }),
        a = () => {
            let c = e[n];
            if (c && !e.disabled) {
                let d = e["".concat(n, "Data")];
                if (d !== void 0 ? c.call(e, d, t) : c.call(e, t), t.cancelBubble) return
            }
            return e.host && typeof e.host != "string" && !e.host._$host && e.contains(t.target) && i(e.host), !0
        },
        s = () => {
            for (; a() && (e = e._$host || e.parentNode || e.host););
        };
    if (Object.defineProperty(t, "currentTarget", {
            configurable: !0,
            get() {
                return e || document
            }
        }), t.composedPath) {
        let c = t.composedPath();
        i(c[0]);
        for (let d = 0; d < c.length - 2 && (e = c[d], !!a()); d++) {
            if (e._$host) {
                e = e._$host, s();
                break
            }
            if (e.parentNode === o) break
        }
    } else s();
    i(r)
}

function mo(t, e, n, r, o) {
    for (; typeof n == "function";) n = n();
    if (e === n) return n;
    let i = typeof e,
        a = r !== void 0;
    if (t = a && n[0] && n[0].parentNode || t, i === "string" || i === "number") {
        if (i === "number" && (e = e.toString(), e === n)) return n;
        if (a) {
            let s = n[0];
            s && s.nodeType === 3 ? s.data !== e && (s.data = e) : s = document.createTextNode(e), n = so(t, n, r, s)
        } else n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e
    } else if (e == null || i === "boolean") n = so(t, n, r);
    else {
        if (i === "function") return Ve(() => {
            let s = e();
            for (; typeof s == "function";) s = s();
            n = mo(t, s, n, r)
        }), () => n;
        if (Array.isArray(e)) {
            let s = [],
                c = n && Array.isArray(n);
            if (js(s, e, n, o)) return Ve(() => n = mo(t, s, n, r, !0)), () => n;
            if (s.length === 0) {
                if (n = so(t, n, r), a) return n
            } else c ? n.length === 0 ? su(t, s, r) : bm(t, n, s) : (n && so(t), su(t, s));
            n = s
        } else if (e.nodeType) {
            if (Array.isArray(n)) {
                if (a) return n = so(t, n, r, e);
                so(t, n, null, e)
            } else n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
            n = e
        }
    }
    return n
}

function js(t, e, n, r) {
    let o = !1;
    for (let i = 0, a = e.length; i < a; i++) {
        let s = e[i],
            c = n && n[t.length],
            d;
        if (!(s == null || s === !0 || s === !1))
            if ((d = typeof s) == "object" && s.nodeType) t.push(s);
            else if (Array.isArray(s)) o = js(t, s, c) || o;
        else if (d === "function")
            if (r) {
                for (; typeof s == "function";) s = s();
                o = js(t, Array.isArray(s) ? s : [s], Array.isArray(c) ? c : [c]) || o
            } else t.push(s), o = !0;
        else {
            let h = String(s);
            c && c.nodeType === 3 && c.data === h ? t.push(c) : t.push(document.createTextNode(h))
        }
    }
    return o
}

function su(t, e, n = null) {
    for (let r = 0, o = e.length; r < o; r++) t.insertBefore(e[r], n)
}

function so(t, e, n, r) {
    if (n === void 0) return t.textContent = "";
    let o = r || document.createTextNode("");
    if (e.length) {
        let i = !1;
        for (let a = e.length - 1; a >= 0; a--) {
            let s = e[a];
            if (o !== s) {
                let c = s.parentNode === t;
                !i && !a ? c ? t.replaceChild(o, s) : t.insertBefore(o, n) : c && s.remove()
            } else i = !0
        }
    } else t.insertBefore(o, n);
    return [o]
}
var Em = "http://www.w3.org/2000/svg";

function K1(t, e = !1) {
    return e ? document.createElementNS(Em, t) : document.createElement(t)
}

function V1(t) {
    let {
        useShadow: e
    } = t, n = document.createTextNode(""), r = () => t.mount || document.body, o = E1(), i, a = !!C1.context;
    return St(() => {
        i || (i = Z0(o, () => ie(() => t.children)));
        let s = r();
        if (s instanceof HTMLHeadElement) {
            let [c, d] = Te(!1), h = () => d(!0);
            pi(f => Mt(s, () => c() ? f() : i(), null)), zt(h)
        } else {
            let c = K1(t.isSVG ? "g" : "div", t.isSVG),
                d = e && c.attachShadow ? c.attachShadow({
                    mode: "open"
                }) : c;
            Object.defineProperty(c, "_$host", {
                get() {
                    return n.parentNode
                },
                configurable: !0
            }), Mt(d, i), s.appendChild(c), t.ref && t.ref(c), zt(() => s.removeChild(c))
        }
    }, void 0, {
        render: !a
    }), n
}

function yo(t) {
    let [e, n] = al(t, ["component"]), r = ie(() => e.component);
    return ie(() => {
        let o = r();
        switch (typeof o) {
            case "function":
                return Et(() => o(n));
            case "string":
                let i = mm.has(o),
                    a = K1(o, i);
                return H1(a, n, i), a
        }
    })
}
var Rm = {
        data: ""
    },
    Um = t => typeof window == "object" ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : t || Rm,
    Mm = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    Pm = /\/\*[^]*?\*\/|  +/g,
    lu = /\n+/g,
    Ir = (t, e) => {
        let n = "",
            r = "",
            o = "";
        for (let i in t) {
            let a = t[i];
            i[0] == "@" ? i[1] == "i" ? n = i + " " + a + ";" : r += i[1] == "f" ? Ir(a, i) : i + "{" + Ir(a, i[1] == "k" ? "" : e) + "}" : typeof a == "object" ? r += Ir(a, e ? e.replace(/([^,])+/g, s => i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, c => /&/.test(c) ? c.replace(/&/g, s) : s ? s + " " + c : c)) : i) : a != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), o += Ir.p ? Ir.p(i, a) : i + ":" + a + ";")
        }
        return n + (e && o ? e + "{" + o + "}" : o) + r
    },
    Kn = {},
    j1 = t => {
        if (typeof t == "object") {
            let e = "";
            for (let n in t) e += n + j1(t[n]);
            return e
        }
        return t
    },
    _m = (t, e, n, r, o) => {
        let i = j1(t),
            a = Kn[i] || (Kn[i] = (c => {
                let d = 0,
                    h = 11;
                for (; d < c.length;) h = 101 * h + c.charCodeAt(d++) >>> 0;
                return "go" + h
            })(i));
        if (!Kn[a]) {
            let c = i !== t ? t : (d => {
                let h, f, b = [{}];
                for (; h = Mm.exec(d.replace(Pm, ""));) h[4] ? b.shift() : h[3] ? (f = h[3].replace(lu, " ").trim(), b.unshift(b[0][f] = b[0][f] || {})) : b[0][h[1]] = h[2].replace(lu, " ").trim();
                return b[0]
            })(t);
            Kn[a] = Ir(o ? {
                ["@keyframes " + a]: c
            } : c, n ? "" : "." + a)
        }
        let s = n && Kn.g ? Kn.g : null;
        return n && (Kn.g = Kn[a]), ((c, d, h, f) => {
            f ? d.data = d.data.replace(f, c) : d.data.indexOf(c) === -1 && (d.data = h ? c + d.data : d.data + c)
        })(Kn[a], e, r, s), a
    },
    Lm = (t, e, n) => t.reduce((r, o, i) => {
        let a = e[i];
        if (a && a.call) {
            let s = a(n),
                c = s && s.props && s.props.className || /^go/.test(s) && s;
            a = c ? "." + c : s && typeof s == "object" ? s.props ? "" : Ir(s, "") : s === !1 ? "" : s
        }
        return r + o + (a == null ? "" : a)
    }, "");

function Fn(t) {
    let e = this || {},
        n = t.call ? t(e.p) : t;
    return _m(n.unshift ? n.raw ? Lm(n, [].slice.call(arguments, 1), e.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(e.p) : o), {}) : n, Um(e.target), e.g, e.o, e.k)
}
Fn.bind({
    g: 1
});
var Wm = Fn.bind({
        k: 1
    }),
    cl = Ua();

function Dm(t) {
    return g(cl.Provider, {
        value: t.theme,
        get children() {
            return t.children
        }
    })
}

function it() {
    return Ot(cl)
}

function z1(t) {
    let e = this || {};
    return (...n) => {
        let r = o => {
            let i = Ot(cl),
                a = kn(o, {
                    theme: i
                }),
                s = kn(a, {
                    get class() {
                        let w = a.class,
                            S = "class" in a && /^go[0-9]+/.test(w),
                            k = Fn.apply({
                                target: e.target,
                                o: S,
                                p: a,
                                g: e.g
                            }, n);
                        return [w, k].filter(Boolean).join(" ")
                    }
                }),
                [c, d] = al(s, ["as", "theme"]),
                h = d,
                f = c.as || t,
                b;
            return typeof f == "function" ? b = f(h) : e.g == 1 ? (b = document.createElement(f), H1(b, h)) : b = yo(kn({
                component: f
            }, h)), b
        };
        return r.class = o => Et(() => Fn.apply({
            target: e.target,
            p: o,
            g: e.g
        }, n)), r
    }
}
var _ = new Proxy(z1, {
    get(t, e) {
        return t(e)
    }
});

function Nm() {
    let t = z1.call({
        g: 1
    }, "div").apply(null, arguments);
    return function(n) {
        return t(n), null
    }
}
var jn = "tc-root",
    ul = "tc-disable-scroll",
    Rs = "tc-using-mouse",
    Vu, $m = () => {
        document.body.addEventListener("mousedown", () => document.body.classList.add(Rs)), document.body.addEventListener("keydown", e => {
            e.key === "Tab" && document.body.classList.remove(Rs)
        });
        let t = Nm(Vu || (Vu = E(["\n    ", " * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n\n        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    ", " img {\n      -webkit-user-select: none;\n      -webkit-touch-callout: none;\n    }\n\n    ", " *:focus {\n        outline: #08f auto 2px;\n    }\n\n    ", " li {\n        list-style: none;\n    }\n\n    ", " button {\n        outline: none;\n    }\n\n    body.", " {\n        position: fixed;\n        overflow-y: scroll;\n        right: 0;\n        left: 0;\n    }\n\n    body.", " ", " *:focus {\n        outline: none;\n    }\n"])), jn, jn, jn, jn, jn, ul, Rs, jn);
        return g(t, {})
    };

function Hm(t) {
    t[0] === "#" && (t = t.slice(1));
    let e = parseInt(t, 16),
        n = e >> 16 & 255,
        r = e >> 8 & 255,
        o = e & 255;
    return [n, r, o].join(",")
}

function Wr(t, e) {
    return t[0] === "#" && (t = Hm(t)), "rgba(".concat(t, ", ").concat(e, ")")
}

function An(t) {
    return t.toString() + "px"
}

function fa(...t) {
    try {
        console.debug("[TON_CONNECT_UI]", ...t)
    } catch {}
}

function Km(...t) {
    try {
        console.error("[TON_CONNECT_UI]", ...t)
    } catch {}
}

function Vm(...t) {
    try {
        console.warn("[TON_CONNECT_UI]", ...t)
    } catch {}
}
var Tt = class t extends oe {
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, t.prototype)
        }
    },
    ft = (t => (t.DARK = "DARK", t.LIGHT = "LIGHT", t))(ft || {});

function mi(t, e = "_self") {
    fa("openLink", t, e), window.open(t, e, "noopener noreferrer")
}

function at(t) {
    mi(t, "_blank")
}

function ar(t, e) {
    let n = () => {
            $e("safari") || hn("android") && $e("firefox") || e()
        },
        r = setTimeout(() => n(), 500);
    window.addEventListener("blur", () => clearTimeout(r), {
        once: !0
    }), mi(t, "_self")
}

function jm() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? ft.LIGHT : ft.DARK
}

function zm(t) {
    let e = n => t(n.matches ? ft.DARK : ft.LIGHT);
    return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e), () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", e)
}

function Om() {
    document.documentElement.scrollHeight !== document.documentElement.clientHeight && (document.body.style.top = An(-document.documentElement.scrollTop), document.body.classList.add(ul))
}

function Fm() {
    document.body.classList.remove(ul), document.documentElement.scrollTo({
        top: -parseFloat(getComputedStyle(document.body).top)
    }), document.body.style.top = "auto"
}

function qm() {
    document.body.hasAttribute("ontouchstart") || document.body.setAttribute("ontouchstart", "")
}

function Gm() {
    customElements.define(jn, class extends HTMLElement {})
}

function O1(t) {
    return Qe(this, null, function*() {
        yield new Promise(e => requestAnimationFrame(e)), t()
    })
}

function Ym(t) {
    return Qe(this, null, function*() {
        return yield new Promise(e => requestAnimationFrame(e)), t()
    })
}

function F1(t) {
    document.readyState !== "complete" ? window.addEventListener("load", () => O1(() => F1(t)), {
        once: !0
    }) : t.forEach(e => {
        let n = new window.Image;
        n.src = e
    })
}

function En() {
    if (typeof window < "u") return window
}

function dl() {
    if (Zm()) return localStorage;
    if (Qm()) throw new Tt("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
    return $1.getInstance()
}

function Zm() {
    try {
        return typeof localStorage < "u"
    } catch {
        return !1
    }
}

function Qm() {
    return typeof process < "u" && process.versions != null && process.versions.node != null
}

function fl() {
    let t = navigator.userAgent,
        e;
    /ipad|iphone|ipod/i.test(t) ? e = "ios" : /android/i.test(t) ? e = "android" : /macintosh|mac os x/i.test(t) ? e = "macos" : /windows/i.test(t) ? e = "windows" : /linux/i.test(t) && (e = "linux");
    let n;
    return /opera|opr/i.test(t) ? n = "opera" : /firefox|fxios/i.test(t) ? n = "firefox" : /safari/i.test(t) && !/chrome|crios/i.test(t) ? n = "safari" : /chrome|crios/i.test(t) && (n = "chrome"), {
        os: e,
        browser: n
    }
}

function hn(...t) {
    return t.includes(fl().os)
}

function $e(...t) {
    return t.includes(fl().browser)
}

function sa(t, e) {
    let n = new URL(t);
    return e + n.search
}
var zs = class {
        constructor() {
            we(this, "localStorage"), we(this, "storageKey", "ton-connect-ui_wallet-info"), this.localStorage = dl()
        }
        setWalletInfo(e) {
            this.localStorage.setItem(this.storageKey, JSON.stringify(e))
        }
        getWalletInfo() {
            let e = this.localStorage.getItem(this.storageKey);
            return e ? JSON.parse(e) : null
        }
        removeWalletInfo() {
            this.localStorage.removeItem(this.storageKey)
        }
    },
    Os = class {
        constructor() {
            we(this, "localStorage"), we(this, "storageKey", "ton-connect-ui_preferred-wallet"), this.localStorage = dl()
        }
        setPreferredWalletAppName(e) {
            this.localStorage.setItem(this.storageKey, e)
        }
        getPreferredWalletAppName() {
            return this.localStorage.getItem(this.storageKey) || void 0
        }
    },
    va = class {
        constructor() {
            we(this, "localStorage"), we(this, "storageKey", "ton-connect-ui_last-selected-wallet-info"), this.localStorage = dl()
        }
        setLastSelectedWalletInfo(e) {
            this.localStorage.setItem(this.storageKey, JSON.stringify(e))
        }
        getLastSelectedWalletInfo() {
            let e = this.localStorage.getItem(this.storageKey);
            return e ? JSON.parse(e) : null
        }
        removeLastSelectedWalletInfo() {
            this.localStorage.removeItem(this.storageKey)
        }
    },
    [Fs, cu] = Te({
        status: "closed",
        closeReason: null
    }),
    uu = ie(() => Fs().status === "opened"),
    [Ca, du] = Te({
        status: "closed",
        closeReason: null
    }),
    fu = ie(() => Ca().status === "opened"),
    Xm = ie(() => {
        let t = Ca();
        return t.status === "opened" ? t.walletInfo : null
    }),
    lo = typeof window < "u" ? new va : void 0,
    [Jm, ey] = Te((lo == null ? void 0 : lo.getLastSelectedWalletInfo()) || null),
    Pt = t => {
        lo || (lo = new va), t ? lo.setLastSelectedWalletInfo(t) : lo.removeLastSelectedWalletInfo(), ey(t)
    },
    [Qt, Er] = Te(null),
    q1 = {
        constant: {
            black: "#000000",
            white: "#FFFFFF"
        },
        connectButton: {
            background: "#0098EA",
            foreground: "#FFFFFF"
        },
        accent: "#0098EA",
        telegramButton: "#0098EA",
        icon: {
            primary: "#0F0F0F",
            secondary: "#7A8999",
            tertiary: "#C1CAD2",
            success: "#29CC6A",
            error: "#F5A73B"
        },
        background: {
            primary: "#FFFFFF",
            secondary: "#F1F3F5",
            segment: "#FFFFFF",
            tint: "#F1F3F5",
            qr: "#F1F3F5"
        },
        text: {
            primary: "#0F0F0F",
            secondary: "#6A7785"
        }
    },
    ty = {
        constant: {
            black: "#000000",
            white: "#FFFFFF"
        },
        connectButton: {
            background: "#0098EA",
            foreground: "#FFFFFF"
        },
        accent: "#E5E5EA",
        telegramButton: "#31A6F5",
        icon: {
            primary: "#E5E5EA",
            secondary: "#909099",
            tertiary: "#434347",
            success: "#29CC6A",
            error: "#F5A73B"
        },
        background: {
            primary: "#121214",
            secondary: "#18181A",
            segment: "#262629",
            tint: "#222224",
            qr: "#FFFFFF"
        },
        text: {
            primary: "#E5E5EA",
            secondary: "#7D7D85"
        }
    };

function G1(t, e) {
    for (let n in e) !t.hasOwnProperty(n) || typeof e[n] != "object" ? t[n] = e[n] : G1(t[n], e[n]);
    return t
}

function sr(t, e) {
    return t ? G1(e, t) : e
}
var [ny, hl] = sl({
    theme: ft.LIGHT,
    colors: q1,
    borderRadius: "m"
}), Y1 = {
    [ft.LIGHT]: q1,
    [ft.DARK]: ty
}, Cn = {
    [ft.LIGHT]: void 0,
    [ft.DARK]: void 0
};

function Us(t, e) {
    var n, r;
    e && (Cn[ft.DARK] = sr(e[ft.DARK], (n = Cn[ft.DARK]) != null ? n : {}), Cn[ft.LIGHT] = sr(e[ft.LIGHT], (r = Cn[ft.LIGHT]) != null ? r : {})), hl({
        theme: t,
        colors: sr(Cn[t], Y1[t])
    })
}

function ry(t) {
    hl({
        borderRadius: t
    })
}

function oy(t) {
    var e, n;
    Cn[ft.DARK] = sr(t[ft.DARK], (e = Cn[ft.DARK]) != null ? e : {}), Cn[ft.LIGHT] = sr(t[ft.LIGHT], (n = Cn[ft.LIGHT]) != null ? n : {}), hl(r => ({
        colors: sr(Cn[r.theme], Y1[r.theme])
    }))
}

function iy(t) {
    return [...new Set(t)]
}

function ay(t, e, n) {
    return e.map(r => {
        let o = n.find(i => i[t] === r[t]);
        return n = n.filter(i => i[t] !== r[t]), o === void 0 ? r : o
    }).concat(n)
}
var Pr = {};
try {
    let t = location.hash.toString();
    Pr = ly(t)
} catch {}
var bo = "unknown";
Pr != null && Pr.tgWebAppPlatform && (bo = (Gc = Pr.tgWebAppPlatform) != null ? Gc : "unknown");
if (bo === "unknown") {
    let t = En();
    bo = (Qc = (Zc = (Yc = t == null ? void 0 : t.Telegram) == null ? void 0 : Yc.WebApp) == null ? void 0 : Zc.platform) != null ? Qc : "unknown"
}
var Sa = "6.0";
Pr != null && Pr.tgWebAppVersion && (Sa = Pr.tgWebAppVersion);
if (!Sa) {
    let t = En();
    Sa = (eu = (Jc = (Xc = t == null ? void 0 : t.Telegram) == null ? void 0 : Xc.WebApp) == null ? void 0 : Jc.version) != null ? eu : "6.0"
}

function Rr(...t) {
    return t.includes(bo)
}

function Bn() {
    var t;
    return bo !== "unknown" || !!((t = En()) != null && t.TelegramWebviewProxy)
}

function sy() {
    var t;
    let e = !!((t = En()) != null && t.TelegramWebview);
    return (Bn() || e) && bo === "unknown"
}

function gl() {
    Q1("web_app_expand", {})
}

function qs(t, e) {
    let n = new URL(t);
    if (n.protocol !== "http:" && n.protocol !== "https:") {
        if (e) return e();
        throw new Tt("Url protocol is not supported: ".concat(n))
    }
    if (n.hostname !== "t.me") {
        if (e) return e();
        throw new Tt("Url host is not supported: ".concat(n))
    }
    let r = n.pathname + n.search;
    Z1() || dy("6.1") ? Q1("web_app_open_tg_link", {
        path_full: r
    }) : at("https://t.me" + r)
}

function Z1() {
    try {
        let t = En();
        return t ? t.parent != null && t !== t.parent : !1
    } catch {
        return !1
    }
}

function Q1(t, e) {
    try {
        let n = En();
        if (!n) throw new Tt("Can't post event to parent window: window is not defined");
        if (n.TelegramWebviewProxy !== void 0) fa("postEvent", t, e), n.TelegramWebviewProxy.postEvent(t, JSON.stringify(e));
        else if (n.external && "notify" in n.external) fa("postEvent", t, e), n.external.notify(JSON.stringify({
            eventType: t,
            eventData: e
        }));
        else if (Z1()) {
            let r = "*",
                o = JSON.stringify({
                    eventType: t,
                    eventData: e
                });
            fa("postEvent", t, e), n.parent.postMessage(o, r)
        } else throw new Tt("Can't post event to TMA")
    } catch (n) {
        Km("Can't post event to parent window: ".concat(n))
    }
}

function ly(t) {
    t = t.replace(/^#/, "");
    let e = {};
    if (!t.length) return e;
    if (t.indexOf("=") < 0 && t.indexOf("?") < 0) return e._path = ka(t), e;
    let n = t.indexOf("?");
    if (n >= 0) {
        let o = t.substr(0, n);
        e._path = ka(o), t = t.substr(n + 1)
    }
    let r = cy(t);
    for (let o in r) e[o] = r[o];
    return e
}

function ka(t) {
    try {
        return t = t.replace(/\+/g, "%20"), decodeURIComponent(t)
    } catch {
        return t
    }
}

function cy(t) {
    let e = {};
    if (!t.length) return e;
    let n = t.split("&"),
        r, o, i, a;
    for (r = 0; r < n.length; r++) o = n[r].split("="), i = ka(o[0]), a = o[1] == null ? null : ka(o[1]), e[i] = a;
    return e
}

function uy(t, e) {
    typeof t != "string" && (t = ""), typeof e != "string" && (e = "");
    let n = t.replace(/^\s+|\s+$/g, "").split("."),
        r = e.replace(/^\s+|\s+$/g, "").split("."),
        o, i, a, s;
    for (o = Math.max(n.length, r.length), i = 0; i < o; i++)
        if (a = parseInt(n[i]) || 0, s = parseInt(r[i]) || 0, a !== s) return a > s ? 1 : -1;
    return 0
}

function dy(t) {
    return uy(Sa, t) >= 0
}

function rt(t, e) {
    let n;
    typeof e == "string" ? n = e : n = Bn() ? e.twaReturnUrl || e.returnStrategy : "none";
    let r = fy(t, "ret", n);
    if (!dn(t)) return r;
    let o = r.slice(r.lastIndexOf("&") + 1);
    return r.slice(0, r.lastIndexOf("&")) + "-" + qo(o)
}

function ki(t, e) {
    e = Je({}, e);
    let n = hy(t),
        r = new URL(n);
    if (r.searchParams.has("startapp") || r.searchParams.append("startapp", "tonconnect"), Bn())
        if (Rr("ios", "android", "macos", "tdesktop", "web")) {
            let o = rt(r.toString(), e.returnStrategy);
            qs(o)
        } else Rr("weba") ? qs(rt(r.toString(), e)) : at(rt(r.toString(), e));
    else if (hn("ios")) {
        e.returnStrategy === "back" && ($e("safari") ? e.returnStrategy = location.href : $e("chrome") ? e.returnStrategy = "googlechrome://" : $e("firefox") ? e.returnStrategy = "firefox://" : $e("opera") ? e.returnStrategy = "opera-http://" : e.returnStrategy = location.href);
        let o = $e("chrome"),
            i = $e("firefox");
        if ((o || i) && !e.forceRedirect) {
            let s = rt(r.toString(), e.returnStrategy),
                c = la(s);
            ar(c, () => at(s))
        } else {
            let s = rt(r.toString(), e.returnStrategy);
            at(s)
        }
    } else if (hn("android")) {
        let o = $e("chrome"),
            i = $e("firefox");
        if ((o || i) && !e.forceRedirect) {
            let s = rt(r.toString(), e.returnStrategy),
                c = la(s);
            ar(c, () => at(s))
        } else {
            let s = rt(r.toString(), e.returnStrategy);
            at(s)
        }
    } else if (hn("ipad")) {
        e.returnStrategy === "back" && ($e("safari") ? e.returnStrategy = location.href : $e("chrome") ? e.returnStrategy = "googlechrome://" : $e("firefox") ? e.returnStrategy = "firefox://" : $e("opera") ? e.returnStrategy = "opera-http://" : e.returnStrategy = location.href);
        let o = $e("chrome"),
            i = $e("firefox"),
            a = (o || i) && !e.forceRedirect,
            s = rt(r.toString(), e.returnStrategy);
        if (a) {
            let c = la(s);
            ar(c, () => at(s))
        } else at(s)
    } else if (hn("macos", "windows", "linux")) {
        e.twaReturnUrl = void 0;
        let o = rt(r.toString(), e.returnStrategy);
        if (e.forceRedirect) at(o);
        else {
            let i = la(o);
            ar(i, () => at(o))
        }
    } else at(rt(r.toString(), e))
}

function Ai(t, e, n, r) {
    if (n = Je({}, n), sy())
        if (hn("ios", "android")) n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve"), r("universal-link"), mi(rt(t, n.returnStrategy), "_self");
        else {
            r("universal-link");
            let o = rt(t, n.returnStrategy);
            at(o)
        }
    else if (Bn())
        if (Rr("ios", "android")) {
            n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve"), r("universal-link");
            let o = rt(t, n.returnStrategy);
            qs(o, () => {
                r("universal-link"), at(o)
            })
        } else if (Rr("macos", "tdesktop")) {
        n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve");
        let o = rt(t, n.returnStrategy);
        !!e && !n.forceRedirect ? (r("custom-deeplink"), ar(sa(o, e), () => {
            r("universal-link"), at(o)
        })) : (r("universal-link"), at(o))
    } else if (Rr("weba")) {
        n.returnStrategy === "back" && ($e("safari") ? n.returnStrategy = location.href : $e("chrome") ? n.returnStrategy = "googlechrome://" : $e("firefox") ? n.returnStrategy = "firefox://" : $e("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
        let o = rt(t, n.returnStrategy);
        !!e && !n.forceRedirect ? (r("custom-deeplink"), ar(sa(o, e), () => {
            r("universal-link"), at(o)
        })) : (r("universal-link"), at(o))
    } else if (Rr("web")) {
        n.returnStrategy === "back" && ($e("safari") ? n.returnStrategy = location.href : $e("chrome") ? n.returnStrategy = "googlechrome://" : $e("firefox") ? n.returnStrategy = "firefox://" : $e("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
        let o = rt(t, n.returnStrategy);
        !!e && !n.forceRedirect ? (r("custom-deeplink"), ar(sa(o, e), () => {
            r("universal-link"), at(o)
        })) : (r("universal-link"), at(o))
    } else {
        r("universal-link");
        let o = rt(t, n.returnStrategy);
        at(o)
    } else if (hn("ios")) n.returnStrategy === "back" && ($e("safari") ? n.returnStrategy = location.href : $e("chrome") ? n.returnStrategy = "googlechrome://" : $e("firefox") ? n.returnStrategy = "firefox://" : $e("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), $e("chrome") ? (r("universal-link"), mi(rt(t, n.returnStrategy), "_self")) : (r("universal-link"), at(rt(t, n.returnStrategy)));
    else if (hn("android")) n.returnStrategy === "back" && ($e("chrome") ? n.returnStrategy = "googlechrome://" : $e("firefox") ? n.returnStrategy = "firefox://" : $e("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), r("universal-link"), at(rt(t, n.returnStrategy));
    else if (hn("ipad")) n.returnStrategy === "back" && ($e("safari") ? n.returnStrategy = "none" : $e("chrome") ? n.returnStrategy = "googlechrome://" : $e("firefox") ? n.returnStrategy = "firefox://" : $e("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), $e("chrome") ? (r("universal-link"), mi(rt(t, n.returnStrategy), "_self")) : (r("universal-link"), at(rt(t, n.returnStrategy)));
    else if (hn("macos", "windows", "linux")) {
        n.returnStrategy === "back" && ($e("safari") ? n.returnStrategy = "none" : $e("chrome") ? n.returnStrategy = "googlechrome://" : $e("firefox") ? n.returnStrategy = "firefox://" : $e("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = "none");
        let o = rt(t, n.returnStrategy);
        !!e && !n.forceRedirect ? (r("custom-deeplink"), ar(sa(o, e), () => {
            r("universal-link"), at(o)
        })) : (r("universal-link"), at(o))
    } else r("universal-link"), at(rt(t, n.returnStrategy))
}

function fy(t, e, n) {
    let r = new URL(t);
    return r.searchParams.append(e, n), r.toString()
}

function hy(t) {
    let e = new URL(t);
    return e.searchParams.has("attach") && (e.searchParams.delete("attach"), e.pathname += "/start"), e.toString()
}

function la(t) {
    let e = new URL(t),
        [, n, r] = e.pathname.split("/"),
        o = e.searchParams.get("startapp");
    return "tg://resolve?domain=".concat(n, "&appname=").concat(r, "&startapp=").concat(o)
}

function gy(t) {
    return "jsBridgeKey" in t ? Xt(Je({}, t), {
        injected: or.isWalletInjected(t.jsBridgeKey),
        embedded: or.isInsideWalletBrowser(t.jsBridgeKey)
    }) : t
}

function pl(t, e) {
    var n, r;
    if (!e) return t;
    if ((n = e.includeWallets) != null && n.length && (t = ay("name", t, e.includeWallets.map(gy))), (r = e.customOrder) != null && r.length) {
        let o = [...new Set(e.customOrder)],
            i = o.map(s => t.find(c => c.appName === s)).filter(s => s !== void 0),
            a = t.filter(s => !o.includes(s.appName));
        t = [...i, ...a]
    }
    return t
}

function hu(t) {
    return t.platforms.some(e => ["macos", "linux", "windows"].includes(e))
}

function yi(t) {
    return t.platforms.some(e => ["ios", "android"].includes(e))
}

function gu(t) {
    return t.platforms.some(e => ["chrome", "firefox", "safari"].includes(e))
}

function ir(t, e) {
    return e ? t.name.toLowerCase() === e.toLowerCase() || t.appName.toLowerCase() === e.toLowerCase() : !1
}
var py = {
        close: "Close",
        openWallet: "Open wallet",
        copyLink: "Copy Link",
        linkCopied: "Link Copied",
        copied: "Copied",
        yourWallet: "Your Wallet",
        retry: "Retry",
        get: "GET",
        mobile: "Mobile",
        browserExtension: "Browser Extension",
        desktop: "Desktop"
    },
    my = {
        connectWallet: "Connect Wallet",
        dropdown: {
            copy: "Copy address",
            copied: "Address copied!",
            disconnect: "Disconnect"
        }
    },
    yy = {
        confirm: {
            header: "Open {{ name }} to\xA0confirm the\xA0transaction."
        },
        transactionSent: {
            header: "Transaction sent",
            text: "Your transaction\xA0will be\xA0processed in\xA0a\xA0few seconds."
        },
        transactionCanceled: {
            header: "Transaction canceled",
            text: "There will be no changes to\xA0your account."
        }
    },
    by = {
        walletOn: "Wallet in",
        recent: "Recent",
        installed: "Installed",
        popular: "Popular"
    },
    wy = {
        loading: "Loading wallets",
        wallets: "Wallets",
        mobileUniversalModal: {
            connectYourWallet: "Connect your TON wallet",
            openWalletOnTelegramOrSelect: "Use Wallet in Telegram or choose other application",
            openWalletOnTelegram: "Connect Wallet in Telegram",
            chooseOtherApplication: "Choose other application",
            openLink: "Open Link",
            scan: "Scan with your mobile wallet"
        },
        desktopUniversalModal: {
            connectYourWallet: "Connect your TON wallet",
            scan: "Scan with your mobile wallet",
            availableWallets: "Available wallets"
        },
        mobileConnectionModal: {
            showQR: "Show QR Code",
            scanQR: "Scan the\xA0QR code below with your phone\u2019s\xA0or\xA0{{ name }}\u2019s camera",
            continueIn: "Continue in {{ name }}\u2026",
            connectionDeclined: "Connection declined"
        },
        desktopConnectionModal: {
            scanQR: "Scan the\xA0QR code below with your phone\u2019s\xA0or\xA0{{ name }}\u2019s camera",
            continueInExtension: "Continue in\xA0{{ name }} browser extension\u2026",
            dontHaveExtension: "Seems you don't have installed {{ name }}\xA0browser\xA0extension",
            getWallet: "Get {{ name }}",
            continueOnDesktop: "Continue in\xA0{{ name }} on desktop\u2026",
            openWalletOnTelegram: "Connect Wallet in Telegram on desktop",
            connectionDeclined: "Connection declined"
        },
        infoModal: {
            whatIsAWallet: "What is a wallet",
            secureDigitalAssets: "Secure digital assets storage",
            walletProtects: "A wallet protects and manages your digital assets\xA0including TON, tokens and collectables.",
            effortlessCryptoTransactions: "Effortless crypto transactions",
            easilySend: "Easily send, receive, monitor your cryptocurrencies.\xA0Streamline your operations with\xA0decentralized applications.",
            getAWallet: "Get a Wallet"
        }
    },
    xy = {
        confirmTransaction: {
            header: "Confirm the\xA0transaction in\xA0{{ name }}",
            text: "It will only take a\xA0moment."
        },
        noMoney: {
            header: "You have an insufficient balance",
            text: "Top-up your balance by at least 0.2 TON"
        },
        transactionSent: "$notifications.transactionSent",
        transactionCanceled: "$notifications.transactionCanceled"
    },
    vy = {
        common: py,
        button: my,
        notifications: yy,
        walletItem: by,
        walletModal: wy,
        actionModal: xy
    },
    Cy = {
        en: Sy(vy)
    };

function Sy(t) {
    let e = "$",
        n = r => {
            Object.entries(r).forEach(([o, i]) => {
                if (typeof i == "object" && i) return n(i);
                if (typeof i == "string") {
                    if (i[0] === e) {
                        let a = i.slice(1).split("."),
                            s = t;
                        a.forEach(c => {
                            if (c in s) s = s[c];
                            else throw new Error("Cannot parse translations: there is no property ".concat(c, " in translation"))
                        }), r[o] = s
                    }
                    i.slice(0, 2) === "\\".concat(e) && (r[o] = i.slice(1))
                }
            })
        };
    return n(t), t
}
var Co = Ua(),
    ju, ky = _.div(ju || (ju = E(["\n    background-color: ", ";\n"])), t => t.theme.colors.background.secondary),
    Dr = t => {
        let e, [n, r] = Te(null);
        return St(() => {
            let o = new window.Image;
            return o.src = t.src, o.alt = t.alt || "", o.setAttribute("draggable", "false"), t.class && o.classList.add(t.class), o.complete ? r(o) : (o.addEventListener("load", () => r(o)), () => o.removeEventListener("load", () => r(o)))
        }), [g(Se, {
            get when() {
                return n()
            },
            get children() {
                return n()
            }
        }), g(Se, {
            get when() {
                return !n()
            },
            get children() {
                return g(ky, {
                    get class() {
                        return t.class
                    },
                    ref(o) {
                        var i = e;
                        typeof i == "function" ? i(o) : e = o
                    }
                })
            }
        })]
    },
    Ur = {
        mobile: 440,
        tablet: 1020
    };

function co(t) {
    let e = En();
    if (!e) return t === "desktop";
    if (Rr("weba")) return !0;
    let n = e.innerWidth;
    switch (t) {
        case "desktop":
            return n > Ur.tablet;
        case "tablet":
            return n > Ur.mobile;
        default:
        case "mobile":
            return n <= Ur.mobile || hn("ios", "android", "ipad")
    }
}

function an(t) {
    switch (t) {
        case "mobile":
            return "@media (max-width: ".concat(Ur.mobile, "px)");
        case "tablet":
            return "@media (max-width: ".concat(Ur.tablet, "px) (min-width: ").concat(Ur.mobile, "px)");
        default:
        case "desktop":
            return "@media (min-width: ".concat(Ur.tablet, "px)")
    }
}
var Ti = "@media (hover: none)",
    Bi = "@media not all and (hover: none)",
    Ay = {
        m: "100vh",
        s: "8px",
        none: "0"
    },
    Ms = {
        s: .02,
        m: .04
    },
    zu, Ty = _.button(zu || (zu = E(["\n    text-decoration: none;\n\n    display: ", ";\n    gap: ", ";\n    align-items: ", ";\n    justify-content: ", ";\n    background-color: ", ";\n    color: ", ";\n\n    padding: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    border: none;\n    border-radius: ", ";\n    cursor: ", ";\n\n    font-size: 14px;\n    font-weight: 510;\n    line-height: 18px;\n\n    transition: transform 0.125s ease-in-out;\n\n    ", " {\n        &:hover {\n            transform: ", ";\n        }\n    }\n\n    &:active {\n        transform: ", ";\n    }\n\n    ", " {\n        &:active {\n            transform: ", ";\n        }\n    }\n"])), t => t.leftIcon || t.rightIcon ? "flex" : "inline-block", t => t.leftIcon || t.rightIcon ? "6px" : "unset", t => t.leftIcon || t.rightIcon ? "center" : "unset", t => t.leftIcon || t.rightIcon ? "space-between" : "unset", t => t.appearance === "flat" ? "transparent" : t.appearance === "secondary" ? t.theme.colors.background.tint : Wr(t.theme.colors.accent, .12), t => t.appearance === "secondary" ? t.theme.colors.text.primary : t.theme.colors.accent, t => t.appearance === "flat" ? "0" : "9px 16px", t => t.leftIcon && t.appearance !== "flat" ? "12px" : "16px", t => t.rightIcon && t.appearance !== "flat" ? "12px" : "16px", t => Ay[t.theme.borderRadius], t => t.disabled ? "not-allowed" : "pointer", Bi, t => t.disabled ? "unset" : "scale(".concat(1 + Ms[t.scale], ")"), t => t.disabled ? "unset" : "scale(".concat(1 - Ms[t.scale], ")"), Ti, t => t.disabled ? "unset" : "scale(".concat(1 - Ms[t.scale] * 2, ")"));

function Ii(t) {
    let e = Et(() => Object.keys(t).filter(r => r.startsWith("data-"))),
        [n] = al(t, e);
    return n
}
var lt = t => {
    let e = Ii(t);
    return g(Ty, kn({
        get as() {
            return t.href ? "a" : void 0
        },
        get href() {
            return t.href
        },
        get target() {
            return t.target
        },
        get appearance() {
            return t.appearance || "primary"
        },
        get class() {
            return t.class
        },
        onClick: n => {
            var r;
            return (r = t.onClick) == null ? void 0 : r.call(t, n)
        },
        onMouseEnter: n => {
            var r;
            return (r = t.onMouseEnter) == null ? void 0 : r.call(t, n)
        },
        onMouseLeave: n => {
            var r;
            return (r = t.onMouseLeave) == null ? void 0 : r.call(t, n)
        },
        ref(n) {
            var r = t.ref;
            typeof r == "function" ? r(n) : t.ref = n
        },
        get disabled() {
            return t.disabled
        },
        get scale() {
            return t.scale || "m"
        },
        get leftIcon() {
            return !!t.leftIcon
        },
        get rightIcon() {
            return !!t.rightIcon
        },
        "data-tc-button": "true"
    }, e, {
        get children() {
            return [ie(() => t.leftIcon), ie(() => t.children), ie(() => t.rightIcon)]
        }
    }))
};

function Aa(t) {
    requestAnimationFrame(() => {
        requestAnimationFrame(t)
    })
}
var ml = t => {
    let e, n = !0,
        [r, o] = Te(),
        [i, a] = Te(),
        s = Ma(() => t.children),
        {
            onBeforeEnter: c,
            onEnter: d,
            onAfterEnter: h,
            onBeforeExit: f,
            onExit: b,
            onAfterExit: w
        } = t,
        S = ie(() => {
            let q = t.name || "s";
            return {
                enterActiveClass: t.enterActiveClass || q + "-enter-active",
                enterClass: t.enterClass || q + "-enter",
                enterToClass: t.enterToClass || q + "-enter-to",
                exitActiveClass: t.exitActiveClass || q + "-exit-active",
                exitClass: t.exitClass || q + "-exit",
                exitToClass: t.exitToClass || q + "-exit-to"
            }
        });

    function k(q, P) {
        if (!n || t.appear) {
            let F = function(N) {
                    q && (!N || N.target === q) && (q.removeEventListener("transitionend", F), q.removeEventListener("animationend", F), q.classList.remove(...L), q.classList.remove(...Z), B1(() => {
                        r() !== q && o(q), i() === q && a(void 0)
                    }), h && h(q), t.mode === "inout" && $(q, P))
                },
                re = S().enterClass.split(" "),
                L = S().enterActiveClass.split(" "),
                Z = S().enterToClass.split(" ");
            c && c(q), q.classList.add(...re), q.classList.add(...L), Aa(() => {
                q.classList.remove(...re), q.classList.add(...Z), d && d(q, () => F()), (!d || d.length < 2) && (q.addEventListener("transitionend", F), q.addEventListener("animationend", F))
            })
        }
        P && !t.mode ? a(q) : o(q)
    }

    function $(q, P) {
        let F = S().exitClass.split(" "),
            re = S().exitActiveClass.split(" "),
            L = S().exitToClass.split(" ");
        if (!P.parentNode) return Z();
        f && f(P), P.classList.add(...F), P.classList.add(...re), Aa(() => {
            P.classList.remove(...F), P.classList.add(...L)
        }), b && b(P, () => Z()), (!b || b.length < 2) && (P.addEventListener("transitionend", Z), P.addEventListener("animationend", Z));

        function Z(N) {
            (!N || N.target === P) && (P.removeEventListener("transitionend", Z), P.removeEventListener("animationend", Z), P.classList.remove(...re), P.classList.remove(...L), r() === P && o(void 0), w && w(P), t.mode === "outin" && k(q, P))
        }
    }
    return T1(q => {
        for (e = s(); typeof e == "function";) e = e();
        return Et(() => (e && e !== q && (t.mode !== "outin" ? k(e, q) : n && o(e)), q && q !== e && t.mode !== "inout" && $(e, q), n = !1, e))
    }), [r, i]
};

function ca(t) {
    let {
        top: e,
        bottom: n,
        left: r,
        right: o,
        width: i,
        height: a
    } = t.getBoundingClientRect(), s = t.parentNode.getBoundingClientRect();
    return {
        top: e - s.top,
        bottom: n,
        left: r - s.left,
        right: o,
        width: i,
        height: a
    }
}
var By = t => {
    let e = Ma(() => t.children),
        n = ie(() => {
            let w = t.name || "s";
            return {
                enterActiveClass: t.enterActiveClass || w + "-enter-active",
                enterClass: t.enterClass || w + "-enter",
                enterToClass: t.enterToClass || w + "-enter-to",
                exitActiveClass: t.exitActiveClass || w + "-exit-active",
                exitClass: t.exitClass || w + "-exit",
                exitToClass: t.exitToClass || w + "-exit-to",
                moveClass: t.moveClass || w + "-move"
            }
        }),
        {
            onBeforeEnter: r,
            onEnter: o,
            onAfterEnter: i,
            onBeforeExit: a,
            onExit: s,
            onAfterExit: c
        } = t,
        [d, h] = Te(),
        f = [],
        b = !0;
    return T1(() => {
        let w = e(),
            S = [...w],
            k = new Set(w),
            $ = new Set(f),
            q = n().enterClass.split(" "),
            P = n().enterActiveClass.split(" "),
            F = n().enterToClass.split(" "),
            re = n().exitClass.split(" "),
            L = n().exitActiveClass.split(" "),
            Z = n().exitToClass.split(" ");
        for (let N = 0; N < w.length; N++) {
            let T = w[N];
            if (!b && !$.has(T)) {
                let R = function(X) {
                    T && (!X || X.target === T) && (T.removeEventListener("transitionend", R), T.removeEventListener("animationend", R), T.classList.remove(...P), T.classList.remove(...F), i && i(T))
                };
                r && r(T), T.classList.add(...q), T.classList.add(...P), Aa(() => {
                    T.classList.remove(...q), T.classList.add(...F), o && o(T, () => R()), (!o || o.length < 2) && (T.addEventListener("transitionend", R), T.addEventListener("animationend", R))
                })
            }
        }
        for (let N = 0; N < f.length; N++) {
            let T = f[N];
            if (!k.has(T) && T.parentNode) {
                let R = function(X) {
                    (!X || X.target === T) && (T.removeEventListener("transitionend", R), T.removeEventListener("animationend", R), T.classList.remove(...L), T.classList.remove(...Z), c && c(T), f = f.filter(I => I !== T), h(f))
                };
                S.splice(N, 0, T), a && a(T), T.classList.add(...re), T.classList.add(...L), Aa(() => {
                    T.classList.remove(...re), T.classList.add(...Z)
                }), s && s(T, () => R()), (!s || s.length < 2) && (T.addEventListener("transitionend", R), T.addEventListener("animationend", R))
            }
        }
        f = S, h(S)
    }), St(w => {
        let S = d();
        return S.forEach(k => {
            let $;
            ($ = w.get(k)) ? $.new && ($.new = !1, $.newPos = ca(k)): w.set(k, $ = {
                pos: ca(k),
                new: !b
            }), $.new && k.addEventListener("transitionend", () => {
                $.new = !1, k.parentNode && ($.newPos = ca(k))
            }, {
                once: !0
            }), $.newPos && ($.pos = $.newPos), $.newPos = ca(k)
        }), b ? (b = !1, w) : (S.forEach(k => {
            let $ = w.get(k),
                q = $.pos,
                P = $.newPos,
                F = q.left - P.left,
                re = q.top - P.top;
            if (F || re) {
                $.moved = !0;
                let L = k.style;
                L.transform = "translate(".concat(F, "px,").concat(re, "px)"), L.transitionDuration = "0s"
            }
        }), document.body.offsetHeight, S.forEach(k => {
            let $ = w.get(k);
            if ($.moved) {
                let q = function(re) {
                    re && re.target !== k || !k.parentNode || (!re || /transform$/.test(re.propertyName)) && (k.removeEventListener("transitionend", q), k.classList.remove(...F))
                };
                $.moved = !1;
                let P = k.style,
                    F = n().moveClass.split(" ");
                k.classList.add(...F), P.transform = P.transitionDuration = "", k.addEventListener("transitionend", q)
            }
        }), w)
    }, new Map), d
};

function Iy(t, e) {
    let n = r => {
        var o;
        return !t.contains(r.target) && ((o = e()) == null ? void 0 : o())
    };
    document.body.addEventListener("click", n), zt(() => document.body.removeEventListener("click", n))
}

function Ey(t, e) {
    let n = r => {
        var o, i;
        r.key === "Escape" && ((o = document.activeElement) == null || o.blur(), (i = e()) == null || i())
    };
    document.body.addEventListener("keydown", n), zt(() => document.body.removeEventListener("keydown", n))
}

function Ry(t, e) {
    let {
        isEnabled: n,
        onClose: r
    } = e();
    if (!n || !(fl().os === "android")) return;
    window.history.pushState(Uy, "");
    let i = a => {
        a.preventDefault(), r()
    };
    window.addEventListener("popstate", i, {
        once: !0
    }), zt(() => {
        window.removeEventListener("popstate", i), O1(() => {
            var a;
            ((a = window.history.state) == null ? void 0 : a[X1]) === !0 && window.history.back()
        })
    })
}
var X1 = "androidBackHandler",
    Uy = {
        [X1]: !0
    },
    My = je('<svg><path fill-rule=evenodd clip-rule=evenodd d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></svg>', !1, !0),
    Py = {
        left: 0,
        top: 90,
        right: 180,
        bottom: 270
    },
    Ou, J1 = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary,
            r = () => t.direction || "left",
            o = _("svg")(Ou || (Ou = E(["\n        transform: rotate(", "deg);\n        transition: transform 0.1s ease-in-out;\n    "])), i => Py[i.svgDirection]);
        return g(o, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            get svgDirection() {
                return r()
            },
            get children() {
                var i = My();
                return Ve(() => ye(i, "fill", n())), i
            }
        })
    },
    _y = je('<svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z">'),
    Ly = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary;
        return (() => {
            var r = _y(),
                o = r.firstChild;
            return Ve(() => ye(o, "fill", n())), r
        })()
    },
    Fu, Wy = _.button(Fu || (Fu = E(["\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    background-color: ", ";\n    border: none;\n    cursor: pointer;\n\n    transition: transform 0.125s ease-in-out;\n\n    ", " {\n        &:hover {\n            transform: scale(1.04);\n        }\n    }\n\n    &:active {\n        transform: scale(0.96);\n    }\n\n    ", " {\n        &:active {\n            transform: scale(0.92);\n        }\n    }\n"])), t => t.theme.colors.background.tint, Bi, Ti),
    Nr = t => {
        let e = Ii(t),
            n = () => t.icon || "close";
        return g(Wy, kn({
            get class() {
                return t.class
            },
            onClick: () => t.onClick(),
            "data-tc-icon-button": "true"
        }, e, {
            get children() {
                return [g(Se, {
                    get when() {
                        return !!t.children
                    },
                    get children() {
                        return t.children
                    }
                }), g(Se, {
                    get when() {
                        return !t.children
                    },
                    get children() {
                        return g(Si, {
                            get children() {
                                return [g(It, {
                                    get when() {
                                        return n() === "close"
                                    },
                                    get children() {
                                        return g(Ly, {
                                            get fill() {
                                                return t.fill
                                            }
                                        })
                                    }
                                }), g(It, {
                                    get when() {
                                        return n() === "arrow"
                                    },
                                    get children() {
                                        return g(J1, {
                                            get fill() {
                                                return t.fill
                                            }
                                        })
                                    }
                                }), g(It, {
                                    get when() {
                                        return n() === "question"
                                    },
                                    get children() {
                                        return g(H2, {
                                            get fill() {
                                                return t.fill
                                            }
                                        })
                                    }
                                }), g(It, {
                                    get when() {
                                        return typeof n() != "string"
                                    },
                                    get children() {
                                        return n()
                                    }
                                })]
                            }
                        })
                    }
                })]
            }
        }))
    },
    fo = {
        m: "24px",
        s: "16px",
        none: "0"
    },
    qu, Dy = _.div(qu || (qu = E(["\n    display: flex;\n    position: fixed;\n    z-index: 1000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    padding: 20px 0;\n    overflow-y: auto;\n\n    ", " {\n        padding-bottom: 0;\n    }\n"])), an("mobile")),
    Gu, Ny = Fn(Gu || (Gu = E(["\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);\n    width: fit-content;\n    margin: auto;\n\n    ", " {\n        width: 100%;\n        height: fit-content;\n        margin: auto 0 0 0;\n    }\n"])), an("mobile")),
    Yu, $y = _.div(Yu || (Yu = E(["\n    position: relative;\n    min-height: 100px;\n    width: 416px;\n    padding: 44px 56px 24px;\n\n    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);\n\n    background-color: ", ";\n    border-radius: ", ";\n\n    ", " {\n        width: 100%;\n    }\n"])), t => t.theme.colors.background.primary, t => fo[t.theme.borderRadius], an("mobile")),
    Zu, Hy = _(Nr)(Zu || (Zu = E(["\n    position: absolute;\n    right: 16px;\n    top: 16px;\n"]))),
    Qu, Ky = _.div(Qu || (Qu = E(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px 16px 16px 18px;\n    border-radius: 0 0 ", "\n        ", ";\n"])), t => fo[t.theme.borderRadius], t => fo[t.theme.borderRadius]),
    Xu, Vy = _(Nr)(Xu || (Xu = E(["\n    background-color: ", ";\n"])), t => Wr(t.theme.colors.icon.secondary, .12)),
    Gs = class {
        constructor() {
            we(this, "currentTime", 0)
        }
    },
    fi = class {
        constructor() {
            we(this, "currentTime", 0), we(this, "playbackRate", 1), we(this, "startTime", null), we(this, "timeline", new Gs), we(this, "finished", Promise.resolve(this)), we(this, "effect", null), we(this, "id", ""), we(this, "pending", !1), we(this, "playState", "finished"), we(this, "replaceState", "active"), we(this, "ready", Promise.resolve(this)), we(this, "oncancel", null), we(this, "onfinish", null), we(this, "onremove", null)
        }
        static create() {
            return fi._instance || (Vm("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."), fi._instance = new fi), fi._instance
        }
        cancel() {}
        finish() {}
        pause() {}
        play() {}
        reverse() {}
        addEventListener(t, e, n) {}
        dispatchEvent(t) {
            return !1
        }
        removeEventListener(t, e, n) {}
        updatePlaybackRate(t) {}
        commitStyles() {}
        persist() {}
    },
    eh = fi;
we(eh, "_instance", null);

function Sn(t, e, n) {
    return "animate" in t ? t.animate(e, n) : eh.create()
}
var jy = je("<div>"),
    zy = Iy,
    Oy = Ey,
    Fy = Ry,
    Ju, th = t => {
        let e = it(),
            n = Ii(t);
        return St(() => {
            t.opened ? Om() : Fm()
        }), g(ml, {
            onBeforeEnter: r => {
                let o = co("mobile") ? 200 : 100;
                Sn(r, [{
                    opacity: 0
                }, {
                    opacity: 1
                }], {
                    duration: o
                }), co("mobile") && Sn(r.firstElementChild, [{
                    transform: "translateY(390px)"
                }, {
                    transform: "translateY(0)"
                }], {
                    duration: o
                })
            },
            onExit: (r, o) => {
                let i = co("mobile") ? 200 : 100,
                    a = Sn(r, [{
                        opacity: 1
                    }, {
                        opacity: 0
                    }], {
                        duration: i
                    });
                if (co("mobile")) {
                    let s = Sn(r.firstElementChild, [{
                        transform: "translateY(0)"
                    }, {
                        transform: "translateY(390px)"
                    }], {
                        duration: i
                    });
                    Promise.all([a.finished, s.finished]).then(o)
                } else a.finished.then(o)
            },
            get children() {
                return g(Se, {
                    get when() {
                        return t.opened
                    },
                    get children() {
                        return g(Dy, kn({
                            "data-tc-modal": "true"
                        }, n, {
                            get children() {
                                var r = jy();
                                return Mr(Fy, r, () => ({
                                    isEnabled: t.enableAndroidBackHandler,
                                    onClose: () => t.onClose()
                                })), Mr(Oy, r, () => () => t.onClose()), Mr(zy, r, () => () => t.onClose()), Mt(r, g($y, {
                                    get class() {
                                        return t.class
                                    },
                                    get children() {
                                        return [g(Hy, {
                                            icon: "close",
                                            onClick: () => t.onClose()
                                        }), ie(() => t.children)]
                                    }
                                }), null), Mt(r, g(Se, {
                                    get when() {
                                        return t.onClickQuestion
                                    },
                                    get children() {
                                        return g(Ky, {
                                            get children() {
                                                return [g(N2, {}), g(Vy, {
                                                    get onClick() {
                                                        return t.onClickQuestion
                                                    },
                                                    icon: "question"
                                                })]
                                            }
                                        })
                                    }
                                }), null), Ve(() => ll(r, (0, gi.default)(Ny, Fn(Ju || (Ju = E(["\n                                border-radius: ", ";\n                                background-color: ", ";\n\n                                ", " {\n                                    border-radius: ", "\n                                        ", " 0 0;\n                                }\n                            "])), fo[e.borderRadius], e.colors.background.tint, an("mobile"), fo[e.borderRadius], fo[e.borderRadius])))), r
                            }
                        }))
                    }
                })
            }
        })
    },
    qy = {
        m: "22px",
        s: "12px",
        none: "0"
    },
    Gy = {
        m: "18px",
        s: "8px",
        none: "0"
    },
    ed, Yy = _.div(ed || (ed = E(["\n    display: grid;\n    grid-template: 1fr / 1fr 1fr;\n    width: fit-content;\n    justify-items: center;\n    gap: 4px;\n\n    position: relative;\n    padding: 4px;\n    border-radius: ", ";\n\n    background-color: ", ";\n"])), t => qy[t.theme.borderRadius], t => t.theme.colors.background.secondary),
    td, Zy = _.div(td || (td = E(["\n    position: absolute;\n    top: 4px;\n    left: 4px;\n\n    height: calc(100% - 8px);\n    width: calc(50% - 4px);\n\n    border-radius: ", ";\n    background-color: ", ";\n\n    transform: ", ";\n\n    transition: transform 0.13s ease-in-out;\n"])), t => Gy[t.theme.borderRadius], t => t.theme.colors.background.segment, t => t.right ? "translateX(100%)" : "translateX(0)"),
    nd, pu = _.input(nd || (nd = E(["\n    display: none;\n"]))),
    rd, mu = _.label(rd || (rd = E(["\n    padding: 9px 12px;\n    z-index: 1;\n\n    cursor: ", ";\n\n    transition: transform 0.13s ease-in-out;\n\n    &:hover {\n        transform: ", ";\n    }\n\n    > * {\n        ", "\n    }\n"])), t => t.isActive ? "default" : "pointer", t => t.isActive ? "none" : "scale(1.025)", t => t.isActive ? "" : "color: ".concat(t.theme.colors.text.secondary, ";")),
    Qy = t => {
        let e = "tabBar" + Math.floor(Math.random() * 1e4);
        return g(Yy, {
            get class() {
                return t.class
            },
            "data-tc-tab-bar": "true",
            get children() {
                return [g(Zy, {
                    get right() {
                        return t.selectedTabIndex === 1
                    }
                }), g(mu, {
                    get isActive() {
                        return t.selectedTabIndex === 0
                    },
                    get children() {
                        return [g(pu, {
                            type: "radio",
                            name: e,
                            get checked() {
                                return t.selectedTabIndex === 0
                            },
                            onInput: () => {
                                var n;
                                return (n = t.onSelectedTabIndexChange) == null ? void 0 : n.call(t, 0)
                            }
                        }), ie(() => t.tab1)]
                    }
                }), g(mu, {
                    get isActive() {
                        return t.selectedTabIndex === 1
                    },
                    get children() {
                        return [g(pu, {
                            type: "radio",
                            get checked() {
                                return t.selectedTabIndex === 1
                            },
                            name: e,
                            onInput: () => {
                                var n;
                                return (n = t.onSelectedTabIndexChange) == null ? void 0 : n.call(t, 1)
                            }
                        }), ie(() => t.tab2)]
                    }
                })]
            }
        })
    },
    Xy = {
        m: "16px",
        s: "12px",
        none: "0"
    },
    Jy = {
        m: "12px",
        s: "8px",
        none: "0"
    },
    nh = 256,
    Ys = 60,
    yu = 48,
    bu = 24,
    od, ha = _.div(od || (od = E(["\n    width: 52px;\n    height: 52px;\n    background: transparent;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.125s ease-in-out;\n"]))),
    id, e2 = _.button(id || (id = E(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    background-color: ", ";\n    border-radius: ", ";\n    padding: ", " 0;\n    height: ", ";\n    width: 100%;\n\n    overflow: hidden;\n    cursor: pointer;\n    border: none;\n\n    ", " {\n        &:hover {\n            ", " {\n                transform: scale(1.04);\n            }\n        }\n    }\n\n    &:active {\n        ", " {\n            transform: scale(0.96);\n        }\n    }\n\n    ", " {\n        &:active {\n            ", " {\n                transform: scale(0.92);\n            }\n        }\n    }\n"])), t => t.theme.colors.background.qr, t => Xy[t.theme.borderRadius], An(bu), An(nh + bu * 2), Bi, ha.class, ha.class, Ti, ha.class),
    ad, t2 = _.div(ad || (ad = E(["\n    position: relative;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n\n    > div:first-child {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    rect {\n        fill: transparent;\n    }\n\n    path {\n        fill: ", ";\n    }\n"])), t => t.theme.colors.constant.black),
    sd, n2 = _.div(sd || (sd = E(["\n    position: absolute;\n    width: ", ";\n    height: ", ";\n    background: ", ";\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])), An(Ys), An(Ys), t => t.theme.colors.background.qr),
    ld, r2 = _(Dr)(ld || (ld = E(["\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n    background-color: ", ";\n"])), t => An(t.size), t => An(t.size), t => Jy[t.theme.borderRadius], t => t.theme.colors.background.qr),
    cd, o2 = _.div(cd || (cd = E(["\n    position: absolute;\n    bottom: 14px;\n    left: 50%;\n    transform: translate(-50%, 0);\n\n    display: flex;\n    gap: 6px;\n    align-items: center;\n    border-radius: 18px;\n    min-width: 126px;\n    padding: 9px 16px 9px 10px;\n\n    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));\n    background-color: ", ";\n"])), t => t.theme.colors.background.segment),
    rh = {
        exports: {}
    };
(function(t, e) {
    var n = function() {
        var r = function(L, Z) {
            var N = 236,
                T = 17,
                R = L,
                X = i[Z],
                I = null,
                v = 0,
                ne = null,
                J = [],
                Q = {},
                Pe = function(H, V) {
                    v = R * 4 + 17, I = function(D) {
                        for (var O = new Array(D), G = 0; G < D; G += 1) {
                            O[G] = new Array(D);
                            for (var le = 0; le < D; le += 1) O[G][le] = null
                        }
                        return O
                    }(v), Ue(0, 0), Ue(v - 7, 0), Ue(0, v - 7), kt(), ut(), bt(H, V), R >= 7 && qt(H), ne == null && (ne = Gt(R, X, J)), wt(ne, V)
                },
                Ue = function(H, V) {
                    for (var D = -1; D <= 7; D += 1)
                        if (!(H + D <= -1 || v <= H + D))
                            for (var O = -1; O <= 7; O += 1) V + O <= -1 || v <= V + O || (0 <= D && D <= 6 && (O == 0 || O == 6) || 0 <= O && O <= 6 && (D == 0 || D == 6) || 2 <= D && D <= 4 && 2 <= O && O <= 4 ? I[H + D][V + O] = !0 : I[H + D][V + O] = !1)
                },
                ze = function() {
                    for (var H = 0, V = 0, D = 0; D < 8; D += 1) {
                        Pe(!0, D);
                        var O = s.getLostPoint(Q);
                        (D == 0 || H > O) && (H = O, V = D)
                    }
                    return V
                },
                ut = function() {
                    for (var H = 8; H < v - 8; H += 1) I[H][6] == null && (I[H][6] = H % 2 == 0);
                    for (var V = 8; V < v - 8; V += 1) I[6][V] == null && (I[6][V] = V % 2 == 0)
                },
                kt = function() {
                    for (var H = s.getPatternPosition(R), V = 0; V < H.length; V += 1)
                        for (var D = 0; D < H.length; D += 1) {
                            var O = H[V],
                                G = H[D];
                            if (I[O][G] == null)
                                for (var le = -2; le <= 2; le += 1)
                                    for (var Ce = -2; Ce <= 2; Ce += 1) le == -2 || le == 2 || Ce == -2 || Ce == 2 || le == 0 && Ce == 0 ? I[O + le][G + Ce] = !0 : I[O + le][G + Ce] = !1
                        }
                },
                qt = function(H) {
                    for (var V = s.getBCHTypeNumber(R), D = 0; D < 18; D += 1) {
                        var O = !H && (V >> D & 1) == 1;
                        I[Math.floor(D / 3)][D % 3 + v - 8 - 3] = O
                    }
                    for (var D = 0; D < 18; D += 1) {
                        var O = !H && (V >> D & 1) == 1;
                        I[D % 3 + v - 8 - 3][Math.floor(D / 3)] = O
                    }
                },
                bt = function(H, V) {
                    for (var D = X << 3 | V, O = s.getBCHTypeInfo(D), G = 0; G < 15; G += 1) {
                        var le = !H && (O >> G & 1) == 1;
                        G < 6 ? I[G][8] = le : G < 8 ? I[G + 1][8] = le : I[v - 15 + G][8] = le
                    }
                    for (var G = 0; G < 15; G += 1) {
                        var le = !H && (O >> G & 1) == 1;
                        G < 8 ? I[8][v - G - 1] = le : G < 9 ? I[8][15 - G - 1 + 1] = le : I[8][15 - G - 1] = le
                    }
                    I[v - 8][8] = !H
                },
                wt = function(H, V) {
                    for (var D = -1, O = v - 1, G = 7, le = 0, Ce = s.getMaskFunction(V), be = v - 1; be > 0; be -= 2)
                        for (be == 6 && (be -= 1);;) {
                            for (var nt = 0; nt < 2; nt += 1)
                                if (I[O][be - nt] == null) {
                                    var ht = !1;
                                    le < H.length && (ht = (H[le] >>> G & 1) == 1);
                                    var xe = Ce(O, be - nt);
                                    xe && (ht = !ht), I[O][be - nt] = ht, G -= 1, G == -1 && (le += 1, G = 7)
                                }
                            if (O += D, O < 0 || v <= O) {
                                O -= D, D = -D;
                                break
                            }
                        }
                },
                _e = function(H, V) {
                    for (var D = 0, O = 0, G = 0, le = new Array(V.length), Ce = new Array(V.length), be = 0; be < V.length; be += 1) {
                        var nt = V[be].dataCount,
                            ht = V[be].totalCount - nt;
                        O = Math.max(O, nt), G = Math.max(G, ht), le[be] = new Array(nt);
                        for (var xe = 0; xe < le[be].length; xe += 1) le[be][xe] = 255 & H.getBuffer()[xe + D];
                        D += nt;
                        var Rt = s.getErrorCorrectPolynomial(ht),
                            Kt = d(le[be], Rt.getLength() - 1),
                            $r = Kt.mod(Rt);
                        Ce[be] = new Array(Rt.getLength() - 1);
                        for (var xe = 0; xe < Ce[be].length; xe += 1) {
                            var Hr = xe + $r.getLength() - Ce[be].length;
                            Ce[be][xe] = Hr >= 0 ? $r.getAt(Hr) : 0
                        }
                    }
                    for (var fr = 0, xe = 0; xe < V.length; xe += 1) fr += V[xe].totalCount;
                    for (var hr = new Array(fr), _n = 0, xe = 0; xe < O; xe += 1)
                        for (var be = 0; be < V.length; be += 1) xe < le[be].length && (hr[_n] = le[be][xe], _n += 1);
                    for (var xe = 0; xe < G; xe += 1)
                        for (var be = 0; be < V.length; be += 1) xe < Ce[be].length && (hr[_n] = Ce[be][xe], _n += 1);
                    return hr
                },
                Gt = function(H, V, D) {
                    for (var O = h.getRSBlocks(H, V), G = f(), le = 0; le < D.length; le += 1) {
                        var Ce = D[le];
                        G.put(Ce.getMode(), 4), G.put(Ce.getLength(), s.getLengthInBits(Ce.getMode(), H)), Ce.write(G)
                    }
                    for (var be = 0, le = 0; le < O.length; le += 1) be += O[le].dataCount;
                    if (G.getLengthInBits() > be * 8) throw "code length overflow. (" + G.getLengthInBits() + ">" + be * 8 + ")";
                    for (G.getLengthInBits() + 4 <= be * 8 && G.put(0, 4); G.getLengthInBits() % 8 != 0;) G.putBit(!1);
                    for (; !(G.getLengthInBits() >= be * 8 || (G.put(N, 8), G.getLengthInBits() >= be * 8));) G.put(T, 8);
                    return _e(G, O)
                };
            Q.addData = function(H, V) {
                V = V || "Byte";
                var D = null;
                switch (V) {
                    case "Numeric":
                        D = b(H);
                        break;
                    case "Alphanumeric":
                        D = w(H);
                        break;
                    case "Byte":
                        D = S(H);
                        break;
                    case "Kanji":
                        D = k(H);
                        break;
                    default:
                        throw "mode:" + V
                }
                J.push(D), ne = null
            }, Q.isDark = function(H, V) {
                if (H < 0 || v <= H || V < 0 || v <= V) throw H + "," + V;
                return I[H][V]
            }, Q.getModuleCount = function() {
                return v
            }, Q.make = function() {
                if (R < 1) {
                    for (var H = 1; H < 40; H++) {
                        for (var V = h.getRSBlocks(H, X), D = f(), O = 0; O < J.length; O++) {
                            var G = J[O];
                            D.put(G.getMode(), 4), D.put(G.getLength(), s.getLengthInBits(G.getMode(), H)), G.write(D)
                        }
                        for (var le = 0, O = 0; O < V.length; O++) le += V[O].dataCount;
                        if (D.getLengthInBits() <= le * 8) break
                    }
                    R = H
                }
                Pe(!1, ze())
            }, Q.createTableTag = function(H, V) {
                H = H || 2, V = typeof V > "u" ? H * 4 : V;
                var D = "";
                D += '<table style="', D += " border-width: 0px; border-style: none;", D += " border-collapse: collapse;", D += " padding: 0px; margin: " + V + "px;", D += '">', D += "<tbody>";
                for (var O = 0; O < Q.getModuleCount(); O += 1) {
                    D += "<tr>";
                    for (var G = 0; G < Q.getModuleCount(); G += 1) D += '<td style="', D += " border-width: 0px; border-style: none;", D += " border-collapse: collapse;", D += " padding: 0px; margin: 0px;", D += " width: " + H + "px;", D += " height: " + H + "px;", D += " background-color: ", D += Q.isDark(O, G) ? "#000000" : "#ffffff", D += ";", D += '"/>';
                    D += "</tr>"
                }
                return D += "</tbody>", D += "</table>", D
            }, Q.createSvgTag = function(H, V, D, O) {
                var G = {};
                typeof arguments[0] == "object" && (G = arguments[0], H = G.cellSize, V = G.margin, D = G.alt, O = G.title), H = H || 2, V = typeof V > "u" ? H * 4 : V, D = typeof D == "string" ? {
                    text: D
                } : D || {}, D.text = D.text || null, D.id = D.text ? D.id || "qrcode-description" : null, O = typeof O == "string" ? {
                    text: O
                } : O || {}, O.text = O.text || null, O.id = O.text ? O.id || "qrcode-title" : null;
                var le = Q.getModuleCount() * H + V * 2,
                    Ce, be, nt, ht, xe = "",
                    Rt;
                for (Rt = "l" + H + ",0 0," + H + " -" + H + ",0 0,-" + H + "z ", xe += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', xe += G.scalable ? "" : ' width="' + le + 'px" height="' + le + 'px"', xe += ' viewBox="0 0 ' + le + " " + le + '" ', xe += ' preserveAspectRatio="xMinYMin meet"', xe += O.text || D.text ? ' role="img" aria-labelledby="' + Pn([O.id, D.id].join(" ").trim()) + '"' : "", xe += ">", xe += O.text ? '<title id="' + Pn(O.id) + '">' + Pn(O.text) + "</title>" : "", xe += D.text ? '<description id="' + Pn(D.id) + '">' + Pn(D.text) + "</description>" : "", xe += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', xe += '<path d="', nt = 0; nt < Q.getModuleCount(); nt += 1)
                    for (ht = nt * H + V, Ce = 0; Ce < Q.getModuleCount(); Ce += 1) Q.isDark(nt, Ce) && (be = Ce * H + V, xe += "M" + be + "," + ht + Rt);
                return xe += '" stroke="transparent" fill="black"/>', xe += "</svg>", xe
            }, Q.createDataURL = function(H, V) {
                H = H || 2, V = typeof V > "u" ? H * 4 : V;
                var D = Q.getModuleCount() * H + V * 2,
                    O = V,
                    G = D - V;
                return re(D, D, function(le, Ce) {
                    if (O <= le && le < G && O <= Ce && Ce < G) {
                        var be = Math.floor((le - O) / H),
                            nt = Math.floor((Ce - O) / H);
                        return Q.isDark(nt, be) ? 0 : 1
                    } else return 1
                })
            }, Q.createImgTag = function(H, V, D) {
                H = H || 2, V = typeof V > "u" ? H * 4 : V;
                var O = Q.getModuleCount() * H + V * 2,
                    G = "";
                return G += "<img", G += ' src="', G += Q.createDataURL(H, V), G += '"', G += ' width="', G += O, G += '"', G += ' height="', G += O, G += '"', D && (G += ' alt="', G += Pn(D), G += '"'), G += "/>", G
            };
            var Pn = function(H) {
                    for (var V = "", D = 0; D < H.length; D += 1) {
                        var O = H.charAt(D);
                        switch (O) {
                            case "<":
                                V += "&lt;";
                                break;
                            case ">":
                                V += "&gt;";
                                break;
                            case "&":
                                V += "&amp;";
                                break;
                            case '"':
                                V += "&quot;";
                                break;
                            default:
                                V += O;
                                break
                        }
                    }
                    return V
                },
                Mi = function(H) {
                    var V = 1;
                    H = typeof H > "u" ? V * 2 : H;
                    var D = Q.getModuleCount() * V + H * 2,
                        O = H,
                        G = D - H,
                        le, Ce, be, nt, ht, xe = {
                            "\u2588\u2588": "\u2588",
                            "\u2588 ": "\u2580",
                            " \u2588": "\u2584",
                            "  ": " "
                        },
                        Rt = {
                            "\u2588\u2588": "\u2580",
                            "\u2588 ": "\u2580",
                            " \u2588": " ",
                            "  ": " "
                        },
                        Kt = "";
                    for (le = 0; le < D; le += 2) {
                        for (be = Math.floor((le - O) / V), nt = Math.floor((le + 1 - O) / V), Ce = 0; Ce < D; Ce += 1) ht = "\u2588", O <= Ce && Ce < G && O <= le && le < G && Q.isDark(be, Math.floor((Ce - O) / V)) && (ht = " "), O <= Ce && Ce < G && O <= le + 1 && le + 1 < G && Q.isDark(nt, Math.floor((Ce - O) / V)) ? ht += " " : ht += "\u2588", Kt += H < 1 && le + 1 >= G ? Rt[ht] : xe[ht];
                        Kt += "\n"
                    }
                    return D % 2 && H > 0 ? Kt.substring(0, Kt.length - D - 1) + Array(D + 1).join("\u2580") : Kt.substring(0, Kt.length - 1)
                };
            return Q.createASCII = function(H, V) {
                if (H = H || 1, H < 2) return Mi(V);
                H -= 1, V = typeof V > "u" ? H * 2 : V;
                var D = Q.getModuleCount() * H + V * 2,
                    O = V,
                    G = D - V,
                    le, Ce, be, nt, ht = Array(H + 1).join("\u2588\u2588"),
                    xe = Array(H + 1).join("  "),
                    Rt = "",
                    Kt = "";
                for (le = 0; le < D; le += 1) {
                    for (be = Math.floor((le - O) / H), Kt = "", Ce = 0; Ce < D; Ce += 1) nt = 1, O <= Ce && Ce < G && O <= le && le < G && Q.isDark(be, Math.floor((Ce - O) / H)) && (nt = 0), Kt += nt ? ht : xe;
                    for (be = 0; be < H; be += 1) Rt += Kt + "\n"
                }
                return Rt.substring(0, Rt.length - 1)
            }, Q.renderTo2dContext = function(H, V) {
                V = V || 2;
                for (var D = Q.getModuleCount(), O = 0; O < D; O++)
                    for (var G = 0; G < D; G++) H.fillStyle = Q.isDark(O, G) ? "black" : "white", H.fillRect(O * V, G * V, V, V)
            }, Q
        };
        r.stringToBytesFuncs = {
            default: function(L) {
                for (var Z = [], N = 0; N < L.length; N += 1) {
                    var T = L.charCodeAt(N);
                    Z.push(T & 255)
                }
                return Z
            }
        }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(L, Z) {
            var N = function() {
                    for (var R = P(L), X = function() {
                            var ut = R.read();
                            if (ut == -1) throw "eof";
                            return ut
                        }, I = 0, v = {};;) {
                        var ne = R.read();
                        if (ne == -1) break;
                        var J = X(),
                            Q = X(),
                            Pe = X(),
                            Ue = String.fromCharCode(ne << 8 | J),
                            ze = Q << 8 | Pe;
                        v[Ue] = ze, I += 1
                    }
                    if (I != Z) throw I + " != " + Z;
                    return v
                }(),
                T = 63;
            return function(R) {
                for (var X = [], I = 0; I < R.length; I += 1) {
                    var v = R.charCodeAt(I);
                    if (v < 128) X.push(v);
                    else {
                        var ne = N[R.charAt(I)];
                        typeof ne == "number" ? (ne & 255) == ne ? X.push(ne) : (X.push(ne >>> 8), X.push(ne & 255)) : X.push(T)
                    }
                }
                return X
            }
        };
        var o = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            },
            i = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            },
            a = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            },
            s = function() {
                var L = [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    Z = 1335,
                    N = 7973,
                    T = 21522,
                    R = {},
                    X = function(I) {
                        for (var v = 0; I != 0;) v += 1, I >>>= 1;
                        return v
                    };
                return R.getBCHTypeInfo = function(I) {
                    for (var v = I << 10; X(v) - X(Z) >= 0;) v ^= Z << X(v) - X(Z);
                    return (I << 10 | v) ^ T
                }, R.getBCHTypeNumber = function(I) {
                    for (var v = I << 12; X(v) - X(N) >= 0;) v ^= N << X(v) - X(N);
                    return I << 12 | v
                }, R.getPatternPosition = function(I) {
                    return L[I - 1]
                }, R.getMaskFunction = function(I) {
                    switch (I) {
                        case a.PATTERN000:
                            return function(v, ne) {
                                return (v + ne) % 2 == 0
                            };
                        case a.PATTERN001:
                            return function(v, ne) {
                                return v % 2 == 0
                            };
                        case a.PATTERN010:
                            return function(v, ne) {
                                return ne % 3 == 0
                            };
                        case a.PATTERN011:
                            return function(v, ne) {
                                return (v + ne) % 3 == 0
                            };
                        case a.PATTERN100:
                            return function(v, ne) {
                                return (Math.floor(v / 2) + Math.floor(ne / 3)) % 2 == 0
                            };
                        case a.PATTERN101:
                            return function(v, ne) {
                                return v * ne % 2 + v * ne % 3 == 0
                            };
                        case a.PATTERN110:
                            return function(v, ne) {
                                return (v * ne % 2 + v * ne % 3) % 2 == 0
                            };
                        case a.PATTERN111:
                            return function(v, ne) {
                                return (v * ne % 3 + (v + ne) % 2) % 2 == 0
                            };
                        default:
                            throw "bad maskPattern:" + I
                    }
                }, R.getErrorCorrectPolynomial = function(I) {
                    for (var v = d([1], 0), ne = 0; ne < I; ne += 1) v = v.multiply(d([1, c.gexp(ne)], 0));
                    return v
                }, R.getLengthInBits = function(I, v) {
                    if (1 <= v && v < 10) switch (I) {
                        case o.MODE_NUMBER:
                            return 10;
                        case o.MODE_ALPHA_NUM:
                            return 9;
                        case o.MODE_8BIT_BYTE:
                            return 8;
                        case o.MODE_KANJI:
                            return 8;
                        default:
                            throw "mode:" + I
                    } else if (v < 27) switch (I) {
                        case o.MODE_NUMBER:
                            return 12;
                        case o.MODE_ALPHA_NUM:
                            return 11;
                        case o.MODE_8BIT_BYTE:
                            return 16;
                        case o.MODE_KANJI:
                            return 10;
                        default:
                            throw "mode:" + I
                    } else if (v < 41) switch (I) {
                        case o.MODE_NUMBER:
                            return 14;
                        case o.MODE_ALPHA_NUM:
                            return 13;
                        case o.MODE_8BIT_BYTE:
                            return 16;
                        case o.MODE_KANJI:
                            return 12;
                        default:
                            throw "mode:" + I
                    } else throw "type:" + v
                }, R.getLostPoint = function(I) {
                    for (var v = I.getModuleCount(), ne = 0, J = 0; J < v; J += 1)
                        for (var Q = 0; Q < v; Q += 1) {
                            for (var Pe = 0, Ue = I.isDark(J, Q), ze = -1; ze <= 1; ze += 1)
                                if (!(J + ze < 0 || v <= J + ze))
                                    for (var ut = -1; ut <= 1; ut += 1) Q + ut < 0 || v <= Q + ut || ze == 0 && ut == 0 || Ue == I.isDark(J + ze, Q + ut) && (Pe += 1);
                            Pe > 5 && (ne += 3 + Pe - 5)
                        }
                    for (var J = 0; J < v - 1; J += 1)
                        for (var Q = 0; Q < v - 1; Q += 1) {
                            var kt = 0;
                            I.isDark(J, Q) && (kt += 1), I.isDark(J + 1, Q) && (kt += 1), I.isDark(J, Q + 1) && (kt += 1), I.isDark(J + 1, Q + 1) && (kt += 1), (kt == 0 || kt == 4) && (ne += 3)
                        }
                    for (var J = 0; J < v; J += 1)
                        for (var Q = 0; Q < v - 6; Q += 1) I.isDark(J, Q) && !I.isDark(J, Q + 1) && I.isDark(J, Q + 2) && I.isDark(J, Q + 3) && I.isDark(J, Q + 4) && !I.isDark(J, Q + 5) && I.isDark(J, Q + 6) && (ne += 40);
                    for (var Q = 0; Q < v; Q += 1)
                        for (var J = 0; J < v - 6; J += 1) I.isDark(J, Q) && !I.isDark(J + 1, Q) && I.isDark(J + 2, Q) && I.isDark(J + 3, Q) && I.isDark(J + 4, Q) && !I.isDark(J + 5, Q) && I.isDark(J + 6, Q) && (ne += 40);
                    for (var qt = 0, Q = 0; Q < v; Q += 1)
                        for (var J = 0; J < v; J += 1) I.isDark(J, Q) && (qt += 1);
                    var bt = Math.abs(100 * qt / v / v - 50) / 5;
                    return ne += bt * 10, ne
                }, R
            }(),
            c = function() {
                for (var L = new Array(256), Z = new Array(256), N = 0; N < 8; N += 1) L[N] = 1 << N;
                for (var N = 8; N < 256; N += 1) L[N] = L[N - 4] ^ L[N - 5] ^ L[N - 6] ^ L[N - 8];
                for (var N = 0; N < 255; N += 1) Z[L[N]] = N;
                var T = {};
                return T.glog = function(R) {
                    if (R < 1) throw "glog(" + R + ")";
                    return Z[R]
                }, T.gexp = function(R) {
                    for (; R < 0;) R += 255;
                    for (; R >= 256;) R -= 255;
                    return L[R]
                }, T
            }();

        function d(L, Z) {
            if (typeof L.length > "u") throw L.length + "/" + Z;
            var N = function() {
                    for (var R = 0; R < L.length && L[R] == 0;) R += 1;
                    for (var X = new Array(L.length - R + Z), I = 0; I < L.length - R; I += 1) X[I] = L[I + R];
                    return X
                }(),
                T = {};
            return T.getAt = function(R) {
                return N[R]
            }, T.getLength = function() {
                return N.length
            }, T.multiply = function(R) {
                for (var X = new Array(T.getLength() + R.getLength() - 1), I = 0; I < T.getLength(); I += 1)
                    for (var v = 0; v < R.getLength(); v += 1) X[I + v] ^= c.gexp(c.glog(T.getAt(I)) + c.glog(R.getAt(v)));
                return d(X, 0)
            }, T.mod = function(R) {
                if (T.getLength() - R.getLength() < 0) return T;
                for (var X = c.glog(T.getAt(0)) - c.glog(R.getAt(0)), I = new Array(T.getLength()), v = 0; v < T.getLength(); v += 1) I[v] = T.getAt(v);
                for (var v = 0; v < R.getLength(); v += 1) I[v] ^= c.gexp(c.glog(R.getAt(v)) + X);
                return d(I, 0).mod(R)
            }, T
        }
        var h = function() {
                var L = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12, 7, 37, 13],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16]
                    ],
                    Z = function(R, X) {
                        var I = {};
                        return I.totalCount = R, I.dataCount = X, I
                    },
                    N = {},
                    T = function(R, X) {
                        switch (X) {
                            case i.L:
                                return L[(R - 1) * 4 + 0];
                            case i.M:
                                return L[(R - 1) * 4 + 1];
                            case i.Q:
                                return L[(R - 1) * 4 + 2];
                            case i.H:
                                return L[(R - 1) * 4 + 3];
                            default:
                                return
                        }
                    };
                return N.getRSBlocks = function(R, X) {
                    var I = T(R, X);
                    if (typeof I > "u") throw "bad rs block @ typeNumber:" + R + "/errorCorrectionLevel:" + X;
                    for (var v = I.length / 3, ne = [], J = 0; J < v; J += 1)
                        for (var Q = I[J * 3 + 0], Pe = I[J * 3 + 1], Ue = I[J * 3 + 2], ze = 0; ze < Q; ze += 1) ne.push(Z(Pe, Ue));
                    return ne
                }, N
            }(),
            f = function() {
                var L = [],
                    Z = 0,
                    N = {};
                return N.getBuffer = function() {
                    return L
                }, N.getAt = function(T) {
                    var R = Math.floor(T / 8);
                    return (L[R] >>> 7 - T % 8 & 1) == 1
                }, N.put = function(T, R) {
                    for (var X = 0; X < R; X += 1) N.putBit((T >>> R - X - 1 & 1) == 1)
                }, N.getLengthInBits = function() {
                    return Z
                }, N.putBit = function(T) {
                    var R = Math.floor(Z / 8);
                    L.length <= R && L.push(0), T && (L[R] |= 128 >>> Z % 8), Z += 1
                }, N
            },
            b = function(L) {
                var Z = o.MODE_NUMBER,
                    N = L,
                    T = {};
                T.getMode = function() {
                    return Z
                }, T.getLength = function(I) {
                    return N.length
                }, T.write = function(I) {
                    for (var v = N, ne = 0; ne + 2 < v.length;) I.put(R(v.substring(ne, ne + 3)), 10), ne += 3;
                    ne < v.length && (v.length - ne == 1 ? I.put(R(v.substring(ne, ne + 1)), 4) : v.length - ne == 2 && I.put(R(v.substring(ne, ne + 2)), 7))
                };
                var R = function(I) {
                        for (var v = 0, ne = 0; ne < I.length; ne += 1) v = v * 10 + X(I.charAt(ne));
                        return v
                    },
                    X = function(I) {
                        if ("0" <= I && I <= "9") return I.charCodeAt(0) - 48;
                        throw "illegal char :" + I
                    };
                return T
            },
            w = function(L) {
                var Z = o.MODE_ALPHA_NUM,
                    N = L,
                    T = {};
                T.getMode = function() {
                    return Z
                }, T.getLength = function(X) {
                    return N.length
                }, T.write = function(X) {
                    for (var I = N, v = 0; v + 1 < I.length;) X.put(R(I.charAt(v)) * 45 + R(I.charAt(v + 1)), 11), v += 2;
                    v < I.length && X.put(R(I.charAt(v)), 6)
                };
                var R = function(X) {
                    if ("0" <= X && X <= "9") return X.charCodeAt(0) - 48;
                    if ("A" <= X && X <= "Z") return X.charCodeAt(0) - 65 + 10;
                    switch (X) {
                        case " ":
                            return 36;
                        case "$":
                            return 37;
                        case "%":
                            return 38;
                        case "*":
                            return 39;
                        case "+":
                            return 40;
                        case "-":
                            return 41;
                        case ".":
                            return 42;
                        case "/":
                            return 43;
                        case ":":
                            return 44;
                        default:
                            throw "illegal char :" + X
                    }
                };
                return T
            },
            S = function(L) {
                var Z = o.MODE_8BIT_BYTE,
                    N = r.stringToBytes(L),
                    T = {};
                return T.getMode = function() {
                    return Z
                }, T.getLength = function(R) {
                    return N.length
                }, T.write = function(R) {
                    for (var X = 0; X < N.length; X += 1) R.put(N[X], 8)
                }, T
            },
            k = function(L) {
                var Z = o.MODE_KANJI,
                    N = r.stringToBytesFuncs.SJIS;
                if (!N) throw "sjis not supported.";
                (function(X, I) {
                    var v = N(X);
                    if (v.length != 2 || (v[0] << 8 | v[1]) != I) throw "sjis not supported."
                })("\u53CB", 38726);
                var T = N(L),
                    R = {};
                return R.getMode = function() {
                    return Z
                }, R.getLength = function(X) {
                    return ~~(T.length / 2)
                }, R.write = function(X) {
                    for (var I = T, v = 0; v + 1 < I.length;) {
                        var ne = (255 & I[v]) << 8 | 255 & I[v + 1];
                        if (33088 <= ne && ne <= 40956) ne -= 33088;
                        else if (57408 <= ne && ne <= 60351) ne -= 49472;
                        else throw "illegal char at " + (v + 1) + "/" + ne;
                        ne = (ne >>> 8 & 255) * 192 + (ne & 255), X.put(ne, 13), v += 2
                    }
                    if (v < I.length) throw "illegal char at " + (v + 1)
                }, R
            },
            $ = function() {
                var L = [],
                    Z = {};
                return Z.writeByte = function(N) {
                    L.push(N & 255)
                }, Z.writeShort = function(N) {
                    Z.writeByte(N), Z.writeByte(N >>> 8)
                }, Z.writeBytes = function(N, T, R) {
                    T = T || 0, R = R || N.length;
                    for (var X = 0; X < R; X += 1) Z.writeByte(N[X + T])
                }, Z.writeString = function(N) {
                    for (var T = 0; T < N.length; T += 1) Z.writeByte(N.charCodeAt(T))
                }, Z.toByteArray = function() {
                    return L
                }, Z.toString = function() {
                    var N = "";
                    N += "[";
                    for (var T = 0; T < L.length; T += 1) T > 0 && (N += ","), N += L[T];
                    return N += "]", N
                }, Z
            },
            q = function() {
                var L = 0,
                    Z = 0,
                    N = 0,
                    T = "",
                    R = {},
                    X = function(v) {
                        T += String.fromCharCode(I(v & 63))
                    },
                    I = function(v) {
                        if (!(v < 0)) {
                            if (v < 26) return 65 + v;
                            if (v < 52) return 97 + (v - 26);
                            if (v < 62) return 48 + (v - 52);
                            if (v == 62) return 43;
                            if (v == 63) return 47
                        }
                        throw "n:" + v
                    };
                return R.writeByte = function(v) {
                    for (L = L << 8 | v & 255, Z += 8, N += 1; Z >= 6;) X(L >>> Z - 6), Z -= 6
                }, R.flush = function() {
                    if (Z > 0 && (X(L << 6 - Z), L = 0, Z = 0), N % 3 != 0)
                        for (var v = 3 - N % 3, ne = 0; ne < v; ne += 1) T += "="
                }, R.toString = function() {
                    return T
                }, R
            },
            P = function(L) {
                var Z = L,
                    N = 0,
                    T = 0,
                    R = 0,
                    X = {};
                X.read = function() {
                    for (; R < 8;) {
                        if (N >= Z.length) {
                            if (R == 0) return -1;
                            throw "unexpected end of file./" + R
                        }
                        var v = Z.charAt(N);
                        if (N += 1, v == "=") return R = 0, -1;
                        if (v.match(/^\s$/)) continue;
                        T = T << 6 | I(v.charCodeAt(0)), R += 6
                    }
                    var ne = T >>> R - 8 & 255;
                    return R -= 8, ne
                };
                var I = function(v) {
                    if (65 <= v && v <= 90) return v - 65;
                    if (97 <= v && v <= 122) return v - 97 + 26;
                    if (48 <= v && v <= 57) return v - 48 + 52;
                    if (v == 43) return 62;
                    if (v == 47) return 63;
                    throw "c:" + v
                };
                return X
            },
            F = function(L, Z) {
                var N = L,
                    T = Z,
                    R = new Array(L * Z),
                    X = {};
                X.setPixel = function(J, Q, Pe) {
                    R[Q * N + J] = Pe
                }, X.write = function(J) {
                    J.writeString("GIF87a"), J.writeShort(N), J.writeShort(T), J.writeByte(128), J.writeByte(0), J.writeByte(0), J.writeByte(0), J.writeByte(0), J.writeByte(0), J.writeByte(255), J.writeByte(255), J.writeByte(255), J.writeString(","), J.writeShort(0), J.writeShort(0), J.writeShort(N), J.writeShort(T), J.writeByte(0);
                    var Q = 2,
                        Pe = v(Q);
                    J.writeByte(Q);
                    for (var Ue = 0; Pe.length - Ue > 255;) J.writeByte(255), J.writeBytes(Pe, Ue, 255), Ue += 255;
                    J.writeByte(Pe.length - Ue), J.writeBytes(Pe, Ue, Pe.length - Ue), J.writeByte(0), J.writeString(";")
                };
                var I = function(J) {
                        var Q = J,
                            Pe = 0,
                            Ue = 0,
                            ze = {};
                        return ze.write = function(ut, kt) {
                            if (ut >>> kt) throw "length over";
                            for (; Pe + kt >= 8;) Q.writeByte(255 & (ut << Pe | Ue)), kt -= 8 - Pe, ut >>>= 8 - Pe, Ue = 0, Pe = 0;
                            Ue = ut << Pe | Ue, Pe = Pe + kt
                        }, ze.flush = function() {
                            Pe > 0 && Q.writeByte(Ue)
                        }, ze
                    },
                    v = function(J) {
                        for (var Q = 1 << J, Pe = (1 << J) + 1, Ue = J + 1, ze = ne(), ut = 0; ut < Q; ut += 1) ze.add(String.fromCharCode(ut));
                        ze.add(String.fromCharCode(Q)), ze.add(String.fromCharCode(Pe));
                        var kt = $(),
                            qt = I(kt);
                        qt.write(Q, Ue);
                        var bt = 0,
                            wt = String.fromCharCode(R[bt]);
                        for (bt += 1; bt < R.length;) {
                            var _e = String.fromCharCode(R[bt]);
                            bt += 1, ze.contains(wt + _e) ? wt = wt + _e : (qt.write(ze.indexOf(wt), Ue), ze.size() < 4095 && (ze.size() == 1 << Ue && (Ue += 1), ze.add(wt + _e)), wt = _e)
                        }
                        return qt.write(ze.indexOf(wt), Ue), qt.write(Pe, Ue), qt.flush(), kt.toByteArray()
                    },
                    ne = function() {
                        var J = {},
                            Q = 0,
                            Pe = {};
                        return Pe.add = function(Ue) {
                            if (Pe.contains(Ue)) throw "dup key:" + Ue;
                            J[Ue] = Q, Q += 1
                        }, Pe.size = function() {
                            return Q
                        }, Pe.indexOf = function(Ue) {
                            return J[Ue]
                        }, Pe.contains = function(Ue) {
                            return typeof J[Ue] < "u"
                        }, Pe
                    };
                return X
            },
            re = function(L, Z, N) {
                for (var T = F(L, Z), R = 0; R < Z; R += 1)
                    for (var X = 0; X < L; X += 1) T.setPixel(X, R, N(X, R));
                var I = $();
                T.write(I);
                for (var v = q(), ne = I.toByteArray(), J = 0; J < ne.length; J += 1) v.writeByte(ne[J]);
                return v.flush(), "data:image/gif;base64," + v
            };
        return r
    }();
    (function() {
        n.stringToBytesFuncs["UTF-8"] = function(r) {
            function o(i) {
                for (var a = [], s = 0; s < i.length; s++) {
                    var c = i.charCodeAt(s);
                    c < 128 ? a.push(c) : c < 2048 ? a.push(192 | c >> 6, 128 | c & 63) : c < 55296 || c >= 57344 ? a.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63) : (s++, c = 65536 + ((c & 1023) << 10 | i.charCodeAt(s) & 1023), a.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63))
                }
                return a
            }
            return o(r)
        }
    })(),
    function(r) {
        t.exports = r()
    }(function() {
        return n
    })
})(rh);
var i2 = rh.exports;

function _a(t) {
    return Qe(this, null, function*() {
        try {
            if (!(navigator != null && navigator.clipboard)) throw new Tt("Clipboard API not available");
            return yield navigator.clipboard.writeText(t)
        } catch {}
        a2(t)
    })
}

function a2(t) {
    let e = document.createElement("textarea");
    e.value = t, e.style.top = "0", e.style.left = "0", e.style.position = "fixed", document.body.appendChild(e), e.focus(), e.select();
    try {
        document.execCommand("copy")
    } finally {
        document.body.removeChild(e)
    }
}
var s2 = je("<div>"),
    La = t => {
        let e, n, r, [o, i] = Te(!1),
            [a, s] = Te(yu);
        St(() => {
            let b = i2(0, "L");
            b.addData(t.sourceUrl), b.make(), e.innerHTML = b.createSvgTag(4, 0);
            let w = e.firstElementChild.clientWidth,
                S = Math.round(nh / w * 1e5) / 1e5;
            if (r) {
                let k = Math.ceil(Ys / (S * 4)) * 4,
                    $ = An(Math.ceil((w - k) / (2 * 4)) * 4);
                r.style.top = $, r.style.left = $, r.style.height = An(k), r.style.width = An(k), s(Math.round(yu / S))
            }
            n.style.transform = "scale(".concat(S, ")")
        });
        let c = null;
        return g(e2, {
            get class() {
                return t.class
            },
            onClick: () => {
                i(!0), _a(t.sourceUrl), c != null && clearTimeout(c), c = setTimeout(() => i(!1), 1500)
            },
            get children() {
                return [g(t2, {
                    ref(h) {
                        var f = n;
                        typeof f == "function" ? f(h) : n = h
                    },
                    get children() {
                        return [(() => {
                            var h = s2(),
                                f = e;
                            return typeof f == "function" ? Mr(f, h) : e = h, h
                        })(), g(Se, {
                            get when() {
                                return t.imageUrl
                            },
                            get children() {
                                return g(n2, {
                                    ref(h) {
                                        var f = r;
                                        typeof f == "function" ? f(h) : r = h
                                    },
                                    get children() {
                                        return g(r2, {
                                            get src() {
                                                return t.imageUrl
                                            },
                                            alt: "",
                                            get size() {
                                                return a()
                                            }
                                        })
                                    }
                                })
                            }
                        })]
                    }
                }), g(ml, {
                    onBeforeEnter: h => {
                        Sn(h, [{
                            opacity: 0,
                            transform: "translate(-50%, 44px)"
                        }, {
                            opacity: 1,
                            transform: "translate(-50%, 0)"
                        }], {
                            duration: 150,
                            easing: "ease-out"
                        })
                    },
                    onExit: (h, f) => {
                        Sn(h, [{
                            opacity: 1,
                            transform: "translate(-50%, 0)"
                        }, {
                            opacity: 0,
                            transform: "translate(-50%, 44px)"
                        }], {
                            duration: 150,
                            easing: "ease-out"
                        }).finished.then(() => {
                            f()
                        })
                    },
                    get children() {
                        return g(Se, {
                            get when() {
                                return o() && !t.disableCopy
                            },
                            get children() {
                                return g(o2, {
                                    get children() {
                                        return [g(wl, {
                                            size: "xs"
                                        }), g(tn, {
                                            translationKey: "common.linkCopied",
                                            children: "Link Copied"
                                        })]
                                    }
                                })
                            }
                        })
                    }
                }), g(Se, {
                    get when() {
                        return !t.disableCopy
                    },
                    get children() {
                        return g(ha, {
                            get children() {
                                return g(Wa, {})
                            }
                        })
                    }
                })]
            }
        })
    };

function Zs(t, e, n) {
    let r = t[e] || e.trim().split(".").reduce((o, i) => o ? o[i] : void 0, t);
    return r !== void 0 ? r : n
}
var l2 = (t, e, n = /{{([^{}]+)}}/g) => t.replace(n, (r, o) => Zs(e, o, "")),
    c2 = (t = {}, e = typeof navigator < "u" && navigator.language in t ? navigator.language : (n => (n = Object.keys(t)[0]) != null ? n : "")()) => {
        let [n, r] = Te(e), [o, i] = sl(t);
        return [(c, d, h) => {
            let f = Zs(o[n()], c, h || "");
            return typeof f == "function" ? f(d) : typeof f == "string" ? l2(f, d || {}) : f
        }, {
            add(c, d) {
                i(c, h => Object.assign(h || {}, d))
            },
            locale: c => c ? r(c) : n(),
            dict: c => Zs(o, c)
        }]
    },
    oh = Ua({}),
    Rn = () => Ot(oh),
    ud, u2 = _.div(ud || (ud = E(["\n    font-style: normal;\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n\n    color: ", ";\n"])), t => t.fontWeight, t => t.fontSize, t => t.lineHeight, t => t.color),
    tn = t => {
        let e = it(),
            [n] = Rn(),
            r, o = () => t.color || e.colors.text.primary,
            i = kn({
                fontSize: "14px",
                fontWeight: "510",
                lineHeight: "130%"
            }, t);
        return St(() => {
            r && i.cursor !== "unset" && getComputedStyle(r).cursor !== "pointer" && (r.style.cursor = "default")
        }), g(u2, {
            get fontSize() {
                return i.fontSize
            },
            get fontWeight() {
                return i.fontWeight
            },
            get lineHeight() {
                return i.lineHeight
            },
            get color() {
                return o()
            },
            get class() {
                return i.class
            },
            ref(a) {
                var s = r;
                typeof s == "function" ? s(a) : r = a
            },
            "data-tc-text": "true",
            get children() {
                var a;
                return ie(() => !!i.translationKey)() ? n(i.translationKey, i.translationValues, (a = i.children) == null ? void 0 : a.toString()) : i.children
            }
        })
    },
    dd, d2 = _.div(dd || (dd = E(["\n    position: relative;\n\n    &::after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border: 0.5px solid rgba(0, 0, 0, 0.08);\n        border-radius: inherit;\n    }\n"]))),
    fd, f2 = _(Dr)(fd || (fd = E(["\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n"]))),
    ih = t => g(d2, {
        get class() {
            return t.class
        },
        get children() {
            return [g(f2, {
                get src() {
                    return t.src
                }
            }), ie(() => t.badge)]
        }
    }),
    h2 = {
        m: "16px",
        s: "12px",
        none: "0"
    },
    g2 = {
        m: "6px",
        s: "6px",
        none: "0"
    },
    hd, p2 = _.ul(hd || (hd = E(["\n    display: flex;\n    gap: 0;\n    width: 100%;\n    overflow-x: auto;\n    padding: 8px 12px 16px 12px;\n    margin: 0;\n    list-style: none;\n    flex-wrap: nowrap;\n\n    &&::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n\n    > li {\n        display: flex;\n        flex: 1;\n        min-width: 78px;\n        height: fit-content;\n    }\n\n    > li > button {\n        width: 100%;\n    }\n"]))),
    gd, m2 = _.button(gd || (gd = E(["\n    position: relative;\n    cursor: pointer;\n    border: none;\n    background-color: unset;\n    padding: 8px 4px;\n    width: 100%;\n    min-width: 78px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    transition: transform 0.125s ease-in-out;\n\n    ", " {\n        &:hover {\n            transform: scale(1.04);\n        }\n    }\n\n    &:active {\n        transform: scale(0.96);\n    }\n\n    ", " {\n        &:active {\n            transform: scale(0.92);\n        }\n    }\n"])), Bi, Ti),
    pd, y2 = _(ih)(pd || (pd = E(["\n    width: 60px;\n    height: 60px;\n    border-radius: ", ";\n    margin-bottom: 8px;\n    position: relative;\n"])), t => h2[t.theme.borderRadius]),
    md, b2 = _(Dr)(md || (md = E(["\n    position: absolute;\n    right: -6px;\n    bottom: -6px;\n    width: 24px;\n    height: 24px;\n    border-radius: ", ";\n    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);\n"])), t => g2[t.theme.borderRadius]),
    yd, w2 = _(tn)(yd || (yd = E(["\n    max-width: 90px;\n    font-weight: 510;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n\n    ", " {\n        max-width: 80px;\n    }\n"])), an("mobile")),
    bd, x2 = _(tn)(bd || (bd = E(["\n    font-weight: ", ";\n    max-width: 90px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    color: ", ";\n\n    ", " {\n        max-width: 80px;\n    }\n"])), t => t.colorPrimary ? "510" : "400", t => t.colorPrimary ? t.theme.colors.text.primary : t.theme.colors.text.secondary, an("mobile")),
    v2 = je("<div>"),
    Ta = t => {
        let e = null,
            n = () => {
                let r = e == null ? void 0 : e.querySelector("div");
                if (r && r.scrollWidth > r.clientWidth) {
                    let o = 0,
                        i = -.4,
                        a = .05;
                    for (; r.scrollWidth > r.clientWidth && o >= i;) o -= a, r.style.letterSpacing = "".concat(o, "px");
                    o !== 0 && (o -= a, r.style.letterSpacing = "".concat(o, "px"))
                }
            };
        return I1(() => n()), St(() => {
            n()
        }), g(m2, {
            get class() {
                return t.class
            },
            onClick: () => t.onClick(),
            "data-tc-wallet-item": "true",
            get children() {
                return [ie(() => ie(() => typeof t.icon == "string")() ? g(y2, {
                    get src() {
                        return t.icon
                    },
                    get badge() {
                        return ie(() => !!t.badgeUrl)() && g(b2, {
                            get src() {
                                return t.badgeUrl
                            }
                        })
                    }
                }) : t.icon), (() => {
                    var r = v2();
                    return Mr(o => e = o, r), Mt(r, g(w2, {
                        get children() {
                            return t.name
                        }
                    })), r
                })(), ie(() => ie(() => !!t.secondLine)() && g(x2, {
                    get colorPrimary() {
                        var r;
                        return (r = t.secondLineColorPrimary) != null ? r : !0
                    },
                    get children() {
                        return t.secondLine
                    }
                }))]
            }
        })
    },
    wd, C2 = _.h1(wd || (wd = E(["\n    font-style: normal;\n    font-weight: 590;\n    font-size: 20px;\n    line-height: 28px;\n\n    text-align: center;\n\n    color: ", ";\n\n    margin-top: 0;\n    margin-bottom: 0;\n\n    cursor: default;\n"])), t => t.theme.colors.text.primary),
    Un = t => {
        let [e] = Rn();
        return g(C2, {
            get class() {
                return t.class
            },
            "data-tc-h1": "true",
            get children() {
                var n;
                return ie(() => !!t.translationKey)() ? e(t.translationKey, t.translationValues, (n = t.children) == null ? void 0 : n.toString()) : t.children
            }
        })
    },
    xd, S2 = _.h2(xd || (xd = E(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n\n    text-align: center;\n\n    color: ", ";\n\n    margin-top: 0;\n    margin-bottom: 32px;\n\n    cursor: default;\n"])), t => t.theme.colors.text.secondary),
    cr = t => {
        let [e] = Rn();
        return g(S2, {
            get class() {
                return t.class
            },
            "data-tc-h2": "true",
            get children() {
                var n;
                return ie(() => !!t.translationKey)() ? e(t.translationKey, t.translationValues, (n = t.children) == null ? void 0 : n.toString()) : t.children
            }
        })
    },
    vd, k2 = _.h3(vd || (vd = E(["\n    font-style: normal;\n    font-weight: 510;\n    font-size: 16px;\n    line-height: 20px;\n\n    color: ", ";\n\n    margin-top: 0;\n    margin-bottom: 0;\n\n    cursor: default;\n"])), t => t.theme.colors.text.primary),
    yl = t => {
        let [e] = Rn();
        return g(k2, {
            "data-tc-h3": "true",
            get class() {
                return t.class
            },
            get children() {
                var n;
                return ie(() => !!t.translationKey)() ? e(t.translationKey, t.translationValues, (n = t.children) == null ? void 0 : n.toString()) : t.children
            }
        })
    },
    A2 = je('<svg xmlns=http://www.w3.org/2000/svg width=28 height=28 viewBox="0 0 28 28"><path fill-rule=evenodd clip-rule=evenodd d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z">'),
    bl = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary;
        return (() => {
            var r = A2(),
                o = r.firstChild;
            return Ve(i => {
                var a = n(),
                    s = n();
                return a !== i.e && ye(r, "fill", i.e = a), s !== i.t && ye(o, "fill", i.t = s), i
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    T2 = je('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z">'),
    B2 = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.primary;
        return (() => {
            var r = T2(),
                o = r.firstChild;
            return Ve(() => ye(o, "fill", n())), r
        })()
    },
    I2 = je('<svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"fill=none><g clip-path=url(#clip0_3783_2045)><circle cx=8 cy=8.00098 r=8></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098"stroke-width=1.5 stroke-linecap=round stroke-linejoin=round></path></g><defs><clipPath id=clip0_3783_2045><rect width=16 height=16 fill=white transform="translate(0 0.000976562)">'),
    E2 = je('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><circle cx=12 cy=12 r=11></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z">'),
    R2 = je('<svg width=72 height=72 viewBox="0 0 72 72"fill=none xmlns=http://www.w3.org/2000/svg><circle cx=36 cy=36 r=33></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z">'),
    wl = t => {
        let e = it(),
            n = () => t.size || "s",
            r = () => t.fill || e.colors.icon.success;
        return ie(() => ie(() => n() === "xs")() ? (() => {
            var o = I2(),
                i = o.firstChild,
                a = i.firstChild,
                s = a.nextSibling;
            return Ve(c => {
                var d = t.class,
                    h = r(),
                    f = e.colors.constant.white;
                return d !== c.e && ye(o, "class", c.e = d), h !== c.t && ye(a, "fill", c.t = h), f !== c.a && ye(s, "stroke", c.a = f), c
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), o
        })() : ie(() => n() === "s")() ? (() => {
            var o = E2(),
                i = o.firstChild,
                a = i.nextSibling;
            return Ve(s => {
                var c = t.class,
                    d = r(),
                    h = e.colors.constant.white;
                return c !== s.e && ye(o, "class", s.e = c), d !== s.t && ye(i, "fill", s.t = d), h !== s.a && ye(a, "fill", s.a = h), s
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), o
        })() : (() => {
            var o = R2(),
                i = o.firstChild,
                a = i.nextSibling;
            return Ve(s => {
                var c = t.class,
                    d = r(),
                    h = e.colors.constant.white;
                return c !== s.e && ye(o, "class", s.e = c), d !== s.t && ye(i, "fill", s.t = d), h !== s.a && ye(a, "fill", s.a = h), s
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), o
        })())
    },
    U2 = je('<svg width=72 height=72 viewBox="0 0 72 72"fill=none xmlns=http://www.w3.org/2000/svg><circle cx=36 cy=36 r=33></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z">'),
    M2 = je('<svg xmlns=http://www.w3.org/2000/svg width=48 height=48 viewBox="0 0 48 48"fill=none><circle cx=24 cy=24.001 r=22></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501"stroke-width=3 stroke-linecap=round stroke-linejoin=round>'),
    P2 = je('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><circle cx=12 cy=12 r=11></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z">'),
    Ei = t => {
        let e = it(),
            n = () => t.size || "m",
            r = () => t.fill || e.colors.icon.error;
        return ie(() => ie(() => n() === "m")() ? (() => {
            var o = U2(),
                i = o.firstChild,
                a = i.nextSibling;
            return Ve(s => {
                var c = t.class,
                    d = r(),
                    h = e.colors.constant.white;
                return c !== s.e && ye(o, "class", s.e = c), d !== s.t && ye(i, "fill", s.t = d), h !== s.a && ye(a, "fill", s.a = h), s
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), o
        })() : ie(() => n() === "s")() ? (() => {
            var o = M2(),
                i = o.firstChild,
                a = i.nextSibling;
            return Ve(s => {
                var c = t.class,
                    d = r(),
                    h = e.colors.constant.white;
                return c !== s.e && ye(o, "class", s.e = c), d !== s.t && ye(i, "fill", s.t = d), h !== s.a && ye(a, "stroke", s.a = h), s
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), o
        })() : (() => {
            var o = P2(),
                i = o.firstChild,
                a = i.nextSibling;
            return Ve(s => {
                var c = t.class,
                    d = r(),
                    h = e.colors.constant.white;
                return c !== s.e && ye(o, "class", s.e = c), d !== s.t && ye(i, "fill", s.t = d), h !== s.a && ye(a, "fill", s.a = h), s
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), o
        })())
    },
    _2 = je('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z">'),
    L2 = je('<svg xmlns=http://www.w3.org/2000/svg width=44 height=44 viewBox="0 0 44 44"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z">'),
    W2 = je('<svg width=72 height=72 viewBox="0 0 72 72"fill=none xmlns=http://www.w3.org/2000/svg><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999"stroke-width=4 stroke-linecap=round stroke-linejoin=round>'),
    Cd, Sd, Gn = t => {
        let e = it(),
            n = () => t.size || "xs",
            r = () => t.fill || e.colors.icon.tertiary,
            o = Wm(Cd || (Cd = E(["\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n    "]))),
            i = Fn(Sd || (Sd = E(["\n        animation: ", " 1s linear infinite;\n    "])), o);
        return ie(() => ie(() => n() === "xs")() ? (() => {
            var a = _2(),
                s = a.firstChild;
            return Ve(c => {
                var d = (0, gi.default)(i, t.class),
                    h = r();
                return d !== c.e && ye(a, "class", c.e = d), h !== c.t && ye(s, "fill", c.t = h), c
            }, {
                e: void 0,
                t: void 0
            }), a
        })() : ie(() => n() === "s")() ? (() => {
            var a = L2(),
                s = a.firstChild;
            return Ve(c => {
                var d = (0, gi.default)(i, t.class),
                    h = r();
                return d !== c.e && ye(a, "class", c.e = d), h !== c.t && ye(s, "fill", c.t = h), c
            }, {
                e: void 0,
                t: void 0
            }), a
        })() : (() => {
            var a = W2(),
                s = a.firstChild;
            return Ve(c => {
                var d = (0, gi.default)(i, t.class),
                    h = r();
                return d !== c.e && ye(a, "class", c.e = d), h !== c.t && ye(s, "stroke", c.t = h), c
            }, {
                e: void 0,
                t: void 0
            }), a
        })())
    },
    D2 = je('<svg width=158 height=28 viewBox="0 0 158 28"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z"fill=#0098EA></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z"fill=white></path><path fill-rule=evenodd clip-rule=evenodd d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z">'),
    N2 = () => {
        let t = it(),
            e = () => t.theme === ft.DARK ? t.colors.constant.white : t.colors.constant.black;
        return (() => {
            var n = D2(),
                r = n.firstChild,
                o = r.nextSibling,
                i = o.nextSibling;
            return Ve(() => ye(i, "fill", e())), n
        })()
    },
    $2 = je('<svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z">'),
    H2 = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary;
        return (() => {
            var r = $2(),
                o = r.firstChild;
            return Ve(() => ye(o, "fill", n())), r
        })()
    },
    K2 = je('<svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z">'),
    V2 = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.primary;
        return (() => {
            var r = K2(),
                o = r.firstChild;
            return Ve(() => ye(o, "fill", n())), r
        })()
    },
    j2 = je('<svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z">'),
    z2 = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.primary;
        return (() => {
            var r = j2(),
                o = r.firstChild;
            return Ve(() => ye(o, "fill", n())), r
        })()
    },
    O2 = je('<svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z">'),
    F2 = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.primary;
        return (() => {
            var r = O2(),
                o = r.firstChild;
            return Ve(() => ye(o, "fill", n())), r
        })()
    },
    q2 = je('<svg xmlns=http://www.w3.org/2000/svg width=17 height=16 viewBox="0 0 17 16"fill=none><g clip-path=url(#clip0_3676_1603)><path fill-rule=evenodd clip-rule=evenodd d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id=clip0_3676_1603><rect width=16 height=16 fill=white transform="translate(0.5 0.000488281)">'),
    bi = t => {
        let e = it(),
            n = () => t.fill || e.colors.accent;
        return (() => {
            var r = q2(),
                o = r.firstChild,
                i = o.firstChild;
            return Ve(() => ye(i, "fill", n())), r
        })()
    },
    G2 = je('<svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 16 16"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z">'),
    wu = t => {
        let e = it(),
            n = () => t.fill || e.colors.accent;
        return (() => {
            var r = G2(),
                o = r.firstChild;
            return Ve(() => ye(o, "fill", n())), r
        })()
    },
    Y2 = je('<svg xmlns=http://www.w3.org/2000/svg width=17 height=16 viewBox="0 0 17 16"fill=none><g clip-path=url(#clip0_3676_1274)><path fill-rule=evenodd clip-rule=evenodd d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id=clip0_3676_1274><rect width=16 height=16 fill=white transform="translate(0.5 0.000976562)">'),
    Z2 = t => {
        let e = it(),
            n = () => t.fill || e.colors.accent;
        return (() => {
            var r = Y2(),
                o = r.firstChild,
                i = o.firstChild;
            return Ve(() => ye(i, "fill", n())), r
        })()
    },
    Q2 = je('<svg xmlns=http://www.w3.org/2000/svg width=48 height=48 viewBox="0 0 48 48"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z">'),
    X2 = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary;
        return (() => {
            var r = Q2(),
                o = r.firstChild;
            return Ve(i => {
                var a = t.class,
                    s = n();
                return a !== i.e && ye(r, "class", i.e = a), s !== i.t && ye(o, "fill", i.t = s), i
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    J2 = je('<svg xmlns=http://www.w3.org/2000/svg width=48 height=48 viewBox="0 0 48 48"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z">'),
    eb = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary;
        return (() => {
            var r = J2(),
                o = r.firstChild;
            return Ve(i => {
                var a = t.class,
                    s = n();
                return a !== i.e && ye(r, "class", i.e = a), s !== i.t && ye(o, "fill", i.t = s), i
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    tb = je('<svg xmlns=http://www.w3.org/2000/svg width=28 height=28 viewBox="0 0 28 28"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z">'),
    nb = t => {
        let e = it(),
            n = () => t.fill || e.colors.constant.white;
        return (() => {
            var r = tb(),
                o = r.firstChild;
            return Ve(i => {
                var a = t.class,
                    s = n();
                return a !== i.e && ye(r, "class", i.e = a), s !== i.t && ye(o, "fill", i.t = s), i
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    rb = je('<svg xmlns=http://www.w3.org/2000/svg width=28 height=28 viewBox="0 0 28 28"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z">'),
    xl = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary;
        return (() => {
            var r = rb(),
                o = r.firstChild;
            return Ve(i => {
                var a = t.class,
                    s = n();
                return a !== i.e && ye(r, "class", i.e = a), s !== i.t && ye(o, "fill", i.t = s), i
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    ob = je('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path fill-rule=evenodd clip-rule=evenodd d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z">'),
    ib = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.primary;
        return (() => {
            var r = ob(),
                o = r.firstChild;
            return Ve(i => {
                var a = t.class,
                    s = n();
                return a !== i.e && ye(r, "class", i.e = a), s !== i.t && ye(o, "fill", i.t = s), i
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    ab = je('<svg xmlns=http://www.w3.org/2000/svg width=28 height=28 viewBox="0 0 28 28"><path fill-rule=evenodd clip-rule=evenodd d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z">'),
    Wa = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary;
        return (() => {
            var r = ab(),
                o = r.firstChild;
            return Ve(i => {
                var a = n(),
                    s = n();
                return a !== i.e && ye(r, "fill", i.e = a), s !== i.t && ye(o, "fill", i.t = s), i
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    sb = je('<svg xmlns=http://www.w3.org/2000/svg width=16 height=17 viewBox="0 0 16 17"fill=none><path fill-rule=evenodd clip-rule=evenodd d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z">'),
    Qs = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.secondary;
        return (() => {
            var r = sb(),
                o = r.firstChild;
            return Ve(() => ye(o, "fill", n())), r
        })()
    },
    lb = {
        m: "16px",
        s: "12px",
        none: "0"
    },
    cb = {
        m: "6px",
        s: "6px",
        none: "0"
    },
    kd, ub = _.div(kd || (kd = E(["\n    width: 60px;\n    height: 60px;\n    padding: 8px;\n    margin-bottom: 8px;\n    border-radius: ", ";\n    background-color: ", ";\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n    gap: 4px;\n"])), t => lb[t.theme.borderRadius], t => t.theme.colors.background.tint),
    Ad, db = _(ih)(Ad || (Ad = E(["\n    width: 20px;\n    height: 20px;\n    border-radius: ", ";\n"])), t => cb[t.theme.borderRadius]),
    ah = t => g(Ta, {
        get name() {
            return t.labelLine1
        },
        get secondLine() {
            return t.labelLine2
        },
        get icon() {
            return g(ub, {
                get children() {
                    return g(Ci, {
                        each: [0, 1, 2, 3],
                        children: e => g(db, {
                            get src() {
                                return t.images[e]
                            }
                        })
                    })
                }
            })
        },
        onClick: () => t.onClick()
    }),
    On = "telegram-wallet",
    Ri = {
        TON: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",
        TG: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"
    },
    sh = t => {
        let [e] = Rn(), n = () => {
            if (t.wallet.appName !== On) {
                if ("isPreferred" in t.wallet && t.wallet.isPreferred) return e("walletItem.recent", {}, "Recent");
                if (Hn(t.wallet)) return e("walletItem.installed", {}, "Installed");
                if (t.wallet.name === "Tonkeeper") return e("walletItem.popular", {}, "Popular")
            }
        };
        return ie(() => ie(() => t.wallet.appName === On)() ? g(Ta, {
            get icon() {
                return t.wallet.imageUrl
            },
            get name() {
                return e("walletItem.walletOn", {}, "Wallet in")
            },
            secondLine: "Telegram",
            get badgeUrl() {
                return Ri.TG
            },
            onClick: () => t.onClick()
        }) : g(Ta, {
            get icon() {
                return t.wallet.imageUrl
            },
            get name() {
                return t.wallet.name
            },
            get secondLine() {
                return n()
            },
            secondLineColorPrimary: !1,
            onClick: () => t.onClick()
        }))
    },
    Td, fb = _.div(Td || (Td = E(["\n    width: 100%;\n    overflow-y: auto;\n    max-height: ", ";\n\n    scrollbar-width: none;\n    &&::-webkit-scrollbar {\n        display: none;\n    }\n\n    &&::-webkit-scrollbar-track {\n        background: transparent;\n    }\n\n    &&::-webkit-scrollbar-thumb {\n        display: none;\n    }\n"])), t => t.maxHeight),
    Bd, hb = _.div(Bd || (Bd = E(["\n    height: 1px;\n    margin: 0 -24px;\n    width: calc(100% + 48px);\n    opacity: 0.08;\n    background: ", ";\n    transition: background 0.15s ease-in-out;\n\n    ", " {\n        width: 100%;\n        margin: 0;\n    }\n"])), t => t.isShown ? t.theme.colors.icon.secondary : "transparent", an("mobile")),
    [gb, pb] = Te(((tu = En()) == null ? void 0 : tu.innerHeight) || 0);
En() && window.addEventListener("resize", () => pb(window.innerHeight));
var [wo, mb] = Te(co("mobile")), Ba = () => mb(co("mobile"));
En() && (window.addEventListener("resize", () => Ba()), window.addEventListener("load", () => Ba(), {
    once: !0
}));
var lh = t => {
        let [e, n] = Te(!1), r = a => {
            n(a.target.scrollTop > 0)
        }, o = () => wo() ? 150 : 200, i = () => t.maxHeight !== void 0 ? "".concat(t.maxHeight, "px") : "".concat(gb() - o(), "px");
        return [g(hb, {
            get isShown() {
                return e()
            }
        }), g(fb, {
            get maxHeight() {
                return i()
            },
            onScroll: r,
            get class() {
                return t.class
            },
            get children() {
                return t.children
            }
        })]
    },
    Id, yb = _.a(Id || (Id = E(["\n    display: block;\n    text-decoration: unset;\n"]))),
    Ia = t => g(yb, kn({
        get href() {
            return t.href
        },
        get target() {
            return t.blank ? "_blank" : "_self"
        },
        get class() {
            return t.class
        }
    }, () => t.blank ? {
        rel: "noreferrer noopener"
    } : {}, {
        get children() {
            return t.children
        }
    })),
    ur = Ua(),
    bb = je('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z">'),
    wb = t => {
        let e = it(),
            n = () => t.fill || e.colors.icon.primary;
        return (() => {
            var r = bb(),
                o = r.firstChild,
                i = o.nextSibling;
            return Ve(a => {
                var s = n(),
                    c = n();
                return s !== a.e && ye(o, "fill", a.e = s), c !== a.t && ye(i, "fill", a.t = c), a
            }, {
                e: void 0,
                t: void 0
            }), r
        })()
    },
    xb = {
        m: "8px",
        s: "4px",
        none: "0"
    },
    vb = {
        m: "16px",
        s: "8px",
        none: "0"
    },
    Ed, Cb = _.div(Ed || (Ed = E(["\n    width: 256px;\n    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);\n    border-radius: ", ";\n\n    background-color: ", "\n           \n    color: ", "\n"])), t => vb[t.theme.borderRadius], t => t.theme.colors.background.primary, t => t.theme.colors.text.primary),
    Rd, Sb = _.ul(Rd || (Rd = E(["\n    background-color: ", ";\n    padding: 8px;\n"])), t => t.theme.colors.background.primary),
    Ud, xu = _.button(Ud || (Ud = E(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    height: 40px;\n    padding-left: 8px;\n    width: 100%;\n\n    background-color: ", ";\n    border: none;\n    border-radius: ", ";\n    cursor: pointer;\n\n    transition: background-color, transform 0.1s ease-in-out;\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:active {\n        transform: scale(0.96);\n    }\n"])), t => t.theme.colors.background.primary, t => xb[t.theme.borderRadius], t => t.theme.colors.background.secondary),
    vu = je("<li>"),
    Ps = t => g(tn, {
        get translationKey() {
            return t.translationKey
        },
        fontSize: "15px",
        fontWeight: "590",
        get children() {
            return t.children
        }
    }),
    kb = t => {
        let e = Ot(ur),
            [n, r] = Te(!1),
            o = () => Qe(void 0, null, function*() {
                let a = ra(e.account.address, e.account.chain === "-3");
                yield _a(a), r(!0), setTimeout(() => r(!1), 1e3)
            }),
            i = () => {
                e.disconnect(), t.onClose()
            };
        return g(Cb, {
            ref(a) {
                var s = t.ref;
                typeof s == "function" ? s(a) : t.ref = a
            },
            get class() {
                return t.class
            },
            "data-tc-dropdown": "true",
            get children() {
                return g(Sb, {
                    get children() {
                        return [(() => {
                            var a = vu();
                            return Mt(a, g(xu, {
                                onClick: () => o(),
                                get children() {
                                    return [g(ib, {}), g(Se, {
                                        get when() {
                                            return !n()
                                        },
                                        get children() {
                                            return g(Ps, {
                                                translationKey: "button.dropdown.copy",
                                                children: "Copy address"
                                            })
                                        }
                                    }), g(Se, {
                                        get when() {
                                            return n()
                                        },
                                        get children() {
                                            return g(Ps, {
                                                translationKey: "button.dropdown.copied",
                                                children: "Address copied!"
                                            })
                                        }
                                    })]
                                }
                            })), a
                        })(), (() => {
                            var a = vu();
                            return Mt(a, g(xu, {
                                onClick: () => i(),
                                get children() {
                                    return [g(wb, {}), g(Ps, {
                                        translationKey: "button.dropdown.disconnect",
                                        children: "Disconnect"
                                    })]
                                }
                            })), a
                        })()]
                    }
                })
            }
        })
    },
    Ab = {
        m: "16px",
        s: "8px",
        none: "0"
    },
    Md, Tb = _.div(Md || (Md = E(["\n    width: 256px;\n    padding: 12px 16px;\n    display: flex;\n    gap: 9px;\n\n    background-color: ", ";\n    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);\n    border-radius: ", ";\n"])), t => t.theme.colors.background.primary, t => Ab[t.theme.borderRadius]),
    Pd, Bb = _.div(Pd || (Pd = E(["\n    width: 192px;\n\n    > h3 {\n        font-size: 15px;\n    }\n"]))),
    _d, Ib = _(tn)(_d || (_d = E(["\n    margin-top: 4px;\n    color: ", ";\n"])), t => t.theme.colors.text.secondary),
    vl = t => {
        let e = Ii(t);
        return g(Tb, kn({
            get class() {
                return t.class
            },
            "data-tc-notification": "true"
        }, e, {
            get children() {
                return [g(Bb, {
                    get children() {
                        return [g(yl, {
                            get translationKey() {
                                return t.header.translationKey
                            },
                            get translationValues() {
                                return t.header.translationValues
                            },
                            get children() {
                                return t.children
                            }
                        }), g(Se, {
                            get when() {
                                return t.text
                            },
                            get children() {
                                return g(Ib, {
                                    get translationKey() {
                                        return t.text.translationKey
                                    },
                                    get translationValues() {
                                        return t.text.translationValues
                                    }
                                })
                            }
                        })]
                    }
                }), ie(() => t.icon)]
            }
        }))
    },
    Ld, Eb = _(Gn)(Ld || (Ld = E(["\n    align-self: center;\n"]))),
    Rb = t => {
        let e = Ot(ur),
            [n] = Rn(),
            r = () => e.wallet && "name" in e.wallet ? e.wallet.name : n("common.yourWallet", {}, "Your wallet");
        return g(vl, {
            get header() {
                return {
                    translationKey: "notifications.confirm.header",
                    translationValues: {
                        name: r()
                    }
                }
            },
            get class() {
                return t.class
            },
            get icon() {
                return g(Eb, {})
            },
            "data-tc-notification-confirm": "true",
            children: "Confirm operation in your wallet"
        })
    },
    Wd, Ub = _(Ei)(Wd || (Wd = E(["\n    margin-top: 2px;\n"]))),
    Mb = t => g(vl, {
        header: {
            translationKey: "notifications.transactionCanceled.header"
        },
        text: {
            translationKey: "notifications.transactionCanceled.text"
        },
        get icon() {
            return g(Ub, {
                size: "xs"
            })
        },
        get class() {
            return t.class
        },
        "data-tc-notification-tx-cancelled": "true",
        children: "Transaction cancelled"
    }),
    Dd, Pb = _(wl)(Dd || (Dd = E(["\n    margin-top: 2px;\n"]))),
    _b = t => g(vl, {
        header: {
            translationKey: "notifications.transactionSent.header"
        },
        text: {
            translationKey: "notifications.transactionSent.text"
        },
        get icon() {
            return g(Pb, {})
        },
        get class() {
            return t.class
        },
        "data-tc-notification-tx-sent": "true",
        children: "Transaction sent"
    }),
    Nd, _s = Fn(Nd || (Nd = E(["\n    transform: translateY(-8px);\n    margin-bottom: 12px;\n"]))),
    Lb = {
        timeout: 4500
    },
    [Cu, Wb] = Te(null);

function Db(t) {
    let {
        timeout: e
    } = Je(Je({}, Lb), t), [n, r] = Te([]), [o, i] = Te([]);
    return St(Y0(Qt, a => {
        var s;
        if (!a || !a.showNotification || Cu() === a || ((s = Cu()) == null ? void 0 : s.name) === "confirm-transaction" && a.name === "confirm-transaction") return;
        Wb(a), r(h => h.filter(f => f.action !== "confirm-transaction"));
        let c = {
            action: a.name
        };
        r(h => [...h, c]);
        let d = setTimeout(() => {
            r(h => h.filter(f => f !== c)), i(h => h.filter(f => f !== d))
        }, e);
        i(h => [...h, d])
    })), zt(() => {
        o().forEach(a => clearTimeout(a))
    }), n
}
var Nb = je("<div data-tc-list-notifications=true>"),
    $b = t => {
        let e = Db();
        return (() => {
            var n = Nb();
            return Mt(n, g(By, {
                onBeforeEnter: r => {
                    Sn(r, [{
                        opacity: 0,
                        transform: "translateY(0)"
                    }, {
                        opacity: 1,
                        transform: "translateY(-8px)"
                    }], {
                        duration: 200
                    })
                },
                onExit: (r, o) => {
                    Sn(r, [{
                        opacity: 1,
                        transform: "translateY(-8px)"
                    }, {
                        opacity: 0,
                        transform: "translateY(-30px)"
                    }], {
                        duration: 200
                    }).finished.then(o)
                },
                get children() {
                    return g(Ci, {
                        get each() {
                            return e()
                        },
                        children: r => g(Si, {
                            get children() {
                                return [g(It, {
                                    get when() {
                                        return r.action === "transaction-sent"
                                    },
                                    get children() {
                                        return g(_b, {
                                            class: _s
                                        })
                                    }
                                }), g(It, {
                                    get when() {
                                        return r.action === "transaction-canceled"
                                    },
                                    get children() {
                                        return g(Mb, {
                                            class: _s
                                        })
                                    }
                                }), g(It, {
                                    get when() {
                                        return r.action === "confirm-transaction"
                                    },
                                    get children() {
                                        return g(Rb, {
                                            class: _s
                                        })
                                    }
                                })]
                            }
                        })
                    })
                }
            })), Ve(() => ll(n, t.class)), n
        })()
    },
    $d, ch = _(lt)($d || ($d = E(["\n    background-color: ", ";\n    color: ", ";\n    box-shadow: ", ";\n    padding: 8px 16px 8px 12px;\n\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    height: 40px;\n"])), t => t.theme.colors.connectButton.background, t => t.theme.colors.connectButton.foreground, t => "0 4px 24px ".concat(Wr(t.theme.colors.constant.black, .16))),
    Hd, Hb = _(ch)(Hd || (Hd = E(["\n    padding: 12px 16px;\n    min-width: 148px;\n    justify-content: center;\n    background-color: ", ";\n"])), t => t.theme.colors.background.primary),
    Kd, Kb = _(lt)(Kd || (Kd = E(["\n    min-width: 148px;\n    height: 40px;\n\n    background-color: ", ";\n    color: ", ";\n    box-shadow: ", ";\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])), t => t.theme.colors.background.primary, t => t.theme.colors.connectButton.foreground, t => "0 4px 24px ".concat(Wr(t.theme.colors.constant.black, .16))),
    Vd, Vb = _(Gn)(Vd || (Vd = E(["\n    height: 18px;\n    width: 18px;\n"]))),
    jd, jb = _.div(jd || (jd = E(["\n    width: fit-content;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n"]))),
    zd, zb = _(kb)(zd || (zd = E(["\n    box-sizing: border-box;\n    overflow: hidden;\n    margin-top: 12px;\n"]))),
    Od, Ob = _($b)(Od || (Od = E(["\n    > div:first-child {\n        margin-top: 20px;\n    }\n"])));
var Xs = Math.min,
    ho = Math.max,
    Ea = Math.round,
    ua = Math.floor,
    Tn = t => ({
        x: t,
        y: t
    });

function uh(t) {
    return t.split("-")[0]
}

function Fb(t) {
    return t.split("-")[1]
}

function qb(t) {
    return t === "x" ? "y" : "x"
}

function Gb(t) {
    return t === "y" ? "height" : "width"
}

function dh(t) {
    return ["top", "bottom"].includes(uh(t)) ? "y" : "x"
}

function Yb(t) {
    return qb(dh(t))
}

function fh(t) {
    let {
        x: e,
        y: n,
        width: r,
        height: o
    } = t;
    return {
        width: r,
        height: o,
        top: n,
        left: e,
        right: e + r,
        bottom: n + o,
        x: e,
        y: n
    }
}

function Su(t, e, n) {
    let {
        reference: r,
        floating: o
    } = t, i = dh(e), a = Yb(e), s = Gb(a), c = uh(e), d = i === "y", h = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, b = r[s] / 2 - o[s] / 2, w;
    switch (c) {
        case "top":
            w = {
                x: h,
                y: r.y - o.height
            };
            break;
        case "bottom":
            w = {
                x: h,
                y: r.y + r.height
            };
            break;
        case "right":
            w = {
                x: r.x + r.width,
                y: f
            };
            break;
        case "left":
            w = {
                x: r.x - o.width,
                y: f
            };
            break;
        default:
            w = {
                x: r.x,
                y: r.y
            }
    }
    switch (Fb(e)) {
        case "start":
            w[a] -= b * (n && d ? -1 : 1);
            break;
        case "end":
            w[a] += b * (n && d ? -1 : 1);
            break
    }
    return w
}
var Zb = (t, e, n) => Qe(void 0, null, function*() {
    let {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: a
    } = n, s = i.filter(Boolean), c = yield a.isRTL == null ? void 0 : a.isRTL(e), d = yield a.getElementRects({
        reference: t,
        floating: e,
        strategy: o
    }), {
        x: h,
        y: f
    } = Su(d, r, c), b = r, w = {}, S = 0;
    for (let k = 0; k < s.length; k++) {
        let {
            name: $,
            fn: q
        } = s[k], {
            x: P,
            y: F,
            data: re,
            reset: L
        } = yield q({
            x: h,
            y: f,
            initialPlacement: r,
            placement: b,
            strategy: o,
            middlewareData: w,
            rects: d,
            platform: a,
            elements: {
                reference: t,
                floating: e
            }
        });
        h = P != null ? P : h, f = F != null ? F : f, w = Xt(Je({}, w), {
            [$]: Je(Je({}, w[$]), re)
        }), L && S <= 50 && (S++, typeof L == "object" && (L.placement && (b = L.placement), L.rects && (d = L.rects === !0 ? yield a.getElementRects({
            reference: t,
            floating: e,
            strategy: o
        }): L.rects), {
            x: h,
            y: f
        } = Su(d, b, c)), k = -1)
    }
    return {
        x: h,
        y: f,
        placement: b,
        strategy: o,
        middlewareData: w
    }
});

function Da() {
    return typeof window < "u"
}

function So(t) {
    return hh(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function en(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}

function Mn(t) {
    var e;
    return (e = (hh(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}

function hh(t) {
    return Da() ? t instanceof Node || t instanceof en(t).Node : !1
}

function pn(t) {
    return Da() ? t instanceof Element || t instanceof en(t).Element : !1
}

function In(t) {
    return Da() ? t instanceof HTMLElement || t instanceof en(t).HTMLElement : !1
}

function ku(t) {
    return !Da() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof en(t).ShadowRoot
}

function Ui(t) {
    let {
        overflow: e,
        overflowX: n,
        overflowY: r,
        display: o
    } = mn(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o)
}

function Qb(t) {
    return ["table", "td", "th"].includes(So(t))
}

function Na(t) {
    return [":popover-open", ":modal"].some(e => {
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    })
}

function Cl(t) {
    let e = Sl(),
        n = pn(t) ? mn(t) : t;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function Xb(t) {
    let e = lr(t);
    for (; In(e) && !xo(e);) {
        if (Cl(e)) return e;
        if (Na(e)) return null;
        e = lr(e)
    }
    return null
}

function Sl() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function xo(t) {
    return ["html", "body", "#document"].includes(So(t))
}

function mn(t) {
    return en(t).getComputedStyle(t)
}

function $a(t) {
    return pn(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}

function lr(t) {
    if (So(t) === "html") return t;
    let e = t.assignedSlot || t.parentNode || ku(t) && t.host || Mn(t);
    return ku(e) ? e.host : e
}

function gh(t) {
    let e = lr(t);
    return xo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : In(e) && Ui(e) ? e : gh(e)
}

function vi(t, e, n) {
    var r;
    e === void 0 && (e = []), n === void 0 && (n = !0);
    let o = gh(t),
        i = o === ((r = t.ownerDocument) == null ? void 0 : r.body),
        a = en(o);
    if (i) {
        let s = Js(a);
        return e.concat(a, a.visualViewport || [], Ui(o) ? o : [], s && n ? vi(s) : [])
    }
    return e.concat(o, vi(o, [], n))
}

function Js(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}

function ph(t) {
    let e = mn(t),
        n = parseFloat(e.width) || 0,
        r = parseFloat(e.height) || 0,
        o = In(t),
        i = o ? t.offsetWidth : n,
        a = o ? t.offsetHeight : r,
        s = Ea(n) !== i || Ea(r) !== a;
    return s && (n = i, r = a), {
        width: n,
        height: r,
        $: s
    }
}

function kl(t) {
    return pn(t) ? t : t.contextElement
}

function go(t) {
    let e = kl(t);
    if (!In(e)) return Tn(1);
    let n = e.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = ph(e),
        a = (i ? Ea(n.width) : n.width) / r,
        s = (i ? Ea(n.height) : n.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
        x: a,
        y: s
    }
}
var Jb = Tn(0);

function mh(t) {
    let e = en(t);
    return !Sl() || !e.visualViewport ? Jb : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}

function e5(t, e, n) {
    return e === void 0 && (e = !1), !n || e && n !== en(t) ? !1 : e
}

function _r(t, e, n, r) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    let o = t.getBoundingClientRect(),
        i = kl(t),
        a = Tn(1);
    e && (r ? pn(r) && (a = go(r)) : a = go(t));
    let s = e5(i, n, r) ? mh(i) : Tn(0),
        c = (o.left + s.x) / a.x,
        d = (o.top + s.y) / a.y,
        h = o.width / a.x,
        f = o.height / a.y;
    if (i) {
        let b = en(i),
            w = r && pn(r) ? en(r) : r,
            S = b,
            k = Js(S);
        for (; k && r && w !== S;) {
            let $ = go(k),
                q = k.getBoundingClientRect(),
                P = mn(k),
                F = q.left + (k.clientLeft + parseFloat(P.paddingLeft)) * $.x,
                re = q.top + (k.clientTop + parseFloat(P.paddingTop)) * $.y;
            c *= $.x, d *= $.y, h *= $.x, f *= $.y, c += F, d += re, S = en(k), k = Js(S)
        }
    }
    return fh({
        width: h,
        height: f,
        x: c,
        y: d
    })
}

function Al(t, e) {
    let n = $a(t).scrollLeft;
    return e ? e.left + n : _r(Mn(t)).left + n
}

function yh(t, e, n) {
    n === void 0 && (n = !1);
    let r = t.getBoundingClientRect(),
        o = r.left + e.scrollLeft - (n ? 0 : Al(t, r)),
        i = r.top + e.scrollTop;
    return {
        x: o,
        y: i
    }
}

function t5(t) {
    let {
        elements: e,
        rect: n,
        offsetParent: r,
        strategy: o
    } = t, i = o === "fixed", a = Mn(r), s = e ? Na(e.floating) : !1;
    if (r === a || s && i) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        d = Tn(1),
        h = Tn(0),
        f = In(r);
    if ((f || !f && !i) && ((So(r) !== "body" || Ui(a)) && (c = $a(r)), In(r))) {
        let w = _r(r);
        d = go(r), h.x = w.x + r.clientLeft, h.y = w.y + r.clientTop
    }
    let b = a && !f && !i ? yh(a, c, !0) : Tn(0);
    return {
        width: n.width * d.x,
        height: n.height * d.y,
        x: n.x * d.x - c.scrollLeft * d.x + h.x + b.x,
        y: n.y * d.y - c.scrollTop * d.y + h.y + b.y
    }
}

function n5(t) {
    return Array.from(t.getClientRects())
}

function r5(t) {
    let e = Mn(t),
        n = $a(t),
        r = t.ownerDocument.body,
        o = ho(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
        i = ho(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight),
        a = -n.scrollLeft + Al(t),
        s = -n.scrollTop;
    return mn(r).direction === "rtl" && (a += ho(e.clientWidth, r.clientWidth) - o), {
        width: o,
        height: i,
        x: a,
        y: s
    }
}

function o5(t, e) {
    let n = en(t),
        r = Mn(t),
        o = n.visualViewport,
        i = r.clientWidth,
        a = r.clientHeight,
        s = 0,
        c = 0;
    if (o) {
        i = o.width, a = o.height;
        let d = Sl();
        (!d || d && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop)
    }
    return {
        width: i,
        height: a,
        x: s,
        y: c
    }
}

function i5(t, e) {
    let n = _r(t, !0, e === "fixed"),
        r = n.top + t.clientTop,
        o = n.left + t.clientLeft,
        i = In(t) ? go(t) : Tn(1),
        a = t.clientWidth * i.x,
        s = t.clientHeight * i.y,
        c = o * i.x,
        d = r * i.y;
    return {
        width: a,
        height: s,
        x: c,
        y: d
    }
}

function Au(t, e, n) {
    let r;
    if (e === "viewport") r = o5(t, n);
    else if (e === "document") r = r5(Mn(t));
    else if (pn(e)) r = i5(e, n);
    else {
        let o = mh(t);
        r = {
            x: e.x - o.x,
            y: e.y - o.y,
            width: e.width,
            height: e.height
        }
    }
    return fh(r)
}

function bh(t, e) {
    let n = lr(t);
    return n === e || !pn(n) || xo(n) ? !1 : mn(n).position === "fixed" || bh(n, e)
}

function a5(t, e) {
    let n = e.get(t);
    if (n) return n;
    let r = vi(t, [], !1).filter(s => pn(s) && So(s) !== "body"),
        o = null,
        i = mn(t).position === "fixed",
        a = i ? lr(t) : t;
    for (; pn(a) && !xo(a);) {
        let s = mn(a),
            c = Cl(a);
        !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ui(a) && !c && bh(t, a)) ? r = r.filter(h => h !== a) : o = s, a = lr(a)
    }
    return e.set(t, r), r
}

function s5(t) {
    let {
        element: e,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = t, a = [...n === "clippingAncestors" ? Na(e) ? [] : a5(e, this._c) : [].concat(n), r], s = a[0], c = a.reduce((d, h) => {
        let f = Au(e, h, o);
        return d.top = ho(f.top, d.top), d.right = Xs(f.right, d.right), d.bottom = Xs(f.bottom, d.bottom), d.left = ho(f.left, d.left), d
    }, Au(e, s, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}

function l5(t) {
    let {
        width: e,
        height: n
    } = ph(t);
    return {
        width: e,
        height: n
    }
}

function c5(t, e, n) {
    let r = In(e),
        o = Mn(e),
        i = n === "fixed",
        a = _r(t, !0, i, e),
        s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        c = Tn(0);
    if (r || !r && !i)
        if ((So(e) !== "body" || Ui(o)) && (s = $a(e)), r) {
            let b = _r(e, !0, i, e);
            c.x = b.x + e.clientLeft, c.y = b.y + e.clientTop
        } else o && (c.x = Al(o));
    let d = o && !r && !i ? yh(o, s) : Tn(0),
        h = a.left + s.scrollLeft - c.x - d.x,
        f = a.top + s.scrollTop - c.y - d.y;
    return {
        x: h,
        y: f,
        width: a.width,
        height: a.height
    }
}

function Ls(t) {
    return mn(t).position === "static"
}

function Tu(t, e) {
    if (!In(t) || mn(t).position === "fixed") return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return Mn(t) === n && (n = n.ownerDocument.body), n
}

function wh(t, e) {
    let n = en(t);
    if (Na(t)) return n;
    if (!In(t)) {
        let o = lr(t);
        for (; o && !xo(o);) {
            if (pn(o) && !Ls(o)) return o;
            o = lr(o)
        }
        return n
    }
    let r = Tu(t, e);
    for (; r && Qb(r) && Ls(r);) r = Tu(r, e);
    return r && xo(r) && Ls(r) && !Cl(r) ? n : r || Xb(t) || n
}
var u5 = function(t) {
    return Qe(this, null, function*() {
        let e = this.getOffsetParent || wh,
            n = this.getDimensions,
            r = yield n(t.floating);
        return {
            reference: c5(t.reference, yield e(t.floating), t.strategy),
            floating: {
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
            }
        }
    })
};

function d5(t) {
    return mn(t).direction === "rtl"
}
var f5 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: t5,
    getDocumentElement: Mn,
    getClippingRect: s5,
    getOffsetParent: wh,
    getElementRects: u5,
    getClientRects: n5,
    getDimensions: l5,
    getScale: go,
    isElement: pn,
    isRTL: d5
};

function h5(t, e) {
    let n = null,
        r, o = Mn(t);

    function i() {
        var s;
        clearTimeout(r), (s = n) == null || s.disconnect(), n = null
    }

    function a(s, c) {
        s === void 0 && (s = !1), c === void 0 && (c = 1), i();
        let {
            left: d,
            top: h,
            width: f,
            height: b
        } = t.getBoundingClientRect();
        if (s || e(), !f || !b) return;
        let w = ua(h),
            S = ua(o.clientWidth - (d + f)),
            k = ua(o.clientHeight - (h + b)),
            $ = ua(d),
            P = {
                rootMargin: -w + "px " + -S + "px " + -k + "px " + -$ + "px",
                threshold: ho(0, Xs(1, c)) || 1
            },
            F = !0;

        function re(L) {
            let Z = L[0].intersectionRatio;
            if (Z !== c) {
                if (!F) return a();
                Z ? a(!1, Z) : r = setTimeout(() => {
                    a(!1, 1e-7)
                }, 1e3)
            }
            F = !1
        }
        try {
            n = new IntersectionObserver(re, Xt(Je({}, P), {
                root: o.ownerDocument
            }))
        } catch {
            n = new IntersectionObserver(re, P)
        }
        n.observe(t)
    }
    return a(!0), i
}

function g5(t, e, n, r) {
    r === void 0 && (r = {});
    let {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: a = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: c = !1
    } = r, d = kl(t), h = o || i ? [...d ? vi(d) : [], ...vi(e)] : [];
    h.forEach(q => {
        o && q.addEventListener("scroll", n, {
            passive: !0
        }), i && q.addEventListener("resize", n)
    });
    let f = d && s ? h5(d, n) : null,
        b = -1,
        w = null;
    a && (w = new ResizeObserver(q => {
        let [P] = q;
        P && P.target === d && w && (w.unobserve(e), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
            var F;
            (F = w) == null || F.observe(e)
        })), n()
    }), d && !c && w.observe(d), w.observe(e));
    let S, k = c ? _r(t) : null;
    c && $();

    function $() {
        let q = _r(t);
        k && (q.x !== k.x || q.y !== k.y || q.width !== k.width || q.height !== k.height) && n(), k = q, S = requestAnimationFrame($)
    }
    return n(), () => {
        var q;
        h.forEach(P => {
            o && P.removeEventListener("scroll", n), i && P.removeEventListener("resize", n)
        }), f == null || f(), (q = w) == null || q.disconnect(), w = null, c && cancelAnimationFrame(S)
    }
}
var p5 = (t, e, n) => {
    let r = new Map,
        o = Je({
            platform: f5
        }, n),
        i = Xt(Je({}, o.platform), {
            _c: r
        });
    return Zb(t, e, Xt(Je({}, o), {
        platform: i
    }))
};

function m5(t, e, n) {
    let r = () => {
            var f;
            return (f = n == null ? void 0 : n.placement) != null ? f : "bottom"
        },
        o = () => {
            var f;
            return (f = n == null ? void 0 : n.strategy) != null ? f : "absolute"
        },
        [i, a] = Te({
            x: null,
            y: null,
            placement: r(),
            strategy: o(),
            middlewareData: {}
        }),
        [s, c] = Te();
    St(() => {
        let f = s();
        if (f) throw f.value
    });
    let d = ie(() => (t(), e(), {}));

    function h() {
        let f = t(),
            b = e();
        if (f && b) {
            let w = d();
            p5(f, b, {
                middleware: n == null ? void 0 : n.middleware,
                placement: r(),
                strategy: o()
            }).then(S => {
                w === d() && a(S)
            }, S => {
                c(S)
            })
        }
    }
    return St(() => {
        let f = t(),
            b = e();
        if (n == null || n.middleware, r(), o(), f && b)
            if (n != null && n.whileElementsMounted) {
                let w = n.whileElementsMounted(f, b, h);
                w && zt(w)
            } else h()
    }), {
        get x() {
            return i().x
        },
        get y() {
            return i().y
        },
        get placement() {
            return i().placement
        },
        get strategy() {
            return i().strategy
        },
        get middlewareData() {
            return i().middlewareData
        },
        update: h
    }
}
var y5 = je("<tc-root data-tc-dropdown-container=true>", !0, !1),
    b5 = () => {
        let t = it(),
            e = Ot(Co),
            n = Ot(ur),
            [r, o] = Te(!1),
            [i, a] = Te(e.account),
            [s, c] = Te(!e.account),
            d, [h, f] = Te(),
            [b, w] = Te(),
            S = m5(b, h, {
                whileElementsMounted: g5,
                placement: "bottom-end"
            }),
            k = () => {
                let P = i();
                if (P) {
                    let F = ra(P.address, P.chain === "-3");
                    return F.slice(0, 4) + "\u2026" + F.slice(-4)
                }
                return ""
            };
        n.connectionRestored.then(() => c(!1));
        let $ = e.onStatusChange(P => {
                if (!P) {
                    o(!1), a(null), c(!1);
                    return
                }
                a(P.account), c(!1)
            }),
            q = P => {
                if (!i() || !r()) return;
                let F = b().contains(P.target),
                    re = d.contains(P.target);
                !F && !re && o(!1)
            };
        return I1(() => {
            document.body.addEventListener("click", q)
        }), zt(() => {
            document.body.removeEventListener("click", q), $()
        }), g(yo, {
            component: jn,
            get children() {
                return [g(Se, {
                    get when() {
                        return s()
                    },
                    get children() {
                        return g(Kb, {
                            disabled: !0,
                            "data-tc-connect-button-loading": "true",
                            get children() {
                                return g(Vb, {})
                            }
                        })
                    }
                }), g(Se, {
                    get when() {
                        return !s()
                    },
                    get children() {
                        return [g(Se, {
                            get when() {
                                return !i()
                            },
                            get children() {
                                return g(ch, {
                                    onClick: () => n.openModal(),
                                    "data-tc-connect-button": "true",
                                    scale: "s",
                                    get children() {
                                        return [g(B2, {
                                            get fill() {
                                                return t.colors.connectButton.foreground
                                            }
                                        }), g(tn, {
                                            translationKey: "button.connectWallet",
                                            fontSize: "15px",
                                            lineHeight: "18px",
                                            fontWeight: "590",
                                            get color() {
                                                return t.colors.connectButton.foreground
                                            },
                                            children: "Connect wallet"
                                        })]
                                    }
                                })
                            }
                        }), g(Se, {
                            get when() {
                                return i()
                            },
                            get children() {
                                return g(jb, {
                                    get children() {
                                        return [g(Hb, {
                                            onClick: () => o(P => !P),
                                            ref: w,
                                            "data-tc-dropdown-button": "true",
                                            scale: "s",
                                            get children() {
                                                return [g(tn, {
                                                    fontSize: "15px",
                                                    fontWeight: "590",
                                                    lineHeight: "18px",
                                                    get children() {
                                                        return k()
                                                    }
                                                }), g(J1, {
                                                    direction: "bottom"
                                                })]
                                            }
                                        }), g(V1, {
                                            get children() {
                                                var P = y5();
                                                return Mr(f, P), P.style.setProperty("z-index", "999"), P._$owner = E1(), Mt(P, g(ml, {
                                                    onBeforeEnter: F => {
                                                        Sn(F, [{
                                                            opacity: 0,
                                                            transform: "translateY(-8px)"
                                                        }, {
                                                            opacity: 1,
                                                            transform: "translateY(0)"
                                                        }], {
                                                            duration: 150
                                                        })
                                                    },
                                                    onExit: (F, re) => {
                                                        Sn(F, [{
                                                            opacity: 1,
                                                            transform: "translateY(0)"
                                                        }, {
                                                            opacity: 0,
                                                            transform: "translateY(-8px)"
                                                        }], {
                                                            duration: 150
                                                        }).finished.then(re)
                                                    },
                                                    get children() {
                                                        return g(Se, {
                                                            get when() {
                                                                return r()
                                                            },
                                                            get children() {
                                                                return g(zb, {
                                                                    get hidden() {
                                                                        return !r()
                                                                    },
                                                                    onClose: () => o(!1),
                                                                    ref(F) {
                                                                        var re = d;
                                                                        typeof re == "function" ? re(F) : d = F
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                }), null), Mt(P, g(Ob, {}), null), Ve(F => {
                                                    var re, L, Z = S.strategy,
                                                        N = "".concat((re = S.y) != null ? re : 0, "px"),
                                                        T = "".concat((L = S.x) != null ? L : 0, "px");
                                                    return Z !== F.e && ((F.e = Z) != null ? P.style.setProperty("position", Z) : P.style.removeProperty("position")), N !== F.t && ((F.t = N) != null ? P.style.setProperty("top", N) : P.style.removeProperty("top")), T !== F.a && ((F.a = T) != null ? P.style.setProperty("left", T) : P.style.removeProperty("left")), F
                                                }, {
                                                    e: void 0,
                                                    t: void 0,
                                                    a: void 0
                                                }), P
                                            }
                                        })]
                                    }
                                })
                            }
                        })]
                    }
                })]
            }
        })
    },
    Fd, xh = _(th)(Fd || (Fd = E(["\n    padding-left: 24px;\n    padding-right: 24px;\n    padding-top: 18px;\n    padding-bottom: 0;\n\n    ", " {\n        padding-left: 0;\n        padding-right: 0;\n\n        min-height: 364px;\n    }\n"])), an("mobile")),
    qd, vh = _(Un)(qd || (qd = E(["\n    margin-top: 12px;\n\n    ", " {\n        padding: 0 10px;\n    }\n"])), an("mobile")),
    Gd, Ch = _.div(Gd || (Gd = E(["\n    margin: 30px 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    ", " {\n        height: 160px;\n        align-items: center;\n    }\n"])), an("mobile")),
    Yd;
_(tn)(Yd || (Yd = E(["\n    min-width: 84px;\n    text-align: center;\n    font-weight: 590;\n"])));
var Zd;
_(Qy)(Zd || (Zd = E(["\n    margin: 0 auto 22px;\n"])));
var Qd, w5 = _.div(Qd || (Qd = E(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),
    Xd, x5 = _(Un)(Xd || (Xd = E(["\n    margin-bottom: 18px;\n"]))),
    Jd;
_.div(Jd || (Jd = E(["\n    height: 1px;\n    margin: 0 -24px;\n    width: calc(100% + 48px);\n    opacity: 0.12;\n    background: ", ";\n    transition: background 0.15s ease-in-out;\n\n    ", " {\n        width: 100%;\n    }\n"])), t => t.isShown ? t.theme.colors.icon.secondary : "transparent", an("mobile"));
var ef, v5 = _.ul(ef || (ef = E(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 92px);\n    grid-template-rows: auto;\n    align-content: flex-start;\n    justify-content: center;\n    row-gap: 8px;\n    width: 100%;\n    padding: 0 0 16px;\n    align-self: flex-start;\n    max-width: 400px;\n    margin: 0 auto;\n    list-style: none;\n\n    > li {\n        display: block;\n        height: fit-content;\n    }\n\n    ", " {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        gap: 0;\n        padding: 8px 12px 16px;\n        max-width: none;\n\n        > li {\n            min-width: 78px;\n            display: flex;\n        }\n\n        > li > * {\n            width: 100%;\n        }\n    }\n"])), an("mobile")),
    tf;
_(lt)(tf || (tf = E(["\n    display: block;\n    margin: 0 auto 1px;\n    font-size: 15px;\n"])));
var nf, C5 = _(Nr)(nf || (nf = E(["\n    position: absolute;\n    top: 16px;\n    left: 16px;\n"]))),
    rf, S5 = _(sh)(rf || (rf = E(["\n    height: 100%;\n"]))),
    k5 = je("<li>"),
    A5 = t => {
        let e = () => wo() ? void 0 : 510,
            n = () => wo() ? t.walletsList.filter(yi) : t.walletsList;
        return g(w5, {
            "data-tc-wallets-modal-list": "true",
            get children() {
                return [g(C5, {
                    icon: "arrow",
                    onClick: () => t.onBack()
                }), g(x5, {
                    translationKey: "walletModal.wallets",
                    children: "Wallets"
                }), g(lh, {
                    get maxHeight() {
                        return e()
                    },
                    get children() {
                        return g(v5, {
                            get children() {
                                return g(Ci, {
                                    get each() {
                                        return n()
                                    },
                                    children: r => (() => {
                                        var o = k5();
                                        return Mt(o, g(S5, {
                                            wallet: r,
                                            onClick: () => t.onSelect(r)
                                        })), o
                                    })()
                                })
                            }
                        })
                    }
                })]
            }
        })
    },
    T5 = {
        m: "16px",
        s: "12px",
        none: "0"
    },
    B5 = {
        m: "6px",
        s: "6px",
        none: "0"
    },
    of , I5 = _.div( of || ( of = E(["\n    display: flex;\n    flex-direction: column;\n"]))),
    af, E5 = _.div(af || (af = E(["\n    flex: 1;\n    margin-top: ", ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 232px;\n"])), t => t.qr ? "0" : "18px"),
    sf, R5 = _(La)(sf || (sf = E(["\n    margin-bottom: 24px;\n"]))),
    lf, U5 = _(Un)(lf || (lf = E(["\n    max-width: 288px;\n    margin: 0 auto 2px;\n"]))),
    cf, M5 = _(cr)(cf || (cf = E(["\n    max-width: 288px;\n    text-align: center;\n    margin: 0 auto 20px;\n"]))),
    uf, P5 = _(Nr)(uf || (uf = E(["\n    position: absolute;\n    top: 16px;\n    left: 16px;\n"]))),
    df, hi = _.div(df || (df = E(["\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n    padding-bottom: 16px;\n"]))),
    ff, _5 = _(hi)(ff || (ff = E(["\n    padding-bottom: 0;\n"]))),
    hf, Ws = _(lt)(hf || (hf = E(["\n    margin-bottom: 24px;\n"]))),
    gf, L5 = _(Gn)(gf || (gf = E(["\n    margin-bottom: 18px;\n    margin-top: 2px;\n"]))),
    pf, W5 = _(Ei)(pf || (pf = E(["\n    margin-bottom: 16px;\n"]))),
    mf, da = _(cr)(mf || (mf = E(["\n    color: ", ";\n    text-align: center;\n    margin-bottom: 20px;\n"])), t => t.theme.colors.text.secondary),
    yf, D5 = _(lt)(yf || (yf = E(["\n    margin-top: -8px;\n    margin-bottom: 24px;\n    width: 100%;\n    padding: 12px 12px 12px 20px;\n    border-radius: ", ";\n    font-size: 16px;\n    line-height: 20px;\n"])), t => T5[t.theme.borderRadius]),
    bf, N5 = _(Dr)(bf || (bf = E(["\n    width: 32px;\n    height: 32px;\n    border-radius: ", ";\n"])), t => B5[t.theme.borderRadius]),
    yt = t => {
        let [e] = Rn();
        return ie(() => {
            var n;
            return e(t.translationKey, t.translationValues, (n = t.children) == null ? void 0 : n.toString())
        })
    },
    Sh = t => {
        let [e, n] = Te("mobile"), [r, o] = Te(!1), [i, a] = Te(), [s, c] = Te(!0), d = Ot(Co), h = d.onStatusChange(() => {}, () => {
            t.wallet.appName !== On && o(!0)
        });
        zt(h);
        let f = () => {
            try {
                let $ = d.connect({
                    universalLink: t.wallet.universalLink,
                    bridgeUrl: t.wallet.bridgeUrl
                }, t.additionalRequest);
                a($)
            } catch {}
        };
        St(() => {
            Et(e) !== "extension" && (yi(t.wallet) || hu(t.wallet)) && f()
        });
        let b = () => {
                o(!1), e() === "extension" && f(), n("mobile"), Pt(Xt(Je({}, t.wallet), {
                    openMethod: "qrcode"
                }))
            },
            w = () => {
                o(!1), e() === "extension" && f(), n("desktop"), dn(i()) ? S() : Ai(i(), t.wallet.deepLink, {
                    returnStrategy: qe.returnStrategy,
                    forceRedirect: !1
                }, $ => {
                    Pt(Xt(Je({}, t.wallet), {
                        openMethod: $
                    }))
                })
            },
            S = () => {
                let $ = !s();
                c(!1), Pt(Xt(Je({}, t.wallet), {
                    openMethod: "universal-link"
                })), ki(i(), {
                    returnStrategy: qe.returnStrategy,
                    twaReturnUrl: qe.twaReturnUrl,
                    forceRedirect: $
                })
            },
            k = () => {
                o(!1), n("extension"), Hn(t.wallet) && (Pt(t.wallet), d.connect({
                    jsBridgeKey: t.wallet.jsBridgeKey
                }, t.additionalRequest))
            };
        return yi(t.wallet) ? b() : gu(t.wallet) ? k() : w(), g(I5, {
            "data-tc-wallets-modal-connection-desktop": "true",
            get children() {
                return [g(Se, {
                    get when() {
                        return !t.backDisabled
                    },
                    get children() {
                        return g(P5, {
                            icon: "arrow",
                            onClick: () => t.onBackClick()
                        })
                    }
                }), g(U5, {
                    get children() {
                        return t.wallet.name
                    }
                }), g(Se, {
                    get when() {
                        return e() === "mobile"
                    },
                    get children() {
                        return g(M5, {
                            translationKey: "walletModal.desktopConnectionModal.scanQR",
                            get translationValues() {
                                return {
                                    name: t.wallet.name
                                }
                            },
                            get children() {
                                return ["Scan the QR code below with your phone\u2019s or ", ie(() => t.wallet.name), "\u2019s camera"]
                            }
                        })
                    }
                }), g(E5, {
                    get qr() {
                        return e() === "mobile"
                    },
                    get children() {
                        return g(Si, {
                            get children() {
                                return [g(It, {
                                    get when() {
                                        return e() === "mobile"
                                    },
                                    get children() {
                                        return g(R5, {
                                            disableCopy: !1,
                                            get sourceUrl() {
                                                return rt(i(), "none")
                                            },
                                            get imageUrl() {
                                                return t.wallet.imageUrl
                                            }
                                        })
                                    }
                                }), g(It, {
                                    get when() {
                                        return r()
                                    },
                                    get children() {
                                        return [g(W5, {
                                            size: "s"
                                        }), g(da, {
                                            translationKey: "walletModal.desktopConnectionModal.connectionDeclined",
                                            children: "Connection declined"
                                        }), g(hi, {
                                            get children() {
                                                return g(lt, {
                                                    get leftIcon() {
                                                        return g(bi, {})
                                                    },
                                                    get onClick() {
                                                        return e() === "extension" ? k : w
                                                    },
                                                    get children() {
                                                        return g(yt, {
                                                            translationKey: "common.retry",
                                                            children: "Retry"
                                                        })
                                                    }
                                                })
                                            }
                                        })]
                                    }
                                }), g(It, {
                                    get when() {
                                        return e() === "extension"
                                    },
                                    get children() {
                                        return [g(Se, {
                                            get when() {
                                                return Hn(t.wallet)
                                            },
                                            get children() {
                                                return [g(L5, {
                                                    size: "s"
                                                }), g(da, {
                                                    translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                                                    get translationValues() {
                                                        return {
                                                            name: t.wallet.name
                                                        }
                                                    },
                                                    get children() {
                                                        return ["Continue in ", ie(() => t.wallet.name), " browser extension\u2026"]
                                                    }
                                                }), g(hi, {
                                                    get children() {
                                                        return g(lt, {
                                                            get leftIcon() {
                                                                return g(bi, {})
                                                            },
                                                            onClick: k,
                                                            get children() {
                                                                return g(yt, {
                                                                    translationKey: "common.retry",
                                                                    children: "Retry"
                                                                })
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        }), g(Se, {
                                            get when() {
                                                return !Hn(t.wallet)
                                            },
                                            get children() {
                                                return [g(da, {
                                                    translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                                                    get translationValues() {
                                                        return {
                                                            name: t.wallet.name
                                                        }
                                                    },
                                                    get children() {
                                                        return ["Seems you don't have installed ", ie(() => t.wallet.name), " browser extension"]
                                                    }
                                                }), g(hi, {
                                                    get children() {
                                                        return g(Ia, {
                                                            get href() {
                                                                return t.wallet.aboutUrl
                                                            },
                                                            blank: !0,
                                                            get children() {
                                                                return g(lt, {
                                                                    get rightIcon() {
                                                                        return g(wu, {})
                                                                    },
                                                                    onClick: k,
                                                                    get children() {
                                                                        return g(yt, {
                                                                            translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                                            get translationValues() {
                                                                                return {
                                                                                    name: t.wallet.name
                                                                                }
                                                                            },
                                                                            get children() {
                                                                                return ["Get ", ie(() => t.wallet.name)]
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        })]
                                    }
                                }), g(It, {
                                    get when() {
                                        return e() === "desktop"
                                    },
                                    get children() {
                                        return [g(Gn, {
                                            size: "m"
                                        }), g(da, {
                                            translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                                            get translationValues() {
                                                return {
                                                    name: t.wallet.name
                                                }
                                            },
                                            get children() {
                                                return ["Continue in ", ie(() => t.wallet.name), " on desktop\u2026"]
                                            }
                                        }), g(hi, {
                                            get children() {
                                                return [g(lt, {
                                                    get leftIcon() {
                                                        return g(bi, {})
                                                    },
                                                    onClick: w,
                                                    get children() {
                                                        return g(yt, {
                                                            translationKey: "common.retry",
                                                            children: "Retry"
                                                        })
                                                    }
                                                }), g(Ia, {
                                                    get href() {
                                                        return t.wallet.aboutUrl
                                                    },
                                                    blank: !0,
                                                    get children() {
                                                        return g(lt, {
                                                            get rightIcon() {
                                                                return g(wu, {})
                                                            },
                                                            get children() {
                                                                return g(yt, {
                                                                    translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                                    get translationValues() {
                                                                        return {
                                                                            name: t.wallet.name
                                                                        }
                                                                    },
                                                                    get children() {
                                                                        return ["Get ", ie(() => t.wallet.name)]
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        })]
                                    }
                                })]
                            }
                        })
                    }
                }), g(Se, {
                    get when() {
                        return t.wallet.appName === On
                    },
                    get children() {
                        return g(D5, {
                            get rightIcon() {
                                return g(N5, {
                                    get src() {
                                        return Ri.TG
                                    }
                                })
                            },
                            scale: "s",
                            onClick: S,
                            get children() {
                                return g(yt, {
                                    translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram",
                                    children: "Open Wallet in Telegram on desktop"
                                })
                            }
                        })
                    }
                }), g(Se, {
                    get when() {
                        return t.wallet.appName !== On
                    },
                    get children() {
                        return g(_5, {
                            get children() {
                                return [g(Se, {
                                    get when() {
                                        return ie(() => e() !== "mobile")() && yi(t.wallet)
                                    },
                                    get children() {
                                        return g(Ws, {
                                            appearance: "secondary",
                                            get leftIcon() {
                                                return g(z2, {})
                                            },
                                            onClick: b,
                                            get children() {
                                                return g(yt, {
                                                    translationKey: "common.mobile",
                                                    children: "Mobile"
                                                })
                                            }
                                        })
                                    }
                                }), g(Se, {
                                    get when() {
                                        return ie(() => e() !== "extension")() && gu(t.wallet)
                                    },
                                    get children() {
                                        return g(Ws, {
                                            appearance: "secondary",
                                            get leftIcon() {
                                                return g(V2, {})
                                            },
                                            onClick: k,
                                            get children() {
                                                return g(yt, {
                                                    translationKey: "common.browserExtension",
                                                    children: "Browser Extension"
                                                })
                                            }
                                        })
                                    }
                                }), g(Se, {
                                    get when() {
                                        return ie(() => e() !== "desktop")() && hu(t.wallet)
                                    },
                                    get children() {
                                        return g(Ws, {
                                            appearance: "secondary",
                                            get leftIcon() {
                                                return g(F2, {})
                                            },
                                            onClick: w,
                                            get children() {
                                                return g(yt, {
                                                    translationKey: "common.desktop",
                                                    children: "Desktop"
                                                })
                                            }
                                        })
                                    }
                                })]
                            }
                        })
                    }
                })]
            }
        })
    },
    wf, $5 = _.div(wf || (wf = E([""]))),
    xf, H5 = _(Nr)(xf || (xf = E(["\n    position: absolute;\n    top: 16px;\n    left: 16px;\n"]))),
    vf, K5 = _(Un)(vf || (vf = E(["\n    margin-bottom: 18px;\n"]))),
    Cf, Bu = _.div(Cf || (Cf = E(["\n    padding: 16px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),
    Sf, Iu = Fn(Sf || (Sf = E(["\n    margin-bottom: 12px;\n"]))),
    kf, Eu = _(yl)(kf || (kf = E(["\n    text-align: center;\n    margin-bottom: 4px;\n"]))),
    Af, Ru = _(tn)(Af || (Af = E(["\n    text-align: center;\n    max-width: 352px;\n    color: ", ";\n"])), t => t.theme.colors.text.secondary),
    Tf, V5 = _.div(Tf || (Tf = E(["\n    padding: 16px 24px 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n"]))),
    j5 = {
        GET_A_WALLET: "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"
    },
    kh = t => g($5, {
        "data-tc-wallets-modal-info": "true",
        get children() {
            return [g(H5, {
                icon: "arrow",
                onClick: () => t.onBackClick()
            }), g(K5, {
                translationKey: "walletModal.infoModal.whatIsAWallet",
                children: "What is a wallet"
            }), g(lh, {
                get children() {
                    return [g(Bu, {
                        get children() {
                            return [g(X2, {
                                class: Iu
                            }), g(Eu, {
                                translationKey: "walletModal.infoModal.secureDigitalAssets",
                                children: "Secure digital assets storage"
                            }), g(Ru, {
                                translationKey: "walletModal.infoModal.walletProtects",
                                children: "A wallet protects and manages your digital assets including TON, tokens and collectables."
                            })]
                        }
                    }), g(Bu, {
                        get children() {
                            return [g(eb, {
                                class: Iu
                            }), g(Eu, {
                                translationKey: "walletModal.infoModal.effortlessCryptoTransactions",
                                children: "Effortless crypto transactions"
                            }), g(Ru, {
                                translationKey: "walletModal.infoModal.easilySend",
                                children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."
                            })]
                        }
                    }), g(V5, {
                        get children() {
                            return g(Ia, {
                                get href() {
                                    return j5.GET_A_WALLET
                                },
                                blank: !0,
                                get children() {
                                    return g(lt, {
                                        get rightIcon() {
                                            return g(Z2, {})
                                        },
                                        get children() {
                                            return g(yt, {
                                                translationKey: "walletModal.infoModal.getAWallet",
                                                children: "Get a Wallet"
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })]
                }
            })]
        }
    }),
    Bf, z5 = _.div(Bf || (Bf = E([""]))),
    If, O5 = _.div(If || (If = E(["\n    flex: 1;\n    margin-top: 18px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 232px;\n"]))),
    Ef, F5 = _(Un)(Ef || (Ef = E(["\n    max-width: 262px;\n    margin: 0 auto 8px;\n"]))),
    Rf, q5 = _(Nr)(Rf || (Rf = E(["\n    position: absolute;\n    top: 16px;\n    left: 16px;\n"]))),
    Uf, G5 = _.div(Uf || (Uf = E(["\n    padding: 16px;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    border-top: 0.5px solid ", ";\n"])), t => Wr(t.theme.colors.icon.secondary, .2)),
    Mf, Y5 = _(Dr)(Mf || (Mf = E(["\n    width: 36px;\n    height: 36px;\n    border-radius: 10px;\n"]))),
    Pf, Z5 = _(Ia)(Pf || (Pf = E(["\n    margin-left: auto;\n"]))),
    _f, Q5 = _(Gn)(_f || (_f = E(["\n    margin-bottom: 18px;\n    margin-top: 2px;\n"]))),
    Lf, X5 = _(Ei)(Lf || (Lf = E(["\n    margin-bottom: 16px;\n"]))),
    Wf, Uu = _(cr)(Wf || (Wf = E(["\n    color: ", ";\n    text-align: center;\n    margin-bottom: 20px;\n"])), t => t.theme.colors.text.secondary),
    Df, Mu = _.div(Df || (Df = E(["\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n    padding-bottom: 16px;\n"]))),
    J5 = {
        m: "16px",
        s: "8px",
        none: "0"
    },
    Nf, e3 = _(Un)(Nf || (Nf = E(["\n    margin-bottom: 2px;\n    padding: 0 52px;\n"]))),
    $f, t3 = _(cr)($f || ($f = E(["\n    margin-bottom: 20px;\n    padding: 0 64px;\n"]))),
    Hf, n3 = _.div(Hf || (Hf = E(["\n    padding: 0 24px 16px;\n"]))),
    Kf, r3 = _.div(Kf || (Kf = E(["\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    padding: 0 24px 24px;\n    margin-top: 0;\n"]))),
    Vf, Pu = _(lt)(Vf || (Vf = E(["\n    width: 100%;\n    height: 56px;\n    border-radius: ", ";\n    background-color: ", ";\n    color: ", ";\n    font-size: 16px;\n    line-height: 20px;\n    font-weight: 500;\n    padding: 17px 20px 19px 20px;\n"])), t => J5[t.theme.borderRadius], t => Wr(t.theme.colors.accent, .12), t => t.theme.colors.accent),
    o3 = t => [g(e3, {
        get children() {
            return t.walletInfo.name
        }
    }), g(t3, {
        translationKey: "walletModal.mobileConnectionModal.scanQR",
        get translationValues() {
            return {
                name: t.walletInfo.name
            }
        },
        get children() {
            return ["Scan the QR code below with your phone\u2019s or ", ie(() => t.walletInfo.name), "\u2019s camera"]
        }
    }), g(n3, {
        get children() {
            return g(La, {
                get imageUrl() {
                    return t.walletInfo.imageUrl
                },
                get sourceUrl() {
                    return rt(t.universalLink, "none")
                },
                disableCopy: !0
            })
        }
    }), g(r3, {
        get children() {
            return [g(Pu, {
                get leftIcon() {
                    return g(bl, {})
                },
                appearance: "secondary",
                onClick: () => {
                    var e;
                    return (e = t.onOpenLink) == null ? void 0 : e.call(t)
                },
                get children() {
                    return g(yt, {
                        translationKey: "walletModal.mobileUniversalModal.openLink",
                        children: "Open Link"
                    })
                }
            }), g(Pu, {
                get leftIcon() {
                    return ie(() => t.isCopiedShown !== void 0)() ? g(xl, {}) : g(Wa, {})
                },
                appearance: "secondary",
                onClick: () => {
                    var e;
                    return (e = t.onCopy) == null ? void 0 : e.call(t)
                },
                get children() {
                    return g(yt, {
                        get translationKey() {
                            return t.isCopiedShown !== void 0 ? "common.copied" : "common.copyLink"
                        },
                        get children() {
                            return t.isCopiedShown !== void 0 ? "Copied" : "Copy Link"
                        }
                    })
                }
            })]
        }
    })],
    Ah = t => {
        let e = it(),
            [n, r] = Te(!0),
            [o, i] = Te(!1),
            [a, s] = Te(!1),
            c = Ot(Co),
            d = c.onStatusChange(() => {}, () => {
                s(!0)
            }),
            h = ie(() => c.connect({
                universalLink: t.wallet.universalLink,
                bridgeUrl: t.wallet.bridgeUrl
            }, t.additionalRequest)),
            f = () => {
                Pt(Xt(Je({}, t.wallet), {
                    openMethod: "universal-link"
                })), ki(h(), {
                    returnStrategy: qe.returnStrategy,
                    twaReturnUrl: qe.twaReturnUrl,
                    forceRedirect: !0
                })
            },
            b = () => {
                let F = h();
                if (dn(F)) return f();
                s(!1);
                let re = !n();
                r(!1), Ai(h(), t.wallet.deepLink, {
                    returnStrategy: qe.returnStrategy,
                    forceRedirect: re
                }, L => {
                    Pt(Xt(Je({}, t.wallet), {
                        openMethod: L
                    }))
                })
            },
            [w, S] = Te(void 0),
            k = () => Qe(void 0, null, function*() {
                w() !== void 0 && clearTimeout(w()), yield _a(h());
                let F = setTimeout(() => S(void 0), 1500);
                S(F)
            }),
            $ = () => {
                s(!1), i(!0), Pt(Xt(Je({}, t.wallet), {
                    openMethod: "qrcode"
                }))
            },
            q = () => {
                i(!1), Pt(Xt(Je({}, t.wallet), {
                    openMethod: "universal-link"
                }))
            },
            P = () => {
                o() ? q() : t.onBackClick()
            };
        return zt(d), b(), g(z5, {
            "data-tc-wallets-modal-connection-mobile": "true",
            get children() {
                return [g(Se, {
                    get when() {
                        return !t.backDisabled || o()
                    },
                    get children() {
                        return g(q5, {
                            icon: "arrow",
                            onClick: P
                        })
                    }
                }), g(Se, {
                    get when() {
                        return o()
                    },
                    get children() {
                        return g(o3, {
                            get universalLink() {
                                return h()
                            },
                            get walletInfo() {
                                return t.wallet
                            },
                            onOpenLink: b,
                            onCopy: k,
                            get isCopiedShown() {
                                return w()
                            }
                        })
                    }
                }), g(Se, {
                    get when() {
                        return !o()
                    },
                    get children() {
                        return [g(F5, {
                            get children() {
                                return t.wallet.name
                            }
                        }), g(O5, {
                            get children() {
                                return [g(Se, {
                                    get when() {
                                        return a()
                                    },
                                    get children() {
                                        return [g(X5, {
                                            size: "s"
                                        }), g(Uu, {
                                            translationKey: "walletModal.mobileConnectionModal.connectionDeclined",
                                            children: "Connection declined"
                                        }), g(Mu, {
                                            get children() {
                                                return [g(lt, {
                                                    get leftIcon() {
                                                        return g(bi, {})
                                                    },
                                                    onClick: b,
                                                    get children() {
                                                        return g(yt, {
                                                            translationKey: "common.retry",
                                                            children: "Retry"
                                                        })
                                                    }
                                                }), g(lt, {
                                                    get leftIcon() {
                                                        return g(Qs, {
                                                            get fill() {
                                                                return e.colors.accent
                                                            }
                                                        })
                                                    },
                                                    onClick: $,
                                                    get children() {
                                                        return g(yt, {
                                                            translationKey: "walletModal.mobileConnectionModal.showQR",
                                                            children: "Show QR Code"
                                                        })
                                                    }
                                                })]
                                            }
                                        })]
                                    }
                                }), g(Se, {
                                    get when() {
                                        return !a()
                                    },
                                    get children() {
                                        return [g(Q5, {
                                            size: "s"
                                        }), g(Uu, {
                                            translationKey: "walletModal.mobileConnectionModal.continueIn",
                                            get translationValues() {
                                                return {
                                                    name: t.wallet.name
                                                }
                                            },
                                            get children() {
                                                return ["Continue in ", ie(() => t.wallet.name), "\u2026"]
                                            }
                                        }), g(Mu, {
                                            get children() {
                                                return [g(lt, {
                                                    get leftIcon() {
                                                        return g(bi, {})
                                                    },
                                                    onClick: b,
                                                    get children() {
                                                        return g(yt, {
                                                            translationKey: "common.retry",
                                                            children: "Retry"
                                                        })
                                                    }
                                                }), g(lt, {
                                                    get leftIcon() {
                                                        return g(Qs, {
                                                            get fill() {
                                                                return e.colors.accent
                                                            }
                                                        })
                                                    },
                                                    onClick: $,
                                                    get children() {
                                                        return g(yt, {
                                                            translationKey: "walletModal.mobileConnectionModal.showQR",
                                                            children: "Show QR Code"
                                                        })
                                                    }
                                                })]
                                            }
                                        })]
                                    }
                                })]
                            }
                        }), g(G5, {
                            get children() {
                                return [g(Y5, {
                                    get src() {
                                        return t.wallet.imageUrl
                                    }
                                }), g(yl, {
                                    get children() {
                                        return t.wallet.name
                                    }
                                }), g(Z5, {
                                    get href() {
                                        return t.wallet.aboutUrl
                                    },
                                    blank: !0,
                                    get children() {
                                        return g(lt, {
                                            get children() {
                                                return g(yt, {
                                                    translationKey: "common.get",
                                                    children: "GET"
                                                })
                                            }
                                        })
                                    }
                                })]
                            }
                        })]
                    }
                })]
            }
        })
    },
    Th = {
        m: "16px",
        s: "12px",
        none: "0"
    },
    i3 = {
        m: "6px",
        s: "6px",
        none: "0"
    },
    jf, _u = _.li(jf || (jf = E(["\n    width: 82px;\n    min-width: 82px;\n    height: 124px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 8px 4px;\n\n    text-align: center;\n    cursor: pointer;\n\n    transition: transform 0.1s ease-in-out;\n\n    ", " {\n        &:hover {\n            transform: scale(1.04);\n        }\n    }\n\n    &:active {\n        transform: scale(0.96);\n    }\n\n    ", " {\n        &:active {\n            transform: scale(0.92);\n        }\n    }\n"])), Bi, Ti),
    zf, a3 = _.div(zf || (zf = E(["\n    width: 1px;\n    margin: 0 10px;\n    height: 24px;\n    position: relative;\n    top: 26px;\n\n    background-color: ", ";\n    opacity: 0.2;\n"])), t => t.theme.colors.icon.secondary),
    Of, Lu = _.div(Of || (Of = E(["\n    width: 60px;\n    height: 60px;\n    border-radius: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: ", ";\n    margin-bottom: 8px;\n"])), t => Th[t.theme.borderRadius], t => t.theme.colors.background.tint),
    Ff, s3 = _(Un)(Ff || (Ff = E(["\n    margin-top: 38px;\n    margin-bottom: 4px;\n    padding: 0 24px;\n"]))),
    qf, l3 = _(cr)(qf || (qf = E(["\n    margin: ", ";\n    padding: ", ";\n    min-height: ", ";\n    max-width: ", "px;\n    margin-left: ", ";\n    margin-right: ", ";\n"])), t => {
        var e;
        return (e = t.margin) != null ? e : "0 0 28px 0"
    }, t => {
        var e;
        return (e = t.padding) != null ? e : "0 24px"
    }, t => {
        var e;
        return (e = t.padding) != null ? e : "44px"
    }, t => t.maxWidth, t => t.maxWidth ? "auto" : "0px", t => t.maxWidth ? "auto" : "0px"),
    Gf;
_(lt)(Gf || (Gf = E(["\n    display: block;\n    margin: 0 auto;\n"])));
var Yf, c3 = _(lt)(Yf || (Yf = E(["\n    margin: 0 28px 24px;\n    width: calc(100% - 56px);\n    border-radius: ", ";\n    padding: 14px 16px 14px 14px;\n    background-color: ", ";\n\n    color: ", ";\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 20px;\n\n    @media (max-width: 375px) {\n        margin: 0 16px 24px;\n        width: calc(100% - 32px);\n    }\n"])), t => Th[t.theme.borderRadius], t => t.theme.colors.telegramButton, t => t.theme.colors.constant.white),
    Zf, u3 = _(Dr)(Zf || (Zf = E(["\n    background-color: transparent;\n    border-radius: ", ";\n    width: 24px;\n    height: 24px;\n"])), t => i3[t.theme.borderRadius]),
    Qf, Wu = _(Nr)(Qf || (Qf = E(["\n    position: absolute;\n    top: 16px;\n    left: 16px;\n"]))),
    d3 = {
        m: "16px",
        s: "8px",
        none: "0"
    },
    Xf, f3 = _(Un)(Xf || (Xf = E(["\n    margin-bottom: 2px;\n    padding: 0 52px;\n"]))),
    Jf, h3 = _(cr)(Jf || (Jf = E(["\n    margin-bottom: 20px;\n    padding: 0 64px;\n"]))),
    e1, g3 = _.div(e1 || (e1 = E(["\n    padding: 0 24px 16px;\n"]))),
    t1, p3 = _.div(t1 || (t1 = E(["\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    padding: 0 24px 24px;\n    margin-top: 0;\n"]))),
    n1, Du = _(lt)(n1 || (n1 = E(["\n    width: 100%;\n    height: 56px;\n    border-radius: ", ";\n    background-color: ", ";\n    color: ", ";\n    font-size: 16px;\n    line-height: 20px;\n    font-weight: 500;\n    justify-content: center;\n    padding: 17px 20px 19px 20px;\n"])), t => d3[t.theme.borderRadius], t => Wr(t.theme.colors.accent, .12), t => t.theme.colors.accent),
    m3 = t => [g(f3, {
        translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
        children: "Connect your TON wallet"
    }), g(h3, {
        translationKey: "walletModal.mobileUniversalModal.scan",
        children: "Scan with your mobile wallet"
    }), g(g3, {
        get children() {
            return g(La, {
                get imageUrl() {
                    return Ri.TON
                },
                get sourceUrl() {
                    return rt(t.universalLink, "none")
                },
                disableCopy: !0
            })
        }
    }), g(p3, {
        get children() {
            return [g(Du, {
                get leftIcon() {
                    return g(bl, {})
                },
                appearance: "secondary",
                onClick: () => {
                    var e;
                    return (e = t.onOpenLink) == null ? void 0 : e.call(t)
                },
                get children() {
                    return g(yt, {
                        translationKey: "walletModal.mobileUniversalModal.openLink",
                        children: "Open Link"
                    })
                }
            }), g(Du, {
                get leftIcon() {
                    return ie(() => t.isCopiedShown !== void 0)() ? g(xl, {}) : g(Wa, {})
                },
                appearance: "secondary",
                onClick: () => t.onCopy(),
                get children() {
                    return g(yt, {
                        get translationKey() {
                            return t.isCopiedShown !== void 0 ? "common.copied" : "common.copyLink"
                        },
                        get children() {
                            return t.isCopiedShown !== void 0 ? "Copied" : "Copy Link"
                        }
                    })
                }
            })]
        }
    })];

function Bh(t) {
    let e = new Set(t.filter(li).map(n => n.bridgeUrl));
    return Array.from(e).map(n => ({
        bridgeUrl: n
    }))
}

function Ih(t, e) {
    let n = new Set(t == null ? void 0 : t.map(o => o.bridgeUrl)),
        r = new Set(e == null ? void 0 : e.map(o => o.bridgeUrl));
    return n.size === r.size && [...n].every(o => r.has(o))
}
var Nu = je("<li>"),
    y3 = je("<div data-tc-wallets-modal-universal-mobile=true>"),
    b3 = t => {
        let [e, n] = Te(!1), [r, o] = Te(!0), [i, a] = Te(null), s = qe.connector, c = () => t.walletsList.filter(F => yi(F) && F.appName !== On), d = () => c().length > 7, h = ie(() => Bh(t.walletsList), null, {
            equals: Ih
        }), f = () => (i() || a(s.connect(h(), t.additionalRequest)), i());
        Pt({
            openMethod: "universal-link"
        });
        let [b, w] = Te(void 0), S = () => Qe(void 0, null, function*() {
            b() !== void 0 && clearTimeout(b()), yield _a(f());
            let F = setTimeout(() => w(void 0), 1500);
            w(F)
        }), k = () => {
            let F = !r();
            o(!1), Ai(f(), void 0, {
                returnStrategy: qe.returnStrategy,
                forceRedirect: F
            }, re => {
                Pt({
                    openMethod: re
                })
            })
        }, $ = () => {
            a(null);
            let F = t.walletsList.find(Z => Z.appName === On);
            if (!F || !li(F)) throw new Tt("@wallet bot not found in the wallets list");
            let re = s.connect({
                    bridgeUrl: F.bridgeUrl,
                    universalLink: F.universalLink
                }, t.additionalRequest),
                L = !r();
            o(!1), ki(re, {
                returnStrategy: qe.returnStrategy,
                twaReturnUrl: qe.twaReturnUrl,
                forceRedirect: L
            })
        }, q = () => {
            n(!0), Pt({
                openMethod: "qrcode"
            })
        }, P = () => {
            n(!1), Pt({
                openMethod: "universal-link"
            })
        };
        return (() => {
            var F = y3();
            return Mt(F, g(Se, {
                get when() {
                    return e()
                },
                get children() {
                    return [g(Wu, {
                        icon: "arrow",
                        onClick: P
                    }), g(m3, {
                        get universalLink() {
                            return f()
                        },
                        get isCopiedShown() {
                            return b()
                        },
                        onOpenLink: k,
                        onCopy: S
                    })]
                }
            }), null), Mt(F, g(Se, {
                get when() {
                    return !e()
                },
                get children() {
                    return [g(Wu, {
                        get icon() {
                            return g(Qs, {})
                        },
                        onClick: q
                    }), g(s3, {
                        translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
                        children: "Connect your TON wallet"
                    }), g(l3, {
                        translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",
                        maxWidth: 320,
                        children: "Use Wallet in Telegram or choose other application"
                    }), g(c3, {
                        get leftIcon() {
                            return g(nb, {})
                        },
                        get rightIcon() {
                            return g(u3, {
                                get src() {
                                    return Ri.TG
                                }
                            })
                        },
                        onClick: $,
                        scale: "s",
                        get children() {
                            return g(yt, {
                                translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram",
                                children: "Connect Wallet in Telegram"
                            })
                        }
                    }), g(p2, {
                        get children() {
                            return [g(Ci, {
                                get each() {
                                    return ie(() => !!d())() ? c().slice(0, 4) : c()
                                },
                                children: re => (() => {
                                    var L = Nu();
                                    return Mt(L, g(Ta, {
                                        get icon() {
                                            return re.imageUrl
                                        },
                                        get name() {
                                            return re.name
                                        },
                                        onClick: () => t.onSelect(re)
                                    })), L
                                })()
                            }), g(Se, {
                                get when() {
                                    return d()
                                },
                                get children() {
                                    var re = Nu();
                                    return Mt(re, g(ah, {
                                        labelLine1: "View all",
                                        labelLine2: "wallets",
                                        get images() {
                                            return c().slice(3, 7).map(L => L.imageUrl)
                                        },
                                        onClick: () => t.onSelectAllWallets()
                                    })), re
                                }
                            }), g(a3, {
                                children: "\xA0"
                            }), g(_u, {
                                onClick: k,
                                get children() {
                                    return [g(Lu, {
                                        get children() {
                                            return g(bl, {})
                                        }
                                    }), g(tn, {
                                        fontWeight: 590,
                                        translationKey: "walletModal.mobileUniversalModal.openLink",
                                        children: "Open Link"
                                    })]
                                }
                            }), g(_u, {
                                onClick: S,
                                get children() {
                                    return [g(Lu, {
                                        get children() {
                                            return ie(() => b() !== void 0)() ? g(xl, {}) : g(Wa, {})
                                        }
                                    }), g(tn, {
                                        fontWeight: 590,
                                        get translationKey() {
                                            return b() !== void 0 ? "common.copied" : "common.copyLink"
                                        },
                                        get children() {
                                            return b() !== void 0 ? "Copied" : "Copy Link"
                                        }
                                    })]
                                }
                            })]
                        }
                    })]
                }
            }), null), F
        })()
    },
    Eh = {
        m: "16px",
        s: "8px",
        none: "0"
    },
    w3 = {
        m: "8px",
        s: "4px",
        none: "0"
    },
    r1, x3 = _.div(r1 || (r1 = E(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 16px;\n"]))),
    o1, v3 = _(cr)(o1 || (o1 = E(["\n    max-width: 320px;\n    margin-top: 2px;\n    margin-bottom: 20px;\n"]))),
    i1, C3 = _(cr)(i1 || (i1 = E(["\n    margin-bottom: 16px;\n"]))),
    a1, S3 = _(La)(a1 || (a1 = E(["\n    margin-bottom: 24px;\n"]))),
    s1, k3 = _.ul(s1 || (s1 = E(["\n    display: flex;\n"]))),
    l1;
_.div(l1 || (l1 = E(["\n    display: flex;\n    gap: 16px;\n    width: 100%;\n"])));
var c1;
_(lt)(c1 || (c1 = E(["\n    position: relative;\n    font-size: 16px;\n    line-height: 20px;\n    width: 100%;\n    padding: 0 16px;\n    height: 56px;\n    border-radius: ", ";\n\n    &:hover {\n        ", "\n    }\n\n    &:active {\n        ", "\n    }\n"])), t => Eh[t.theme.borderRadius], t => t.disableEventsAnimation ? "transform: unset;" : "", t => t.disableEventsAnimation ? "transform: unset;" : "");
var u1;
_.ul(u1 || (u1 = E(["\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    margin: 0;\n    padding: 8px;\n    width: 188px;\n    transform: translateY(-16px);\n\n    background-color: ", ";\n    border-radius: ", ";\n    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);\n"])), t => t.theme.colors.background.primary, t => Eh[t.theme.borderRadius]);
var d1;
_.li(d1 || (d1 = E(["\n    padding: 8px;\n\n    display: flex;\n    align-items: center;\n    gap: 8px;\n\n    cursor: pointer;\n    border-radius: ", ";\n\n    transition: background-color, transform 0.1s ease-in-out;\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:active {\n        transform: scale(0.96);\n    }\n"])), t => w3[t.theme.borderRadius], t => t.theme.colors.background.secondary);
var f1;
_(Dr)(f1 || (f1 = E(["\n    width: 24px;\n    height: 24px;\n\n    border-radius: 6px;\n"])));
var h1;
_.div(h1 || (h1 = E(["\n    margin-top: 23px;\n    margin-bottom: 1px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));
var g1;
_(tn)(g1 || (g1 = E(["\n    color: ", ";\n    font-size: 16px;\n"])), t => t.theme.colors.text.secondary);
var A3 = je("<li>"),
    T3 = t => {
        let [e, n] = Te(!1), r = qe.connector, o = ie(() => Bh(t.walletsList), null, {
            equals: Ih
        });
        Pt({
            openMethod: "qrcode"
        });
        let i = ie(() => r.connect(o(), t.additionalRequest));
        return g(x3, {
            onClick: () => n(!1),
            "data-tc-wallets-modal-universal-desktop": "true",
            get children() {
                return [g(Un, {
                    translationKey: "walletModal.desktopUniversalModal.connectYourWallet",
                    children: "Connect your wallet"
                }), g(v3, {
                    translationKey: "walletModal.desktopUniversalModal.scan",
                    children: "Scan with your mobile wallet"
                }), g(S3, {
                    get sourceUrl() {
                        return rt(i(), "none")
                    },
                    get disableCopy() {
                        return e()
                    },
                    get imageUrl() {
                        return Ri.TON
                    }
                }), g(C3, {
                    translationKey: "walletModal.desktopUniversalModal.availableWallets",
                    children: "Available wallets"
                }), g(k3, {
                    get children() {
                        return [g(Ci, {
                            get each() {
                                return t.walletsList.slice(0, 3)
                            },
                            children: a => (() => {
                                var s = A3();
                                return Mt(s, g(sh, {
                                    wallet: a,
                                    onClick: () => t.onSelect(a)
                                })), s
                            })()
                        }), g(ah, {
                            labelLine1: "View all",
                            labelLine2: "wallets",
                            get images() {
                                return t.walletsList.slice(3, 7).map(a => a.imageUrl)
                            },
                            onClick: () => t.onSelectAllWallets()
                        })]
                    }
                })]
            }
        })
    },
    B3 = () => {
        let {
            locale: t
        } = Rn()[1];
        St(() => t(qe.language)), St(() => {
            uu() ? Ba() : (i(null), s("universal"), d(!1))
        });
        let e = Ot(Co),
            n = Ot(ur),
            r = n.getWallets(),
            [o, i] = Te(null),
            [a, s] = Te("universal"),
            [c, d] = Te(!1),
            h = ie(() => {
                let P = pl(r, qe.walletsListConfiguration),
                    F = P.filter(Hn),
                    re = P.filter(R => !Hn(R));
                P = (F || []).concat(re);
                let L = qe.preferredWalletAppName,
                    Z = P.find(R => ir(R, L)),
                    N = P.filter(R => ir(R, L)).length >= 2;
                L && Z && !N && (P = [Xt(Je({}, Z), {
                    isPreferred: !0
                })].concat(P.filter(R => !ir(R, L))));
                let T = P.find(R => ir(R, On));
                return T && (P = [T].concat(P.filter(R => !ir(R, On)))), P
            }),
            f = () => {
                var P;
                return ((P = qe.connectRequestParameters) == null ? void 0 : P.state) === "loading"
            },
            b = ie(() => {
                var P;
                if (!f()) return (P = qe.connectRequestParameters) == null ? void 0 : P.value
            }),
            w = P => {
                n.closeModal(P)
            },
            S = e.onStatusChange(P => {
                P && w("wallet-selected")
            }),
            k = () => {
                s("all-wallets")
            },
            $ = () => {
                s("universal")
            },
            q = () => {
                i(null)
            };
        return zt(() => {
            i(null), d(!1)
        }), zt(S), g(xh, {
            get opened() {
                return uu()
            },
            get enableAndroidBackHandler() {
                return qe.enableAndroidBackHandler
            },
            onClose: () => w("action-cancelled"),
            onClickQuestion: () => d(P => !P),
            "data-tc-wallets-modal-container": "true",
            get children() {
                return [g(Se, {
                    get when() {
                        return c()
                    },
                    get children() {
                        return g(kh, {
                            onBackClick: () => d(!1)
                        })
                    }
                }), g(Se, {
                    get when() {
                        return !c()
                    },
                    get children() {
                        return [g(Se, {
                            get when() {
                                return f() || !h()
                            },
                            get children() {
                                return [g(vh, {
                                    translationKey: "walletModal.loading",
                                    children: "Wallets list is loading"
                                }), g(Ch, {
                                    get children() {
                                        return g(Gn, {
                                            size: "m"
                                        })
                                    }
                                })]
                            }
                        }), g(Se, {
                            get when() {
                                return ie(() => !f())() && h()
                            },
                            get children() {
                                return g(Si, {
                                    get children() {
                                        return [g(It, {
                                            get when() {
                                                return o()
                                            },
                                            get children() {
                                                return g(yo, {
                                                    get component() {
                                                        return wo() ? Ah : Sh
                                                    },
                                                    get wallet() {
                                                        return o()
                                                    },
                                                    get additionalRequest() {
                                                        return b()
                                                    },
                                                    onBackClick: q
                                                })
                                            }
                                        }), g(It, {
                                            get when() {
                                                return a() === "universal"
                                            },
                                            get children() {
                                                return g(yo, {
                                                    get component() {
                                                        return wo() ? b3 : T3
                                                    },
                                                    onSelect: i,
                                                    get walletsList() {
                                                        return h()
                                                    },
                                                    get additionalRequest() {
                                                        return b()
                                                    },
                                                    onSelectAllWallets: k
                                                })
                                            }
                                        }), g(It, {
                                            get when() {
                                                return a() === "all-wallets"
                                            },
                                            get children() {
                                                return g(A5, {
                                                    get walletsList() {
                                                        return h()
                                                    },
                                                    onBack: $,
                                                    onSelect: i
                                                })
                                            }
                                        })]
                                    }
                                })
                            }
                        })]
                    }
                })]
            }
        })
    },
    p1, I3 = _.div(p1 || (p1 = E(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 8px;\n"]))),
    m1, $u = _(Un)(m1 || (m1 = E(["\n    margin-top: 16px;\n"]))),
    y1, Hu = _(tn)(y1 || (y1 = E(["\n    font-weight: 510;\n    font-size: 16px;\n    line-height: 20px;\n    text-align: center;\n    max-width: 250px;\n    margin-top: 4px;\n    white-space: pre-wrap;\n    color: ", ";\n"])), t => t.theme.colors.text.secondary),
    b1, E3 = _(lt)(b1 || (b1 = E(["\n    min-width: 112px;\n    margin-top: 32px;\n"]))),
    w1, R3 = _(Gn)(w1 || (w1 = E(["\n    height: 16px;\n    width: 16px;\n"]))),
    x1, Ku = _(lt)(x1 || (x1 = E(["\n    margin-top: 32px;\n"]))),
    v1, U3 = _(lt)(v1 || (v1 = E(["\n    margin-top: 16px;\n"]))),
    Ha = t => {
        let e = Ii(t),
            n = Ot(ur),
            [r, o] = Te(!0),
            [i, a] = Te(!1);
        St(() => {
            let b = Qt();
            a(!!b && "sent" in b && b.sent)
        });
        let s;
        n != null && n.wallet && "universalLink" in n.wallet && (n.wallet.openMethod === "universal-link" || dn(n.wallet.universalLink) && Bn()) && (s = n.wallet.universalLink);
        let c;
        n != null && n.wallet && "deepLink" in n.wallet && (n.wallet.openMethod === "custom-deeplink" || dn(n.wallet.deepLink) && Bn()) && (c = n.wallet.deepLink);
        let d = () => {
                let b = Qt(),
                    w = "returnStrategy" in b ? b.returnStrategy : qe.returnStrategy,
                    S = !r();
                o(!1), dn(s) ? ki(s, {
                    returnStrategy: w,
                    twaReturnUrl: "twaReturnUrl" in b ? b.twaReturnUrl : qe.twaReturnUrl,
                    forceRedirect: S
                }) : Ai(s, c, {
                    returnStrategy: w,
                    forceRedirect: S
                }, () => {})
            },
            h = () => {
                var b;
                return ((b = Qt()) == null ? void 0 : b.name) == "no-money"
            },
            f = () => Qt().buttons;
        return g(I3, kn(e, {
            get children() {
                return [ie(() => t.icon), ie(() => ie(() => !!h())() ? [g($u, {
                    get children() {
                        return Qt().headerText
                    }
                }), g(Hu, {
                    get children() {
                        return Qt().text
                    }
                })] : [g($u, {
                    get translationKey() {
                        return t.headerTranslationKey
                    },
                    get translationValues() {
                        return t.headerTranslationValues
                    }
                }), g(Hu, {
                    get translationKey() {
                        return t.textTranslationKey
                    },
                    get translationValues() {
                        return t.textTranslationValues
                    }
                })]), g(Se, {
                    get when() {
                        return !i() && (t.showButton === "open-wallet" && s || t.showButton !== "open-wallet")
                    },
                    get children() {
                        return g(E3, {
                            disabled: !0,
                            "data-tc-connect-button-loading": "true",
                            get children() {
                                return g(R3, {})
                            }
                        })
                    }
                }), g(Se, {
                    get when() {
                        return i()
                    },
                    get children() {
                        return [g(Se, {
                            get when() {
                                return t.showButton !== "open-wallet"
                            },
                            get children() {
                                return g(Ku, {
                                    onClick: () => t.onClose(),
                                    get children() {
                                        return g(yt, {
                                            translationKey: "common.close",
                                            children: "Close"
                                        })
                                    }
                                })
                            }
                        }), g(Se, {
                            get when() {
                                return t.showButton === "open-wallet" && s
                            },
                            get children() {
                                return g(Ku, {
                                    onClick: d,
                                    get children() {
                                        return g(yt, {
                                            translationKey: "common.openWallet",
                                            children: "Open wallet"
                                        })
                                    }
                                })
                            }
                        })]
                    }
                }), g(Se, {
                    get when() {
                        var b;
                        return ie(() => !!h())() && ((b = f()) == null ? void 0 : b.length)
                    },
                    get children() {
                        var b;
                        return (b = f()) == null ? void 0 : b.map(w => g(U3, {
                            get href() {
                                return w.link
                            },
                            target: "_blank",
                            get children() {
                                return w.text
                            }
                        }))
                    }
                })]
            }
        }))
    },
    M3 = t => {
        let e = Ot(ur),
            [n] = Rn(),
            r = () => e.wallet && "name" in e.wallet ? e.wallet.name : n("common.yourWallet", {}, "Your wallet");
        return g(Ha, {
            headerTranslationKey: "actionModal.confirmTransaction.header",
            get headerTranslationValues() {
                return {
                    name: r()
                }
            },
            textTranslationKey: "actionModal.confirmTransaction.text",
            get icon() {
                return g(Gn, {
                    size: "m"
                })
            },
            onClose: () => t.onClose(),
            showButton: "open-wallet",
            "data-tc-confirm-modal": "true"
        })
    },
    P3 = t => g(Ha, {
        headerTranslationKey: "actionModal.transactionCanceled.header",
        textTranslationKey: "actionModal.transactionCanceled.text",
        get icon() {
            return g(Ei, {
                size: "m"
            })
        },
        onClose: () => t.onClose(),
        "data-tc-transaction-canceled-modal": "true"
    }),
    _3 = t => g(Ha, {
        headerTranslationKey: "actionModal.transactionSent.header",
        textTranslationKey: "actionModal.transactionSent.text",
        get icon() {
            return g(wl, {
                size: "m"
            })
        },
        onClose: () => t.onClose(),
        "data-tc-transaction-sent-modal": "true"
    }),
    L3 = t => g(Ha, {
        headerTranslationKey: "actionModal.noMoney.header",
        textTranslationKey: "actionModal.noMoney.text",
        get icon() {
            return g(Ei, {
                size: "m",
                fill: "#4396e3"
            })
        },
        onClose: () => t.onClose(),
        showButton: "open-wallet"
    }),
    W3 = () => g(th, {
        get opened() {
            var t;
            return ie(() => Qt() !== null)() && ((t = Qt()) == null ? void 0 : t.openModal) === !0
        },
        get enableAndroidBackHandler() {
            return qe.enableAndroidBackHandler
        },
        onClose: () => Er(null),
        "data-tc-actions-modal-container": "true",
        get children() {
            return g(Si, {
                get children() {
                    return [g(It, {
                        get when() {
                            return Qt().name === "transaction-sent"
                        },
                        get children() {
                            return g(_3, {
                                onClose: () => Er(null)
                            })
                        }
                    }), g(It, {
                        get when() {
                            return Qt().name === "transaction-canceled"
                        },
                        get children() {
                            return g(P3, {
                                onClose: () => Er(null)
                            })
                        }
                    }), g(It, {
                        get when() {
                            return Qt().name === "confirm-transaction"
                        },
                        get children() {
                            return g(M3, {
                                onClose: () => Er(null)
                            })
                        }
                    }), g(It, {
                        get when() {
                            return Qt().name === "no-money"
                        },
                        get children() {
                            return g(L3, {
                                onClose: () => Er(null)
                            })
                        }
                    })]
                }
            })
        }
    }),
    D3 = () => {
        let {
            locale: t
        } = Rn()[1];
        St(() => t(qe.language)), St(() => {
            fu() && Ba()
        });
        let e = Ot(Co),
            n = Ot(ur),
            [r, o] = Te(!1),
            i = () => {
                var d;
                return ((d = qe.connectRequestParameters) == null ? void 0 : d.state) === "loading"
            },
            a = ie(() => {
                var d;
                if (!i()) return (d = qe.connectRequestParameters) == null ? void 0 : d.value
            }),
            s = d => {
                n.closeSingleWalletModal(d)
            },
            c = e.onStatusChange(d => {
                d && s("wallet-selected")
            });
        return zt(c), zt(() => {
            o(!1)
        }), g(xh, {
            get opened() {
                return fu()
            },
            get enableAndroidBackHandler() {
                return qe.enableAndroidBackHandler
            },
            onClose: () => s("action-cancelled"),
            onClickQuestion: () => o(d => !d),
            "data-tc-wallets-modal-container": "true",
            get children() {
                return [g(Se, {
                    get when() {
                        return r()
                    },
                    get children() {
                        return g(kh, {
                            onBackClick: () => o(!1)
                        })
                    }
                }), g(Se, {
                    get when() {
                        return !r()
                    },
                    get children() {
                        return [g(Se, {
                            get when() {
                                return i()
                            },
                            get children() {
                                return [g(vh, {
                                    translationKey: "walletModal.loading",
                                    children: "Wallets list is loading"
                                }), g(Ch, {
                                    get children() {
                                        return g(Gn, {
                                            size: "m"
                                        })
                                    }
                                })]
                            }
                        }), g(Se, {
                            get when() {
                                return !i()
                            },
                            get children() {
                                return g(yo, {
                                    get component() {
                                        return wo() ? Ah : Sh
                                    },
                                    get wallet() {
                                        return Xm()
                                    },
                                    get additionalRequest() {
                                        return a()
                                    },
                                    onBackClick: () => {},
                                    backDisabled: !0
                                })
                            }
                        })]
                    }
                })]
            }
        })
    },
    N3 = t => {
        let e = c2(Cy, qe.language);
        return Gm(), qm(), g(oh.Provider, {
            value: e,
            get children() {
                return g(ur.Provider, {
                    get value() {
                        return t.tonConnectUI
                    },
                    get children() {
                        return g(Co.Provider, {
                            get value() {
                                return qe.connector
                            },
                            get children() {
                                return [g($m, {}), g(Dm, {
                                    theme: ny,
                                    get children() {
                                        return [g(Se, {
                                            get when() {
                                                return qe.buttonRootId
                                            },
                                            get children() {
                                                return g(V1, {
                                                    get mount() {
                                                        return document.getElementById(qe.buttonRootId)
                                                    },
                                                    get children() {
                                                        return g(b5, {})
                                                    }
                                                })
                                            }
                                        }), g(yo, {
                                            component: jn,
                                            get children() {
                                                return [g(B3, {}), g(D3, {}), g(W3, {})]
                                            }
                                        })]
                                    }
                                })]
                            }
                        })
                    }
                })
            }
        })
    },
    Zt = {
        openWalletsModal: () => void setTimeout(() => cu({
            status: "opened",
            closeReason: null
        })),
        closeWalletsModal: t => void setTimeout(() => cu({
            status: "closed",
            closeReason: t
        })),
        openSingleWalletModal: t => {
            setTimeout(() => du({
                status: "opened",
                closeReason: null,
                walletInfo: t
            }))
        },
        closeSingleWalletModal: t => void setTimeout(() => du({
            status: "closed",
            closeReason: t
        })),
        setAction: t => void setTimeout(() => Er(t)),
        clearAction: () => void setTimeout(() => Er(null)),
        getSelectedWalletInfo: () => Jm(),
        removeSelectedWalletInfo: () => Pt(null),
        renderApp: (t, e) => wm(() => g(N3, {
            tonConnectUI: e
        }), document.getElementById(t))
    },
    $3 = "2.0.10",
    el = class {
        constructor(e) {
            we(this, "connector"), we(this, "setConnectRequestParametersCallback"), we(this, "consumers", []), we(this, "tracker"), we(this, "state", Ca()), this.connector = e.connector, this.tracker = e.tracker, this.setConnectRequestParametersCallback = e.setConnectRequestParametersCallback, St(() => {
                let n = Ca();
                this.state = n, this.consumers.forEach(r => r(n))
            })
        }
        open(e) {
            return Qe(this, null, function*() {
                this.tracker.trackConnectionStarted();
                let n = this.connector.getWallets(),
                    r = pl(n, qe.walletsListConfiguration),
                    o = r.find(Br);
                if (!!o) return this.connectEmbeddedWallet(o);
                let s = r.filter(li).find(h => ir(h, e));
                if (!!s) return this.openSingleWalletModal(s);
                let d = 'Trying to open modal window with unknown wallet "'.concat(e, '".');
                throw this.tracker.trackConnectionError(d), new Tt(d)
            })
        }
        close(e = "action-cancelled") {
            e === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"), Zt.closeSingleWalletModal("action-cancelled")
        }
        onStateChange(e) {
            return this.consumers.push(e), () => {
                this.consumers = this.consumers.filter(n => n !== e)
            }
        }
        connectEmbeddedWallet(e) {
            let n = o => {
                    Pt(e), this.connector.connect({
                        jsBridgeKey: e.jsBridgeKey
                    }, o)
                },
                r = qe.connectRequestParameters;
            (r == null ? void 0 : r.state) === "loading" ? this.setConnectRequestParametersCallback(n): n(r == null ? void 0 : r.value)
        }
        openSingleWalletModal(e) {
            return Qe(this, null, function*() {
                return Bn() && gl(), Zt.openSingleWalletModal(e), new Promise(n => {
                    let r = this.onStateChange(o => {
                        let {
                            status: i
                        } = o;
                        i === "opened" && (r(), n())
                    })
                })
            })
        }
    },
    tl = class {
        constructor(e) {
            we(this, "connector"), we(this, "consumers", []), this.connector = e.connector, St(() => {
                let n = Qt();
                this.consumers.forEach(r => r(n))
            })
        }
        onStateChange(e) {
            return this.consumers.push(e), () => {
                this.consumers = this.consumers.filter(n => n !== e)
            }
        }
    },
    nl = class {
        constructor(e) {
            we(this, "connector"), we(this, "setConnectRequestParametersCallback"), we(this, "consumers", []), we(this, "tracker"), we(this, "state", Fs()), this.connector = e.connector, this.tracker = e.tracker, this.setConnectRequestParametersCallback = e.setConnectRequestParametersCallback, St(() => {
                let n = Fs();
                this.state = n, this.consumers.forEach(r => r(n))
            })
        }
        open() {
            return Qe(this, null, function*() {
                this.tracker.trackConnectionStarted();
                let n = this.connector.getWallets().find(Br);
                return n ? this.connectEmbeddedWallet(n) : this.openWalletsModal()
            })
        }
        close(e = "action-cancelled") {
            e === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"), Zt.closeWalletsModal(e)
        }
        onStateChange(e) {
            return this.consumers.push(e), () => {
                this.consumers = this.consumers.filter(n => n !== e)
            }
        }
        connectEmbeddedWallet(e) {
            let n = o => {
                    Pt(e), this.connector.connect({
                        jsBridgeKey: e.jsBridgeKey
                    }, o)
                },
                r = qe.connectRequestParameters;
            (r == null ? void 0 : r.state) === "loading" ? this.setConnectRequestParametersCallback(n): n(r == null ? void 0 : r.value)
        }
        openWalletsModal() {
            return Qe(this, null, function*() {
                return Bn() && gl(), Zt.openWalletsModal(), new Promise(e => {
                    let n = this.onStateChange(r => {
                        let {
                            status: o
                        } = r;
                        o === "opened" && (n(), e())
                    })
                })
            })
        }
    },
    rl = class {
        constructor(e) {
            we(this, "eventPrefix", "ton-connect-ui-"), we(this, "tonConnectUiVersion"), we(this, "tonConnectSdkVersion", null), we(this, "eventDispatcher");
            var n;
            this.eventDispatcher = (n = e == null ? void 0 : e.eventDispatcher) != null ? n : new Tr, this.tonConnectUiVersion = e.tonConnectUiVersion, this.init().catch()
        }
        get version() {
            return vn({
                ton_connect_sdk_lib: this.tonConnectSdkVersion,
                ton_connect_ui_lib: this.tonConnectUiVersion
            })
        }
        init() {
            return Qe(this, null, function*() {
                try {
                    yield this.setRequestVersionHandler(), this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion()
                } catch {}
            })
        }
        setRequestVersionHandler() {
            return Qe(this, null, function*() {
                yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version", () => Qe(this, null, function*() {
                    yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version", Zo(this.tonConnectUiVersion))
                }))
            })
        }
        requestTonConnectSdkVersion() {
            return Qe(this, null, function*() {
                return new Promise((e, n) => Qe(this, null, function*() {
                    try {
                        yield this.eventDispatcher.addEventListener("ton-connect-response-version", r => {
                            e(r.detail.version)
                        }, {
                            once: !0
                        }), yield this.eventDispatcher.dispatchEvent("ton-connect-request-version", Yo())
                    } catch (r) {
                        n(r)
                    }
                }))
            })
        }
        dispatchUserActionEvent(e) {
            var n;
            try {
                (n = this.eventDispatcher) == null || n.dispatchEvent("".concat(this.eventPrefix).concat(e.type), e).catch()
            } catch {}
        }
        trackConnectionStarted(...e) {
            try {
                let n = Qo(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackConnectionCompleted(...e) {
            try {
                let n = Xo(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackConnectionError(...e) {
            try {
                let n = Jo(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackConnectionRestoringStarted(...e) {
            try {
                let n = ei(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackConnectionRestoringCompleted(...e) {
            try {
                let n = ti(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackConnectionRestoringError(...e) {
            try {
                let n = ni(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackDisconnection(...e) {
            try {
                let n = ai(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackTransactionSentForSignature(...e) {
            try {
                let n = ri(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackTransactionSigned(...e) {
            try {
                let n = oi(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
        trackTransactionSigningFailed(...e) {
            try {
                let n = ii(this.version, ...e);
                this.dispatchUserActionEvent(n)
            } catch {}
        }
    },
    ol = class {
        constructor(e) {
            if (we(this, "walletInfoStorage", new zs), we(this, "preferredWalletStorage", new Os), we(this, "tracker"), we(this, "walletInfo", null), we(this, "systemThemeChangeUnsubscribe", null), we(this, "actionsConfiguration"), we(this, "walletsList"), we(this, "connectRequestParametersCallback"), we(this, "connector"), we(this, "modal"), we(this, "singleWalletModal"), we(this, "transactionModal"), we(this, "connectionRestored", Promise.resolve(!1)), e && "connector" in e && e.connector) this.connector = e.connector;
            else if (e && "manifestUrl" in e && e.manifestUrl) this.connector = new or({
                manifestUrl: e.manifestUrl,
                walletsList: e.walletsList,
                eventDispatcher: e == null ? void 0 : e.eventDispatcher
            });
            else throw new Tt("You have to specify a `manifestUrl` or a `connector` in the options.");
            this.tracker = new rl({
                eventDispatcher: e == null ? void 0 : e.eventDispatcher,
                tonConnectUiVersion: $3
            }), this.modal = new nl({
                connector: this.connector,
                tracker: this.tracker,
                setConnectRequestParametersCallback: i => {
                    this.connectRequestParametersCallback = i
                }
            }), this.singleWalletModal = new el({
                connector: this.connector,
                tracker: this.tracker,
                setConnectRequestParametersCallback: i => {
                    this.connectRequestParametersCallback = i
                }
            }), this.transactionModal = new tl({
                connector: this.connector
            });
            let n = this.walletsList = this.getWallets();
            F1(iy(n.map(i => i.imageUrl)));
            let r = this.normalizeWidgetRoot(e == null ? void 0 : e.widgetRootId);
            this.subscribeToWalletChange(), (e == null ? void 0 : e.restoreConnection) !== !1 && (this.connectionRestored = Ym(() => Qe(this, null, function*() {
                return this.tracker.trackConnectionRestoringStarted(), yield this.connector.restoreConnection(), this.connector.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : (this.tracker.trackConnectionRestoringError("Connection was not restored"), this.walletInfoStorage.removeWalletInfo()), this.connector.connected
            }))), this.uiOptions = sr(e, {
                uiPreferences: {
                    theme: "SYSTEM"
                }
            });
            let o = this.preferredWalletStorage.getPreferredWalletAppName();
            aa({
                connector: this.connector,
                preferredWalletAppName: o
            }), Zt.renderApp(r, this)
        }
        static getWallets() {
            return or.getWallets()
        }
        get connected() {
            return this.connector.connected
        }
        get account() {
            return this.connector.account
        }
        get wallet() {
            return this.connector.wallet ? Je(Je({}, this.connector.wallet), this.walletInfo) : null
        }
        set uiOptions(e) {
            var n, r, o, i, a;
            let s = e.buttonRootId;
            s && !document.getElementById(s) && (e.buttonRootId = null), this.actionsConfiguration = e.actionsConfiguration, (n = e.uiPreferences) != null && n.theme ? ((r = e.uiPreferences) == null ? void 0 : r.theme) !== "SYSTEM" ? ((o = this.systemThemeChangeUnsubscribe) == null || o.call(this), Us(e.uiPreferences.theme, e.uiPreferences.colorsSet)) : (Us(jm(), e.uiPreferences.colorsSet), this.systemThemeChangeUnsubscribe || (this.systemThemeChangeUnsubscribe = zm(Us))) : (i = e.uiPreferences) != null && i.colorsSet && oy(e.uiPreferences.colorsSet), (a = e.uiPreferences) != null && a.borderRadius && ry(e.uiPreferences.borderRadius), aa(c => {
                var d, h;
                let f = sr(Je(Je(Je(Je({}, e.language && {
                    language: e.language
                }), !!((d = e.actionsConfiguration) != null && d.returnStrategy) && {
                    returnStrategy: e.actionsConfiguration.returnStrategy
                }), !!((h = e.actionsConfiguration) != null && h.twaReturnUrl) && {
                    twaReturnUrl: e.actionsConfiguration.twaReturnUrl
                }), !!e.walletsListConfiguration && {
                    walletsListConfiguration: e.walletsListConfiguration
                }), po(c));
                return e.buttonRootId !== void 0 && (f.buttonRootId = e.buttonRootId), e.enableAndroidBackHandler !== void 0 && (f.enableAndroidBackHandler = e.enableAndroidBackHandler), f
            })
        }
        setConnectRequestParameters(e) {
            var n;
            aa({
                connectRequestParameters: e
            }), ((e == null ? void 0 : e.state) === "ready" || !e) && ((n = this.connectRequestParametersCallback) == null || n.call(this, e == null ? void 0 : e.value))
        }
        getWallets() {
            return this.connector.getWallets()
        }
        onStatusChange(e, n) {
            return this.connector.onStatusChange(r => Qe(this, null, function*() {
                if (r) {
                    let o = yield this.getSelectedWalletInfo(r);
                    e(Je(Je({}, r), o || this.walletInfoStorage.getWalletInfo()))
                } else e(r)
            }), n)
        }
        openModal() {
            return Qe(this, null, function*() {
                return this.modal.open()
            })
        }
        closeModal(e) {
            this.modal.close(e)
        }
        onModalStateChange(e) {
            return this.modal.onStateChange(e)
        }
        get modalState() {
            return this.modal.state
        }
        openSingleWalletModal(e) {
            return Qe(this, null, function*() {
                return this.singleWalletModal.open(e)
            })
        }
        closeSingleWalletModal(e) {
            this.singleWalletModal.close(e)
        }
        onSingleWalletModalStateChange(e) {
            return this.singleWalletModal.onStateChange(e)
        }
        get singleWalletModalState() {
            return this.singleWalletModal.state
        }
        connectWallet() {
            return Qe(this, null, function*() {
                let n = this.getWallets().find(Br);
                return n ? yield this.connectEmbeddedWallet(n): yield this.connectExternalWallet()
            })
        }
        disconnect() {
            return this.tracker.trackDisconnection(this.wallet, "dapp"), Zt.clearAction(), Zt.removeSelectedWalletInfo(), this.walletInfoStorage.removeWalletInfo(), this.connector.disconnect()
        }
        sendTransaction(e, n) {
            return Qe(this, null, function*() {
                if (this.tracker.trackTransactionSentForSignature(this.wallet, e), !this.connected) throw this.tracker.trackTransactionSigningFailed(this.wallet, e, "Wallet was not connected"), new Tt("Connect wallet to send a transaction.");
                Bn() && gl();
                let {
                    notifications: r,
                    modals: o,
                    returnStrategy: i,
                    twaReturnUrl: a,
                    skipRedirectToWallet: s
                } = this.getModalsAndNotificationsConfiguration(n);
                Zt.setAction({
                    name: "confirm-transaction",
                    showNotification: r.includes("before"),
                    openModal: o.includes("before"),
                    sent: !1
                });
                let c = () => {
                        d.signal.aborted || (Zt.setAction({
                            name: "confirm-transaction",
                            showNotification: r.includes("before"),
                            openModal: o.includes("before"),
                            sent: !0
                        }), this.walletInfo && "universalLink" in this.walletInfo && (this.walletInfo.openMethod === "universal-link" || this.walletInfo.openMethod === "custom-deeplink") && (dn(this.walletInfo.universalLink) ? ki(this.walletInfo.universalLink, {
                            returnStrategy: i,
                            twaReturnUrl: a || qe.twaReturnUrl,
                            forceRedirect: !1
                        }) : Ai(this.walletInfo.universalLink, this.walletInfo.deepLink, {
                            returnStrategy: i,
                            forceRedirect: !1
                        }, () => {})))
                    },
                    d = new AbortController,
                    h = this.onTransactionModalStateChange(f => {
                        f != null && f.openModal || (h(), f || d.abort())
                    });
                try {
                    let f = yield this.waitForSendTransaction({
                        transaction: e,
                        signal: d.signal
                    }, c);
                    return this.tracker.trackTransactionSigned(this.wallet, e, f), Zt.setAction({
                        name: "transaction-sent",
                        showNotification: r.includes("success"),
                        openModal: o.includes("success")
                    }), f
                } catch (f) {
                    throw Zt.setAction({
                        name: "transaction-canceled",
                        showNotification: r.includes("error"),
                        openModal: o.includes("error")
                    }), f instanceof oe ? f : (console.error(f), new Tt("Unhandled error:" + f))
                } finally {
                    h()
                }
            })
        }
        connectEmbeddedWallet(e) {
            return Qe(this, null, function*() {
                let n = o => {
                        Pt(e), this.connector.connect({
                            jsBridgeKey: e.jsBridgeKey
                        }, o)
                    },
                    r = qe.connectRequestParameters;
                return (r == null ? void 0 : r.state) === "loading" ? this.connectRequestParametersCallback = n : n(r == null ? void 0 : r.value), yield this.waitForWalletConnection({
                    ignoreErrors: !1
                })
            })
        }
        connectExternalWallet() {
            return Qe(this, null, function*() {
                let e = new AbortController;
                Zt.openWalletsModal();
                let n = this.onModalStateChange(r => {
                    let {
                        status: o,
                        closeReason: i
                    } = r;
                    o !== "opened" && (n(), i === "action-cancelled" && e.abort())
                });
                return yield this.waitForWalletConnection({
                    ignoreErrors: !0,
                    signal: e.signal
                })
            })
        }
        waitForWalletConnection(e) {
            return Qe(this, null, function*() {
                return new Promise((n, r) => {
                    this.tracker.trackConnectionStarted();
                    let {
                        ignoreErrors: o = !1,
                        signal: i = null
                    } = e;
                    if (i && i.aborted) return this.tracker.trackConnectionError("Connection was cancelled"), r(new Tt("Wallet was not connected"));
                    let a = d => Qe(this, null, function*() {
                            if (d) this.tracker.trackConnectionCompleted(d), c(), n(d);
                            else {
                                if (this.tracker.trackConnectionError("Connection was cancelled"), o) return;
                                c(), r(new Tt("Wallet was not connected"))
                            }
                        }),
                        s = d => {
                            this.tracker.trackConnectionError(d.message), !o && (c(), r(d))
                        },
                        c = this.onStatusChange(d => a(d), d => s(d));
                    i && i.addEventListener("abort", () => {
                        c(), r(new Tt("Wallet was not connected"))
                    }, {
                        once: !0
                    })
                })
            })
        }
        waitForSendTransaction(e, n) {
            return Qe(this, null, function*() {
                return new Promise((r, o) => {
                    let {
                        transaction: i,
                        signal: a
                    } = e;
                    if (a.aborted) return this.tracker.trackTransactionSigningFailed(this.wallet, i, "Transaction was cancelled"), o(new Tt("Transaction was not sent"));
                    let s = h => Qe(this, null, function*() {
                            r(h)
                        }),
                        c = h => {
                            o(h)
                        },
                        d = () => {
                            this.tracker.trackTransactionSigningFailed(this.wallet, i, "Transaction was cancelled"), o(new Tt("Transaction was not sent"))
                        };
                    a.addEventListener("abort", d, {
                        once: !0
                    }), this.connector.sendTransaction(i, {
                        onRequestSent: n,
                        signal: a
                    }).then(h => (a.removeEventListener("abort", d), s(h))).catch(h => (a.removeEventListener("abort", d), c(h)))
                })
            })
        }
        onTransactionModalStateChange(e) {
            return this.transactionModal.onStateChange(e)
        }
        subscribeToWalletChange() {
            this.connector.onStatusChange(e => Qe(this, null, function*() {
                var n;
                e ? (yield this.updateWalletInfo(e), this.setPreferredWalletAppName(((n = this.walletInfo) == null ? void 0 : n.appName) || e.device.appName)) : this.walletInfoStorage.removeWalletInfo()
            }))
        }
        setPreferredWalletAppName(e) {
            this.preferredWalletStorage.setPreferredWalletAppName(e), aa({
                preferredWalletAppName: e
            })
        }
        getSelectedWalletInfo(e) {
            return Qe(this, null, function*() {
                let n = Zt.getSelectedWalletInfo();
                if (!n) return null;
                let r;
                if ("name" in n) r = n;
                else {
                    let i = pl(yield this.walletsList, qe.walletsListConfiguration).find(a => ir(a, e.device.appName));
                    if (!i) throw new Tt("Cannot find WalletInfo for the '".concat(e.device.appName, "' wallet"));
                    r = Je(Je({}, i), n)
                }
                return r
            })
        }
        updateWalletInfo(e) {
            return Qe(this, null, function*() {
                let n = yield this.getSelectedWalletInfo(e);
                if (n) {
                    this.walletInfo = n, this.walletInfoStorage.setWalletInfo(n);
                    return
                }
                let r = this.walletInfoStorage.getWalletInfo();
                if (r) {
                    this.walletInfo = r;
                    return
                }
                this.walletInfo = (yield this.walletsList).find(o => ir(o, e.device.appName)) || null
            })
        }
        normalizeWidgetRoot(e) {
            if (!e || !document.getElementById(e)) {
                e = "tc-widget-root";
                let n = document.createElement("div");
                n.id = e, document.body.appendChild(n)
            }
            return e
        }
        getModalsAndNotificationsConfiguration(e) {
            var n, r, o, i, a, s;
            let c = ["before", "success", "error"],
                d = c;
            (n = this.actionsConfiguration) != null && n.notifications && ((r = this.actionsConfiguration) == null ? void 0 : r.notifications) !== "all" && (d = this.actionsConfiguration.notifications), e != null && e.notifications && (e.notifications === "all" ? d = c : d = e.notifications);
            let h = ["before"];
            (o = this.actionsConfiguration) != null && o.modals && (this.actionsConfiguration.modals === "all" ? h = c : h = this.actionsConfiguration.modals), e != null && e.modals && (e.modals === "all" ? h = c : h = e.modals);
            let f = (e == null ? void 0 : e.returnStrategy) || ((i = this.actionsConfiguration) == null ? void 0 : i.returnStrategy) || "back",
                b = (e == null ? void 0 : e.twaReturnUrl) || ((a = this.actionsConfiguration) == null ? void 0 : a.twaReturnUrl),
                w = (e == null ? void 0 : e.skipRedirectToWallet) || ((s = this.actionsConfiguration) == null ? void 0 : s.skipRedirectToWallet) || "ios";
            return Bn() && (w = "never"), {
                notifications: d,
                modals: h,
                returnStrategy: f,
                twaReturnUrl: b,
                skipRedirectToWallet: w
            }
        }
    };

function dr(t, e) {
    let n = t[0] >>> 16,
        r = t[0] & 65535,
        o = t[1] >>> 16,
        i = t[1] & 65535,
        a = e[0] >>> 16,
        s = e[0] & 65535,
        c = e[1] >>> 16,
        d = e[1] & 65535,
        h = 0,
        f = 0,
        b = 0,
        w = 0;
    w += i + d, b += w >>> 16, w &= 65535, b += o + c, f += b >>> 16, b &= 65535, f += r + s, h += f >>> 16, f &= 65535, h += n + a, h &= 65535, t[0] = h << 16 | f, t[1] = b << 16 | w
}

function sn(t, e) {
    let n = t[0] >>> 16,
        r = t[0] & 65535,
        o = t[1] >>> 16,
        i = t[1] & 65535,
        a = e[0] >>> 16,
        s = e[0] & 65535,
        c = e[1] >>> 16,
        d = e[1] & 65535,
        h = 0,
        f = 0,
        b = 0,
        w = 0;
    w += i * d, b += w >>> 16, w &= 65535, b += o * d, f += b >>> 16, b &= 65535, b += i * c, f += b >>> 16, b &= 65535, f += r * d, h += f >>> 16, f &= 65535, f += o * c, h += f >>> 16, f &= 65535, f += i * s, h += f >>> 16, f &= 65535, h += n * d + r * c + o * s + i * a, h &= 65535, t[0] = h << 16 | f, t[1] = b << 16 | w
}

function ko(t, e) {
    let n = t[0];
    e %= 64, e === 32 ? (t[0] = t[1], t[1] = n) : e < 32 ? (t[0] = n << e | t[1] >>> 32 - e, t[1] = t[1] << e | n >>> 32 - e) : (e -= 32, t[0] = t[1] << e | n >>> 32 - e, t[1] = n << e | t[1] >>> 32 - e)
}

function nn(t, e) {
    e %= 64, e !== 0 && (e < 32 ? (t[0] = t[1] >>> 32 - e, t[1] = t[1] << e) : (t[0] = t[1] << e - 32, t[1] = 0))
}

function ct(t, e) {
    t[0] ^= e[0], t[1] ^= e[1]
}
var H3 = [4283543511, 3981806797],
    K3 = [3301882366, 444984403];

function Rh(t) {
    let e = [0, t[0] >>> 1];
    ct(t, e), sn(t, H3), e[1] = t[0] >>> 1, ct(t, e), sn(t, K3), e[1] = t[0] >>> 1, ct(t, e)
}
var Ka = [2277735313, 289559509],
    Va = [1291169091, 658871167],
    Uh = [0, 5],
    V3 = [0, 1390208809],
    j3 = [0, 944331445];

function Ao(t, e) {
    let n = new TextEncoder().encode(t);
    e = e || 0;
    let r = [0, n.length],
        o = r[1] % 16,
        i = r[1] - o,
        a = [0, e],
        s = [0, e],
        c = [0, 0],
        d = [0, 0],
        h;
    for (h = 0; h < i; h = h + 16) c[0] = n[h + 4] | n[h + 5] << 8 | n[h + 6] << 16 | n[h + 7] << 24, c[1] = n[h] | n[h + 1] << 8 | n[h + 2] << 16 | n[h + 3] << 24, d[0] = n[h + 12] | n[h + 13] << 8 | n[h + 14] << 16 | n[h + 15] << 24, d[1] = n[h + 8] | n[h + 9] << 8 | n[h + 10] << 16 | n[h + 11] << 24, sn(c, Ka), ko(c, 31), sn(c, Va), ct(a, c), ko(a, 27), dr(a, s), sn(a, Uh), dr(a, V3), sn(d, Va), ko(d, 33), sn(d, Ka), ct(s, d), ko(s, 31), dr(s, a), sn(s, Uh), dr(s, j3);
    c[0] = 0, c[1] = 0, d[0] = 0, d[1] = 0;
    let f = [0, 0];
    switch (o) {
        case 15:
            f[1] = n[h + 14], nn(f, 48), ct(d, f);
        case 14:
            f[1] = n[h + 13], nn(f, 40), ct(d, f);
        case 13:
            f[1] = n[h + 12], nn(f, 32), ct(d, f);
        case 12:
            f[1] = n[h + 11], nn(f, 24), ct(d, f);
        case 11:
            f[1] = n[h + 10], nn(f, 16), ct(d, f);
        case 10:
            f[1] = n[h + 9], nn(f, 8), ct(d, f);
        case 9:
            f[1] = n[h + 8], ct(d, f), sn(d, Va), ko(d, 33), sn(d, Ka), ct(s, d);
        case 8:
            f[1] = n[h + 7], nn(f, 56), ct(c, f);
        case 7:
            f[1] = n[h + 6], nn(f, 48), ct(c, f);
        case 6:
            f[1] = n[h + 5], nn(f, 40), ct(c, f);
        case 5:
            f[1] = n[h + 4], nn(f, 32), ct(c, f);
        case 4:
            f[1] = n[h + 3], nn(f, 24), ct(c, f);
        case 3:
            f[1] = n[h + 2], nn(f, 16), ct(c, f);
        case 2:
            f[1] = n[h + 1], nn(f, 8), ct(c, f);
        case 1:
            f[1] = n[h], ct(c, f), sn(c, Ka), ko(c, 31), sn(c, Va), ct(a, c)
    }
    return ct(a, r), ct(s, r), dr(a, s), dr(s, a), Rh(a), Rh(s), dr(a, s), dr(s, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function Mh() {
    try {
        let t = window.OfflineAudioContext || window.webkitOfflineAudioContext,
            e = new t(1, 44100, 44100);
        return {
            sampleRate: e.sampleRate,
            channelCount: e.destination.maxChannelCount,
            outputLatency: e.outputLatency,
            state: e.state,
            baseLatency: e.baseLatency
        }
    } catch {
        return null
    }
}
async function Ph() {
    try {
        let t = window.OfflineAudioContext || window.webkitOfflineAudioContext,
            e = new t(1, 44100, 44100),
            n = e.createOscillator();
        n.type = "sine", n.frequency.value = 440, n.connect(e.destination), n.start();
        let i = (await e.startRendering()).getChannelData(0).reduce((a, s) => a + Math.abs(s), 0).toString();
        return Ao(i)
    } catch {
        return null
    }
}

function _h() {
    let t = window;
    return z3(t.print) && String(t.browser) === "[object WebPageNamespace]"
}

function Lh() {
    let t = window,
        e = navigator,
        {
            CSS: n,
            HTMLButtonElement: r
        } = t;
    return Dh([!("getStorageUpdates" in e), r && "popover" in r.prototype, "CSSCounterStyleRule" in t, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4
}

function Wh() {
    let t = window,
        e = navigator;
    return Dh(["ApplePayError" in t, "CSSPrimitiveValue" in t, "Counter" in t, e.vendor.indexOf("Apple") === 0, "RGBColor" in t, "WebKitMediaKeys" in t]) >= 4
}

function Dh(t) {
    return t.reduce((e, n) => e + (n ? 1 : 0), 0)
}

function z3(t) {
    return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(t))
}

function Bl() {
    return O3(X3())
}

function O3(t) {
    let e = !1,
        n, r, [o, i] = F3();
    return q3(o, i) ? (e = G3(i), t ? n = r = "skipped" : [n, r] = Y3(o, i)) : n = r = "unsupported", {
        winding: e,
        geometry: n,
        text: r
    }
}

function F3() {
    let t = document.createElement("canvas");
    return t.width = 1, t.height = 1, [t, t.getContext("2d")]
}

function q3(t, e) {
    return !!(e && t.toDataURL)
}

function G3(t) {
    return t.rect(0, 0, 10, 10), t.rect(2, 2, 6, 6), !t.isPointInPath(5, 5, "evenodd")
}

function Y3(t, e) {
    Z3(t, e);
    let n = Tl(t),
        r = Tl(t);
    return n !== r ? ["unstable", "unstable"] : (Q3(t, e), [Tl(t), n])
}

function Z3(t, e) {
    t.width = 240, t.height = 60, e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(100, 1, 62, 20), e.fillStyle = "#069", e.font = '11pt "Times New Roman"';
    let n = "\u25B3\u25EF\xD7\u2191\u2192\u2605\u2665\u23F0\u2600\u{1FAE9}\u{1FAF7}\u{1FAE0}\u{1FAE2}\u{1F972} cwm fjordbank glyCWM FJORDBANK GLY`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:'\",<.>/?";
    e.fillText(n, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.2)", e.font = "18pt Arial", e.fillText(n, 4, 45)
}

function Q3(t, e) {
    t.width = 122, t.height = 110, e.globalCompositeOperation = "multiply";
    for (let [n, r, o] of [
            ["#f2f", 40, 40],
            ["#2ff", 80, 40],
            ["#ff2", 60, 80]
        ]) e.fillStyle = n, e.beginPath(), e.arc(r, o, 40, 0, Math.PI * 2, !0), e.closePath(), e.fill();
    e.fillStyle = "#f9c", e.arc(60, 60, 60, 0, Math.PI * 2, !0), e.arc(60, 60, 20, 0, Math.PI * 2, !0), e.fill("evenodd")
}

function Tl(t) {
    return t.toDataURL()
}

function X3() {
    return Wh() && Lh() && _h()
}
async function Nh(t, e, n = 50) {
    var i, a, s;
    let r = document;
    for (; !r.body;) await new Promise(c => setTimeout(c, n));
    let o = r.createElement("iframe");
    try {
        for (await new Promise((c, d) => {
                let h = !1,
                    f = () => {
                        h = !0, c()
                    },
                    b = k => {
                        h = !0, d(k)
                    };
                o.onload = f, o.onerror = b;
                let {
                    style: w
                } = o;
                w.setProperty("display", "block", "important"), w.position = "absolute", w.top = "0", w.left = "0", w.visibility = "hidden", e && "srcdoc" in o ? o.srcdoc = e : o.src = "about:blank", r.body.appendChild(o);
                let S = () => {
                    var k, $;
                    h || ((($ = (k = o.contentWindow) == null ? void 0 : k.document) == null ? void 0 : $.readyState) === "complete" ? f() : setTimeout(S, 10))
                };
                S()
            }); !((a = (i = o.contentWindow) == null ? void 0 : i.document) != null && a.body);) await wait(n);
        return await t(o, o.contentWindow)
    } finally {
        (s = o.parentNode) == null || s.removeChild(o)
    }
}
var J3 = "mmMwWLliI0O&1",
    e6 = "48px",
    To = ["monospace", "sans-serif", "serif"],
    $h = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Il() {
    return Nh(async (t, {
        document: e
    }) => {
        let n = e.body;
        n.style.fontSize = e6;
        let r = e.createElement("div");
        r.style.setProperty("visibility", "hidden", "important");
        let o = {},
            i = {},
            a = w => {
                let S = e.createElement("span"),
                    {
                        style: k
                    } = S;
                return k.position = "absolute", k.top = "0", k.left = "0", k.fontFamily = w, S.textContent = J3, r.appendChild(S), S
            },
            s = (w, S) => a("'".concat(w, "',").concat(S)),
            c = () => To.map(a),
            d = () => {
                let w = {};
                for (let S of $h) w[S] = To.map(k => s(S, k));
                return w
            },
            h = w => To.some((S, k) => w[k].offsetWidth !== o[S] || w[k].offsetHeight !== i[S]),
            f = c(),
            b = d();
        n.appendChild(r);
        for (let w = 0; w < To.length; w++) o[To[w]] = f[w].offsetWidth, i[To[w]] = f[w].offsetHeight;
        return $h.filter(w => h(b[w]))
    })
}
var et = Math,
    Ft = () => 0;

function El() {
    let t = et.acos || Ft,
        e = et.acosh || Ft,
        n = et.asin || Ft,
        r = et.asinh || Ft,
        o = et.atanh || Ft,
        i = et.atan || Ft,
        a = et.sin || Ft,
        s = et.sinh || Ft,
        c = et.cos || Ft,
        d = et.cosh || Ft,
        h = et.tan || Ft,
        f = et.tanh || Ft,
        b = et.exp || Ft,
        w = et.expm1 || Ft,
        S = et.log1p || Ft,
        k = T => et.pow(et.PI, T),
        $ = T => et.log(T + et.sqrt(T * T - 1)),
        q = T => et.log(T + et.sqrt(T * T + 1)),
        P = T => et.log((1 + T) / (1 - T)) / 2,
        F = T => et.exp(T) - 1 / et.exp(T) / 2,
        re = T => (et.exp(T) + 1 / et.exp(T)) / 2,
        L = T => et.exp(T) - 1,
        Z = T => (et.exp(2 * T) - 1) / (et.exp(2 * T) + 1),
        N = T => et.log(1 + T);
    return {
        acos: t(.12312423423423424),
        acosh: e(1e308),
        acoshPf: $(1e154),
        asin: n(.12312423423423424),
        asinh: r(1),
        asinhPf: q(1),
        atanh: o(.5),
        atanhPf: P(.5),
        atan: i(.5),
        sin: a(-1e300),
        sinh: s(1),
        sinhPf: F(1),
        cos: c(10.000000000123),
        cosh: d(1),
        coshPf: re(1),
        tan: h(-1e300),
        tanh: f(1),
        tanhPf: Z(1),
        exp: b(1),
        expm1: w(1),
        expm1Pf: L(1),
        log1p: S(10),
        log1pPf: N(10),
        powPI: k(-100)
    }
}

function Hh() {
    let t = ["cookieEnabled", "deviceMemory", "pdfViewerEnabled", "doNotTrack", "oscpu", "hardwareConcurrency", "language", "languages", "maxTouchPoints", "platform", "userAgent", "vendor", "cpuClass"],
        e = [];
    for (let n of t) e.push(navigator[n]);
    return e
}

function Rl() {
    let t = navigator.plugins;
    if (!t) return;
    let e = [];
    for (let n = 0; n < t.length; ++n) {
        let r = t[n];
        if (!r) continue;
        let o = [];
        for (let i = 0; i < r.length; ++i) {
            let a = r[i];
            o.push({
                type: a.type,
                suffixes: a.suffixes
            })
        }
        e.push({
            name: r.name,
            description: r.description,
            mimeTypes: o
        })
    }
    return e
}

function Yn(t, e) {
    return matchMedia("(".concat(t, ": ").concat(e, ")")).matches
}

function t6() {
    let t = "prefers-contrast";
    return Yn(t, "no-preference") ? 0 : Yn(t, "high") || Yn(t, "more") ? 1 : Yn(t, "low") || Yn(t, "less") ? 2 : Yn(t, "forced") ? 3 : -1
}

function n6() {
    if (!Yn("min-monochrome", "0")) return -1;
    for (let t = 0; t <= 100; ++t)
        if (Yn("min-monochrome", t + "")) return t
}
var r6 = [
    ["forced-colors", ["active", "none"]],
    ["dynamic-range", ["high", "standard"]],
    ["inverted-colors", ["high", "standard"]],
    ["prefers-reduced-motion", ["reduce", "no-preference"]],
    ["prefers-reduced-transparency", ["reduce", "no-preference"]],
    ["color-gamut", ["rec2020", "p3", "srgb"]]
];

function Kh() {
    let t = [t6(), n6()];
    for (let [e, n] of r6) {
        let r = -1;
        for (let o = 0; o < n.length; o++)
            if (Yn(e, n[o])) {
                r = o;
                break
            }
        t.push(r)
    }
}

function Vh() {
    try {
        let t = document.createElement("canvas"),
            e = t.getContext("webgl");
        if (!e) return null;
        t.width = 256, t.height = 128;
        let n = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
            r = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
            o = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, o);
        let i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .7321, 0]);
        e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), o.itemSize = 3, o.numItems = 3;
        let a = e.createProgram(),
            s = e.createShader(e.VERTEX_SHADER);
        if (!s) return null;
        e.shaderSource(s, n), e.compileShader(s);
        let c = e.createShader(e.FRAGMENT_SHADER);
        if (!c) return null;
        e.shaderSource(c, r), e.compileShader(c), e.attachShader(a, s), e.attachShader(a, c), e.linkProgram(a), e.useProgram(a), a.vertexPosAttrib = e.getAttribLocation(a, "attrVertex"), a.offsetUniform = e.getUniformLocation(a, "uniformOffset"), e.enableVertexAttribArray(a.vertexPosArray), e.vertexAttribPointer(a.vertexPosAttrib, o.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(a.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, o.numItems);
        let d = new Uint8Array(t.width * t.height * 4);
        e.readPixels(0, 0, t.width, t.height, e.RGBA, e.UNSIGNED_BYTE, d);
        let h = JSON.stringify(d).replace(/,?'[0-9]+':/g, "");
        return e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT | e.STENCIL_BUFFER_BIT), Ao(h)
    } catch {
        return null
    }
}

function jh() {
    try {
        let t = document.createElement("canvas").getContext("webgl");
        return t ? {
            VERSION: String(t.getParameter(t.VERSION)),
            SHADING_LANGUAGE_VERSION: String(t.getParameter(t.SHADING_LANGUAGE_VERSION)),
            VENDOR: String(t.getParameter(t.VENDOR)),
            SUPPORTED_EXTENSIONS: String(t.getSupportedExtensions())
        } : null
    } catch {
        return null
    }
}
async function o6() {
    var b;
    let t = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
        {
            width: e,
            height: n,
            colorDepth: r,
            pixelDepth: o
        } = t ? window.screen : {},
        i = new Date().getTimezoneOffset(),
        a = Intl.DateTimeFormat().resolvedOptions().timeZone,
        s = "ontouchstart" in window,
        c = window.devicePixelRatio,
        d = [Hh(), El(), Kh(), Vh(), jh(), Mh(), await Ph(), Bl(), r, c, n, o, a, i, s, e, i6(), a6(), +((b = window.openDatabase) != null ? b : -1), s6(), Il(), Rl()],
        h = JSON.stringify(d);
    return Ao(h)
}

function i6() {
    let t = window.ApplePaySession;
    if (typeof(t == null ? void 0 : t.canMakePayments) != "function") return 0;
    try {
        return t.canMakePayments() ? 1 : 2
    } catch (e) {
        return e instanceof Error && e.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(e.message) ? 3 : 4
    }
}

function a6() {
    let t = new Float32Array(1),
        e = new Uint8Array(t.buffer);
    return t[0] = 1 / 0, t[0] = t[0] - t[0], e[3]
}

function s6() {
    var n;
    let t = document.createElement("a"),
        e = (n = t.attributionSourceId) != null ? n : t.attributionsourceid;
    return e === 0 ? 0 : String(e)
}
export {
    ol as TonConnectUI, o6 as generateFingerprint, Zt as widgetController
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/