import React, {useEffect} from 'react'

export default function Navbar() {
  useEffect(() => {
    const nav = document.querySelector('nav')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        nav.classList.add('bg-black/80')
        nav.classList.remove('bg-transparent')
      } else {
        nav.classList.add('bg-transparent')
        nav.classList.remove('bg-black/80')
      }
    })
  }, [])
  return (
    <nav className='fixed inset-x-0 z-40 top-0 transition text-white md:px-20 p-4 flex items-center gap-4 justify-between'>
        <img src='./logo.png' alt='WOW' className='h-10' />
        <div className='hidden md:flex flex-col md:flex-row gap-8 items-center'>
          <a className='font-bold font-mont hover:text-primary transition' href="/">HOME</a>
          <a className='font-bold font-mont hover:text-primary transition' href="/">ABOUT</a>
          <a className='font-bold font-mont hover:text-primary transition' href="/hack">EVENT</a>
          <a className='font-bold font-mont hover:text-primary transition' href="/">CONTACT</a>
          <a className='font-bold font-mont p-2 px-5 rounded-full bg-gradient-to-b from-primary to-secondary transition hover:shadow-md hover:shadow-[#868686]/40' href="/">JOIN US</a>
        </div>
    </nav>
  )
}
