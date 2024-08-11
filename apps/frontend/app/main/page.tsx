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
import Image from 'next/image';
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
              as="h1"
              size="6xl"
              weight="bold"
              style={{ marginBottom: '1rem' }}
            >
              Try Our New Menu!
            </Text>
            <Text as="p" size="lg" style={{ marginBottom: '2rem' }}>
              Discover the delicious new dishes we have added to our menu.
              Satisfy your cravings and enjoy our latest culinary creations.
            </Text>
            <Button variant="classic" size="lg">
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
          <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
            <Box
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
              }}
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
                    Description goes here. Provide some details about the
                    content.
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
            <Flex
              align={'center'}
              justify={'center'}
              width={'400px'}
              height={'300px'}
            >
              <Button variant="classic">Browse More</Button>
            </Flex>
          </Grid>
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
            padding:'auto'
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
            <TextField.Root style={{width:'300px',margin:'auto'}} placeholder="Search the docs…">
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
    </main>
  );
}
