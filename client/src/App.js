import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Form/Home';
import BusinessAdForm from './components/Form/AdSubmitForm';
import ViewerAds from './components/viewerAds';
import BusinessAds from './components/businessAds';
// import EditAdForm from './components/Form/EditAdForm';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/submit-ad" element={<BusinessAdForm />} />
          <Route path="/ads" element={<ViewerAds />} />
          <Route path="/business/ads" element={<BusinessAds />} />
          {/* <Route pathe="/edit/:id" element={<EditAdForm />} /> */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
