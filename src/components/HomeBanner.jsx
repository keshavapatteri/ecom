
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function HomeBanner() {
    return (
        <Carousel>
            <Carousel.Item>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Unrec/Baby-PC_GW_Hero_3000x1200_01._CB578900765_.jpg" alt=""className='w-100'/>
                <Carousel.Caption>
                    <h3>Welecome To Ecom</h3>
                    <p>Ready to Shop.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img src="https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg" alt=""className='w-100'/>
                <Carousel.Caption>
                    <h3>Ecom</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/BISS_2024/GW_BAU/April/GW_PC._CB559257357_.jpg" alt=""className='w-100'/>
                <Carousel.Caption>
                    <h3>Ecom</h3>
                    {/* <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeBanner;
