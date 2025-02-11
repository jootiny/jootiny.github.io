import{I as A,h as v,k as g}from"./chunk-2EFCFD44.js";import{a as T}from"./chunk-6EIFAT7J.js";T();T();var O=class{constructor(){this.queue=[]}add(s){return this.queue.push(new M(s)),this}play(){this.queue.forEach(s=>s.play())}},F={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},x=()=>{let t={linear:()=>e=>e},s={Sine:()=>e=>1-Math.cos(e*Math.PI/2),Expo:()=>e=>e?Math.pow(2,10*e-10):0,Circ:()=>e=>1-Math.sqrt(1-e*e),Back:()=>e=>e*e*(3*e-2),Bounce:()=>e=>{let r,n=4;for(;e<((r=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((r*3-2)/22-e,2)}};return["Quad","Cubic","Quart","Quint"].forEach((e,r)=>{s[e]=()=>n=>Math.pow(n,r+2)}),Object.keys(s).forEach(e=>{let r=s[e];t["easeIn"+e]=r,t["easeOut"+e]=()=>n=>1-r()(1-n),t["easeInOut"+e]=()=>n=>n<.5?r()(n*2)/2:1-r()(n*-2+2)/2,t["easeOutIn"+e]=()=>n=>n<.5?(1-r()(1-n*2))/2:(r()(n*2-1)+1)/2}),t},q=["translateX","translateY","translateZ"],P=(t,s)=>t instanceof HTMLElement?"transform"in t.style&&q.includes(s)?"transform":s in t.style?"style":"attribute":"attribute",S=t=>{let s=Date.now()+t.delay,e=s+t.duration,r=!!t.targets,n=[],d=()=>{if(r){Array.isArray(t.targets)||(t.targets=[t.targets]);for(let o of t.targets){let l={};for(let i in t.dest){let a=t.dest[i],p=P(o,i);if(Array.isArray(a))if(a.length===2&&typeof a[0]!="object")p==="transform"?o.style.transform=`${i}(${typeof a[0]=="string"?a[0]:a[0]+"px"})`:p==="style"?o.style[i]=a[0]:o[i]=a[0],l[i]=a[0],t.dest[i]=a[1];else{let f=0;for(let c of a)c.startTimeStamp=f,f+=c.duration;l[i]=o[i]}else p==="transform"?l[i]=o.style.transform.match(new RegExp(`${i}\\((\\w+)\\)`))[1]:p==="style"?l[i]=o.style[i]:l[i]=o[i]}n.push(l)}}},y=(o,l,i,a,p,f=!1)=>{let c;if(typeof a=="string")if(c=a.endsWith("%")?"%":a.endsWith("px")?"px":null,c)a=parseFloat(a);else throw new TypeError("string value must ends with '%' or 'px'");let u=f?a:(a-l)*i+l;c&&(u+=c);let h=P(o,p);h==="transform"?o.style.transform=`${p}(${u}${c?"":"px"})`:h==="style"?o.style[p]=u:o[p]=u},m=(o,l,i=!1)=>{t.targets.forEach((a,p)=>{Object.keys(t.dest).forEach(f=>{let c=parseFloat(n[p][f]),u=t.dest[f];if(typeof u=="object")if(Array.isArray(u)){let h=0;for(;h<u.length&&l-s>=u[h].startTimeStamp;)h++;let{value:b,duration:E,easing:$=t.easing,startTimeStamp:I}=u[h-1];c=h<=1?c:u[h-2].value,l<=s+E+I?(o=x()[$]()((l-s-I)/E),y(a,c,o,b,f)):i&&y(a,c,o,b,f,i)}else{let{value:h,duration:b,easing:E=t.easing}=u;l<=s+b?(o=x()[E]()((l-s)/b),y(a,c,o,h,f)):i&&y(a,c,o,h,f,i)}else typeof u=="function"&&(u=u(a,p)),y(a,c,o,u,f,i)})})},w=()=>{let o=Date.now();if(o>e)m(1,o,!0),typeof t.complete=="function"&&t.complete(t.targets),t.isPlay=!1;else{if(o>=s){let l=x()[t.easing]()((o-s)/t.duration);r&&m(l,o),typeof t.update=="function"&&t.update(t.targets)}requestAnimationFrame(w)}};d(),typeof t.begin=="function"&&t.begin(t.targets),w()},M=class{constructor(s=F){s={...F,...s};let{targets:e,duration:r,easing:n,delay:d,begin:y,update:m,complete:w,...o}=s;this.targets=e,this.duration=r,this.easing=n,this.delay=d,this.begin=y,this.update=m,this.complete=w,this.dest=o||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl||(this.tl=new O),this.tl}play(){this.isPlay||(this.isPlay=!0,S(this))}},k=t=>new M(t);k.random=(t,s)=>Math.floor(Math.random()*(s-t+1))+t;var L=(t,s,e,r)=>{let n,d="none";switch(s){case 0:n={opacity:[1,0]};break;case 1:n={opacity:[0,1]},d="block";break;case"bounceUpIn":n={begin(y){g(t,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},d="block";break;case"shrinkIn":n={begin(y){g(t,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},d="block";break;case"slideRightIn":n={begin(y){g(t,"block")},translateX:["100%","0%"],opacity:[0,1]},d="block";break;case"slideRightOut":n={translateX:["0%","100%"],opacity:[1,0]};break;default:n=s,d=s.display;break}k(Object.assign({targets:t,duration:200,easing:"linear",begin(){r&&r()},complete(){g(t,d),e&&e()}},n)).play()},R=(t,s,e)=>{k({targets:typeof s=="number"&&typeof t!="number"?t.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:s||(typeof t=="number"?t:t?v(t)+document.documentElement.scrollTop-A:0),complete(){e&&e()}}).play()};export{L as a,R as b};
/*! For license information please see chunk-F4Z622YX.js.LEGAL.txt */
