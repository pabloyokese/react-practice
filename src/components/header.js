import React from 'react';
import classes from '../css/styles.css'

class Header extends React.Component {

    state = {
        keywords: ''
    }
    inputChangeHandler = (event) =>{
        this.setState({
            keywords: event.target.value
        })
    }

    render(){       
        return (
        <header >
            <div className={classes.logo}>Logo</div>
            <input type="text" onChange={ this.inputChangeHandler} />            
        </header>
        )
    }
}

export default Header;