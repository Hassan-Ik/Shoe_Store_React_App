import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar:{
        height: '100px',
      },
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
      },
      image: {
        height: '350px',
        width: '80%',
        boxShadow: '1px 1px 5px gray',
      },
      button: {
        border: '1px solid #6D6D6D',
        color: 'white',
        paddingLeft:'20px',
        paddingRight: '20px',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginTop: '10px',
        marginBottom: '10px',
        transition: '1s ease',
        '&:hover':{
          background: '#6D6D6D',
        }
      },
      categories:{
    '& > *': {
      height: theme.spacing(40),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
      },
      categoriesTitle: {
        textAlign: 'center',
        color: 'white',
        textShadow: '1px 1px 2px lightgray',
        height: '50px',
      },
      categoriesItems:{
        paddingTop: '5px',
        paddingBottom: '5px',
        '&:hover':{
          borderBottom: '1px solid #6D6D6D',
        }
      },
      categoriesTypes: {
        color: 'white',
        width: '90%',
        textAlign: 'center',
        border: 'none',
      },
      categoriesImage:{
        height: '90%',
        width: '90%',
      },

    
}));

export default useStyles;