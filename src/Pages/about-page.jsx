
export default function AboutPage () {
    return (
      <>
        <section className="bg-background">
          <div className='max-width mx-auto py-32 flex justify-between'>
            <div className='w-2/5 text-brown-200 about-text'>
              <h2 className='text-brown-200 mb-8'>About me</h2>
              <p>
                Hello, I'm Anna-Yodit Olsen, a recently graduated front-end developer. My expertise includes HTML, CSS, and JavaScript.
              </p>
              <p>
                I have a passion for UX design and am currently seeking an internship position to further develop my skills in this area.              </p>
              <p>
                Explore my portfolio and check out some of my recent projects.
              </p>
            </div>
            <div className="about-image w-[30rem]">
              <img src={process.env.PUBLIC_URL + '/images/about-me.png'} alt="Cartoon of myself" />
            </div>
          </div>
        </section>
      </>
    );
  };