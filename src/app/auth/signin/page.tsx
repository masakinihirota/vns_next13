"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { useEffect } from "react"

import { CreateAccountCard } from "./create-account-card"

// const formSchema = z.object({
//   email: z.string().email({
//     message: "Invalid"
//   })
// })

export default function SignIn() {
  const supabase = createClientComponentClient()
  // const { toast } = useToast()
  // const { ...form } = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: ""
  //   }
  // })

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   const { email } = values
  //   const { error } = await supabase.auth.signInWithOtp({
  //     email
  //   })

  //   if (error) {
  //     toast({
  //       description: `warn! ${error?.message}`
  //     })

  //     return
  //   }

  //   toast({
  //     description: "🎉 Plz! Check your email for sign in link."
  //   })
  // }

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
      <Link href="/" className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </Link>
      <div className="flex justify-center">
        <CreateAccountCard />
      </div>
    </div>
  )
}
