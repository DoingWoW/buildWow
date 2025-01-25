import React from "react";
import Navbar from '../components/Navbar'
import Words from '../components/Words'
import Event from '../components/Event'
import SponsorForm from '../components/SponsorForm'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import Why from '../components/Why'
import Prizes from '../components/Prizes'
import Sponsors from '../components/Sponsors'

export default function Hackathon() {

  return (
    <>
    <title>BuildWOW</title>
    <main className='min-h-screen overflow-hidden relative pt-20 bg-black text-white'>

        <div className='z-0 bg-radial_red h-96 w-96 md:h-[60rem] md:w-[60rem] absolute -top-[30rem] rounded-full -left-[30rem] opacity-10 blur-lg'></div>
        <div className='z-0 bg-radial_grey h-96 w-96 md:h-[60rem] md:w-[60rem] absolute top-[40rem] rounded-full -right-[30rem] opacity-10 blur-lg'></div>
        <div className='z-0 bg-radial_red h-96 w-96 md:h-[60rem] md:w-[60rem] absolute top-[80rem] rounded-full -left-[30rem] opacity-10 blur-lg'></div>
        <div className='z-0 bg-radial_grey h-96 w-96 md:h-[60rem] md:w-[60rem] absolute top-[120rem] rounded-full -right-[30rem] opacity-10 blur-lg'></div>
        <div className='z-0 bg-radial_red h-96 w-96 md:h-[60rem] md:w-[60rem] absolute top-[160rem] rounded-full -left-[30rem] opacity-10 blur-lg'></div>

        <Navbar />
        
        <Words />

        <Event page='hack' />

        <Timeline />

        <Why />

        <Prizes />

        <Sponsors />

        <SponsorForm />

        <Footer />

    </main>
    </>
  )
}
