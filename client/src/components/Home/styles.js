import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 20,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  mansonaryBackground:{
    display: 'grid',
    gridTemplateColumns:'repeat(4,1fr)',
    gridGap:'10px',
    marginBottom:'40px'
  },
  bg1:{
    height:'120px',
    background:`url('https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`,
    backgroundSize:'cover',
    backgroundAttachment: 'fixed'
  },
  banner:{
    position:'relative',
    display:'flex',
    margin:'40vh 0 50vh',
    
  },
  textContainer:{
    position: 'absolute',
    left:0,
    bottom:0,
    top:0,
    width: 'max-content',
    height: '100%',
    display: 'flex',
    alignItems:'center',
    textAlign:'center',
   
  },
  h1:{
    fontSize:'100px',
    textTransform:'capitalize'
  },
  pagination: {
    borderRadius: 40,
    marginTop: '1rem',
    padding: '16px',
  },

  gridContainer: {
    marginTop: '5vh', 
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton:{
    background: '#6e75a8',
    color:'#fff',
    borderRadius:'40px'
  }
}));
