
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles.scss';
import { Context } from './context-API/ContextProvider';

const App = () => {
  const { currUser } = useContext(Context);
  // console.log(`currUser:`, currUser)

  const ProtectedPage = ({ children }) => {
    if (!currUser) return <Navigate to='/login' />;
    return children;
  }

  return (
      <div className='App'>
      <Router>
        <Routes path='/'>
          <Route index element={
            <ProtectedPage>
              {!currUser ? <CircularProgress /> : <Home />}
            </ProtectedPage>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </Router>

      </div>
  );
}

export default App;