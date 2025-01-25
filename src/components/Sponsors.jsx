import React from 'react'

export default function Sponsors() {
  const sponsors_data = [{
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png',
    name: 'McDonalds'
  }, {
    img: 'https://www.commudle.com/assets/images/commudle-logo-full.png',
    name: 'Commudle'
  }, {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/2560px-.xyz_logo.svg.png',
    name: 'DotXYZ'
  }]
  return (
    <section className='px-4 py-12 md:px-20 z-10 relative bg-[#0f0f0f] space-y-4 text-center'>
      <h2 className='font-poppins font-bold md:text-5xl text-3xl text-center'>SPONSORS</h2>
      <p className='font-poppins text-[#eee]'>Thank you to our generous sponsors for contributing to the prize pool and making this awesome event a reality.</p>
      <div className='flex gap-8 flex-wrap justify-center'>
        {sponsors_data.map((element, i) => {
          return (<div className='text-center' key={i}>
            <img src={element.img} className='h-16 w-32 object-contain my-4 mx-auto' alt={element.name} />
            <p className='font-poppins text-[#ddd] text-sm'>{element.name}</p>
          </div>)
        })}
      </div>
    </section>
  )
}
