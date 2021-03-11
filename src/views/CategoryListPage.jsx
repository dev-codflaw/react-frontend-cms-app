import React, { useState, useEffect} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PageHeader from '../components/PageHeader'
import ServerError from '../components/ServerError'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    main: {
        paddingTop: '30px',
        paddingBottom: '20px'
    }
  });

  
const CategoryCard = (props) => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid item xs={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    {props.item.image &&                     
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        // image={axios.defaults.baseURL+props.item.image}
                    />}

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.item.name}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>
            </Grid>

        </React.Fragment>
    );
}


const CategoryListPage = () => {
    const classes = useStyles();
    const [error, setError] = useState(false);
    const [categoryDataArr, setCategoryDataArr] = useState([]);

    useEffect(()=>{
        axios.get('/categories/')
        .then(response => {
            console.log(response);
            setCategoryDataArr(response.data);
        })
        .catch((error) => {
            // Error
            setError(true)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
        
    }, []);

    return(
        <React.Fragment>
            <Header />
            <Container >
                {/* <PageHeader image={'https://placeimg.com/1200/300/tech/grayscale'} /> */}
                {error && <ServerError />}
                {JSON.stringify(axios.defaults.baseURL)}
                {/* {JSON.stringify(categoryDataArr)} */}
                <Grid container spacing={3} className={classes.main}>
                    {categoryDataArr.map((item, index) => < CategoryCard item={item} key={index}  /> )}

                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
}

export default CategoryListPage;