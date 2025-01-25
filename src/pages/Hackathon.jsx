import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Words from '../components/Words'
import Event from '../components/Event'
import SponsorForm from '../components/SponsorForm'
import Footer from '../components/Footer'

export default function Hackathon() {

  return (
    <>
    <title>BuildWOW</title>
    <main className='min-h-screen overflow-hidden relative pt-20 bg-black text-white'>

        <div className='z-0 bg-radial_red h-96 w-96 md:h-[60rem] md:w-[60rem] absolute -top-[30rem] rounded-full -left-[30rem] opacity-20 blur-lg'></div>
        <div className='z-0 bg-radial_grey h-96 w-96 md:h-[60rem] md:w-[60rem] absolute top-[40rem] rounded-full -right-[30rem] opacity-20 blur-lg'></div>
        <div className='z-0 bg-radial_red h-96 w-96 md:h-[60rem] md:w-[60rem] absolute top-[80rem] rounded-full -left-[30rem] opacity-20 blur-lg'></div>

        <Navbar />
        
        <Words />

        <Event />

        <SponsorForm />

        <Footer />

    </main>
    </>
  )
}
