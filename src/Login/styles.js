import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  parentBlock:{
    width:'100%',
    minHeight:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  subBlock:{
    color:'black',
    background:'white',
    borderRadius:20,
    width:'60%',
    minHeight:'70vh',
    display:'flex',
    // justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    [theme.breakpoints.down("xs")]: {
      flexDirection:'column',
  },
    },
    loginImage:{
      [theme.breakpoints.down("xs")]: {
        width:'100%',
    },
    },
    mb20:{marginBottom:'20px !important'},
    loginBtn:{
        color:'white !important',
        background:'skyblue !important',
        "&:hover": {
            backgroundColor: `skyblue !important`,
        },
    },
    alignTextField:{
      display:'flex',
      flexDirection:'column',
      width:'50%',
      [theme.breakpoints.down("xs")]: {
        width:'100%',
      },
    }
}));

export default useStyles;
