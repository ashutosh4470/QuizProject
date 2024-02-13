import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from './Main';
import { Quiz } from './Quiz';
import { Result } from './Result';
import { CheckUserExist } from '../helper/helper';
import {Register} from './Register';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
   {
    path: '/register',
    element: <Register />
  }, 
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/quiz',
    element: <CheckUserExist> < Quiz /> </CheckUserExist>
  },
  {
    path: '/result',
    element: <CheckUserExist> <Result /> </CheckUserExist>
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
