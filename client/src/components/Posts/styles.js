import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 220px))',
    gridGap:'12px',
    textAlign:'center',
    justifyContent: 'center',
    
    // alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));
