import React from 'react';
import pfp1 from '../images/about-us-image1.png';
import '../pages/pagesCss/EmployeeCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faIdCardClip } from '@fortawesome/free-solid-svg-icons'

function EmployeeCard(user) {
    console.log(user?.user?.username
        )
  return (
    <div className='pb-20 xl:pb-1' >
      <div className='card'>
            <div className='imgBx'>
                <img src={user?.user?.profileImage}/>
            </div>
            <div className='content'>
                <div className='details'>
                    <h2>{user?.user?.username}<br/><span>Senior UI/UX designer</span></h2>
                    
                    <div className='description'>
                        <h3>{user?.user?.description}</h3>
                    </div>
                    <div className='data'>
                        <h3>
                        <FontAwesomeIcon icon={faIdCardClip}/>
                        <div className="verticleLine"></div> 
                        <div className="additionalData">Your additional data</div>
                        </h3>
                        
                        <h3><FontAwesomeIcon icon={faPhone}/><div className="verticleLine"></div> 
                        <div className="additionalData">Your additional data</div></h3>
                        <h3><FontAwesomeIcon icon={faEnvelope}/><div className="verticleLine"></div> 
                        <div className="additionalData">Your additional data</div></h3>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default EmployeeCard;
