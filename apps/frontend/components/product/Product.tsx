import React from 'react'
import { Box, Button, Card, Inset, Text } from '@radix-ui/themes';

export default function Product() {
  return (
    <Box
   
  >
    <Card
      style={{
        backgroundPosition: 'center',
        height: '300px',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bold typography"
          style={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--gray-5)',
          }}
        />
      </Inset>

      <Box
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '1rem',
          textAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Text size={'6'} weight="bold">
          Heading
        </Text>
        <Text size={'1'}>
          Description goes here. Provide some details about the content.
        </Text>
        <Button
          variant="classic"
          style={{ width: '100px', alignSelf: 'flex-end' }}
        >
          Go To
        </Button>
      </Box>
    </Card>
  </Box>
  )
}
