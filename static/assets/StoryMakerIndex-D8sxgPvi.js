const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/StoryMessageMobile-URDJJmaf.js","assets/index-Cx9aHWms.js","assets/antd-bK47dtYc.js","assets/react-day-picker-BMg2DGmo.js","assets/index-DY_qxQT6.css","assets/XTiptap-Ch2jQgok.js","assets/ProtectedRoutes-BInEfiaw.js","assets/formik.esm-ADxEa5mi.js","assets/cn-Bz47sbbS.js","assets/formik-CkMvMzHs.css","assets/useMatchMedia.hook-CVR6FWmx.js","assets/useMutation-D6aZmw1J.js","assets/ProtectedRoutes-Dix7VhZk.css","assets/XSkeleton-x0yqnB_E.js","assets/XTiptap-B_vjNogu.css","assets/index--O-lbexr.js","assets/date.helpers-BWySBUrV.js","assets/StoriesIndex-Dkg1SUFS.js","assets/IconNew-BhAnMb5r.js","assets/IconSearch-CPJHC6Kt.js","assets/debounce-CqMFxJgi.js","assets/types-8-lvdrKU.js","assets/IconHeart-CwlJhkiG.js","assets/XTooltip-Bdc9vu0b.js","assets/useDeleteStoryMessage-DB_NrQ5L.js","assets/XMobileMenu-BWyIqEbF.js","assets/StoryMessageDefault-DO-KB11V.js"])))=>i.map(i=>d[i]);
import{O as p,P as d,J as m,M as _,o as x,j as t,u as k,b2 as I,_ as S,aI as f}from"./index-Cx9aHWms.js";import{a as j,c as A,d as q,k as R,X as T,C as N,M as D}from"./ProtectedRoutes-BInEfiaw.js";import{c as y}from"./index--O-lbexr.js";import{s as E,a as h,N as P,E as O,S as C,b as L,c as z}from"./StoriesIndex-Dkg1SUFS.js";import{X as v}from"./XSkeleton-x0yqnB_E.js";import{X,e as W}from"./XTiptap-Ch2jQgok.js";import{u as M}from"./useMutation-D6aZmw1J.js";import{f as B}from"./date.helpers-BWySBUrV.js";import{n as K}from"./react-day-picker-BMg2DGmo.js";import{u as b}from"./useMatchMedia.hook-CVR6FWmx.js";import{r as c}from"./antd-bK47dtYc.js";import{S as Q}from"./formik.esm-ADxEa5mi.js";const V=async({storyId:e})=>{try{const s=await p(),a=d(`
                query query_full_story($storyId: uuid!) {
                    stories(where: { id: { _eq: $storyId } }) {
                        id
                        ...StoryResponseFr
                    }
                }
            `,[E]);return await s.request(a,{storyId:e}).then(o=>{var r;return(r=o==null?void 0:o.stories)==null?void 0:r[0]})}catch(s){return await m(s)}},H=({storyId:e})=>{const{data:s,isLoading:a}=j({queryKey:h.useFetchStoryInfo(e),queryFn:()=>V({storyId:y(e)}),staleTime:1e3,refetchOnWindowFocus:!1,refetchOnMount:!0,enabled:!!e});return{data:s,isLoading:a}},J=()=>{const e=_(),s=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,a=e.pathname.match(s),{data:o,isLoading:r}=H({storyId:a==null?void 0:a[0]});return{story:o,isLoading:r}},U=x(()=>{const{story:e,isLoading:s}=J();return e?t.jsxs("div",{className:"flex gap-4 animate-opacity-3 w-full h-32",children:[s&&t.jsx(v,{length:3}),t.jsx("div",{className:"h-32 w-32",children:e.img_path?t.jsx("img",{src:`https://firebunny-storage.b-cdn.net/kzen/stories/${e.img_path}`,className:"animate-opacity-3 rounded-lg h-32 w-32"}):t.jsx(P,{})}),t.jsx("div",{className:"py-2 text-xl font-atkinson text-cText",children:e==null?void 0:e.title})]}):null}),F=d(`
    fragment StoryMessageResponseFr on stories_messages @_unmask {
        id
        description
        img_path
        active_by_user
        created_at
        updated_at
        created_by
        updated_by
        updated_by_user {
            avatar
            name
        }
        story {
            users
        }
    }
`),G=async({html:e,storyId:s,imgPath:a,updatedAt:o})=>{try{const r=await p(),n=d(`
                mutation mutation_insertStoryMessage(
                    $object: stories_messages_insert_input!
                    $storyId: uuid!
                    $updatedAt: timestamptz
                ) {
                    insert_stories_messages_one(object: $object) {
                        ...StoryMessageResponseFr
                    }
                    update_stories_by_pk(pk_columns: { id: $storyId }, _set: { updated_at: $updatedAt }) {
                        id
                    }
                }
            `,[F]),i={story_id:s,description:e,img_path:a};return await r.request(n,{object:i,storyId:s,updatedAt:o})}catch(r){return await m(r)}},Y=async({id:e,description:s,storyId:a,updatedAt:o})=>{try{const r=await p(),n=d(`
                mutation mutation_updateStoryMessage(
                    $id: uuid!
                    $description: String
                    $storyId: uuid!
                    $updatedAt: timestamptz
                ) {
                    update_stories_messages_by_pk(pk_columns: { id: $id }, _set: { description: $description }) {
                        ...StoryMessageResponseFr
                    }
                    update_stories_by_pk(pk_columns: { id: $storyId }, _set: { updated_at: $updatedAt }) {
                        id
                    }
                }
            `,[F]);return await r.request(n,{id:e,description:s,storyId:a,updatedAt:o})}catch(r){return await m(r)}},g=()=>{const e=_(),s=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,a=e.pathname.match(s);return{id:a==null?void 0:a[0]}},Z=()=>{const{id:e}=g(),s=M({mutationFn:async({html:n,storyId:i,imgPath:u})=>G({html:n,storyId:i,imgPath:u,updatedAt:B()})}),a=M({mutationFn:async({id:n,description:i})=>Y({description:i,id:n,storyId:y(e),updatedAt:K(new Date)})});return{saveStoryMessage:({html:n,storyId:i,imgPath:u,onSuccess:l,onSettled:$})=>{s.mutate({html:n,storyId:i,imgPath:u},{onSuccess:()=>{l==null||l()},onSettled:$})},updateStoryMessage:({description:n,id:i,onSuccess:u,onSettled:l})=>{a.mutate({description:n,id:i},{onSuccess:()=>{u==null||u()},onSettled:l})}}},ee=x(()=>{const e=k(),{saveStoryMessage:s}=Z(),{id:a}=g(),{isMobile:o}=b(["isMobile"]);return t.jsx("div",{className:"flex flex-col w-full",children:t.jsx(X,{showSaveButtonTooltip:!o,content:"",customToolbar:!0,onSave:({html:r,clearEditor:n})=>{if(!W(r).trim().length){I("Type something");return}s({html:r,imgPath:[],storyId:y(a),onSuccess:()=>{e.invalidateQueries({queryKey:h.useFetchStoryMessages(a)})}}),n()}})})}),te=d(`
    fragment StoryMessagesResponseFr on stories @_unmask {
        stories_messages(order_by: { created_at: desc }, where: { deleted_at: { _is_null: true } }) {
            id
            description
            img_path
            active_by_user
            created_at
            updated_at
            created_by
            updated_by
            updated_by_user {
                avatar
                name
            }
            story {
                users
            }
        }
    }
`),se=async({storyId:e})=>{try{const s=await p(),a=d(`
                query query_full_story($storyId: uuid!) {
                    stories(where: { id: { _eq: $storyId } }) {
                        id

                        ...StoryMessagesResponseFr
                    }
                }
            `,[te]);return await s.request(a,{storyId:e}).then(o=>{var r;return(r=o==null?void 0:o.stories)==null?void 0:r[0]})}catch(s){return await m(s)}},ae=({storyId:e})=>{const{data:s,isLoading:a}=j({queryKey:h.useFetchStoryMessages(e),queryFn:()=>se({storyId:y(e)}),staleTime:1e3,refetchOnWindowFocus:!1,refetchOnMount:!0,enabled:!!e});return{data:s,isLoading:a}},re=()=>{const e=_(),s=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,a=e.pathname.match(s),{data:o,isLoading:r}=ae({storyId:a==null?void 0:a[0]});return{story:o,isLoading:r}},oe=c.lazy(()=>S(()=>import("./StoryMessageMobile-URDJJmaf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),ne=c.lazy(()=>S(()=>import("./StoryMessageDefault-DO-KB11V.js"),__vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,23,17,18,19,20,21,22,24]))),ie=({message:e,isMobile:s})=>s?t.jsx(c.Suspense,{fallback:t.jsx("div",{children:"null"}),children:t.jsx(oe,{message:e})}):t.jsx(c.Suspense,{fallback:t.jsx("div",{children:"null"}),children:t.jsx(ne,{message:e})}),ue=x(()=>{var o;const{story:e,isLoading:s}=re(),{isMobile:a}=b(["isMobile"]);return t.jsxs("div",{className:"flex flex-col flex-auto h-full",children:[s&&t.jsx(v,{length:4}),t.jsx("div",{children:(o=e==null?void 0:e.stories_messages)==null?void 0:o.map(r=>t.jsx(ie,{message:r,isMobile:a},r.id))})]})}),ce=()=>t.jsxs("div",{className:"h-full flex flex-col gap-5 w-full ",children:[t.jsx(ee,{}),t.jsx("div",{className:"flex flex-col flex-auto h-full",children:t.jsx(ue,{})})]}),de=f.model("StoryMaker$",{editSelectedMessageId:f.maybe(f.string)}).actions(e=>({onChangeField(s,a){e[s]=a}})),w=c.createContext(null),le=de.create({}),ke=()=>{const e=c.useContext(w);if(!e)throw new Error("useStoryMaker$ shall be used within StoreProvider");return e},ye=({children:e,store:s})=>t.jsx(w.Provider,{value:s,children:e}),pe=({action:e})=>{const{id:s}=g();return t.jsx(A,{children:t.jsx(q,{children:t.jsx(O,{onClose:e,id:y(s),label:t.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:"Edit"})})})})},me=()=>{const{popoverState:e,setPopoverState:s}=R();return t.jsxs(C,{store:L,children:[t.jsx(c.Suspense,{fallback:null,children:t.jsx(z,{})}),t.jsx(T,{onOpenChange:()=>{s(!e)},trigger:["click","contextMenu"],dropdownRender:()=>t.jsx(pe,{action:()=>s(!1)}),children:t.jsx("div",{children:t.jsx(Q,{variant:"text",children:t.jsx(N,{className:"w-5 h-5"})})})})]})},fe=()=>t.jsx(ye,{store:le,children:t.jsx(D,{topBarNodes:t.jsx("div",{className:"w-full justify-end items-center flex",children:t.jsx(me,{})}),children:t.jsxs("div",{className:"flex flex-col gap-10 w-full h-full max-w-[600px] mx-auto relative",children:[t.jsx(U,{}),t.jsx(ce,{})]})})}),Ie=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));export{Ie as S,Z as a,g as b,F as s,ke as u};
//# sourceMappingURL=StoryMakerIndex-D8sxgPvi.js.map
