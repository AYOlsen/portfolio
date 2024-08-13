import React from 'react';
import gsap from 'gsap';
import { Banner } from '../Components/Banner';

export default function ContactPage () {

  return (
    <>
      <section className='bg-brown-900 min-h-[80vh]'>
        <div className='max-width mx-auto py-32 text-green-200'>
          <div className='flex flex-col items-center'>
            <Banner
              className="contact-banner text-center"
              titleClassName='text-3xl font-bold '
              title='Get in touch'
              text='If you have any questions, feel free to get in touch. I look forward to hearing from you.'
            />
            <div className='w-3/4 mt-4 border-t-2 border-green-200 flex justify-center'>
              <div className='w-2/5 mt-8 md:flex md:justify-between items-center'>
                <div className='flex flex-col items-center mb-4 md:mb-0'>
                  <img className='w-12' src="images/Email.svg" alt="mail icon" />
                  <a className='text-green-200' href='mailto:olsenannayodit06@gmail.com'>olsenannayodit06@gmail.com</a>
                </div>
                <div className='flex flex-col items-center'>
                  <img className='w-12' src="images/linkedin.svg" alt="icon linkedin" />
                  <a className='text-green-200' href='https://www.linkedin.com/in/anna-yodit-olsen-400b99250/' target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* <form ref={formRef} className='w-1/2 bg-brown-800 p-8 rounded-lg fade-out'>
            <div className='mb-4'>
              <label className='block mb-2 text-green-200' htmlFor='name'>Name</label>
              <input className='w-full p-2 border border-green-200 rounded-md' id='name' type='text' placeholder='Your name' />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 text-green-200' htmlFor='email'>Email</label>
              <input className='w-full p-2 border border-green-200 rounded-md' id='email' type='text' placeholder='Your email' />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 text-green-200' htmlFor='message'>Message</label>
              <textarea className='w-full p-2 border border-green-200 rounded-md' id='message' type='text' placeholder='Your message' rows="4" />
            </div>
            <div className='flex justify-end'>
              <button className='px-4 py-2 text-brown-900 bg-green-400 hover:bg-green-600 rounded-md' type='submit'>Send</button>
            </div>
          </form> */}

        </div>
      </section>
    </>
  );
};