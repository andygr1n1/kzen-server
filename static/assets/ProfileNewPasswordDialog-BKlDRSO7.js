const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProfileNewPasswordForm-X5VK1dHe.js","assets/index-Cx9aHWms.js","assets/antd-bK47dtYc.js","assets/react-day-picker-BMg2DGmo.js","assets/index-DY_qxQT6.css","assets/formik.esm-ADxEa5mi.js","assets/cn-Bz47sbbS.js","assets/formik-CkMvMzHs.css","assets/ProfileIndex-rBHi4SyT.js","assets/ProtectedRoutes-BInEfiaw.js","assets/useMatchMedia.hook-CVR6FWmx.js","assets/useMutation-D6aZmw1J.js","assets/ProtectedRoutes-Dix7VhZk.css","assets/XDatePicker-6LcKFFPc.js","assets/XTooltip-Bdc9vu0b.js","assets/XDatePicker-yNCoQybG.css","assets/date.helpers-BWySBUrV.js","assets/IconInfiniteLoading-BhfJWl73.js","assets/cropImage-BeABCRIm.js","assets/image.service-CXyyVGKV.js","assets/index--O-lbexr.js"])))=>i.map(i=>d[i]);
import{H as l,J as p,b2 as c,_ as w,j as r}from"./index-Cx9aHWms.js";import{r as i}from"./antd-bK47dtYc.js";import{e as u,g as m}from"./ProtectedRoutes-BInEfiaw.js";import{u as n}from"./ProfileIndex-rBHi4SyT.js";import{F as P}from"./formik.esm-ADxEa5mi.js";import{u as f}from"./useMutation-D6aZmw1J.js";import"./react-day-picker-BMg2DGmo.js";import"./cn-Bz47sbbS.js";import"./useMatchMedia.hook-CVR6FWmx.js";import"./XDatePicker-6LcKFFPc.js";import"./XTooltip-Bdc9vu0b.js";import"./date.helpers-BWySBUrV.js";import"./IconInfiniteLoading-BhfJWl73.js";import"./cropImage-BeABCRIm.js";import"./image.service-CXyyVGKV.js";import"./index--O-lbexr.js";const h=async({values:e})=>{const o="http://localhost:8008/kzen/",s="022569013";try{return await l.post(`${o}update-password`,{credentials:"include",json:e,method:"POST",headers:{"x-api-key":s,"Content-Type":"application/json"}}).json()}catch(t){return await p(t)}},x=()=>{const e=f({mutationFn:({values:s})=>h({values:s})});return{updatePassword:({values:s,onSuccess:t,onSettled:a})=>{e.mutate({values:s},{onSuccess:t,onSettled:a})}}},g=()=>{const{onCancel:e}=n(),{updatePassword:o}=x();return{onSubmit:(t,a)=>{const{setSubmitting:d}=a;o({values:t,onSuccess:()=>{e(),c("Password was successfully changed")},onSettled:()=>{d(!1)}})}}},j=()=>({validate:o=>{const s={};return o.repeatNewPassword!==o.newPassword&&(s.repeatNewPassword="Repeated password does not match the new password",s.newPassword="Passwords do not match"),o.password.length||(s.password="Required field"),o.newPassword.length||(s.newPassword="Required field"),o.repeatNewPassword.length||(s.repeatNewPassword="Required field"),s}}),y=()=>{const{data:e,isLoading:o}=u();return{initialValues:N({user:e}),isLoading:o}},N=({user:e})=>({email:(e==null?void 0:e.email)||"",password:"",newPassword:"",repeatNewPassword:""}),S=i.lazy(()=>w(()=>import("./ProfileNewPasswordForm-X5VK1dHe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))),L=()=>{const{editPassword:e,onCancel:o}=n(),{onSubmit:s}=g(),{validate:t}=j(),{initialValues:a}=y();return r.jsx(m,{title:"New password",open:!!e,onCancel:o,children:e?r.jsx("div",{className:"flex h-full w-full flex-auto flex-col gap-5",children:r.jsx(P,{enableReinitialize:!0,initialValues:a,validate:t,onSubmit:s,children:r.jsx(i.Suspense,{fallback:null,children:r.jsx(S,{})})})}):null})};export{L as default};
//# sourceMappingURL=ProfileNewPasswordDialog-BKlDRSO7.js.map
