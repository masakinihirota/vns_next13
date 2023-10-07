"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect } from "react"

// import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardOAuth() {
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
      <CardContent className="flex flex-col">
        {/* OAuth */}
        <div className="flex flex-col items-center justify-center ">
          <Button
            variant="outline"
            className="flex items-center justify-center px-4 py-2 space-x-2 border rounded-lg focus:outline-none focus:ring-2"
          >
            <a className="" href="/auth/oauth/github">
              Sign in with GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center px-4 py-2 space-x-2 border rounded-lg focus:outline-none focus:ring-2"
          >
            <a className="" href="/auth/oauth/google">
              Sign in with Google
            </a>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center px-4 py-2 space-x-2 border rounded-lg focus:outline-none focus:ring-2"
          >
            <a className="" href="/auth/oauth/slack">
              Sign in with Slack
            </a>
          </Button>
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
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      --------------------
      <CardContent className="flex flex-col">
        {/* OAuth */}
        <div className="flex flex-col items-center justify-center ">
          <Button
            variant="outline"
            className="flex items-center justify-center px-4 py-2 space-x-2 border rounded-lg focus:outline-none focus:ring-2"
          >
            <a className="" href="/auth/oauth/github">
              Sign in with GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center px-4 py-2 space-x-2 border rounded-lg focus:outline-none focus:ring-2"
          >
            <a className="" href="/auth/oauth/google">
              Sign in with Google
            </a>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center px-4 py-2 space-x-2 border rounded-lg focus:outline-none focus:ring-2"
          >
            <a className="" href="/auth/oauth/slack">
              Sign in with Slack
            </a>
          </Button>
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
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
    </div>
  )
}
