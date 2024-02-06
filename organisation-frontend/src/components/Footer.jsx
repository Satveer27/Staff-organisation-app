import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
  <div className='bg-[black] items-center justify-center flex py-[70px]'>
    <div className='container  max-w-[1170px] '>
      <div className='flex flex-wrap'>
        <div className='w-1/4 px-[15px]'>
          <h4 className='tags text-lg text-white uppercase mb-[35px] font-medium relative'>Quick links</h4>
          <ul className='ul-tag'>
              <li><a href='/'>about us</a></li> 
              <li><a href='/project'>projects</a></li> 
          </ul>
        </div>
        <div className='w-1/4 px-[15px]'>
          <h4 className='tags text-lg text-white uppercase mb-[30px] font-medium relative'>Contact</h4>
          <ul className='ul-tag'>
              <li><a href='/contact'>phone number</a></li> 
              <li><a href='/contact'>Contact us</a></li> 
              <li><a href='/contact'>Company location</a></li> 
          </ul>
        </div>
        <div className='w-1/4 px-[15px]'>
          <h4 className='tags text-lg text-white uppercase mb-[30px] font-medium relative'>Staff link</h4>
          <ul className='ul-tag'>
              <li><a href='/admin/login'>staff login</a></li> 
          </ul>
        </div>
        <div className='w-1/4 px-[15px]'>
          <h4 className='tags text-lg text-white uppercase mb-[30px] font-medium relative'>Follow us</h4>
            <div className='social-links'>
              <a href='https://www.facebook.com/profile.php?id=100064855983611'><i><FontAwesomeIcon icon={faFacebook}/></i></a>
              <a href='https://twitter.com/tenaga_nasional?lang=en'><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              <a href='https://www.instagram.com/tenaga_nasional/?hl=en'><i><FontAwesomeIcon icon={faInstagram}/></i></a>
              <a href='https://www.linkedin.com/company/tenaga-nasional-berhad/'><i><FontAwesomeIcon icon={faLinkedin}/></i></a>
            </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Footer;
