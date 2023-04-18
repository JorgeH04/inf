import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";

export default function Card({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300);
  return (
    <>
    <div class="properties__card">
            <div class="properties__img overlay1">
               <Link to={"/movies/" + movie.id}>
 
   :
                       <img 
                          class="img-fluid" 
                          width={230}
                          height={345}
                          className={styles.movieImage}
                          src={imageUrl}
                          alt={movie.title}
                        />

                      
 
             </Link>
            </div>
            <div class="properties__caption">
                <h3><a href="#">    </a></h3>
                <p> </p>
            </div>
            
           </div>
    </>
   
  );
}
