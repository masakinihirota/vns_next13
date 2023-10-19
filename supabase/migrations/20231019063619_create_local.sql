create extension if not exists "pgtap" with schema "extensions";


create table "public"."todos" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default timezone('utc'::text, now()),
    "title" text,
    "is_complete" boolean default false,
    "user_id" uuid default auth.uid()
);


alter table "public"."todos" enable row level security;

CREATE UNIQUE INDEX todos_pkey ON public.todos USING btree (id);

alter table "public"."todos" add constraint "todos_pkey" PRIMARY KEY using index "todos_pkey";

alter table "public"."todos" add constraint "todos_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."todos" validate constraint "todos_user_id_fkey";

create policy "Authenticated users can insert their own todos"
on "public"."todos"
as permissive
for insert
to authenticated
with check ((auth.uid() = user_id));


create policy "Authenticated users can select todos"
on "public"."todos"
as permissive
for select
to authenticated
using (true);




