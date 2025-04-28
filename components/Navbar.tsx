import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await auth()
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex items-center justify-between">
            <Link href="/" >
                <Image src="/logo.png" alt="Logo" width={144} height={30} />
            </Link>

            <div className="flex items-center gap-5 text-black">
                { session && session?.user ? (
                    <>
                        <Link href="/startup/create" className="text-gray-700 hover:text-gray-900 px-4 py-2">Create Startup</Link>                        
                        <form action={async () => {
                            "use server"

                            await signOut()
                        } } className="text-gray-700 hover:text-gray-900 px-4 py-2">
                            <button type='submit' className="flex items-center gap-2">
                                <span>Sign Out</span>
                            </button>
                        </form>

                       <Link href={`/user/${session.user?.id}`} className="text-gray-700 hover:text-gray-900 px-4 py-2">
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ): (
                        <form action={async () => {
                            "use server"

                            await signIn('github')
                        }}>
                            <button type='submit'>
                                Login    
                            </button>
                        </form>
                )}
            </div>
        </nav>
    </header>
)
}

export default Navbar