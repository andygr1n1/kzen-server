import{G as e,P as i}from"./index-Cx9aHWms.js";const c=e.object({id:e.string().uuid(),title:e.string(),description:e.string().nullable(),created_at:e.string(),deleted_at:e.string().nullable(),is_favorite:e.boolean(),img_path:e.string().nullable(),archived:e.boolean(),freezed:e.boolean(),img_src:e.string().optional(),img_src_buffer:e.string().optional()});e.object({achievements:e.array(c)});const a={instance:["achService"],fetchAchsKey:t=>[a.instance,"fetchAchsKey",t],fetchAchKey:t=>[a.instance,"fetchAchKey",t]},s=i(`
    fragment AchResponseFr on achievements @_unmask {
        id
        title
        img_path
        created_at
        updated_at
        deleted_at
        archived
        is_favorite
        description
        freezed
    }
`);export{s as a,a as b,c};
//# sourceMappingURL=achResponseFr-DHzlt_Pk.js.map
