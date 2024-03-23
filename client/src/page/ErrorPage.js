import React from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Make sure you have react-router-dom installed for navigation

const ErrorPage = ({ errorMessage = 'Page Not Found', errorCode = '404' }) => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  // Function to navigate back
  const goBack = () => navigate('/'); // -1 takes you one step back in history

  return (
    <Center h="100vh" w="100vw" bg={bgColor}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4} color={textColor}>
          {errorCode}
        </Heading>
        <Text fontSize="xl" mb={8} color={textColor}>
          {errorMessage}
        </Text>
        <Button colorScheme="blue" onClick={goBack}>
          Go Back
        </Button>
      </Box>
    </Center>
  );
};

export default ErrorPage;
