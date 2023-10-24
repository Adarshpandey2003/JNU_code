import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Cards from './cards'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Stack from 'react-bootstrap/Stack';
import './home-css.css'; // Import the CSS file


export default function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let mystyle = {
        color: props.Mode === 'dark' ? "#F8F8FF" : "#132743",
        backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF'



        // border: " 1px solid " + props.Mode === 'black'? "white" : "black",
        // borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
        // border: " 1px solid " ,
        // borderRadius: " 2px solid",
    }

    return (
        <>
            <div className='container-fluid mx-0 my-0 ' style={mystyle}>
            <Carousel style={{  maxWidth: '1800px', margin: '20px 10px 20px 40px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/Untitled12.jpeg"
          alt="ICMR Img"
          style={{ objectFit: 'cover', height: '400px',borderRadius:'10px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/Carousel2.jpeg"
          alt="Second slide"
          style={{ objectFit: 'cover', height: '400px', borderRadius:'10px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/Untitled10.jpeg"
          alt="Third slide"
          style={{ objectFit: 'cover', height: '400px', borderRadius:'10px' }}
        />
      </Carousel.Item>
    </Carousel>



                {/* Middle bar
                <div className='container py-3 border-2'
                    style={{ backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF' }}>
                    <Card className=" mx-2 border-2 "
                        style={{
                            borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#F8F8FF',
                            textAlign: "center",
                        }}>
                        <Card.Body
                            style={{
                                backgroundColor: props.Mode === 'dark' ? '#24527a' : '#c86b85',
                                color: props.Mode === 'dark' ? '#F8F8FF' : '#F9F0F2',
                                fontFamily: "Calibri",
                                
                            }}>
                            <h4>JNU-ICMR Analytics Centre</h4></Card.Body>
                    </Card>
                </div> */}
                {/* Middle bar */}
                <div className='container py-3 border-2 rounded'
                    style={{ 
                        backgroundColor: props.Mode === 'dark' ? '#132743' : '#F8F8FF',
                        borderRadius: '10px', // Adjust the value to control the roundness of the corners
                    }}
                >
                    <Card className="mx-2 border-2"
                        style={{
                            borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#F8F8FF',
                            textAlign: "center",
                            borderRadius: '10px', // Adjust the value to control the roundness of the corners
                        }}
                    >
                        <Card.Body
                            style={{
                                backgroundColor: props.Mode === 'dark' ? '#24527a' : '#c86b85',
                                color: props.Mode === 'dark' ? '#F8F8FF' : '#F9F0F2',
                                fontFamily: "Calibri",
                                borderRadius: '10px', // Adjust the value to control the roundness of the corners
                            }}
                        >
                            <h4>JNU-ICMR Analytics Centre</h4>
                        </Card.Body>
                    </Card>
                </div>





                {/* small cards */}
                <div className="container my-2 h-25 py-2 pb-4 " >






                    <div>

                        <Cards/>
                    </div>


                </div>




            </div >




        </>
    );
}