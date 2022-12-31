import {Router} from "./app/router/app.routes";
import {useSelector} from 'react-redux';
import {Navigate} from "react-router-dom"

import {PrivateRoutes} from './app/router/private.routes';


const App = () => {
  return (
     <Router/>
  );
};

export default App;


