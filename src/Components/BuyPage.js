import React, { useEffect, useState } from 'react'

import { random, commerce } from 'faker'
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
            header: {
                Authorization: apikey
            }
        })
    }

    const { photos } = data;

    useEffect(() => { fetchPhotos() }, [])




}