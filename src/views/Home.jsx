import React from 'react'
import { Container } from '@material-ui/core';
import Header from '../components/Header';
// import StickyFooter from '../components/StickyFooter';
import Footer from '../components/Footer';
import Carousel from 'react-material-ui-carousel';
import {
    Paper,
    Button,
} from '@material-ui/core'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Project(props) {
    return (
        <Paper
            className="Project"
            style={{
                // backgroundColor: '#cfcfcf',
            }}
            elevation={10}
            // `URL('https://cms.codflaw.com/${props.item.slide_img}')`
        >
            <div style={{backgroundImage: "URL('https://placeimg.com/1200/300/tech/grayscale')",
             height: '450px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
             }}>
                 <div style={{
                    // backgroundColor: '#cfcfcf',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    color: 'white'
                    
                  }}>
                    <h2>{props.item.title_on_slide}</h2>
                    <p>{props.item.desc_on_slide}</p>

                    <Button href={props.item.call_to_action_link_on_slide} className="CheckButton">
                        Check it out!
                    </Button>
                 </div>
                
            </div>

        </Paper>
    )
}

const Home = () => {
    const [slideDataArr, setSlideDataArr] = useState([]);

    useEffect(() => {
        axios.get(`https://cms.codflaw.com/carousel/1/`)
        .then(function (response){
            console.log(response)
            setSlideDataArr(response.data.images)

        })

        .catch(function(error){
            console.log(error)
        })
        .then(function(){
            //always execute
        });
    }, [])

    return(
        <React.Fragment>
            <Header/>
            <Carousel
                    // className="SecondExample"
                    autoPlay={false}
                    animation={"fade"}
                    indicators={true}
                    timeout={500}
                    navButtonsAlwaysVisible={false}
                    navButtonsAlwaysInvisible={false}

                >
                    {
                        slideDataArr.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
                </Carousel>
            <Container >
                {/* {JSON.stringify(slideDataArr)} */}

            </Container>
            <Footer />
            {/* <StickyFooter /> */}
        </React.Fragment>
    );
}


export default Home;