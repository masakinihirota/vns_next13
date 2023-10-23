```sql
create table public.todos (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default timezone('utc', now()),
  title text null,
  is_complete boolean null default false,
  user_id uuid null default auth.uid(),  ＜＜＜１
  constraint todos_pkey primary key (id),
  constraint todos_user_id_fkey foreign key (user_id) references auth.users (id)  ＜＜＜２
) tablespace pg_default;
```

１
 auth.uid()という関数を使って現在のユーザーのUUIDがデフォルト値として設定されることを示します。

２
- `constraint todos_user_id_fkey foreign key (user_id) references auth.users (id)`: `user_id`カラムに対して、`auth.users`テーブルの`id`カラムを参照する外部キー制約を追加します。`todos_user_id_fkey`は、制約の名前です。
