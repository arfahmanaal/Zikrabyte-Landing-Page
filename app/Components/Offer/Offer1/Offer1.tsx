'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './Offer1.css'


export const Offer1 = () => {

  useEffect(() => {
    AOS.init({

    });
    AOS.refresh();
    
  }, []);

  
  return (
    <div className='offer1_section p-10'  
         data-aos="fade-up"
         data-aos-duration="500"
         data-aos-easing="ease-in-out"
         data-aos-offset="200"
         >
        <div className="offer1_text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="850"
              data-aos-delay="500"

              // data-aos-anchor-placement="r"

              
              >
            <h2 className='text-4xl font-semibold'>What We Offer</h2>
            <p className='w-1/2 text-xl mt-5' >
            We are a based web design team. Combining high-end design with strategic
            SEO to elevate brands and increase website traffic. We&apos;ll use the same methods
            that helped you find our site, to bring people to yours.
            </p>
        </div>
        <div className="offer1_img_cnt mt-10"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="600"
              data-aos-delay="200"
              // data-aos-anchor-placement="top-center"
        >
            <img src="assets\img\offer1.png" alt="" />
        </div>
    </div>
  )
}
