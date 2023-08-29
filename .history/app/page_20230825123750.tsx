import Image from 'next/image'
import LoginCard from './ui/AuthComponent'
import { supabaseAuth } from './lib/constants'

export default async function Home() {
  const {data: session} = await supabaseAuth.auth.getSession()
  if (session) {
    console.log(session)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <LoginCard session={session}/>

    </main>
  )
}
