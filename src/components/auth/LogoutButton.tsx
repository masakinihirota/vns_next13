export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      {/* // <form action="/auth" method="post"> */}
      <button className="hover:bg-gray-400">Logout</button>
    </form>
  )
}
