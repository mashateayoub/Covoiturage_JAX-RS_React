import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Ride from './pages/Ride';
import Drive from './pages/Drive';
import Reservation from './pages/Reservations';
import Login from './pages/Login';
import Signup from './pages/Driver/Signup';
import Annonces from './pages/Driver/Annonces';
import Dashboard from './pages/Driver/Dashboard';
import Profile from './pages/Driver/Profile';
import Requests from './pages/Driver/Requests';
import Reservations from './pages/Driver/Reservations';
import AccountDriverPage from './pages/Driver/AccountDriverPage';
import CheckLogin from './pages/Driver/CheckLogin';
import AccountPage from './pages/AccountPage';
import UpdateOffer from './pages/Driver/UpdateOffer';
import OfferPage from './pages/OfferPage';
import AddOffer from './pages/Driver/AddOffer';
import Terms from './pages/Terms';
import BookedVer from './pages/BookedVer';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/driver" element={<Dashboard />} />
        <Route path="/driver/signup" element={<Signup />} />
        <Route path="/driver/offers" element={<Annonces />} />
        <Route path="/driver/profile" element={<Profile />} />
        <Route path="/driver/requests" element={<Requests />} />
        <Route path="/driver/Reservations" element={<Reservations />} />
        <Route path="/driver/accdriver" element={<AccountDriverPage />} />
        <Route path="/driver/checklogin" element={<CheckLogin />} />
        <Route path="/driver/UpdateOffer" element={<UpdateOffer />} />
        <Route path="/driver/AddOffer" element={<AddOffer />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/admin/login" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createacc" element={<AccountPage />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/ride/offer" element={<OfferPage />} />
        <Route path='/ride/bookedOffer' element={<BookedVer />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Terms" element={<Terms />} />

      </Routes>
    </>
  );
}

export default App;
