import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    borderRadius: '20px 20px 40px 40px',
    width:'220px',
    height: '330px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px',
    textAlign:'center'
  },
  title: {
    // padding: '0 16px',
   fontFamily: "'Roboto', sans-serif",
    fontSize:'17px',
    fontWeight:'600',
    textAlign:'center'

  },
  cardActions: {
    // padding: '0  16px 8px 12px',
    
  },
  cardAction: {
    
    
  },
  deleteBtn:{
    position: 'relative',
    top:'-30px'
  },
  likeBtn:{
    position: 'relative',
    top:'-30px'
  },
  author:{
    color: '#fff'
  }
});
