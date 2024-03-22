import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Form/Home';
import BusinessAdForm from './components/Form/AdSubmitForm';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/submit-ad" element={<BusinessAdForm />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
