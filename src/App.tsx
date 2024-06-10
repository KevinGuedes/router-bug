import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { useAtomValue } from 'jotai'
import { userAtom } from './stores/user-store'

const router = createRouter({ routeTree,
  context: {
    user: undefined!
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function App() {
  const user = useAtomValue(userAtom)

  return <RouterProvider router={router} context={{user}} />
}

