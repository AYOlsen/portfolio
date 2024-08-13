import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_PROJECTSBYSLUG } from '../Graphgl';

export default function ProjectDetailPage () {
    const { projectId } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECTSBYSLUG, {
        variables: { projectId }
    });

    if (loading) {
        return (
            <>
                Loading...
            </>
        );
    }

    if (error) {
        return <p>{error ? error.toString() : error.toString()}</p>;
    }

    return (
        <>
            <section className='bg-brown-900'>
                <div className='max-width mx-auto min-h-[90vh] pb-20 px-4'>
                    {data.project  && ( 
                        console.log('GitHub URL:', data.project.github),
                        <div key={data.project.id} id={data.slug} className="max-width mx-auto justify-between pt-10 md:pt-20">
                            <p className='text-base text-green-200'>{data.project.category}</p>
                            <h2 className='text-2xl mb-6 text-green-200 mb-7 font-bold'>{data.project.title}</h2>
                            <div className='md:flex md:justify-center'>
                                <img className="object-cover h-80 mb-12 mx-auto rounded-lg" src={data.project.image.url} alt={data.project.title} />
                                <div className='md:w-2/5'>
                                    <div className="project-detail h-3/4 whitespace-pre-line text-green-200 text-lg font-normal">
                                        {data.project.description}
                                    </div>
                                    <div className='mt-2'>
                                        <div>
                                            {data.project.skills && data.project.skills.length > 0 && (
                                                <>
                                                    <div className='bg-green-200 w-full h-[1px] mt-4'></div><div className='mt-4'>
                                                        <p className='text-green-200 text-base font-bold'>
                                                            {data.project.skills.join(', ')}
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        {data.project.github && (
                                            <div className='mt-4'>
                                                <a href={data.project.github} target="_blank" rel="noreferrer" className='text-green-200 underline'>
                                                    <img className='w-8' src="../images/github.png" alt="github icon" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};