import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Compo1 from '../components/Component1'
import Compo2 from '../components/Component2'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= '/' element = {<Compo1 />}/>
                <Route path = '/demo' element = {<Compo2 />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
