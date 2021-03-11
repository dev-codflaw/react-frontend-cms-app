import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button'
import { Grid, Paper } from '@material-ui/core'
import PageHeader from '../components/PageHeader'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '39.25%', // 16:9
    backgroundSize: 'cover'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardBGColor: {
    // This '#' sign concat for make hax colorcode and '3d' contact for make color lighter.
    backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)+'3d'
  }
}));




const PostItemCard = (props) => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);


    return(
        <React.Fragment>
                <Grid item xs={6}>

                <Card style={{backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)+'3d'}}>
                {props.item.image &&
                <CardMedia
                className={classes.media}
                image={'http://127.0.0.1:8000'+props.item.image}
                title="Paella dish"
              />}
                <CardContent>
                  <h2>{props.item.title}</h2>
                  <Typography variant="h6" color="textSecondary" component="p">
                    {props.item.subtitle}
                  </Typography>
                </CardContent>
                {/* <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title="Posted By: Admin"
                  subheader={ new Date(props.item.updated_at).toLocaleDateString()}
                /> */}
                
              <CardActions>
                <Button href={props.item.slug} size="small" color="primary">
                  Read More
                </Button>
              </CardActions>
              </Card><br />
              </Grid>
         
      </React.Fragment>
    );
}


const PostListPage = () => {
  const classes = useStyles();

  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/posts/')
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
            <Header />

            <CssBaseline />
            <Container >

              <main>
              {/* <PageHeader image={'https://placeimg.com/1200/300/tech/grayscale'} /> */}


              <Grid container spacing={3}>
                  {dataArr.map((item, index) => < PostItemCard item={item} key={index} /> )}
              </Grid>


              </main>
            </Container>
            <Footer />
          </React.Fragment>
    );
}

export default PostListPage;