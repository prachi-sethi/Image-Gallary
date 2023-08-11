import Pokedex from './components/Pokedex/Pokedex'
import CustomeRoutes from './routes/CustomeRoutes'
import { Link } from 'react-router-dom'
import './App.css'

function App() {


  return (
<div className='outer-pokedex'>
<h1 id='pokedex-heading'><Link to='/'>Pokedex</Link> </h1> 
 <CustomeRoutes></CustomeRoutes>
   </div>
   
  )
}

export default App
