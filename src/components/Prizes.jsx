import { faAward, faTrophy, faPager } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Prizes() {
  return (
    <section className='px-4 py-20 md:px-32 relative z-10'>
        <h2 className='font-poppins font-bold md:text-5xl text-3xl text-center'>PRIZES</h2>
        <div className="flex flex-col md:flex-row my-4">
          <div className="md:w-3/5 flex-shrink-0 border-4 border-[#333] p-4">
            <div className="bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl h-full text-center flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon icon={faTrophy} size='5x' />
              <h5 className="font-poppins text-lg md:text-2xl font-semibold uppercase">Lorem, ipsum dolor si</h5>
              <p className="w-4/5 text-[#eee]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
                sit repellendus cum quam et expedita odio dolorum ratione,
                voluptatibus est fugiat
              </p>
            </div>
          </div>
          <div className="md:w-2/5 flex flex-col flex-shrink-0 border-4 border-[#333] md:border-l-0 border-t-0 md:border-t-4">
            <div className="m-4 p-4 bg-[#1f1f1f]/60 backdrop-blur-md rounded-xl text-center flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon icon={faAward} size='3x' />
              <h5 className="font-poppins text-lg md:text-2xl font-semibold uppercase">Lorem, ipsum dolor si</h5>
              <p className="w-4/5 text-[#eee]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
              </p>
            </div>
            <div className="w-full h-1 bg-[#333]"></div>
            <div className="m-4 p-4 bg-[#1f1f1f]/60 backdrop-blur-md rounded-xl text-center flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPager} size='3x' />
              <h5 className="font-poppins text-lg md:text-2xl font-semibold uppercase">Lorem, ipsum dolor si</h5>
              <p className="w-4/5 text-[#eee]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}
