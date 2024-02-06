import React, { useRef, useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import ErrorMsg from '../../errorMessage/ErrorMessage';
import SuccessMsg from '../../successMessage/successMessage';

function Contact() {
  const serviceKey = process.env.REACT_APP_SERVICE;
  const templateKey = process.env.REACT_APP_TEMPLATE;
  const emailPublicKey = process.env.REACT_APP_PUBLIC_KEY;
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey: emailPublicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
         
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
         
          
        },
      );
      e.target.reset();
  };

  return (
   <body className='bg-[#121212]'>
    <section className='py-1'>
        <div className='max-w-6xl mx-auto p-4 md:p-16 xl:p-20'>
          <div className='lg:w-2/3 space-y-5 text-center mx-auto'>
            <h1 className='text-white font-medium text-4xl uppercase tracking-widest'>
            Get in touch
            </h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
            <p className='text-gray-300 text-base leading-6'>
              If you want to learn more or collaborate with our team, please fill this form to contact us
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16'>
            <div>
              <address>
                <div className='mb-6'>
                  <h2 className='text-base font-medium mb-2 text-white'>
                  <FontAwesomeIcon icon={faMapPin}/><span className='ml-3'>Office Address</span>:
                  </h2>
                  <p className='text-gray-300 text-sm font-medium leading-5'>
                  Griggs Farm House, Ditchling Road, Haywards Heath, RH16 4QU
                  </p>
                </div>
                <div className='mb-6'>
                  <h2 className='text-base font-medium mb-2 text-white'>
                  <FontAwesomeIcon icon={faEnvelope}/><span className='ml-3'>Email</span>:
                  </h2>
                  <p className='text-gray-300 text-sm font-medium leading-5'>
                  Messi27@gmail.com
                  </p>
                </div>
                <div className='mb-6'>
                  <h2 className='text-base font-medium mb-2 text-white'>
                  <FontAwesomeIcon icon={faPhone}/><span className='ml-3'>Phone number</span>:
                  </h2>
                  <p className='text-gray-300 text-sm font-medium leading-5'>
                  +60 2143 2325
                  </p>
                </div>
              </address>

            </div>
            <div className='lg:col-span-2'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <label for='name' className='sr-only'>Name</label>
                    <input required type='text' name='name' id='name' className='placeholder:text-gray-300/50 text-white text-sm rounded
                    focus:ring-0 focus:border-gray-400 block w-full p-3 bg-zinc-700/20 border-zinc-700/50' placeholder='enter your name'/>
                  
                    <label for='name' className='sr-only'>Email</label>
                    <input required type='email' name='email' id='email' className='placeholder:text-gray-300/50 text-white text-sm rounded
                    focus:ring-0 focus:border-gray-400 block w-full p-3 bg-zinc-700/20 border-zinc-700/50' placeholder='enter your email'/>
                  
                  
                  </div>

                  <label for='name' className='sr-only'>Subject</label>
                  <input required type='text' name='subject' id='subject' className='placeholder:text-gray-300/50 text-white text-sm rounded
                  focus:ring-0 focus:border-gray-400 block w-full p-3 bg-zinc-700/20 border-zinc-700/50' placeholder='enter your subject'/>
                
                  <label for='message' className='sr-only'>Message</label>
                  <textarea required type='text' name='message' id='message' className='placeholder:text-gray-300/50 text-white text-sm rounded
                  focus:ring-0 focus:border-gray-400 block w-full p-3 bg-zinc-700/20 border-zinc-700/50' placeholder='enter your message' 
                    rows="3"
                  />

                  <div className='text-right'>
                    <input type='submit' id='submit' name='send' className='inline-block px-5 py-2.5 rounded text-sm cursor-pointer
                    select-none outline-none transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-offset-0 
                    hover:-translate-y-1.5 bg-red-500 text-white' value='send message'/>
                  </div>
                  
                </div>
              </form>
              {success && <SuccessMsg message={'The email has been sent, we will get to you shortly'} />}
              {error && <ErrorMsg message={'There was an error, please try again or contact the phone number/email given'} />}
            </div>


          </div>
        </div>
    </section>
    </body> 
  )
}

export default Contact
