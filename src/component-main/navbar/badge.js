import * as React from 'react';
import {useSelector} from "react-redux";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';


export default function NavBadge() {
    const lengthProduct = useSelector((state)=>(state.product.productsBuy.length))
    return (
        <Stack spacing={2} direction="row" className="py-2">
            <Badge badgeContent={lengthProduct} color="primary">
                <ShoppingCartIcon className="text-white "  />
            </Badge>
        </Stack>
    );
}



