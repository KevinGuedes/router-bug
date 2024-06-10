import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { userAtom } from '../../stores/user-store'

export const Route = createFileRoute('/_authenticated/about')({
  component: About
})

function About() {
  const [user, setUser] = useAtom(userAtom)
  const router = useRouter()


  function handleLogout() {
    setUser({name: '', isAuthenticated: false})
    router.navigate({to: '/'})
  }

  return <div>
    <h1 className='text-xl'>About Page</h1>
    <p>Welcome, {user.name}!</p>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
     onClick={handleLogout}>
      Logout
    </button>
  </div>
}