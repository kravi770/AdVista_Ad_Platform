import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../../assets/home.jpg';
import home1 from '../../assets/Designer_Home.png';
import home2 from '../../assets/home2.jpg';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();
  const [signupuser, setSignupUser] = useState({});
  const [checkedValues, setCheckedValues] = useState([]);
  const [loginuser, setLoginUser] = useState({});
  const navigate = useNavigate();

  const handleSignupInputChange = (e) => {
    setSignupUser({ ...signupuser, [e.target.name]: e.target.value });
    console.log(signupuser);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleCancel = () => {};

  const handleLoginInputChange = (e) => {
    setLoginUser({ ...loginuser, [e.target.name]: e.target.value });
    console.log(loginuser);
  };
  useEffect(() => {
    setSignupUser((prevSignupUser) => ({
      ...prevSignupUser,
      targets: checkedValues,
    }));
  }, [checkedValues]);

  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    }
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" marginTop={3}>
        <Spacer></Spacer>
        <Spacer />
        <Box p="2">
          <Heading size="xl" fontFamily={'Kalam'}>
            Welcome to Terabh's Ad Platform!
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" marginRight={5}>
          <Button colorScheme="blue" onClick={onOpen}>
            Login
          </Button>
          <Button colorScheme="green" onClick={onSignupOpen}>
            Signup
          </Button>
        </ButtonGroup>
      </Flex>
      <Flex>
        <Image
          boxSize="45%"
          src={home}
          alt="Dan Abramov"
          style={{
            margin: 'auto',
            alignContent: 'center',
            alignItems: 'center',
          }}
        />
      </Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in to your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter your username"
                name="username"
                type="string"
                onChange={(e) => handleLoginInputChange(e)}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter your password"
                name="password"
                type="string"
                onChange={(e) => handleLoginInputChange(e)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              onClick={() => console.log(loginuser)}
            >
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isSignupOpen}
        onClose={onSignupClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired onSubmit={handleFormSubmit}>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Enter your username"
                type="string"
                name="username"
                onChange={(e) => handleSignupInputChange(e)}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter your password"
                type="string"
                name="password"
                onChange={(e) => handleSignupInputChange(e)}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Account Type</FormLabel>
              <Select
                name="type"
                placeholder="Select Account Type"
                onChange={(e) => handleSignupInputChange(e)}
              >
                <option value={'viewer'}>Viewer</option>
                <option value={'business'}>Business</option>
              </Select>
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Interests/Professions</FormLabel>
              <CheckboxGroup colorScheme="green">
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox value="Students" onChange={(e) => handleChange(e)}>
                    Students
                  </Checkbox>
                  <Checkbox value="Teachers" onChange={(e) => handleChange(e)}>
                    Teachers
                  </Checkbox>
                  <Checkbox
                    value="Technology"
                    onChange={(e) => handleChange(e)}
                  >
                    Technology
                  </Checkbox>
                  <Checkbox value="Designs" onChange={(e) => handleChange(e)}>
                    Designs
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              onClick={() => console.log(signupuser)}
            >
              Signup
            </Button>
            <Button onClick={onSignupClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Home;
