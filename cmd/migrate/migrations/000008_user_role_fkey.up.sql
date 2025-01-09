alter table "public"."users"
  add constraint "users_role_fkey"
  foreign key ("role")
  references "public"."roles"
  ("id") on update set default on delete set default;
