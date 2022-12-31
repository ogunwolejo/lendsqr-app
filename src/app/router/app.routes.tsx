import App from '../../App';
import {Route, Routes, BrowserRouter} from 'react-router-dom'

const AppRoute = () => {
    <BrowserRouter basename="">
        <Routes>
            <Route element={<App/>}/>
        </Routes>
    </BrowserRouter>    
}

export default AppRoute;