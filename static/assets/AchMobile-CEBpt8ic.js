import{j as t}from"./index-Cx9aHWms.js";import{A as a,a as l,b as o,s as d}from"./AchView-DIin4I8N.js";import{c as m}from"./cn-Bz47sbbS.js";import{r as p}from"./antd-bK47dtYc.js";import{X as c}from"./XMobileMenu-BWyIqEbF.js";import{A as n,a as x,b as f}from"./AchToggleEdit-D8Nqb8YI.js";import{i as j}from"./ProtectedRoutes-BInEfiaw.js";import"./react-day-picker-BMg2DGmo.js";import"./IconNew-BhAnMb5r.js";import"./XTooltip-Bdc9vu0b.js";import"./formik.esm-ADxEa5mi.js";import"./useMutation-D6aZmw1J.js";import"./achResponseFr-DHzlt_Pk.js";import"./provider-CFg4W0mD.js";import"./IconEye-DfyAN8Gq.js";import"./date.helpers-BWySBUrV.js";import"./IconHeart-CwlJhkiG.js";import"./useMatchMedia.hook-CVR6FWmx.js";const u=({ach:e,openDrawer:s,onClose:i})=>t.jsx(c,{title:j(e.title),onClose:i,open:s,height:"450px",children:t.jsxs("div",{className:"flex flex-col gap-4 h-[270px] ",children:[t.jsx(n,{context:"drawer",onClose:i,id:e.id,isFavorite:!!e.is_favorite,label:t.jsx("span",{className:"flex w-full justify-start capitalize",children:e.is_favorite?"Unfavorite":"Favorite"})}),t.jsx(a,{context:"drawer",onClose:i,id:e.id}),t.jsx(x,{context:"drawer",onClose:i,id:e.id,label:t.jsx("span",{className:"flex  w-full justify-start capitalize",children:"Edit"})}),t.jsx(l,{context:"drawer",onClose:i,id:e.id,isArchived:!!e.archived,label:t.jsx("span",{className:"flex  w-full justify-start capitalize",children:e.archived?"Unarchive":"Archive"})}),t.jsx(f,{context:"drawer",onClose:i,id:e.id,deletedAt:!!e.deleted_at,label:t.jsx("span",{className:"flex  w-full justify-start capitalize",children:e.deleted_at?"Restore":"Move to bin"})})]})}),U=({ach:e})=>{const[s,i]=p.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:m(d.ach,"flex-[41%] max-w-[41%] relative"),onClick:()=>i(r=>!r),children:[t.jsx("img",{src:`https://firebunny-storage.b-cdn.net/kzen/achievements/${e.img_path}`,className:"animate-opacity-3 w-full flex h-full rounded-lg",alt:e.title}),t.jsx(o,{ach:e,isMobile:!0})]}),t.jsx(u,{ach:e,openDrawer:s,onClose:()=>i(!1)})]})};export{U as default};
//# sourceMappingURL=AchMobile-CEBpt8ic.js.map
