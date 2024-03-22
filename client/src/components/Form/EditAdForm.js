import React, { useEffect, useState } from 'react';
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
  ButtonGroup,
  useToast,
} from '@chakra-ui/react';
import { getAdById, submitAd, updateAd } from '../../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditAdForm = () => {
  const navigate = useNavigate();
  const id = useParams();
  const toast = useToast();
  const [formValues, setFormValues] = useState({
    title: '',
    imageURL: '',
    content: '',
    target1: '',
    target2: '',
    target3: '',
  });
  const fetchAd = async () => {
    // console.log(id.id);
    const response = await getAdById(id.id);
    setFormValues(response.ad);
    // console.log(response);
  };
  useEffect(() => {
    fetchAd();
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
  };
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };
  const handleFormSubmit = async (ad) => {
    const response = await updateAd(ad);
    if (response) navigate('/business/ads');
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
        <Spacer />
        <Box p="2">
          <Heading size="xl" fontFamily={'Prata'}>
            Edit Your Ad
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" marginRight={5}>
          <Button colorScheme="teal" onClick={() => navigate('/business/ads')}>
            My Ads
          </Button>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </ButtonGroup>
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
                placeholder="Enter Ad Title"
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
                placeholder="Enter Image URL"
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
                placeholder="Enter Ad Content"
              />
            </FormControl>

            {/* Target1 Selection */}
            <FormControl isRequired>
              <FormLabel>Target1</FormLabel>
              <Input
                placeholder="Enter target1"
                name="target1"
                type="string"
                value={formValues.target1}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Target2</FormLabel>
              <Input
                placeholder="Enter target2"
                name="target2"
                type="string"
                value={formValues.target2}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Target3</FormLabel>
              <Input
                placeholder="Enter target3"
                name="target3"
                type="string"
                value={formValues.target3}
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
                Save Changes
              </Button>
              <Spacer />
            </Flex>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default EditAdForm;
