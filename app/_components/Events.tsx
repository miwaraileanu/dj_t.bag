import React from 'react'
import { events } from './EventsList'

const Events = () => {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="relative peralta-font w-full h-auto bg-white flex flex-col justify-between items-center my-[10%] md:my-[5%]"
    >
      <div className="flex flex-col justify-between items-center w-[80%] h-auto my-[3%]">
        <h2
          id="events-heading"
          className="uppercase mb-3 font-bold text-black text-center text-[6vh] md:text-[8vh]"
        >
          Everything we can help you with
        </h2>
      </div>

      <div className="w-[80%]">
        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 xl:gap-x-6">
          {events.map((event) => (
            <div key={event.id} className="group relative">
              <img
                alt={event.imageAlt}
                src={event.imageSrc}
                loading="lazy"
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-90"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-2xl text-gray-700">
                    <a href={event.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {event.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-md text-gray-800">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
