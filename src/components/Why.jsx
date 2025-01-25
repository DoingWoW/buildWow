import React from 'react'

export default function Why() {
  const WhyParticipateCardLayout = (props) => (
    <div className={
        "h-60 flex items-center justify-center flex-col gap-4 rounded-md bg-primary " +
        props.data.backgroundClr}>
      <img src={props.data.image} className="w-1/2 object-contain aspect-square" />
      <p className='font-poppins'>{props.data.content}</p>
    </div>)

  const whyParticipateCardContent = [
    {
      image: "./Development.svg",
      content: "Participate",
      backgroundClr: "md:bg-gradient-to-br from-red-300 to-red-500",
    },
    {
      image: "./Development.svg",
      content: "Participate",
      backgroundClr: "md:bg-gradient-to-br from-red-400 to-red-600",
    },
    {
      image: "./Development.svg",
      content: "Participate",
      backgroundClr: "md:bg-gradient-to-br from-red-500 to-red-700",
    },
    {
      image: "./Development.svg",
      content: "Participate",
      backgroundClr: "md:bg-gradient-to-br from-red-400 to-red-600",
    },
    {
      image: "./Development.svg",
      content: "Participate",
      backgroundClr: "md:bg-gradient-to-br from-red-500 to-red-700",
    },
    {
      image: "./Development.svg",
      content: "Participate",
      backgroundClr: "md:bg-gradient-to-br from-red-600 to-red-900",
    },
  ];

  return (
    <section className='px-4 md:px-20 z-10 relative'>
      <h2 className='font-poppins font-bold md:text-5xl text-3xl text-center'>WHY PARTICIPATE IN <br /><span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>HACKATHON</span></h2>
      <div className="w-4/5 grid md:grid-cols-3 gap-4 my-6 mx-auto">
        {whyParticipateCardContent.map((item, index) => {
          return <WhyParticipateCardLayout key={index} data={item} />;
        })}
      </div>
    </section>
  )
}
