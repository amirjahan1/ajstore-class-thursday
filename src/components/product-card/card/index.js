import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from "react-redux";
import {ADD_QUANTITY, REMOVE_QUANTITY, REMOVE_FROM_CART} from "../../../redux/actions/actionTypes";

export default function MediaCard({items}) {
    const dispatch = useDispatch()
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={items.img }
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {items.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    quantity : {items.quantity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{items.price}</Button>
                <Button size="small"
                        onClick={ ()=>dispatch({
                            type: REMOVE_QUANTITY,
                            payload: items.id
                        })}
                >-</Button>
                <Button size="small"
                        onClick={ ()=>dispatch({
                            type: ADD_QUANTITY,
                            payload: items.id
                        })}
                >+</Button>
                <Button size="small"
                onClick={ ()=>dispatch({
                    type: REMOVE_FROM_CART,
                    payload: items.id
                })}
                >Remove</Button>
            </CardActions>
        </Card>
    );
}
