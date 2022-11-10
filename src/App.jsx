import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import ForgetUsernamePage from './pages/ForgetUsernamePage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

// import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Messages from './pages/Messages';
import Moderation from './pages/Moderation';
import Profile from './pages/Profile';
import Search from './pages/Search';
import theme from './styles/theme';
import CreatePost from './pages/CreatePost';
import PostTypeContextProvider from './contexts/PostTypeContext';
import Notifications from './pages/Notifications';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PostTypeContextProvider>
        <Router className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage data-testid="home page" />
          }
            />
            <Route
              path="/:postClass"
              element={
                <HomePage />
          }
            />
            <Route
              path="/user"
              element={
                <Profile />
              }
            />
            <Route
              path="/register"
              element={
                <SignUpPage />
          }
            />
            <Route
              path="/login"
              element={
                <LogInPage />
          }
            />
            <Route
              path="/password"
              element={
                <ForgetPasswordPage />
          }
            />
            <Route
              path="/resetpassword"
              element={
                <ResetPasswordPage />
          }
            />
            <Route
              path="/username"
              element={
                <ForgetUsernamePage />
          }
            />
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
            <Route
              path="/submit"
              element={
                <CreatePost />
            }
            />
            <Route
              path="/notifications"
              element={
                <Notifications />
          }
            />
          </Routes>
        </Router>
      </PostTypeContextProvider>
    </ThemeProvider>
  );
}

export default App;
