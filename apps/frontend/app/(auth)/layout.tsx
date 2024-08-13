'use client';
import { Box, Flex, Text } from '@radix-ui/themes';
import Lottie from 'lottie-react';
import EasyAnimation from '../../public/assets/choices.json';
import BackgroundImage from '../../public/assets/background-2.jpg';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex 
      justify={'center'} 
      align={'center'} 
      className="h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: 'cover', // Ensures the image covers the entire area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
    >
      <Flex
        className="w-fit p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Semi-transparent background
      >
        <Box p={'2rem'}>
          
          <Lottie className='m-auto w-52 h-52' animationData={EasyAnimation} />
        </Box>
        <Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}