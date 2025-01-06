import{u as v,b as w,f as p}from"./IconNew-BhAnMb5r.js";import{P as _,O as d,J as y,aG as h,U as g,aF as A}from"./index-Cx9aHWms.js";import{a as m,b as F}from"./achResponseFr-DHzlt_Pk.js";const I=async({limit:i,serverSearchInput:r,offset:a})=>{try{const e=_(`
                query query_allAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: { _or: { title: { _ilike: $title }, description: { _ilike: $title } } }
                    ) {
                        ...AchResponseFr
                    }
                }
            `,[m]),t=await(await d()).request(e,{limit:i,offset:a,title:"%"+r+"%"});return t==null?void 0:t.achievements}catch(e){return await y(e)}},k=async({limit:i,serverSearchInput:r,offset:a})=>{try{const e=_(`
                query query_favoriteAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: {
                            _and: [
                                {
                                    _or: { title: { _ilike: $title }, description: { _ilike: $title } }
                                    is_favorite: { _eq: true }
                                }
                            ]
                        }
                    ) {
                        ...AchResponseFr
                    }
                }
            `,[m]),t=await(await d()).request(e,{limit:i,offset:a,title:"%"+r+"%"});return t==null?void 0:t.achievements}catch(e){return await y(e)}},S=async({limit:i,serverSearchInput:r,offset:a})=>{try{const e=_(`
                query query_activeAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: {
                            _and: [
                                {
                                    _or: { title: { _ilike: $title }, description: { _ilike: $title } }
                                    deleted_at: { _is_null: true }
                                    archived: { _eq: false }
                                }
                            ]
                        }
                    ) {
                        ...AchResponseFr
                    }
                }
            `,[m]),t=await(await d()).request(e,{limit:i,offset:a,title:"%"+r+"%"});return t==null?void 0:t.achievements}catch(e){return await y(e)}},b=async({limit:i,serverSearchInput:r,offset:a})=>{try{const e=_(`
                query query_deletedAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: {
                            _and: [
                                {
                                    _or: { title: { _ilike: $title }, description: { _ilike: $title } }
                                    deleted_at: { _is_null: false }
                                }
                            ]
                        }
                    ) {
                        ...AchResponseFr
                    }
                }
            `,[m]),t=await(await d()).request(e,{limit:i,offset:a,title:"%"+r+"%"});return t==null?void 0:t.achievements}catch(e){return await y(e)}},x=async({limit:i,serverSearchInput:r,offset:a})=>{try{const e=_(`
                query query_archivedAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: {
                            _and: [
                                {
                                    _or: { title: { _ilike: $title }, description: { _ilike: $title } }
                                    deleted_at: { _is_null: true }
                                    archived: { _eq: true }
                                }
                            ]
                        }
                    ) {
                        ...AchResponseFr
                    }
                }
            `,[m]),t=await(await d()).request(e,{limit:i,offset:a,title:"%"+r+"%"});return t==null?void 0:t.achievements}catch(e){return await y(e)}},O=i=>{const{data:r,fetchNextPage:a,hasNextPage:e,isFetching:o,isFetchingNextPage:t}=v({queryKey:F.fetchAchsKey(JSON.stringify(i)),queryFn:async s=>{const{queryFilter:c=h.active,limit:n=20,serverSearchInput:l=""}=i,f=s.pageParam,q=s.pageParam+5;let u=[];return c===h.all&&(u=await I({limit:n,offset:f,serverSearchInput:l})),c===h.favorite&&(u=await k({limit:n,offset:f,serverSearchInput:l})),c===h.active&&(u=await S({limit:n,offset:f,serverSearchInput:l})),c===h.deleted&&(u=await b({limit:n,offset:f,serverSearchInput:l})),c===h.archived&&(u=await x({limit:n,offset:f,serverSearchInput:l})),{data:u,nextCursor:q}},initialPageParam:0,getNextPageParam:(s,c)=>{var n,l;return(l=(n=g(c))==null?void 0:n.data)!=null&&l.length?s==null?void 0:s.nextCursor:void 0},staleTime:1e3,refetchOnWindowFocus:!1,refetchOnMount:!0,enabled:!!i.userId}),$=w(A(p(r==null?void 0:r.pages.map(s=>s.data))),(s,c)=>s.id===c.id);return{isLoading:o,fetchNextPage:a,isFetchingNextPage:t,hasNextPage:e,achs:$||[]}};export{O as u};
//# sourceMappingURL=useFetchAchs-BVDUmuQy.js.map
