(this["webpackJsonpwifi-qr-generator"]=this["webpackJsonpwifi-qr-generator"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(31),r=n.n(i),s=(n(94),n(13)),o=n(72),l=n(184),j=n(176),d=n(185),u=n(175),b=n(177),x=n(182),h=n(172),O=n(174),f=n(179),m=n(180),p=n(178),g=n(169),v=n(183),S=n(2);var W=function(){var e=a.useState(0),t=Object(s.a)(e,2),n=t[0],c=t[1],i=a.useState(""),r=Object(s.a)(i,2),W=r[0],w=r[1],C=a.useState(""),P=Object(s.a)(C,2),y=P[0],F=P[1],k=a.useState("WPA"),I=Object(s.a)(k,2),A=I[0],D=I[1],E=a.useState(!1),Q=Object(s.a)(E,2),R=Q[0],q=Q[1],B=a.useState(""),J=Object(s.a)(B,2),L=J[0],N=J[1],T=function(){c((function(e){return e-1}))},M=function(e){return function(t){"ssid"===e&&w(t.target.value),"password"===e&&F(t.target.value),"encryption"===e&&D(t.target.value),"hidden"===e&&q(t.target.value)}};return a.useEffect((function(){return o.generateWifiQRCode({ssid:W,password:y,encryption:A,hiddenSSID:R,outputFormat:{type:"image/png"}}).then((function(e){return N(e)})),function(){}}),[W,y,A,R]),Object(S.jsx)(v.a,{sx:{minWidth:275,maxWidth:400,mx:"auto",my:4},children:Object(S.jsx)(l.a,{sx:{p:4},children:Object(S.jsxs)(j.a,{activeStep:n,orientation:"vertical",children:[Object(S.jsxs)(d.a,{children:[Object(S.jsx)(u.a,{optional:null,children:"SSID/\u30d1\u30b9\u30ef\u30fc\u30c9\u5165\u529b"}),Object(S.jsxs)(b.a,{children:[Object(S.jsx)(h.a,{sx:{mb:2},label:"WiFi SSID",variant:"outlined",fullWidth:!0,value:W,onChange:M("ssid")}),Object(S.jsx)(h.a,{sx:{mb:2},label:"WiFi Password",variant:"outlined",fullWidth:!0,value:y,onChange:M("password")}),Object(S.jsxs)(p.a,{component:"fieldset",children:[Object(S.jsx)(g.a,{component:"legend",children:"\u6697\u53f7\u5316\u65b9\u5f0f"}),Object(S.jsxs)(f.a,{row:!0,"aria-label":"wifi-type",name:"row-radio-buttons-group",value:A,onChange:M("encryption"),children:[Object(S.jsx)(m.a,{value:"WPA",control:Object(S.jsx)(O.a,{}),label:"WPA / WPA2"}),Object(S.jsx)(m.a,{value:"WEP",control:Object(S.jsx)(O.a,{}),label:"WEP"}),Object(S.jsx)(m.a,{value:"None",control:Object(S.jsx)(O.a,{}),label:"None"})]})]}),Object(S.jsxs)(l.a,{sx:{mb:2},children:[Object(S.jsx)(x.a,{variant:"contained",onClick:function(){c((function(e){return e+1}))},sx:{mt:1,mr:1},children:"\u9032\u3080"}),Object(S.jsx)(x.a,{disabled:!0,onClick:T,sx:{mt:1,mr:1},children:"\u623b\u308b"})]})]})]}),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(u.a,{optional:null,children:"QR\u30b3\u30fc\u30c9\u306e\u8868\u793a"}),Object(S.jsxs)(b.a,{children:[Object(S.jsx)("a",{href:L,download:"".concat(W,".png"),children:Object(S.jsx)("img",{alt:"QRcode",src:L})}),Object(S.jsx)(l.a,{sx:{mb:2},children:Object(S.jsx)(x.a,{variant:"contained",href:L,download:"".concat(W,".png"),sx:{mt:1,mr:1},fullWidth:!0,children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"})}),Object(S.jsxs)(l.a,{sx:{mb:2},children:[Object(S.jsx)(x.a,{variant:"contained",onClick:function(){c(0)},sx:{mt:1,mr:1},children:"\u6700\u521d\u304b\u3089"}),Object(S.jsx)(x.a,{onClick:T,sx:{mt:1,mr:1},children:"\u623b\u308b"})]})]})]})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,188)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(W,{})}),document.getElementById("root")),w()},94:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.18e3a043.chunk.js.map