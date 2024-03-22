import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  WrapItem,
  Wrap,
  Center,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/react';
import { getAds, getUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const ViewerAds = ({ viewerTargets }) => {
  const [ads, setAds] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const fetchUser = async () => {
    const response = await getUser();
    setUser(response.user);
  };
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  const fetchAds = async () => {
    const response = await getAds();
    // console.log(response);
    setAds(response.ads);
  };
  useEffect(() => {
    fetchUser();
    fetchAds();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Prata&display=swap"
        rel="stylesheet"
      ></link>
      <Flex minWidth="max-content" alignItems="center" gap="2" marginTop={3}>
        <Spacer />
        <Box p="2">
          <Heading size="xl" fontFamily={'Kalam'} color={'teal'}>
            Recommended for You - {user.username}
          </Heading>
        </Box>
        <Spacer />
        <Button marginRight={5} colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
      {ads.length === 0 && <h2>No Ads available for you</h2>}
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px,1fr))"
      >
        {ads.map((ad) => (
          <Card maxW="sm" variant={'elevated'}>
            <CardBody>
              <Image src={ad.imageURL} alt={ad.title} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{ad.title}</Heading>
                <Text>{ad.content}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ViewerAds;
