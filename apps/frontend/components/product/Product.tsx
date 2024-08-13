import React from 'react';
import { Box, Button, Card, Flex, Inset, Text } from '@radix-ui/themes';

export default function Product() {
  return (
      <Card
      className="relative w-72 h-72"
   
      >

        <Inset clip="padding-box" side="top" 
        className='object-cover'
        >
          <img
            src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bold typography"
          />
        </Inset>

        <Flex
        direction="column"
        className="absolute bottom-0 left-0 right-0 p-4 bg-emerald-700 bg-opacity-30"
        >
          <Text size={'6'} weight="bold" color='gold'>
            Heading
          </Text>
          <Text size={'1'} color='gold'>
            Description goes here. Provide some details about the content.
          </Text>
          <Button variant="classic">Go To</Button>
        </Flex>
      </Card>
  );
}
