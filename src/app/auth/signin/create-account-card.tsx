"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect } from "react"

// import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Messages from "./messages"

export function CreateAccountCard() {
  const supabase = createClientComponentClient()
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      // eslint-disable-next-line no-unused-vars
      async (event, _session) => {
        if (event === "SIGNED_IN") {
          window.location.href = "/"
        }
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase.auth])

  return (
    <div>
      <Card className="">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            OAuth認証もしくは、メールアドレスでサインインしてください。 Enter
            your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* OAuth */}
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              {/* <Icons.gitHub className="w-4 h-4 mr-2" /> */}
              Github
            </Button>
            <a className="" href="/auth/oauth/github">
              <svg
                // GitHub
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.184998C5.373 0.184998 0 5.558 0 12.185C0 17.808 3.872 22.513 9.092 23.815C9.036 23.653 9 23.465 9 23.232V21.181C8.513 21.181 7.697 21.181 7.492 21.181C6.671 21.181 5.941 20.828 5.587 20.172C5.194 19.443 5.126 18.328 4.152 17.646C3.863 17.419 4.083 17.16 4.416 17.195C5.031 17.369 5.541 17.791 6.021 18.417C6.499 19.044 6.724 19.186 7.617 19.186C8.05 19.186 8.698 19.161 9.308 19.065C9.636 18.232 10.203 17.465 10.896 17.103C6.9 16.692 4.993 14.704 4.993 12.005C4.993 10.843 5.488 9.719 6.329 8.772C6.053 7.832 5.706 5.915 6.435 5.185C8.233 5.185 9.32 6.351 9.581 6.666C10.477 6.359 11.461 6.185 12.495 6.185C13.531 6.185 14.519 6.359 15.417 6.668C15.675 6.355 16.763 5.185 18.565 5.185C19.297 5.916 18.946 7.841 18.667 8.779C19.503 9.724 19.995 10.845 19.995 12.005C19.995 14.702 18.091 16.689 14.101 17.102C15.199 17.675 16 19.285 16 20.498V23.232C16 23.336 15.977 23.411 15.965 23.5C20.641 21.861 24 17.421 24 12.185C24 5.558 18.627 0.184998 12 0.184998Z"
                  fill="black"
                  fillOpacity="0.6"
                />
              </svg>
              Sign in with GitHub
            </a>
            <Button variant="outline">
              {/* <Icons.google className="w-4 h-4 mr-2" /> */}
              Google
            </Button>
            <a className="" href="/auth/oauth/google">
              <svg
                // Google
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24"
                height="24"
              >
                <path
                  fill="black"
                  fillOpacity="0.3"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="black"
                  fillOpacity="0.3"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="black"
                  fillOpacity="0.3"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="black"
                  fillOpacity="0.3"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Sign in with Google
            </a>
            <Button variant="outline">Slack</Button>
            <a className="" href="/auth/oauth/slack">
              <svg
                // Slack
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="black"
                  fillOpacity="0.6"
                  d="M33 8a4 4 0 0 0-8 0v11a4 4 0 0 0 8 0V8zM43 19a4 4 0 0 1-4 4h-4v-4a4 4 0 0 1 8 0z"
                />
                <path
                  fill="black"
                  fillOpacity="0.6"
                  d="M8 14a4 4 0 0 0 0 8h11a4 4 0 0 0 0-8H8zM19 4a4 4 0 0 1 4 4v4h-4a4 4 0 0 1 0-8z"
                />
                <path
                  fill="black"
                  fillOpacity="0.6"
                  d="M14 39.006C14 41.212 15.791 43 18 43s4-1.788 4-3.994V28.022c0-2.206-1.791-3.994-4-3.994s-4 1.788-4 3.994v10.984zM4 28.022a3.997 3.997 0 0 1 4-3.994h4v3.994c0 2.206-1.791 3.994-4 3.994s-4-1.788-4-3.994z"
                />
                <path
                  fill="black"
                  fillOpacity="0.6"
                  d="M39 33a4 4 0 0 0 0-8H28a4 4 0 0 0 0 8h11zM28 43a4 4 0 0 1-4-4v-4h4a4 4 0 0 1 0 8z"
                />
              </svg>
              Sign in with Slack
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            {/* Mail  */}
            <div className="">
              <form className="" action="/auth/email/signin" method="post">
                <label className="" htmlFor="email">
                  Email
                </label>
                <input
                  className=""
                  name="email"
                  placeholder="you@example.com"
                  required
                />
                <label className="" htmlFor="password">
                  Password
                </label>
                <input
                  className=""
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
                <button className="">Sign In</button>
                <button formAction="/auth/email/signup" className="">
                  Sign Up
                </button>
                <Messages />
              </form>
            </div>
            ーーーーーーーーーーーー
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create account</Button>
        </CardFooter>
      </Card>
      <a className="hover:bg-gray-400" href="/">
        TOP
      </a>
    </div>
  )
}
