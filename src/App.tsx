import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './app/pages/Home';
import Rootlayout from './app/layout/Rootlayout';
import TrainList from './app/components/TrainList/TrainList';
import PassengerFormFilling from './app/pages/PassengerFormFilling';
import Sucess from './app/components/PAYMENT/Sucess';
import Cancell from './app/components/PAYMENT/Cancell';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/train-list' element={<TrainList />}></Route>
      <Route path='/psgninput' element={<PassengerFormFilling />}></Route>
      <Route path='/bookinginfo' element={<Sucess/>}></Route>
      <Route path='/paymentCancell' element={<Cancell />}></Route>
    </Route>
  ))


  return (
    <RouterProvider router={router} />
  );
}

export default App;
