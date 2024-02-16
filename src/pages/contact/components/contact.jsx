import React from 'react';
import {
    Card,
    Input,
    
    Button,
    Typography,
  } from "@material-tailwind/react";

import './contact.scss'

export const Contact = () => {
    return (
        <>
         <div className='bgimg '>
           <p className='text-white flex justify-center items-center h-[100%] font-bold text-7xl'>contact</p>
            </div> 
           <div className='flex justify-center items-center container px-40 py-9 h-[100%] gap-4'>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.696480026646!2d-83.71132017558327!3d42.3063414384945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae3e5396e7cd%3A0x54d4a122d42d8dc6!2sGoogle%20Ann%20Arbor!5e0!3m2!1sar!2sma!4v1707916306968!5m2!1sar!2sma" width="600" height="550"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
            <div className='flex flex-col gap-2 container w-[100%] py-9  '>
            <h1 className='text-2xl'>Send us your message</h1>
            <form action="" className='flex flex-col  gap-4'>
                <input type="text" placeholder='Name'  className='w-[70%]'/>
                <input type="text" placeholder='Email' className='w-[70%]'/>
                <input type="number"  placeholder='Number'className='w-[70%]' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='w-[70%]'></textarea>
                <Button className="bg-black    rounded-full w-[15%] ">SEND</Button>

            </form>
            </div>
            </div>  
        </>
    );
};

