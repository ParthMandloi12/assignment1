import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  circularImgBlock:{
    display: 'inline-block',
    position: 'relative',
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: '50%',
    [theme.breakpoints.down("xs")]: {
        width: 70,
        height: 70,
    },
  },
  img:{  
    width: 'auto',
    height: 100,
    [theme.breakpoints.down("xs")]: {
        height: 70,
    },
  },
  cardStyle:{
      marginBottom:10,
      marginTop:10,
      width:'45%',
      [theme.breakpoints.down("xs")]: {
        marginBottom:10,
        marginTop:10,
        width:'90% !important'
    },
    },
    alignContent:{
        display:'flex',
        alignItems:'center'
    },
    mainBlock:{
        marginTop:64,
        [theme.breakpoints.down("xs")]: {
            marginTop:56,
        },
    },
    cardBlock:{display:'flex',justifyContent:'center',flexDirection:'row'},
    alignName:{marginLeft:'5%'}
}));

export default useStyles;
