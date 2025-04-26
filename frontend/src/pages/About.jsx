import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui eaque eum veniam ut molestias incidunt saepe quaerat omnis! Fugit, nesciunt. Consectetur voluptate odio tempora ducimus quisquam laboriosam possimus fuga?</p>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus tempora explicabo velit enim porro, quaerat iste amet consectetur excepturi, in voluptatem minus natus ratione dolor ut saepe quos ipsam omnis.</p>
   <b className='text-gray-800'>Our Mission</b>
   <p>Our mission at AMUH is to empower customers with choice, conveniece,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus consequatur odit tempore consectetur deleniti culpa tempora natus harum, corporis voluptates sunt esse animi pariatur quidem consequuntur perspiciatis fugiat molestias.</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance:</b>
      <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error harum consequuntur, dignissimos ad doloremque, modi nobis temporibus quam expedita voluptate deserunt quasi, dicta unde optio vel veniam et voluptatum numquam!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Convenience</b>
      <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error harum consequuntur, dignissimos ad doloremque, modi nobis temporibus quam expedita voluptate deserunt quasi, dicta unde optio vel veniam et voluptatum numquam!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Exceptional Customer Service:</b>
      <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error harum consequuntur, dignissimos ad doloremque, modi nobis temporibus quam expedita voluptate deserunt quasi, dicta unde optio vel veniam et voluptatum numquam!</p>
      </div>
    </div>
       <NewsletterBox/>
    </div>
  )
}

export default About