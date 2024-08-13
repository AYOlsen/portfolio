import { ROUTES } from "../Routes";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from 'react';

import { LatestProjectCard } from '../Components/Cards';
import { Scene } from '../Components/Scene';
import { Banner } from '../Components/Banner';
import { Button } from '../Components/Buttons';

import { useQuery } from '@apollo/client';
// import { GET_SERVICES } from '../Graphgl';
import { GET_LATESTPROJECTS } from '../Graphgl';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  // const { data: serviceData } = useQuery(GET_SERVICES);
  const { data: projectData } = useQuery(GET_LATESTPROJECTS);

  // const cardsRef = useRef(null);

  // useEffect(() => {
    
  //   if (cardsRef.current) {
  //     gsap.from(cardsRef.current, {
  //       scrollTrigger: {
  //         trigger: cardsRef.current,
  //         start: 'top 50%',
  //         end: '10% 50%',
  //         scrub: 1,
  //       },
  //       x: -50, 
  //       opacity: 0,
  //       duration: 3,
  //     });
  //   }
  // }, [serviceData]);
  

  return (
    <>
      <section className="bg-background h-[670px] relative">
        <div className="max-width mx-auto pb-6">
          <div className="pt-16 px-4 md:hidden">
            <img src={process.env.PUBLIC_URL + '/images/about-me.png'} alt="" />
          </div>
          <div className="max-width">
            <div className="pt-4 px-4">
              <Banner
                className="text-green-200 w-full md:w-96 md:absolute md:top-64 md:left-[10%]"
                titleClassName="font-bold text-3xl"
                title={
                  <>
                    Hey, I am<br />
                    Anna-Yodit Olsen
                  </>
                }
                textClassName="font-semibold text-lg"
                text="I am a recently graduated as a front-end developer currently looking for a UX design internship."
              />
              <div className="flex gap-6 mt-6 md:absolute md:bottom-44 md:left-[10%]">
                <Button 
                  className="bg-brown-200 hover:bg-brown-400 text-white rounded-md px-4 py-2"
                  text="About Me"
                  link={ROUTES.About}
                />
                <Button 
                  className="bg-green-300 hover:bg-green-500 text-white rounded-md px-4 py-2"
                  text="My projects"
                  link={ROUTES.Project}
                />
              </div>
            </div>
            <div className="hidden md:block md:absolute md:w-[85%] md:h-full">
              <Scene />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-background ">
        <div className='max-width mx-auto pb-20'>
          <h2 className='pt-12 mb-12'>Services</h2>
          {serviceData && serviceData.services && serviceData.services.length > 0 && (
            <ul className='flex justify-evenly ' ref={cardsRef}>
              {serviceData.services.map((service) => (   
                <li key={service.id} className="">
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                    image={service.image.url}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section> */}
      
      <section className='bg-green-200 py-12'>
        <div className='border-t-8 border-brown-700 py-8'>
          <div className='max-width mx-auto text-brown-900 my-12 px-4'>
            <h2 className='text-brown-700 text-center mb-20 text-3xl'>Recent Work</h2>

            {projectData && projectData.projects && projectData.projects.length > 0 && (
              <ul className='md:flex gap-x-5 justify-center mb-16 md:mb-22'>
                {projectData.projects.map((project) => (   
                  <li key={project.id} id={project.id} className="rounded-md pb-8">
                    <LatestProjectCard 
                      title={project.title}
                      category={project.category}
                      slug={project.slug}
                      image={project.image.url}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <Button 
              className="home-button max-width mx-auto w-[150px] bg-green-300 hover:bg-green-500 text-white rounded-md px-4 py-2"
              text="View all projects"
              link={ROUTES.Project}
            />
          </div>
        </div>
      </section>
    </>
  );
}
