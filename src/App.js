import './App.css';
import Connect from './components/Connect/Connect';
import Friend from './components/MainBody/OurFriend/Friend';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Friend />
      <Connect />
    </>
  );
}

export default App;
