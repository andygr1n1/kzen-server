alter table "public"."tasks"
  add constraint "tasks_status_fkey"
  foreign key ("status")
  references "public"."tasks_status"
  ("id") on update set default on delete set default;

