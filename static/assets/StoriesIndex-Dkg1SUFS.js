const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/StoryEditor-CFTI0F3B.js","assets/index-Cx9aHWms.js","assets/antd-bK47dtYc.js","assets/react-day-picker-BMg2DGmo.js","assets/index-DY_qxQT6.css","assets/formik.esm-ADxEa5mi.js","assets/cn-Bz47sbbS.js","assets/formik-CkMvMzHs.css","assets/useMutation-D6aZmw1J.js","assets/index--O-lbexr.js","assets/image.service-CXyyVGKV.js","assets/date.helpers-BWySBUrV.js","assets/ProtectedRoutes-BInEfiaw.js","assets/useMatchMedia.hook-CVR6FWmx.js","assets/ProtectedRoutes-Dix7VhZk.css","assets/ImgCropperDialog-DEU-JsqI.js","assets/IconInfiniteLoading-BhfJWl73.js","assets/XTooltip-Bdc9vu0b.js","assets/IconNew-BhAnMb5r.js","assets/IconSearch-CPJHC6Kt.js","assets/debounce-CqMFxJgi.js","assets/types-8-lvdrKU.js","assets/IconHeart-CwlJhkiG.js","assets/XSkeleton-x0yqnB_E.js","assets/StoryEditorTitle-EbFwPBVP.js","assets/StoryMakerIndex-D8sxgPvi.js","assets/XTiptap-Ch2jQgok.js","assets/XTiptap-B_vjNogu.css"])))=>i.map(i=>d[i]);
import{aI as w,aX as ie,j as e,_ as D,o as I,M as N,ap as L,aG as S,G as l,u as re,P as f,O as v,J as y,Q as ae,aF as U,U as ne,R as oe,a as C,N as ce}from"./index-Cx9aHWms.js";import{g as le,I as B,b as K,h as F,X as H,c as Q,d as p,j as de,t as ue,k as he,u as xe,F as me,M as pe}from"./ProtectedRoutes-BInEfiaw.js";import{r as u,e as fe}from"./antd-bK47dtYc.js";import{I as ve,a as q,u as ye,b as ge,f as _e}from"./IconNew-BhAnMb5r.js";import{S as h,X as je}from"./formik.esm-ADxEa5mi.js";import{e as Se,i as we,a as Ie,c as be,f as $e,d as Ne,I as V,u as Fe}from"./IconSearch-CPJHC6Kt.js";import{d as qe}from"./debounce-CqMFxJgi.js";import"./types-8-lvdrKU.js";import{c as b}from"./cn-Bz47sbbS.js";import{I as W}from"./IconHeart-CwlJhkiG.js";import{X as E}from"./XTooltip-Bdc9vu0b.js";import{u as P}from"./useMutation-D6aZmw1J.js";import{f as G,c as O}from"./date.helpers-BWySBUrV.js";import{h as z}from"./react-day-picker-BMg2DGmo.js";import{u as ke}from"./useMatchMedia.hook-CVR6FWmx.js";import{X}from"./XSkeleton-x0yqnB_E.js";const Ae=w.model("Stories$",{searchInput:"",serverSearchInput:"",status:w.optional(w.enumeration("ArtifactStatus",ie.options),"active")}).actions(t=>({onChangeField(s,r){t[s]=r},onChangeSSI({value:s}){t.searchInput=s,t.serverSearchInput=s},onChangeInput({value:s}){t.searchInput=s}})),J=u.createContext(null),Ce=Ae.create({}),Y=()=>{const t=u.useContext(J);if(!t)throw new Error("useStories$ shall be used within StoreProvider");return t},ze=({children:t,store:s})=>e.jsx(J.Provider,{value:s,children:t}),Me=w.model("StoryEditorDialog$",{open:!1,storyId:w.maybe(w.string)}).actions(t=>({onChangeField(s,r){t[s]=r},onClose(){t.open=!1,t.storyId=void 0},onOpen(s){t.open=!0,t.storyId=s==null?void 0:s.storyId}})),Z=u.createContext(null),De=Me.create({}),R=()=>{const t=u.useContext(Z);if(!t)throw new Error("useStoryEditorDialog$ shall be used within StoreProvider");return t},Ee=({children:t,store:s})=>e.jsx(Z.Provider,{value:s,children:t}),Pe=u.lazy(()=>D(()=>import("./StoryEditor-CFTI0F3B.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))),Re=u.lazy(()=>D(()=>import("./StoryEditorTitle-EbFwPBVP.js"),__vite__mapDeps([24,1,2,3,4,12,5,6,7,13,8,14,18,19,20,21,22,17,11,23]))),Te=I(()=>{const{open:t,onClose:s}=R();return e.jsx(le,{open:t,fullHeight:!0,onCancel:()=>{s()},title:e.jsx(u.Suspense,{fallback:null,children:e.jsx(Re,{})}),children:t&&e.jsx(u.Suspense,{fallback:null,children:e.jsx(Pe,{})})})}),Oe=()=>{const{onChangeField:t}=R();return e.jsx("div",{className:"opacity-70",children:e.jsx(h,{startIcon:e.jsx(ve,{width:24,height:24}),onClick:()=>t("open",!0),variant:"text",children:"Add story"})})},Xe=I(()=>{const{onChangeSSI:t,searchInput:s,onChangeInput:r}=Y(),a=u.useMemo(()=>qe(i=>{t({value:i.target.value})},1e3),[]);return u.useEffect(()=>()=>{a.cancel()},[]),e.jsx(je,{type:"text",autoFocus:!1,value:s,onChange:i=>{r({value:i.target.value}),a(i)},startIcon:e.jsx(Se,{className:"text-slate-500/50",width:20,height:20}),placeholder:"Search",width:"!max-w-[600px] !w-full"})}),ee=()=>{var c;const s=(c=N().state)==null?void 0:c.filter,r=we(s),a=Ie(s),i=be(s),n=$e(s),o=Ne(s);return{paramFilter:s,isArchived:n,isActive:r,isFavorite:a,isDeleted:i,isAll:o}},Le=()=>{const{isArchived:t,isFavorite:s,isDeleted:r,isAll:a}=ee();let i=e.jsx(B,{width:24,height:24,className:"min-h-[24px] min-w-[24px]"});return a&&(i=e.jsx(V,{width:24,height:24,className:"min-h-[24px] min-w-[24px] text-sky-400"})),s&&(i=e.jsx(K,{width:24,height:24,className:"min-h-[24px] min-w-[24px] text-rose-600"})),t&&(i=e.jsx(F,{width:24,height:24,className:"min-h-[24px] min-w-[24px] text-violet-600"})),r&&(i=e.jsx(q,{width:24,height:24,className:"min-h-[24px] min-w-[24px] text-slate-600"})),i},Ue=I(()=>{const{isFavorite:t,isDeleted:s,isArchived:r,isAll:a}=ee();return e.jsx(h,{startIcon:e.jsx(Le,{}),className:b("!border-blue-600 hover:!bg-blue-600/20",a&&"!border-sky-400/20 hover:!bg-sky-400/20",t&&"!border-rose-500/20 hover:!bg-rose-500/20",r&&"!border-violet-500/20 hover:!bg-violet-500/20",s&&"!border-slate-500/20 hover:!bg-slate-500/20"),variant:"outlined"})}),Be=()=>{const[t,s]=u.useState(!1),r=L(),a=N(),i=n=>{const o=new URLSearchParams(a.search);o.set("filter",n),r({pathname:"/stories/filtered-stories",search:o.toString()},{state:{...a.state,filter:n}})};return e.jsx(H,{onOpenChange:n=>{s(n)},trigger:["hover"],open:t,dropdownRender:()=>e.jsx(Ke,{onClose:i}),placement:"bottomRight",overlayClassName:"!z-[55]",children:e.jsx("div",{children:e.jsx(Ue,{})})})},Ke=({onClose:t})=>e.jsxs(Q,{children:[e.jsx(p,{onClick:()=>{t("active")},children:e.jsx(h,{variant:"text",size:"small",startIcon:e.jsx(B,{className:"text-blue-500",width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-blue-500",children:"Active"})})}),e.jsx(p,{onClick:()=>{t("favorite")},children:e.jsx(h,{variant:"text",size:"small",startIcon:e.jsx(K,{className:"text-rose-500",width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-rose-500",children:"Favorite"})})}),e.jsx(p,{onClick:()=>{t("archived")},children:e.jsx(h,{variant:"text",size:"small",startIcon:e.jsx(F,{className:"text-violet-500",width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-violet-500",children:"Archived"})})}),e.jsx(p,{onClick:()=>{t("deleted")},children:e.jsx(h,{variant:"text",size:"small",startIcon:e.jsx(q,{className:"text-slate-500",width:24,height:24}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-slate-500",children:"Deleted"})})}),e.jsx(p,{onClick:()=>{t(S.all)},children:e.jsx(h,{variant:"text",size:"small",startIcon:e.jsx(V,{className:"text-sky-400",width:26,height:26}),children:e.jsx("span",{className:"flex w-[110px] justify-start capitalize text-sky-400",children:"All"})})})]}),He=()=>e.jsx("div",{className:"flex w-full mx-auto gap-8",children:e.jsxs("div",{className:"flex flex-col w-full gap-4",children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx(Oe,{})}),e.jsxs("div",{className:"flex w-full items-center justify-end gap-2",children:[e.jsx(Xe,{}),e.jsx(Be,{})]})]})});l.object({id:l.string().uuid(),title:l.string(),img_path:l.string().optional().nullable(),img_src:l.string().optional(),img_src_buffer:l.string().optional(),img_path_delete:l.string().optional()});const te=l.object({id:l.string().uuid(),title:l.string(),img_path:l.string().nullable(),created_at:l.string(),updated_at:l.string(),deleted_at:l.string().nullable(),archived:l.boolean(),is_favorite:l.boolean()}),Qe=({story:t})=>e.jsxs("div",{className:"flex gap items-center self-end justify-end w-full",children:[t.is_favorite&&e.jsx(h,{className:"!pointer-events-none",size:"small",variant:"text",startIcon:e.jsx(W,{width:24,height:24,className:"text-rose-500"})}),t.archived&&e.jsx(h,{className:"!pointer-events-none",size:"small",variant:"text",startIcon:e.jsx(F,{width:24,height:24,className:"text-violet-600"})}),t.deleted_at&&e.jsx(h,{className:"!pointer-events-none",size:"small",variant:"text",startIcon:e.jsx(q,{width:24,height:24,className:"text-gray-700 "})})]}),se={instance:"storiesService",fetchStories:t=>["storiesService",t],fetchStory:t=>["storiesService",t]},M={instance:"storyMakerService",useFetchStoryInfo:t=>[M.instance,"useFetchStoryInfo",t==null?void 0:t.toString()],useFetchStoryMessages:t=>[M.instance,"useFetchStoryMessages",t==null?void 0:t.toString()]},T=()=>{const t=re();return{onSuccess:()=>{t.invalidateQueries({predicate:r=>r.queryKey[0]===se.instance}),t.invalidateQueries({predicate:r=>{const a=r.queryKey;return a[0]===M.instance&&a[1]==="useFetchStoryInfo"}})}}},g=f(`
    fragment StoryResponseFr on stories @_unmask {
        id
        title
        img_path
        created_at
        updated_at
        updated_by_user {
            name
        }
        deleted_at
        archived
        is_favorite
    }
`),Ve=async({id:t,isArchived:s})=>{try{const r=f(`
                mutation update_story_archived($id: uuid!, $archived: Boolean!) {
                    update_stories_by_pk(pk_columns: { id: $id }, _set: { archived: $archived }) {
                        id
                        ...StoryResponseFr
                    }
                }
            `,[g]);return await(await v()).request(r,{id:t,archived:s}).then(i=>te.parse(i==null?void 0:i.update_stories_by_pk))}catch(r){return await y(r)}},We=()=>{const{onSuccess:t}=T(),s=P({mutationFn:({id:a,isArchived:i})=>Ve({id:a,isArchived:i}),onSuccess:()=>{t()}});return{toggleArchived:({id:a,isArchived:i})=>{s.mutate({id:a,isArchived:i})}}},Ge=({id:t,isArchived:s,label:r,onClose:a})=>{const{toggleArchived:i}=We();return e.jsxs(e.Fragment,{children:[e.jsx(h,{id:"toggleArchiveStory",variant:s?"contained":"text",size:"small",onClick:()=>{i({id:t,isArchived:!s}),a()},className:b(s&&"!bg-violet-600"),startIcon:e.jsx(F,{className:"mb-0.5 h-6 w-6 opacity-70 hover:opacity-100"}),children:r}),!r&&e.jsx(E,{anchorSelect:"#toggleArchiveStory",children:s?"Unarchive":"Archive"})]})},Je=async({id:t,isFavorite:s})=>{try{const r=await v(),a=f(`
                mutation update_story_archived($id: uuid!, $isFavorite: Boolean!) {
                    update_stories_by_pk(pk_columns: { id: $id }, _set: { is_favorite: $isFavorite }) {
                        id
                        ...StoryResponseFr
                    }
                }
            `,[g]);return await r.request(a,{id:t,isFavorite:s}).then(i=>i.update_stories_by_pk)}catch(r){return await y(r)}},Ye=()=>{const{onSuccess:t}=T(),s=P({mutationFn:({id:a,isFavorite:i})=>Je({id:a,isFavorite:i}),onSuccess:()=>{t()}});return{toggleFavorite:({id:a,isFavorite:i})=>{s.mutate({id:a,isFavorite:i})}}},Ze=({id:t,isFavorite:s,label:r,onClose:a})=>{const{toggleFavorite:i}=Ye();return e.jsxs(e.Fragment,{children:[e.jsx(h,{id:"toggleFavorite",error:!!s,variant:s?"contained":"text",size:"small",onClick:()=>{i({id:t,isFavorite:!s}),a()},startIcon:e.jsx(W,{className:"mb-0.5 h-6 w-6 opacity-70 hover:opacity-100"}),children:r}),!r&&e.jsx(E,{anchorSelect:"#toggleFavorite",children:s?"Unfavorite":"Favorite"})]})},et=async({id:t,deletedAt:s})=>{const r=f(`
            mutation update_story_archived($id: uuid!, $deletedAt: timestamptz) {
                update_stories_by_pk(pk_columns: { id: $id }, _set: { deleted_at: $deletedAt }) {
                    id
                    ...StoryResponseFr
                }
            }
        `,[g]),a=await v();try{return await a.request(r,{id:t,deletedAt:s}).then(i=>te.parse(i==null?void 0:i.update_stories_by_pk))}catch(i){return await y(i)}},tt=()=>{const{onSuccess:t}=T(),s=P({mutationFn:({id:a,deletedAt:i})=>et({id:a,deletedAt:i}),onSuccess:()=>{t()}});return{updateStoryDeletedAt:({id:a,deletedAt:i})=>{s.mutate({id:a,deletedAt:i})}}},st=({id:t,deletedAt:s,label:r,onClose:a})=>{const{updateStoryDeletedAt:i}=tt();return e.jsxs(e.Fragment,{children:[e.jsx(h,{id:"toggleMoveStoryToBin",size:"small",error:!!s,variant:"text",onClick:()=>{i({id:t,deletedAt:s?null:G()}),a()},startIcon:e.jsx(q,{width:24,height:24,className:"h-6 w-6 opacity-70 hover:opacity-100"}),children:r}),!r&&e.jsx(E,{anchorSelect:"#toggleMoveStoryToBin",children:s?"Restore":"Move to bin"})]})},it=()=>{const{onChangeField:t}=R();return{editStory:({id:r})=>{t("storyId",r),t("open",!0)}}},rt=({id:t,label:s,onClose:r})=>{const{editStory:a}=it();return e.jsx(h,{id:"editStory",variant:"text",size:"small",onClick:()=>{a({id:t}),r()},startIcon:e.jsx(de,{className:"h-6 w-6 opacity-70 hover:opacity-100"}),children:s})},at=({onClose:t,story:s})=>e.jsxs(Q,{children:[e.jsx(p,{children:e.jsx(Ze,{onClose:t,id:s.id,isFavorite:!!s.is_favorite,label:e.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:s.is_favorite?"Unfavorite":"Favorite"})})}),e.jsx(p,{children:e.jsx(rt,{onClose:t,id:s.id,label:e.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:"Edit"})})}),e.jsx(p,{children:e.jsx(Ge,{onClose:t,id:s.id,isArchived:!!s.archived,label:e.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:s.archived?"Unarchive":"Archive"})})}),e.jsx(p,{children:e.jsx(st,{onClose:t,id:s.id,deletedAt:!!s.deleted_at,label:e.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:s.deleted_at?"Restore":"Move to bin"})})})]}),nt=({className:t="",iconClassName:s=""})=>e.jsx("div",{className:b("h-32 w-32 items-center justify-center flex border-solid rounded-md border-[0.5px] border-global-bg-regal bg-global-bg-plasma",t),children:e.jsx(ue,{className:b("text-cText opacity-50 w-20 h-20",s)})}),ot=I(({story:t,isMobile:s})=>{var o;const{popoverState:r,setPopoverState:a}=he(),i=L(),n=N();return e.jsx("div",{className:"relative",children:e.jsx(H,{open:r,onOpenChange:()=>{a(!r)},trigger:["contextMenu",s&&"click"],dropdownRender:()=>e.jsx(at,{onClose:()=>a(!1),story:t}),children:e.jsxs("div",{className:b(`bg-global-2-bg flex w-[calc(100%-40px)] max-w-[600px] flex-col 
                    overflow-auto rounded-lg p-5 hover:scale-105 duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                    relative border-solid border-transparent hover:border-blue-500 cursor-pointer`),onContextMenu:()=>{a(!r)},onClick:()=>{i(`${n.pathname}/${t.id}`,{state:{id:t.id}})},children:[e.jsxs("div",{className:"flex gap-2 h-full relative items-center justify-between min-h-[120px] ",children:[e.jsx("div",{className:"h-full flex min-w-[120px]",children:t.img_path?e.jsx("img",{src:`https://firebunny-storage.b-cdn.net/kzen/stories/${t.img_path}`,width:120,height:120,className:"animate-opacity-3 rounded-lg"}):e.jsx(nt,{className:"opacity-20"})}),e.jsx("div",{className:"flex justify-between flex-col min-h-[120px] h-full w-full",children:e.jsx("div",{className:"flex flex-auto h-full text-lg font-atkinson",children:t.title})})]}),e.jsxs("div",{className:"flex justify-between mt-2 items-center h-[32px]",children:[e.jsxs("div",{className:"text-xs m2-4 opacity-80 font-semibold font-kzen cursor-default text-cText",children:[z(G(new Date(t.updated_at)),"dd MMMM yyyy HH:mm")," by"," ",(o=t.updated_by_user)==null?void 0:o.name]}),e.jsx("div",{className:"flex",children:e.jsx(Qe,{story:t})})]})]},t.id)})})}),ct=async t=>{const{limit:s,userId:r,serverSearchInput:a,offset:i}=t;try{const n=await v(),o=f(`
                query query_stories($limit: Int, $offset: Int, $title: String, $userId: uuid!) {
                    stories(
                        limit: $limit
                        offset: $offset
                        order_by: { updated_at: desc }
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true }, archived: { _eq: false }, title: { _ilike: $title } }
                                { _or: [{ created_by: { _eq: $userId } }, { users: { _contains: [$userId] } }] }
                            ]
                        }
                    ) {
                        ...StoryResponseFr
                    }
                }
            `,[g]);return await n.request(o,{limit:s,userId:r,offset:i,title:"%"+a+"%"}).then(_=>_==null?void 0:_.stories)}catch(n){return await y(n)}},lt=async t=>{const{limit:s,userId:r,serverSearchInput:a,offset:i}=t;try{const n=await v(),o=f(`
                query query_stories($limit: Int, $offset: Int, $title: String, $userId: uuid!) {
                    stories(
                        limit: $limit
                        offset: $offset
                        order_by: { updated_at: desc }
                        where: {
                            _and: [
                                { title: { _ilike: $title } }
                                { _or: [{ created_by: { _eq: $userId } }, { users: { _contains: [$userId] } }] }
                            ]
                        }
                    ) {
                        id
                        ...StoryResponseFr
                    }
                }
            `,[g]);return await n.request(o,{limit:s,userId:r,offset:i,title:"%"+a+"%"}).then(c=>c==null?void 0:c.stories)}catch(n){return await y(n)}},dt=async t=>{const{limit:s,userId:r,serverSearchInput:a,offset:i}=t;try{const n=await v(),o=f(`
                query query_stories($limit: Int, $offset: Int, $title: String, $userId: uuid!) {
                    stories(
                        limit: $limit
                        offset: $offset
                        order_by: { updated_at: desc }
                        where: {
                            _and: [
                                { is_favorite: { _eq: true }, title: { _ilike: $title } }
                                { _or: [{ created_by: { _eq: $userId } }, { users: { _contains: [$userId] } }] }
                            ]
                        }
                    ) {
                        id
                        ...StoryResponseFr
                    }
                }
            `,[g]);return await n.request(o,{limit:s,userId:r,offset:i,title:"%"+a+"%"}).then(c=>c==null?void 0:c.stories)}catch(n){return await y(n)}},ut=async({limit:t,userId:s,serverSearchInput:r,offset:a})=>{try{const i=await v(),n=f(`
                query query_stories($limit: Int, $offset: Int, $title: String, $userId: uuid!) {
                    stories(
                        limit: $limit
                        offset: $offset
                        order_by: { updated_at: desc }
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true }, archived: { _eq: true }, title: { _ilike: $title } }
                                { _or: [{ created_by: { _eq: $userId } }, { users: { _contains: [$userId] } }] }
                            ]
                        }
                    ) {
                        id
                        ...StoryResponseFr
                    }
                }
            `,[g]);return await i.request(n,{limit:t,userId:s,offset:a,title:"%"+r+"%"}).then(o=>o==null?void 0:o.stories)}catch(i){return await y(i)}},ht=async t=>{const{limit:s,userId:r,serverSearchInput:a,offset:i}=t,n=await v(),o=f(`
            query query_stories($limit: Int, $offset: Int, $title: String, $userId: uuid!) {
                stories(
                    limit: $limit
                    offset: $offset
                    order_by: { updated_at: desc }
                    where: {
                        _and: [
                            { deleted_at: { _is_null: false }, title: { _ilike: $title } }
                            { _or: [{ created_by: { _eq: $userId } }, { users: { _contains: [$userId] } }] }
                        ]
                    }
                ) {
                    id
                    ...StoryResponseFr
                }
            }
        `,[g]);try{return await n.request(o,{limit:s,userId:r,offset:i,title:"%"+a+"%"}).then(c=>c==null?void 0:c.stories)}catch(c){return await y(c)}},xt=t=>{const{queryFilter:s=S.active,limit:r=20,serverSearchInput:a=""}=t,{id:i}=ae(),{data:n,fetchNextPage:o,hasNextPage:c,isFetching:_,isFetchingNextPage:$,isLoading:k}=ye({queryKey:se.fetchStories(`${r}${s}${a}${i}`),queryFn:async d=>{const x=d.pageParam,j=d.pageParam+5;let m=[];return s===S.all&&(m=await lt({userId:i,limit:r,offset:x,serverSearchInput:a})),s===S.favorite&&(m=await dt({userId:i,limit:r,offset:x,serverSearchInput:a})),s===S.active&&(m=await ct({userId:i,limit:r,offset:x,serverSearchInput:a})),s===S.archived&&(m=await ut({userId:i,limit:r,offset:x,serverSearchInput:a})),s===S.deleted&&(m=await ht({userId:i,limit:r,offset:x,serverSearchInput:a})),{data:m,nextCursor:j}},initialPageParam:0,getNextPageParam:(d,x)=>{var j,m;return(m=(j=ne(x))==null?void 0:j.data)!=null&&m.length?d==null?void 0:d.nextCursor:void 0},staleTime:1e3,refetchOnWindowFocus:!1,refetchOnMount:!0,enabled:!!i}),A=ge(U(_e(n==null?void 0:n.pages.map(d=>d.data))),(d,x)=>d.id===x.id);return{isFetching:_,fetchNextPage:o,isFetchingNextPage:$,hasNextPage:c,isLoading:k,stories:A||[]}},mt=(t=[])=>({timeFrame:U(xe(t.map(a=>a.created_at&&z(O(a.created_at),"yyyy")))),filtered:a=>t.filter(i=>i.created_at&&z(O(i.created_at),"yyyy")===a)}),pt=I(({queryFilter:t})=>{const{serverSearchInput:s}=Y(),{isMobile:r}=ke(["isMobile"]),{isLoading:a,stories:i,fetchNextPage:n,hasNextPage:o,isFetching:c}=xt({queryFilter:t,limit:5,serverSearchInput:s}),{ref:_,inView:$}=Fe();u.useEffect(()=>{!a&&$&&o&&n()},[$,o]);const{filtered:k,timeFrame:A}=mt(i);return e.jsxs("div",{className:"animate-opacity-3 mx-auto flex w-full flex-col gap-5",children:[a?e.jsx(X,{length:20}):A.map(d=>{const x=k(d);return x.length?e.jsxs(fe.Fragment,{children:[e.jsx("div",{children:d&&e.jsx("div",{className:"flex gap-1",children:e.jsx(me,{title:d})})}),e.jsx("div",{className:"flex flex-col gap-10",children:x.map(j=>e.jsx(ot,{story:j,isMobile:r},j.id))})]},d):null}),e.jsx("div",{ref:_,className:"flex relative w-full flex-col gap-5 justify-center",children:c&&e.jsx(X,{length:2})})]})}),ft=()=>{var r;const s=(r=N().state)==null?void 0:r.filter;return e.jsx(pe,{children:e.jsxs(Ee,{store:De,children:[e.jsx(u.Suspense,{fallback:null,children:e.jsx(Te,{})}),e.jsx(ze,{store:Ce,children:e.jsxs("div",{className:"flex flex-col gap-10 w-full max-w-[600px] mx-auto relative",children:[e.jsx(He,{}),e.jsx(pt,{queryFilter:s},s)]})})]})})},vt=u.lazy(()=>D(()=>import("./StoryMakerIndex-D8sxgPvi.js").then(t=>t.S),__vite__mapDeps([25,1,2,3,4,12,5,6,7,13,8,14,9,23,26,27,11]))),yt=I(function(){return e.jsxs(oe,{children:[e.jsx(C,{path:"/",element:e.jsx(ce,{to:"/stories/filtered-stories?filter=active",state:{filter:"active"}})}),e.jsx(C,{path:"filtered-stories",element:e.jsx(ft,{})}),e.jsx(C,{path:"filtered-stories/:dynamicSegment",element:e.jsx(u.Suspense,{fallback:null,children:e.jsx(vt,{})})})]})}),Dt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"}));export{rt as E,nt as N,Ee as S,M as a,De as b,Te as c,R as d,se as e,Dt as f,g as s,T as u};
//# sourceMappingURL=StoriesIndex-Dkg1SUFS.js.map
