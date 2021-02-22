import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Trade from './components/trade';
import LinkedContainers from "./components/linkedContainers";
import Comments from "./components/comments";
import Collapsed from "./components/collapsed";
import Contacts from './components/contacts';
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Trade />
      <LinkedContainers />
      <Comments />
      <Collapsed />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
