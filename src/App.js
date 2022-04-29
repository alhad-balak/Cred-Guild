import './App.css';
import Connect from './components/Connect/Connect';
import OtherBody from './components/MainBody/OtherBody';
import Friend from './components/MainBody/OurFriend/Friend';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <OtherBody />
      <Friend />
      <Connect />
    </>
  );
}

export default App;
