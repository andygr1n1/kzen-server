alter table "public"."users_workspaces"
  add constraint "users_workspaces_workspace_id_fkey"
  foreign key ("workspace_id")
  references "public"."workspaces"
  ("id") on update cascade on delete cascade;

alter table "public"."users_workspaces"
  add constraint "users_workspaces_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete cascade;

