import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Landing from './pages/Landing/Landing.jsx';
import Quote from './pages/Quote/Quote.jsx';
import WrapUp from './pages/WrapUp/WrapUp.jsx';
import Error from './pages/Error/Error.jsx';
import './App.css';

// import "@fontsource/poppins";

function App() {
  const [quoteData, setQuoteData] = useState([]);
  console.log(quoteData)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/quote" element={<Quote setQuoteData={setQuoteData} />} />
          <Route path="/purchase" element={<WrapUp quoteData={quoteData} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
