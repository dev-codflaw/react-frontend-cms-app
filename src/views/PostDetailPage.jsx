import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
const ContentBlock = (props) => {

    return(
 
            <React.Fragment>
                <h1>{props.rawData.title}</h1>
                <h3>{props.rawData.subtitle}</h3>
                {/* <h4>{ new Date(props.rawData.updated_at).toLocaleDateString()}</h4> */}
                <div dangerouslySetInnerHTML={{__html:props.rawData.description}}></div>
            </React.Fragment>
        );          

}

const PostDetailPage = () => {

    const location = useLocation();
    const [dataArr, setDataArr] = useState([]);

    useEffect(() => {
        axios.get(`/posts${location.pathname}/`)
        .then(function (response){
            console.log(response);
            setDataArr(response.data)
            // alert(JSON.stringify(dataArr))
        })
        .catch(function (error){
            console.log(error)
        })
        .then(function () {
            //always executed
        });
    }, [])

    return(
        <React.Fragment>
            <CssBaseline />
            <Header />

            <Container maxWidth="lg">
                {/* <PageHeader image={'https://placeimg.com/1200/300/tech/grayscale'} /> */}


                {/* {JSON.stringify(dataArr)} */}
              <main>
               
              <ContentBlock rawData={dataArr} />

              </main>
            </Container>
            <Footer />
          </React.Fragment>
    );
}


export default PostDetailPage;