
import React from 'react';
import ProductsNav from './ProductsNav';
// import FileUpload from './FileUpload';
import DataService from '../DataService';
class UpdateProducts extends React.Component {
    constructor(props){
        super(props);
        this.state={
          Pname:"",
          Price:"",
        //   Status:"",
        //   FoodImage:null,
        //   ImageName:""
        //   Category:"",
        //   Type:""
        }
     
      
       
        this.componentDidMount=()=>{
          var requestObject={
            success:(response)=>{
              this.setState({updateproducts:response});
            },
            error:function(error){
              console.log(error)
            }
          }
          
        //   this.getFormData=()=>{
        //     const img = new FormData();
        //     img.append('FoodImage',this.state.FoodImage);
        //     img.append('imagename',this.state.ImageName);
        //     return img;
        //   }
          
          this.onSubmit=(e)=>{
           

            // var requestObj={
              
            //   data:this.getFormData(),
            //   success:(response)=>{
            //     this.setState({addimage:response});
            //   },
            //   error:function(error){
            //     console.log(error)
            //   }
            // }
            e.preventDefault();
            requestObject.data={Pname:this.state.Pname,Price:this.state.Price}
            DataService.UpdateProducts(requestObject);
           // DataService.ImageUpload(requestObj);
            window.location.href="/components/Owner";
            alert("Form submit");
            
          }
          
        }
        
        
      }
    render(){

        return(
            <div>
              <ProductsNav />
                <section className="second-section">
                  <div className="container">
                    <div className="col-12 ">
                      <form id="myform" className="row g-3" onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <div className="row" id="productadd" style={{margin: 10}}>
                            <div className="col">
                              <input type="text" placeholder="Name" id="Pname" name="Pname"  value={this.state.Pname} onChange={(e)=>this.setState({Pname:e.target.value})} />
                            </div>
                            {/* <div className="col">
                              <input type="text" placeholder="Quantity" id="Status" name="Status"  value={this.state.Price} onChange={(e)=>this.setState({Price:e.target.value})} />
                            </div> */}
                            <div className="col">
                              <input type="text" placeholder="Price" id="Price" name="Price"  value={this.state.Price} onChange={(e)=>this.setState({Price:e.target.value})} />
                            </div>
                            {/* <div>
			
                              <div>
                                <input type="file" name='ImageName' id='ImageName'  onChange={(e)=>this.setState({FoodImage:e.target.files[0],ImageName:e.target.files[0].name})} />
                                <span>{this.state.ImageName}</span>
                              </div>
                            </div>*/}
                          </div> 
                        </div> 
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">Confirm Changes</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
            </div>
        )
    }
}
export default UpdateProducts;