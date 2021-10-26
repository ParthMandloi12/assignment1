import React from 'react';
import NotFoundImage from './images/Not.png'
import Button from "@material-ui/core/Button";

function NotFound(props) {
    const handleRedirect = () => {
        props.history.push('/login')
    }
  return (
    <div>
        <img style={{width:'100%',height:'70vh'}} src={NotFoundImage} alt="sign in"/>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <Button 
                size="large" 
                variant="outlined"
                style={{width:'90%',color:'blue',border:'1px solid blue',marginTop:'15%'}}
                onClick={handleRedirect}
            >
                HOME PAGE
            </Button>
        </div>
    </div>
  );
}

export default NotFound;
