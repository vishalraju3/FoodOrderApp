import axios from "axios";
import emailjs from "emailjs-com";
const apiUrl="http://localhost:5082/";
var DataService={
    listUsers:(requestObject)=>{
        axios.get(apiUrl+"api/User/List")
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    listProducts:(requestObject)=>{
        axios.get(apiUrl+"api/Product/ListProducts")
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    listcontacts:(requestObject)=>{
        axios.get(apiUrl+"api/Contact/ListContacts")
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    insertContact:(requestObject)=>{
        axios.post(apiUrl+"api/Contact/InsertContacts",requestObject.data)
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    insertOrders:(requestObject)=>{
        axios.post(apiUrl+"api/Order/InsertOrders",requestObject.data)
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    listOrders:(requestObject)=>{
        axios.get(apiUrl+"api/Order/ListOrders")
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    listSpecificOrders:(requestObject)=>{
        axios.get(apiUrl+"api/Order/ListSpecificOrders?email="+localStorage.getItem("Email"))
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    }, 
    listSpecificPayments:(requestObject)=>{
        axios.get(apiUrl+"api/Payment/ListSpecificPayment?email="+localStorage.getItem("Email"))
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    }, 
    listPayments:(requestObject)=>{
        axios.get(apiUrl+"api/Payment/ListPayments")
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    insertSignup:(requestObject)=>{
        axios.post(apiUrl+"api/User/Insert",requestObject.data)
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    Login:(requestObject)=>{
        axios.post(apiUrl+"api/User/Login",requestObject.data)
        .then(function(response){
           requestObject.success(response.data);
     
        })
        .catch(function(error){
            requestObject.error(error);
        });
            
    },
    Products:(requestObject)=>{
        axios.post(apiUrl+"api/Product/InsertProducts",requestObject.data)
        .then(function(response){
            requestObject.success(response.data);
            
        })
        .catch(function(error){
            requestObject.error(error);
        });
            
    },
    UpdateProducts:(requestObject)=>{
        axios.post(apiUrl+"api/Product/UpdateProducts",requestObject.data)
        .then(function(response){
            requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
            
    },
    DeleteProducts:(requestObject)=>{
        axios.post(apiUrl+"api/Product/DeleteProducts",requestObject.data)
        .then(function(response){
            requestObject.success(response.data);
            
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    ImageUpload:(requestObj)=>{
        axios.post(apiUrl+"api/Image/UploadImage",requestObj.data)
        .then(function(response){
            requestObj.success(response.data);
            
        })
        .catch(function(error){
            requestObj.error(error);
        });
    },
    listImage:(requestObject)=>{
        axios.get(apiUrl+"api/Image/getimage")
        .then(function(response){
           requestObject.success(response.data);
        })
        .catch(function(error){
            requestObject.error(error);
        });
    },
    insertPayments: (requestObject) => {
        axios
          .post(apiUrl + "api/Payment/InsertPayments", requestObject.data)
          .then(function (response) {
            requestObject.success(response.data);
          })
          .catch(function (error) {
            requestObject.error(error);
          });
      },
      Forgot:(requestObject)=>{
        axios.post(apiUrl+"api/User/Forgot",requestObject.data)
        .then(function(response){
           requestObject.success(response.data)
           console.log(requestObject)
           console.log(response.data)

                if(response.data.status==="success"){
                    emailjs.send('service_z0dduf9', 'template_1pwvcsl',requestObject.data, '0d-Nn2stLMKQBicPB')        
                    .then((result) => {
                      console.log(result.text);
                  }, (error) => {
                      console.log(error.text);
                  });
                }
                else{
                    window.location.href="/components/Notfound";
                }
                 
           
        })
        .catch(function(error){
            requestObject.error(error);
        });
            
    },
    Updatepsw:(requestObject)=>{
        axios.post(apiUrl+"api/User/UpdatePsw",requestObject.data)
        .then(function(response){
           requestObject.success(response.data)
           console.log(response.data)

           if(response.data.status==="success"){
            emailjs.send('service_z0dduf9', 'template_dlxd9ah',requestObject.data, '0d-Nn2stLMKQBicPB')        
            .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
  
        })
        .catch(function(error){
            requestObject.error(error);
        });
            
    },
    
}
export default DataService;