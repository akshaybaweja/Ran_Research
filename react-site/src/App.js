import './components/App.css';
import TopNav from './components/nav-top';
import LeftNav from './components/nav-left';
import HomepageImage from './components/homepageimage';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <TopNav/>
        <LeftNav/>
      </body>
    </div>
  );
}

export default App;
