export default function LogoutButton() {
  return (
    <form action="/auth/email/sign-out" method="post">
      <button className="hover:bg-gray-400">Logout</button>
    </form>
  )
}
