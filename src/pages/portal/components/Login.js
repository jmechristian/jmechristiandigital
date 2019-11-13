import React from 'react';
import Navbar from '../../projects/components/NavBar';
import Footer from '../../projects/components/Footer';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col lg:flex-row container lg:items-center lg:justify-between p-8 lg:px-0'>
        <div className='flex flex-col mb-12 lg:w-5/12'>
          <div className='font-black text-5xl md:text-6xl text-primary leading-tight mb-6'>
            Welcome to your Client Portal
          </div>
          <div className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
            maximus eros, et euismod tortor.
          </div>
        </div>
        <div className='lg:w-6/12'>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
