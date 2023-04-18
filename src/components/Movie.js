import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import Card  from "./Card";
//import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function Movie({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState('0');
  const [per, setPer] = useState('0');



  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setTotalResults(data.total_results)
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }


  // useEffect(() => {
   
  //     const ppl = movies.reduce((acc, el) => {
  //       if (el.vote_average < 5){
  //         let name = `${el.title}`
  //         acc.push(name);
  //       }
  //       return acc;
  //     },[])
  //     setPer(ppl)
  //     setTotalResults(ppl)
   
  //   });
  // }, []);

  const fffff = () => {
    const ppl = movies.reduce((acc, el) => {
      if (el.vote_average < 5){
        let name = `${el.title}`
        acc.push(name);
      }
      return acc;
    },[])
    setPer(ppl)
    setTotalResults(ppl)
  }
     

    return(
<>

<div class="listing-area pt-120 pb-120">
  <div class="container">
    <div class="row">

         <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="row">
                    <div class="col-12">
                            <div class="small-section-tittle2 mb-45">
                            <h4>Advanced Filter</h4>
                        </div>
                    </div>
                </div>

<div class="category-listing mb-50">
    <div class="single-listing">
        <div class="select-job-items2">
           <select 
              name="original_language"
              id="original_language"
             
           >
               <option value="todos">todos</option>
               <option value="it">It</option>
               <option value="en">Eng</option>
             
           </select>
       </div>
    
     
       
        
        
       <div class="select-Categories pt-80 pb-30">
           <div class="small-section-tittle2 mb-20">
               <h4>Price range</h4>
           </div>
           <label class="container">$50 - $150
               <input 
                 type="checkbox"
                 name="adult"
                 id="shipping"
              

               />
               <span class="checkmark"></span>
           </label>
        
       </div>
        
       <div class="select-Categories">
           <div class="small-section-tittle2 mb-20">
               <h4>Tags</h4>
           </div>
         
           <label class="container">English
               <input
                    type="checkbox"
                    value="todos"
              
               />
               <span class="checkmark"></span>
              
           </label>


           <label class="container">Italiano
               <input
                    type="checkbox"
                    value="todos"
                
                 />
               <span class="checkmark"></span>
              
           </label>


          <label class="container">Italiano
               <button  ></button>
           </label>

              <label class="container">Italiano
               <button  ></button>
           </label>

                   <label class="container">Percentage
               <button ></button>
           </label>

         <label class="container">Over 8
               <button  ></button>
           </label>
       </div>
    </div>
</div>





             </div>
          <div class="col-xl-8 col-lg-8 col-md-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="count mb-35">
                            <span> {totalResults}   Listings are available</span>

                         </div>
                    </div>
                </div>
            
            
                <InfiniteScroll
                     dataLength={movies.length}
                     hasMore={hasMore}
                     next={() => setPage((prevPage) => prevPage + 1)}
                     loader={<Spinner />}
                >
 
                <div class="popular-directorya-area fix">
                        <div class="row">                                               
                        {movies.map((movie, i) => { return(
                            <div class="col-lg-6">
                                   <Card
                                       key={movie.id} movie={movie}
                                   /> 
                            </div>
                         )})}
                        </div>
                  </div>


                   </InfiniteScroll>


             </div>
        </div>
   </div>
</div>
 


</>
)}

export default Movie;

       
