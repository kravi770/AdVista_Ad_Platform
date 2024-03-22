import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  useToast,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  SimpleGrid,
  Spacer,
  Center,
  ButtonGroup,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { getAdsByBusinessId } from '../service/api';

const BusinessAds = () => {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const fetchAds = async () => {
      const response = await getAdsByBusinessId();
      if (response.ads) {
        setAds(response.ads);
      }
    };
    fetchAds();
  }, [toast]);
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };
  const handleAddAd = () => {
    navigate('/submit-ad');
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    // <Flex wrap="wrap" direction="row" justify="center" gap={6}>
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
            My Ads
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" marginRight={5}>
          <Button colorScheme="teal" onClick={handleAddAd}>
            Create Ad
          </Button>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </ButtonGroup>
      </Flex>
      <SimpleGrid columns={1} spacingY="5px">
        {ads.map((ad) => (
          // <Spacer/>
          <Center>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
              width={'70%'}
              height={'95%'}
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '150px' }}
                src={ad.imageURL}
                alt={ad.title}
              />
              <Stack>
                <CardBody>
                  <Heading size="md">{ad.title}</Heading>
                  <Text py="2">{ad.content}</Text>
                </CardBody>
              </Stack>
              <Flex marginTop={'auto'} marginBottom={'auto'}>
                <Spacer />
                <CardFooter>
                  <IconButton
                    aria-label="Edit ad"
                    icon={<EditIcon />}
                    size="sm"
                    colorScheme="teal"
                    onClick={() => handleEdit(ad._id)}
                  />
                </CardFooter>
              </Flex>
            </Card>
          </Center>
        ))}
        {/* // </Flex> */}
      </SimpleGrid>
    </>
  );
};

export default BusinessAds;
