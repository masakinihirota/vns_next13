"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect } from "react"
// import { Form, useForm } from "react-hook-form"
import { useForm } from "react-hook-form"
import { RxGithubLogo } from "react-icons/rx"
import * as z from "zod"

import { Button } from "@/components/ui/etc/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/etc/form"
import { Input } from "@/components/ui/etc/input"
import { Separator } from "@/components/ui/etc/separator"
import { Spinner } from "@/components/ui/etc/spinner"
import { Toaster } from "@/components/ui/etc/toaster"
import { useToast } from "@/components/ui/etc/use-toast"

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address."
  })
})

export default function IndexPage() {
  const supabase = createClientComponentClient()
  const { toast } = useToast()
  const { ...form } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email } = values
    const { error } = await supabase.auth.signInWithOtp({
      email
    })

    if (error) {
      toast({
        description: `warn! ${error?.message}`
      })

      return
    }

    toast({
      description: "🎉 Yay! Check your email for sign in link."
    })
  }

  async function handleGithubLogin() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github"
    })

    if (error) {
      toast({
        description: `warn! ${error?.message}`
      })

      return
    }
  }

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
    <section className="container flex flex-col justify-center h-screen max-w-md space-y-8">
      <div className="flex flex-col space-y-4">
        <p className="text-lg font-bold">Login</p>
        <p className="text-sm text-muted-foreground">
          Enter your email to receive a one-time password
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="sm" className="w-full">
            {form.control._formState.isSubmitting ? (
              <Spinner />
            ) : (
              "Send password"
            )}
          </Button>
        </form>
      </Form>
      <Separator />
      <Button
        variant="secondary"
        size="sm"
        className="space-x-4"
        onClick={handleGithubLogin}
      >
        <RxGithubLogo size={20} />
        <p>Sign in with Github</p>
      </Button>
      <Separator />
      {/* GoogleAuth予定 */}
      <Toaster />
    </section>
  )
}
