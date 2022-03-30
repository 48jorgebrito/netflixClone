import  React, {useEffect, useState} from 'react'
import Tmdb from './Tmdb'
import MovieRow from './componets/MovieRow'
import './App.css'
import FeatureMovie from './componets/FeatureMovie'
import Header from './componets/Header'


export default function App() {

  const [movie, setMovie] = useState([])
  const [featureData, setFeatureData] = useState(null)
  const [headerBlack, setHeaderBlack] = useState(false)

  useEffect(()=>{
   const loadAll = async ()=> {
   
    // Pegando a lista Total
    let list = await Tmdb.getHomeList()
      
      setMovie(list)
    
    // Pegando a Featured  
    let originals = list.filter(i=>i.slug === 'originals')
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
    let chosen = originals[0].items.results[randomChosen]
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
    setFeatureData(chosenInfo)
    
   }
  
   loadAll()
 },[])
  
 useEffect(()=>{

    const scrollLintener = ()=>{
        if(window.scrollY > 10){
          setHeaderBlack(true)
        }else{
          setHeaderBlack(false)
        }
    }
    window.addEventListener("scroll", scrollLintener)

    return () => {
      window.removeEventListener('scroll', scrollLintener)
    } 

 },[])
 
  return(
    <div className='page'>
        
    <Header black={headerBlack}/>

    {featureData &&
      <FeatureMovie item={featureData}/>

    }

      <section className='list'>
      {movie.map((item, index) => (
        <MovieRow key={index} title={item.title} items={item.items}/>
      ))}
      </section>
    
    </div>
  )
  
}

 
