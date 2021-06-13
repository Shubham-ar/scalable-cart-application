import React, { useEffect, useState } from 'react'

import { random, commerce, datatype } from 'faker'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'

const apikey = "563492ad6f9170000100000119e5de6ec2434fad852d052a59fe50c0"
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
// const localUrl="" if youre not using the actual API and using some json server

const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([])
    // if you are using some local JSON server website instead of actual pexel api

    // const fetchPhotos = async () => {
    //     const response = await axios.get(localUrl)
    // }

    const fetchPhotos = async () => {
        const { data } = await axios.get(url, {
            headers: {
                Authorization: apikey
            }

        })


        const { photos } = data;


        const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: datatype.uuid()
            // id: random.uuid()
        }))

        setProduct(allProducts)
    }


    useEffect(() => { fetchPhotos() }, [])

    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>

            <Row className="border1pxblack">
                {product.map(product => (
                    <span key={product.id}>{product.productName}</span>
                ))}
            </Row>
        </Container>
    );
}

export default BuyPage