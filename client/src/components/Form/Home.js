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
  InputGroup,
  InputRightElement,
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
// import home1 from '../../assets/Designer_Home.png';
// import home2 from '../../assets/home2.jpg';
import { login, register } from '../../service/api';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();
  const [show, setShow] = useState(false);
  const [loginerror, setLoginError] = useState('');
  const [signuperror, setSignupError] = useState('');
  const [signupuser, setSignupUser] = useState({});
  const [checkedValues, setCheckedValues] = useState([]);
  const [loginuser, setLoginUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    setSignupUser((prevSignupUser) => ({
      ...prevSignupUser,
      targets: checkedValues,
    }));
  }, [checkedValues]);
  const isSignupFormValid =
    signupuser.username && signupuser.password && signupuser.type;
  const isLoginFormValid = loginuser.username && loginuser.password;
  const handleClick = () => setShow(!show);
  const handleSignupInputChange = (e) => {
    setSignupUser({ ...signupuser, [e.target.name]: e.target.value });
    // console.log(signupuser);
  };
  const handleLoginInputChange = (e) => {
    setLoginUser({ ...loginuser, [e.target.name]: e.target.value });
    // console.log(loginuser);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const resetSignupForm = () => {
    setSignupUser({});
    setCheckedValues([]);
    setSignupError('');
  };

  const resetLoginForm = () => {
    setLoginUser({});
    setLoginError('');
  };

  const handleLogin = async (loginuser) => {
    const response = await login(loginuser);
    if (response.user) {
      if (response.user.type === 'viewer') {
        navigate('/viewer/ads');
      } else {
        navigate('/business/ads');
      }
    } else if (response.message) {
      setLoginError(response.message);
    }
    // console.log(response);
  };

  const handleSignup = async (signupuser) => {
    const response = await register(signupuser);
    if (response.user) {
      onSignupClose();
      onOpen();
    } else {
      setSignupError(response.message);
    }
    // console.log(response);
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
            Welcome to AdVista !
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
          <ModalCloseButton onClick={resetLoginForm} />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter your username"
                name="username"
                type="string"
                value={loginuser.username}
                onChange={(e) => handleLoginInputChange(e)}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter your password"
                  name="password"
                  value={loginuser.password}
                  onChange={(e) => handleLoginInputChange(e)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {loginerror !== '' && (
                <div style={{ color: 'red', marginTop: '2px' }}>
                  {loginerror}
                </div>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              onClick={() => handleLogin(loginuser)}
              isDisabled={!isLoginFormValid}
            >
              Login
            </Button>
            <Button
              onClick={() => {
                onClose();
                resetLoginForm();
              }}
            >
              Cancel
            </Button>
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
          <ModalCloseButton onClick={resetSignupForm} />
          <ModalBody pb={6}>
            <FormControl isRequired onSubmit={handleFormSubmit}>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Enter your username"
                type="string"
                name="username"
                value={signupuser.username}
                onChange={(e) => handleSignupInputChange(e)}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter your password"
                  name="password"
                  value={signupuser.password}
                  onChange={(e) => handleSignupInputChange(e)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
            <FormControl mt={4}>
              <FormLabel>Interests/Professions (for viewers only)</FormLabel>
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
              {signuperror !== '' && (
                <div style={{ color: 'red', marginTop: '2px' }}>
                  {signuperror}
                </div>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              onClick={() => handleSignup(signupuser)}
              isDisabled={!isSignupFormValid}
            >
              Signup
            </Button>
            <Button
              onClick={() => {
                onSignupClose();
                resetSignupForm();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Home;
