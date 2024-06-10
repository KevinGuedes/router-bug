import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({context}) => {
    if (!context.user.isAuthenticated) {
      throw redirect({to: '/'})
    }
  },
  component: Authenticated
})


function Authenticated() {
  return <div>
    <h1 className='text-xl'>Authenticated Layout</h1>
    <Outlet />
  </div>
}