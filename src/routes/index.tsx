import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { userAtom } from '../stores/user-store'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const [user, setUser] = useAtom(userAtom)
  const router = useRouter()


  async function login() {
    await new Promise((resolve) => {
      setTimeout(() => {
        setUser({name: 'Guest', isAuthenticated: true})
        resolve(1)
      }, 10)
    })
  }

  async function handleLogin() {
    await login()
    await router.invalidate()
    await router.navigate({to: '/about'})
  }

  return <div>
    <h1 className='text-xl'>Home Page</h1>
    <p>Current User: {user.name}</p>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
     onClick={handleLogin}>
      Login
    </button>
  </div>
}