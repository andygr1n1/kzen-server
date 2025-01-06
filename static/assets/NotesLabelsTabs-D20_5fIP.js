import{O as u,P as i,J as d,u as b,Q as y,ab as w,j as a,o as p}from"./index-Cx9aHWms.js";import{u as v,X as g,a as F,S as c,F as S}from"./formik.esm-ADxEa5mi.js";import{e as C,f as I,h as q,i as _,u as $}from"./NotesCmsIndex-DAZ2lV8l.js";import{u as x}from"./useMutation-D6aZmw1J.js";import{F as k,c as D,d as L,j as E,n as T,X as z,C as X}from"./ProtectedRoutes-BInEfiaw.js";import{X as R}from"./XSkeleton-x0yqnB_E.js";import{r as N,I as B,T as Q}from"./antd-bK47dtYc.js";import{c as V}from"./cn-Bz47sbbS.js";import{I as K}from"./XTiptap-Ch2jQgok.js";import"./react-day-picker-BMg2DGmo.js";import"./IconNew-BhAnMb5r.js";import"./provider-IGjFkmm5.js";import"./types-8-lvdrKU.js";import"./IconCheck-DtfZ8jdC.js";import"./IconSearch-CPJHC6Kt.js";import"./debounce-CqMFxJgi.js";import"./NoteEditorDialog-Cv0uILeF.js";import"./XTooltip-Bdc9vu0b.js";import"./IconHeart-CwlJhkiG.js";import"./date.helpers-BWySBUrV.js";import"./useMatchMedia.hook-CVR6FWmx.js";const M=()=>({validate:t=>{const s={};return t.name.length||(s.name="Required field"),t.duplicateName&&(s.name="Label already exists"),s}}),U=async({values:e})=>{try{const t=await u(),s=i(`
            mutation mutation_insertNoteLabel($object: notes_labels_insert_input!) {
                insert_notes_labels_one(object: $object) {
                    id
                    name
                }
            }
        `),n=await t.request(s,{object:{name:e.name.toLowerCase()}});return C.parse(n.insert_notes_labels_one)}catch(t){return await d(t)}},O=()=>{const e=b(),{id:t}=y();return{onSuccess:()=>{e.invalidateQueries({queryKey:I.KEY_fetchNotesLabels({userId:t})})}}},A=()=>{const{onSuccess:e}=O(),t=x({mutationFn:({values:n})=>U({values:n})});return{insertNoteLabel:({values:n,onSuccess:o,onSettled:r})=>{t.mutate({values:n},{onSuccess:()=>{e(),o==null||o()},onSettled:r,onError:()=>{}})}}},G=async({value:e})=>{try{const t=await u(),s=i(`
            query validation_noteLabelName($where: notes_labels_bool_exp) {
                notes_labels(where: $where, limit: 1) {
                    id
                    name
                }
            }
        `),n=await t.request(s,{where:{name:{_eq:e.toLowerCase()}}});return q.parse(n.notes_labels)}catch(t){return await d(t)}},J=()=>{const{insertNoteLabel:e}=A();return{onSubmit:async(s,n)=>{const{setSubmitting:o}=n;await G({value:s.name}).then(r=>{r.length?n.setFieldValue("duplicateName",!0):e({values:s,onSettled:()=>{o(!1)},onSuccess:()=>{o(!1),w("Label saved")}})})}}},P=()=>{const e=v();return a.jsxs("div",{className:"w-full",children:[a.jsx(k,{title:"Name"}),a.jsx(g,{"data-testid":"label-name",autoFocus:!0,value:e.values.name,name:"name",onChange:t=>{e.handleChange(t),e.setFieldValue("duplicateName",!1),e.setFieldError("duplicateName",void 0)},error:e.touched.name&&!!e.errors.name,errorMessage:e.errors.name})]})},Y=()=>a.jsxs(F,{className:"flex flex-col h-full  gap-5",children:[a.jsx("input",{type:"text",style:{display:"none"},autoComplete:"off",name:"accessibility"}),a.jsx("div",{className:"flex w-full",children:a.jsx(P,{})}),a.jsx("div",{className:"flex justify-end w-full mt-5",children:a.jsx(c,{type:"submit",children:"Save"})})]}),W=()=>{const{validate:e}=M(),{onSubmit:t}=J();return a.jsx(S,{enableReinitialize:!0,initialValues:{name:"",id:crypto.randomUUID(),duplicateName:!1,rating:0},validate:e,onSubmit:t,children:a.jsx(Y,{})})},j=()=>`
        id
        name
        owner_id
        rating
    `,Z=async({id:e})=>{try{const t=await u();return await t.request(i(`
                mutation mutation_updateNotes($id: uuid!) {
                    update_notes(where: { label_id: { _eq: $id } }, _set: { label_id: null }) {
                        affected_rows
                    }
                }
            `),{id:e}),await t.request(i(`
                mutation mutation_deleteNoteLabel($id: uuid!) {
                    delete_notes_labels_by_pk(id: $id) {
                        ${j()}
                    }
                }
            `),{id:e})}catch(t){return await d(t)}},H=()=>{const e=b(),t=x({mutationFn:({id:n})=>Z({id:n}),onSuccess:()=>{e.invalidateQueries()}});return{deleteNoteLabel:({id:n})=>{t.mutate({id:n})}}},ee=p(({label:e,inputEl:t})=>{const{deleteNoteLabel:s}=H(),{toggleEdit:n,selectedLabel:o}=_(),r=o===e.id;return a.jsxs(D,{children:[a.jsx(L,{onClick:()=>{n({id:e.id}),setTimeout(()=>t==null?void 0:t.focus(),5)},children:a.jsx(c,{variant:"text",size:"small",startIcon:a.jsx(E,{width:24,height:24}),children:a.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:r?"Save":"Edit"})})}),a.jsx(L,{onClick:()=>s({id:e.id}),children:a.jsx(c,{variant:"text",size:"small",startIcon:a.jsx(T,{width:24,height:24}),children:a.jsx("span",{className:"flex w-[110px] justify-start capitalize",children:"Delete"})})})]})}),te=async({id:e,name:t})=>{try{const s=await u(),n=i(`
                mutation mutation_updateNoteLabel($id: uuid!, $name: String) {
                    update_notes_labels_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
                       ${j()}
                    }
                }
            `);return await s.request(n,{id:e,name:t})}catch(s){return await d(s)}},ae=()=>{const e=b(),t=x({mutationFn:({id:n,name:o})=>te({id:n,name:o}),onSuccess:()=>{e.invalidateQueries()}});return{updateNoteLabel:({id:n,name:o})=>{t.mutate({id:n,name:o})}}},se=p(({label:e})=>{const{selectedLabel:t,onChangeField:s}=_(),{updateNoteLabel:n}=ae(),[o,r]=N.useState(e.name),l=N.useRef(null),h=t!==e.id;return a.jsxs("div",{className:"h-10 flex w-full items-center border-b-[1px] py-2 border-b-solid border-gray-200/50",children:[a.jsx("div",{className:"flex flex-auto mx-2",children:a.jsx(B,{suffix:!h&&a.jsx(K,{className:"opacity-80"}),autoFocus:!0,ref:l,size:"large",value:o,onBlur:()=>{n({id:e.id,name:o}),s("selectedLabel",null)},onKeyDown:m=>{var f;m.key==="Enter"&&((f=l.current)==null||f.blur())},onChange:m=>r(m.target.value),disabled:t!==e.id,className:V(h&&"!bg-transparent !border-transparent","disabled:!cursor-default")})}),a.jsx("div",{className:"w-14 gap-2 flex items-center justify-center",children:a.jsx(z,{trigger:["hover"],dropdownRender:()=>a.jsx(ee,{label:e,inputEl:l==null?void 0:l.current}),placement:"bottom",overlayClassName:"!z-[9000]",children:a.jsx(c,{variant:"text",children:a.jsx(X,{className:"min-w-3 min-h-3 cursor-pointer"})})})})]},e.id)}),ne=p(()=>{const{isLoading:e,notesLabels:t}=$();return a.jsxs("div",{className:"flex flex-col w-[calc(100%-8px)] h-full pr-2 relative overflow-auto scrollbar-thumb-blue-500/50 scrollbar-track-global-bg scrollbar-thin",children:[e&&a.jsx(R,{length:5}),t.map(s=>a.jsx(se,{label:s},s.id))]})}),oe=()=>({notesLabelsTabs:[{key:"1",label:"New Label",children:a.jsx(W,{})},{key:"2",label:"Labels",children:a.jsx(ne,{})}]}),Se=()=>{const{notesLabelsTabs:e}=oe();return a.jsx(Q,{className:`[&_.ant-tabs-nav::before]:border-slate-500 [&_.ant-tabs-nav]:bg-global-2-bg-plasma
            [&_.ant-tabs-nav]:sticky h-full [&_.ant-tabs-content]:h-full
            [&_.ant-tabs-tabpane]:h-full`,tabBarStyle:{top:-20,zIndex:10},defaultActiveKey:"1",items:e,indicator:{align:"center"}})};export{Se as NotesLabelsTabs,Se as default};
//# sourceMappingURL=NotesLabelsTabs-D20_5fIP.js.map
