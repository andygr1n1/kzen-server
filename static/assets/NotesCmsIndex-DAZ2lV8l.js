const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NotesLabelsTabs-D20_5fIP.js","assets/index-Cx9aHWms.js","assets/antd-bK47dtYc.js","assets/react-day-picker-BMg2DGmo.js","assets/index-DY_qxQT6.css","assets/formik.esm-ADxEa5mi.js","assets/cn-Bz47sbbS.js","assets/formik-CkMvMzHs.css","assets/useMutation-D6aZmw1J.js","assets/ProtectedRoutes-BInEfiaw.js","assets/useMatchMedia.hook-CVR6FWmx.js","assets/ProtectedRoutes-Dix7VhZk.css","assets/XSkeleton-x0yqnB_E.js","assets/XTiptap-Ch2jQgok.js","assets/XTiptap-B_vjNogu.css","assets/IconNew-BhAnMb5r.js","assets/provider-IGjFkmm5.js","assets/types-8-lvdrKU.js","assets/IconCheck-DtfZ8jdC.js","assets/IconSearch-CPJHC6Kt.js","assets/debounce-CqMFxJgi.js","assets/NoteEditorDialog-Cv0uILeF.js","assets/XTooltip-Bdc9vu0b.js","assets/IconHeart-CwlJhkiG.js","assets/date.helpers-BWySBUrV.js"])))=>i.map(i=>d[i]);
import{j as e,o as b,aI as C,_ as le,G as q,O as _,P as g,J as y,Q as G,M as I,ap as V,aG as ce,aF as P,T as de,u as ue,U as he,R as xe,a as Q,N as pe}from"./index-Cx9aHWms.js";import{g as me,a as fe,X as T,s as ve,c as E,d as m,I as Y,b as J,h as M,i as ge,j as je,k as Ne,u as be,F as _e,M as ye}from"./ProtectedRoutes-BInEfiaw.js";import{I as we,a as A,u as Ie,b as Se,f as $e}from"./IconNew-BhAnMb5r.js";import{r as u,e as Fe}from"./antd-bK47dtYc.js";import{S as c,X as Z}from"./formik.esm-ADxEa5mi.js";import{u as k,e as z,n as qe,N as Ce,a as ke}from"./provider-IGjFkmm5.js";import{c as F}from"./cn-Bz47sbbS.js";import{n as v,a as Le,b as O,c as L}from"./types-8-lvdrKU.js";import{I as Me,g as Ae}from"./IconCheck-DtfZ8jdC.js";import{X as D}from"./XSkeleton-x0yqnB_E.js";import{d as ze,I as ee,e as De,u as Re}from"./IconSearch-CPJHC6Kt.js";import{d as Pe}from"./debounce-CqMFxJgi.js";import Te from"./NoteEditorDialog-Cv0uILeF.js";import{X}from"./XTooltip-Bdc9vu0b.js";import{I as te}from"./IconHeart-CwlJhkiG.js";import{u as B}from"./useMutation-D6aZmw1J.js";import{f as Ee,c as H}from"./date.helpers-BWySBUrV.js";import{X as Oe}from"./XTiptap-Ch2jQgok.js";import{h as R}from"./react-day-picker-BMg2DGmo.js";import{u as Xe}from"./useMatchMedia.hook-CVR6FWmx.js";function U(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e.jsx("path",{fill:"currentColor",d:"M1 4.5A2.5 2.5 0 0 1 3.5 2h2.086a1.5 1.5 0 0 1 1.06.44L8 3.792l-2.06 2.06A.5.5 0 0 1 5.585 6H1zM1 7v4.5A2.5 2.5 0 0 0 3.5 14h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 4H9.207l-2.56 2.56A1.5 1.5 0 0 1 5.585 7z"})})}const Be=()=>{const{setStore:t}=k(),s=()=>{t({editorMode:z.new,id:null,open:!0})};return e.jsx("div",{className:"opacity-70",children:e.jsx(c,{startIcon:e.jsx(we,{width:24,height:24}),onClick:s,variant:"text",children:"Add note"})})},Ue=b(()=>e.jsx(c,{startIcon:e.jsx(U,{className:"w-5 h-5"}),className:F("!border-blue-600 hover:!bg-blue-600/20"),variant:"outlined"})),Ke=C.model("LabelDialog$",{open:!1,selectedLabel:C.maybeNull(C.string)}).actions(t=>({onChangeField(s,a){t[s]=a},onCancel(){t.open=!1,t.selectedLabel=null},onOpen(){t.open=!0},toggleEdit({id:s}){t.selectedLabel===s?t.selectedLabel=null:t.selectedLabel!==s&&(t.selectedLabel=s)}})),se=u.createContext(null),We=Ke.create({}),ae=()=>{const t=u.useContext(se);if(!t)throw new Error("useLabel$ shall be used within StoreProvider");return t},Qe=({children:t,store:s})=>e.jsx(se.Provider,{value:s,children:t}),He=u.lazy(()=>le(()=>import("./NotesLabelsTabs-D20_5fIP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]))),Ge=b(()=>{const{open:t,onCancel:s}=ae();return e.jsx(me,{fullHeight:!0,title:"Labels",open:t,onCancel:s,children:t&&e.jsx("div",{className:"text-cText flex h-full w-full flex-col",children:e.jsx(u.Suspense,{fallback:null,children:e.jsx(He,{})})})})});function Ve(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zm9.5-13.5l4 4M20 21l2-2l-2-2m-3 0l-2 2l2 2"})})}const Ye=b(()=>{const{onOpen:t}=ae();return e.jsx(c,{className:F("!border-blue-600 hover:!bg-blue-600/20"),variant:"outlined",onClick:t,startIcon:e.jsx(Ve,{})})}),Je=q.object({id:q.string().uuid(),name:q.string(),duplicateName:q.boolean().optional().default(!1),rating:q.number().nullable().optional()}),Ze=q.array(Je),et=async()=>{try{const t=await _(),s=g(`
            query query_notes_labels {
                notes_labels(order_by: { created_at: desc, name: asc, rating: desc }, where: {}) {
                    id
                    name
                    rating
                }
            }
        `);return await t.request(s).then(a=>a?Ze.parse(a.notes_labels):void 0)}catch(t){return await y(t)}},tt={KEY_fetchNotesLabels:({userId:t})=>[["useFetchNotesLabels",t]]},re=()=>{const[t,s]=u.useState(""),{id:a}=G(),{isLoading:r,data:o}=fe({queryKey:tt.KEY_fetchNotesLabels({userId:a}),queryFn:()=>et(),staleTime:1e3,refetchOnWindowFocus:!0,refetchOnMount:!1,enabled:!!a});return{notesLabels:o||[],isLoading:r,filter:t,data:(o==null?void 0:o.filter(i=>{var n;return(n=i.name)==null?void 0:n.toLocaleLowerCase().includes(t.trim().toLocaleLowerCase())}))||[],onChange:i=>s(i)}},st=()=>{const[t,s]=u.useState(!1),a=()=>{s(!1)};return e.jsxs(Qe,{store:We,children:[e.jsx(T,{onOpenChange:r=>{s(r)},trigger:["hover"],open:t,dropdownRender:()=>e.jsx(at,{onClose:a}),placement:"bottomRight",overlayClassName:"!z-[55]",children:e.jsx("div",{children:e.jsx(Ue,{})})}),e.jsx(Ge,{})]})},at=()=>{var j;const{isLoading:t,data:s,onChange:a,filter:r}=re(),o=I(),i=V(),n=(j=o.state)==null?void 0:j.label,l=d=>{const f=n===d,$=new URLSearchParams(o.search);f?$.delete("label"):$.set("label",d),i({pathname:"/notes/filtered-notes",search:$.toString()},{state:{...o.state,label:f?null:d}})},w=ve(s,d=>n===d.id?0:1);return e.jsxs(E,{className:"max-h-[400px] min-h-[160px] overflow-auto scrollbar-thumb-blue-500/50/50 scrollbar-track-global-bg scrollbar-thin",children:[e.jsxs(m,{className:"mb-4",children:[e.jsx(Z,{value:r,onChange:d=>a(d.target.value)}),e.jsx(Ye,{})]}),t?e.jsx(D,{length:2}):w.map(d=>{const f=n===d.id;return e.jsx(m,{onClick:()=>{l(d.id)},children:e.jsx(c,{startIcon:e.jsx("div",{className:"w-8 h-6",children:f&&e.jsx(Me,{className:"w-6 h-6 absolute left-[-3px] animate-opacity-3 text-blue-500"})}),className:F("!w-full",f&&"!text-blue-500"),variant:"text",size:"small",children:e.jsx("span",{className:"flex w-full capitalize",children:d.name})})},d.id)})]})},rt=t=>t===v.active,ot=t=>t===v.archived,nt=t=>t===v.deleted,it=t=>t===v.favorite,oe=()=>{var l;const s=(l=I().state)==null?void 0:l.filter,a=rt(s),r=it(s),o=nt(s),i=ot(s),n=ze(s);return{paramFilter:s,isArchived:i,isActive:a,isFavorite:r,isDeleted:o,isAll:n}},lt=()=>{const{isArchived:t,isFavorite:s,isDeleted:a,isAll:r}=oe();let o=e.jsx(Y,{width:24,height:24,className:"min-h-[24px] min-w-[24px]"});return r&&(o=e.jsx(ee,{width:24,height:24,className:"min-h-[24px] min-w-[24px] text-sky-400"})),s&&(o=e.jsx(J,{width:24,height:24,className:"min-h-[24px] min-w-[24px] text-rose-600"})),t&&(o=e.jsx(M,{width:24,height:24,className:"min-h-[24px] min-w-[24px] text-violet-600"})),a&&(o=e.jsx(A,{width:24,height:24,className:"min-h-[24px] min-w-[24px] text-slate-600"})),o},ct=b(()=>{const{isFavorite:t,isDeleted:s,isArchived:a,isAll:r}=oe();return e.jsx(c,{startIcon:e.jsx(lt,{}),className:F("!border-blue-600 hover:!bg-blue-600/20",r&&"!border-sky-400/20 hover:!bg-sky-400/20",t&&"!border-rose-500/20 hover:!bg-rose-500/20",a&&"!border-violet-500/20 hover:!bg-violet-500/20",s&&"!border-slate-500/20 hover:!bg-slate-500/20"),variant:"outlined"})}),dt=()=>{const[t,s]=u.useState(!1),a=V(),r=I(),o=i=>{const n=new URLSearchParams(r.search);n.set("filter",i),a({pathname:"/notes/filtered-notes",search:n.toString()},{state:{...r.state,filter:i}})};return e.jsx(T,{onOpenChange:i=>{s(i)},trigger:["hover"],open:t,dropdownRender:()=>e.jsx(ut,{onClose:o}),placement:"bottomRight",overlayClassName:"!z-[55]",children:e.jsx("div",{children:e.jsx(ct,{})})})},ut=({onClose:t})=>e.jsxs(E,{children:[e.jsx(m,{onClick:()=>{t("active")},children:e.jsx(c,{variant:"text",size:"small",startIcon:e.jsx(Y,{className:"text-blue-500",width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-blue-500",children:"Active"})})}),e.jsx(m,{onClick:()=>{t("favorite")},children:e.jsx(c,{variant:"text",size:"small",startIcon:e.jsx(J,{className:"text-rose-500",width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-rose-500",children:"Favorite"})})}),e.jsx(m,{onClick:()=>{t("archived")},children:e.jsx(c,{variant:"text",size:"small",startIcon:e.jsx(M,{className:"text-violet-500",width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-violet-500",children:"Archived"})})}),e.jsx(m,{onClick:()=>{t("deleted")},children:e.jsx(c,{variant:"text",size:"small",startIcon:e.jsx(A,{className:"text-slate-500",width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-slate-500",children:"Deleted"})})}),e.jsx(m,{onClick:()=>{t(ce.all)},children:e.jsx(c,{variant:"text",size:"small",startIcon:e.jsx(ee,{className:"text-sky-400",width:26,height:26}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-sky-400",children:"All"})})})]}),ht=C.model("Notes$",{searchInput:"",serverSearchInput:"",status:C.optional(C.enumeration("NoteStatus",Le.options),"active")}).actions(t=>({onChangeField(s,a){t[s]=a},onChangeSSI({value:s}){t.searchInput=s,t.serverSearchInput=s},onChangeInput({value:s}){t.searchInput=s}})),ne=u.createContext(null),xt=ht.create({}),ie=()=>{const t=u.useContext(ne);if(!t)throw new Error("useLabel$ shall be used within StoreProvider");return t},pt=({children:t,store:s})=>e.jsx(ne.Provider,{value:s,children:t}),mt=b(()=>{const{onChangeSSI:t,searchInput:s,onChangeInput:a}=ie(),r=u.useMemo(()=>Pe(o=>{t({value:o.target.value})},1e3),[]);return u.useEffect(()=>()=>{r.cancel()},[]),e.jsx(Z,{type:"text",autoFocus:!1,value:s,onChange:o=>{a({value:o.target.value}),r(o)},startIcon:e.jsx(De,{className:"text-slate-500/50",width:20,height:20}),placeholder:"Search",width:"!max-w-[600px] !w-full"})}),ft=()=>{var o,i;const{data:t}=re(),a=(o=I().state)==null?void 0:o.label,r=(i=t.find(n=>n.id===a))==null?void 0:i.name;return r?e.jsxs("div",{className:"flex capitalize opacity-70 text-base items-center font-bold",children:[r,e.jsx(U,{className:"w-5 h-5 px-3"})]}):null},vt=()=>e.jsx("div",{className:"flex w-full mx-auto gap-8",children:e.jsxs("div",{className:"flex flex-col w-full gap-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(Be,{}),e.jsx(ft,{})]}),e.jsxs("div",{className:"flex w-full items-center justify-end gap-2",children:[e.jsx(mt,{}),e.jsxs("div",{className:"flex gap-2 w-[108px]",children:[e.jsx(dt,{}),e.jsx(st,{})]})]})]})}),gt=t=>{const s=P(t==null?void 0:t.split(","));return{noteTags:t!=null&&t.length?s:[]}},jt=b(({note:t,deleteAction:s})=>{const{noteTags:a}=gt(t.tag);return e.jsx("div",{className:"scrollbar-thumb-blue-500/50 scrollbar-track-global-bg scrollbar-thin flex  min-h-[34px] flex-wrap gap-2 overflow-auto",children:a.map(r=>e.jsxs("div",{className:"animate-opacity-5 relative flex w-fit cursor-default rounded-md font-bold  text-cText opacity-70",children:[e.jsxs("span",{className:"p-1",children:[" #",ge(r.trim())]}),s&&e.jsx(de,{className:"flex h-full cursor-pointer items-center justify-center rounded-r-md text-red-500",onClick:()=>s==null?void 0:s(r)})]},r))})}),S=g(`
    fragment NoteResponseFr on notes @_unmask {
        id
        description
        tag
        created_at
        deleted_at
        is_favorite
        archived
        label_id
        label {
            name
        }
    }
`),Nt=async({id:t,isFavorite:s})=>{try{const a=await _(),r=g(`
                mutation mutation_updateNoteIsFavorite($id: uuid!, $isFavorite: Boolean!) {
                    update_notes_by_pk(pk_columns: { id: $id }, _set: { is_favorite: $isFavorite }) {
                        ...NoteResponseFr
                    }
                }
            `,[S]),o=await a.request(r,{id:t,isFavorite:s});return O.parse(o.update_notes_by_pk)}catch(a){return await y(a)}},K=()=>{const t=ue(),s=I();return{onSuccess:()=>{var o;const r=(o=s.state)==null?void 0:o.filter;t.invalidateQueries({predicate:i=>{const n=i.queryKey;return n[1]==="useFetchNotes"&&n[2]===5&&n[3]===r||n[1]==="useFetchNote"}}),t.invalidateQueries({predicate:i=>i.queryKey[1]==="useFetchArtifactsCount"})}}},bt=()=>{const{onSuccess:t}=K(),{store:s,editMode:a,setStore:r}=k(),o=B({mutationFn:({id:n,isFavorite:l})=>Nt({id:n,isFavorite:l}),onSuccess:n=>{s.open&&a&&n&&r({id:n.id,open:!0,editorMode:z.edit}),t()}});return{toggleFavorite:({id:n,isFavorite:l})=>{o.mutate({id:n,isFavorite:l})}}},_t=({id:t,isFavorite:s,label:a})=>{const{toggleFavorite:r}=bt();return e.jsxs(e.Fragment,{children:[e.jsx(c,{id:"toggleFavoriteNote",error:!!s,variant:s?"contained":"text",size:"small",onClick:()=>r({id:t,isFavorite:!s}),startIcon:e.jsx(te,{className:"mb-0.5 h-6 w-6 opacity-70 hover:opacity-100"}),children:a}),!a&&e.jsx(X,{anchorSelect:"#toggleFavoriteNote",children:s?"Unfavorite":"Favorite"})]})},yt=async({id:t,isArchived:s})=>{try{const a=await _(),r=g(`
                mutation mutation_updateNoteIsArchived($id: uuid!, $isArchived: Boolean!) {
                    update_notes_by_pk(pk_columns: { id: $id }, _set: { archived: $isArchived }) {
                        ...NoteResponseFr
                    }
                }
            `,[S]),o=await a.request(r,{id:t,isArchived:s});return O.parse(o.update_notes_by_pk)}catch(a){return await y(a)}},wt=()=>{const{onSuccess:t}=K(),{store:s,editMode:a,setStore:r}=k(),o=B({mutationFn:({id:n,isArchived:l})=>yt({id:n,isArchived:l}),onSuccess:n=>{s.open&&a&&n&&r({id:n.id,open:!0,editorMode:z.edit}),t()}});return{toggleArchived:({id:n,isArchived:l})=>{o.mutate({id:n,isArchived:l})}}},It=({id:t,isArchived:s,label:a})=>{const{toggleArchived:r}=wt();return e.jsxs(e.Fragment,{children:[e.jsx(c,{id:"toggleArchiveNote",variant:s?"contained":"text",size:"small",onClick:()=>r({id:t,isArchived:!s}),className:F(s&&"!bg-violet-600"),startIcon:e.jsx(M,{className:"mb-0.5 h-6 w-6 opacity-70 hover:opacity-100"}),children:a}),!a&&e.jsx(X,{anchorSelect:"#toggleArchiveNote",children:s?"Unarchive":"Archive"})]})},St=async({id:t,deletedAt:s})=>{try{const a=await _(),r=g(`
                mutation mutation_updateNoteDeletedAt($id: uuid!, $deletedAt: timestamptz) {
                    update_notes_by_pk(pk_columns: { id: $id }, _set: { deleted_at: $deletedAt }) {
                        ...NoteResponseFr
                    }
                }
            `,[S]),o=await a.request(r,{id:t,deletedAt:s});return O.parse(o.update_notes_by_pk)}catch(a){return await y(a)}},$t=()=>{const{onSuccess:t}=K(),{store:s,editMode:a,setStore:r}=k(),o=B({mutationFn:({id:n,deletedAt:l})=>St({id:n,deletedAt:l}),onSuccess:n=>{s.open&&a&&n&&r({id:n.id,open:!0,editorMode:Ae.edit}),t()}});return{updateNoteDeletedAt:({id:n,deletedAt:l})=>{o.mutate({id:n,deletedAt:l})}}},Ft=({id:t,deletedAt:s,label:a})=>{const{updateNoteDeletedAt:r}=$t();return e.jsxs(e.Fragment,{children:[e.jsx(c,{id:"toggleMoveNoteToBin",size:"small",error:!!s,variant:"text",onClick:()=>r({id:t,deletedAt:s?null:Ee()}),startIcon:e.jsx(A,{width:24,height:24,className:"h-6 w-6 opacity-70 hover:opacity-100"}),children:a}),!a&&e.jsx(X,{anchorSelect:"#toggleMoveNoteToBin",children:s?"Restore":"Move to bin"})]})},qt=({onClose:t,note:s})=>{const{setStore:a}=k();return e.jsxs(E,{children:[e.jsx(m,{children:e.jsx(_t,{id:s.id,isFavorite:!!s.is_favorite,label:e.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:s.is_favorite?"Unfavorite":"Favorite"})})}),e.jsx(m,{onClick:()=>{a({editorMode:z.edit,id:s.id,open:!0}),t()},children:e.jsx(c,{variant:"text",size:"small",startIcon:e.jsx(je,{width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:"Edit"})})}),e.jsx(m,{children:e.jsx(It,{id:s.id,isArchived:!!s.archived,label:e.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:s.archived?"Unarchive":"Archive"})})}),e.jsx(m,{children:e.jsx(Ft,{id:s.id,deletedAt:!!s.deleted_at,label:e.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:s.deleted_at?"Restore":"Move to bin"})})})]})},Ct=({note:t})=>{var s,a,r;return(s=t==null?void 0:t.label)!=null&&s.name?e.jsxs("div",{className:"flex w-full items-center gap-2 opacity-70 ",children:[e.jsx(U,{className:F("w-5 h-5",!((a=t==null?void 0:t.label)!=null&&a.name)&&"opacity-0")}),e.jsx("span",{className:"capitalize font-bold",children:(r=t==null?void 0:t.label)==null?void 0:r.name})]}):null},kt=({note:t})=>e.jsxs("div",{className:"flex gap items-center self-end justify-end w-full",children:[t.is_favorite&&e.jsx(c,{className:"!pointer-events-none",size:"small",variant:"text",startIcon:e.jsx(te,{width:24,height:24,className:"text-rose-500"})}),t.archived&&e.jsx(c,{className:"!pointer-events-none",size:"small",variant:"text",startIcon:e.jsx(M,{width:24,height:24,className:"text-violet-600"})}),t.deleted_at&&e.jsx(c,{className:"!pointer-events-none",size:"small",variant:"text",startIcon:e.jsx(A,{width:24,height:24,className:"text-gray-700 "})})]}),Lt=b(({note:t,isMobile:s})=>{const{popoverState:a,setPopoverState:r}=Ne();return e.jsx("div",{className:"relative",children:e.jsx(T,{open:a,onOpenChange:()=>{r(!a)},trigger:["contextMenu",s&&"click"],dropdownRender:()=>e.jsx(qt,{onClose:()=>r(!1),note:t}),children:e.jsxs("div",{className:F(`bg-global-2-bg flex w-[calc(100%-40px)] max-w-[600px] flex-col gap-5
                    overflow-auto rounded-lg p-5 hover:scale-105 duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`),onContextMenu:()=>{r(!a)},children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(Ct,{note:t}),e.jsx(kt,{note:t})]}),t.created_at&&e.jsx("div",{className:"flex justify-between items-center min-h-10",children:!!t.tag&&e.jsx(jt,{note:t})}),e.jsx(Oe,{isLoading:!1,content:t.description,readonly:!0},t.description),t.created_at&&e.jsx("div",{className:"text-xs opacity-80 font-semibold cursor-default text-cText",children:R(t.created_at,"dd MMMM yyyy")})]},t.id)})})}),Mt=(t=[])=>({timeFrame:P(be(t.map(r=>r.created_at&&R(H(r.created_at),"yyyy")))),filteredNotes:r=>t.filter(o=>o.created_at&&R(H(o.created_at),"yyyy")===r)}),At=async t=>{const{limit:s,serverSearchInput:a,offset:r,label:o}=t;try{const i=await _(),n=g(`
                query query_favoriteNotes(
                    $serverSearchInput: String!
                    $limit: Int!
                    $offset: Int
                    $label_id: uuid_comparison_exp
                ) {
                    notes(
                        limit: $limit
                        offset: $offset
                        order_by: [{ created_at: desc }, { description: asc }]
                        where: {
                            _and: [
                                { is_favorite: { _eq: true } }
                                { deleted_at: { _is_null: true } }
                                { label_id: $label_id }
                                {
                                    _or: [
                                        { description: { _ilike: $serverSearchInput } }
                                        { tag: { _ilike: $serverSearchInput } }
                                    ]
                                }
                            ]
                        }
                    ) {
                        ...NoteResponseFr
                    }
                }
            `,[S]),l=await i.request(n,{limit:s,serverSearchInput:`%${a}%`,offset:r,label_id:o?{_eq:o}:{}});return L.parse(l).notes}catch(i){return await y(i)}},zt=async t=>{try{const{limit:s,serverSearchInput:a,offset:r,label:o}=t,i=await _(),n=g(`
                query query_activeNotes(
                    $serverSearchInput: String!
                    $limit: Int!
                    $offset: Int
                    $label_id: uuid_comparison_exp
                ) {
                    notes(
                        limit: $limit
                        offset: $offset
                        order_by: [{ created_at: desc }, { description: asc }]
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true } }
                                { archived: { _eq: false } }
                                { label_id: $label_id }
                                {
                                    _or: [
                                        { description: { _ilike: $serverSearchInput } }
                                        { tag: { _ilike: $serverSearchInput } }
                                    ]
                                }
                            ]
                        }
                    ) {
                        ...NoteResponseFr
                    }
                }
            `,[S]),l=await i.request(n,{serverSearchInput:`%${a}%`,limit:s,offset:r,label_id:o?{_eq:o}:{}});return L.parse(l).notes}catch(s){return await y(s)}},Dt=async t=>{try{const{limit:s,serverSearchInput:a,offset:r,label:o}=t,i=await _(),n=g(`
                query query_archivedNotes(
                    $serverSearchInput: String!
                    $limit: Int!
                    $offset: Int
                    $label_id: uuid_comparison_exp
                ) {
                    notes(
                        limit: $limit
                        offset: $offset
                        order_by: [{ created_at: desc }, { description: asc }]
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true } }
                                { archived: { _eq: true } }
                                { label_id: $label_id }
                                {
                                    _or: [
                                        { description: { _ilike: $serverSearchInput } }
                                        { tag: { _ilike: $serverSearchInput } }
                                    ]
                                }
                            ]
                        }
                    ) {
                        ...NoteResponseFr
                    }
                }
            `,[S]),l=await i.request(n,{serverSearchInput:`%${a}%`,limit:s,offset:r,label_id:o?{_eq:o}:{}});return L.parse(l).notes}catch(s){return await y(s)}},Rt=async t=>{try{const{limit:s,serverSearchInput:a,offset:r,label:o}=t,i=await _(),n=g(`
                query query_deletedNotes(
                    $serverSearchInput: String!
                    $limit: Int!
                    $offset: Int
                    $label_id: uuid_comparison_exp
                ) {
                    notes(
                        limit: $limit
                        offset: $offset
                        order_by: [{ created_at: desc }, { description: asc }]
                        where: {
                            _and: [
                                { deleted_at: { _is_null: false } }
                                { label_id: $label_id }
                                {
                                    _or: [
                                        { description: { _ilike: $serverSearchInput } }
                                        { tag: { _ilike: $serverSearchInput } }
                                    ]
                                }
                            ]
                        }
                    ) {
                        ...NoteResponseFr
                    }
                }
            `,[S]),l=await i.request(n,{serverSearchInput:`%${a}%`,limit:s,offset:r,label_id:o?{_eq:o}:{}});return L.parse(l).notes}catch(s){return await y(s)}},Pt=async t=>{try{const{limit:s,serverSearchInput:a,offset:r,label:o}=t,i=await _(),n=g(`
                query query_allNotes(
                    $serverSearchInput: String!
                    $limit: Int!
                    $offset: Int
                    $label_id: uuid_comparison_exp
                ) {
                    notes(
                        limit: $limit
                        offset: $offset
                        order_by: [{ created_at: desc }, { description: asc }]
                        where: {
                            _and: [
                                { label_id: $label_id }
                                {
                                    _or: [
                                        { description: { _ilike: $serverSearchInput } }
                                        { tag: { _ilike: $serverSearchInput } }
                                    ]
                                }
                            ]
                        }
                    ) {
                        ...NoteResponseFr
                    }
                }
            `,[S]),l=await i.request(n,{serverSearchInput:`%${a}%`,limit:s,offset:r,label_id:o?{_eq:o}:{}});return L.parse(l).notes}catch(s){return await y(s)}},Tt=t=>{const{queryFilter:s=v.active,limit:a=20,serverSearchInput:r="",label:o}=t,{id:i}=G(),{data:n,fetchNextPage:l,hasNextPage:w,isFetching:j,isFetchingNextPage:d,isLoading:f}=Ie({queryKey:qe.useFetchNotes(a,s,r,i,o),queryFn:async h=>{const x=h.pageParam,N=h.pageParam+5;let p=[];return s===v.all&&(p=await Pt({userId:i,limit:a,offset:x,serverSearchInput:r,label:o})),s===v.favorite&&(p=await At({userId:i,limit:a,offset:x,serverSearchInput:r,label:o})),s===v.active&&(p=await zt({userId:i,limit:a,offset:x,serverSearchInput:r,label:o})),s===v.archived&&(p=await Dt({userId:i,limit:a,offset:x,serverSearchInput:r,label:o})),s===v.deleted&&(p=await Rt({userId:i,limit:a,offset:x,serverSearchInput:r,label:o})),{data:p,nextCursor:N}},initialPageParam:0,getNextPageParam:(h,x)=>{var N,p;return(p=(N=he(x))==null?void 0:N.data)!=null&&p.length?h==null?void 0:h.nextCursor:void 0},staleTime:1e3,refetchOnWindowFocus:!1,refetchOnMount:!0,enabled:!!i}),$=Se(P($e(n==null?void 0:n.pages.map(h=>h.data))),(h,x)=>h.id===x.id);return{isFetching:j,fetchNextPage:l,isFetchingNextPage:d,hasNextPage:w,isLoading:f,notes:$||[]}},Et=b(({queryFilter:t})=>{var x;const a=(x=I().state)==null?void 0:x.label,{serverSearchInput:r}=ie(),{isMobile:o}=Xe(["isMobile"]),{isLoading:i,notes:n,fetchNextPage:l,hasNextPage:w,isFetching:j}=Tt({queryFilter:t,limit:5,serverSearchInput:r,label:a}),{ref:d,inView:f}=Re();u.useEffect(()=>{!i&&f&&w&&l()},[f,w]);const{filteredNotes:$,timeFrame:h}=Mt(n);return e.jsxs("div",{className:"animate-opacity-3 mx-auto flex w-full flex-col gap-5",children:[i?e.jsx(D,{length:20}):h.map(N=>{const p=$(N);return p.length?e.jsxs(Fe.Fragment,{children:[e.jsx("div",{children:N&&e.jsx("div",{className:"flex gap-1",children:e.jsx(_e,{title:N})})}),e.jsx("div",{className:"flex flex-col gap-10",children:p.map(W=>e.jsx(Lt,{note:W,isMobile:o},W.id))})]},N):null}),e.jsx("div",{ref:d,className:"flex relative w-full flex-col gap-5 justify-center",children:j&&e.jsx(D,{length:2})})]})}),Ot=()=>{var a;const s=(a=I().state)==null?void 0:a.filter;return e.jsxs(ye,{children:[e.jsx(u.Suspense,{fallback:null,children:e.jsx(Ce,{store:ke,children:e.jsx(Te,{})})}),e.jsx(pt,{store:xt,children:e.jsxs("div",{className:"flex flex-col gap-10 w-full max-w-[600px] mx-auto relative",children:[e.jsx(vt,{}),e.jsx(Et,{queryFilter:s},s)]})})]})},Xt=()=>{const t=I(),[s,a]=u.useState({params:"",filter:"",label:""});return u.useEffect(()=>{var j;const r=localStorage.getItem("notes-module-restore-url"),o=((j=r==null?void 0:r.split("?"))==null?void 0:j[1])||"filter=active",i=/filter=([^&]+)(?:.*label=([^&]+))?/,n=o.match(i),l=(n==null?void 0:n[1])||"",w=(n==null?void 0:n[2])||"";a({params:o,filter:l,label:w})},[]),{location:t,...s}},Bt=b(function(){const{location:s,params:a,filter:r,label:o}=Xt();return u.useEffect(()=>{a&&s.pathname.includes("notes/filtered-notes")&&localStorage.setItem("notes-module-restore-url",s.pathname+s.search)},[s]),a?e.jsxs(xe,{children:[e.jsx(Q,{path:"/",element:e.jsx(pe,{to:`/notes/filtered-notes?${a}`,state:{filter:r,label:o}})}),e.jsx(Q,{path:"filtered-notes",element:e.jsx(Ot,{})})]}):null}),ds=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"}));export{jt as N,_t as a,It as b,Ft as c,K as d,Je as e,tt as f,gt as g,Ze as h,ae as i,ds as j,S as n,re as u};
//# sourceMappingURL=NotesCmsIndex-DAZ2lV8l.js.map
