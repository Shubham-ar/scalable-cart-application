import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap'


const CartItem = ({ product, addInCart }) => {

    return (
        <Card className="mb-1 mt-2">
            <CardImg
                top
                height="250"
                width="100%"
                src={product.smallImage}


            />

        </Card>
    )
}

export default CartItem