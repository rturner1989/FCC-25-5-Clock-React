(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(7),s=n.n(r),a=(n(13),n(3)),o=n(5),l=n(1),d=i.a.createContext(),u=function(e){var t=e.children,n=Object(c.useState)(5),i=Object(a.a)(n,2),r=i[0],s=i[1],u=Object(c.useState)(25),b=Object(a.a)(u,2),j=b[0],h=b[1],O=Object(c.useState)(),m=Object(a.a)(O,2),f=m[0],x=m[1],p=Object(c.useState)(),g=Object(a.a)(p,2),k=g[0],S=g[1],v=Object(c.useState)(!1),I=Object(a.a)(v,2),T=I[0],N=I[1],L=Object(c.useState)(!1),C=Object(a.a)(L,2),w=C[0],B=C[1];return Object(c.useEffect)((function(){if(T){var e=null;return k>=0&&!w?e=setTimeout((function(){S((function(e){return e-1})),x(60*r)}),1e3):f>=0&&w?e=setTimeout((function(){x((function(e){return e-1})),S(60*j)}),1e3):k<=0?B(!0):f<=0&&B(!1),function(){clearTimeout(e)}}}),[f,k,T,w]),Object(c.useEffect)((function(){S(60*j),x(60*r)}),[r,j]),Object(l.jsx)(d.Provider,{value:{breakLength:r,sessionLength:j,sessionTimer:k,breakTimer:f,isTimerRunning:w,setBreakLength:s,setSessionLength:h,increment:function(e){T||("break-increment"===e?r<60&&s((function(e){return e+1})):"session-increment"===e&&j<60&&h((function(e){return e+1})))},decrement:function(e){T||("break-decrement"===e?r>1&&s((function(e){return e-1})):"session-decrement"===e&&j>1&&h((function(e){return e-1})))},handleStartStop:function(){N(!T)},reset:function(){N(!1),s(5),h(25),S(60*j),x(60*r),B(!1)},togglePlayPauseBtn:function(){return!0===T?Object(l.jsx)(o.b,{"aria-hidden":!0,focusable:!1}):Object(l.jsx)(o.a,{"aria-hidden":!0,focusable:!1})}},children:t})},b=function(){return Object(c.useContext)(d)},j=n(6),h=function(e){var t=e.titleId,n=e.title,c=e.incId,i=e.decId,r=e.lengthId,s=e.length,a=b(),o=a.decrement,d=a.increment,u=a.decreaseOnMouseDown,h=a.clearOnMouseDown;return Object(l.jsxs)("div",{className:"length-controller",children:[Object(l.jsx)("h3",{className:"length-title",id:t,children:n}),Object(l.jsxs)("div",{className:"decinc-btn-container",children:[Object(l.jsxs)("button",{className:"decinc-btn-child",id:i,onClick:function(){return o(i)},onMouseDown:u,onMouseUp:h,children:[Object(l.jsx)("span",{className:"label-hidden",children:"Decrement Length"}),Object(l.jsx)(j.a,{"aria-hidden":!0,focusable:!1})]}),Object(l.jsx)("p",{className:"length-id",id:r,children:s}),Object(l.jsxs)("button",{className:"decinc-btn-child",id:c,onClick:function(){return d(c)},children:[Object(l.jsx)("span",{className:"label-hidden",children:"Increment Length"}),Object(l.jsx)(j.b,{"aria-hidden":!0,focusable:!1})]})]})]})},O=n(8),m=function(){var e=b(),t=e.handleStartStop,n=e.reset,i=e.sessionTimer,r=e.breakTimer,s=e.togglePlayPauseBtn,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){0!==i&&0!==r||(a.current.play(),a.current.currentTime=1)}),[i,r]),Object(l.jsxs)("div",{id:"timer-control-container",children:[Object(l.jsxs)("button",{id:"start_stop",className:"timer-btn-control",onClick:t,children:[Object(l.jsx)("span",{className:"label-hidden",children:"Start/Stop"}),s()]}),Object(l.jsxs)("button",{id:"reset",className:"timer-btn-control",onClick:function(){a.current.pause(),a.current.currentTime=0,n()},children:[Object(l.jsx)("span",{className:"label-hidden",children:"Reset"}),Object(l.jsx)(O.a,{"aria-hidden":!0,focusable:!1})]}),Object(l.jsx)("audio",{id:"beep",preload:"auto",ref:a,src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})},f=function(){var e=b(),t=e.breakTimer,n=e.sessionTimer,c=e.isTimerRunning;return Object(l.jsxs)("section",{id:"timer-container",children:[Object(l.jsxs)("div",{id:"timer-display-container",children:[Object(l.jsx)("h3",{id:"timer-label",children:c?"Break":"Session"}),Object(l.jsx)("p",{id:"time-left",children:function(){var e=c?t:n,i=Math.floor(e/60),r=e-60*i;return(i=i<10?"0"+i:i)+":"+(r=r<10?"0"+r:r)}()})]}),Object(l.jsx)(m,{})]})},x=function(){var e=b(),t=e.breakLength,n=e.sessionLength;return Object(l.jsxs)("div",{id:"app-container",children:[Object(l.jsx)("section",{id:"app-header",children:Object(l.jsx)("h1",{children:"25 + 5 Clock"})}),Object(l.jsxs)("section",{id:"timer-length-controls",children:[Object(l.jsx)(h,{titleId:"break-label",title:"Break Length",incId:"break-increment",decId:"break-decrement",lengthId:"break-length",length:t}),Object(l.jsx)(h,{titleId:"session-label",title:"Session Length",incId:"session-increment",decId:"session-decrement",lengthId:"session-length",length:n})]}),Object(l.jsx)(f,{})]})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{children:Object(l.jsx)(x,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5c1fed9c.chunk.js.map