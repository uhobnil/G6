(self.webpackChunk_antv_g6_site=self.webpackChunk_antv_g6_site||[]).push([[1876],{77376:function(e,t,a){"use strict";var n=a(90819),o=a.n(n),i=a(73193),r=a.n(i),s=a(89933),d=a.n(s),c=a(45332),l=a.n(c),u=a(58757),f=a(53751),h=a(35667),p=Layout,v=p.initThreads,g=p.supportsThreads,m=p.ForceLayout,y="undefined"!=typeof window,b=y?window.g6v5:null,x=y?window.Algorithm:{},w=800,S=800;t.Z=function(e){var t=e.language,a=void 0===t?"zh":t,n=u.useRef(null),i=(0,u.useState)(null),s=l()(i,2),c=s[0],p=s[1],y=(0,u.useState)({nodes:[],edges:[]}),z=l()(y,2),k=z[0],j=z[1],A=(0,u.useState)({}),I=l()(A,2),R=I[0],C=I[1];(0,u.useEffect)((function(){c||(n&&n.current&&(w=n.current.offsetWidth,S=n.current.offsetHeight),fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json").then((function(e){return e.json()})).then((function(e){var t=(0,f.lv)(e,!1,!0);t=(0,f.g_)(t);var a=(0,f.ow)(t);N(t,a),C(a),j(t)})))}),[]);var N=function(){var e=d()(o()().mark((function e(t){var a,i,s,d,c=arguments;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:R,e.next=3,g();case 3:return i=e.sent,e.next=6,v(i);case 6:s=e.sent,b.stdLib.layouts["force-wasm"]=m,d=new b.Graph({renderer:"canvas",container:n.current,width:w,height:S,data:t,layout:{type:"force-wasm",threads:s,dimensions:2,maxIteration:800,minMovement:.4,distanceThresholdMode:"mean",factor:1,gravity:10,linkDistance:80,edgeStrength:200,nodeStrength:1e3,coulombDisScale:.005,damping:.9,maxSpeed:1e3,interval:.02},modes:{default:["zoom-canvas","drag-canvas","drag-node","brush-select","click-select"]},theme:{type:"spec",specification:{node:{dataTypeField:"cluster"}}},edge:function(e){return r()(r()({},e),{},{data:r()(r()({},e.data),{},{keyShape:{lineWidth:.5},haloShape:{},animates:{buildIn:[{fields:["opacity"],shapeId:"keyShape",duration:500,delay:1e3}],buildOut:[{fields:["opacity"],duration:200}],update:[{fields:["lineWidth"],shapeId:"keyShape"},{fields:["opacity"],shapeId:"haloShape"}]}})})},node:function(e){var t=a[e.id]||0,n=4;t>20?n=-1:t>15?n=0:t>10?n=1:t>6?n=2:t>3&&(n=3);var o={};return t>20&&(o[0]={text:"核心人员",position:"right",lod:n-2}),t>15&&(o[1]={text:"A",position:"rightTop",lod:n-1}),t>10&&(o[2]={text:"B",position:"rightBottom",lod:n-1}),r()(r()({},e),{},{data:r()(r()({},e.data),{},{lodStrategy:{levels:[{zoomRange:[0,.8]},{zoomRange:[.8,.9]},{zoomRange:[.9,1],primary:!0},{zoomRange:[1,1.1]},{zoomRange:[1.1,.2]},{zoomRange:[1.2,1.3]},{zoomRange:[1.3,1.4]},{zoomRange:[1.4,1.5]},{zoomRange:[1.5,1/0]}],animateCfg:{duration:500}},animates:{buildIn:[{fields:["opacity"],duration:1e3,delay:500+500*Math.random()}],buildOut:[{fields:["opacity"],duration:200}],hide:[{fields:["size"],duration:200},{fields:["opacity"],duration:200,shapeId:"keyShape"},{fields:["opacity"],duration:200,shapeId:"labelShape"}],show:[{fields:["size"],duration:200},{fields:["opacity"],duration:200,shapeId:"keyShape",order:0}],update:[{fields:["lineWidth","fill","r"],shapeId:"keyShape"},{fields:["fontSize"],shapeId:"iconShape"},{fields:["opacity"],shapeId:"haloShape"}]},haloShape:{},keyShape:{r:e.data.size?e.data.size/2:15},iconShape:{img:"https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg",fill:"#fff",lod:n-1,fontSize:e.data.size?e.data.size/3+5:13},labelShape:{text:e.id,opacity:.8,maxWidth:"150%",lod:n},labelBackgroundShape:{lod:n},badgeShapes:o})})}}),p(d);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();"undefined"!=typeof window&&(window.onresize=function(){n&&n.current&&(w=n.current.offsetWidth,S=n.current.offsetHeight)});var _="zh"===a?"135px":"226px";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{ref:n,style:{height:"calc(100vh - 100px)",width:"100%"}}),(0,h.jsxs)("div",{className:"v5-controller",children:[(0,h.jsx)("button",{className:"v5-button",onClick:function(){c.updateData("node",k.nodes.map((function(e){return{id:e.id,data:{cluster:e.data.cluster+1}}})))},style:{width:_},children:"zh"===a?"更换颜色顺序":"Change Color Order"}),(0,h.jsxs)("select",{className:"v5-select",onChange:function(e){switch(e.target.value){case"degree":return void c.updateData("node",k.nodes.map((function(e){return{id:e.id,data:{size:R[e.id]+24}}})));case"pagerank":if(null!=x&&x.pageRank){var t=x.pageRank(k),a=1/0,n=-1/0;Object.values(t).forEach((function(e){e<a&&(a=e),e>n&&(n=e)}));var o=[15,60],i=n-a;return void c.updateData("node",k.nodes.map((function(e){return{id:e.id,data:{size:(t[e.id]-a)/i*(o[1]-o[0])+o[0]}}})))}default:c.updateData("node",k.nodes.map((function(e){return{id:e.id,data:{size:30}}})))}},style:{width:_},children:[(0,h.jsx)("option",{value:"none",children:"zh"===a?"节点重要性-无":"Node Importance: None"}),(0,h.jsx)("option",{value:"degree",children:"zh"===a?"节点重要性-度中心性":"Node Importance: Degree Centerness"}),(0,h.jsx)("option",{value:"pagerank",children:"zh"===a?"节点重要性-PageRank":"Node Importance: PageRank"})]})]})]})}},53751:function(e,t,a){"use strict";a.d(t,{XW:function(){return S},YZ:function(){return z},g_:function(){return w},lv:function(){return b},ow:function(){return x},uH:function(){return y}});var n=a(90819),o=a.n(n),i=a(89933),r=a.n(i),s=a(73193),d=a.n(s),c="undefined"!=typeof window,l=c?window.g6v5:null,u=c?window.Algorithm:{},f=c?window.Layout:{},h=f.initThreads,p=f.supportsThreads,v=f.ForceLayout,g=function(e){return{buildIn:[{fields:["opacity"],duration:1e3,delay:void 0===e?1e3+1e3*Math.random():e}],buildOut:[{fields:["opacity"],duration:200}],update:[{fields:["lineWidth","fill","r"],shapeId:"keyShape"},{fields:["fontSize"],shapeId:"iconShape"},{fields:["opacity"],shapeId:"haloShape"}],hide:[{fields:["size"],duration:200},{fields:["opacity"],duration:200,shapeId:"keyShape"},{fields:["opacity"],duration:200,shapeId:"labelShape"}],show:[{fields:["size"],duration:200},{fields:["opacity"],duration:200,shapeId:"keyShape",order:0}]}},m=function(e){return{buildIn:[{fields:["opacity"],duration:300,delay:void 0===e?1e3+1e3*Math.random():e}],buildOut:[{fields:["opacity"],duration:200}],update:[{fields:["lineWidth"],shapeId:"keyShape"},{fields:["opacity"],shapeId:"haloShape"}]}},y={type:"spec",base:"light",specification:{node:{dataTypeField:"cluster"}}},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=new Set,o=[];e.nodes.forEach((function(e){if(!n.has(e.id)){var i,r,s,d;n.add(e.id);var c={id:e.id,data:{label:e.olabel||(null===(i=e.data)||void 0===i?void 0:i.label),x:t?null===(r=e.data)||void 0===r?void 0:r.x:10*e.x,y:t?null===(s=e.data)||void 0===s?void 0:s.y:10*e.y}};t&&(c.data.z=e.z||(null===(d=e.data)||void 0===d?void 0:d.z)),a&&(delete c.data.x,delete c.data.y,delete c.data.z),o.push(c)}}));var i=e.edges.map((function(e){return{id:e.id||"edge-".concat(Math.random()),source:e.source,target:e.target,data:d()({},e)}}));return{nodes:o,edges:i}},x=function(e){var t={};return e.edges.forEach((function(e){var a=e.source,n=e.target;t[a]=t[a]||0,t[n]=t[n]||0,t[a]++,t[n]++})),t},w=function(e){if(null!=u&&u.labelPropagation)return u.labelPropagation(e,!1).clusters.forEach((function(e,t){e.nodes.forEach((function(e){e.data.cluster="c".concat(t)}))})),e},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,n=e.data,o=e.width,i=e.height,r=e.container,s=e.degrees,c=e.lodStrategyLevels,u=e.renderer,f=e.theme,h=void 0===f?y:f,p=new l.Graph({container:r,width:o,height:i,type:"graph",renderer:u,data:n,modes:{default:[{type:"zoom-canvas",key:"123",triggerOnItems:!0},"drag-node","drag-canvas","hover-activate","brush-select","click-select"]},theme:d()(d()({},y),h),edge:function(e){return d()(d()({},e),{},{data:d()(d()({},e.data),{},{type:"line-edge",animates:a()})})},node:function(e){var a=s[e.id]||0,n=3;return a>40?n=-2:a>20?n=-1:a>10?n=0:a>5?n=1:a>2&&(n=2),d()(d()({},e),{},{data:d()(d()({animates:t()},e.data),{},{lodStrategy:{levels:c,animateCfg:{duration:500}},labelShape:0!==a?{text:e.data.label,maxWidth:"400%",offsetY:8,lod:n}:void 0,labelBackgroundShape:0!==a?{lod:n}:void 0,iconShape:0!==a?{img:"https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg",fontSize:12+a/4,opacity:.8,lod:n+2}:void 0,keyShape:{r:12+a/4}})})}});return p.zoom(.15,{x:0,y:0}),p},z=function(){var e=r()(o()().mark((function e(t){var a,n,i,r,s,c,u,f,g;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.stdLib.layouts["force-wasm"]=v,a=t.data,n=t.width,i=t.height,r=t.container,s=t.degrees,e.next=4,p();case 4:return c=e.sent,e.next=7,h(c);case 7:return e.sent,u=new l.Graph({container:r,width:n,height:i,type:"graph",renderer:"webgl-3d",data:a,modes:{default:[{type:"orbit-canvas-3d",trigger:"drag"},"zoom-canvas-3d"]},theme:{type:"spec",base:"dark",specification:{node:{dataTypeField:"cluster"}}},edge:function(e){return d()(d()({},e),{},{data:d()(d()({},e.data),{},{keyShape:{lineWidth:.6,opacity:.6,stroke:"#fff"},type:"line-edge"})})},node:function(e){return d()(d()({},e),{},{data:d()(d()({},e.data),{},{type:"sphere-node",keyShape:{r:12+s[e.id]/2},labelShape:s[e.id]>20?{text:e.data.label,fontSize:100,lod:-1,fill:"rgba(255,255,255,0.85)",wordWrap:!1,isBillboard:!0}:void 0})})}}),f=function(e,t,a,n){var o=n.canvas.getConfig(),i=(o.width,10);t*t>2*a*a||a*a>2*t*t&&(i*=.5);var r=t*(20/o.height)*i;e.rotate(r,0)},setTimeout((function(){var e=u.canvas.getCamera(),t=e.getPosition(),a=0,n=0;!function o(){e.setPosition([t[0],t[1],t[2]+a]);var i=n<100?Math.min(.5*n,20):Math.min(.2*(200-n),20);f(e,i,i,u),g=requestAnimationFrame(o),n>200&&cancelAnimationFrame(g),a+=50*(n<50?3:.5),n++}()}),1e3),u.once("canvas:pointerdown",(function(e){g&&cancelAnimationFrame(g)})),u.once("wheel",(function(e){g&&cancelAnimationFrame(g)})),e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6768:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var n=a(90819),o=a.n(n),i=a(89933),r=a.n(i),s=a(45332),d=a.n(s),c=a(58757),l=a(76711),u=a.n(l),f=a(73193),h=a.n(f),p=a(53751),v=a(35667),g=function(e){var t=e.language,a=e.graph,n=e.zoomLevels,o=e.createGraph,i=(0,c.useState)(!1),r=d()(i,2),s=r[0],l=r[1],f=(0,c.useState)([]),g=d()(f,2),m=g[0],y=g[1],b=(0,c.useState)("#ffffff"),x=d()(b,2),w=x[0],S=x[1],z=(0,c.useState)(p.uH),k=d()(z,2),j=k[0],A=k[1],I=(0,c.useState)("canvas"),R=d()(I,2),C=(R[0],R[1]),N=((0,c.useMemo)((function(){return n.map((function(e,t){var a=e.zoomRange;return 0===t?a[1]-.01:t===n.length-1?a[0]+.01:(a[0]+a[1])/2}))}),[n]),"zh"===t?"135px":"226px");return(0,v.jsxs)("div",{className:"v5-controller",children:[(0,v.jsx)("div",{className:"v5-buttons",children:(0,v.jsx)("button",{className:"v5-button",onClick:function(){var e=a.canvas.context.config.canvas,t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;if(t)t.call(e);else if(void 0!==window.ActiveXObject){var n=new ActiveXObject("WScript.Shell");null!==n&&n.SendKeys("{F11}")}},style:{width:"100%",background:"rgba(34,126,255,0.3)"},children:"zh"===t?"全屏":"Fullscreen"})}),(0,v.jsxs)("select",{className:"v5-select",onChange:function(e){var t=e.target.value;C(t),o(t,void 0,void 0,j)},style:{width:N},children:[(0,v.jsx)("option",{value:"canvas",children:"Canvas"}),(0,v.jsx)("option",{value:"webgl",children:"WebGL"}),(0,v.jsx)("option",{value:"webgl-3d",children:"WebGL-3D"}),(0,v.jsx)("option",{value:"svg",disabled:!0,children:"SVG(coming soon)"})]}),(0,v.jsxs)("select",{className:"v5-select",onChange:function(e){var t=e.target.value;l(!1);var n=p.uH;switch(t){case"light":case"dark":n=h()(h()({},p.uH),{},{base:t});break;case"blue":n={type:"spec",base:"light",specification:{canvas:{backgroundColor:"#f3faff"},node:{dataTypeField:"cluster",palette:["#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"]}}};break;case"yellow":n={type:"spec",base:"light",specification:{canvas:{backgroundColor:"#fcf9f1"},node:{dataTypeField:"cluster",palette:["#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"]}}};break;case"custom":return l(!0),y(["#cccccc"]),void A(n)}a.updateTheme(n),A(n)},style:{width:N},children:[(0,v.jsx)("option",{value:"light",children:"zh"===t?"亮色主题":"Light Theme"}),(0,v.jsx)("option",{value:"dark",children:"zh"===t?"暗色主题":"Dark Theme"}),(0,v.jsx)("option",{value:"blue",children:"zh"===t?"蓝色主题":"Blue Theme"}),(0,v.jsx)("option",{value:"yellow",children:"zh"===t?"黄色主题":"Yellow Theme"}),(0,v.jsx)("option",{value:"custom",children:"zh"===t?"自定义主题":"Custom Theme"})]}),(0,v.jsxs)("div",{className:"v5-custom-theme-wrapper",style:{display:s?"block":"none"},children:[(0,v.jsxs)("div",{className:"v5-custom-colors-wrapper",children:[(0,v.jsx)("a",{className:"v5-custom-colors-btn",onClick:function(){y((function(e){return[].concat(u()(e),["#ccc"])}))},children:"+"}),m.map((function(e,t){return(0,v.jsx)("input",{type:"color",className:"v5-custom-color",value:e,onChange:function(e){return function(e,t){y((function(a){var n=u()(a);return n[t]=e.target.value,n}))}(e,t)}})})),(0,v.jsx)("a",{className:"v5-custom-colors-btn",onClick:function(){y((function(e){return e.splice(0,e.length-1)}))},children:"-"})]}),(0,v.jsxs)("div",{className:"v5-custom-bg-color",children:["zh"===t?"背景色：":"Background: ",(0,v.jsx)("input",{type:"color",className:"v5-custom-color v5-custom-bg-color",value:w,onChange:function(e){return function(e){S(e.target.value)}(e)}})]}),(0,v.jsx)("button",{onClick:function(){a.updateTheme({type:"spec",specification:{canvas:{backgroundColor:w||"#ffffff"},node:{dataTypeField:"cluster",palette:m}}})},className:"v5-custom-apply-btn",children:"zh"===t?"应用":"Apply"})]})]})},m=("undefined"!=typeof window&&window.g6v5,800),y=800,b=[{zoomRange:[0,.16]},{zoomRange:[.16,.2]},{zoomRange:[.2,.3],primary:!0},{zoomRange:[.3,.5]},{zoomRange:[.5,.8]},{zoomRange:[.8,1.5]},{zoomRange:[1.5,1.8]},{zoomRange:[1.8,2]},{zoomRange:[2,1/0]}],x=function(e){var t=e.language,a=void 0===t?"zh":t,n=c.useRef(null),i=(0,c.useState)(null),s=d()(i,2),l=s[0],u=s[1],f=(0,c.useState)({nodes:[],edges:[]}),h=d()(f,2),x=h[0],w=h[1],S=(0,c.useState)({nodes:[],edges:[]}),z=d()(S,2),k=z[0],j=z[1],A=(0,c.useState)({}),I=d()(A,2),R=I[0],C=I[1],N=(0,c.useState)(!1),_=d()(N,2),F=_[0],T=_[1];(0,c.useEffect)((function(){T(!0),l||(n&&n.current&&(m=n.current.offsetWidth,y=n.current.offsetHeight),fetch("https://gw.alipayobjects.com/os/basement_prod/0b9730ff-0850-46ff-84d0-1d4afecd43e6.json").then((function(e){return e.json()})).then((function(e){var t=(0,p.lv)(e);t=(0,p.g_)(t);var a=(0,p.ow)(t);L(!1,t,a),C(a),w(t)})))}),[]);var W=function(e){fetch("https://assets.antv.antgroup.com/g6/eva-3d.json").then((function(e){return e.json()})).then((function(t){var a=(0,p.lv)(t,!0);a=(0,p.g_)(a),j(a),e(a)}))},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p.uH;T(!0);var s=function(){var e=r()(o()().mark((function e(t){var i;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.YZ)({container:n.current,width:m,height:y,data:t,degrees:a});case 2:(i=e.sent).on("afterlayout",(function(e){return T(!1)})),u(i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){if("webgl-3d"===e)null!=k&&k.nodes.length?s(k):W(s);else{var o=(0,p.XW)({renderer:e,container:n.current,width:m,height:y,data:t,degrees:a,lodStrategyLevels:b,theme:i});o.on("afterlayout",(function(e){return T(!1)})),u(o)}};l?l.destroy((function(){d()})):d()};return"undefined"!=typeof window&&(window.onresize=function(){n&&n.current&&(m=n.current.offsetWidth,y=n.current.offsetHeight)}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{ref:n,style:{height:"calc(100vh - 100px)",width:"100%"}}),(0,v.jsx)(g,{language:a,graph:l,zoomLevels:b,createGraph:L}),F?(0,v.jsx)("div",{className:"v5-loading-mask",children:(0,v.jsxs)("div",{className:"v5-loading",children:[(0,v.jsx)("img",{className:"v5-loading-img",src:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*atJHQYsFxogAAAAAAAAAAAAADmJ7AQ/original"}),(0,v.jsx)("p",{className:"v5-loading-txt",children:"数据加载中…"})]})}):""]})}},78445:function(e,t,a){var n=a(88513);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},26431:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},93647:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},76711:function(e,t,a){var n=a(78445),o=a(26431),i=a(15274),r=a(93647);e.exports=function(e){return n(e)||o(e)||i(e)||r()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);