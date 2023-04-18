import React from 'react'
import { useSearchParams } from "react-router-dom";
  

const Hero = () => {

    const [query, setQuery] = useSearchParams();
    const search = query.get("search");
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
        <>

    <div class="slider-area hero-bg2 hero-overly">
        <div class="single-slider hero-overly  slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-10">
                        
                        <div class="hero__caption hero__caption2 pt-200">
                            <h1>Base de datos de películas</h1>
                        </div>
                         
                        <form action="#"  onSubmit={handleSubmit}  class="search-box mb-100">
                            <div class="input-form">
                                <input 
                                    
                                   type="text"
                                   value={search ?? ""}
                                   onChange={(e) => {
                                    const value = e.target.value;
                        
                                    setQuery({ search: value });
                                    // navigate("/?search=" + value);  <FaSearch size={20} color="black" className={styles.searchButton} />
                                  }}
                                   placeholder="Encuentre su película favorita"/>
                            </div>
                            <div class="select-form">
                              
                            </div>
                            {/* <div class="search-form">
                                   <button onClick={fetchData}>
                                       <a href="#"><i class="ti-search"></i> Buscar </a>
                                   </button>
                            </div>	 */}
                        </form>	
                    </div>
                </div>
            </div>
        </div>
    </div>



        </>
    )
}

export default Hero
