(this["webpackJsonpmtg-high-scores"]=this["webpackJsonpmtg-high-scores"]||[]).push([[0],{13:function(n,t,a){},14:function(n,t,a){},15:function(n,t,a){"use strict";a.r(t);var e=a(0),r=a.n(e),o=a(6),s=a.n(o),i=(a(13),a(1)),l=(a(14),a(4));function c(n){var t=Math.floor(n/60),a=n%60;return"".concat(t,":").concat(String(a).padStart(2,"0"))}var m=a(7);function d(n){return new Date("2020-01-01T".concat(n.padStart(5,"0"))).getTime()}function p(n,t,a){return Math.max.apply(Math,Object(l.a)(n.map((function(n){return n[a]})).map(d)))===d(t)}function h(n){var t=n.playerStats;if(void 0===t||0===Object.keys(t).length)return null;var a=Object.entries(t).map((function(n){var t=Object(i.a)(n,2),a=t[0],e=t[1];return Object(m.a)({name:a},e)}));return a.sort((function(n,t){return d(t.total)-d(n.total)})),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Player"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Avg"),r.a.createElement("th",null,"Longest"))),r.a.createElement("tbody",null,a.map((function(n){var t=n.name,e=n.total,o=n.avg,s=n.max;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",{className:p(a,e,"total")?"high-score":void 0},e),r.a.createElement("td",{className:p(a,o,"avg")?"high-score":void 0},o),r.a.createElement("td",{className:p(a,s,"max")?"high-score":void 0},s))}))))}var u=function(){var n=Object(e.useState)(""),t=Object(i.a)(n,2),a=t[0],o=t[1],s=Object(e.useState)(),m=Object(i.a)(s,2),d=m[0],p=m[1];return Object(e.useEffect)((function(){var n=function(n){for(var t=n.split("\n").filter((function(n){return n.endsWith("turn.")})),a=/\[(.*)]\s([a-zA-Z-]+)/,e={},r=0;r<t.length;r++)if(r<t.length-1){var o=t[r].match(a)||[],s=Object(i.a)(o,3),m=s[1],d=s[2],p=t[r+1].match(a)||[],h=Object(i.a)(p,2)[1];if(m&&h){var u=new Date("2020-01-01T".concat(m.padStart(8,"0"))),g=(new Date("2020-01-01T".concat(h.padStart(8,"0"))).getTime()-u.getTime())/1e3;e[d]=e[d]||[],e[d].push(g)}}var k={};return Object.entries(e).forEach((function(n){var t=Object(i.a)(n,2),a=t[0],e=t[1],r=e.reduce((function(n,t){return n+t}));k[a]={total:c(r),avg:c(Math.floor(r/e.length)),max:c(Math.max.apply(Math,Object(l.a)(e)))}})),k}(a);p(n)}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"MTG Player Stats",r.a.createElement("button",{onClick:function(){o("\n[20:44:01] collinm1111 is ready to start the game.\n[20:44:06] kozakAl has loaded a deck with 0 sideboard cards (f2ov91b3).\n[20:49:51] d-train is ready to start the game.\n[20:49:55] d-train is not ready to start the game any more.\n[20:50:15] maxvantage has joined the game.\n[20:50:53] d-train is ready to start the game.\n[20:51:10] kozakAl is ready to start the game.\n[20:51:41] maxvantage has loaded a deck with 0 sideboard cards (f2ov91b3).\n[20:51:44] maxvantage is ready to start the game.\n[20:51:44] The game has started.\n\n[20:51:44] d-train's turn.\n\n[20:51:44] Untap\n[20:51:54] maxvantage is looking at their library.\n[20:51:55] d-train draws 7 card(s).\n[20:51:58] kozakAl is looking at their library.\n[20:51:58] maxvantage plays Atraxa, Praetors' Voice from their library.\n[20:52:00] maxvantage stops looking at their library.\n[20:52:00] maxvantage shuffles their library.\n[20:52:04] maxvantage sets counter life to 40 (+20).\n[20:52:07] kozakAl plays Atraxa, Praetors' Voice from their library.\n[20:52:07] d-train rolls a 5 with a 20-sided die.\n[20:52:09] kozakAl stops looking at their library.\n[20:52:09] kozakAl shuffles their library.\n[20:52:10] maxvantage shuffles their library.\n[20:52:12] maxvantage shuffles their library.\n[20:52:12] collinm1111 is looking at their library.\n[20:52:12] kozakAl sets counter life to 40 (+20).\n[20:52:13] maxvantage shuffles their library.\n[20:52:18] maxvantage is looking at their library.\n[20:52:21] maxvantage stops looking at their library.\n[20:52:21] maxvantage shuffles their library.\n[20:52:22] collinm1111 plays Atraxa, Praetors' Voice from their library.\n[20:52:22] kozakAl rolls a 5 with a 20-sided die.\n[20:52:22] d-train sets counter life to 21 (+1).\n[20:52:24] d-train sets counter life to 22 (+1).\n[20:52:24] d-train sets counter life to 23 (+1).\n[20:52:25] d-train sets counter life to 24 (+1).\n[20:52:25] collinm1111 stops looking at their library.\n[20:52:25] collinm1111 shuffles their library.\n[20:52:25] d-train sets counter life to 25 (+1).\n[20:52:25] d-train sets counter life to 26 (+1).\n[20:52:25] d-train sets counter life to 27 (+1).\n[20:52:25] d-train sets counter life to 28 (+1).\n[20:52:25] d-train sets counter life to 29 (+1).\n[20:52:25] maxvantage draws 7 card(s).\n[20:52:26] d-train sets counter life to 30 (+1).\n[20:52:26] d-train sets counter life to 31 (+1).\n[20:52:26] d-train sets counter life to 32 (+1).\n[20:52:26] d-train sets counter life to 33 (+1).\n[20:52:26] d-train sets counter life to 34 (+1).\n[20:52:27] d-train sets counter life to 35 (+1).\n[20:52:27] d-train sets counter life to 36 (+1).\n[20:52:27] d-train sets counter life to 37 (+1).\n[20:52:28] d-train sets counter life to 38 (+1).\n[20:52:28] d-train sets counter life to 39 (+1).\n[20:52:28] d-train sets counter life to 40 (+1).\n[20:52:34] collinm1111 rolls a 9 with a 20-sided die.\n[20:52:37] collinm1111 sets counter life to 21 (+1).\n[20:52:37] collinm1111 sets counter life to 22 (+1).\n[20:52:37] collinm1111 sets counter life to 23 (+1).\n[20:52:38] collinm1111 sets counter life to 24 (+1).\n[20:52:38] collinm1111 sets counter life to 25 (+1).\n[20:52:38] collinm1111 sets counter life to 26 (+1).\n[20:52:38] collinm1111 sets counter life to 27 (+1).\n[20:52:38] collinm1111 sets counter life to 28 (+1).\n[20:52:38] collinm1111 sets counter life to 29 (+1).\n[20:52:39] collinm1111 sets counter life to 30 (+1).\n[20:52:39] collinm1111 sets counter life to 31 (+1).\n[20:52:39] collinm1111 sets counter life to 32 (+1).\n[20:52:39] collinm1111 sets counter life to 33 (+1).\n[20:52:39] collinm1111 sets counter life to 34 (+1).\n[20:52:39] collinm1111 sets counter life to 35 (+1).\n[20:52:40] collinm1111 sets counter life to 36 (+1).\n[20:52:40] collinm1111 sets counter life to 37 (+1).\n[20:52:40] collinm1111 sets counter life to 38 (+1).\n[20:52:41] collinm1111 sets counter life to 39 (+1).\n[20:52:41] collinm1111 sets counter life to 40 (+1).\n[20:52:42] kozakAl draws 7 card(s).\n[20:52:44] collinm1111 draws 1 card(s).\n[20:52:47] d-train is looking at their library.\n[20:52:47] maxvantage shuffles their deck and draws a new hand of 7 card(s).\n[20:52:48] collinm1111 draws 6 card(s).\n[20:52:51] d-train plays Atraxa, Praetors' Voice from their library.\n[20:52:53] d-train stops looking at their library.\n[20:52:53] d-train shuffles their library.\n[20:52:58] maxvantage shuffles their deck and draws a new hand of 7 card(s).\n[20:53:37] maxvantage rolls a 4 with a 20-sided die.\n[20:53:58] collinm1111 shuffles their deck and draws a new hand of 7 card(s).\n[20:54:16] collinm1111 shuffles their deck and draws a new hand of 7 card(s).\n[20:54:42] collinm1111 draws 1 card(s).\n[20:54:46] collinm1111 puts Breeding Pool into play from their hand.\n\n[20:54:49] collinm1111's turn.\n\n[20:54:49] Untap\n\n[20:54:52] kozakAl's turn.\n\n[20:54:52] Untap\n[20:54:53] kozakAl untaps their permanents.\n[20:54:54] kozakAl untaps their permanents.\n[20:54:55] Upkeep\n[20:54:56] Draw\n[20:54:57] kozakAl draws 1 card(s).\n[20:55:27] kozakAl puts Temple Garden into play from their hand.\n[20:55:29] kozakAl sets counter life to 39 (-1).\n[20:55:29] kozakAl sets counter life to 38 (-1).\n[20:55:30] kozakAl untaps Temple Garden.\n[20:55:32] kozakAl taps Temple Garden.\n[20:55:33] kozakAl plays Sol Ring from their hand.\n[20:55:34] kozakAl puts Sol Ring into play from the stack.\n\n[20:55:41] maxvantage's turn.\n\n[20:55:41] Untap\n[20:55:46] maxvantage draws 1 card(s).\n[20:55:47] Draw\n[20:55:55] maxvantage puts Godless Shrine into play from their hand.\n\n[20:55:57] d-train's turn.\n\n[20:55:57] Untap\n[20:56:01] d-train draws 1 card(s).\n[20:56:13] d-train puts Llanowar Wastes into play from their hand.\n[20:56:18] d-train taps Llanowar Wastes.\n[20:56:20] d-train puts Glaring Spotlight into play from their hand.\n\n[20:56:40] collinm1111's turn.\n\n[20:56:40] Untap\n[20:56:41] collinm1111 untaps their permanents.\n[20:56:43] collinm1111 draws 1 card(s).\n[20:56:59] collinm1111 puts Pendelhaven into play from their hand.\n[20:57:04] collinm1111 taps Pendelhaven.\n[20:57:05] collinm1111 taps Breeding Pool.\n[20:57:12] collinm1111 plays Dimir Signet from their hand.\n[20:57:14] collinm1111 puts Dimir Signet into play from the stack.\n\n[20:57:18] kozakAl's turn.\n\n[20:57:18] Untap\n[20:57:21] kozakAl untaps their permanents.\n[20:57:21] kozakAl untaps their permanents.\n[20:57:22] Upkeep\n[20:57:23] Draw\n[20:57:24] kozakAl draws 1 card(s).\n[20:57:25] First Main\n[20:57:59] kozakAl puts Swamp into play from their hand.\n\n[20:58:03] maxvantage's turn.\n\n[20:58:03] Untap\n[20:58:08] Draw\n[20:58:08] maxvantage draws 1 card(s).\n[20:58:14] maxvantage untaps Godless Shrine.\n[20:58:22] maxvantage puts Forest into play from their hand.\n[20:58:25] maxvantage taps Godless Shrine.\n[20:58:26] maxvantage taps Forest.\n[20:58:27] maxvantage plays Demonic Tutor from their hand.\n[20:58:29] maxvantage puts Demonic Tutor from the stack into their graveyard.\n\n[20:58:35] d-train's turn.\n\n[20:58:35] Untap\n[20:58:37] maxvantage is looking at their library.\n[20:58:40] d-train untaps their permanents.\n[20:58:42] Draw\n[20:58:49] d-train draws 1 card(s).\n[20:59:01] d-train puts Windswept Heath into play from their hand.\n[20:59:05] d-train taps Windswept Heath.\n[20:59:17] d-train puts Blight Mamba into play from the top of their library.\n[20:59:21] d-train puts Blight Mamba from play on top of their library.\n\n[20:59:26] collinm1111's turn.\n\n[20:59:26] Untap\n[20:59:27] collinm1111 untaps their permanents.\n[20:59:30] collinm1111 draws 1 card(s).\n[20:59:32] d-train is looking at their library.\n[20:59:38] collinm1111 taps Pendelhaven.\n[20:59:39] collinm1111 taps Breeding Pool.\n[20:59:41] collinm1111 plays Fellwar Stone from their hand.\n[20:59:43] collinm1111 puts Fellwar Stone into play from the stack.\n[20:59:47] d-train puts Prairie Stream into play from their library.\n[20:59:49] d-train stops looking at their library.\n[20:59:49] d-train shuffles their library.\n[20:59:54] d-train puts Windswept Heath from play into their graveyard.\n[20:59:56] maxvantage moves a card from their library to their hand.\n[21:00:00] d-train sets counter life to 39 (-1).\n[21:00:05] maxvantage stops looking at their library.\n[21:00:05] maxvantage shuffles their library.\n[21:00:13] collinm1111 puts Polluted Delta into play from their hand.\n[21:00:50] collinm1111 taps Polluted Delta.\n[21:00:53] collinm1111 sets counter life to 39 (-1).\n[21:00:58] collinm1111 is looking at their library.\n[21:01:28] collinm1111 stops looking at their library.\n[21:01:28] collinm1111 shuffles their library.\n[21:01:34] collinm1111 taps Fellwar Stone.\n[21:01:35] collinm1111 taps Dimir Signet.\n[21:01:39] collinm1111 plays Demonic Tutor from their hand.\n[21:01:40] collinm1111 puts Demonic Tutor into play from the stack.\n\n[21:01:51] kozakAl's turn.\n\n[21:01:51] Untap\n[21:01:59] kozakAl untaps their permanents.\n[21:02:01] Upkeep\n[21:02:01] Draw\n[21:02:03] kozakAl draws 1 card(s).\n[21:02:04] collinm1111 is looking at their library.\n[21:02:04] First Main\n[21:02:27] kozakAl taps Sol Ring.\n[21:02:28] kozakAl taps Temple Garden.\n[21:02:30] kozakAl plays Blight Mamba from their hand.\n[21:02:31] kozakAl puts Blight Mamba into play from the stack.\n[21:02:41] kozakAl puts Hall of the Bandit Lord into play from their hand.\n\n[21:03:12] maxvantage's turn.\n\n[21:03:12] Untap\n[21:03:15] maxvantage untaps their permanents.\n[21:03:15] maxvantage untaps their permanents.\n[21:03:16] Draw\n[21:03:16] maxvantage draws 1 card(s).\n[21:03:19] maxvantage puts Island into play from their hand.\n[21:03:21] maxvantage taps Forest.\n[21:03:21] maxvantage taps Island.\n[21:03:21] maxvantage taps Godless Shrine.\n[21:03:22] maxvantage plays Rot Wolf from their hand.\n[21:03:23] maxvantage puts Rot Wolf into play from the stack.\n\n[21:03:24] d-train's turn.\n\n[21:03:24] Untap\n[21:03:26] collinm1111 moves a card from their library to their hand.\n[21:03:28] collinm1111 puts Prairie Stream into play from their hand.\n[21:03:29] collinm1111 taps Prairie Stream.\n[21:03:31] d-train draws 1 card(s).\n[21:03:42] d-train puts Woodland Cemetery into play from their hand.\n[21:03:43] d-train taps Woodland Cemetery.\n\n[21:03:54] collinm1111's turn.\n\n[21:03:54] Untap\n[21:04:20] collinm1111 plays Hand of the Praetors from their library.\n[21:04:22] collinm1111 stops looking at their library.\n[21:04:22] collinm1111 shuffles their library.\n[21:04:24] collinm1111 moves Hand of the Praetors from the stack to their hand.\n[21:04:27] collinm1111 untaps their permanents.\n[21:04:28] collinm1111 draws 1 card(s).\n[21:05:07] collinm1111 plays Hand of the Praetors from their hand.\n[21:05:10] collinm1111 taps Fellwar Stone.\n[21:05:12] collinm1111 taps Dimir Signet.\n[21:05:16] collinm1111 taps Prairie Stream.\n[21:05:19] collinm1111 taps Polluted Delta.\n[21:05:20] collinm1111 taps Pendelhaven.\n[21:05:25] collinm1111 puts Hand of the Praetors into play from the stack.\n[21:05:31] collinm1111 puts Demonic Tutor from play into their graveyard.\n\n[21:05:49] kozakAl's turn.\n\n[21:05:49] Untap\n[21:05:53] kozakAl untaps their permanents.\n[21:05:53] Upkeep\n[21:05:54] Draw\n[21:05:55] kozakAl draws 1 card(s).\n[21:05:56] First Main\n[21:06:13] kozakAl puts Fetid Heath into play from their hand.\n[21:06:30] kozakAl taps Hall of the Bandit Lord.\n[21:06:33] kozakAl sets counter life to 37 (-1).\n[21:06:33] kozakAl sets counter life to 36 (-1).\n[21:06:33] kozakAl sets counter life to 35 (-1).\n[21:06:36] kozakAl taps Swamp.\n[21:06:40] kozakAl untaps Swamp.\n[21:06:41] kozakAl taps Sol Ring.\n[21:06:42] kozakAl plays Ichorclaw Myr from their hand.\n[21:06:47] kozakAl puts Ichorclaw Myr into play from the stack.\n[21:07:10] kozakAl taps Ichorclaw Myr.\n[21:07:18] kozakAl rolls a 2 with a 3-sided die.\n[21:07:24] kozakAl points from their Ichorclaw Myr to d-train.\n[21:07:31] d-train sets counter w to 1 (+1).\n[21:07:33] d-train sets counter w to 0 (-1).\n[21:07:34] d-train sets counter g to 1 (+1).\n\n[21:07:56] maxvantage's turn.\n\n[21:07:56] Untap\n[21:07:58] maxvantage untaps their permanents.\n[21:07:58] maxvantage untaps their permanents.\n[21:07:59] Draw\n[21:07:59] maxvantage draws 1 card(s).\n[21:08:08] First Main\n[21:08:10] maxvantage puts Fetid Heath into play from their hand.\n[21:08:23] d-train sets counter life to 38 (-1).\n[21:08:24] d-train sets counter life to 37 (-1).\n[21:08:25] d-train sets counter life to 38 (+1).\n[21:08:25] d-train sets counter life to 39 (+1).\n[21:08:27] d-train sets counter g to 2 (+1).\n[21:08:27] d-train sets counter g to 3 (+1).\n[21:08:37] Beginning of Combat\n[21:08:39] Declare Attackers\n[21:08:40] maxvantage taps Rot Wolf.\n[21:08:43] maxvantage points from their Rot Wolf to collinm1111.\n[21:08:57] d-train sets counter g to 4 (+1).\n[21:08:57] d-train sets counter g to 3 (-1).\n[21:08:57] d-train sets counter g to 2 (-1).\n[21:08:58] d-train sets counter g to 1 (-1).\n[21:09:18] collinm1111 sets counter g to 1 (+1).\n[21:09:19] collinm1111 sets counter g to 2 (+1).\n[21:09:21] Second Main\n[21:09:23] maxvantage taps Fetid Heath.\n[21:09:23] maxvantage taps Forest.\n[21:09:23] maxvantage taps Island.\n[21:09:23] maxvantage taps Godless Shrine.\n[21:09:24] maxvantage puts Atraxa, Praetors' Voice into play from the stack.\n[21:09:30] End/Cleanup\n[21:09:43] d-train sets counter g to 2 (+1).\n\n[21:09:48] d-train's turn.\n\n[21:09:48] Untap\n[21:09:50] d-train untaps Woodland Cemetery.\n[21:09:52] d-train draws 1 card(s).\n[21:09:55] collinm1111 sets counter g to 3 (+1).\n[21:10:08] d-train taps Llanowar Wastes.\n[21:10:09] d-train taps Prairie Stream.\n[21:10:10] d-train taps Woodland Cemetery.\n[21:10:15] d-train puts Phyrexian Digester into play from their hand.\n\n[21:10:25] collinm1111's turn.\n\n[21:10:25] Untap\n[21:10:27] collinm1111 untaps their permanents.\n[21:10:30] collinm1111 draws 1 card(s).\n[21:10:41] collinm1111 puts City of Brass into play from their hand.\n[21:11:07] collinm1111 puts Polluted Delta from play into their graveyard.\n[21:11:27] collinm1111 taps Fellwar Stone.\n[21:11:31] collinm1111 taps Dimir Signet.\n[21:11:40] collinm1111 taps Breeding Pool.\n[21:11:44] collinm1111 taps City of Brass.\n[21:11:50] collinm1111 taps Prairie Stream.\n[21:11:56] collinm1111 taps Pendelhaven.\n[21:12:01] collinm1111 plays Phyrexian Swarmlord from their hand.\n[21:12:03] collinm1111 puts Phyrexian Swarmlord into play from the stack.\n[21:12:37] maxvantage sets counter g to -1 (-1).\n[21:12:38] maxvantage sets counter g to 0 (+1).\n[21:12:38] maxvantage sets counter g to 1 (+1).\n[21:12:57] collinm1111 points from their Hand of the Praetors to kozakAl.\n[21:12:59] collinm1111 taps Hand of the Praetors.\n[21:14:54] kozakAl points from their Blight Mamba to collinm1111's Hand of the Praetors.\n[21:15:04] collinm1111 places 1 green counter(s) on Hand of the Praetors (now 1).\n[21:15:09] collinm1111 removes 1 green counter(s) from Hand of the Praetors (now 0).\n[21:15:17] collinm1111 creates token: Poison Counter.\n[21:15:27] collinm1111 destroys Poison Counter.\n[21:16:07] collinm1111 places 1 green counter(s) on Hand of the Praetors (now 1).\n[21:16:15] kozakAl places 1 green counter(s) on Blight Mamba (now 1).\n[21:16:18] collinm1111 removes 1 green counter(s) from Hand of the Praetors (now 0).\n[21:16:21] kozakAl removes 1 green counter(s) from Blight Mamba (now 0).\n[21:16:22] collinm1111 places 1 red counter(s) on Hand of the Praetors (now 1).\n[21:16:32] kozakAl taps Blight Mamba.\n[21:16:32] kozakAl untaps Blight Mamba.\n\n[21:16:35] kozakAl's turn.\n\n[21:16:35] Untap\n[21:16:35] kozakAl puts Blight Mamba from play into their graveyard.\n[21:16:37] kozakAl untaps their permanents.\n[21:16:40] Upkeep\n[21:16:40] Draw\n[21:16:41] kozakAl draws 1 card(s).\n[21:16:43] First Main\n[21:17:13] kozakAl puts Pendelhaven into play from their hand.\n[21:18:20] kozakAl taps Sol Ring.\n[21:18:21] kozakAl taps Pendelhaven.\n[21:18:24] kozakAl taps Fetid Heath.\n[21:18:28] kozakAl plays Increasing Savagery from their hand.\n[21:18:30] kozakAl puts Increasing Savagery from the stack into their graveyard.\n[21:18:32] kozakAl puts Increasing Savagery into play from their graveyard.\n[21:18:50] kozakAl places 5 green counter(s) on Ichorclaw Myr (now 5).\n[21:19:05] kozakAl taps Increasing Savagery.\n[21:19:07] kozakAl puts Increasing Savagery from play into their graveyard.\n\n[21:19:15] maxvantage's turn.\n\n[21:19:15] Untap\n[21:19:39] collinm1111 sets counter life to 38 (-1).\n[21:19:51] maxvantage untaps their permanents.\n[21:19:51] maxvantage untaps their permanents.\n[21:19:52] Draw\n[21:19:52] maxvantage draws 1 card(s).\n[21:20:02] First Main\n[21:21:47] maxvantage taps Fetid Heath.\n[21:21:47] maxvantage taps Forest.\n[21:21:47] maxvantage taps Island.\n[21:21:47] maxvantage taps Godless Shrine.\n[21:21:48] maxvantage plays Hand of the Praetors from their hand.\n[21:21:50] maxvantage puts Hand of the Praetors into play from the stack.\n[21:21:57] Beginning of Combat\n[21:22:00] Declare Attackers\n[21:23:26] maxvantage taps Atraxa, Praetors' Voice.\n[21:23:41] maxvantage untaps Atraxa, Praetors' Voice.\n[21:24:11] maxvantage taps Rot Wolf.\n[21:24:27] maxvantage points from their Atraxa, Praetors' Voice to kozakAl.\n[21:24:29] maxvantage points from their Rot Wolf to d-train.\n[21:24:44] maxvantage points from their Rot Wolf to collinm1111.\n[21:25:04] kozakAl sets counter life to 34 (-1).\n[21:25:05] kozakAl sets counter life to 33 (-1).\n[21:25:05] kozakAl sets counter life to 32 (-1).\n[21:25:05] kozakAl sets counter life to 31 (-1).\n[21:25:06] kozakAl sets counter w to 1 (+1).\n[21:25:06] kozakAl sets counter w to 2 (+1).\n[21:25:06] kozakAl sets counter w to 3 (+1).\n[21:25:07] kozakAl sets counter w to 4 (+1).\n[21:25:09] kozakAl sets counter w to 3 (-1).\n[21:25:09] kozakAl sets counter w to 2 (-1).\n[21:25:09] kozakAl sets counter w to 1 (-1).\n[21:25:09] kozakAl sets counter w to 0 (-1).\n[21:25:09] kozakAl sets counter w to -1 (-1).\n[21:25:10] kozakAl sets counter w to -2 (-1).\n[21:25:10] kozakAl sets counter w to -3 (-1).\n[21:25:10] kozakAl sets counter w to -4 (-1).\n[21:25:19] collinm1111 sets counter g to 4 (+1).\n[21:25:19] collinm1111 sets counter g to 5 (+1).\n[21:25:27] End/Cleanup\n[21:25:43] d-train sets counter g to 3 (+1).\n[21:25:53] collinm1111 puts Hand of the Praetors from play into their graveyard.\n[21:25:55] collinm1111 sets counter g to 6 (+1).\n\n[21:25:55] d-train's turn.\n\n[21:25:55] Untap\n[21:25:59] d-train untaps their permanents.\n[21:26:01] d-train draws 1 card(s).\n[21:26:28] d-train taps Prairie Stream.\n[21:26:29] d-train taps Llanowar Wastes.\n[21:26:30] d-train taps Woodland Cemetery.\n[21:26:32] d-train sets counter life to 38 (-1).\n[21:26:34] d-train puts Whispering Specter into play from their hand.\n\n[21:26:50] collinm1111's turn.\n\n[21:26:50] Untap\n[21:26:52] collinm1111 untaps their permanents.\n[21:26:55] collinm1111 draws 1 card(s).\n[21:27:14] d-train plays Corpse Cur from their hand.\n[21:27:32] collinm1111 creates token: Insect (1/1).\n[21:27:35] collinm1111 creates token: Insect (1/1).\n[21:27:37] collinm1111 creates token: Insect (1/1).\n[21:27:40] collinm1111 creates token: Insect (1/1).\n[21:27:57] collinm1111 destroys Insect .\n[21:27:57] collinm1111 destroys Insect .\n[21:27:57] collinm1111 destroys Insect .\n[21:27:57] collinm1111 destroys Insect .\n[21:28:15] collinm1111 creates token: Insect (1/1).\n[21:28:18] collinm1111 creates token: Insect (1/1).\n[21:28:20] collinm1111 creates token: Insect (1/1).\n[21:28:22] collinm1111 creates token: Insect (1/1).\n[21:28:44] kozakAl creates token: Insect (1/1).\n[21:28:47] kozakAl gives collinm1111 control over Insect.\n[21:28:53] collinm1111 creates token: Insect (1/1).\n[21:28:55] collinm1111 creates token: Insect (1/1).\n[21:28:56] collinm1111 creates token: Insect (1/1).\n[21:29:01] collinm1111 destroys Insect .\n[21:29:01] collinm1111 destroys Insect .\n[21:29:01] collinm1111 destroys Insect .\n[21:29:01] collinm1111 destroys Insect .\n[21:29:18] collinm1111 taps Breeding Pool.\n[21:29:21] collinm1111 taps City of Brass.\n[21:29:22] collinm1111 sets counter life to 39 (+1).\n[21:29:23] collinm1111 sets counter life to 38 (-1).\n[21:29:23] collinm1111 sets counter life to 37 (-1).\n[21:29:27] collinm1111 taps Pendelhaven.\n[21:29:32] collinm1111 taps Fellwar Stone.\n[21:29:34] collinm1111 taps Dimir Signet.\n[21:29:38] collinm1111 puts Atraxa, Praetors' Voice into play from the stack.\n[21:29:57] collinm1111 taps Prairie Stream.\n[21:29:58] collinm1111 untaps Breeding Pool.\n[21:30:47] End/Cleanup\n[21:30:59] d-train sets counter g to 4 (+1).\n[21:30:59] maxvantage sets counter g to 2 (+1).\n\n[21:31:02] kozakAl's turn.\n\n[21:31:02] Untap\n[21:31:06] kozakAl untaps their permanents.\n[21:31:07] Upkeep\n[21:31:08] Draw\n[21:31:09] kozakAl draws 1 card(s).\n[21:31:11] First Main\n[21:33:34] kozakAl taps Sol Ring.\n[21:33:42] kozakAl taps Fetid Heath.\n[21:33:54] kozakAl taps Temple Garden.\n[21:33:55] kozakAl taps Swamp.\n[21:33:56] kozakAl plays Caress of Phyrexia from their hand.\n[21:34:18] kozakAl points from their Caress of Phyrexia to collinm1111.\n[21:34:26] collinm1111 sets counter life to 36 (-1).\n[21:34:26] collinm1111 sets counter life to 35 (-1).\n[21:34:26] collinm1111 sets counter life to 34 (-1).\n[21:34:28] collinm1111 sets counter g to 7 (+1).\n[21:34:28] kozakAl puts Caress of Phyrexia from the stack into their graveyard.\n[21:34:28] collinm1111 sets counter g to 8 (+1).\n[21:34:28] collinm1111 sets counter g to 9 (+1).\n[21:34:30] collinm1111 draws 1 card(s).\n[21:34:33] collinm1111 draws 1 card(s).\n[21:34:33] kozakAl puts Sungrass Prairie into play from their hand.\n[21:34:33] collinm1111 draws 1 card(s).\n\n[21:34:57] maxvantage's turn.\n\n[21:34:57] Untap\n[21:35:01] maxvantage untaps their permanents.\n[21:35:01] maxvantage untaps their permanents.\n[21:35:03] Draw\n[21:35:03] maxvantage draws 1 card(s).\n[21:36:46] First Main\n[21:36:46] Beginning of Combat\n[21:36:49] Declare Attackers\n[21:36:53] maxvantage taps Rot Wolf.\n[21:36:54] maxvantage taps Hand of the Praetors.\n[21:36:59] maxvantage points from their Rot Wolf to kozakAl.\n[21:36:59] maxvantage points from their Hand of the Praetors to kozakAl.\n[21:36:59] maxvantage points from their Atraxa, Praetors' Voice to kozakAl.\n[21:37:05] kozakAl points from their Ichorclaw Myr to maxvantage's Hand of the Praetors.\n[21:37:14] maxvantage taps Godless Shrine.\n[21:37:16] maxvantage plays Tainted Strike from their hand.\n[21:37:17] maxvantage points from their Tainted Strike to their Atraxa, Praetors' Voice.\n[21:37:35] kozakAl sets counter g to 1 (+1).\n[21:37:35] kozakAl sets counter g to 2 (+1).\n[21:37:35] kozakAl sets counter g to 3 (+1).\n[21:37:36] kozakAl sets counter g to 4 (+1).\n[21:37:36] kozakAl sets counter g to 5 (+1).\n[21:37:36] kozakAl sets counter g to 6 (+1).\n[21:37:37] kozakAl sets counter g to 7 (+1).\n[21:38:46] kozakAl sets counter g to 8 (+1).\n[21:38:46] kozakAl sets counter g to 9 (+1).\n[21:38:51] maxvantage puts Tainted Strike from the stack into their graveyard.\n[21:38:58] maxvantage puts Hand of the Praetors from play into their graveyard.\n[21:39:02] Second Main\n[21:39:19] maxvantage taps Forest.\n[21:39:20] maxvantage taps Island.\n[21:39:22] maxvantage untaps Island.\n[21:39:23] maxvantage untaps Forest.\n[21:39:45] maxvantage taps Forest.\n[21:39:46] maxvantage taps Island.\n[21:39:47] maxvantage plays Sylvan Library from their hand.\n[21:39:48] maxvantage puts Sylvan Library into play from the stack.\n\n[21:39:50] d-train's turn.\n\n[21:39:50] Untap\n[21:39:59] collinm1111 sets counter g to 10 (+1).\n[21:40:04] kozakAl sets counter g to 10 (+1).\n[21:40:12] d-train draws 1 card(s).\n[21:40:13] d-train puts Forest into play from their hand.\n[21:40:14] kozakAl puts Collective Restraint into play from their hand.\n[21:40:16] d-train untaps Woodland Cemetery.\n[21:40:17] d-train untaps Prairie Stream.\n[21:40:18] d-train untaps Llanowar Wastes.\n[21:40:29] collinm1111 plays Groundswell from their hand.\n[21:40:37] d-train taps Forest.\n[21:40:39] d-train taps Woodland Cemetery.\n[21:40:40] kozakAl has conceded the game.\n[21:40:42] d-train puts Talisman of Unity into play from their hand.\n[21:41:04] collinm1111 has conceded the game.\n\n[21:41:16] maxvantage's turn.\n\n[21:41:16] Untap\n[21:42:25] maxvantage untaps their permanents.\n[21:42:25] maxvantage untaps their permanents.\n[21:42:42] Draw\n[21:42:43] maxvantage draws 1 card(s).\n[21:42:44] maxvantage draws 1 card(s).\n[21:42:45] maxvantage draws 1 card(s).\n[21:43:50] maxvantage sets counter life to 39 (-1).\n[21:43:50] maxvantage sets counter life to 38 (-1).\n[21:43:50] maxvantage sets counter life to 37 (-1).\n[21:43:51] maxvantage sets counter life to 36 (-1).\n[21:43:51] maxvantage sets counter life to 35 (-1).\n[21:43:51] maxvantage sets counter life to 34 (-1).\n[21:43:51] maxvantage sets counter life to 33 (-1).\n[21:43:51] maxvantage sets counter life to 32 (-1).\n[21:43:55] maxvantage puts Overgrown Tomb into play from their hand.\n[21:43:57] maxvantage sets counter life to 31 (-1).\n[21:43:58] maxvantage sets counter life to 30 (-1).\n[21:44:06] maxvantage taps Overgrown Tomb.\n[21:44:07] maxvantage sets counter life to 29 (-1).\n[21:44:08] maxvantage sets counter life to 28 (-1).\n[21:44:08] maxvantage sets counter life to 29 (+1).\n[21:44:08] maxvantage sets counter life to 30 (+1).\n[21:44:09] maxvantage sets counter life to 31 (+1).\n[21:44:09] maxvantage sets counter life to 32 (+1).\n[21:44:13] First Main\n[21:44:14] Beginning of Combat\n[21:44:40] d-train puts Corpse Cur into play from the stack.\n[21:44:52] d-train moves Corpse Cur from play to their hand.\n[21:46:21] maxvantage taps Rot Wolf.\n[21:46:22] maxvantage points from their Rot Wolf to d-train.\n[21:46:24] maxvantage points from their Atraxa, Praetors' Voice to d-train.\n[21:46:49] d-train puts Phyrexian Digester from play into their graveyard.\n[21:46:52] maxvantage puts Rot Wolf from play into their graveyard.\n[21:46:53] d-train sets counter g to 5 (+1).\n[21:46:53] d-train sets counter g to 6 (+1).\n[21:46:54] d-train sets counter g to 7 (+1).\n[21:46:54] d-train sets counter g to 8 (+1).\n[21:46:55] maxvantage sets counter life to 31 (-1).\n[21:46:56] maxvantage sets counter life to 30 (-1).\n[21:46:56] maxvantage sets counter life to 31 (+1).\n[21:46:56] maxvantage sets counter life to 32 (+1).\n[21:46:57] maxvantage sets counter life to 33 (+1).\n[21:46:57] maxvantage sets counter life to 34 (+1).\n[21:46:57] maxvantage sets counter life to 35 (+1).\n[21:46:57] maxvantage sets counter life to 36 (+1).\n[21:47:07] maxvantage draws 1 card(s).\n[21:47:26] Second Main\n[21:47:52] maxvantage taps Fetid Heath.\n[21:47:52] maxvantage taps Forest.\n[21:47:52] maxvantage taps Island.\n[21:47:52] maxvantage taps Godless Shrine.\n[21:47:54] maxvantage plays Tine Shrike from their hand.\n[21:47:56] maxvantage puts Tine Shrike into play from the stack.\n\n[21:47:59] d-train's turn.\n\n[21:47:59] Untap\n[21:48:03] d-train untaps their permanents.\n[21:48:05] d-train draws 1 card(s).\n[21:48:33] maxvantage reveals their hand to kozakAl.\n[21:48:37] maxvantage reveals their hand to collinm1111.\n[21:49:05] d-train taps Forest.\n[21:49:05] d-train taps Woodland Cemetery.\n[21:49:05] d-train taps Prairie Stream.\n[21:49:05] d-train taps Llanowar Wastes.\n[21:49:10] d-train puts Might of Oaks into play from their hand.\n[21:49:17] d-train taps Whispering Specter.\n[21:49:52] d-train sets counter g to 9 (+1).\n[21:50:06] \ufffc maxvantage: gg")}},"load sample"),r.a.createElement(h,{playerStats:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},8:function(n,t,a){n.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f1819648.chunk.js.map