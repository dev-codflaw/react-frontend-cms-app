import { makeStyles } from '@material-ui/core';
import React from 'react'


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

const StickyFooter = ()=> {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.footer}>
                <p>This is some content in sticky footer</p>
            </div>
        </React.Fragment>
    );
}

export default StickyFooter;