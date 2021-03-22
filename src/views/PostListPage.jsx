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
import { Grid, Paper, Chip } from '@material-ui/core'
import PageHeader from '../components/PageHeader'
import {Link} from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress';


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
    return(
        <React.Fragment>
                <Grid item xs={12} key={props.index} key={props.item.id}>
                  <Card style={{backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)+'3d'}}>
                  {props.item.image &&
                    <CardMedia
                      className={classes.media}
                      image={axios.defaults.baseURL+props.item.image}
                      title="Paella dish"
                  />}
                  <CardContent>
                    <span>
                        { new Date(props.item.updated_at).toLocaleString('default', {month:'short'})} &nbsp;
                        { new Date(props.item.updated_at).getDate()}
                    </span>
                    <h2>{props.item.title}</h2>
                     {props.item.tags.map((tag)=>
                                  <span>
                                    <Chip
                                      label={tag.name}
                                      variant="outlined"
                                      size="small"
                                      color="primary"
                                    />&nbsp;
                                   </span>
                                   )}
                  </CardContent>
                  <CardActions>
                    <Link to={props.item.slug} size="small" color="primary" variant="outlined">
                      Read More
                    </Link>
                  </CardActions>
                </Card><br />
              </Grid>
        </React.Fragment>
    );
}


const PostListPage = () => {
  const classes = useStyles();

  const [dataArr, setDataArr] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer);
      setLoading(false);

    }

    getPosts()

      // axios.get('/posts/')
      // .then(function (response){
      //     console.log(response);
      //     setDataArr(response.data)
      //     // alert(JSON.stringify(dataArr))
      // })
      // .catch(function (error){
      //     console.log(error)
      // })
      // .then(function () {
      //     //always executed
      // });

  }, [])


  // Fetch Posts 
  const fetchPosts = async () => {
    const res = await axios.get(`/posts/`);
    const data = await res.data;
    // console.log(data);

    return data
  }


  // Fetch Post
  const fetchPost = async (slug) => {
    const res = await fetch(`http://127.0.0.1:8000/posts/${slug}`)
    const data = await res.json()

    return data
  }

    return(
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" style={{paddingTop:"50px"}}>
              <h3>Posts</h3>
              {loading && 
                  <LinearProgress />
              }
              {/* {dataArr && dataArr.map((item, index) => <p key={index}>{item.title}</p> )} */}
              {/* {JSON.stringify(posts)} */}
              
              <Grid  >
                  {posts.map((post, index) => <PostItemCard item={post} key={index} />)}
                  {/* {dataArr && dataArr.map((item, index) => < PostItemCard item={item} key={index} /> )} */}
              </Grid>

            </Container><br />
          </React.Fragment>
    );
}

export default PostListPage;