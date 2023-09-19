export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover">
        Logout
      </button>
    </form>
  )
}
