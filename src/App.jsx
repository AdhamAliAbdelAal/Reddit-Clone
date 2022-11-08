import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Messages from './pages/Messages';
import Moderation from './pages/Moderation';
import Profile from './pages/Profile';
import Search from './pages/Search';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
          }
          />
          <Route
            path="/user/:username/"
            element={
              <Profile />
          }
          >
            <Route
              path=":subTitle"
              element={
                <Profile />
          }
            >
              <Route
                path=":sort"
                element={
                  <Profile />
          }
              />

            </Route>
          </Route>
          <Route
            path="/login"
            element={
              <Login />
          }
          />
          <Route
            path="/search"
            element={
              <Search />
          }
          />
          <Route
            path="/messages"
            element={
              <Messages />
          }
          />
          <Route
            path="/moderation"
            element={
              <Moderation />
          }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
