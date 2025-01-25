import React, {useState} from 'react'

export default function Timeline() {
    const items = [
    {
        name: "Team Registration",
        content:
        "12 to 14 APRIL, Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
    },
    {
        name: "Day 1",
        content:
        "24 APRIL, Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
    },
    {
        name: "Day 2",
        content:
        "25 APRIL, Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
    },
    {
        name: "Day 3 & result",
        content:
        "25 APRIL, Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
    },
    ];

    const [activeBlock, setActiveBlock] = useState(0);
    
    return (
        <section className='px-4 py-20 md:px-32 relative z-10'>
            <h2 className='font-poppins font-bold md:text-5xl text-3xl text-center'>TIMELINE</h2>
            <div className="flex justify-center md:mt-12 mt-4">
                <div className="flex flex-col md:flex-row w-full bg-[#fff] rounded-lg shadow-lg overflow-hidden">
                <div className="w-full md:w-1/5 bg-[#333] text-sm font-medium py-3">
                    {items.map((item, index) => (
                    <button
                        key={item.name}
                        className={`w-full uppercase text-left px-4 py-3 cursor-pointer transition ${
                        index === activeBlock
                            ? "bg-primary transition-colors duration-500 text-white"
                            : "hover:bg-[#222] transition hover:text-primary text-[#ccc]"
                        }`}
                        onClick={() => setActiveBlock(index)}
                    >
                        {item.name}
                    </button>
                    ))}
                </div>

                <div className="p-5 md:w-4/5 text-black">
                    <h2 className="text-xl uppercase font-bold mb-4 bg-gradient-to-r w-max from-primary to-secondary bg-clip-text text-transparent">
                    {items[activeBlock].name}
                    </h2>
                    <p className="text-[#222]">
                    {items[activeBlock].content}
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}
