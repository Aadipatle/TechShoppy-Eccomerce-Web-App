import React, { useEffect, useState } from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  const [date,setDate]=useState()
  useEffect(()=>{
let d = new Date().getUTCFullYear()
setDate(d)
  })
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>TechShoppy</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Near Shivshankar Lawn Kharbi,Dighori , Nagpur</li>
                <li>Email: Tech111@gmail.com</li>
                <li>Phone: +1 0000 000 000</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <p style={{textAlign:'center'}}>Copyright © {date} Powered by AadiCoding All rights reserved.</p>
    </footer>
  )
}

export default Footer
