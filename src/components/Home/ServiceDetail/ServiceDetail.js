import { useHistory } from "react-router";



const ServiceDetail = ({service}) => {
  
    const {name,price , imageURL,_id} = service;
    console.log(service);

    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/book/${id}`);
    }
   

    return (
        
            <div className="col-md-4 text-center ">
                <img style={{height: '100px'}} src={imageURL} alt="" />
                <h5 className="mt-3 mb-3">{name}</h5>
                <p className="mt-3 mb-3">${price}</p>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
                 <button onClick={() => handleBook(price)} className='btn btn-primary' >Book Service</button>  
            
            </div>
        
    );
};

export default ServiceDetail;