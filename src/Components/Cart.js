import { forEach } from 'async';
import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row
} from 'reactstrap'
import CartItem from './CartItem'

const Cart = ({ cartItem, removeItem, buyNow }) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);

    })

    return (
        <Container fluid>

            <h1 className="text-success ">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                    height="80"
                                    src={item.tinyImage}
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>
                                    Price: {item.productPrice} INR
                                </span>
                                <Button
                                    color='danger'
                                    onClick={() => { removeItem(item) }}
                                >Remove Now</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/* if everything is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3 ">
                        <CardHeader>
                            Grand Total:
                        </CardHeader>
                        <CardBody>
                            Your Amount for {cartItem.length} product(s) is: {amount}
                        </CardBody>
                        <CardFooter>
                            <Button
                                color="success"
                                onClick={buyNow}
                            >
                                Pay Now!
                            </Button>
                        </CardFooter>
                    </Card>

                ) : (
                    <h1 className="text-warning">Cart is Empty</h1>
                )
            }

        </Container >
    )


}
export default Cart