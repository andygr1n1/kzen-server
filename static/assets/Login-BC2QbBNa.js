import{j as i,F as j,A as L,H as C,J as k,u as R,K as T,al as w,am as E,an as b,L as N,ao as F}from"./index-Cx9aHWms.js";import{S as _,F as P,a as W}from"./formik.esm-ADxEa5mi.js";import{A as U}from"./AuthPasswordInput-e_2fnOLH.js";import{r as u,e as $}from"./antd-bK47dtYc.js";import{u as q}from"./useMutation-D6aZmw1J.js";import{A as M}from"./AuthEmailInput-D-YlC4Gb.js";import"./react-day-picker-BMg2DGmo.js";import"./cn-Bz47sbbS.js";import"./types-CKSFNBik.js";const V=()=>i.jsxs("div",{className:"font-kzen flex my-4 h-10 w-full flex-initial flex-col items-center justify-center",children:[i.jsx(j,{className:"cursor-pointer text-sm opacity-70 hover:text-blue-600 hover:underline hover:opacity-100",to:`/${L.REGISTER}`,children:"Register"}),i.jsxs(j,{className:"width-[200px] cursor-pointer text-xs opacity-70 hover:text-blue-600 hover:opacity-100",to:`/${L.RESTORE_ACCOUNT}`,children:["Forgot password?",i.jsx("span",{className:"px-1 hover:underline",children:"Restore it"})]})]});function z(e){return i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 14 14",...e,children:i.jsx("path",{fill:"currentColor",d:"M7.14 8.33v-2.6h6.69c.1.44.18.85.18 1.44c0 4-2.74 6.84-6.86 6.84S0 10.86 0 7s3.2-7 7.14-7c1.93 0 3.54.69 4.78 1.83L9.89 3.76c-.51-.48-1.41-1.04-2.75-1.04c-2.36 0-4.29 1.93-4.29 4.28s1.93 4.28 4.29 4.28c2.74 0 3.74-1.86 3.93-2.95H7.13Z"})})}function D(e={}){const{nonce:o,onScriptLoadSuccess:s,onScriptLoadError:r}=e,[n,l]=u.useState(!1),d=u.useRef(s);d.current=s;const a=u.useRef(r);return a.current=r,u.useEffect(()=>{const t=document.createElement("script");return t.src="https://accounts.google.com/gsi/client",t.async=!0,t.defer=!0,t.nonce=o,t.onload=()=>{var c;l(!0),(c=d.current)===null||c===void 0||c.call(d)},t.onerror=()=>{var c;l(!1),(c=a.current)===null||c===void 0||c.call(a)},document.body.appendChild(t),()=>{document.body.removeChild(t)}},[o]),n}const A=u.createContext(null);function B({clientId:e,nonce:o,onScriptLoadSuccess:s,onScriptLoadError:r,children:n}){const l=D({nonce:o,onScriptLoadSuccess:s,onScriptLoadError:r}),d=u.useMemo(()=>({clientId:e,scriptLoadedSuccessfully:l}),[e,l]);return $.createElement(A.Provider,{value:d},n)}function H(){const e=u.useContext(A);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function K({flow:e="implicit",scope:o="",onSuccess:s,onError:r,onNonOAuthError:n,overrideScope:l,state:d,...a}){const{clientId:t,scriptLoadedSuccessfully:c}=H(),f=u.useRef(),v=u.useRef(s);v.current=s;const x=u.useRef(r);x.current=r;const S=u.useRef(n);S.current=n,u.useEffect(()=>{var m,p;if(!c)return;const I=e==="implicit"?"initTokenClient":"initCodeClient",J=(p=(m=window==null?void 0:window.google)===null||m===void 0?void 0:m.accounts)===null||p===void 0?void 0:p.oauth2[I]({client_id:t,scope:l?o:`openid profile email ${o}`,callback:h=>{var g,y;if(h.error)return(g=x.current)===null||g===void 0?void 0:g.call(x,h);(y=v.current)===null||y===void 0||y.call(v,h)},error_callback:h=>{var g;(g=S.current)===null||g===void 0||g.call(S,h)},state:d,...a});f.current=J},[t,c,e,o,d]);const G=u.useCallback(m=>{var p;return(p=f.current)===null||p===void 0?void 0:p.requestAccessToken(m)},[]),O=u.useCallback(()=>{var m;return(m=f.current)===null||m===void 0?void 0:m.requestCode()},[]);return e==="implicit"?G:O}const Q=async({formData:e})=>{const o="http://localhost:8008/kzen/",s="022569013";try{return await C.post(`${o}google-login`,{credentials:"include",json:e,method:"POST",headers:{"x-api-key":s,"Content-Type":"application/json"}}).json()}catch(r){return await k(r)}},Z=()=>{const e=R(),{selectUser:o}=T();return{googleLogin:K({onSuccess:async r=>{const n=await Q({formData:{accessJWT:r.access_token}}),l=n==null?void 0:n.accessJWT,d=n==null?void 0:n.sessionJWT;l&&w(l);const a=E(l);w(l),b(d),o({queryClient:e,user:{id:a==null?void 0:a.id,role:a==null?void 0:a.role}})},onError:()=>{N("Google login failed")}})}},X=()=>{const{googleLogin:e}=Z();return i.jsx(_,{variant:"outlined",onClick:()=>e(),startIcon:i.jsx(z,{className:"text-rose-500"}),children:"Sign in with Google"})},Y=async e=>{const o="http://localhost:8008/kzen/",s="022569013";try{return await C.post(`${o}login`,{credentials:"include",json:e.formData,method:"POST",headers:{"x-api-key":s,"Content-Type":"application/json"}}).json()}catch(r){return await k(r)}},ee=()=>{const e=R(),{selectUser:o}=T(),s=q({mutationFn:({formData:n})=>Y({formData:n})});return{onSubmit:(n,l)=>{const{resetForm:d,setSubmitting:a}=l;s.mutate({formData:n},{onError:()=>{},onSuccess:t=>{d();const c=E(t==null?void 0:t.accessJWT),f=t==null?void 0:t.sessionJWT;b(f),w(t==null?void 0:t.accessJWT),o({queryClient:e,user:{id:c==null?void 0:c.id,role:c==null?void 0:c.role}})},onSettled:()=>{a(!1)}})}}},oe=()=>({validate:o=>{const s=F.safeParse(o);if(!s.success){const r={};for(const n of s.error.issues)r[n.path[0]]=n.message;return o.email.length||(r.email="Required field"),r}return{}}}),te=()=>({initialValues:{email:"",password:""}}),me=()=>{const{onSubmit:e}=ee(),{validate:o}=oe(),{initialValues:s}=te();return i.jsxs("div",{className:"flex flex-col gap-10 mt-10 items-center",children:[i.jsx(P,{initialValues:s,validate:o,onSubmit:e,children:i.jsxs(W,{className:"flex flex-col gap-5",children:[i.jsx(M,{}),i.jsx(U,{}),i.jsx(_,{className:"w-full",type:"submit",children:"Login"}),i.jsx(V,{})]})}),i.jsx(B,{clientId:"716184998922-jmt029830cbdas8tioao9uc9v4g9pb0k.apps.googleusercontent.com",children:i.jsx(X,{})})]})};export{me as default};
//# sourceMappingURL=Login-BC2QbBNa.js.map
