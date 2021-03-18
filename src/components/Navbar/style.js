import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  discounts:{
    backgroundColor: 'inherit',
    textAlign: 'center',
    paddingTop: '7px',
    paddingBottom: '7px',
    color: 'white'
  },  
  appbar: {
        color: 'white',
        marginTop:'30px',
        paddingBottom: '4px',
        paddingTop: '4px',
        backgroundColor: 'inherit',
        borderTop: '1px solid white',
        borderBottom: '1px solid white',
        transition: 'all .5s ease',
        [theme.breakpoints.up('sm')]:{
          width: '100%',
          marginLeft: 0,
        } 
      },
      
      scrolled:{
        color: 'white',
        marginTop:'0px',
        paddingBottom: '4px',
        paddingTop: '4px',
        backgroundColor: 'black',
        borderBottom: '1px solid white',
        transition: 'all .5s ease',
        boxShadow:'1px 1px 2px gray',
        [theme.breakpoints.up('sm')]:{
          width: '100%',
          marginLeft: 0,
        }
      },
      list: {
        width: 250,
      },
      listitem: {
        '&:hover':{
          backgroundColor: '#6D6D6D',
          color: 'white',
        }
      },
      menubutton:{
        color: 'white',
        fontSize: '16px',
        '&:hover':{
          color: '#6D6D6D',
        },
      },
      title:{
        flex: 1,
        textDecoration: 'none',
        fontFamily: 'Noto Sans KR, sans-serif',
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.2rem"
        }
      },
      subtitle: {
        textDecoration: 'none',
        color: 'inherit',
        paddingRight: '10px',
        paddingLeft: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
        '&:hover':{
          color: '#6D6D6D',
        },
        '&:focus':{
          borderBottom: '1px solid #6D6D6D',
        },
        [theme.breakpoints.down('xs')]: { display: 'none', }
      },
      login: {
        border: '1px solid #6D6D6D',
        backgroundColor: 'inherit',
        color: 'white',
        '&:hover':{
          backgroundColor: '#6D6D6D',
          transition: '1.5s ease',
        }
      },
      searchbutton:{
        '&:hover':{
          backgroundColor: '#6D6D6D',
          color: 'white'
        }
      },
      image:{
          height:'70px',
          width: '90px',
          boxShadow: '0px 0px 2px white'
      },
      grow:{
        flexGrow: 0,
        
      },
      button:{
        marginRight: theme.spacing(1),
        
        //[theme.breakpoints.up('sm')]:{
        //  display: 'none',
        //}    
      },
      shoppingcart:{
        '&:hover':{
          background: '#6D6D6D',
          color: 'white',
        },
      },
      searchIcon: {
        padding: theme.spacing(0,2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot:{
        color: 'inherit',
      },
      inputInput:{
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create(`width`),
        width: '100px',
        [theme.breakpoints.up('md')]:{
          width: '20ch',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      closemenu: {
        marginLeft: '82%',
        fontSize: '20px',
        '&:hover':{
          backgroundColor: '#6D6D6D',
        }
      },
  }));

export default useStyles; 