import { useQuery } from '@apollo/client';
import { ProjectCard } from '../Components/Cards';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

import { GET_PROJECTS } from '../Graphgl';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage () {
    const { loading, error, data } = useQuery(GET_PROJECTS);
    const projectListRef = useRef(null);

    // useEffect(() => {
    //     const projectCards = document.querySelectorAll('.project-list li');

    //     if (!projectListRef.current || !projectCards.length) {
    //     return;
    //     }

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: projectListRef.current,
    //             start: 'top bottom',
    //             end: 'bottom bottom',
    //             scrub: 1,
    //         },
    //     });

    //     tl.from(projectCards, { opacity: 0, y: 50, stagger: 0.2 });

    // },)

    if (loading) {
        return (
            <>
                Loading...
            </>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <>
            <section className='bg-brown-900'>
                <div className='max-width mx-auto pb-20 px-4'>
                    <h1 className='pt-12 md:pt-32 mb-8 font-bold text-2xl md:text-3xl'>Projects</h1>
                    {data && data.projects && data.projects.length > 0 && (
                        <ul className='project-list md:flex md:flex-wrap gap-x-52 md:justify-between mx-auto md:w-[1100px]' ref={projectListRef}>
                            {data.projects.map((project) => (
                                <li key={project.id} id={project.id} className="mt-6 md:mt-8 py-6">
                                    <ProjectCard
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
            </section>
        </>
    );
};