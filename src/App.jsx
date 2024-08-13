import './App.css'
import Header from './Componets/Header'
import ProductionHouse from './Componets/ProductionHouse'
import GenreMovieList from './Componets/GenreMovieList'
import Hero from './Componets/Hero'



function App() {

  return (
    <div className="">
      <div className='herobg'>
        <Header />
        <Hero />
      </div>

      <ProductionHouse />

      {/* <Slider/> */}

      <GenreMovieList />
    </div>
  )
}

export default App
