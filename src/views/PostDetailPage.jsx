import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Chip from '@material-ui/core/Chip'


const TagComponent = (props) => {
    return(
        <>
            {JSON.stringify(props.data)}
        </>
    );
}

const ContentBlock = (props) => {
    return(
            <React.Fragment>
                {props.rawData.image && 
                <PageHeader image={axios.defaults.baseURL+props.rawData.image} />
                }
                <h1>{props.rawData.title}</h1>
                {/* {JSON.stringify(props.rawData.tags)} */}
                {/* <TagComponent data={props.rawData.tags}/> */}
                <span>
                        { new Date(props.rawData.updated_at).toLocaleString('default', {month:'short'})} &nbsp;
                        { new Date(props.rawData.updated_at).getDate()}
                </span>
                {/* <h3>{props.rawData.subtitle}</h3> */}
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
                <Container maxWidth="lg" style={{paddingTop:"50px"}}>

                    {/* {JSON.stringify(dataArr)} */}
                    <main>
                        <ContentBlock rawData={dataArr} />
                    </main>
                </Container>
          </React.Fragment>
    );
}

export default PostDetailPage;