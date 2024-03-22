import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Box,
  Center,
  Link,
  Flex,
  Spacer,
  Heading,
} from '@chakra-ui/react';
import { submitAd } from '../../service/api';

const BusinessAdForm = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    imageURL: '',
    content: '',
    target1: '',
    target2: '',
    target3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
  };

  const handleFormSubmit = async (ad) => {
    // const response =
    await submitAd(ad);
    // console.log(response);
  };
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
        rel="stylesheet"
      ></link>
      <Flex minWidth="max-content" alignItems="center" gap="2" marginTop={3}>
        <Spacer />
        <Box p="2">
          <Heading size="xl" fontFamily={'Prata'}>
            Create Your Ad
          </Heading>
        </Box>
        <Spacer />
      </Flex>
      <Center>
        <Box width="55%" marginTop="5">
          <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                value={formValues.title}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired display="flex" alignItems="center">
              <FormLabel flex="1">Image URL</FormLabel>
              <Input
                name="imageURL"
                value={formValues.imageURL}
                onChange={handleChange}
                flex="4"
                marginRight="2"
              />
              <Button
                as={Link}
                href="https://images.google.com"
                target="_blank"
                colorScheme="blue"
                size="sm"
                _hover={{ textDecoration: 'none' }}
              >
                Find Image
              </Button>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Content</FormLabel>
              <Input
                name="content"
                value={formValues.content}
                onChange={handleChange}
              />
            </FormControl>

            {/* Target1 Selection */}
            <FormControl isRequired>
              <FormLabel>Target1</FormLabel>
              <Input
                placeholder="Enter target1"
                name="target1"
                type="string"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Target2</FormLabel>
              <Input
                placeholder="Enter target2"
                name="target2"
                type="string"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Target3</FormLabel>
              <Input
                placeholder="Enter target3"
                name="target3"
                type="string"
                onChange={handleChange}
              />
            </FormControl>
            <Flex
              minWidth="max-content"
              alignItems="center"
              gap="2"
              marginTop={3}
            >
              <Spacer />
              <Button
                colorScheme="blue"
                type="submit"
                onClick={() => handleFormSubmit(formValues)}
              >
                Submit
              </Button>
              <Spacer />
            </Flex>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default BusinessAdForm;
