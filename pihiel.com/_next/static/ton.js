var pi = Object.create;
var kr = Object.defineProperty;
var hi = Object.getOwnPropertyDescriptor;
var gi = Object.getOwnPropertyNames;
var mi = Object.getPrototypeOf,
    yi = Object.prototype.hasOwnProperty;
var bi = (n, e, t) => e in n ? kr(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var xi = (n, e) => () => (e || n((e = {
    exports: {}
}).exports, e), e.exports);
var wi = (n, e, t, i) => {
    if (e && typeof e == "object" || typeof e == "function")
        for (let o of gi(e)) !yi.call(n, o) && o !== t && kr(n, o, {
            get: () => e[o],
            enumerable: !(i = hi(e, o)) || i.enumerable
        });
    return n
};
var Br = (n, e, t) => (t = n != null ? pi(mi(n)) : {}, wi(e || !n || !n.__esModule ? kr(t, "default", {
    value: n,
    enumerable: !0
}) : t, n));
var N = (n, e, t) => bi(n, typeof e != "symbol" ? e + "" : e, t);
var er = xi((Pu, Qt) => {
    (function(n) {
        "use strict";
        var e = function(a) {
                var l, s = new Float64Array(16);
                if (a)
                    for (l = 0; l < a.length; l++) s[l] = a[l];
                return s
            },
            t = function() {
                throw new Error("no PRNG")
            },
            i = new Uint8Array(16),
            o = new Uint8Array(32);
        o[0] = 9;
        var f = e(),
            d = e([1]),
            y = e([56129, 1]),
            p = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
            m = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
            U = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
            b = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
            k = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

        function T(a, l, s, r) {
            a[l] = s >> 24 & 255, a[l + 1] = s >> 16 & 255, a[l + 2] = s >> 8 & 255, a[l + 3] = s & 255, a[l + 4] = r >> 24 & 255, a[l + 5] = r >> 16 & 255, a[l + 6] = r >> 8 & 255, a[l + 7] = r & 255
        }

        function P(a, l, s, r, u) {
            var h, g = 0;
            for (h = 0; h < u; h++) g |= a[l + h] ^ s[r + h];
            return (1 & g - 1 >>> 8) - 1
        }

        function V(a, l, s, r) {
            return P(a, l, s, r, 16)
        }

        function Z(a, l, s, r) {
            return P(a, l, s, r, 32)
        }

        function we(a, l, s, r) {
            for (var u = r[0] & 255 | (r[1] & 255) << 8 | (r[2] & 255) << 16 | (r[3] & 255) << 24, h = s[0] & 255 | (s[1] & 255) << 8 | (s[2] & 255) << 16 | (s[3] & 255) << 24, g = s[4] & 255 | (s[5] & 255) << 8 | (s[6] & 255) << 16 | (s[7] & 255) << 24, S = s[8] & 255 | (s[9] & 255) << 8 | (s[10] & 255) << 16 | (s[11] & 255) << 24, _ = s[12] & 255 | (s[13] & 255) << 8 | (s[14] & 255) << 16 | (s[15] & 255) << 24, H = r[4] & 255 | (r[5] & 255) << 8 | (r[6] & 255) << 16 | (r[7] & 255) << 24, E = l[0] & 255 | (l[1] & 255) << 8 | (l[2] & 255) << 16 | (l[3] & 255) << 24, le = l[4] & 255 | (l[5] & 255) << 8 | (l[6] & 255) << 16 | (l[7] & 255) << 24, R = l[8] & 255 | (l[9] & 255) << 8 | (l[10] & 255) << 16 | (l[11] & 255) << 24, $ = l[12] & 255 | (l[13] & 255) << 8 | (l[14] & 255) << 16 | (l[15] & 255) << 24, Y = r[8] & 255 | (r[9] & 255) << 8 | (r[10] & 255) << 16 | (r[11] & 255) << 24, Q = s[16] & 255 | (s[17] & 255) << 8 | (s[18] & 255) << 16 | (s[19] & 255) << 24, J = s[20] & 255 | (s[21] & 255) << 8 | (s[22] & 255) << 16 | (s[23] & 255) << 24, G = s[24] & 255 | (s[25] & 255) << 8 | (s[26] & 255) << 16 | (s[27] & 255) << 24, X = s[28] & 255 | (s[29] & 255) << 8 | (s[30] & 255) << 16 | (s[31] & 255) << 24, W = r[12] & 255 | (r[13] & 255) << 8 | (r[14] & 255) << 16 | (r[15] & 255) << 24, D = u, O = h, z = g, L = S, j = _, M = H, w = E, v = le, C = R, B = $, A = Y, I = Q, F = J, ee = G, re = X, te = W, c, ie = 0; ie < 20; ie += 2) c = D + F | 0, j ^= c << 7 | c >>> 25, c = j + D | 0, C ^= c << 9 | c >>> 23, c = C + j | 0, F ^= c << 13 | c >>> 19, c = F + C | 0, D ^= c << 18 | c >>> 14, c = M + O | 0, B ^= c << 7 | c >>> 25, c = B + M | 0, ee ^= c << 9 | c >>> 23, c = ee + B | 0, O ^= c << 13 | c >>> 19, c = O + ee | 0, M ^= c << 18 | c >>> 14, c = A + w | 0, re ^= c << 7 | c >>> 25, c = re + A | 0, z ^= c << 9 | c >>> 23, c = z + re | 0, w ^= c << 13 | c >>> 19, c = w + z | 0, A ^= c << 18 | c >>> 14, c = te + I | 0, L ^= c << 7 | c >>> 25, c = L + te | 0, v ^= c << 9 | c >>> 23, c = v + L | 0, I ^= c << 13 | c >>> 19, c = I + v | 0, te ^= c << 18 | c >>> 14, c = D + L | 0, O ^= c << 7 | c >>> 25, c = O + D | 0, z ^= c << 9 | c >>> 23, c = z + O | 0, L ^= c << 13 | c >>> 19, c = L + z | 0, D ^= c << 18 | c >>> 14, c = M + j | 0, w ^= c << 7 | c >>> 25, c = w + M | 0, v ^= c << 9 | c >>> 23, c = v + w | 0, j ^= c << 13 | c >>> 19, c = j + v | 0, M ^= c << 18 | c >>> 14, c = A + B | 0, I ^= c << 7 | c >>> 25, c = I + A | 0, C ^= c << 9 | c >>> 23, c = C + I | 0, B ^= c << 13 | c >>> 19, c = B + C | 0, A ^= c << 18 | c >>> 14, c = te + re | 0, F ^= c << 7 | c >>> 25, c = F + te | 0, ee ^= c << 9 | c >>> 23, c = ee + F | 0, re ^= c << 13 | c >>> 19, c = re + ee | 0, te ^= c << 18 | c >>> 14;
            D = D + u | 0, O = O + h | 0, z = z + g | 0, L = L + S | 0, j = j + _ | 0, M = M + H | 0, w = w + E | 0, v = v + le | 0, C = C + R | 0, B = B + $ | 0, A = A + Y | 0, I = I + Q | 0, F = F + J | 0, ee = ee + G | 0, re = re + X | 0, te = te + W | 0, a[0] = D >>> 0 & 255, a[1] = D >>> 8 & 255, a[2] = D >>> 16 & 255, a[3] = D >>> 24 & 255, a[4] = O >>> 0 & 255, a[5] = O >>> 8 & 255, a[6] = O >>> 16 & 255, a[7] = O >>> 24 & 255, a[8] = z >>> 0 & 255, a[9] = z >>> 8 & 255, a[10] = z >>> 16 & 255, a[11] = z >>> 24 & 255, a[12] = L >>> 0 & 255, a[13] = L >>> 8 & 255, a[14] = L >>> 16 & 255, a[15] = L >>> 24 & 255, a[16] = j >>> 0 & 255, a[17] = j >>> 8 & 255, a[18] = j >>> 16 & 255, a[19] = j >>> 24 & 255, a[20] = M >>> 0 & 255, a[21] = M >>> 8 & 255, a[22] = M >>> 16 & 255, a[23] = M >>> 24 & 255, a[24] = w >>> 0 & 255, a[25] = w >>> 8 & 255, a[26] = w >>> 16 & 255, a[27] = w >>> 24 & 255, a[28] = v >>> 0 & 255, a[29] = v >>> 8 & 255, a[30] = v >>> 16 & 255, a[31] = v >>> 24 & 255, a[32] = C >>> 0 & 255, a[33] = C >>> 8 & 255, a[34] = C >>> 16 & 255, a[35] = C >>> 24 & 255, a[36] = B >>> 0 & 255, a[37] = B >>> 8 & 255, a[38] = B >>> 16 & 255, a[39] = B >>> 24 & 255, a[40] = A >>> 0 & 255, a[41] = A >>> 8 & 255, a[42] = A >>> 16 & 255, a[43] = A >>> 24 & 255, a[44] = I >>> 0 & 255, a[45] = I >>> 8 & 255, a[46] = I >>> 16 & 255, a[47] = I >>> 24 & 255, a[48] = F >>> 0 & 255, a[49] = F >>> 8 & 255, a[50] = F >>> 16 & 255, a[51] = F >>> 24 & 255, a[52] = ee >>> 0 & 255, a[53] = ee >>> 8 & 255, a[54] = ee >>> 16 & 255, a[55] = ee >>> 24 & 255, a[56] = re >>> 0 & 255, a[57] = re >>> 8 & 255, a[58] = re >>> 16 & 255, a[59] = re >>> 24 & 255, a[60] = te >>> 0 & 255, a[61] = te >>> 8 & 255, a[62] = te >>> 16 & 255, a[63] = te >>> 24 & 255
        }

        function he(a, l, s, r) {
            for (var u = r[0] & 255 | (r[1] & 255) << 8 | (r[2] & 255) << 16 | (r[3] & 255) << 24, h = s[0] & 255 | (s[1] & 255) << 8 | (s[2] & 255) << 16 | (s[3] & 255) << 24, g = s[4] & 255 | (s[5] & 255) << 8 | (s[6] & 255) << 16 | (s[7] & 255) << 24, S = s[8] & 255 | (s[9] & 255) << 8 | (s[10] & 255) << 16 | (s[11] & 255) << 24, _ = s[12] & 255 | (s[13] & 255) << 8 | (s[14] & 255) << 16 | (s[15] & 255) << 24, H = r[4] & 255 | (r[5] & 255) << 8 | (r[6] & 255) << 16 | (r[7] & 255) << 24, E = l[0] & 255 | (l[1] & 255) << 8 | (l[2] & 255) << 16 | (l[3] & 255) << 24, le = l[4] & 255 | (l[5] & 255) << 8 | (l[6] & 255) << 16 | (l[7] & 255) << 24, R = l[8] & 255 | (l[9] & 255) << 8 | (l[10] & 255) << 16 | (l[11] & 255) << 24, $ = l[12] & 255 | (l[13] & 255) << 8 | (l[14] & 255) << 16 | (l[15] & 255) << 24, Y = r[8] & 255 | (r[9] & 255) << 8 | (r[10] & 255) << 16 | (r[11] & 255) << 24, Q = s[16] & 255 | (s[17] & 255) << 8 | (s[18] & 255) << 16 | (s[19] & 255) << 24, J = s[20] & 255 | (s[21] & 255) << 8 | (s[22] & 255) << 16 | (s[23] & 255) << 24, G = s[24] & 255 | (s[25] & 255) << 8 | (s[26] & 255) << 16 | (s[27] & 255) << 24, X = s[28] & 255 | (s[29] & 255) << 8 | (s[30] & 255) << 16 | (s[31] & 255) << 24, W = r[12] & 255 | (r[13] & 255) << 8 | (r[14] & 255) << 16 | (r[15] & 255) << 24, D = u, O = h, z = g, L = S, j = _, M = H, w = E, v = le, C = R, B = $, A = Y, I = Q, F = J, ee = G, re = X, te = W, c, ie = 0; ie < 20; ie += 2) c = D + F | 0, j ^= c << 7 | c >>> 25, c = j + D | 0, C ^= c << 9 | c >>> 23, c = C + j | 0, F ^= c << 13 | c >>> 19, c = F + C | 0, D ^= c << 18 | c >>> 14, c = M + O | 0, B ^= c << 7 | c >>> 25, c = B + M | 0, ee ^= c << 9 | c >>> 23, c = ee + B | 0, O ^= c << 13 | c >>> 19, c = O + ee | 0, M ^= c << 18 | c >>> 14, c = A + w | 0, re ^= c << 7 | c >>> 25, c = re + A | 0, z ^= c << 9 | c >>> 23, c = z + re | 0, w ^= c << 13 | c >>> 19, c = w + z | 0, A ^= c << 18 | c >>> 14, c = te + I | 0, L ^= c << 7 | c >>> 25, c = L + te | 0, v ^= c << 9 | c >>> 23, c = v + L | 0, I ^= c << 13 | c >>> 19, c = I + v | 0, te ^= c << 18 | c >>> 14, c = D + L | 0, O ^= c << 7 | c >>> 25, c = O + D | 0, z ^= c << 9 | c >>> 23, c = z + O | 0, L ^= c << 13 | c >>> 19, c = L + z | 0, D ^= c << 18 | c >>> 14, c = M + j | 0, w ^= c << 7 | c >>> 25, c = w + M | 0, v ^= c << 9 | c >>> 23, c = v + w | 0, j ^= c << 13 | c >>> 19, c = j + v | 0, M ^= c << 18 | c >>> 14, c = A + B | 0, I ^= c << 7 | c >>> 25, c = I + A | 0, C ^= c << 9 | c >>> 23, c = C + I | 0, B ^= c << 13 | c >>> 19, c = B + C | 0, A ^= c << 18 | c >>> 14, c = te + re | 0, F ^= c << 7 | c >>> 25, c = F + te | 0, ee ^= c << 9 | c >>> 23, c = ee + F | 0, re ^= c << 13 | c >>> 19, c = re + ee | 0, te ^= c << 18 | c >>> 14;
            a[0] = D >>> 0 & 255, a[1] = D >>> 8 & 255, a[2] = D >>> 16 & 255, a[3] = D >>> 24 & 255, a[4] = M >>> 0 & 255, a[5] = M >>> 8 & 255, a[6] = M >>> 16 & 255, a[7] = M >>> 24 & 255, a[8] = A >>> 0 & 255, a[9] = A >>> 8 & 255, a[10] = A >>> 16 & 255, a[11] = A >>> 24 & 255, a[12] = te >>> 0 & 255, a[13] = te >>> 8 & 255, a[14] = te >>> 16 & 255, a[15] = te >>> 24 & 255, a[16] = w >>> 0 & 255, a[17] = w >>> 8 & 255, a[18] = w >>> 16 & 255, a[19] = w >>> 24 & 255, a[20] = v >>> 0 & 255, a[21] = v >>> 8 & 255, a[22] = v >>> 16 & 255, a[23] = v >>> 24 & 255, a[24] = C >>> 0 & 255, a[25] = C >>> 8 & 255, a[26] = C >>> 16 & 255, a[27] = C >>> 24 & 255, a[28] = B >>> 0 & 255, a[29] = B >>> 8 & 255, a[30] = B >>> 16 & 255, a[31] = B >>> 24 & 255
        }

        function ve(a, l, s, r) {
            we(a, l, s, r)
        }

        function pe(a, l, s, r) {
            he(a, l, s, r)
        }
        var ke = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

        function et(a, l, s, r, u, h, g) {
            var S = new Uint8Array(16),
                _ = new Uint8Array(64),
                H, E;
            for (E = 0; E < 16; E++) S[E] = 0;
            for (E = 0; E < 8; E++) S[E] = h[E];
            for (; u >= 64;) {
                for (ve(_, S, g, ke), E = 0; E < 64; E++) a[l + E] = s[r + E] ^ _[E];
                for (H = 1, E = 8; E < 16; E++) H = H + (S[E] & 255) | 0, S[E] = H & 255, H >>>= 8;
                u -= 64, l += 64, r += 64
            }
            if (u > 0)
                for (ve(_, S, g, ke), E = 0; E < u; E++) a[l + E] = s[r + E] ^ _[E];
            return 0
        }

        function Kt(a, l, s, r, u) {
            var h = new Uint8Array(16),
                g = new Uint8Array(64),
                S, _;
            for (_ = 0; _ < 16; _++) h[_] = 0;
            for (_ = 0; _ < 8; _++) h[_] = r[_];
            for (; s >= 64;) {
                for (ve(g, h, u, ke), _ = 0; _ < 64; _++) a[l + _] = g[_];
                for (S = 1, _ = 8; _ < 16; _++) S = S + (h[_] & 255) | 0, h[_] = S & 255, S >>>= 8;
                s -= 64, l += 64
            }
            if (s > 0)
                for (ve(g, h, u, ke), _ = 0; _ < s; _++) a[l + _] = g[_];
            return 0
        }

        function Wr(a, l, s, r, u) {
            var h = new Uint8Array(32);
            pe(h, r, u, ke);
            for (var g = new Uint8Array(8), S = 0; S < 8; S++) g[S] = r[S + 16];
            return Kt(a, l, s, g, h)
        }

        function or(a, l, s, r, u, h, g) {
            var S = new Uint8Array(32);
            pe(S, h, g, ke);
            for (var _ = new Uint8Array(8), H = 0; H < 8; H++) _[H] = h[H + 16];
            return et(a, l, s, r, u, _, S)
        }
        var Lt = function(a) {
            this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0;
            var l, s, r, u, h, g, S, _;
            l = a[0] & 255 | (a[1] & 255) << 8, this.r[0] = l & 8191, s = a[2] & 255 | (a[3] & 255) << 8, this.r[1] = (l >>> 13 | s << 3) & 8191, r = a[4] & 255 | (a[5] & 255) << 8, this.r[2] = (s >>> 10 | r << 6) & 7939, u = a[6] & 255 | (a[7] & 255) << 8, this.r[3] = (r >>> 7 | u << 9) & 8191, h = a[8] & 255 | (a[9] & 255) << 8, this.r[4] = (u >>> 4 | h << 12) & 255, this.r[5] = h >>> 1 & 8190, g = a[10] & 255 | (a[11] & 255) << 8, this.r[6] = (h >>> 14 | g << 2) & 8191, S = a[12] & 255 | (a[13] & 255) << 8, this.r[7] = (g >>> 11 | S << 5) & 8065, _ = a[14] & 255 | (a[15] & 255) << 8, this.r[8] = (S >>> 8 | _ << 8) & 8191, this.r[9] = _ >>> 5 & 127, this.pad[0] = a[16] & 255 | (a[17] & 255) << 8, this.pad[1] = a[18] & 255 | (a[19] & 255) << 8, this.pad[2] = a[20] & 255 | (a[21] & 255) << 8, this.pad[3] = a[22] & 255 | (a[23] & 255) << 8, this.pad[4] = a[24] & 255 | (a[25] & 255) << 8, this.pad[5] = a[26] & 255 | (a[27] & 255) << 8, this.pad[6] = a[28] & 255 | (a[29] & 255) << 8, this.pad[7] = a[30] & 255 | (a[31] & 255) << 8
        };
        Lt.prototype.blocks = function(a, l, s) {
            for (var r = this.fin ? 0 : 2048, u, h, g, S, _, H, E, le, R, $, Y, Q, J, G, X, W, D, O, z, L = this.h[0], j = this.h[1], M = this.h[2], w = this.h[3], v = this.h[4], C = this.h[5], B = this.h[6], A = this.h[7], I = this.h[8], F = this.h[9], ee = this.r[0], re = this.r[1], te = this.r[2], c = this.r[3], ie = this.r[4], ue = this.r[5], fe = this.r[6], ne = this.r[7], oe = this.r[8], se = this.r[9]; s >= 16;) u = a[l + 0] & 255 | (a[l + 1] & 255) << 8, L += u & 8191, h = a[l + 2] & 255 | (a[l + 3] & 255) << 8, j += (u >>> 13 | h << 3) & 8191, g = a[l + 4] & 255 | (a[l + 5] & 255) << 8, M += (h >>> 10 | g << 6) & 8191, S = a[l + 6] & 255 | (a[l + 7] & 255) << 8, w += (g >>> 7 | S << 9) & 8191, _ = a[l + 8] & 255 | (a[l + 9] & 255) << 8, v += (S >>> 4 | _ << 12) & 8191, C += _ >>> 1 & 8191, H = a[l + 10] & 255 | (a[l + 11] & 255) << 8, B += (_ >>> 14 | H << 2) & 8191, E = a[l + 12] & 255 | (a[l + 13] & 255) << 8, A += (H >>> 11 | E << 5) & 8191, le = a[l + 14] & 255 | (a[l + 15] & 255) << 8, I += (E >>> 8 | le << 8) & 8191, F += le >>> 5 | r, R = 0, $ = R, $ += L * ee, $ += j * (5 * se), $ += M * (5 * oe), $ += w * (5 * ne), $ += v * (5 * fe), R = $ >>> 13, $ &= 8191, $ += C * (5 * ue), $ += B * (5 * ie), $ += A * (5 * c), $ += I * (5 * te), $ += F * (5 * re), R += $ >>> 13, $ &= 8191, Y = R, Y += L * re, Y += j * ee, Y += M * (5 * se), Y += w * (5 * oe), Y += v * (5 * ne), R = Y >>> 13, Y &= 8191, Y += C * (5 * fe), Y += B * (5 * ue), Y += A * (5 * ie), Y += I * (5 * c), Y += F * (5 * te), R += Y >>> 13, Y &= 8191, Q = R, Q += L * te, Q += j * re, Q += M * ee, Q += w * (5 * se), Q += v * (5 * oe), R = Q >>> 13, Q &= 8191, Q += C * (5 * ne), Q += B * (5 * fe), Q += A * (5 * ue), Q += I * (5 * ie), Q += F * (5 * c), R += Q >>> 13, Q &= 8191, J = R, J += L * c, J += j * te, J += M * re, J += w * ee, J += v * (5 * se), R = J >>> 13, J &= 8191, J += C * (5 * oe), J += B * (5 * ne), J += A * (5 * fe), J += I * (5 * ue), J += F * (5 * ie), R += J >>> 13, J &= 8191, G = R, G += L * ie, G += j * c, G += M * te, G += w * re, G += v * ee, R = G >>> 13, G &= 8191, G += C * (5 * se), G += B * (5 * oe), G += A * (5 * ne), G += I * (5 * fe), G += F * (5 * ue), R += G >>> 13, G &= 8191, X = R, X += L * ue, X += j * ie, X += M * c, X += w * te, X += v * re, R = X >>> 13, X &= 8191, X += C * ee, X += B * (5 * se), X += A * (5 * oe), X += I * (5 * ne), X += F * (5 * fe), R += X >>> 13, X &= 8191, W = R, W += L * fe, W += j * ue, W += M * ie, W += w * c, W += v * te, R = W >>> 13, W &= 8191, W += C * re, W += B * ee, W += A * (5 * se), W += I * (5 * oe), W += F * (5 * ne), R += W >>> 13, W &= 8191, D = R, D += L * ne, D += j * fe, D += M * ue, D += w * ie, D += v * c, R = D >>> 13, D &= 8191, D += C * te, D += B * re, D += A * ee, D += I * (5 * se), D += F * (5 * oe), R += D >>> 13, D &= 8191, O = R, O += L * oe, O += j * ne, O += M * fe, O += w * ue, O += v * ie, R = O >>> 13, O &= 8191, O += C * c, O += B * te, O += A * re, O += I * ee, O += F * (5 * se), R += O >>> 13, O &= 8191, z = R, z += L * se, z += j * oe, z += M * ne, z += w * fe, z += v * ue, R = z >>> 13, z &= 8191, z += C * ie, z += B * c, z += A * te, z += I * re, z += F * ee, R += z >>> 13, z &= 8191, R = (R << 2) + R | 0, R = R + $ | 0, $ = R & 8191, R = R >>> 13, Y += R, L = $, j = Y, M = Q, w = J, v = G, C = X, B = W, A = D, I = O, F = z, l += 16, s -= 16;
            this.h[0] = L, this.h[1] = j, this.h[2] = M, this.h[3] = w, this.h[4] = v, this.h[5] = C, this.h[6] = B, this.h[7] = A, this.h[8] = I, this.h[9] = F
        }, Lt.prototype.finish = function(a, l) {
            var s = new Uint16Array(10),
                r, u, h, g;
            if (this.leftover) {
                for (g = this.leftover, this.buffer[g++] = 1; g < 16; g++) this.buffer[g] = 0;
                this.fin = 1, this.blocks(this.buffer, 0, 16)
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, g = 2; g < 10; g++) this.h[g] += r, r = this.h[g] >>> 13, this.h[g] &= 8191;
            for (this.h[0] += r * 5, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, s[0] = this.h[0] + 5, r = s[0] >>> 13, s[0] &= 8191, g = 1; g < 10; g++) s[g] = this.h[g] + r, r = s[g] >>> 13, s[g] &= 8191;
            for (s[9] -= 8192, u = (r ^ 1) - 1, g = 0; g < 10; g++) s[g] &= u;
            for (u = ~u, g = 0; g < 10; g++) this.h[g] = this.h[g] & u | s[g];
            for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, h = this.h[0] + this.pad[0], this.h[0] = h & 65535, g = 1; g < 8; g++) h = (this.h[g] + this.pad[g] | 0) + (h >>> 16) | 0, this.h[g] = h & 65535;
            a[l + 0] = this.h[0] >>> 0 & 255, a[l + 1] = this.h[0] >>> 8 & 255, a[l + 2] = this.h[1] >>> 0 & 255, a[l + 3] = this.h[1] >>> 8 & 255, a[l + 4] = this.h[2] >>> 0 & 255, a[l + 5] = this.h[2] >>> 8 & 255, a[l + 6] = this.h[3] >>> 0 & 255, a[l + 7] = this.h[3] >>> 8 & 255, a[l + 8] = this.h[4] >>> 0 & 255, a[l + 9] = this.h[4] >>> 8 & 255, a[l + 10] = this.h[5] >>> 0 & 255, a[l + 11] = this.h[5] >>> 8 & 255, a[l + 12] = this.h[6] >>> 0 & 255, a[l + 13] = this.h[6] >>> 8 & 255, a[l + 14] = this.h[7] >>> 0 & 255, a[l + 15] = this.h[7] >>> 8 & 255
        }, Lt.prototype.update = function(a, l, s) {
            var r, u;
            if (this.leftover) {
                for (u = 16 - this.leftover, u > s && (u = s), r = 0; r < u; r++) this.buffer[this.leftover + r] = a[l + r];
                if (s -= u, l += u, this.leftover += u, this.leftover < 16) return;
                this.blocks(this.buffer, 0, 16), this.leftover = 0
            }
            if (s >= 16 && (u = s - s % 16, this.blocks(a, l, u), l += u, s -= u), s) {
                for (r = 0; r < s; r++) this.buffer[this.leftover + r] = a[l + r];
                this.leftover += s
            }
        };

        function sr(a, l, s, r, u, h) {
            var g = new Lt(h);
            return g.update(s, r, u), g.finish(a, l), 0
        }

        function Xr(a, l, s, r, u, h) {
            var g = new Uint8Array(16);
            return sr(g, 0, s, r, u, h), V(a, l, g, 0)
        }

        function lr(a, l, s, r, u) {
            var h;
            if (s < 32) return -1;
            for (or(a, 0, l, 0, s, r, u), sr(a, 16, a, 32, s - 32, a), h = 0; h < 16; h++) a[h] = 0;
            return 0
        }

        function ur(a, l, s, r, u) {
            var h, g = new Uint8Array(32);
            if (s < 32 || (Wr(g, 0, 32, r, u), Xr(l, 16, l, 32, s - 32, g) !== 0)) return -1;
            for (or(a, 0, l, 0, s, r, u), h = 0; h < 32; h++) a[h] = 0;
            return 0
        }

        function qe(a, l) {
            var s;
            for (s = 0; s < 16; s++) a[s] = l[s] | 0
        }

        function fr(a) {
            var l, s, r = 1;
            for (l = 0; l < 16; l++) s = a[l] + r + 65535, r = Math.floor(s / 65536), a[l] = s - r * 65536;
            a[0] += r - 1 + 37 * (r - 1)
        }

        function lt(a, l, s) {
            for (var r, u = ~(s - 1), h = 0; h < 16; h++) r = u & (a[h] ^ l[h]), a[h] ^= r, l[h] ^= r
        }

        function ut(a, l) {
            var s, r, u, h = e(),
                g = e();
            for (s = 0; s < 16; s++) g[s] = l[s];
            for (fr(g), fr(g), fr(g), r = 0; r < 2; r++) {
                for (h[0] = g[0] - 65517, s = 1; s < 15; s++) h[s] = g[s] - 65535 - (h[s - 1] >> 16 & 1), h[s - 1] &= 65535;
                h[15] = g[15] - 32767 - (h[14] >> 16 & 1), u = h[15] >> 16 & 1, h[14] &= 65535, lt(g, h, 1 - u)
            }
            for (s = 0; s < 16; s++) a[2 * s] = g[s] & 255, a[2 * s + 1] = g[s] >> 8
        }

        function Zr(a, l) {
            var s = new Uint8Array(32),
                r = new Uint8Array(32);
            return ut(s, a), ut(r, l), Z(s, 0, r, 0)
        }

        function Jr(a) {
            var l = new Uint8Array(32);
            return ut(l, a), l[0] & 1
        }

        function cr(a, l) {
            var s;
            for (s = 0; s < 16; s++) a[s] = l[2 * s] + (l[2 * s + 1] << 8);
            a[15] &= 32767
        }

        function Le(a, l, s) {
            for (var r = 0; r < 16; r++) a[r] = l[r] + s[r]
        }

        function Ve(a, l, s) {
            for (var r = 0; r < 16; r++) a[r] = l[r] - s[r]
        }

        function ae(a, l, s) {
            var r, u, h = 0,
                g = 0,
                S = 0,
                _ = 0,
                H = 0,
                E = 0,
                le = 0,
                R = 0,
                $ = 0,
                Y = 0,
                Q = 0,
                J = 0,
                G = 0,
                X = 0,
                W = 0,
                D = 0,
                O = 0,
                z = 0,
                L = 0,
                j = 0,
                M = 0,
                w = 0,
                v = 0,
                C = 0,
                B = 0,
                A = 0,
                I = 0,
                F = 0,
                ee = 0,
                re = 0,
                te = 0,
                c = s[0],
                ie = s[1],
                ue = s[2],
                fe = s[3],
                ne = s[4],
                oe = s[5],
                se = s[6],
                be = s[7],
                ce = s[8],
                ge = s[9],
                me = s[10],
                ye = s[11],
                Be = s[12],
                Ue = s[13],
                Ce = s[14],
                Ie = s[15];
            r = l[0], h += r * c, g += r * ie, S += r * ue, _ += r * fe, H += r * ne, E += r * oe, le += r * se, R += r * be, $ += r * ce, Y += r * ge, Q += r * me, J += r * ye, G += r * Be, X += r * Ue, W += r * Ce, D += r * Ie, r = l[1], g += r * c, S += r * ie, _ += r * ue, H += r * fe, E += r * ne, le += r * oe, R += r * se, $ += r * be, Y += r * ce, Q += r * ge, J += r * me, G += r * ye, X += r * Be, W += r * Ue, D += r * Ce, O += r * Ie, r = l[2], S += r * c, _ += r * ie, H += r * ue, E += r * fe, le += r * ne, R += r * oe, $ += r * se, Y += r * be, Q += r * ce, J += r * ge, G += r * me, X += r * ye, W += r * Be, D += r * Ue, O += r * Ce, z += r * Ie, r = l[3], _ += r * c, H += r * ie, E += r * ue, le += r * fe, R += r * ne, $ += r * oe, Y += r * se, Q += r * be, J += r * ce, G += r * ge, X += r * me, W += r * ye, D += r * Be, O += r * Ue, z += r * Ce, L += r * Ie, r = l[4], H += r * c, E += r * ie, le += r * ue, R += r * fe, $ += r * ne, Y += r * oe, Q += r * se, J += r * be, G += r * ce, X += r * ge, W += r * me, D += r * ye, O += r * Be, z += r * Ue, L += r * Ce, j += r * Ie, r = l[5], E += r * c, le += r * ie, R += r * ue, $ += r * fe, Y += r * ne, Q += r * oe, J += r * se, G += r * be, X += r * ce, W += r * ge, D += r * me, O += r * ye, z += r * Be, L += r * Ue, j += r * Ce, M += r * Ie, r = l[6], le += r * c, R += r * ie, $ += r * ue, Y += r * fe, Q += r * ne, J += r * oe, G += r * se, X += r * be, W += r * ce, D += r * ge, O += r * me, z += r * ye, L += r * Be, j += r * Ue, M += r * Ce, w += r * Ie, r = l[7], R += r * c, $ += r * ie, Y += r * ue, Q += r * fe, J += r * ne, G += r * oe, X += r * se, W += r * be, D += r * ce, O += r * ge, z += r * me, L += r * ye, j += r * Be, M += r * Ue, w += r * Ce, v += r * Ie, r = l[8], $ += r * c, Y += r * ie, Q += r * ue, J += r * fe, G += r * ne, X += r * oe, W += r * se, D += r * be, O += r * ce, z += r * ge, L += r * me, j += r * ye, M += r * Be, w += r * Ue, v += r * Ce, C += r * Ie, r = l[9], Y += r * c, Q += r * ie, J += r * ue, G += r * fe, X += r * ne, W += r * oe, D += r * se, O += r * be, z += r * ce, L += r * ge, j += r * me, M += r * ye, w += r * Be, v += r * Ue, C += r * Ce, B += r * Ie, r = l[10], Q += r * c, J += r * ie, G += r * ue, X += r * fe, W += r * ne, D += r * oe, O += r * se, z += r * be, L += r * ce, j += r * ge, M += r * me, w += r * ye, v += r * Be, C += r * Ue, B += r * Ce, A += r * Ie, r = l[11], J += r * c, G += r * ie, X += r * ue, W += r * fe, D += r * ne, O += r * oe, z += r * se, L += r * be, j += r * ce, M += r * ge, w += r * me, v += r * ye, C += r * Be, B += r * Ue, A += r * Ce, I += r * Ie, r = l[12], G += r * c, X += r * ie, W += r * ue, D += r * fe, O += r * ne, z += r * oe, L += r * se, j += r * be, M += r * ce, w += r * ge, v += r * me, C += r * ye, B += r * Be, A += r * Ue, I += r * Ce, F += r * Ie, r = l[13], X += r * c, W += r * ie, D += r * ue, O += r * fe, z += r * ne, L += r * oe, j += r * se, M += r * be, w += r * ce, v += r * ge, C += r * me, B += r * ye, A += r * Be, I += r * Ue, F += r * Ce, ee += r * Ie, r = l[14], W += r * c, D += r * ie, O += r * ue, z += r * fe, L += r * ne, j += r * oe, M += r * se, w += r * be, v += r * ce, C += r * ge, B += r * me, A += r * ye, I += r * Be, F += r * Ue, ee += r * Ce, re += r * Ie, r = l[15], D += r * c, O += r * ie, z += r * ue, L += r * fe, j += r * ne, M += r * oe, w += r * se, v += r * be, C += r * ce, B += r * ge, A += r * me, I += r * ye, F += r * Be, ee += r * Ue, re += r * Ce, te += r * Ie, h += 38 * O, g += 38 * z, S += 38 * L, _ += 38 * j, H += 38 * M, E += 38 * w, le += 38 * v, R += 38 * C, $ += 38 * B, Y += 38 * A, Q += 38 * I, J += 38 * F, G += 38 * ee, X += 38 * re, W += 38 * te, u = 1, r = h + u + 65535, u = Math.floor(r / 65536), h = r - u * 65536, r = g + u + 65535, u = Math.floor(r / 65536), g = r - u * 65536, r = S + u + 65535, u = Math.floor(r / 65536), S = r - u * 65536, r = _ + u + 65535, u = Math.floor(r / 65536), _ = r - u * 65536, r = H + u + 65535, u = Math.floor(r / 65536), H = r - u * 65536, r = E + u + 65535, u = Math.floor(r / 65536), E = r - u * 65536, r = le + u + 65535, u = Math.floor(r / 65536), le = r - u * 65536, r = R + u + 65535, u = Math.floor(r / 65536), R = r - u * 65536, r = $ + u + 65535, u = Math.floor(r / 65536), $ = r - u * 65536, r = Y + u + 65535, u = Math.floor(r / 65536), Y = r - u * 65536, r = Q + u + 65535, u = Math.floor(r / 65536), Q = r - u * 65536, r = J + u + 65535, u = Math.floor(r / 65536), J = r - u * 65536, r = G + u + 65535, u = Math.floor(r / 65536), G = r - u * 65536, r = X + u + 65535, u = Math.floor(r / 65536), X = r - u * 65536, r = W + u + 65535, u = Math.floor(r / 65536), W = r - u * 65536, r = D + u + 65535, u = Math.floor(r / 65536), D = r - u * 65536, h += u - 1 + 37 * (u - 1), u = 1, r = h + u + 65535, u = Math.floor(r / 65536), h = r - u * 65536, r = g + u + 65535, u = Math.floor(r / 65536), g = r - u * 65536, r = S + u + 65535, u = Math.floor(r / 65536), S = r - u * 65536, r = _ + u + 65535, u = Math.floor(r / 65536), _ = r - u * 65536, r = H + u + 65535, u = Math.floor(r / 65536), H = r - u * 65536, r = E + u + 65535, u = Math.floor(r / 65536), E = r - u * 65536, r = le + u + 65535, u = Math.floor(r / 65536), le = r - u * 65536, r = R + u + 65535, u = Math.floor(r / 65536), R = r - u * 65536, r = $ + u + 65535, u = Math.floor(r / 65536), $ = r - u * 65536, r = Y + u + 65535, u = Math.floor(r / 65536), Y = r - u * 65536, r = Q + u + 65535, u = Math.floor(r / 65536), Q = r - u * 65536, r = J + u + 65535, u = Math.floor(r / 65536), J = r - u * 65536, r = G + u + 65535, u = Math.floor(r / 65536), G = r - u * 65536, r = X + u + 65535, u = Math.floor(r / 65536), X = r - u * 65536, r = W + u + 65535, u = Math.floor(r / 65536), W = r - u * 65536, r = D + u + 65535, u = Math.floor(r / 65536), D = r - u * 65536, h += u - 1 + 37 * (u - 1), a[0] = h, a[1] = g, a[2] = S, a[3] = _, a[4] = H, a[5] = E, a[6] = le, a[7] = R, a[8] = $, a[9] = Y, a[10] = Q, a[11] = J, a[12] = G, a[13] = X, a[14] = W, a[15] = D
        }

        function Ne(a, l) {
            ae(a, l, l)
        }

        function Qr(a, l) {
            var s = e(),
                r;
            for (r = 0; r < 16; r++) s[r] = l[r];
            for (r = 253; r >= 0; r--) Ne(s, s), r !== 2 && r !== 4 && ae(s, s, l);
            for (r = 0; r < 16; r++) a[r] = s[r]
        }

        function en(a, l) {
            var s = e(),
                r;
            for (r = 0; r < 16; r++) s[r] = l[r];
            for (r = 250; r >= 0; r--) Ne(s, s), r !== 1 && ae(s, s, l);
            for (r = 0; r < 16; r++) a[r] = s[r]
        }

        function Vt(a, l, s) {
            var r = new Uint8Array(32),
                u = new Float64Array(80),
                h, g, S = e(),
                _ = e(),
                H = e(),
                E = e(),
                le = e(),
                R = e();
            for (g = 0; g < 31; g++) r[g] = l[g];
            for (r[31] = l[31] & 127 | 64, r[0] &= 248, cr(u, s), g = 0; g < 16; g++) _[g] = u[g], E[g] = S[g] = H[g] = 0;
            for (S[0] = E[0] = 1, g = 254; g >= 0; --g) h = r[g >>> 3] >>> (g & 7) & 1, lt(S, _, h), lt(H, E, h), Le(le, S, H), Ve(S, S, H), Le(H, _, E), Ve(_, _, E), Ne(E, le), Ne(R, S), ae(S, H, S), ae(H, _, le), Le(le, S, H), Ve(S, S, H), Ne(_, S), Ve(H, E, R), ae(S, H, y), Le(S, S, E), ae(H, H, S), ae(S, E, R), ae(E, _, u), Ne(_, le), lt(S, _, h), lt(H, E, h);
            for (g = 0; g < 16; g++) u[g + 16] = S[g], u[g + 32] = H[g], u[g + 48] = _[g], u[g + 64] = E[g];
            var $ = u.subarray(32),
                Y = u.subarray(16);
            return Qr($, $), ae(Y, Y, $), ut(a, Y), 0
        }

        function jt(a, l) {
            return Vt(a, l, o)
        }

        function tn(a, l) {
            return t(l, 32), jt(a, l)
        }

        function Ht(a, l, s) {
            var r = new Uint8Array(32);
            return Vt(r, s, l), pe(a, i, r, ke)
        }
        var rn = lr,
            ai = ur;

        function oi(a, l, s, r, u, h) {
            var g = new Uint8Array(32);
            return Ht(g, u, h), rn(a, l, s, r, g)
        }

        function si(a, l, s, r, u, h) {
            var g = new Uint8Array(32);
            return Ht(g, u, h), ai(a, l, s, r, g)
        }
        var nn = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function an(a, l, s, r) {
            for (var u = new Int32Array(16), h = new Int32Array(16), g, S, _, H, E, le, R, $, Y, Q, J, G, X, W, D, O, z, L, j, M, w, v, C, B, A, I, F = a[0], ee = a[1], re = a[2], te = a[3], c = a[4], ie = a[5], ue = a[6], fe = a[7], ne = l[0], oe = l[1], se = l[2], be = l[3], ce = l[4], ge = l[5], me = l[6], ye = l[7], Be = 0; r >= 128;) {
                for (j = 0; j < 16; j++) M = 8 * j + Be, u[j] = s[M + 0] << 24 | s[M + 1] << 16 | s[M + 2] << 8 | s[M + 3], h[j] = s[M + 4] << 24 | s[M + 5] << 16 | s[M + 6] << 8 | s[M + 7];
                for (j = 0; j < 80; j++)
                    if (g = F, S = ee, _ = re, H = te, E = c, le = ie, R = ue, $ = fe, Y = ne, Q = oe, J = se, G = be, X = ce, W = ge, D = me, O = ye, w = fe, v = ye, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = (c >>> 14 | ce << 18) ^ (c >>> 18 | ce << 14) ^ (ce >>> 9 | c << 23), v = (ce >>> 14 | c << 18) ^ (ce >>> 18 | c << 14) ^ (c >>> 9 | ce << 23), C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, w = c & ie ^ ~c & ue, v = ce & ge ^ ~ce & me, C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, w = nn[j * 2], v = nn[j * 2 + 1], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, w = u[j % 16], v = h[j % 16], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, z = A & 65535 | I << 16, L = C & 65535 | B << 16, w = z, v = L, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = (F >>> 28 | ne << 4) ^ (ne >>> 2 | F << 30) ^ (ne >>> 7 | F << 25), v = (ne >>> 28 | F << 4) ^ (F >>> 2 | ne << 30) ^ (F >>> 7 | ne << 25), C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, w = F & ee ^ F & re ^ ee & re, v = ne & oe ^ ne & se ^ oe & se, C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, $ = A & 65535 | I << 16, O = C & 65535 | B << 16, w = H, v = G, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = z, v = L, C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, H = A & 65535 | I << 16, G = C & 65535 | B << 16, ee = g, re = S, te = _, c = H, ie = E, ue = le, fe = R, F = $, oe = Y, se = Q, be = J, ce = G, ge = X, me = W, ye = D, ne = O, j % 16 === 15)
                        for (M = 0; M < 16; M++) w = u[M], v = h[M], C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = u[(M + 9) % 16], v = h[(M + 9) % 16], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, z = u[(M + 1) % 16], L = h[(M + 1) % 16], w = (z >>> 1 | L << 31) ^ (z >>> 8 | L << 24) ^ z >>> 7, v = (L >>> 1 | z << 31) ^ (L >>> 8 | z << 24) ^ (L >>> 7 | z << 25), C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, z = u[(M + 14) % 16], L = h[(M + 14) % 16], w = (z >>> 19 | L << 13) ^ (L >>> 29 | z << 3) ^ z >>> 6, v = (L >>> 19 | z << 13) ^ (z >>> 29 | L << 3) ^ (L >>> 6 | z << 26), C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, u[M] = A & 65535 | I << 16, h[M] = C & 65535 | B << 16;
                w = F, v = ne, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = a[0], v = l[0], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, a[0] = F = A & 65535 | I << 16, l[0] = ne = C & 65535 | B << 16, w = ee, v = oe, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = a[1], v = l[1], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, a[1] = ee = A & 65535 | I << 16, l[1] = oe = C & 65535 | B << 16, w = re, v = se, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = a[2], v = l[2], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, a[2] = re = A & 65535 | I << 16, l[2] = se = C & 65535 | B << 16, w = te, v = be, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = a[3], v = l[3], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, a[3] = te = A & 65535 | I << 16, l[3] = be = C & 65535 | B << 16, w = c, v = ce, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = a[4], v = l[4], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, a[4] = c = A & 65535 | I << 16, l[4] = ce = C & 65535 | B << 16, w = ie, v = ge, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = a[5], v = l[5], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, a[5] = ie = A & 65535 | I << 16, l[5] = ge = C & 65535 | B << 16, w = ue, v = me, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = a[6], v = l[6], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, a[6] = ue = A & 65535 | I << 16, l[6] = me = C & 65535 | B << 16, w = fe, v = ye, C = v & 65535, B = v >>> 16, A = w & 65535, I = w >>> 16, w = a[7], v = l[7], C += v & 65535, B += v >>> 16, A += w & 65535, I += w >>> 16, B += C >>> 16, A += B >>> 16, I += A >>> 16, a[7] = fe = A & 65535 | I << 16, l[7] = ye = C & 65535 | B << 16, Be += 128, r -= 128
            }
            return r
        }

        function tt(a, l, s) {
            var r = new Int32Array(8),
                u = new Int32Array(8),
                h = new Uint8Array(256),
                g, S = s;
            for (r[0] = 1779033703, r[1] = 3144134277, r[2] = 1013904242, r[3] = 2773480762, r[4] = 1359893119, r[5] = 2600822924, r[6] = 528734635, r[7] = 1541459225, u[0] = 4089235720, u[1] = 2227873595, u[2] = 4271175723, u[3] = 1595750129, u[4] = 2917565137, u[5] = 725511199, u[6] = 4215389547, u[7] = 327033209, an(r, u, l, s), s %= 128, g = 0; g < s; g++) h[g] = l[S - s + g];
            for (h[s] = 128, s = 256 - 128 * (s < 112 ? 1 : 0), h[s - 9] = 0, T(h, s - 8, S / 536870912 | 0, S << 3), an(r, u, h, s), g = 0; g < 8; g++) T(a, 8 * g, r[g], u[g]);
            return 0
        }

        function Ot(a, l) {
            var s = e(),
                r = e(),
                u = e(),
                h = e(),
                g = e(),
                S = e(),
                _ = e(),
                H = e(),
                E = e();
            Ve(s, a[1], a[0]), Ve(E, l[1], l[0]), ae(s, s, E), Le(r, a[0], a[1]), Le(E, l[0], l[1]), ae(r, r, E), ae(u, a[3], l[3]), ae(u, u, m), ae(h, a[2], l[2]), Le(h, h, h), Ve(g, r, s), Ve(S, h, u), Le(_, h, u), Le(H, r, s), ae(a[0], g, S), ae(a[1], H, _), ae(a[2], _, S), ae(a[3], g, H)
        }

        function on(a, l, s) {
            var r;
            for (r = 0; r < 4; r++) lt(a[r], l[r], s)
        }

        function dr(a, l) {
            var s = e(),
                r = e(),
                u = e();
            Qr(u, l[2]), ae(s, l[0], u), ae(r, l[1], u), ut(a, r), a[31] ^= Jr(s) << 7
        }

        function pr(a, l, s) {
            var r, u;
            for (qe(a[0], f), qe(a[1], d), qe(a[2], d), qe(a[3], f), u = 255; u >= 0; --u) r = s[u / 8 | 0] >> (u & 7) & 1, on(a, l, r), Ot(l, a), Ot(a, a), on(a, l, r)
        }

        function Ft(a, l) {
            var s = [e(), e(), e(), e()];
            qe(s[0], U), qe(s[1], b), qe(s[2], d), ae(s[3], U, b), pr(a, s, l)
        }

        function hr(a, l, s) {
            var r = new Uint8Array(64),
                u = [e(), e(), e(), e()],
                h;
            for (s || t(l, 32), tt(r, l, 32), r[0] &= 248, r[31] &= 127, r[31] |= 64, Ft(u, r), dr(a, u), h = 0; h < 32; h++) l[h + 32] = a[h];
            return 0
        }
        var qt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

        function gr(a, l) {
            var s, r, u, h;
            for (r = 63; r >= 32; --r) {
                for (s = 0, u = r - 32, h = r - 12; u < h; ++u) l[u] += s - 16 * l[r] * qt[u - (r - 32)], s = Math.floor((l[u] + 128) / 256), l[u] -= s * 256;
                l[u] += s, l[r] = 0
            }
            for (s = 0, u = 0; u < 32; u++) l[u] += s - (l[31] >> 4) * qt[u], s = l[u] >> 8, l[u] &= 255;
            for (u = 0; u < 32; u++) l[u] -= s * qt[u];
            for (r = 0; r < 32; r++) l[r + 1] += l[r] >> 8, a[r] = l[r] & 255
        }

        function mr(a) {
            var l = new Float64Array(64),
                s;
            for (s = 0; s < 64; s++) l[s] = a[s];
            for (s = 0; s < 64; s++) a[s] = 0;
            gr(a, l)
        }

        function sn(a, l, s, r) {
            var u = new Uint8Array(64),
                h = new Uint8Array(64),
                g = new Uint8Array(64),
                S, _, H = new Float64Array(64),
                E = [e(), e(), e(), e()];
            tt(u, r, 32), u[0] &= 248, u[31] &= 127, u[31] |= 64;
            var le = s + 64;
            for (S = 0; S < s; S++) a[64 + S] = l[S];
            for (S = 0; S < 32; S++) a[32 + S] = u[32 + S];
            for (tt(g, a.subarray(32), s + 32), mr(g), Ft(E, g), dr(a, E), S = 32; S < 64; S++) a[S] = r[S];
            for (tt(h, a, s + 64), mr(h), S = 0; S < 64; S++) H[S] = 0;
            for (S = 0; S < 32; S++) H[S] = g[S];
            for (S = 0; S < 32; S++)
                for (_ = 0; _ < 32; _++) H[S + _] += h[S] * u[_];
            return gr(a.subarray(32), H), le
        }

        function li(a, l) {
            var s = e(),
                r = e(),
                u = e(),
                h = e(),
                g = e(),
                S = e(),
                _ = e();
            return qe(a[2], d), cr(a[1], l), Ne(u, a[1]), ae(h, u, p), Ve(u, u, a[2]), Le(h, a[2], h), Ne(g, h), Ne(S, g), ae(_, S, g), ae(s, _, u), ae(s, s, h), en(s, s), ae(s, s, u), ae(s, s, h), ae(s, s, h), ae(a[0], s, h), Ne(r, a[0]), ae(r, r, h), Zr(r, u) && ae(a[0], a[0], k), Ne(r, a[0]), ae(r, r, h), Zr(r, u) ? -1 : (Jr(a[0]) === l[31] >> 7 && Ve(a[0], f, a[0]), ae(a[3], a[0], a[1]), 0)
        }

        function yr(a, l, s, r) {
            var u, h = new Uint8Array(32),
                g = new Uint8Array(64),
                S = [e(), e(), e(), e()],
                _ = [e(), e(), e(), e()];
            if (s < 64 || li(_, r)) return -1;
            for (u = 0; u < s; u++) a[u] = l[u];
            for (u = 0; u < 32; u++) a[u + 32] = r[u];
            if (tt(g, a, s), mr(g), pr(S, _, g), Ft(_, l.subarray(32)), Ot(S, _), dr(h, S), s -= 64, Z(l, 0, h, 0)) {
                for (u = 0; u < s; u++) a[u] = 0;
                return -1
            }
            for (u = 0; u < s; u++) a[u] = l[u + 64];
            return s
        }
        var br = 32,
            $t = 24,
            Bt = 32,
            ft = 16,
            St = 32,
            Yt = 32,
            At = 32,
            Ut = 32,
            xr = 32,
            ln = $t,
            ui = Bt,
            fi = ft,
            $e = 64,
            rt = 32,
            ct = 64,
            wr = 32,
            vr = 64;
        n.lowlevel = {
            crypto_core_hsalsa20: pe,
            crypto_stream_xor: or,
            crypto_stream: Wr,
            crypto_stream_salsa20_xor: et,
            crypto_stream_salsa20: Kt,
            crypto_onetimeauth: sr,
            crypto_onetimeauth_verify: Xr,
            crypto_verify_16: V,
            crypto_verify_32: Z,
            crypto_secretbox: lr,
            crypto_secretbox_open: ur,
            crypto_scalarmult: Vt,
            crypto_scalarmult_base: jt,
            crypto_box_beforenm: Ht,
            crypto_box_afternm: rn,
            crypto_box: oi,
            crypto_box_open: si,
            crypto_box_keypair: tn,
            crypto_hash: tt,
            crypto_sign: sn,
            crypto_sign_keypair: hr,
            crypto_sign_open: yr,
            crypto_secretbox_KEYBYTES: br,
            crypto_secretbox_NONCEBYTES: $t,
            crypto_secretbox_ZEROBYTES: Bt,
            crypto_secretbox_BOXZEROBYTES: ft,
            crypto_scalarmult_BYTES: St,
            crypto_scalarmult_SCALARBYTES: Yt,
            crypto_box_PUBLICKEYBYTES: At,
            crypto_box_SECRETKEYBYTES: Ut,
            crypto_box_BEFORENMBYTES: xr,
            crypto_box_NONCEBYTES: ln,
            crypto_box_ZEROBYTES: ui,
            crypto_box_BOXZEROBYTES: fi,
            crypto_sign_BYTES: $e,
            crypto_sign_PUBLICKEYBYTES: rt,
            crypto_sign_SECRETKEYBYTES: ct,
            crypto_sign_SEEDBYTES: wr,
            crypto_hash_BYTES: vr,
            gf: e,
            D: p,
            L: qt,
            pack25519: ut,
            unpack25519: cr,
            M: ae,
            A: Le,
            S: Ne,
            Z: Ve,
            pow2523: en,
            add: Ot,
            set25519: qe,
            modL: gr,
            scalarmult: pr,
            scalarbase: Ft
        };

        function un(a, l) {
            if (a.length !== br) throw new Error("bad key size");
            if (l.length !== $t) throw new Error("bad nonce size")
        }

        function ci(a, l) {
            if (a.length !== At) throw new Error("bad public key size");
            if (l.length !== Ut) throw new Error("bad secret key size")
        }

        function Re() {
            for (var a = 0; a < arguments.length; a++)
                if (!(arguments[a] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
        }

        function di(a) {
            for (var l = 0; l < a.length; l++) a[l] = 0
        }
        n.randomBytes = function(a) {
                var l = new Uint8Array(a);
                return t(l, a), l
            }, n.secretbox = function(a, l, s) {
                Re(a, l, s), un(s, l);
                for (var r = new Uint8Array(Bt + a.length), u = new Uint8Array(r.length), h = 0; h < a.length; h++) r[h + Bt] = a[h];
                return lr(u, r, r.length, l, s), u.subarray(ft)
            }, n.secretbox.open = function(a, l, s) {
                Re(a, l, s), un(s, l);
                for (var r = new Uint8Array(ft + a.length), u = new Uint8Array(r.length), h = 0; h < a.length; h++) r[h + ft] = a[h];
                return r.length < 32 || ur(u, r, r.length, l, s) !== 0 ? null : u.subarray(Bt)
            }, n.secretbox.keyLength = br, n.secretbox.nonceLength = $t, n.secretbox.overheadLength = ft, n.scalarMult = function(a, l) {
                if (Re(a, l), a.length !== Yt) throw new Error("bad n size");
                if (l.length !== St) throw new Error("bad p size");
                var s = new Uint8Array(St);
                return Vt(s, a, l), s
            }, n.scalarMult.base = function(a) {
                if (Re(a), a.length !== Yt) throw new Error("bad n size");
                var l = new Uint8Array(St);
                return jt(l, a), l
            }, n.scalarMult.scalarLength = Yt, n.scalarMult.groupElementLength = St, n.box = function(a, l, s, r) {
                var u = n.box.before(s, r);
                return n.secretbox(a, l, u)
            }, n.box.before = function(a, l) {
                Re(a, l), ci(a, l);
                var s = new Uint8Array(xr);
                return Ht(s, a, l), s
            }, n.box.after = n.secretbox, n.box.open = function(a, l, s, r) {
                var u = n.box.before(s, r);
                return n.secretbox.open(a, l, u)
            }, n.box.open.after = n.secretbox.open, n.box.keyPair = function() {
                var a = new Uint8Array(At),
                    l = new Uint8Array(Ut);
                return tn(a, l), {
                    publicKey: a,
                    secretKey: l
                }
            }, n.box.keyPair.fromSecretKey = function(a) {
                if (Re(a), a.length !== Ut) throw new Error("bad secret key size");
                var l = new Uint8Array(At);
                return jt(l, a), {
                    publicKey: l,
                    secretKey: new Uint8Array(a)
                }
            }, n.box.publicKeyLength = At, n.box.secretKeyLength = Ut, n.box.sharedKeyLength = xr, n.box.nonceLength = ln, n.box.overheadLength = n.secretbox.overheadLength, n.sign = function(a, l) {
                if (Re(a, l), l.length !== ct) throw new Error("bad secret key size");
                var s = new Uint8Array($e + a.length);
                return sn(s, a, a.length, l), s
            }, n.sign.open = function(a, l) {
                if (Re(a, l), l.length !== rt) throw new Error("bad public key size");
                var s = new Uint8Array(a.length),
                    r = yr(s, a, a.length, l);
                if (r < 0) return null;
                for (var u = new Uint8Array(r), h = 0; h < u.length; h++) u[h] = s[h];
                return u
            }, n.sign.detached = function(a, l) {
                for (var s = n.sign(a, l), r = new Uint8Array($e), u = 0; u < r.length; u++) r[u] = s[u];
                return r
            }, n.sign.detached.verify = function(a, l, s) {
                if (Re(a, l, s), l.length !== $e) throw new Error("bad signature size");
                if (s.length !== rt) throw new Error("bad public key size");
                var r = new Uint8Array($e + a.length),
                    u = new Uint8Array($e + a.length),
                    h;
                for (h = 0; h < $e; h++) r[h] = l[h];
                for (h = 0; h < a.length; h++) r[h + $e] = a[h];
                return yr(u, r, r.length, s) >= 0
            }, n.sign.keyPair = function() {
                var a = new Uint8Array(rt),
                    l = new Uint8Array(ct);
                return hr(a, l), {
                    publicKey: a,
                    secretKey: l
                }
            }, n.sign.keyPair.fromSecretKey = function(a) {
                if (Re(a), a.length !== ct) throw new Error("bad secret key size");
                for (var l = new Uint8Array(rt), s = 0; s < l.length; s++) l[s] = a[32 + s];
                return {
                    publicKey: l,
                    secretKey: new Uint8Array(a)
                }
            }, n.sign.keyPair.fromSeed = function(a) {
                if (Re(a), a.length !== wr) throw new Error("bad seed size");
                for (var l = new Uint8Array(rt), s = new Uint8Array(ct), r = 0; r < 32; r++) s[r] = a[r];
                return hr(l, s, !0), {
                    publicKey: l,
                    secretKey: s
                }
            }, n.sign.publicKeyLength = rt, n.sign.secretKeyLength = ct, n.sign.seedLength = wr, n.sign.signatureLength = $e, n.hash = function(a) {
                Re(a);
                var l = new Uint8Array(vr);
                return tt(l, a, a.length), l
            }, n.hash.hashLength = vr, n.verify = function(a, l) {
                return Re(a, l), a.length === 0 || l.length === 0 || a.length !== l.length ? !1 : P(a, 0, l, 0, a.length) === 0
            }, n.setPRNG = function(a) {
                t = a
            },
            function() {
                var a = typeof self < "u" ? self.crypto || self.msCrypto : null;
                if (a && a.getRandomValues) {
                    var l = 65536;
                    n.setPRNG(function(s, r) {
                        var u, h = new Uint8Array(r);
                        for (u = 0; u < r; u += l) a.getRandomValues(h.subarray(u, u + Math.min(r - u, l)));
                        for (u = 0; u < r; u++) s[u] = h[u];
                        di(h)
                    })
                }
            }()
    })(typeof Qt < "u" && Qt.exports ? Qt.exports : self.nacl = self.nacl || {})
});
var vi = Symbol.for("nodejs.util.inspect.custom"),
    Ke = vi;

function Pe(n) {
    return new TextEncoder().encode(n)
}

function nt(n) {
    let e = atob(n),
        t = e.length,
        i = new Uint8Array(t);
    for (let o = 0; o < t; o++) i[o] = e.charCodeAt(o);
    return i
}

function ze(n) {
    let e = new Uint8Array(n.length / 2);
    for (let t = 0; t < n.length; t += 2) e[t / 2] = parseInt(n.slice(t, t + 2), 16);
    return e
}

function de(n) {
    return Array.from(n).map(e => e.toString(16).padStart(2, "0")).join("")
}

function dt(n) {
    let e = "";
    for (let t = 0; t < n.length; t++) e += String.fromCharCode(n[t]);
    return btoa(e)
}

function Sr(n) {
    return new TextDecoder("utf-8").decode(n)
}

function fn(n) {
    let e = new ArrayBuffer(4);
    return new DataView(e).setInt32(0, n, !0), new Uint8Array(e)
}

function Me(n, e) {
    if (n.length !== e.length) return !1;
    for (let t = 0; t < n.length; t++)
        if (n[t] !== e[t]) return !1;
    return !0
}

function pt(n) {
    let e = n.reduce((o, f) => o + f.length, 0),
        t = new Uint8Array(e),
        i = 0;
    for (let o of n) t.set(o, i), i += o.length;
    return t
}

function it(n) {
    let t = 0,
        i = new Uint8Array(n.length + 2);
    i.set(n);
    for (let o of i) {
        let f = 128;
        for (; f > 0;) t <<= 1, o & f && (t += 1), f >>= 1, t > 65535 && (t &= 65535, t ^= 4129)
    }
    return new Uint8Array([Math.floor(t / 256), t % 256])
}
var Ar = 17,
    pn = 81,
    Ur = 128;

function cn(n) {
    if (typeof n == "string" && !Ae.isFriendly(n)) throw new Error("Unknown address type");
    let e = n instanceof Uint8Array ? n : nt(n);
    if (e.length !== 36) throw new Error("Unknown address type: byte length is not equal to 36");
    let t = e.subarray(0, 34),
        i = e.subarray(34, 36),
        o = it(t);
    if (!(o[0] === i[0] && o[1] === i[1])) throw new Error("Invalid checksum: " + n);
    let f = t[0],
        d = !1,
        y = !1;
    if (f & Ur && (d = !0, f = f ^ Ur), f !== Ar && f !== pn) throw "Unknown address tag";
    y = f === Ar;
    let p = null;
    t[1] === 255 ? p = -1 : p = t[1];
    let m = t.subarray(2, 34);
    return {
        isTestOnly: d,
        isBounceable: y,
        workchain: p,
        hashPart: m
    }
}
var dn;
dn = Ke;
var Ye = class Ye {
        constructor(e, t) {
            N(this, "workChain");
            N(this, "hash");
            N(this, "toRawString", () => this.workChain + ":" + de(this.hash));
            N(this, "toRaw", () => {
                let e = new Uint8Array(36);
                return e.set(this.hash), e.set([this.workChain, this.workChain, this.workChain, this.workChain], 32), e
            });
            N(this, "toStringBuffer", e => {
                let t = e && e.testOnly !== void 0 ? e.testOnly : !1,
                    o = (e && e.bounceable !== void 0 ? e.bounceable : !0) ? Ar : pn;
                t && (o |= Ur);
                let f = new Uint8Array(34);
                f[0] = o, f[1] = this.workChain, f.set(this.hash, 2);
                let d = new Uint8Array(36);
                return d.set(f), d.set(it(f), 34), d
            });
            N(this, "toString", e => {
                let t = e && e.urlSafe !== void 0 ? e.urlSafe : !0,
                    i = this.toStringBuffer(e);
                return t ? dt(i).replace(/\+/g, "-").replace(/\//g, "_") : dt(i)
            });
            N(this, dn, () => this.toString());
            if (t.length !== 32) throw new Error("Invalid address hash length: " + t.length);
            this.workChain = e, this.hash = t, Object.freeze(this)
        }
        static isAddress(e) {
            return e instanceof Ye
        }
        static isFriendly(e) {
            return !(e.length !== 48 || !/[A-Za-z0-9+/_-]+/.test(e))
        }
        static isRaw(e) {
            if (e.indexOf(":") === -1) return !1;
            let [t, i] = e.split(":");
            return !(!Number.isInteger(parseFloat(t)) || !/[a-f0-9]+/.test(i.toLowerCase()) || i.length !== 64)
        }
        static normalize(e) {
            return typeof e == "string" ? Ye.parse(e).toString() : e.toString()
        }
        static parse(e) {
            if (Ye.isFriendly(e)) return this.parseFriendly(e).address;
            if (Ye.isRaw(e)) return this.parseRaw(e);
            throw new Error("Unknown address type: " + e)
        }
        static parseRaw(e) {
            let t = parseInt(e.split(":")[0]),
                i = ze(e.split(":")[1]);
            return new Ye(t, i)
        }
        static parseFriendly(e) {
            if (e instanceof Uint8Array) {
                let t = cn(e);
                return {
                    isBounceable: t.isBounceable,
                    isTestOnly: t.isTestOnly,
                    address: new Ye(t.workchain, t.hashPart)
                }
            } else {
                let t = e.replace(/\-/g, "+").replace(/_/g, "/"),
                    i = cn(t);
                return {
                    isBounceable: i.isBounceable,
                    isTestOnly: i.isTestOnly,
                    address: new Ye(i.workchain, i.hashPart)
                }
            }
        }
        equals(e) {
            return e.workChain !== this.workChain ? !1 : Me(e.hash, this.hash)
        }
    },
    Ae = Ye;
var hn;
hn = Ke;
var Cr = class Cr {
        constructor(e, t) {
            N(this, "value");
            N(this, "bits");
            N(this, hn, () => this.toString());
            this.value = e, this.bits = t
        }
        static isAddress(e) {
            return e instanceof Cr
        }
        toString() {
            return "External<".concat(this.bits, ":").concat(this.value, ">")
        }
    },
    at = Cr;
var Ir = "abcdefghijklmnopqrstuvwxyz234567";

function Tr(n) {
    let e = n.byteLength,
        t = 0,
        i = 0,
        o = "";
    for (let f = 0; f < e; f++)
        for (i = i << 8 | n[f], t += 8; t >= 5;) o += Ir[i >>> t - 5 & 31], t -= 5;
    return t > 0 && (o += Ir[i << 5 - t & 31]), o
}

function ki(n, e) {
    let t = n.indexOf(e);
    if (t === -1) throw new Error("Invalid character found: " + e);
    return t
}

function _r(n) {
    let e;
    e = n.toLowerCase();
    let {
        length: t
    } = e, i = 0, o = 0, f = 0, d = new Uint8Array(t * 5 / 8 | 0);
    for (let y = 0; y < t; y++) o = o << 5 | ki(Ir, e[y]), i += 5, i >= 8 && (d[f++] = o >>> i - 8 & 255, i -= 8);
    return d
}
var gn;
gn = Ke;
var Gt = class Gt {
        constructor(e) {
            N(this, "address");
            N(this, "toRaw", () => de(this.address).toUpperCase());
            N(this, "toString", () => {
                let e = new Uint8Array(1 + this.address.length);
                e[0] = 45, e.set(this.address, 1);
                let t = it(e),
                    i = new Uint8Array(e.length + t.length);
                return i.set(e), i.set(t, e.length), Tr(i).slice(1)
            });
            N(this, gn, () => this.toString());
            if (e.length !== 32) throw Error("Invalid address");
            this.address = e
        }
        static parseFriendly(e) {
            if (e.length !== 55) throw Error("Invalid address");
            e = "f" + e;
            let t = _r(e);
            if (t[0] !== 45) throw Error("Invalid address");
            let i = t.slice(33),
                o = it(t.slice(0, 33));
            if (!Me(o, i)) throw Error("Invalid address");
            return new Gt(t.slice(1, 33))
        }
        static parseRaw(e) {
            let t = nt(e);
            return new Gt(t)
        }
        equals(e) {
            return Me(this.address, e.address)
        }
    },
    Mr = Gt;
var Ge = class {
    constructor(e = 1023) {
        N(this, "_buffer");
        N(this, "_length");
        this._buffer = new Uint8Array(Math.ceil(e / 8)), this._length = 0
    }
    get length() {
        return this._length
    }
    writeBit(e) {
        let t = this._length;
        if (t > this._buffer.length * 8) throw new Error("BitBuilder overflow");
        (typeof e == "boolean" && e === !0 || typeof e == "number" && e > 0) && (this._buffer[t / 8 | 0] |= 1 << 7 - t % 8), this._length++
    }
    writeBits(e) {
        for (let t = 0; t < e.length; t++) this.writeBit(e.at(t))
    }
    writeBuffer(e) {
        if (this._length % 8 === 0) {
            if (this._length + e.length * 8 > this._buffer.length * 8) throw new Error("BitBuilder overflow");
            this._buffer.set(e, this._length / 8), this._length += e.length * 8
        } else
            for (let t = 0; t < e.length; t++) this.writeUint(e[t], 8)
    }
    writeUint(e, t) {
        if (t < 0 || !Number.isSafeInteger(t)) throw Error("invalid bit length. Got ".concat(t));
        let i = BigInt(e);
        if (t === 0) {
            if (i !== BigInt(0)) throw Error("value is not zero for ".concat(t, " bits. Got ").concat(e));
            return
        }
        let o = BigInt(1) << BigInt(t);
        if (i < 0 || i >= o) throw Error("bitLength is too small for a value ".concat(e, ". Got ").concat(t));
        if (this._length + t > this._buffer.length * 8) throw new Error("BitBuilder overflow");
        let f = 8 - this._length % 8;
        if (f > 0) {
            let d = Math.floor(this._length / 8);
            if (t < f) {
                let y = Number(i);
                this._buffer[d] |= y << f - t, this._length += t
            } else {
                let y = Number(i >> BigInt(t - f));
                this._buffer[d] |= y, this._length += f
            }
        }
        for (t -= f; t > 0;) t >= 8 ? (this._buffer[this._length / 8] = Number(i >> BigInt(t - 8) & BigInt(255)), this._length += 8, t -= 8) : (this._buffer[this._length / 8] = Number(i << BigInt(8 - t) & BigInt(255)), this._length += t, t = 0)
    }
    writeInt(e, t) {
        let i = BigInt(e);
        if (t < 0 || !Number.isSafeInteger(t)) throw Error("invalid bit length. Got ".concat(t));
        if (t === 0) {
            if (e !== BigInt(0)) throw Error("value is not zero for ".concat(t, " bits. Got ").concat(e));
            return
        }
        if (t === 1) {
            if (e !== -BigInt(1) && e !== BigInt(0)) throw Error("value is not zero or -1 for ".concat(t, " bits. Got ").concat(e));
            this.writeBit(e === -BigInt(1));
            return
        }
        let o = BigInt(1) << BigInt(t) - BigInt(1);
        if (i < -o || i >= o) throw Error("value is out of range for ".concat(t, " bits. Got ").concat(e));
        i < 0 ? (this.writeBit(!0), i = o + i) : this.writeBit(!1), this.writeUint(i, t - 1)
    }
    writeVarUint(e, t) {
        let i = BigInt(e);
        if (t < 0 || !Number.isSafeInteger(t)) throw Error("invalid bit length. Got ".concat(t));
        if (i < 0) throw Error("value is negative. Got ".concat(e));
        if (i === BigInt(0)) {
            this.writeUint(0, t);
            return
        }
        let o = Math.ceil(i.toString(2).length / 8),
            f = o * 8;
        this.writeUint(o, t), this.writeUint(i, f)
    }
    writeVarInt(e, t) {
        let i = BigInt(e);
        if (t < 0 || !Number.isSafeInteger(t)) throw Error("invalid bit length. Got ".concat(t));
        if (i === BigInt(0)) {
            this.writeUint(0, t);
            return
        }
        let o = i > 0 ? i : -i,
            f = 1 + Math.ceil(o.toString(2).length / 8),
            d = f * 8;
        this.writeUint(f, t), this.writeInt(i, d)
    }
    writeCoins(e) {
        this.writeVarUint(e, 4)
    }
    writeAddress(e) {
        if (e == null) {
            this.writeUint(0, 2);
            return
        }
        if (Ae.isAddress(e)) {
            this.writeUint(2, 2), this.writeUint(0, 1), this.writeInt(e.workChain, 8), this.writeBuffer(e.hash);
            return
        }
        if (at.isAddress(e)) {
            this.writeUint(1, 2), this.writeUint(e.bits, 9), this.writeUint(e.value, e.bits);
            return
        }
        throw Error("Invalid address. Got ".concat(e))
    }
    build() {
        return new xe(this._buffer, 0, this._length)
    }
    buffer() {
        if (this._length % 8 !== 0) throw new Error("BitBuilder buffer is not byte aligned");
        return this._buffer.subarray(0, this._length / 8)
    }
};

function ht(n) {
    let e = new Ge(Math.ceil(n.length / 8) * 8);
    e.writeBits(n);
    let t = Math.ceil(n.length / 8) * 8 - n.length;
    for (let i = 0; i < t; i++) i === 0 ? e.writeBit(1) : e.writeBit(0);
    return e.buffer()
}

function mn(n) {
    let e = 0;
    for (let t = n.length - 1; t >= 0; t--)
        if (n[t] !== 0) {
            let i = n[t],
                o = i & -i;
            o & 1 || (o = Math.log2(o) + 1), t > 0 && (e = t << 3), e += 8 - o;
            break
        }
    return new xe(n, 0, e)
}
var yn;
yn = Ke;
var ot = class ot {
    constructor(e, t, i) {
        N(this, "_offset");
        N(this, "_length");
        N(this, "_data");
        N(this, yn, () => this.toString());
        if (i < 0) throw new Error("Length ".concat(i, " is out of bounds"));
        this._length = i, this._data = e, this._offset = t
    }
    static isBitString(e) {
        return e instanceof ot
    }
    get length() {
        return this._length
    }
    at(e) {
        if (e >= this._length) throw new Error("Index ".concat(e, " > ").concat(this._length, " is out of bounds"));
        if (e < 0) throw new Error("Index ".concat(e, " < 0 is out of bounds"));
        let t = this._offset + e >> 3,
            i = 7 - (this._offset + e) % 8;
        return (this._data[t] & 1 << i) !== 0
    }
    substring(e, t) {
        if (e > this._length) throw new Error("Offset(".concat(e, ") > ").concat(this._length, " is out of bounds"));
        if (e < 0) throw new Error("Offset(".concat(e, ") < 0 is out of bounds"));
        if (t === 0) return ot.EMPTY;
        if (e + t > this._length) throw new Error("Offset ".concat(e, " + Length ").concat(t, " > ").concat(this._length, " is out of bounds"));
        return new ot(this._data, this._offset + e, t)
    }
    subbuffer(e, t) {
        if (e > this._length) throw new Error("Offset ".concat(e, " is out of bounds"));
        if (e < 0) throw new Error("Offset ".concat(e, " is out of bounds"));
        if (e + t > this._length) throw new Error("Offset + Lenght = ".concat(e + t, " is out of bounds"));
        if (t % 8 !== 0 || (this._offset + e) % 8 !== 0) return null;
        let i = this._offset + e >> 3,
            o = i + (t >> 3);
        return this._data.subarray(i, o)
    }
    equals(e) {
        if (this._length !== e._length) return !1;
        for (let t = 0; t < this._length; t++)
            if (this.at(t) !== e.at(t)) return !1;
        return !0
    }
    toString() {
        let e = ht(this);
        if (this._length % 4 === 0) {
            let t = de(e.subarray(0, Math.ceil(this._length / 8))).toUpperCase();
            return this._length % 8 === 0 ? t : t.substring(0, t.length - 1)
        } else {
            let t = de(e).toUpperCase();
            return this._length % 8 <= 4 ? t.substring(0, t.length - 1) + "_" : t + "_"
        }
    }
};
N(ot, "EMPTY", new ot(new Uint8Array(0), 0, 0));
var xe = ot;
var Se = class n {
    constructor(e, t = 0) {
        N(this, "_bits");
        N(this, "_offset");
        N(this, "_checkpoints", []);
        this._bits = e, this._offset = t
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
        let t = this._bits.substring(this._offset, e);
        return this._offset += e, t
    }
    preloadBits(e) {
        return this._bits.substring(this._offset, e)
    }
    loadBuffer(e) {
        let t = this._preloadBuffer(e, this._offset);
        return this._offset += e * 8, t
    }
    preloadBuffer(e) {
        return this._preloadBuffer(e, this._offset)
    }
    loadUint(e) {
        return this._toSafeInteger(this.loadUintBig(e), "loadUintBig")
    }
    loadUintBig(e) {
        let t = this.preloadUintBig(e);
        return this._offset += e, t
    }
    preloadUint(e) {
        return this._toSafeInteger(this._preloadUint(e, this._offset), "preloadUintBig")
    }
    preloadUintBig(e) {
        return this._preloadUint(e, this._offset)
    }
    loadInt(e) {
        let t = this._preloadInt(e, this._offset);
        return this._offset += e, this._toSafeInteger(t, "loadUintBig")
    }
    loadIntBig(e) {
        let t = this._preloadInt(e, this._offset);
        return this._offset += e, t
    }
    preloadInt(e) {
        return this._toSafeInteger(this._preloadInt(e, this._offset), "preloadIntBig")
    }
    preloadIntBig(e) {
        return this._preloadInt(e, this._offset)
    }
    loadVarUint(e) {
        let t = Number(this.loadUint(e));
        return this._toSafeInteger(this.loadUintBig(t * 8), "loadVarUintBig")
    }
    loadVarUintBig(e) {
        let t = Number(this.loadUint(e));
        return this.loadUintBig(t * 8)
    }
    preloadVarUint(e) {
        let t = Number(this._preloadUint(e, this._offset));
        return this._toSafeInteger(this._preloadUint(t * 8, this._offset + e), "preloadVarUintBig")
    }
    preloadVarUintBig(e) {
        let t = Number(this._preloadUint(e, this._offset));
        return this._preloadUint(t * 8, this._offset + e)
    }
    loadVarInt(e) {
        let t = Number(this.loadUint(e));
        return this._toSafeInteger(this.loadIntBig(t * 8), "loadVarIntBig")
    }
    loadVarIntBig(e) {
        let t = Number(this.loadUint(e));
        return this.loadIntBig(t * 8)
    }
    preloadVarInt(e) {
        let t = Number(this._preloadUint(e, this._offset));
        return this._toSafeInteger(this._preloadInt(t * 8, this._offset + e), "preloadVarIntBig")
    }
    preloadVarIntBig(e) {
        let t = Number(this._preloadUint(e, this._offset));
        return this._preloadInt(t * 8, this._offset + e)
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
        let t = e;
        for (;;)
            if (this._bits.at(this._offset + t - 1)) {
                t--;
                break
            } else t--;
        let i = this._bits.substring(this._offset, t);
        return this._offset += e, i
    }
    clone() {
        return new n(this._bits, this._offset)
    }
    _preloadInt(e, t) {
        if (e == 0) return BigInt(0);
        let i = this._bits.at(t),
            o = BigInt(0);
        for (let f = 0; f < e - 1; f++) this._bits.at(t + 1 + f) && (o += BigInt(1) << BigInt(e - f - 1 - 1));
        return i && (o = o - (BigInt(1) << BigInt(e - 1))), o
    }
    _preloadUint(e, t) {
        if (e == 0) return BigInt(0);
        let i = BigInt(0);
        for (let o = 0; o < e; o++) this._bits.at(t + o) && (i += BigInt(1) << BigInt(e - o - 1));
        return i
    }
    _preloadBuffer(e, t) {
        let i = this._bits.subbuffer(t, e * 8);
        if (i) return i;
        let o = new Uint8Array(e);
        for (let f = 0; f < e; f++) o[f] = Number(this._preloadUint(8, t + f * 8));
        return o
    }
    _loadInternalAddress() {
        if (Number(this._preloadUint(2, this._offset)) !== 2 || this._preloadUint(1, this._offset + 2) !== BigInt(0)) throw Error("Invalid address");
        let t = Number(this._preloadInt(8, this._offset + 3)),
            i = this._preloadBuffer(32, this._offset + 11);
        return this._offset += 267, new Ae(t, i)
    }
    _loadExternalAddress() {
        if (Number(this._preloadUint(2, this._offset)) !== 1) throw Error("Invalid address");
        let t = Number(this._preloadUint(9, this._offset + 2)),
            i = this._preloadUint(t, this._offset + 11);
        return this._offset += 11 + t, new at(i, t)
    }
    _toSafeInteger(e, t) {
        if (BigInt(Number.MAX_SAFE_INTEGER) < e || e < BigInt(Number.MIN_SAFE_INTEGER)) throw new TypeError("".concat(e, " is out of safe integer range. Use ").concat(t, " instead"));
        return Number(e)
    }
};
var Te = class n {
    constructor(e = 0) {
        N(this, "_mask", 0);
        N(this, "_hashIndex");
        N(this, "_hashCount");
        this._mask = e, this._hashIndex = Bi(this._mask), this._hashCount = this._hashIndex + 1
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
        return new n(this._mask & (1 << e) - 1)
    }
    isSignificant(e) {
        return e === 0 || (this._mask >> e - 1) % 2 !== 0
    }
};

function Bi(n) {
    return n = n - (n >> 1 & 1431655765), n = (n & 858993459) + (n >> 2 & 858993459), (n + (n >> 4) & 252645135) * 16843009 >> 24
}

function Wt(n, e) {
    let t = new Se(n);
    if (n.length !== 264) throw new Error('Library cell must have exactly (8 + 256) bits, got "'.concat(n.length, '"'));
    let o = t.loadUint(8);
    if (o !== 2) throw new Error('Library cell must have type 2, got "'.concat(o, '"'));
    return {}
}

function Ct(n, e) {
    let t = new Se(n);
    if (n.length !== 280) throw new Error('Merkle Proof cell must have exactly (8 + 256 + 16) bits, got "'.concat(n.length, '"'));
    if (e.length !== 1) throw new Error('Merkle Proof cell must have exactly 1 ref, got "'.concat(e.length, '"'));
    let o = t.loadUint(8);
    if (o !== 3) throw new Error('Merkle Proof cell must have type 3, got "'.concat(o, '"'));
    let f = t.loadBuffer(32),
        d = t.loadUint(16),
        y = e[0].hash(0),
        p = e[0].depth(0);
    if (d !== p) throw new Error('Merkle Proof cell ref depth must be exactly "'.concat(d, '", got "').concat(p, '"'));
    if (!Me(f, y)) throw new Error('Merkle Proof cell ref hash must be exactly "'.concat(de(f), '", got "').concat(de(y), '"'));
    return {
        proofDepth: d,
        proofHash: f
    }
}

function Er(n) {
    return q().storeUint(3, 8).storeBuffer(n.hash(0)).storeUint(n.depth(0), 16).storeRef(n).endCell({
        exotic: !0
    })
}

function It(n, e) {
    let t = new Se(n),
        i = 8 + 2 * 272;
    if (n.length !== i) throw new Error('Merkle Update cell must have exactly (8 + (2 * (256 + 16))) bits, got "'.concat(n.length, '"'));
    if (e.length !== 2) throw new Error('Merkle Update cell must have exactly 2 refs, got "'.concat(e.length, '"'));
    let o = t.loadUint(8);
    if (o !== 4) throw new Error('Merkle Update cell type must be exactly 4, got "'.concat(o, '"'));
    let f = t.loadBuffer(32),
        d = t.loadBuffer(32),
        y = t.loadUint(16),
        p = t.loadUint(16);
    if (y !== e[0].depth(0)) throw new Error('Merkle Update cell ref depth must be exactly "'.concat(y, '", got "').concat(e[0].depth(0), '"'));
    if (!Me(f, e[0].hash(0))) throw new Error('Merkle Update cell ref hash must be exactly "'.concat(de(f), '", got "').concat(de(e[0].hash(0)), '"'));
    if (p !== e[1].depth(0)) throw new Error('Merkle Update cell ref depth must be exactly "'.concat(p, '", got "').concat(e[1].depth(0), '"'));
    if (!Me(d, e[1].hash(0))) throw new Error('Merkle Update cell ref hash must be exactly "'.concat(de(d), '", got "').concat(de(e[1].hash(0)), '"'));
    return {
        proofDepth1: y,
        proofDepth2: p,
        proofHash1: f,
        proofHash2: d
    }
}

function Tt(n, e) {
    let t = new Se(n),
        i = t.loadUint(8);
    if (i !== 1) throw new Error('Pruned branch cell must have type 1, got "'.concat(i, '"'));
    if (e.length !== 0) throw new Error("Pruned Branch cell can't has refs, got \"".concat(e.length, '"'));
    let o;
    if (n.length === 280) o = new Te(1);
    else {
        if (o = new Te(t.loadUint(8)), o.level < 1 || o.level > 3) throw new Error('Pruned Branch cell level must be >= 1 and <= 3, got "'.concat(o.level, "/").concat(o.value, '"'));
        let p = 16 + o.apply(o.level - 1).hashCount * 272;
        if (n.length !== p) throw new Error("Pruned branch cell must have exactly ".concat(p, ' bits, got "').concat(n.length, '"'))
    }
    let f = [],
        d = [],
        y = [];
    for (let p = 0; p < o.level; p++) d.push(t.loadBuffer(32));
    for (let p = 0; p < o.level; p++) y.push(t.loadUint(16));
    for (let p = 0; p < o.level; p++) f.push({
        depth: y[p],
        hash: d[p]
    });
    return {
        mask: o.value,
        pruned: f
    }
}

function Si(n, e) {
    let t = Tt(n, e),
        i = [],
        o = [],
        f = new Te(t.mask);
    for (let d = 0; d < t.pruned.length; d++) i.push(t.pruned[d].depth), o.push(t.pruned[d].hash);
    return {
        type: 1,
        depths: i,
        hashes: o,
        mask: f
    }
}

function Ai(n, e) {
    let t = Wt(n, e),
        i = [],
        o = [],
        f = new Te;
    return {
        type: 2,
        depths: i,
        hashes: o,
        mask: f
    }
}

function Ui(n, e) {
    let t = Ct(n, e),
        i = [],
        o = [],
        f = new Te(e[0].level() >> 1);
    return {
        type: 3,
        depths: i,
        hashes: o,
        mask: f
    }
}

function Ci(n, e) {
    let t = It(n, e),
        i = [],
        o = [],
        f = new Te((e[0].level() | e[1].level()) >> 1);
    return {
        type: 4,
        depths: i,
        hashes: o,
        mask: f
    }
}

function bn(n, e) {
    let i = new Se(n).preloadUint(8);
    if (i === 1) return Si(n, e);
    if (i === 2) return Ai(n, e);
    if (i === 3) return Ui(n, e);
    if (i === 4) return Ci(n, e);
    throw Error("Invalid exotic cell type: " + i)
}

function Pr(n, e) {
    let t = BigInt(n);
    if (e === "int") return t === BigInt(0) || t === -BigInt(1) ? 1 : (t > 0 ? t : -t).toString(2).length + 1;
    if (e === "uint") {
        if (t < 0) throw Error("value is negative. Got ".concat(n));
        return t.toString(2).length
    } else throw Error("invalid mode. Got ".concat(e))
}
var Ze = 2197175160;

function _t(n) {
    let e = -1;
    for (let t = 0; t < n.length; t++) e ^= n[t], e = e & 1 ? e >>> 1 ^ Ze : e >>> 1, e = e & 1 ? e >>> 1 ^ Ze : e >>> 1, e = e & 1 ? e >>> 1 ^ Ze : e >>> 1, e = e & 1 ? e >>> 1 ^ Ze : e >>> 1, e = e & 1 ? e >>> 1 ^ Ze : e >>> 1, e = e & 1 ? e >>> 1 ^ Ze : e >>> 1, e = e & 1 ? e >>> 1 ^ Ze : e >>> 1, e = e & 1 ? e >>> 1 ^ Ze : e >>> 1;
    return e = e ^ 4294967295, fn(e)
}

function zr(n, e, t) {
    return n.length + (t !== -1 ? 1 : 0) * 8 + e * 32
}

function Rr(n) {
    let e = n.length;
    return Math.ceil(e / 8) + Math.floor(e / 8)
}

function xn(n, e, t, i, o, f) {
    let d = Math.ceil(e.length / 8),
        y = new Uint8Array(2 + d + 34 * t.length),
        p = 0;
    y[p++] = zr(t, o, f), y[p++] = Rr(n), y.set(ht(e), p), p += d;
    for (let m of t) {
        let U;
        f == 3 || f == 4 ? U = m.depth(i + 1) : U = m.depth(i), y[p++] = Math.floor(U / 256), y[p++] = U % 256
    }
    for (let m of t) {
        let U;
        f == 3 || f == 4 ? U = m.hash(i + 1) : U = m.hash(i), y.set(U, p), p += 32
    }
    return y
}

function wn(n) {
    let e = [n],
        t = new Map,
        i = new Set,
        o = [];
    for (; e.length > 0;) {
        let m = [...e];
        e = [];
        for (let U of m) {
            let b = de(U.hash());
            if (!t.has(b)) {
                i.add(b), t.set(b, {
                    cell: U,
                    refs: U.refs.map(k => de(k.hash()))
                });
                for (let k of U.refs) e.push(k)
            }
        }
    }
    let f = new Set;

    function d(m) {
        if (!i.has(m)) return;
        if (f.has(m)) throw Error("Not a DAG");
        f.add(m);
        let U = t.get(m).refs;
        for (let b = U.length - 1; b >= 0; b--) d(U[b]);
        o.push(m), f.delete(m), i.delete(m)
    }
    for (; i.size > 0;) {
        let m = Array.from(i)[0];
        d(m)
    }
    let y = new Map;
    for (let m = 0; m < o.length; m++) y.set(o[o.length - m - 1], m);
    let p = [];
    for (let m = o.length - 1; m >= 0; m--) {
        let U = o[m],
            b = t.get(U);
        p.push({
            cell: b.cell,
            refs: b.refs.map(k => y.get(k))
        })
    }
    return p
}

function vn(n) {
    return Ii(n & 7)
}

function Ii(n) {
    let e = 0;
    for (let t = 0; t < 3; t++) e += n & 1, n = n >> 1;
    return e + 1
}

function Ti(n, e) {
    let t = n.loadUint(8),
        i = t % 8,
        o = !!(t & 8),
        f = n.loadUint(8),
        d = Math.ceil(f / 2),
        y = !!(f % 2),
        p = t >> 5,
        m = (t & 16) != 0,
        b = m ? vn(p) * 32 : 0,
        k = m ? vn(p) * 2 : 0;
    n.skip(b * 8), n.skip(k * 8);
    let T = xe.EMPTY;
    d > 0 && (y ? T = n.loadPaddedBits(d * 8) : T = n.loadBits(d * 8));
    let P = [];
    for (let V = 0; V < i; V++) P.push(n.loadUint(e * 8));
    return {
        bits: T,
        refs: P,
        exotic: o
    }
}

function _i(n, e) {
    return 2 + Math.ceil(n.bits.length / 8) + n.refs.length * e
}

function Mi(n) {
    let e = new Se(new xe(n, 0, n.length * 8)),
        t = e.loadUint(32);
    if (t === 1761568243) {
        let i = e.loadUint(8),
            o = e.loadUint(8),
            f = e.loadUint(i * 8),
            d = e.loadUint(i * 8),
            y = e.loadUint(i * 8),
            p = e.loadUint(o * 8),
            m = e.loadBuffer(f * o),
            U = e.loadBuffer(p);
        return {
            size: i,
            offBytes: o,
            cells: f,
            roots: d,
            absent: y,
            totalCellSize: p,
            index: m,
            cellData: U,
            root: [0]
        }
    } else if (t === 2898503464) {
        let i = e.loadUint(8),
            o = e.loadUint(8),
            f = e.loadUint(i * 8),
            d = e.loadUint(i * 8),
            y = e.loadUint(i * 8),
            p = e.loadUint(o * 8),
            m = e.loadBuffer(f * o),
            U = e.loadBuffer(p),
            b = e.loadBuffer(4);
        if (!Me(_t(n.subarray(0, n.length - 4)), b)) throw Error("Invalid CRC32C");
        return {
            size: i,
            offBytes: o,
            cells: f,
            roots: d,
            absent: y,
            totalCellSize: p,
            index: m,
            cellData: U,
            root: [0]
        }
    } else if (t === 3052313714) {
        let i = e.loadUint(1),
            o = e.loadUint(1),
            f = e.loadUint(1),
            d = e.loadUint(2),
            y = e.loadUint(3),
            p = e.loadUint(8),
            m = e.loadUint(y * 8),
            U = e.loadUint(y * 8),
            b = e.loadUint(y * 8),
            k = e.loadUint(p * 8),
            T = [];
        for (let Z = 0; Z < U; Z++) T.push(e.loadUint(y * 8));
        let P = null;
        i && (P = e.loadBuffer(m * p));
        let V = e.loadBuffer(k);
        if (o) {
            let Z = e.loadBuffer(4);
            if (!Me(_t(n.subarray(0, n.length - 4)), Z)) throw Error("Invalid CRC32C")
        }
        return {
            size: y,
            offBytes: p,
            cells: m,
            roots: U,
            absent: b,
            totalCellSize: k,
            index: P,
            cellData: V,
            root: T
        }
    } else throw Error("Invalid magic")
}

function kn(n) {
    let e = Mi(n),
        t = new Se(new xe(e.cellData, 0, e.cellData.length * 8)),
        i = [];
    for (let f = 0; f < e.cells; f++) {
        let d = Ti(t, e.size);
        i.push({ ...d,
            result: null
        })
    }
    for (let f = i.length - 1; f >= 0; f--) {
        if (i[f].result) throw Error("Impossible");
        let d = [];
        for (let y of i[f].refs) {
            if (!i[y].result) throw Error("Invalid BOC file");
            d.push(i[y].result)
        }
        i[f].result = new Ee({
            bits: i[f].bits,
            refs: d,
            exotic: i[f].exotic
        })
    }
    let o = [];
    for (let f = 0; f < e.root.length; f++) o.push(i[e.root[f]].result);
    return o
}

function Ei(n, e, t, i) {
    let o = zr(n.refs, n.mask.value, n.type),
        f = Rr(n.bits);
    i.writeUint(o, 8), i.writeUint(f, 8), i.writeBuffer(ht(n.bits));
    for (let d of e) i.writeUint(d, t * 8)
}

function Bn(n, e) {
    let t = wn(n),
        i = t.length,
        o = e.idx,
        f = e.crc32,
        d = !1,
        y = 0,
        p = Math.max(Math.ceil(Pr(i, "uint") / 8), 1),
        m = 0,
        U = [];
    for (let V of t) {
        let Z = _i(V.cell, p);
        m += Z, U.push(m)
    }
    let b = Math.max(Math.ceil(Pr(m, "uint") / 8), 1),
        k = (6 + 3 * p + b + 1 * p + (o ? i * b : 0) + m + (f ? 4 : 0)) * 8,
        T = new Ge(k);
    if (T.writeUint(3052313714, 32), T.writeBit(o), T.writeBit(f), T.writeBit(d), T.writeUint(y, 2), T.writeUint(p, 3), T.writeUint(b, 8), T.writeUint(i, p * 8), T.writeUint(1, p * 8), T.writeUint(0, p * 8), T.writeUint(m, b * 8), T.writeUint(0, p * 8), o)
        for (let V = 0; V < i; V++) T.writeUint(U[V], b * 8);
    for (let V = 0; V < i; V++) Ei(t[V].cell, t[V].refs, p, T);
    if (f) {
        let V = _t(T.buffer());
        T.writeBuffer(V)
    }
    let P = T.buffer();
    if (P.length !== k / 8) throw Error("Internal error");
    return P
}
var zn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Rn = "ARRAYBUFFER not supported by this environment",
    Dn = "UINT8ARRAY not supported by this environment";

function Sn(n, e, t, i) {
    let o, f, d, y = e || [0],
        p = (t = t || 0) >>> 3,
        m = i === -1 ? 3 : 0;
    for (o = 0; o < n.length; o += 1) d = o + p, f = d >>> 2, y.length <= f && y.push(0), y[f] |= n[o] << 8 * (m + i * (d % 4));
    return {
        value: y,
        binLen: 8 * n.length + t
    }
}

function bt(n, e, t) {
    switch (e) {
        case "UTF8":
        case "UTF16BE":
        case "UTF16LE":
            break;
        default:
            throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")
    }
    switch (n) {
        case "HEX":
            return function(i, o, f) {
                return function(d, y, p, m) {
                    let U, b, k, T;
                    if (d.length % 2 != 0) throw new Error("String of HEX type must be in byte increments");
                    let P = y || [0],
                        V = (p = p || 0) >>> 3,
                        Z = m === -1 ? 3 : 0;
                    for (U = 0; U < d.length; U += 2) {
                        if (b = parseInt(d.substr(U, 2), 16), isNaN(b)) throw new Error("String of HEX type contains invalid characters");
                        for (T = (U >>> 1) + V, k = T >>> 2; P.length <= k;) P.push(0);
                        P[k] |= b << 8 * (Z + m * (T % 4))
                    }
                    return {
                        value: P,
                        binLen: 4 * d.length + p
                    }
                }(i, o, f, t)
            };
        case "TEXT":
            return function(i, o, f) {
                return function(d, y, p, m, U) {
                    let b, k, T, P, V, Z, we, he, ve = 0,
                        pe = p || [0],
                        ke = (m = m || 0) >>> 3;
                    if (y === "UTF8")
                        for (we = U === -1 ? 3 : 0, T = 0; T < d.length; T += 1)
                            for (b = d.charCodeAt(T), k = [], 128 > b ? k.push(b) : 2048 > b ? (k.push(192 | b >>> 6), k.push(128 | 63 & b)) : 55296 > b || 57344 <= b ? k.push(224 | b >>> 12, 128 | b >>> 6 & 63, 128 | 63 & b) : (T += 1, b = 65536 + ((1023 & b) << 10 | 1023 & d.charCodeAt(T)), k.push(240 | b >>> 18, 128 | b >>> 12 & 63, 128 | b >>> 6 & 63, 128 | 63 & b)), P = 0; P < k.length; P += 1) {
                                for (Z = ve + ke, V = Z >>> 2; pe.length <= V;) pe.push(0);
                                pe[V] |= k[P] << 8 * (we + U * (Z % 4)), ve += 1
                            } else
                                for (we = U === -1 ? 2 : 0, he = y === "UTF16LE" && U !== 1 || y !== "UTF16LE" && U === 1, T = 0; T < d.length; T += 1) {
                                    for (b = d.charCodeAt(T), he === !0 && (P = 255 & b, b = P << 8 | b >>> 8), Z = ve + ke, V = Z >>> 2; pe.length <= V;) pe.push(0);
                                    pe[V] |= b << 8 * (we + U * (Z % 4)), ve += 2
                                }
                    return {
                        value: pe,
                        binLen: 8 * ve + m
                    }
                }(i, e, o, f, t)
            };
        case "B64":
            return function(i, o, f) {
                return function(d, y, p, m) {
                    let U, b, k, T, P, V, Z, we = 0,
                        he = y || [0],
                        ve = (p = p || 0) >>> 3,
                        pe = m === -1 ? 3 : 0,
                        ke = d.indexOf("=");
                    if (d.search(/^[a-zA-Z0-9=+/]+$/) === -1) throw new Error("Invalid character in base-64 string");
                    if (d = d.replace(/=/g, ""), ke !== -1 && ke < d.length) throw new Error("Invalid '=' found in base-64 string");
                    for (b = 0; b < d.length; b += 4) {
                        for (P = d.substr(b, 4), T = 0, k = 0; k < P.length; k += 1) U = zn.indexOf(P.charAt(k)), T |= U << 18 - 6 * k;
                        for (k = 0; k < P.length - 1; k += 1) {
                            for (Z = we + ve, V = Z >>> 2; he.length <= V;) he.push(0);
                            he[V] |= (T >>> 16 - 8 * k & 255) << 8 * (pe + m * (Z % 4)), we += 1
                        }
                    }
                    return {
                        value: he,
                        binLen: 8 * we + p
                    }
                }(i, o, f, t)
            };
        case "BYTES":
            return function(i, o, f) {
                return function(d, y, p, m) {
                    let U, b, k, T, P = y || [0],
                        V = (p = p || 0) >>> 3,
                        Z = m === -1 ? 3 : 0;
                    for (b = 0; b < d.length; b += 1) U = d.charCodeAt(b), T = b + V, k = T >>> 2, P.length <= k && P.push(0), P[k] |= U << 8 * (Z + m * (T % 4));
                    return {
                        value: P,
                        binLen: 8 * d.length + p
                    }
                }(i, o, f, t)
            };
        case "ARRAYBUFFER":
            try {
                new ArrayBuffer(0)
            } catch {
                throw new Error(Rn)
            }
            return function(i, o, f) {
                return function(d, y, p, m) {
                    return Sn(new Uint8Array(d), y, p, m)
                }(i, o, f, t)
            };
        case "UINT8ARRAY":
            try {
                new Uint8Array(0)
            } catch {
                throw new Error(Dn)
            }
            return function(i, o, f) {
                return Sn(i, o, f, t)
            };
        default:
            throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
    }
}

function An(n, e, t, i) {
    switch (n) {
        case "HEX":
            return function(o) {
                return function(f, d, y, p) {
                    let m = "0123456789abcdef",
                        U, b, k = "",
                        T = d / 8,
                        P = y === -1 ? 3 : 0;
                    for (U = 0; U < T; U += 1) b = f[U >>> 2] >>> 8 * (P + y * (U % 4)), k += m.charAt(b >>> 4 & 15) + m.charAt(15 & b);
                    return p.outputUpper ? k.toUpperCase() : k
                }(o, e, t, i)
            };
        case "B64":
            return function(o) {
                return function(f, d, y, p) {
                    let m, U, b, k, T, P = "",
                        V = d / 8,
                        Z = y === -1 ? 3 : 0;
                    for (m = 0; m < V; m += 3)
                        for (k = m + 1 < V ? f[m + 1 >>> 2] : 0, T = m + 2 < V ? f[m + 2 >>> 2] : 0, b = (f[m >>> 2] >>> 8 * (Z + y * (m % 4)) & 255) << 16 | (k >>> 8 * (Z + y * ((m + 1) % 4)) & 255) << 8 | T >>> 8 * (Z + y * ((m + 2) % 4)) & 255, U = 0; U < 4; U += 1) P += 8 * m + 6 * U <= d ? zn.charAt(b >>> 6 * (3 - U) & 63) : p.b64Pad;
                    return P
                }(o, e, t, i)
            };
        case "BYTES":
            return function(o) {
                return function(f, d, y) {
                    let p, m, U = "",
                        b = d / 8,
                        k = y === -1 ? 3 : 0;
                    for (p = 0; p < b; p += 1) m = f[p >>> 2] >>> 8 * (k + y * (p % 4)) & 255, U += String.fromCharCode(m);
                    return U
                }(o, e, t)
            };
        case "ARRAYBUFFER":
            try {
                new ArrayBuffer(0)
            } catch {
                throw new Error(Rn)
            }
            return function(o) {
                return function(f, d, y) {
                    let p, m = d / 8,
                        U = new ArrayBuffer(m),
                        b = new Uint8Array(U),
                        k = y === -1 ? 3 : 0;
                    for (p = 0; p < m; p += 1) b[p] = f[p >>> 2] >>> 8 * (k + y * (p % 4)) & 255;
                    return U
                }(o, e, t)
            };
        case "UINT8ARRAY":
            try {
                new Uint8Array(0)
            } catch {
                throw new Error(Dn)
            }
            return function(o) {
                return function(f, d, y) {
                    let p, m = d / 8,
                        U = y === -1 ? 3 : 0,
                        b = new Uint8Array(m);
                    for (p = 0; p < m; p += 1) b[p] = f[p >>> 2] >>> 8 * (U + y * (p % 4)) & 255;
                    return b
                }(o, e, t)
            };
        default:
            throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
    }
}
var Pt = 4294967296,
    K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    We = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
    Xe = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
    zt = "Chosen SHA variant is not supported",
    Nn = "Cannot set numRounds with MAC";

function Jt(n, e) {
    let t, i, o = n.binLen >>> 3,
        f = e.binLen >>> 3,
        d = o << 3,
        y = 4 - o << 3;
    if (o % 4 != 0) {
        for (t = 0; t < f; t += 4) i = o + t >>> 2, n.value[i] |= e.value[t >>> 2] << d, n.value.push(0), n.value[i + 1] |= e.value[t >>> 2] >>> y;
        return (n.value.length << 2) - 4 >= f + o && n.value.pop(), {
            value: n.value,
            binLen: n.binLen + e.binLen
        }
    }
    return {
        value: n.value.concat(e.value),
        binLen: n.binLen + e.binLen
    }
}

function Un(n) {
    let e = {
            outputUpper: !1,
            b64Pad: "=",
            outputLen: -1
        },
        t = n || {},
        i = "Output length must be a multiple of 8";
    if (e.outputUpper = t.outputUpper || !1, t.b64Pad && (e.b64Pad = t.b64Pad), t.outputLen) {
        if (t.outputLen % 8 != 0) throw new Error(i);
        e.outputLen = t.outputLen
    } else if (t.shakeLen) {
        if (t.shakeLen % 8 != 0) throw new Error(i);
        e.outputLen = t.shakeLen
    }
    if (typeof e.outputUpper != "boolean") throw new Error("Invalid outputUpper formatting option");
    if (typeof e.b64Pad != "string") throw new Error("Invalid b64Pad formatting option");
    return e
}

function Je(n, e, t, i) {
    let o = n + " must include a value and format";
    if (!e) {
        if (!i) throw new Error(o);
        return i
    }
    if (e.value === void 0 || !e.format) throw new Error(o);
    return bt(e.format, e.encoding || "UTF8", t)(e.value)
}
var mt = class {
    constructor(e, t, i) {
        let o = i || {};
        if (this.t = t, this.i = o.encoding || "UTF8", this.numRounds = o.numRounds || 1, isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds) throw new Error("numRounds must a integer >= 1");
        this.o = e, this.h = [], this.u = 0, this.l = !1, this.A = 0, this.H = !1, this.S = [], this.p = []
    }
    update(e) {
        let t, i = 0,
            o = this.m >>> 5,
            f = this.C(e, this.h, this.u),
            d = f.binLen,
            y = f.value,
            p = d >>> 5;
        for (t = 0; t < p; t += o) i + this.m <= d && (this.U = this.v(y.slice(t, t + o), this.U), i += this.m);
        return this.A += i, this.h = y.slice(i >>> 5), this.u = d % this.m, this.l = !0, this
    }
    getHash(e, t) {
        let i, o, f = this.R,
            d = Un(t);
        if (this.K) {
            if (d.outputLen === -1) throw new Error("Output length must be specified in options");
            f = d.outputLen
        }
        let y = An(e, f, this.T, d);
        if (this.H && this.g) return y(this.g(d));
        for (o = this.F(this.h.slice(), this.u, this.A, this.L(this.U), f), i = 1; i < this.numRounds; i += 1) this.K && f % 32 != 0 && (o[o.length - 1] &= 16777215 >>> 24 - f % 32), o = this.F(o, f, 0, this.B(this.o), f);
        return y(o)
    }
    setHMACKey(e, t, i) {
        if (!this.M) throw new Error("Variant does not support HMAC");
        if (this.l) throw new Error("Cannot set MAC key after calling update");
        let o = bt(t, (i || {}).encoding || "UTF8", this.T);
        this.k(o(e))
    }
    k(e) {
        let t = this.m >>> 3,
            i = t / 4 - 1,
            o;
        if (this.numRounds !== 1) throw new Error(Nn);
        if (this.H) throw new Error("MAC key already set");
        for (t < e.binLen / 8 && (e.value = this.F(e.value, e.binLen, 0, this.B(this.o), this.R)); e.value.length <= i;) e.value.push(0);
        for (o = 0; o <= i; o += 1) this.S[o] = 909522486 ^ e.value[o], this.p[o] = 1549556828 ^ e.value[o];
        this.U = this.v(this.S, this.U), this.A = this.m, this.H = !0
    }
    getHMAC(e, t) {
        let i = Un(t);
        return An(e, this.R, this.T, i)(this.Y())
    }
    Y() {
        let e;
        if (!this.H) throw new Error("Cannot call getHMAC without first setting MAC key");
        let t = this.F(this.h.slice(), this.u, this.A, this.L(this.U), this.R);
        return e = this.v(this.p, this.B(this.o)), e = this.F(t, this.R, this.m, e, this.R), e
    }
};

function gt(n, e) {
    return n << e | n >>> 32 - e
}

function Oe(n, e) {
    return n >>> e | n << 32 - e
}

function Kn(n, e) {
    return n >>> e
}

function Cn(n, e, t) {
    return n ^ e ^ t
}

function Ln(n, e, t) {
    return n & e ^ ~n & t
}

function Vn(n, e, t) {
    return n & e ^ n & t ^ e & t
}

function Pi(n) {
    return Oe(n, 2) ^ Oe(n, 13) ^ Oe(n, 22)
}

function _e(n, e) {
    let t = (65535 & n) + (65535 & e);
    return (65535 & (n >>> 16) + (e >>> 16) + (t >>> 16)) << 16 | 65535 & t
}

function zi(n, e, t, i) {
    let o = (65535 & n) + (65535 & e) + (65535 & t) + (65535 & i);
    return (65535 & (n >>> 16) + (e >>> 16) + (t >>> 16) + (i >>> 16) + (o >>> 16)) << 16 | 65535 & o
}

function Et(n, e, t, i, o) {
    let f = (65535 & n) + (65535 & e) + (65535 & t) + (65535 & i) + (65535 & o);
    return (65535 & (n >>> 16) + (e >>> 16) + (t >>> 16) + (i >>> 16) + (o >>> 16) + (f >>> 16)) << 16 | 65535 & f
}

function Ri(n) {
    return Oe(n, 7) ^ Oe(n, 18) ^ Kn(n, 3)
}

function Di(n) {
    return Oe(n, 6) ^ Oe(n, 11) ^ Oe(n, 25)
}

function Ni(n) {
    return [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
}

function jn(n, e) {
    let t, i, o, f, d, y, p, m = [];
    for (t = e[0], i = e[1], o = e[2], f = e[3], d = e[4], p = 0; p < 80; p += 1) m[p] = p < 16 ? n[p] : gt(m[p - 3] ^ m[p - 8] ^ m[p - 14] ^ m[p - 16], 1), y = p < 20 ? Et(gt(t, 5), Ln(i, o, f), d, 1518500249, m[p]) : p < 40 ? Et(gt(t, 5), Cn(i, o, f), d, 1859775393, m[p]) : p < 60 ? Et(gt(t, 5), Vn(i, o, f), d, 2400959708, m[p]) : Et(gt(t, 5), Cn(i, o, f), d, 3395469782, m[p]), d = f, f = o, o = gt(i, 30), i = t, t = y;
    return e[0] = _e(t, e[0]), e[1] = _e(i, e[1]), e[2] = _e(o, e[2]), e[3] = _e(f, e[3]), e[4] = _e(d, e[4]), e
}

function Ki(n, e, t, i) {
    let o, f = 15 + (e + 65 >>> 9 << 4),
        d = e + t;
    for (; n.length <= f;) n.push(0);
    for (n[e >>> 5] |= 128 << 24 - e % 32, n[f] = 4294967295 & d, n[f - 1] = d / Pt | 0, o = 0; o < n.length; o += 16) i = jn(n.slice(o, o + 16), i);
    return i
}
var Li = class extends mt {
    constructor(n, e, t) {
        if (n !== "SHA-1") throw new Error(zt);
        super(n, e, t);
        let i = t || {};
        this.M = !0, this.g = this.Y, this.T = -1, this.C = bt(this.t, this.i, this.T), this.v = jn, this.L = function(o) {
            return o.slice()
        }, this.B = Ni, this.F = Ki, this.U = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.m = 512, this.R = 160, this.K = !1, i.hmacKey && this.k(Je("hmacKey", i.hmacKey, this.T))
    }
};

function In(n) {
    let e;
    return e = n == "SHA-224" ? We.slice() : Xe.slice(), e
}

function Tn(n, e) {
    let t, i, o, f, d, y, p, m, U, b, k, T = [];
    for (t = e[0], i = e[1], o = e[2], f = e[3], d = e[4], y = e[5], p = e[6], m = e[7], k = 0; k < 64; k += 1) T[k] = k < 16 ? n[k] : zi(Oe(P = T[k - 2], 17) ^ Oe(P, 19) ^ Kn(P, 10), T[k - 7], Ri(T[k - 15]), T[k - 16]), U = Et(m, Di(d), Ln(d, y, p), K[k], T[k]), b = _e(Pi(t), Vn(t, i, o)), m = p, p = y, y = d, d = _e(f, U), f = o, o = i, i = t, t = _e(U, b);
    var P;
    return e[0] = _e(t, e[0]), e[1] = _e(i, e[1]), e[2] = _e(o, e[2]), e[3] = _e(f, e[3]), e[4] = _e(d, e[4]), e[5] = _e(y, e[5]), e[6] = _e(p, e[6]), e[7] = _e(m, e[7]), e
}
var Vi = class extends mt {
        constructor(n, e, t) {
            if (n !== "SHA-224" && n !== "SHA-256") throw new Error(zt);
            super(n, e, t);
            let i = t || {};
            this.g = this.Y, this.M = !0, this.T = -1, this.C = bt(this.t, this.i, this.T), this.v = Tn, this.L = function(o) {
                return o.slice()
            }, this.B = In, this.F = function(o, f, d, y) {
                return function(p, m, U, b, k) {
                    let T, P, V = 15 + (m + 65 >>> 9 << 4),
                        Z = m + U;
                    for (; p.length <= V;) p.push(0);
                    for (p[m >>> 5] |= 128 << 24 - m % 32, p[V] = 4294967295 & Z, p[V - 1] = Z / Pt | 0, T = 0; T < p.length; T += 16) b = Tn(p.slice(T, T + 16), b);
                    return P = k === "SHA-224" ? [b[0], b[1], b[2], b[3], b[4], b[5], b[6]] : b, P
                }(o, f, d, y, n)
            }, this.U = In(n), this.m = 512, this.R = n === "SHA-224" ? 224 : 256, this.K = !1, i.hmacKey && this.k(Je("hmacKey", i.hmacKey, this.T))
        }
    },
    x = class {
        constructor(e, t) {
            this.N = e, this.I = t
        }
    };

function _n(n, e) {
    let t;
    return e > 32 ? (t = 64 - e, new x(n.I << e | n.N >>> t, n.N << e | n.I >>> t)) : e !== 0 ? (t = 32 - e, new x(n.N << e | n.I >>> t, n.I << e | n.N >>> t)) : n
}

function Fe(n, e) {
    let t;
    return e < 32 ? (t = 32 - e, new x(n.N >>> e | n.I << t, n.I >>> e | n.N << t)) : (t = 64 - e, new x(n.I >>> e | n.N << t, n.N >>> e | n.I << t))
}

function Hn(n, e) {
    return new x(n.N >>> e, n.I >>> e | n.N << 32 - e)
}

function ji(n, e, t) {
    return new x(n.N & e.N ^ n.N & t.N ^ e.N & t.N, n.I & e.I ^ n.I & t.I ^ e.I & t.I)
}

function Hi(n) {
    let e = Fe(n, 28),
        t = Fe(n, 34),
        i = Fe(n, 39);
    return new x(e.N ^ t.N ^ i.N, e.I ^ t.I ^ i.I)
}

function je(n, e) {
    let t, i;
    t = (65535 & n.I) + (65535 & e.I), i = (n.I >>> 16) + (e.I >>> 16) + (t >>> 16);
    let o = (65535 & i) << 16 | 65535 & t;
    return t = (65535 & n.N) + (65535 & e.N) + (i >>> 16), i = (n.N >>> 16) + (e.N >>> 16) + (t >>> 16), new x((65535 & i) << 16 | 65535 & t, o)
}

function Oi(n, e, t, i) {
    let o, f;
    o = (65535 & n.I) + (65535 & e.I) + (65535 & t.I) + (65535 & i.I), f = (n.I >>> 16) + (e.I >>> 16) + (t.I >>> 16) + (i.I >>> 16) + (o >>> 16);
    let d = (65535 & f) << 16 | 65535 & o;
    return o = (65535 & n.N) + (65535 & e.N) + (65535 & t.N) + (65535 & i.N) + (f >>> 16), f = (n.N >>> 16) + (e.N >>> 16) + (t.N >>> 16) + (i.N >>> 16) + (o >>> 16), new x((65535 & f) << 16 | 65535 & o, d)
}

function Fi(n, e, t, i, o) {
    let f, d;
    f = (65535 & n.I) + (65535 & e.I) + (65535 & t.I) + (65535 & i.I) + (65535 & o.I), d = (n.I >>> 16) + (e.I >>> 16) + (t.I >>> 16) + (i.I >>> 16) + (o.I >>> 16) + (f >>> 16);
    let y = (65535 & d) << 16 | 65535 & f;
    return f = (65535 & n.N) + (65535 & e.N) + (65535 & t.N) + (65535 & i.N) + (65535 & o.N) + (d >>> 16), d = (n.N >>> 16) + (e.N >>> 16) + (t.N >>> 16) + (i.N >>> 16) + (o.N >>> 16) + (f >>> 16), new x((65535 & d) << 16 | 65535 & f, y)
}

function Mt(n, e) {
    return new x(n.N ^ e.N, n.I ^ e.I)
}

function qi(n) {
    let e = Fe(n, 19),
        t = Fe(n, 61),
        i = Hn(n, 6);
    return new x(e.N ^ t.N ^ i.N, e.I ^ t.I ^ i.I)
}

function $i(n) {
    let e = Fe(n, 1),
        t = Fe(n, 8),
        i = Hn(n, 7);
    return new x(e.N ^ t.N ^ i.N, e.I ^ t.I ^ i.I)
}

function Yi(n) {
    let e = Fe(n, 14),
        t = Fe(n, 18),
        i = Fe(n, 41);
    return new x(e.N ^ t.N ^ i.N, e.I ^ t.I ^ i.I)
}
var Gi = [new x(K[0], 3609767458), new x(K[1], 602891725), new x(K[2], 3964484399), new x(K[3], 2173295548), new x(K[4], 4081628472), new x(K[5], 3053834265), new x(K[6], 2937671579), new x(K[7], 3664609560), new x(K[8], 2734883394), new x(K[9], 1164996542), new x(K[10], 1323610764), new x(K[11], 3590304994), new x(K[12], 4068182383), new x(K[13], 991336113), new x(K[14], 633803317), new x(K[15], 3479774868), new x(K[16], 2666613458), new x(K[17], 944711139), new x(K[18], 2341262773), new x(K[19], 2007800933), new x(K[20], 1495990901), new x(K[21], 1856431235), new x(K[22], 3175218132), new x(K[23], 2198950837), new x(K[24], 3999719339), new x(K[25], 766784016), new x(K[26], 2566594879), new x(K[27], 3203337956), new x(K[28], 1034457026), new x(K[29], 2466948901), new x(K[30], 3758326383), new x(K[31], 168717936), new x(K[32], 1188179964), new x(K[33], 1546045734), new x(K[34], 1522805485), new x(K[35], 2643833823), new x(K[36], 2343527390), new x(K[37], 1014477480), new x(K[38], 1206759142), new x(K[39], 344077627), new x(K[40], 1290863460), new x(K[41], 3158454273), new x(K[42], 3505952657), new x(K[43], 106217008), new x(K[44], 3606008344), new x(K[45], 1432725776), new x(K[46], 1467031594), new x(K[47], 851169720), new x(K[48], 3100823752), new x(K[49], 1363258195), new x(K[50], 3750685593), new x(K[51], 3785050280), new x(K[52], 3318307427), new x(K[53], 3812723403), new x(K[54], 2003034995), new x(K[55], 3602036899), new x(K[56], 1575990012), new x(K[57], 1125592928), new x(K[58], 2716904306), new x(K[59], 442776044), new x(K[60], 593698344), new x(K[61], 3733110249), new x(K[62], 2999351573), new x(K[63], 3815920427), new x(3391569614, 3928383900), new x(3515267271, 566280711), new x(3940187606, 3454069534), new x(4118630271, 4000239992), new x(116418474, 1914138554), new x(174292421, 2731055270), new x(289380356, 3203993006), new x(460393269, 320620315), new x(685471733, 587496836), new x(852142971, 1086792851), new x(1017036298, 365543100), new x(1126000580, 2618297676), new x(1288033470, 3409855158), new x(1501505948, 4234509866), new x(1607167915, 987167468), new x(1816402316, 1246189591)];

function Mn(n) {
    return n === "SHA-384" ? [new x(3418070365, We[0]), new x(1654270250, We[1]), new x(2438529370, We[2]), new x(355462360, We[3]), new x(1731405415, We[4]), new x(41048885895, We[5]), new x(3675008525, We[6]), new x(1203062813, We[7])] : [new x(Xe[0], 4089235720), new x(Xe[1], 2227873595), new x(Xe[2], 4271175723), new x(Xe[3], 1595750129), new x(Xe[4], 2917565137), new x(Xe[5], 725511199), new x(Xe[6], 4215389547), new x(Xe[7], 327033209)]
}

function En(n, e) {
    let t, i, o, f, d, y, p, m, U, b, k, T, P = [];
    for (t = e[0], i = e[1], o = e[2], f = e[3], d = e[4], y = e[5], p = e[6], m = e[7], k = 0; k < 80; k += 1) k < 16 ? (T = 2 * k, P[k] = new x(n[T], n[T + 1])) : P[k] = Oi(qi(P[k - 2]), P[k - 7], $i(P[k - 15]), P[k - 16]), U = Fi(m, Yi(d), (Z = y, we = p, new x((V = d).N & Z.N ^ ~V.N & we.N, V.I & Z.I ^ ~V.I & we.I)), Gi[k], P[k]), b = je(Hi(t), ji(t, i, o)), m = p, p = y, y = d, d = je(f, U), f = o, o = i, i = t, t = je(U, b);
    var V, Z, we;
    return e[0] = je(t, e[0]), e[1] = je(i, e[1]), e[2] = je(o, e[2]), e[3] = je(f, e[3]), e[4] = je(d, e[4]), e[5] = je(y, e[5]), e[6] = je(p, e[6]), e[7] = je(m, e[7]), e
}
var Wi = class extends mt {
        constructor(n, e, t) {
            if (n !== "SHA-384" && n !== "SHA-512") throw new Error(zt);
            super(n, e, t);
            let i = t || {};
            this.g = this.Y, this.M = !0, this.T = -1, this.C = bt(this.t, this.i, this.T), this.v = En, this.L = function(o) {
                return o.slice()
            }, this.B = Mn, this.F = function(o, f, d, y) {
                return function(p, m, U, b, k) {
                    let T, P, V = 31 + (m + 129 >>> 10 << 5),
                        Z = m + U;
                    for (; p.length <= V;) p.push(0);
                    for (p[m >>> 5] |= 128 << 24 - m % 32, p[V] = 4294967295 & Z, p[V - 1] = Z / Pt | 0, T = 0; T < p.length; T += 32) b = En(p.slice(T, T + 32), b);
                    return P = k === "SHA-384" ? [b[0].N, b[0].I, b[1].N, b[1].I, b[2].N, b[2].I, b[3].N, b[3].I, b[4].N, b[4].I, b[5].N, b[5].I] : [b[0].N, b[0].I, b[1].N, b[1].I, b[2].N, b[2].I, b[3].N, b[3].I, b[4].N, b[4].I, b[5].N, b[5].I, b[6].N, b[6].I, b[7].N, b[7].I], P
                }(o, f, d, y, n)
            }, this.U = Mn(n), this.m = 1024, this.R = n === "SHA-384" ? 384 : 512, this.K = !1, i.hmacKey && this.k(Je("hmacKey", i.hmacKey, this.T))
        }
    },
    Xi = [new x(0, 1), new x(0, 32898), new x(2147483648, 32906), new x(2147483648, 2147516416), new x(0, 32907), new x(0, 2147483649), new x(2147483648, 2147516545), new x(2147483648, 32777), new x(0, 138), new x(0, 136), new x(0, 2147516425), new x(0, 2147483658), new x(0, 2147516555), new x(2147483648, 139), new x(2147483648, 32905), new x(2147483648, 32771), new x(2147483648, 32770), new x(2147483648, 128), new x(0, 32778), new x(2147483648, 2147483658), new x(2147483648, 2147516545), new x(2147483648, 32896), new x(0, 2147483649), new x(2147483648, 2147516424)],
    Zi = [
        [0, 36, 3, 41, 18],
        [1, 44, 10, 45, 2],
        [62, 6, 43, 15, 61],
        [28, 55, 25, 21, 56],
        [27, 20, 39, 8, 14]
    ];

function Nr(n) {
    let e, t = [];
    for (e = 0; e < 5; e += 1) t[e] = [new x(0, 0), new x(0, 0), new x(0, 0), new x(0, 0), new x(0, 0)];
    return t
}

function Ji(n) {
    let e, t = [];
    for (e = 0; e < 5; e += 1) t[e] = n[e].slice();
    return t
}

function Zt(n, e) {
    let t, i, o, f, d = [],
        y = [];
    if (n !== null)
        for (i = 0; i < n.length; i += 2) e[(i >>> 1) % 5][(i >>> 1) / 5 | 0] = Mt(e[(i >>> 1) % 5][(i >>> 1) / 5 | 0], new x(n[i + 1], n[i]));
    for (t = 0; t < 24; t += 1) {
        for (f = Nr(), i = 0; i < 5; i += 1) d[i] = (p = e[i][0], m = e[i][1], U = e[i][2], b = e[i][3], k = e[i][4], new x(p.N ^ m.N ^ U.N ^ b.N ^ k.N, p.I ^ m.I ^ U.I ^ b.I ^ k.I));
        for (i = 0; i < 5; i += 1) y[i] = Mt(d[(i + 4) % 5], _n(d[(i + 1) % 5], 1));
        for (i = 0; i < 5; i += 1)
            for (o = 0; o < 5; o += 1) e[i][o] = Mt(e[i][o], y[i]);
        for (i = 0; i < 5; i += 1)
            for (o = 0; o < 5; o += 1) f[o][(2 * i + 3 * o) % 5] = _n(e[i][o], Zi[i][o]);
        for (i = 0; i < 5; i += 1)
            for (o = 0; o < 5; o += 1) e[i][o] = Mt(f[i][o], new x(~f[(i + 1) % 5][o].N & f[(i + 2) % 5][o].N, ~f[(i + 1) % 5][o].I & f[(i + 2) % 5][o].I));
        e[0][0] = Mt(e[0][0], Xi[t])
    }
    var p, m, U, b, k;
    return e
}

function On(n) {
    let e, t, i = 0,
        o = [0, 0],
        f = [4294967295 & n, n / Pt & 2097151];
    for (e = 6; e >= 0; e--) t = f[e >> 2] >>> 8 * e & 255, t === 0 && i === 0 || (o[i + 1 >> 2] |= t << 8 * (i + 1), i += 1);
    return i = i !== 0 ? i : 1, o[0] |= i, {
        value: i + 1 > 4 ? o : [o[0]],
        binLen: 8 + 8 * i
    }
}

function Dr(n) {
    return Jt(On(n.binLen), n)
}

function Pn(n, e) {
    let t, i = On(e);
    i = Jt(i, n);
    let o = e >>> 2,
        f = (o - i.value.length % o) % o;
    for (t = 0; t < f; t++) i.value.push(0);
    return i.value
}
var Qi = class extends mt {
        constructor(n, e, t) {
            let i = 6,
                o = 0;
            super(n, e, t);
            let f = t || {};
            if (this.numRounds !== 1) {
                if (f.kmacKey || f.hmacKey) throw new Error(Nn);
                if (this.o === "CSHAKE128" || this.o === "CSHAKE256") throw new Error("Cannot set numRounds for CSHAKE variants")
            }
            switch (this.T = 1, this.C = bt(this.t, this.i, this.T), this.v = Zt, this.L = Ji, this.B = Nr, this.U = Nr(), this.K = !1, n) {
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
                    i = 31, this.m = o = 1344, this.R = -1, this.K = !0, this.M = !1, this.g = null;
                    break;
                case "SHAKE256":
                    i = 31, this.m = o = 1088, this.R = -1, this.K = !0, this.M = !1, this.g = null;
                    break;
                case "KMAC128":
                    i = 4, this.m = o = 1344, this.X(t), this.R = -1, this.K = !0, this.M = !1, this.g = this._;
                    break;
                case "KMAC256":
                    i = 4, this.m = o = 1088, this.X(t), this.R = -1, this.K = !0, this.M = !1, this.g = this._;
                    break;
                case "CSHAKE128":
                    this.m = o = 1344, i = this.O(t), this.R = -1, this.K = !0, this.M = !1, this.g = null;
                    break;
                case "CSHAKE256":
                    this.m = o = 1088, i = this.O(t), this.R = -1, this.K = !0, this.M = !1, this.g = null;
                    break;
                default:
                    throw new Error(zt)
            }
            this.F = function(d, y, p, m, U) {
                return function(b, k, T, P, V, Z, we) {
                    let he, ve, pe = 0,
                        ke = [],
                        et = V >>> 5,
                        Kt = k >>> 5;
                    for (he = 0; he < Kt && k >= V; he += et) P = Zt(b.slice(he, he + et), P), k -= V;
                    for (b = b.slice(he), k %= V; b.length < et;) b.push(0);
                    for (he = k >>> 3, b[he >> 2] ^= Z << he % 4 * 8, b[et - 1] ^= 2147483648, P = Zt(b, P); 32 * ke.length < we && (ve = P[pe % 5][pe / 5 | 0], ke.push(ve.I), !(32 * ke.length >= we));) ke.push(ve.N), pe += 1, 64 * pe % V == 0 && (Zt(null, P), pe = 0);
                    return ke
                }(d, y, 0, m, o, i, U)
            }, f.hmacKey && this.k(Je("hmacKey", f.hmacKey, this.T))
        }
        O(n, e) {
            let t = function(o) {
                let f = o || {};
                return {
                    funcName: Je("funcName", f.funcName, 1, {
                        value: [],
                        binLen: 0
                    }),
                    customization: Je("Customization", f.customization, 1, {
                        value: [],
                        binLen: 0
                    })
                }
            }(n || {});
            e && (t.funcName = e);
            let i = Jt(Dr(t.funcName), Dr(t.customization));
            if (t.customization.binLen !== 0 || t.funcName.binLen !== 0) {
                let o = Pn(i, this.m >>> 3);
                for (let f = 0; f < o.length; f += this.m >>> 5) this.U = this.v(o.slice(f, f + (this.m >>> 5)), this.U), this.A += this.m;
                return 4
            }
            return 31
        }
        X(n) {
            let e = function(i) {
                let o = i || {};
                return {
                    kmacKey: Je("kmacKey", o.kmacKey, 1),
                    funcName: {
                        value: [1128353099],
                        binLen: 32
                    },
                    customization: Je("Customization", o.customization, 1, {
                        value: [],
                        binLen: 0
                    })
                }
            }(n || {});
            this.O(n, e.funcName);
            let t = Pn(Dr(e.kmacKey), this.m >>> 3);
            for (let i = 0; i < t.length; i += this.m >>> 5) this.U = this.v(t.slice(i, i + (this.m >>> 5)), this.U), this.A += this.m;
            this.H = !0
        }
        _(n) {
            let e = Jt({
                value: this.h.slice(),
                binLen: this.u
            }, function(t) {
                let i, o, f = 0,
                    d = [0, 0],
                    y = [4294967295 & t, t / Pt & 2097151];
                for (i = 6; i >= 0; i--) o = y[i >> 2] >>> 8 * i & 255, o === 0 && f === 0 || (d[f >> 2] |= o << 8 * f, f += 1);
                return f = f !== 0 ? f : 1, d[f >> 2] |= f << 8 * f, {
                    value: f + 1 > 4 ? d : [d[0]],
                    binLen: 8 + 8 * f
                }
            }(n.outputLen));
            return this.F(e.value, e.binLen, this.A, this.L(this.U), n.outputLen)
        }
    },
    yt = class {
        constructor(e, t, i) {
            if (e == "SHA-1") this.P = new Li(e, t, i);
            else if (e == "SHA-224" || e == "SHA-256") this.P = new Vi(e, t, i);
            else if (e == "SHA-384" || e == "SHA-512") this.P = new Wi(e, t, i);
            else {
                if (e != "SHA3-224" && e != "SHA3-256" && e != "SHA3-384" && e != "SHA3-512" && e != "SHAKE128" && e != "SHAKE256" && e != "CSHAKE128" && e != "CSHAKE256" && e != "KMAC128" && e != "KMAC256") throw new Error(zt);
                this.P = new Qi(e, t, i)
            }
        }
        update(e) {
            return this.P.update(e), this
        }
        getHash(e, t) {
            return this.P.getHash(e, t)
        }
        setHMACKey(e, t, i) {
            this.P.setHMACKey(e, t, i)
        }
        getHMAC(e, t) {
            return this.P.getHMAC(e, t)
        }
    };

function Rt(n) {
    let e;
    typeof n == "string" ? e = de(Pe(n)) : e = de(n);
    let t = new yt("SHA-256", "HEX");
    t.update(e);
    let i = t.getHash("HEX");
    return ze(i)
}
var la = Br(er());
var Kr = Br(er());

function qn(n) {
    return Kr.default.sign.keyPair.fromSeed(n)
}

function Lr(n, e) {
    return Kr.default.sign.detached(n, e)
}

function Vr(n, e, t) {
    let i, o = null;
    if (n === -1) {
        let k = 0;
        for (let T of t) k = k | T.mask.value;
        i = new Te(k)
    } else if (n === 1) o = Tt(e, t), i = new Te(o.mask);
    else if (n === 3) {
        let k = Ct(e, t);
        i = new Te(t[0].mask.value >> 1)
    } else if (n === 4) {
        let k = It(e, t);
        i = new Te((t[0].mask.value | t[1].mask.value) >> 1)
    } else if (n === 2) {
        let k = Wt(e, t);
        i = new Te
    } else throw new Error("Unsupported exotic type");
    let f = [],
        d = [],
        y = n === 1 ? 1 : i.hashCount,
        m = i.hashCount - y;
    for (let k = 0, T = 0; k <= i.level; k++) {
        if (!i.isSignificant(k)) continue;
        if (T < m) {
            T++;
            continue
        }
        let P;
        if (T === m) {
            if (!(k === 0 || n === 1)) throw Error("Invalid");
            P = e
        } else {
            if (!(k !== 0 && n !== 1)) throw Error("Invalid: " + k + ", " + n);
            P = new xe(d[T - m - 1], 0, 256)
        }
        let V = 0;
        for (let ve of t) {
            let pe;
            n == 3 || n == 4 ? pe = ve.depth(k + 1) : pe = ve.depth(k), V = Math.max(V, pe)
        }
        t.length > 0 && V++;
        let Z = xn(e, P, t, k, i.apply(k).value, n),
            we = new Uint8Array(Rt(Z)),
            he = T - m;
        f[he] = V, d[he] = we, T++
    }
    let U = [],
        b = [];
    if (o)
        for (let k = 0; k < 4; k++) {
            let {
                hashIndex: T
            } = i.apply(k), {
                hashIndex: P
            } = i;
            T !== P ? (U.push(o.pruned[T].hash), b.push(o.pruned[T].depth)) : (U.push(d[0]), b.push(f[0]))
        } else
            for (let k = 0; k < 4; k++) U.push(d[i.apply(k).hashIndex]), b.push(f[i.apply(k).hashIndex]);
    return {
        mask: i,
        hashes: U,
        depths: b
    }
}

function $n(n) {
    if (n.remainingBits % 8 !== 0) throw new Error("Invalid string length: ".concat(n.remainingBits));
    if (n.remainingRefs !== 0 && n.remainingRefs !== 1) throw new Error("invalid number of refs: ".concat(n.remainingRefs));
    let e;
    return n.remainingBits === 0 ? e = new Uint8Array(0) : e = n.loadBuffer(n.remainingBits / 8), n.remainingRefs === 1 && (e = pt([e, $n(n.loadRef().beginParse())])), e
}

function Dt(n) {
    return Sr($n(n))
}

function Yn(n, e) {
    if (n.length > 0) {
        let t = Math.floor(e.availableBits / 8);
        if (n.length > t) {
            let i = n.subarray(0, t),
                o = n.subarray(t);
            e = e.storeBuffer(i);
            let f = q();
            Yn(o, f), e = e.storeRef(f.endCell())
        } else e = e.storeBuffer(n)
    }
}

function jr(n, e) {
    Yn(Pe(n), e)
}
var Gn;
Gn = Ke;
var rr = class rr {
        constructor(e, t) {
            N(this, "_reader");
            N(this, "_refs");
            N(this, "_refsOffset");
            N(this, Gn, () => this.toString());
            this._reader = e.clone(), this._refs = [...t], this._refsOffset = 0
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
            return Dt(this)
        }
        loadMaybeStringTail() {
            return this.loadBit() ? Dt(this) : null
        }
        loadStringRefTail() {
            return Dt(this.loadRef().beginParse())
        }
        loadMaybeStringRefTail() {
            let e = this.loadMaybeRef();
            return e ? Dt(e.beginParse()) : null
        }
        loadDict(e, t) {
            return De.load(e, t, this)
        }
        loadDictDirect(e, t) {
            return De.loadDirect(e, t, this)
        }
        endParse() {
            if (this.remainingBits > 0 || this.remainingRefs > 0) throw new Error("Slice is not empty")
        }
        asCell() {
            return q().storeSlice(this).endCell()
        }
        asBuilder() {
            return q().storeSlice(this)
        }
        clone(e = !1) {
            if (e) {
                let t = this._reader.clone();
                return t.reset(), new rr(t, this._refs)
            } else {
                let t = new rr(this._reader, this._refs);
                return t._refsOffset = this._refsOffset, t
            }
        }
        toString() {
            return this.asCell().toString()
        }
    },
    xt = rr;
var Wn;
Wn = Ke;
var wt = class wt {
    constructor(e) {
        N(this, "type");
        N(this, "bits");
        N(this, "refs");
        N(this, "mask");
        N(this, "_hashes", []);
        N(this, "_depths", []);
        N(this, "beginParse", (e = !1) => {
            if (this.isExotic && !e) throw new Error("Exotic cells cannot be parsed");
            return new xt(new Se(this.bits), this.refs)
        });
        N(this, "hash", (e = 3) => this._hashes[Math.min(this._hashes.length - 1, e)]);
        N(this, "depth", (e = 3) => this._depths[Math.min(this._depths.length - 1, e)]);
        N(this, "level", () => this.mask.level);
        N(this, "equals", e => Me(this.hash(), e.hash()));
        N(this, Wn, () => this.toString());
        let t = xe.EMPTY;
        e && e.bits && (t = e.bits);
        let i = [];
        e && e.refs && (i = [...e.refs]);
        let o, f, d, y = -1;
        if (e && e.exotic) {
            let p = bn(t, i),
                m = Vr(p.type, t, i);
            d = m.mask, f = m.depths, o = m.hashes, y = p.type
        } else {
            if (i.length > 4) throw new Error("Invalid number of references");
            if (t.length > 1023) throw new Error("Bits overflow: ".concat(t.length, " > 1023"));
            let p = Vr(-1, t, i);
            d = p.mask, f = p.depths, o = p.hashes, y = -1
        }
        this.type = y, this.bits = t, this.refs = i, this.mask = d, this._depths = f, this._hashes = o, Object.freeze(this), Object.freeze(this.refs), Object.freeze(this.bits), Object.freeze(this.mask), Object.freeze(this._depths), Object.freeze(this._hashes)
    }
    static fromBoc(e) {
        return kn(e)
    }
    static fromBase64(e) {
        let t = wt.fromBoc(nt(e));
        if (t.length !== 1) throw new Error("Deserialized more than one cell");
        return t[0]
    }
    static fromHex(e) {
        let t = wt.fromBoc(ze(e));
        if (t.length !== 1) throw new Error("Deserialized more than one cell");
        return t[0]
    }
    get isExotic() {
        return this.type !== -1
    }
    toBoc(e) {
        let t = e && e.idx !== null && e.idx !== void 0 ? e.idx : !1,
            i = e && e.crc32 !== null && e.crc32 !== void 0 ? e.crc32 : !0;
        return Bn(this, {
            idx: t,
            crc32: i
        })
    }
    toBase64() {
        return dt(this.toBoc())
    }
    toString(e) {
        let t = e || "",
            i = "x";
        this.isExotic && (this.type === 3 ? i = "p" : this.type === 4 ? i = "u" : this.type === 1 && (i = "p"));
        let o = t + (this.isExotic ? i : "x") + "{" + this.bits.toString() + "}";
        for (let f in this.refs) {
            let d = this.refs[f];
            o += "\n" + d.toString(t + " ")
        }
        return o
    }
    asSlice() {
        return this.beginParse()
    }
    asBuilder() {
        return q().storeSlice(this.asSlice())
    }
};
N(wt, "EMPTY", new wt);
var Ee = wt;

function Xn(n) {
    let e = 0;
    for (; n.loadBit();) e++;
    return e
}

function ca(n) {
    return q().storeUint(1, 8).storeUint(1, 8).storeBuffer(n.hash(0)).storeUint(n.depth(0), 16).endCell({
        exotic: !0
    })
}

function Hr(n, e, t, i) {
    let o = e.asCell();
    if (i.length == 0) return ca(o);
    let f = e.loadBit() ? 1 : 0,
        d = 0,
        y = n;
    if (f === 0) {
        d = Xn(e);
        for (let p = 0; p < d; p++) y += e.loadBit() ? "1" : "0"
    } else if ((e.loadBit() ? 1 : 0) === 0) {
        d = e.loadUint(Math.ceil(Math.log2(t + 1)));
        for (let m = 0; m < d; m++) y += e.loadBit() ? "1" : "0"
    } else {
        let m = e.loadBit() ? "1" : "0";
        d = e.loadUint(Math.ceil(Math.log2(t + 1)));
        for (let U = 0; U < d; U++) y += m
    }
    if (t - d === 0) return o; {
        let p = o.beginParse(),
            m = p.loadRef(),
            U = p.loadRef();
        if (!m.isExotic) {
            let b = i.filter(k => y + "0" === k.slice(0, y.length + 1));
            m = Hr(y + "0", m.beginParse(), t - d - 1, b)
        }
        if (!U.isExotic) {
            let b = i.filter(k => y + "1" === k.slice(0, y.length + 1));
            U = Hr(y + "1", U.beginParse(), t - d - 1, b)
        }
        return q().storeSlice(p).storeRef(m).storeRef(U).endCell()
    }
}

function nr(n, e, t) {
    e.forEach(o => {
        if (!n.has(o)) throw new Error('Trying to generate merkle proof for a missing key "'.concat(o, '"'))
    });
    let i = q().storeDictDirect(n).asSlice();
    return Hr("", i, t.bits, e.map(o => t.serialize(o).toString(2).padStart(t.bits, "0")))
}

function vt(n, e, t) {
    return Er(nr(n, e, t))
}

function da(n, e) {
    return q().storeUint(4, 8).storeBuffer(n.hash(0)).storeBuffer(e.hash(0)).storeUint(n.depth(0), 16).storeUint(e.depth(0), 16).storeRef(n).storeRef(e).endCell({
        exotic: !0
    })
}

function Or(n, e, t, i) {
    let o = vt(n, [e], t).refs[0];
    n.set(e, i);
    let f = vt(n, [e], t).refs[0];
    return da(o, f)
}

function pa(n) {
    let e = 0;
    for (; n.loadBit();) e++;
    return e
}

function Fr(n, e, t, i, o) {
    let f = e.loadBit() ? 1 : 0,
        d = 0,
        y = n;
    if (f === 0) {
        d = pa(e);
        for (let p = 0; p < d; p++) y += e.loadBit() ? "1" : "0"
    } else if ((e.loadBit() ? 1 : 0) === 0) {
        d = e.loadUint(Math.ceil(Math.log2(t + 1)));
        for (let m = 0; m < d; m++) y += e.loadBit() ? "1" : "0"
    } else {
        let m = e.loadBit() ? "1" : "0";
        d = e.loadUint(Math.ceil(Math.log2(t + 1)));
        for (let U = 0; U < d; U++) y += m
    }
    if (t - d === 0) i.set(BigInt("0b" + y), o(e));
    else {
        let p = e.loadRef(),
            m = e.loadRef();
        p.isExotic || Fr(y + "0", p.beginParse(), t - d - 1, i, o), m.isExotic || Fr(y + "1", m.beginParse(), t - d - 1, i, o)
    }
}

function Zn(n, e, t) {
    let i = new Map;
    return n && Fr("", n, e, i, t), i
}

function Jn(n, e = 0) {
    if (n.length === 0) return "";
    let t = n[0].slice(e);
    for (let i = 1; i < n.length; i++) {
        let o = n[i];
        for (; o.indexOf(t, e) !== e;)
            if (t = t.substring(0, t.length - 1), t === "") return t
    }
    return t
}

function ha(n, e) {
    for (; n.length < e;) n = "0" + n;
    return n
}

function ga(n, e) {
    if (n.size === 0) throw Error("Internal inconsistency");
    let t = new Map,
        i = new Map;
    for (let [o, f] of n.entries()) o[e] === "0" ? t.set(o, f) : i.set(o, f);
    if (t.size === 0) throw Error("Internal inconsistency. Left emtpy.");
    if (i.size === 0) throw Error("Internal inconsistency. Right emtpy.");
    return {
        left: t,
        right: i
    }
}

function ma(n, e) {
    if (n.size === 0) throw Error("Internal inconsistency");
    if (n.size === 1) return {
        type: "leaf",
        value: Array.from(n.values())[0]
    };
    let {
        left: t,
        right: i
    } = ga(n, e);
    return {
        type: "fork",
        left: qr(t, e + 1),
        right: qr(i, e + 1)
    }
}

function qr(n, e = 0) {
    if (n.size === 0) throw Error("Internal inconsistency");
    let t = Jn(Array.from(n.keys()), e);
    return {
        label: t,
        node: ma(n, t.length + e)
    }
}

function ya(n, e) {
    let t = new Map;
    for (let i of Array.from(n.keys())) {
        let o = ha(i.toString(2), e);
        t.set(o, n.get(i))
    }
    return qr(t)
}

function ba(n, e) {
    e.storeBit(0);
    for (let t = 0; t < n.length; t++) e.storeBit(1);
    return e.storeBit(0), n.length > 0 && e.storeUint(BigInt("0b" + n), n.length), e
}

function xa(n) {
    return 1 + n.length + 1 + n.length
}

function wa(n, e, t) {
    t.storeBit(1), t.storeBit(0);
    let i = Math.ceil(Math.log2(e + 1));
    return t.storeUint(n.length, i), n.length > 0 && t.storeUint(BigInt("0b" + n), n.length), t
}

function va(n, e) {
    return 2 + Math.ceil(Math.log2(e + 1)) + n.length
}

function ka(n, e, t, i) {
    i.storeBit(1), i.storeBit(1), i.storeBit(n);
    let o = Math.ceil(Math.log2(t + 1));
    i.storeUint(e, o)
}

function Ba(n) {
    return 3 + Math.ceil(Math.log2(n + 1))
}

function Sa(n) {
    if (n.length === 0 || n.length === 1) return !0;
    for (let e = 1; e < n.length; e++)
        if (n[e] !== n[0]) return !1;
    return !0
}

function Aa(n, e) {
    let t = "short",
        i = xa(n),
        o = va(n, e);
    if (o < i && (i = o, t = "long"), Sa(n)) {
        let f = Ba(e);
        f < i && (i = f, t = "same")
    }
    return t
}

function Ua(n, e, t) {
    let i = Aa(n, e);
    i === "short" ? ba(n, t) : i === "long" ? wa(n, e, t) : i === "same" && ka(n[0] === "1", n.length, e, t)
}

function Ca(n, e, t, i) {
    if (n.type === "leaf" && t(n.value, i), n.type === "fork") {
        let o = q(),
            f = q();
        $r(n.left, e - 1, t, o), $r(n.right, e - 1, t, f), i.storeRef(o), i.storeRef(f)
    }
}

function $r(n, e, t, i) {
    Ua(n.label, e, i), Ca(n.node, e - n.label.length, t, i)
}

function Yr(n, e, t, i) {
    let o = ya(n, e);
    $r(o, e, t, i)
}

function kt(n) {
    if (typeof n == "number") {
        if (!Number.isSafeInteger(n)) throw Error("Invalid key type: not a safe integer: " + n);
        return "n:" + n.toString(10)
    } else {
        if (typeof n == "bigint") return "b:" + n.toString(10);
        if (Ae.isAddress(n)) return "a:" + n.toString();
        if (n instanceof Uint8Array) return "f:" + de(n);
        if (xe.isBitString(n)) return "B:" + n.toString();
        throw Error("Invalid key type")
    }
}

function Nt(n) {
    let e = n.slice(0, 2),
        t = n.slice(2);
    if (e === "n:") return parseInt(t, 10);
    if (e === "b:") return BigInt(t);
    if (e === "a:") return Ae.parse(t);
    if (e === "f:") return ze(t);
    if (e === "B:") {
        let i = t.slice(-1) == "_";
        if (i || t.length % 2 != 0) {
            let f = i ? t.length - 1 : t.length,
                d = t.substr(0, f) + "0";
            return !i && f & 1 ? new xe(ze(d), 0, f << 2) : mn(ze(d))
        } else return new xe(ze(t), 0, t.length << 2)
    }
    throw Error("Invalid key type: " + e)
}
var He = class He {
    constructor(e, t, i) {
        N(this, "_key");
        N(this, "_value");
        N(this, "_map");
        this._key = t, this._value = i, this._map = e
    }
    static empty(e, t) {
        return e && t ? new He(new Map, e, t) : new He(new Map, null, null)
    }
    static load(e, t, i) {
        let o;
        if (i instanceof Ee) {
            if (i.isExotic) return He.empty(e, t);
            o = i.beginParse()
        } else o = i;
        let f = o.loadMaybeRef();
        return f && !f.isExotic ? He.loadDirect(e, t, f.beginParse()) : He.empty(e, t)
    }
    static loadDirect(e, t, i) {
        if (!i) return He.empty(e, t);
        let o;
        i instanceof Ee ? o = i.beginParse() : o = i;
        let f = Zn(o, e.bits, t.parse),
            d = new Map;
        for (let [y, p] of f) d.set(kt(e.parse(y)), p);
        return new He(d, e, t)
    }
    get size() {
        return this._map.size
    }
    get(e) {
        return this._map.get(kt(e))
    }
    has(e) {
        return this._map.has(kt(e))
    }
    set(e, t) {
        return this._map.set(kt(e), t), this
    }
    delete(e) {
        let t = kt(e);
        return this._map.delete(t)
    }
    clear() {
        this._map.clear()
    }*[Symbol.iterator]() {
        for (let [e, t] of this._map) yield [Nt(e), t]
    }
    keys() {
        return Array.from(this._map.keys()).map(e => Nt(e))
    }
    values() {
        return Array.from(this._map.values())
    }
    store(e, t, i) {
        if (this._map.size === 0) e.storeBit(0);
        else {
            let o = this._key;
            t != null && (o = t);
            let f = this._value;
            if (i != null && (f = i), !o) throw Error("Key serializer is not defined");
            if (!f) throw Error("Value serializer is not defined");
            let d = new Map;
            for (let [p, m] of this._map) d.set(o.serialize(Nt(p)), m);
            e.storeBit(1);
            let y = q();
            Yr(d, o.bits, f.serialize, y), e.storeRef(y.endCell())
        }
    }
    storeDirect(e, t, i) {
        if (this._map.size === 0) throw Error("Cannot store empty dictionary directly");
        let o = this._key;
        t != null && (o = t);
        let f = this._value;
        if (i != null && (f = i), !o) throw Error("Key serializer is not defined");
        if (!f) throw Error("Value serializer is not defined");
        let d = new Map;
        for (let [y, p] of this._map) d.set(o.serialize(Nt(y)), p);
        Yr(d, o.bits, f.serialize, e)
    }
    generateMerkleProof(e) {
        return vt(this, e, this._key)
    }
    generateMerkleProofDirect(e) {
        return nr(this, e, this._key)
    }
    generateMerkleUpdate(e, t) {
        return Or(this, e, this._key, t)
    }
};
N(He, "Keys", {
    Address: () => Ia(),
    BigInt: e => Ta(e),
    Int: e => _a(e),
    BigUint: e => Ma(e),
    Uint: e => Ea(e),
    Uint8Array: e => Pa(e),
    BitString: e => za(e)
}), N(He, "Values", {
    BigInt: e => Da(e),
    Int: e => Ra(e),
    BigVarInt: e => Na(e),
    BigUint: e => Va(e),
    Uint: e => La(e),
    BigVarUint: e => Ka(e),
    Bool: () => ja(),
    Address: () => Ha(),
    Cell: () => Oa(),
    Buffer: e => qa(e),
    BitString: e => $a(e),
    Dictionary: (e, t) => Fa(e, t)
});
var De = He;

function Ia() {
    return {
        bits: 267,
        serialize: n => {
            if (!Ae.isAddress(n)) throw Error("Key is not an address");
            return q().storeAddress(n).endCell().beginParse().preloadUintBig(267)
        },
        parse: n => q().storeUint(n, 267).endCell().beginParse().loadAddress()
    }
}

function Ta(n) {
    return {
        bits: n,
        serialize: e => {
            if (typeof e != "bigint") throw Error("Key is not a bigint");
            return q().storeInt(e, n).endCell().beginParse().loadUintBig(n)
        },
        parse: e => q().storeUint(e, n).endCell().beginParse().loadIntBig(n)
    }
}

function _a(n) {
    return {
        bits: n,
        serialize: e => {
            if (typeof e != "number") throw Error("Key is not a number");
            if (!Number.isSafeInteger(e)) throw Error("Key is not a safe integer: " + e);
            return q().storeInt(e, n).endCell().beginParse().loadUintBig(n)
        },
        parse: e => q().storeUint(e, n).endCell().beginParse().loadInt(n)
    }
}

function Ma(n) {
    return {
        bits: n,
        serialize: e => {
            if (typeof e != "bigint") throw Error("Key is not a bigint");
            if (e < 0) throw Error("Key is negative: " + e);
            return q().storeUint(e, n).endCell().beginParse().loadUintBig(n)
        },
        parse: e => q().storeUint(e, n).endCell().beginParse().loadUintBig(n)
    }
}

function Ea(n) {
    return {
        bits: n,
        serialize: e => {
            if (typeof e != "number") throw Error("Key is not a number");
            if (!Number.isSafeInteger(e)) throw Error("Key is not a safe integer: " + e);
            if (e < 0) throw Error("Key is negative: " + e);
            return q().storeUint(e, n).endCell().beginParse().loadUintBig(n)
        },
        parse: e => Number(q().storeUint(e, n).endCell().beginParse().loadUint(n))
    }
}

function Pa(n) {
    return {
        bits: n * 8,
        serialize: e => {
            if (!(e instanceof Uint8Array)) throw Error("Key is not a buffer");
            return q().storeBuffer(e).endCell().beginParse().loadUintBig(n * 8)
        },
        parse: e => q().storeUint(e, n * 8).endCell().beginParse().loadBuffer(n)
    }
}

function za(n) {
    return {
        bits: n,
        serialize: e => {
            if (!xe.isBitString(e)) throw Error("Key is not a BitString");
            return q().storeBits(e).endCell().beginParse().loadUintBig(n)
        },
        parse: e => q().storeUint(e, n).endCell().beginParse().loadBits(n)
    }
}

function Ra(n) {
    return {
        serialize: (e, t) => {
            t.storeInt(e, n)
        },
        parse: e => e.loadInt(n)
    }
}

function Da(n) {
    return {
        serialize: (e, t) => {
            t.storeInt(e, n)
        },
        parse: e => e.loadIntBig(n)
    }
}

function Na(n) {
    return {
        serialize: (e, t) => {
            t.storeVarInt(e, n)
        },
        parse: e => e.loadVarIntBig(n)
    }
}

function Ka(n) {
    return {
        serialize: (e, t) => {
            t.storeVarUint(e, n)
        },
        parse: e => e.loadVarUintBig(n)
    }
}

function La(n) {
    return {
        serialize: (e, t) => {
            t.storeUint(e, n)
        },
        parse: e => e.loadUint(n)
    }
}

function Va(n) {
    return {
        serialize: (e, t) => {
            t.storeUint(e, n)
        },
        parse: e => e.loadUintBig(n)
    }
}

function ja() {
    return {
        serialize: (n, e) => {
            e.storeBit(n)
        },
        parse: n => n.loadBit()
    }
}

function Ha() {
    return {
        serialize: (n, e) => {
            e.storeAddress(n)
        },
        parse: n => n.loadAddress()
    }
}

function Oa() {
    return {
        serialize: (n, e) => {
            e.storeRef(n)
        },
        parse: n => n.loadRef()
    }
}

function Fa(n, e) {
    return {
        serialize: (t, i) => {
            t.store(i)
        },
        parse: t => De.load(n, e, t)
    }
}

function qa(n) {
    return {
        serialize: (e, t) => {
            if (e.length !== n) throw Error("Invalid buffer size");
            t.storeBuffer(e)
        },
        parse: e => e.loadBuffer(n)
    }
}

function $a(n) {
    return {
        serialize: (e, t) => {
            if (e.length !== n) throw Error("Invalid BitString size");
            t.storeBits(e)
        },
        parse: e => e.loadBits(n)
    }
}

function q() {
    return new ir
}
var ir = class n {
    constructor() {
        N(this, "_bits");
        N(this, "_refs");
        this._bits = new Ge, this._refs = []
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
    storeBuffer(e, t) {
        if (t != null && e.length !== t) throw Error("Buffer length ".concat(e.length, " is not equal to ").concat(t));
        return this._bits.writeBuffer(e), this
    }
    storeMaybeBuffer(e, t) {
        return e !== null ? (this.storeBit(1), this.storeBuffer(e, t)) : this.storeBit(0), this
    }
    storeUint(e, t) {
        return this._bits.writeUint(e, t), this
    }
    storeMaybeUint(e, t) {
        return e != null ? (this.storeBit(1), this.storeUint(e, t)) : this.storeBit(0), this
    }
    storeInt(e, t) {
        return this._bits.writeInt(e, t), this
    }
    storeMaybeInt(e, t) {
        return e != null ? (this.storeBit(1), this.storeInt(e, t)) : this.storeBit(0), this
    }
    storeVarUint(e, t) {
        return this._bits.writeVarUint(e, t), this
    }
    storeMaybeVarUint(e, t) {
        return e != null ? (this.storeBit(1), this.storeVarUint(e, t)) : this.storeBit(0), this
    }
    storeVarInt(e, t) {
        return this._bits.writeVarInt(e, t), this
    }
    storeMaybeVarInt(e, t) {
        return e != null ? (this.storeBit(1), this.storeVarInt(e, t)) : this.storeBit(0), this
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
        if (e instanceof Ee) this._refs.push(e);
        else if (e instanceof n) this._refs.push(e.endCell());
        else throw new Error("Invalid argument");
        return this
    }
    storeMaybeRef(e) {
        return e ? (this.storeBit(1), this.storeRef(e)) : this.storeBit(0), this
    }
    storeSlice(e) {
        let t = e.clone();
        for (t.remainingBits > 0 && this.storeBits(t.loadBits(t.remainingBits)); t.remainingRefs > 0;) this.storeRef(t.loadRef());
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
        return jr(e, this), this
    }
    storeMaybeStringTail(e) {
        return e != null ? (this.storeBit(1), jr(e, this)) : this.storeBit(0), this
    }
    storeStringRefTail(e) {
        return this.storeRef(q().storeStringTail(e)), this
    }
    storeMaybeStringRefTail(e) {
        return e != null ? (this.storeBit(1), this.storeStringRefTail(e)) : this.storeBit(0), this
    }
    storeDict(e, t, i) {
        return e ? e.store(this, t, i) : this.storeBit(0), this
    }
    storeDictDirect(e, t, i) {
        return e.storeDirect(this, t, i), this
    }
    endCell(e) {
        return new Ee({
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
var wp = BigInt("-9223372036854775808"),
    vp = BigInt("9223372036854775807");

function Qn(n) {
    return q().storeUint(0, 32).storeStringTail(n).endCell()
}
var e0 = new Int16Array([0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920]);
var ii = Br(er(), 1);
var export_box = ii.box;
var export_default = ii.default;
export {
    Ae as Address, Ee as Cell, De as Dictionary, nt as base64ToUint8Array, q as beginCell, export_box as box, Qn as comment, export_default as
    default, ze as hexStringToUint8Array, qn as keyPairFromSeed, Rt as sha256_sync, Lr as sign, dt as uint8ArrayToBase64, de as uint8ArrayToHexString, Sr as uint8ArrayToUtf8String, Pe as utf8StringToUint8Array
};