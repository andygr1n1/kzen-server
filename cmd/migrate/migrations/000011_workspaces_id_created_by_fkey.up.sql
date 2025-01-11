alter table "public"."workspaces"
  add constraint "workspaces_created_by_fkey"
  foreign key ("created_by")
  references "public"."users"
  ("id") on update cascade on delete cascade;
