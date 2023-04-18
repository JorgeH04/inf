import React from 'react'
  

const Nav = () => {
    return (
        <>
<header>
   <div class="header-area header-transparent">
       <div class="main-header header-sticky">
           <div class="container-fluid">
               <div class="menu-wrapper d-flex align-items-center justify-content-between">
                  
                   <div class="logo">
                       <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                   </div>
                 
                   <div class="main-menu f-right d-none d-lg-block">
                       <nav>
                           <ul id="navigation">
                               <li><a href="index.html">Home</a></li>
                               <li><a href="listing.html">Catagories</a></li>                           
                            </ul>
                       </nav>
                   </div>          
                    
                   <div class="header-btns d-none d-lg-block f-right">
                 
                   </div>
                  
                   <div class="col-12">
                       <div class="mobile_menu d-block d-lg-none"></div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</header>
          
        </>
    )
}

export default Nav


