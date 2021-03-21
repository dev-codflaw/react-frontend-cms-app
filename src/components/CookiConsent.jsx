import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import {useState} from 'react'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme)=> ({

    footer: {
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'rgb(235, 195, 64)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%'
      },

} ));



const CookieConsent = ()=> {
    const classes = useStyles();
    const [cookieConset, setCookieConsent] = useState();

    const handleClick = () => {
        setCookieConsent(true);
        localStorage.setItem('cookieConsent', cookieConset);
    }
    return(
        <React.Fragment>
            { !cookieConset &&

            <div className={classes.footer}>
                <Grid container xs={12}>
                    <Grid xs={10}>
                         <p>This site uses cookies to deliver its services and to analyze traffic.</p>
                    </Grid>
                    <Grid xs={2}>
                        <p>
                            <Button raised onClick={handleClick} variant="outlined" size="small" color="primary">I Agree.</Button>
                        </p>
                    </Grid>
                </Grid>
            </div>
         }
            
        </React.Fragment>
    );
}

export default CookieConsent;