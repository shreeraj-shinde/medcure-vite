import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
const Dashboard = lazy(() => import('./Pages/Dashboard'))
const AboutMe = lazy(() => import("./Pages/AboutMe"))
function App() {

  



  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>

    <Routes>
      <Route path='/home' element = {<Dashboard/>}/>
      <Route path='/about_me' element = {<AboutMe/>}/>

      


    </Routes>

    </Suspense>
    </BrowserRouter>
      
       
    </>
  )
}

export default App
