"use client"

import Link from "next/link"

import { CreateAccountCard } from "./create-account-card"

export default function SignIn() {
  //   const supabase = createClientComponentClient()

  //   useEffect(() => {
  //     const { data: authListener } = supabase.auth.onAuthStateChange(
  //       // eslint-disable-next-line no-unused-vars
  //       async (event, _session) => {
  //         if (event === "SIGNED_IN") {
  //           window.location.href = "/"
  //         }
  //       }
  //     )

  //     return () => {
  //       authListener.subscription.unsubscribe()
  //     }
  //   }, [supabase.auth])

  return (
    <div>
      <Link href="/" className="select-none">
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
