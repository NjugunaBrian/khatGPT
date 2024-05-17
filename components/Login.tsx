"use client";

import React from 'react'
import Image from "next/image";
import { signIn } from 'next-auth/react';

function Login() {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-[#11A37F] space-y-0'>
        <Image src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
        
        />
        <button onClick={() => signIn("google")} className='text-white font-bold text-3xl animate-pulse'>Sign in to use KhatGPT</button>
    </div>
  )
}

export default Login