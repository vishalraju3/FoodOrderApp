import './CSS/Home.css';
import icons from 'react-icons';
import burger from './Images/burger.jpg';

import Chinese from './Images/chinese.jpg';

import Desserts from './Images/dessert.jpg';

import MainCourse from './Images/maincourse.jpg';
import veg from './Images/vedfried.jpg'

import FoodandDrinks from './Images/Food_&_Drinks.gif';
import kravingsHomePage from './Images/Homemade.jpg';
import chic65 from './Images/chick65.jpg';

import chicB from './Images/CB.jpg';



import Image3 from './Images/g-3.jpg';

//  import UpdateProduct from './Images/UpdateProduct.jpeg'

//  import { Carousel } from 'react-bootstrap';
//  import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import React, { Component } from 'react';
import Navbar from './HomeNav';
class Home extends Component {
   
   render() { 

       return (
           <div>
            
              <Navbar />
                <section className="bg-light text-light p-5 text-center bg"> 
                 <div classname="container">
                   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner">
                       <div className="carousel-item active">
                         <img src={FoodandDrinks} className=" rounded d-block w-100" alt="image" />
                       </div>
                       <div className="carousel-item">
                         <img src={kravingsHomePage}  style={{height:"350px"}} className=" rounded d-block w-100" alt="image" />
                       </div>
                       {/* <div className="carousel-item">
                         <img src={Image3} style={{height:"500px"}} className="d-block w-100" alt="image" />
                       </div> */}
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                       <span className="carousel-control-prev-icon" aria-hidden="true" />
                       <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                       <span className="carousel-control-next-icon" aria-hidden="true" />
                       <span className="visually-hidden">Next</span>
                     </button>
                   </div>
                 </div>
                </section> 
                

                {/* <div className="container"> */}
                <section className='second-section'>
                  <div className='row p-5'>

<div className='col-sm-3 col-md-7' style={{paddingRight: "27px"}}>
                     <div className="col-md-12 p-2 bg-light rounded border border-dark" style={{backgroundColor: "rgb(2,0,36)"}}>
                 
 <div className="row">
   
 
   <div className="col-sm-12 p-2">

     <div id="foodcards" className="carousel slide" data-ride="carousel">

       <div className="carousel-inner">
       <h4 style={{paddingLeft:90}}>Recommended For You</h4>   
         <div className="carousel-item active">
           <div className="container">
             <div className="row">
               <div className="col">
                 <div className="card" style={{width: 300, margin: 'auto'}}>
                   <img src={chicB}  className="card-img-top" />
                   <div className="card-body" style={{backgroundColor: "grey"}}>
                     <h4 className="card-title">Chiken Biryani</h4>
                     <p className="card-text">ratings and orders</p>
                     <button type="button" className="btn-sm btn-danger">
                       Order Now!
                     </button>

                   </div>
                 </div>
               </div>
               <div className="col">
                 <div className="card" style={{width: 300}}>
                   <img src={chic65}  className="card-img-top" />
                   <div className="card-body" style={{backgroundColor: "grey"}}>
                     <h4 className="card-title">Chicken 65</h4>
                     <p className="card-text">ratings and reviews</p>
                     <button type="button" className="btn-sm btn-danger">
                       Order Now!
                     </button>
                     {/* <button type="button" className="btn btn-danger">
                       View Reviews
                     </button> */}
                   </div>
                 </div>
               </div>
               {/* <div className="col-sm-12 col-lg-4">
                 <div className="card rounded" style={{width: 300}}>
                   <img src={burger} className="card-img-top" />
                   <div className="card-body" style={{backgroundColor: "grey"}}>
                     <h4 className="card-title">Chicken Fried Rice</h4>
                     <p className="card-text">ratings and reviews</p>
                     <button type="button" className="btn-sm btn-danger">
                       Order Now!
                     </button>

                   </div>
                 </div>
               </div> */}
             </div>
           </div>
         </div>
         <div className="carousel-item ">
           <div className="container " >
             <div className="row">
               <div className="col">
                 <div  className="card" style={{width: 300, margin: 'auto'}}>
                   <img src={burger} className="card-img-top" />
                   <div className="card-body"  style={{backgroundColor: "grey"}}>
                     <h4 className="card-title">Burger</h4>
                     <p className="card-text">ratings and Reviews</p>
                     <button type="button" className="btn-sm btn-danger">
                       Order Now!
                     </button>

                   </div>
                 </div>
               </div>
               <div className="col">
                 <div className="card" style={{width: 300, margin: 'auto'}}>
                   <img src={veg} className="card-img-top" />
                   <div className="card-body"  style={{backgroundColor: "grey"}}>
                     <h4 className="card-title">Veg Fried Rice</h4>
                     <p className="card-text">Ratings</p>
                     <button type="button" className="btn-sm btn-danger">
                       Order Now!
                     </button>

                   </div>
                 </div>
               </div>
               {/* <div className="col-sm-12 col-lg-4">
                 <div className="card" style={{width: 300}}>
                   <img src={Desserts} className="card-img-top" />
                   <div className="card-body">
                     <h4 className="card-title">Chicken Burger</h4>
                     <p className="card-text">rating</p>
                     <button type="button" className="btn-sm btn-danger">
                       Order Now!
                     </button>

                   </div>
                 </div>
               </div> */}
             </div>
           </div>
         </div>
       </div>
       <a  className="carousel-control-prev" data-bs-target="#foodcards" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" />
       </a>
       <a className="carousel-control-next" data-bs-target="#foodcards" data-bs-slide="next">
         <span className="carousel-control-next-icon" />
       </a>
     </div>
   
 </div>

</div>
</div>
</div>


<div className='col-md-4 p-8'>
 <div className="col-md-12 p-4 rounded border border-dark"style={{backgroundColor: "rgba(201, 76, 76, 0.3)"}}>
 <h4>Top In Our Charts</h4>


 <div className="p-2 rounded border text-white bg-dark" >
   <div className='row' >
     <div className='col text-center'><h6>Item</h6></div>
     <div className='col text-center'><h6>Price</h6></div>
     <div className='col text-center '><h6>buy</h6></div>
 </div>
</div>

   <div className="d-grid gap-2">
   <div className="p-2 rounded bg-light border">
   <div className='row'>
     <div className='col text-center'>Chicken Biryani</div>
     <div className='col text-center'>250/-</div>
     <div className='col text-center'><button className='btn-danger btn-sm'>Order</button></div>
   </div>
   </div>


   <div className="p-2 rounded bg-light border">
   <div className='row'>
   <div className='col text-center'>Burger</div>
   <div className='col text-center'>150/-</div>
   <div className='col text-center'><button className='btn-danger btn-sm'>Order</button></div>
   </div>
   </div>


   <div className="p-2 rounded bg-light border">
   <div className='row'>
   <div className='col text-center'>Fish Fry</div>
   <div className='col text-center'>360/-</div>
   <div className='col text-center'><button className='btn-danger btn-sm'>Order</button></div>
   </div>
    </div>

    <div className="p-2 rounded bg-light border">
   <div className='row'>
   <div className='col text-center'>Chapati</div>
   <div className='col text-center'>30/-</div>
   <div className='col text-center'><button className='btn-danger btn-sm'>Order</button></div>
   </div>
    </div>

    <div className="p-2 rounded bg-light border">
   <div className='row'>
   <div className='col text-center'>veg fried rice</div>
   <div className='col text-center'>160/-</div>
   <div className='col text-center'><button className='btn-danger btn-sm'>Order</button></div>
   </div>
    </div>




    </div>
</div>


</div>
</div>
               {/* <div className='text-center p-2'><h4 >Categories</h4></div>

               </section>
               <section id="second-section">
                 <div className="container">
                   <div className="row">
                     <div className="col-md-3">
                       <div className="card">
                         <img src={Chinese} alt='chinese' />
                         <div className="card-bottom">
                           <a className="h4 m-0 mt-2 text-center nav-link" href="/Components/LoginView">Chinese</a>
                         </div>
                       </div>
                     </div>
                     <div className="col-md-3">
                       <div className="card">
                         <img src={burger} alt='Burgers' />
                         <div className="card-bottom">
                           <a className="h4 m-0 mt-2 text-center nav-link" href="/Components/LoginView">
                             Burgers and pizzas
                           </a>
                         </div>
                       </div>
                     </div>
                     <div className="col-md-3">
                       <div className="card">
                         <img src={MainCourse} alt='Main Course' />
                         <div className="card-bottom">
                           <a className="h4 m-0 mt-2 text-center nav-link" href="/Components/LoginView">Main course</a>
                         </div>
                       </div>
                     </div>
                     <div className="col-md-3">
                       <div className="card">
                         <img src={Desserts} alt='Desserts' />
                         <div className="card-bottom">
                           <a className="h4 m-0 mt-2 text-center nav-link" href="/Components/LoginView">Desserts</a>
                         </div>
                       </div>
                     </div>
                   </div>
                   
                 </div> */}
               </section>


               <Footer />
           </div>
       );
   }
   
}

export default Home;