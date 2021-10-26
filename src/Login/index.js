import React, {useState} from 'react';
import useStyles from "./styles";
import img from '../images/signin-image.jpeg'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {toastError, toastSuccess} from '../Utils/Toaster';
import {USERNAME_REQ,PASSWORD_REQ,INVALID_CREDENTIALS} from '../Constants'

function Login(props) {
    const classes = useStyles();
    const[userName,setUserName] = useState('')
    const[password,setPassword] = useState('')
    const[showPassword,setShowPassword] = useState(false)
    const handleUserName = (e) => {
        let value = e.target.value
        setUserName(value)
    }
    const handlePassword = (e) => {
        let value = e.target.value
        setPassword(value)
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleUserLogin = () => {
        if(userName.length === 0){
            toastError(USERNAME_REQ)
        }
        else if(password.length ===0){
            toastError(PASSWORD_REQ)
        }
        else{
            if(userName === 'foo' && password ==='bar'){
                toastSuccess('Login Sucessfull')
                window.localStorage.setItem("isLoggedIn",true);
                props.history.push('/dashboard')
            }
            else{
                toastError(INVALID_CREDENTIALS)
            }
        }
    }
  return (
    <div className={classes.parentBlock}>
        <div className={classes.subBlock}>
            <img className={classes.loginImage} src={img} alt="sign in"/>
            <div className={classes.alignTextField}>
                <TextField 
                    id="outlined-basic" 
                    label="User Name" 
                    variant="outlined" 
                    className={classes.mb20}
                    value={userName}
                    onChange={handleUserName}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    className={classes.mb20} 
                    value={password}
                    onChange={handlePassword}
                    type={showPassword ? 'text' : 'password'}  
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                />
                <Button 
                    size="large" 
                    className={classes.loginBtn} 
                    onClick={handleUserLogin}
                >
                    SIGN IN
                </Button>
            </div>
        </div>
    </div>
  );
}

export default Login;
