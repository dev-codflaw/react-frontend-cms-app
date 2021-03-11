import React from 'react';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link'
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
// import { emphasize, withStyles } from '@material-ui/core/styles';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Chip from '@material-ui/core/Chip';
// import HomeIcon from '@material-ui/icons/Home';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbarColor:{
      background: '#2E3B55'
    }
  }));

// const StyledBreadcrumb = withStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.grey[100],
//     height: theme.spacing(3),
//     color: theme.palette.grey[800],
//     fontWeight: theme.typography.fontWeightRegular,
//     '&:hover, &:focus': {
//       backgroundColor: theme.palette.grey[300],
//     },
//     '&:active': {
//       boxShadow: theme.shadows[1],
//       backgroundColor: emphasize(theme.palette.grey[300], 0.12),
//     },
//   },
// }))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591



const Header = () => {
    const classes = useStyles();
    const location = useLocation();
    const [enquiry, setEnquiry] = React.useState({username: '',emailaddr: ''});
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
      openSnackBar: false,
      vertical: "top",
      horizontal: "center"
    });
  
    const { vertical, horizontal, openSnackBar } = state;

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (e) => {
      // alert('change');
      const name = e.target.name;
      const value = e.target.value;
      enquiry[name] = value;
      setEnquiry(enquiry);
    }

    const handleSend = (e) => {
      e.preventDefault();
      alert(JSON.stringify(enquiry));
      if(enquiry.username === '' || enquiry.emailaddr === ''){
        alert('blank');
      }else{
        alert('good to go');
        setEnquiry({username: '',emailaddr: ''});
        setOpen(false);
        setState({ openSnackBar: true, vertical: 'top', horizontal: 'center' });


      }
    }

    const handleClick = (newState) => () => {
      setState({ openSnackBar: true, ...newState });
    };

    const handleSnackBarClose = () => {
      setState({ ...state, openSnackBar: false });
    };


    return (
        <React.Fragment>
            <div className={classes.root}>
            <AppBar position="static" className={classes.navbarColor}>
                <Container maxWidth="lg">
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button href="/" color="inherit">{'< codflaw />'}</Button>
                    </Typography>
                    <Button color="inherit">Latest Post</Button>
                    <Button color="inherit">About</Button>
                    <Button href="/category"  color="inherit">Category</Button>
                    <Button href="/post"  color="inherit">Posts</Button>
                    <Button onClick={handleClickOpen} color="inherit">Contact</Button>
                    </Toolbar>
                </Container>

            </AppBar>
            {/* <Breadcrumbs aria-label="breadcrumb" style={{backgroundColor: '#eeeeee', paddingTop: '3px', paddingBottom:'3px'}}>
              {}
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Home"
                icon={<HomeIcon fontSize="small" />}
              />
              <StyledBreadcrumb component="a" href="#" label={location.pathname} />

            </Breadcrumbs> */}


            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Please fill your detail</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Just type your name and email and we will contact you soon.
              </DialogContentText>
              <TextField
                onChange={handleChange}
                autoFocus
                margin="dense"
                id="username"
                name="username"
                label="Your Name"
                type="text"
                fullWidth
              />
              <TextField
                onChange={handleChange}
                margin="dense"
                id="emailaddr"
                name="emailaddr"
                label="Your Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSend} color="primary">
                Send
              </Button>
            </DialogActions>
          </Dialog>

          {/* <Button onClick={handleClick({ vertical: "top", horizontal: "center" })}>
        Top-Center
      </Button> */}

          <Snackbar
            autoHideDuration={6000}
            anchorOrigin={{ vertical, horizontal }}
            open={openSnackBar}
            onClose={handleSnackBarClose}
            message="I love snacks"
            key={vertical + horizontal}
          />

        </React.Fragment>
    );
}

export default Header;

