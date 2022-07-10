import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="main-nav" >
            <div>
                <Link href="#home">
                    <Image src="/vercel.svg" width={72} height={72}/>
                </Link>
                
                <ul>
                    <li>
                        <a href="#saved">Saved</a>
                    </li>
                    <li>
                        <a href="#booking">My Booking</a>
                    </li>
                    <li>                    
                        <a href="#login">Log In</a>
                    </li>
                    <li>
                        <a href="#register">Register</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}