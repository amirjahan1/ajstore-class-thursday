import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function AddToCardButton() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="outlined" >Add to cart <AddShoppingCartIcon className="mx-2"/></Button>
        </Stack>
    );
}
