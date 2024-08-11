import React from 'react';
import { Box, Button, Flex, Text } from '@radix-ui/themes';

export default function Nav() {
  return (
    <div style={{ position: 'relative'  }}> {/* Parent container */}
      <Flex
        align="center"
        justify="between"
        py="16px"
        px={'6rem'}
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo Section */}
        <Box>
          <Text size="7" weight="bold">
            Logo
          </Text>
        </Box>

        {/* Center Menu Section */}
        <Flex align="center" justify="center" style={{ flex: 1 }}>
          <Box mx="16px">
            <Text>Menu</Text>
          </Box>
          <Box mx="16px">
            <Text>About Us</Text>
          </Box>
          <Box mx="16px">
            <Text>Contact</Text>
          </Box>
        </Flex>

        {/* Login/Signup Section */}
        <Flex align="center">
          <Button style={{'color':'white'}} variant="ghost" mr="16px">
            Login
          </Button> 
          <Button style={{'color':'white'}} variant='ghost'>Sign Up</Button>
        </Flex>
      </Flex>
    </div>
  );
}
