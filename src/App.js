import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing.jsx';
import Quote from './pages/Quote/Quote.jsx';
import WrapUp from './pages/WrapUp/WrapUp.jsx';
import FindYourCar from './components/QuoteComponents/FindYourCar/FindYourCar.jsx'
import Driver from './components/QuoteComponents/Driver/Driver.jsx'
import ChoosePlan from './components/QuoteComponents/ChoosePlan/ChoosePlan.jsx'
import Error from './pages/Error/Error.jsx'
import './App.css';

import "@fontsource/poppins";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/quote" element={<Quote />}>
            <Route index element={<FindYourCar/>}/>
            <Route path="car" element={<FindYourCar />} />
            <Route path="driver" element={<Driver/>} />
            <Route path="plan" element={<ChoosePlan />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/purchase" element={<WrapUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
