'use client';
import * as Select from '@radix-ui/react-select';
import { Box, Button, Card, Flex, Section, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(quantity + value);
  };

  return (
    <Card>
      <Flex justify={'between'} align={'center'}>
        <Text>Product Name</Text>
        <Box className="flex items-center">
          <Button
            className="w-6 h-6 text-lg font-bold text-gray-600"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </Button>
          <span className="mx-2">{quantity}</span>
          <Button
            className="w-6 h-6 text-lg font-bold text-gray-600"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </Button>
        </Box>
        <Card>$19.99</Card>
      </Flex>
    </Card>
  );
};

const ProductList = () => {
  return (
    <div className="w-2/3">
      <h2 className="text-lg font-bold mb-4">Products</h2>
      <ul>
        {[1, 2, 3].map((product) => (
          <li key={product} className="mb-4">
            <Product />
          </li>
        ))}
      </ul>
    </div>
  );
};

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-1/3">
      <h2 className="text-lg font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <Box>
          <Text>Name: </Text>
          <Flex pl={'3em'}>{faker.person.fullName()}</Flex>
        </Box>
        <Box>
          <Text>Phone:</Text>
          <Flex pl={'3em'}> {faker.phone.number()}</Flex>
        </Box>
        <Box>
          <Text>Address: </Text>
          <Flex pl={'3em'}> {faker.location.streetAddress()}</Flex>
        </Box>
        <Box>
          <Text>Total:</Text>
          <Flex pl={'3em'}> ${faker.r}</Flex>
        </Box>
        <Flex justify={'end'}>
          <Button type="submit" size={'3'} className="self-end">
            Checkout
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default function Page() {
  return (
    <Section p={'6rem'}>
      <Flex gap={'6'}>
        <ProductList />
        <CheckoutForm />
      </Flex>
    </Section>
  );
}
