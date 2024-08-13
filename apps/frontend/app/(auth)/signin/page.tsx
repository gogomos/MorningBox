import React from 'react';
import * as Form from '@radix-ui/react-form';
import { Button } from '@radix-ui/themes';

export default function Page() {
 

  return (
    <Form.Root className="w-[260px] m-auto" >
      
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">Email</Form.Label>
          <Form.Message className="text-[13px] opacity-[0.8]" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="text-[13px] opacity-[0.8]" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="email"
            name="email"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="grid mb-[10px]" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">Password</Form.Label>
          <Form.Message className="text-[13px] opacity-[0.8]" match="valueMissing">
            Please enter your password
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="password"
            name="password"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <Button size={'3'} color='teal'>
          Log In
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}