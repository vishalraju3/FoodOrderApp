
import React from 'react';
import DataService from '../DataService';
class DeleteProduct extends React.Component {
    constructor(props){
        super(props);
        this.state={
          Pname:"",
         
        }
     
      
       
        this.componentDidMount=()=>{
          var requestObject={
            success:(response)=>{
              this.setState({Deleteproducts:response});
              window.location.href="/components/Owner";
            alert("Form submit");
            },
            error:function(error){
              console.log(error)
              alert("Enter Valid Product Name");
            }
          }
          
          
          
          this.onSubmit=(e)=>{
           
            e.preventDefault();
            requestObject.data={Pname:this.state.Pname}
            DataService.DeleteProducts(requestObject);
            
            
          }
          
        }
        
        
      }
    render(){

        return(
           <div>
  <section className="second-section">
    <div className="container">
      <div className="col-12 ">
        <form id="myform" className="row g-3" onSubmit={this.onSubmit}>
          <div className="form-group">
            <div className="row" id="productadd" style={{margin: 10}}>
              <div className="col">
                <input type="text" placeholder="Name" id="Pname" name="Pname" value={this.state.Pname} onChange={(e)=>this.setState({Pname:e.target.value})}/>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" onSubmit={this.onSubmit} className="btn btn-primary btn-lg">Confirm Changes</button>
            </div>
          </div></form>
      </div>
    </div></section>
</div>
        )
    }
}
export default DeleteProduct;
