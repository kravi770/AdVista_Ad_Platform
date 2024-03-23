import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Form/Home';
import BusinessAdForm from './components/Form/AdSubmitForm';
import ViewerAds from './components/viewerAds';
import BusinessAds from './components/businessAds';
import EditAdForm from './components/Form/EditAdForm';
import ErrorPage from './page/ErrorPage';

function App() {
  // const [user, setUser] = useState({});
  // const fetchUser = async () => {
  //   const response = await getUser();
  //   setUser(response.user);
  // };
  // useEffect(() => {
  //   fetchUser();
  // });
  // const ProtectedRoute = ({ children, user }) => {
  //   if (!user || user.type !== 'business') {
  //     return <ErrorPage errorMessage="Unauthorized" errorCode="401" />;
  //   }
  // };
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route
            path="/submit-ad"
            element={
              // <ProtectedRoute user={user}> //Not working //Need to use context API
              <BusinessAdForm />
              // </ProtectedRoute>
            }
          />
          <Route path="/viewer/ads" element={<ViewerAds />} />
          <Route
            path="/business/ads"
            element={
              // <ProtectedRoute user={user}>
              <BusinessAds />
              // {/* </ProtectedRoute> */}
            }
          />
          <Route
            path="/edit/:id"
            element={
              // <ProtectedRoute user={user}>
              <EditAdForm />
              // </ProtectedRoute>
            }
          />
          {/* <Route path="/pagenotfound" element={<ErrorPage />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
