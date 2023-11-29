import Listing from './components/Listing/Listing';

import './App.css';
import {dataJson} from './data/etsy'

function App() {
  return (
    <div className="App">
        <Listing items = {dataJson}/>
    </div>
  );
}

export default App;
