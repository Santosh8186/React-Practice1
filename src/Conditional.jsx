import React from 'react'
import { useState } from 'react';

const Conditional = () => {
    let[authuser,setAuthuser]=useState(false)

    let AcceptedUser=()=>{
        return(
            <>
            <nav>
                <ol>
                    <li>Logo</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Search</li>
                </ol>
            </nav>
            </>
        )
    }

    let NotAcceptedUser=()=>{
        return(
            <>
            <nav>
                <ol>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Forget Password</li>
                </ol>
            </nav>
            </>
        )
    }
  return <>{authuser?<AcceptedUser/>:<NotAcceptedUser/>}</>
}

export default Conditional