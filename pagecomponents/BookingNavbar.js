import React from "react"

export default function BookingNavbar(){
    return(
        <nav className="sub-nav" >
            <div>
                <ul>
                    <li>
                        <a href="#office">Select Office</a>
                    </li>
                    <li>
                        <a href="#job">Select job</a>
                    </li>
                    <li>                    
                        <a href="#time">Select date and time</a>
                    </li>
                    {/* <li>
                        <a href="#register">Register</a>
                    </li> */}
                </ul>
            </div>
            
        </nav>
    )
}