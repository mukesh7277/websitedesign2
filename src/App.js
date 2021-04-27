import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import ImageBody from './components/ImageBody';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Header/>
      <ImageBody/>
      <Social/>
      <Body/>
    </div>
  );
}

export default App;
