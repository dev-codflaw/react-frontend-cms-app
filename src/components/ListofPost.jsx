import React from 'react'
import axios from 'axios'

const ListofPost = () => {

    const data = () => {
        
        axios.get('http://127.0.0.1:8000/post/')
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error)
        })
        .then(function () {
            //always executed
        });
    }

    return(
        <React.Fragment>
                <button onClick={data}>Load Data</button>
        </React.Fragment>
    );
}

export default ListofPost;