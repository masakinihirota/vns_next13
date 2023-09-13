import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import SupabaseLogo from "../components/SupabaseLogo";
import NextJsLogo from "../components/NextJsLogo";

export const dynamic = "force-dynamic";

const examples = [
  { type: "Client Components", src: "app/examples/client-component/page.tsx" },
  { type: "Server Components", src: "app/examples/server-component/page.tsx" },
  { type: "Server Actions", src: "app/examples/server-action/page.tsx" },
  { type: "Route Handlers", src: "app/examples/route-handler.ts" },
];

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    // 全体を縦にならべている、幅いっぱいに並べている
    <div className="flex flex-col items-center w-full">
      {/* nav部分 Home ,Advertisement, Dark mode,Language, Login */}
      {/* ナビ部分の高さを決めている、ボーダーラインボトムを描いている ボーダー色は現在の文字色
      ナビ部分とメイン部分の分離箇所 */}
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        {/* ナビ部分 上下中央に揃えている 横に均等にならべている 幅いっぱいに使っている */}
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm text-foreground">
          VNS.BLUE
          <div />
          Dark mode
          <div />
          Language
          <div />
          Advertisement
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="justify-center w-full overflow-hidden border rounded-lg">
        {examples.map(({ type, src }) => (
          <div
            key={type}
            className="grid w-full grid-cols-3 text-sm border-b last:border-b-0"
          >
            <div className="flex items-center w-full p-4 font-bold min-h-12">
              {type}
            </div>
            <div className="flex items-center col-span-2 p-4 border-l">
              <code className="text-sm whitespace-pre-wrap">{src}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
