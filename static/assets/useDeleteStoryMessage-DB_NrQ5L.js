import{O as i,P as d,J as u,u as n}from"./index-Cx9aHWms.js";import{u as m}from"./useMutation-D6aZmw1J.js";import{f as r}from"./date.helpers-BWySBUrV.js";import{s as p,b as c}from"./StoryMakerIndex-D8sxgPvi.js";import{c as l}from"./index--O-lbexr.js";const y=async({id:e,storyId:s})=>{try{const t=await i(),o=d(`
                mutation mutation_deleteStoryMessage(
                    $id: uuid!
                    $deletedAt: timestamptz
                    $storyId: uuid!
                    $updatedAt: timestamptz
                ) {
                    update_stories_messages_by_pk(pk_columns: { id: $id }, _set: { deleted_at: $deletedAt }) {
                        ...StoryMessageResponseFr
                    }
                    update_stories_by_pk(pk_columns: { id: $storyId }, _set: { updated_at: $updatedAt }) {
                        id
                    }
                }
            `,[p]);return await t.request(o,{id:e,deletedAt:r(),storyId:s,updatedAt:r()})}catch(t){return await u(t)}},S=()=>{const e=n(),{id:s}=c(),t=m({mutationFn:({id:a})=>y({id:a,storyId:l(s)}),onSuccess:()=>{e.invalidateQueries()}});return{deleteStoryMessage:({id:a})=>{t.mutate({id:a})}}};export{S as u};
//# sourceMappingURL=useDeleteStoryMessage-DB_NrQ5L.js.map
