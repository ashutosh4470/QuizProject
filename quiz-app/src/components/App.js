import '../styles/App.css';

import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { Main } from './Main';
import { Quiz } from './Quiz';
import { Result } from './Result';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main />
  },
  {
    path:'/quiz',
    element:< Quiz/>
  },
  {
    path:'/result',
    element:<Result />
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
