import React from 'react'

// import router
import Link from '../../node_modules/next/link';

//import modules of styles
import styles from './styles.module.css';

//import react-icons
import { BsFillCartFill } from "react-icons/bs";

//use route
import { useRouter } from 'next/router';

const Navbar = () => {


    //Next step, i have to make the identifier
    // const router = useRouter();

    return (
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link 
                            href='/' 
                            prefetch={false}
                        >Home</Link>
                    </li>
                    <li>
                        <Link 
                            href='/about' 
                            prefetch={false}
                        >About</Link>
                    </li>
                </ul>

                <button
                    className={styles.button}
                >
                    <BsFillCartFill 
                        size={25}
                        color="#606c38"
                        />
                    Cart
                </button>
            </nav>
    )
}

export default Navbar