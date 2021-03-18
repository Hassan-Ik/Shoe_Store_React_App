import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        color: 'white',
        padding: '30px',
        width: "100%",
        borderTop: '1px solid white',
        [theme.breakpoints.up('sm')]:{
            width: '100%',
        },
    },
    follow: {
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        '&:hover':{
            textDecoration: 'underline',
        },
    },
    form: {
        display: 'block',
        color: 'white',
    },
    Input:{
        color: 'white',
        width: '280px',
        height: '45px',
        borderBottom: '1px solid white',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
        }
    },
    InputLabel:{
        color: 'white',
        marginLeft: '5px',
        marginRight: '5px',
    },
}));

export default useStyles;