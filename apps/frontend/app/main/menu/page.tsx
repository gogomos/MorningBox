import { Flex, Grid, Section, TextField } from '@radix-ui/themes';
import Product from '../../../components/product/Product';
import * as Slider from '@radix-ui/react-slider';
import { CheckIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import * as Select from '@radix-ui/react-select';

export default function Page() {
  return (
    <Section px={'6rem'}>
      <Section>

      <form className="flex gap-6 w-full justify-start h-fit items-center">
      <TextField.Root
              style={{ width: '300px'}}
              placeholder="Search the docs…"
              variant='soft'
              
            >
        <TextField.Slot side="right">
                <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
   
    <Select.Root>
    <Select.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
      aria-label="Category"
    >
      <Select.Value placeholder="Select a category…" />
      <Select.Icon className="text-violet11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content
        className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
      >
        <Select.Viewport className="p-[5px]">
          <Select.Group>
            <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
              Categories
            </Select.Label>
            <Select.Item value="breakfast">
              <Select.ItemText>Breakfast</Select.ItemText>
           
            </Select.Item>
            <Select.Item value="lunch">
              <Select.ItemText>Lunch</Select.ItemText>
           
            </Select.Item>
            <Select.Item value="dinner">
              <Select.ItemText>Dinner</Select.ItemText>
          
            </Select.Item>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
  <Slider.Root
      className="relative flex items-center select-none touch-none w-[200px] h-5"
      defaultValue={[50]}
      max={100}
      step={1}
    >
      <Slider.Track className="bg-blackA7 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-teal-700 rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
        aria-label="Volume"
        >
        <br />
        17
      </Slider.Thumb>
    </Slider.Root>
  </form>
        </Section>
      <Grid columns={'3'} gap={'3'}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Grid>
    </Section>
  );
}

