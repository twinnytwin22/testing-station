import { supabaseAuth } from './lib/constants'
import AuthComponent from './ui/AuthComponent'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = cookies()
  const allCookies = cookieStore.getAll()
  console.log(allCookies, "MY COOKIES")
  const {data: session} = await supabaseAuth.auth.getSession()
  if (session) {
    console.log(session)
  }

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <AuthComponent session={session?.session}/>

    </main>
  )
}
