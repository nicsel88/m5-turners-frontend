import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing.jsx';
import Quote from './pages/Quote/Quote.jsx';
import WrapUp from './pages/WrapUp/WrapUp.jsx';
import Error from './pages/Error/Error.jsx'
import './App.css';

import "@fontsource/poppins";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/purchase" element={<WrapUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
