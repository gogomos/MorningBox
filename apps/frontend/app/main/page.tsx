'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Inset,
  Section,
  Text,
  TextField,
} from '@radix-ui/themes';
import Lottie from 'lottie-react';
import Image from 'next/image';
import CookingAnimation from '../../public/assets/cooking.json';
import HangoutAnimation from '../../public/assets/hangout.json';
import DeliveryAnimation from '../../public/assets/delivery.json';
import Link from 'next/link';
import Product from '../../components/product/Product';
//landing

export default function Page() {
  return (
    <main>
      <section id="hero">
        <Flex
          align="center"
          justify="between"
          style={{
            height: '100vh',
            padding: '6rem',
            background: 'linear-gradient(to left, #34cc8c 20%, #FFFFFF 20%)', // Gradient background
          }}
        >
          {/* Left Side: Text and Button */}
          <Box style={{ maxWidth: '50%' }}>
            <Text
              
              size="6"
              weight='bold'
              style={{ marginBottom: '1rem' }}
            >
              Try Our New Menu!
            </Text>
            <Text as="p" size="6" style={{ marginBottom: '2rem' }}>
              Discover the delicious new dishes we have added to our menu.
              Satisfy your cravings and enjoy our latest culinary creations.
            </Text>
            <Button variant="classic" size="2">
              Go
            </Button>
          </Box>

          {/* Right Side: Image */}
          <Box style={{ maxWidth: '50%' }}>
            <Image src={'/assets/hero.png'} alt="" width={400} height={400} />
          </Box>
        </Flex>
      </section>
      <Section id="explore" px={'6rem'}>
        <Section>
          <Flex gap={'0'}>
            <Box
              width="14px"
              style={{
                backgroundColor: '#34cc8c',
              }}
            />
            <Text
              size={'7'}
              wrap={'balance'}
              style={{
                width: '400px',
              }}
            >
              Some top restaurant for dining in or Take away!
            </Text>
            <Text
              size={'1'}
              style={{
                width: '500px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
              donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
              metus id amet, nam hac magna accumsan. Nascetur ac tortor purus
              ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Est, adipiscing cursus auctor eget sed.
            </Text>
          </Flex>
        </Section>
        <Section>
          <Flex justify={'between'} align={'center'}>
            <Product />
            <Product />
            <Product />
              <Button variant="classic">Browse More</Button>
              
          </Flex>
        </Section>
      </Section>
      <Section
        id="search"
        style={{ position: 'relative', textAlign: 'center', height: '600px' }}
      >
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="/assets/background-1.jpg"
            alt="Bold typography"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '500px',
              position: 'absolute',
            }}
          />
        </Inset>
        <Box
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Ensures the Box takes full height of the Section
            padding: 'auto',
          }}
        >
          <Card
            style={{
              width: '100%',
              maxWidth: '600px', // Adjust based on your design
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <Box
              width="104px"
              height="14px"
              style={{
                backgroundColor: '#34cc8c',
                margin: '0 auto 1rem', // Center align and space out from the top content
              }}
            />
            <Text size="5" style={{ marginBottom: '1rem' }}>
              Search Menu
            </Text>
            <TextField.Root
              style={{ width: '300px', margin: 'auto' }}
              placeholder="Search the docs…"
            >
              <TextField.Slot side="right">
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
            <Box
              width="104px"
              height="14px"
              style={{
                backgroundColor: '#34cc8c',
                margin: '1rem auto 0', // Center align and space out from the bottom content
              }}
            />
          </Card>
        </Box>
      </Section>
      <Section id="explore" px={'6rem'}>
        <Section>
          <Flex gap={'0'}>
            <Box
              width="14px"
              style={{
                backgroundColor: '#34cc8c',
              }}
            />
            <Text
              size={'7'}
              wrap={'balance'}
              style={{
                width: '400px',
              }}
            >
              Some top restaurant for dining in or Take away!
            </Text>
            <Text
              size={'1'}
              style={{
                width: '500px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
              donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
              metus id amet, nam hac magna accumsan. Nascetur ac tortor purus
              ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Est, adipiscing cursus auctor eget sed.
            </Text>
          </Flex>
        </Section>
        <Section>
          <Grid columns={'2'} gap={'6'}>
            <Box>
              <Flex justify={'center'} align={'center'}>
                <Box>
                  <Lottie
                    animationData={CookingAnimation}
                    loop={true}
                    className="w-64 h-64"
                  />
                </Box>
                <Box>
                  <Text size={'6'}>
                    advanced table booking
                    <Box
                      as="span"
                      width="94px"
                      height="2px"
                      style={{
                        backgroundColor: '#34cc8c',
                      }}
                    />
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </Box>
              </Flex>
              <Flex justify={'center'} align={'center'}>
                <Box>
                  <Text size={'6'}>
                    advanced table booking
                    <Box
                      as="span"
                      width="94px"
                      height="2px"
                      style={{
                        backgroundColor: '#34cc8c',
                      }}
                    />
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </Box>
                <Box>
                  <Lottie
                    animationData={HangoutAnimation}
                    loop={true}
                    className="w-64 h-64"
                  />
                </Box>
              </Flex>
            </Box>
            <Box className="justify-center items-center text-center w-full h-fit">
              <Lottie
                animationData={DeliveryAnimation}
                loop={true}
                className="w-100 h-100"
              />
              <Text size={'6'}>advanced table booking</Text>
              <br />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Box
                as="span"
                width="24rem"
                height="2px"
                style={{
                  backgroundColor: '#34cc8c',
                  margin: '4px auto',
                }}
              />
            </Box>
          </Grid>
        </Section>
      </Section>
      <Section px={'6rem'}>
        <Flex justify="between" >
          <Product />
          <Product />
          <Product />
          <Product />


        </Flex>
      </Section>
     
    </main>
  );
}
