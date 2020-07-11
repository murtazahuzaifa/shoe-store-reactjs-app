import React from 'react';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import Home from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
// import makeStyle from '@material-ui/core/styles';

//importing style
import './style.css';

function Footer() {
    return (
        <div className='footer' >
            <hr/>
            <div  >
                <IconButton  > <GitHub /> </IconButton>
                <IconButton  > <Home />  </IconButton>
                <IconButton  > <Facebook />  </IconButton>
            </div>
            <p> <strong>Murtaza</strong> Ⓒ 2020</p>
        </div>
    );
}

export default Footer;