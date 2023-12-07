import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements ,RouterProvider} from 'react-router-dom'
import Home from './app/pages/Home';
import Rootlayout from './app/layout/Rootlayout';
import TrainList from './app/components/TrainList/TrainList';
import PassengerFormFilling from './app/pages/PassengerFormFilling';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/train-list' element={<TrainList/>}></Route>
      <Route path='/psgninput' element={<PassengerFormFilling/>}></Route>
    </Route>
  ))


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
