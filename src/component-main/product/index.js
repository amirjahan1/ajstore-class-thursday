import React , {useState , useEffect} from 'react';
import axios from "axios";
import Card from "./Card"
import Loading from "../../components/loading/loading";



const Product = () => {

   const [products , setProducts] = useState([]);
   const [loading , setLoading] = useState(true);
   //
   // useEffect(()=>{})
   //
   //  useEffect(()=>{ return()=>{}})
   //
   //  useEffect(()=>{ return()=>{}},[])
   //


   useEffect(()=>{

        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            setProducts(res.data);
            setLoading(false);
        })

   },[products])


   return(
       <>
           {
               loading ? <Loading/>:

         <div className="w-full grid grid-cols-4 gap-3 mt-10">
             {
                 products.map((item,index)=>{
                    return(
                        <Card key={item.id} item={item}/>
                    )
                })
            }
        </div>

           }
       </>
    );
}


export default Product;