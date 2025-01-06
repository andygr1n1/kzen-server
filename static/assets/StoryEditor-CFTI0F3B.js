import{O as p,P as g,J as _,Q as F,aH as c,ab as b,j as r,o as v}from"./index-Cx9aHWms.js";import{u as d,X as I,S as E,a as T,F as w}from"./formik.esm-ADxEa5mi.js";import{s as f,u as k,d as y,e as C}from"./StoriesIndex-Dkg1SUFS.js";import{u as h}from"./useMutation-D6aZmw1J.js";import{c as m}from"./index--O-lbexr.js";import{a as S,d as $,I as N,U as V,u as z}from"./image.service-CXyyVGKV.js";import{f as O}from"./date.helpers-BWySBUrV.js";import{a as q,F as j}from"./ProtectedRoutes-BInEfiaw.js";import{I as R}from"./ImgCropperDialog-DEU-JsqI.js";import{T as U}from"./antd-bK47dtYc.js";import{c as x}from"./cn-Bz47sbbS.js";import{I as D}from"./IconInfiniteLoading-BhfJWl73.js";import{X as L}from"./XTooltip-Bdc9vu0b.js";import"./react-day-picker-BMg2DGmo.js";import"./IconNew-BhAnMb5r.js";import"./IconSearch-CPJHC6Kt.js";import"./debounce-CqMFxJgi.js";import"./types-8-lvdrKU.js";import"./IconHeart-CwlJhkiG.js";import"./useMatchMedia.hook-CVR6FWmx.js";import"./XSkeleton-x0yqnB_E.js";const M=async({values:t})=>{try{const e=await p(),o={title:t.title,img_path:t.img_path||null};return await e.request(g(`
                    mutation mutation_mutation_insertStory($object: stories_insert_input!) {
                        insert_stories_one(object: $object) {
                            id
                            title
                            img_path
                        }
                    }
                `),{object:o}).then(i=>i.insert_stories_one)}catch(e){return await _(e)}},A=async({values:t})=>{try{const e=await p(),o=g(`
                mutation mutation_updateStory($id: uuid!, $img_path: String, $title: String, $updated_at: timestamptz) {
                    update_stories_by_pk(
                        pk_columns: { id: $id }
                        _set: { img_path: $img_path, title: $title, updated_at: $updated_at }
                    ) {
                        ...StoryResponseFr
                    }
                }
            `,[f]);return await e.request(o,{id:t.id,img_path:t.img_path,title:t.title,updated_at:O()}).then(i=>i==null?void 0:i.update_stories_by_pk)}catch(e){return await _(e)}},B=()=>{const{id:t}=F(),{onSuccess:e}=k(),o=h({mutationFn:async({values:s})=>{const l=s.img_src?await S({img:m(s.img_src),route:c.STORY_IMAGE_UPLOAD,userId:t}):null;return M({values:{...s,img_path:l}})},onSuccess:e}),i=({values:s,onSuccess:l,onSettled:u})=>{o.mutate({values:s},{onSuccess:l,onSettled:u})},a=h({mutationFn:async({values:s})=>{let l=s.img_path;return l||(l=s.img_src?await S({img:m(s.img_src),route:c.STORY_IMAGE_UPLOAD,userId:t}):null),s.img_path_delete&&await $(s.img_path_delete,c.Story_IMAGE_DELETE),A({values:{...s,img_path:l}})},onSuccess:e});return{insertStory:i,updateStory:({values:s,onSuccess:l,onSettled:u})=>{a.mutate({values:s},{onSuccess:l,onSettled:u})}}},P=()=>{const{onClose:t}=y(),{insertStory:e,updateStory:o}=B();return{onSubmit:(a,n)=>{const{setSubmitting:s}=n;a.id?o({values:a,onSuccess:()=>{t(),n.resetForm(),b("Story updated")},onSettled:()=>{s(!1)}}):e({values:a,onSuccess:()=>{t(),n.resetForm(),b("Story saved")},onSettled:()=>{s(!1)}})}}},X=()=>({validate:e=>{const o={};return e.title.length||(o.title="Required field"),o}}),G=async({storyId:t})=>{try{const e=await p(),o=g(`
                query query_story($storyId: uuid!) {
                    stories_by_pk(id: $storyId) {
                        ...StoryResponseFr
                    }
                }
            `,[f]);return await e.request(o,{storyId:t}).then(i=>i==null?void 0:i.stories_by_pk)}catch(e){return await _(e)}},K=({storyId:t})=>{const{data:e,isLoading:o}=q({queryKey:C.fetchStory(t),queryFn:()=>G({storyId:m(t)}),staleTime:1e3,refetchOnWindowFocus:!1,refetchOnMount:!0,enabled:!!t});return{isLoading:o,story:e}},Q=()=>{const{storyId:t}=y(),{story:e}=K({storyId:t});return{initialValues:W(e)}},W=t=>({id:(t==null?void 0:t.id)||"",title:(t==null?void 0:t.title)||"",img_path:(t==null?void 0:t.img_path)||""}),Y=()=>{const t=d(),{img_src_buffer:e,img_src:o}=t.values,i=async n=>{t.setFieldValue("img_src_buffer",void 0),t.setFieldValue("img_src",n==null?void 0:n.getCroppedCanvas().toDataURL()),t.values.img_path&&(t.setFieldValue("img_path_delete",t.values.img_path),t.setFieldValue("img_path",""))},a=async()=>{t.setFieldValue("img_src_buffer",void 0),t.setFieldValue("img_src",void 0)};return r.jsx(R,{src:o,open:!!o&&!!e,onOk:i,onCancel:a})},J=()=>{const t=d(),{img_src:e,img_path:o}=t.values,i=l=>{z(l,u=>{t.setFieldValue("img_src",u),t.setFieldValue("img_src_buffer",u)})},a=t.touched.title&&!!t.errors.img_src,n=t.errors.img_src,s=o||e;return r.jsxs("div",{children:[r.jsx(j,{title:"Logo *"}),r.jsxs("div",{"data-testid":"profile-avatar-index",className:x(`group relative mx-auto flex h-[300px] w-[calc(100%-40px)] p-5
                    items-center justify-center rounded-md border border-solid
                    border-blue-900 hover:border-blue-600 shadow-md transition-shadow duration-300`,a&&"border-red-500 hover:border-red-500"),children:[s&&r.jsx("img",{src:e||`https://firebunny-storage.b-cdn.net/kzen/stories/${o}`||void 0,className:"absolute top-0 left-0 right-[120px] w-full h-full opacity-[0.04] rounded-md z-1"}),s&&r.jsx("img",{src:e||`https://firebunny-storage.b-cdn.net/kzen/stories/${o}`||void 0,className:"absolute h-[300px] w-[300px] rounded-md z-10"}),r.jsx(N,{width:64,height:64,className:x("duration-300 group-hover:text-blue-600 text-blue-900",a&&"text-red-900/50 group-hover:text-red-900")}),r.jsx(V,{onChange:i}),a&&n&&r.jsx("div",{"data-testid":"error-message",className:"font-kzen bg-global-3-bg absolute bottom-[-6px] left-2 z-20 m-0 rounded-full p-0 px-1 text-xs leading-3 text-red-700 ",children:n})]})]})},Z=()=>{const t=d();return r.jsxs("div",{children:[r.jsx(j,{title:"Title *"}),r.jsx(I,{"data-testid":"ach-title-input",autoFocus:!0,value:t.values.title,name:"title",onChange:t.handleChange,error:t.touched.title&&!!t.errors.title,errorMessage:t.errors.title})]})},H=()=>r.jsxs("div",{className:"flex flex-col gap-5",children:[r.jsx(Z,{}),r.jsx(J,{}),r.jsx(Y,{})]}),tt=()=>({storyEditorTabs:[{key:"1",label:"Note",children:r.jsx(H,{})}]}),et=()=>({OkText:"Save",tooltipText:"",disabled:!1,isSubmitting:d().isSubmitting}),ot=()=>{const{disabled:t,OkText:e,tooltipText:o,isSubmitting:i}=et();return r.jsxs("div",{className:"relative",children:[r.jsx(E,{variant:"outlined",type:"submit",disabled:t||i,size:"small",className:"z-10",startIcon:i&&r.jsx(D,{className:"w-6 h-6"}),children:e}),t&&o&&r.jsx("div",{id:"disabledTooltip",className:`pointer-events-auto absolute left-0 top-0
                    z-20 h-full w-full rounded-lg bg-transparent`}),t&&o&&r.jsx(L,{anchorSelect:"#disabledTooltip",children:o})]})},rt=()=>{const{storyEditorTabs:t}=tt();return r.jsx(U,{className:"[&_.ant-tabs-nav::before]:border-slate-500 ",tabBarStyle:{position:"sticky",top:-20,background:"var(--colors-global-2-bg-plasma)",zIndex:10},defaultActiveKey:"1",items:t,tabBarExtraContent:r.jsx(ot,{}),indicator:{align:"center"}})},st=()=>r.jsx(T,{children:r.jsx(rt,{})}),Et=v(()=>{const{onSubmit:t}=P(),{validate:e}=X(),{initialValues:o}=Q();return r.jsx(w,{enableReinitialize:!0,initialValues:o,validate:e,onSubmit:t,children:r.jsx(st,{})})});export{Et as default};
//# sourceMappingURL=StoryEditor-CFTI0F3B.js.map
