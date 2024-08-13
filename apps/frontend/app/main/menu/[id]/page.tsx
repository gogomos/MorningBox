import Product from '@/components/product/Product';
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Inset,
  Section,
  Text,
} from '@radix-ui/themes';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export default function () {
  return (
    <Section px={'6em'}>
      <Grid columns={'2'} gap={'3'} height={'32em'}>
        <Inset clip="padding-box" side="top" className="object-cover">
          <img
            src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bold typography"
          />
        </Inset>{' '}
        <Card>
          <Flex direction={'column'} p={'1em'}>
            <Text>Title</Text>
            <Box
              my={'1em'}
              width="74px"
              height="3px"
              style={{
                backgroundColor: '#34cc8c',
              }}
            />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, adipisci nulla! Veritatis facilis nulla laboriosam
              soluta voluptas, minima inventore veniam repellat. Facere nam sed
              delectus soluta doloremque, sit neque! Deleniti.
            </Text>
            <Button my={'3em'} variant="classic">
              Add To Cart
            </Button>
          </Flex>
        </Card>
      </Grid>

      <Flex gap={'0'} pl={'2em'} pt={'2em'}>
        <Box
          width="14px"
          mr={'0.5em'}
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
          Similar Items
        </Text>
      </Flex>
        <ScrollArea.Root className="w-full rounded overflow-hidden bg-white">
          <ScrollArea.Viewport className="w-full h-full rounded">
            <Flex my={'1em'} gap={'6'}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </Flex>
          </ScrollArea.Viewport>

          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-blackA5" />
        </ScrollArea.Root>
    </Section>
  );
}
