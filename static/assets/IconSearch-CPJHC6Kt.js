import{r as h}from"./antd-bK47dtYc.js";import{aG as v,j as u}from"./index-Cx9aHWms.js";var j=new Map,w=new WeakMap,I=0,z=void 0;function M(e){return e?(w.has(e)||(I+=1,w.set(e,I.toString())),w.get(e)):"0"}function E(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?M(e.root):e[t]}`).toString()}function D(e){const t=E(e);let s=j.get(t);if(!s){const a=new Map;let c;const i=new IntersectionObserver(n=>{n.forEach(r=>{var o;const g=r.isIntersecting&&c.some(f=>r.intersectionRatio>=f);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=g),(o=a.get(r.target))==null||o.forEach(f=>{f(g,r)})})},e);c=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:t,observer:i,elements:a},j.set(t,s)}return s}function V(e,t,s={},a=z){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const o=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:c,observer:i,elements:n}=D(s),r=n.get(e)||[];return n.has(e)||n.set(e,r),r.push(t),i.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(n.delete(e),i.unobserve(e)),n.size===0&&(i.disconnect(),j.delete(c))}}function O({threshold:e,delay:t,trackVisibility:s,rootMargin:a,root:c,triggerOnce:i,skip:n,initialInView:r,fallbackInView:o,onChange:g}={}){var f;const[m,A]=h.useState(null),x=h.useRef(),[b,R]=h.useState({inView:!!r,entry:void 0});x.current=g,h.useEffect(()=>{if(n||!m)return;let l;return l=V(m,(y,S)=>{R({inView:y,entry:S}),x.current&&x.current(y,S),S.isIntersecting&&i&&l&&(l(),l=void 0)},{root:c,rootMargin:a,threshold:e,trackVisibility:s,delay:t},o),()=>{l&&l()}},[Array.isArray(e)?e.toString():e,m,c,a,i,n,s,o,t]);const p=(f=b.entry)==null?void 0:f.target,C=h.useRef();!m&&p&&!i&&!n&&C.current!==p&&(C.current=p,R({inView:!!r,entry:void 0}));const d=[A,b.inView,b.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}const T=e=>e===v.all,_=e=>e===v.active,L=e=>e===v.favorite,N=e=>e===v.deleted,W=e=>e===v.archived,$=e=>e===v.completed;function F(e){return u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 24 24",...e,children:[u.jsx("circle",{cx:12,cy:12,r:5,fill:"currentColor",opacity:.3}),u.jsx("path",{fill:"currentColor",d:"M4 4v4l4-4zm12 0l4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7m-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"})]})}function G(e){return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 24 24",...e,children:u.jsxs("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,children:[u.jsx("path",{strokeDasharray:16,strokeDashoffset:16,d:"M10.5 13.5L3 21",children:u.jsx("animate",{fill:"freeze",attributeName:"stroke-dashoffset",begin:"0.4s",dur:"0.2s",values:"16;0"})}),u.jsx("path",{strokeDasharray:40,strokeDashoffset:40,d:"M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z",children:u.jsx("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.4s",values:"40;0"})})]})})}export{F as I,L as a,$ as b,N as c,T as d,G as e,W as f,_ as i,O as u};
//# sourceMappingURL=IconSearch-CPJHC6Kt.js.map
