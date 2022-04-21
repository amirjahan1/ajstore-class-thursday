import React, {useState, useEffect} from 'react';

import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import axios from "axios";

import Card from "./Card"
import Loading from "../../components/loading/loading";
import { ALL_PRODUCT } from "../../api";


const Product = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [firstSlice, setFirstSlice] = useState(0);
    const [secondSlice, setSecondSlice] = useState(12);


    function getAllProduct(name)
    {
        setLoading(true);
        if (name == null || name == undefined || name.length == 0)
        {
        axios.get(ALL_PRODUCT)
            .then(res => {
                return  res.data
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
        }

        else
        {
            axios.get(ALL_PRODUCT)
                .then(res => {
                    return  res.data
                })
                .then(data => {
                    const newProducts = data.filter(products => products.first_name.toLowerCase().includes(name.toLowerCase()))
                    setProducts(newProducts)
                    setLoading(false);
                })
        }
    }

    useEffect(() => {
        getAllProduct();
    }, [])



     const handleChange = (event, value) => {
        setFirstSlice(value * 12 - 12);
        setSecondSlice(value * 12);
    };

    return (
        <>
            <div className="w-full flex justify-center items-center flex-col px-20">
                <h2 className="text-2xl font-bold text-center my-5">
                    Search your product
                </h2>

                <TextField
                    className="lg:w-6/12 md:w-6/12 sm:w-full w-full"
                     id="filled-required"
                    label="Search by name"
                    onChange={(e)=>getAllProduct(e.target.value)}
                    // defaultValue="Hello World"
                    variant="filled"
                />
            </div>
            {
                loading ? <Loading/> :

                    <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 mt-10">
                        {
                            products.slice(firstSlice,secondSlice).map((item, index) => {
                                return (
                                    <Card key={item.id} item={item}/>
                                )
                            })
                        }
                    </div>

            }
            <div className="w-full flex justify-center items-center my-10">
                <Stack spacing={4}>
                    <Pagination count={Math.round(products.length / 12)} variant="outlined" color="primary"  onChange={handleChange} />
                </Stack>
            </div>
        </>
    );
}


export default Product;