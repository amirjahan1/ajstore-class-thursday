import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';


export default function NavBadge() {
    return (
        <Stack spacing={2} direction="row" className="py-2">
            <Badge badgeContent={10} color="primary">
                <ShoppingCartIcon className="text-white "  />
            </Badge>
        </Stack>
    );
}



