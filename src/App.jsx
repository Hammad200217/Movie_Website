import Header from './Header'
import Movie from './Movie'
import './App.css'
import movies from './movie.json'

function App() {
  
  return (
    <>
    <div className='App'>
      <Header/>
      <div className='main'>
      {
movies.map((element) =>{
      return(
       <Movie
        title = {element.Title}
        year = {element.Year}
        img = {element.Poster}
       />
      )
})
      }
      </div>
      </div>
        </>
  )
}

export default App
