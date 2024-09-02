import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './shared-compo/Footer'
import NavBar from './shared-compo/NavBar'

function App() {

    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default App
