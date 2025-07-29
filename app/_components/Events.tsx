import React from 'react'
import { events } from './EventsList'

const Events = () => {
    return (
        <div id='events' className='relative peralta-font products w-full h-auto  bg-white flex flex-col justify-between items-center my-[10%] md:my-[5%]'>

            <div className="text flex flex-col justify-between items-center w-[80%] h-auto my-[3%]">
                <h1 className=' uppercase mb-3 font-bold text-center text-[6vh] md:text-[8vh]'>Everything we can help you with</h1>
            </div>
            {/* Event list */}
            <div className="container w-[80%] h-[80%]">
                <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-6">
                    {events.map((events) => (
                        <div key={events.id} className="group relative">
                            <img
                                alt={events.imageAlt}
                                src={events.imageSrc}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-90"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-2xl text-gray-700">
                                        <a href={events.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {events.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-md text-gray-800">{events.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Events