import React from 'react'

// import router
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav>
                <menu>
                    <Link href='/' prefetch={false}>Home</Link>
                    <Link href='/about' prefetch={false}>About</Link>
                </menu>
            </nav>
        </div>
    )
}

export default Navbar