import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Landing from './pages/Landing/Landing.jsx';
import Quote from './pages/Quote/Quote.jsx';
import Summary from './pages/Summary/Summary.jsx';
import Success from './pages/Success/Success.jsx';
import Error from './pages/Error/Error.jsx'
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
          <Route path="/success" element={<Success />} />
          <Route path="/summary" element={<Summary quoteData={quoteData} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
