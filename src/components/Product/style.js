import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        maxWidth: '100%',
        height: '100%',
    },
    media:{
        height: 0,
        paddingTop: '56.25%', //16:9
    },
    productName:{
        overflow: 'Hidden',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
    price:{
        color: 'darkblue', 
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'flex-end',         
    },
    iconButton:{
        '&:hover': {
            background: "#6D6D6D",
            color: 'white',
         },
    },
    cardContent:{
        display: 'flex',
        justifyContent: 'space-between',    
        height: '80px',
    }

}));