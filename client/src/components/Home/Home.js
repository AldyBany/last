import React, { useState, useEffect,useRef } from 'react';
import { Container, AppBar, Typography, Grow, Grid,Paper,TextField,Button} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input'
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Paginate from '../Pagination/Pagination';
import {useHistory,useLocation,Link} from 'react-router-dom'
import useStyles from './styles'
import Banner from '../Banner/index'

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
 
    
    const [currentId, setCurrentId] = useState(0);
   
    const dispatch = useDispatch();
    const classes = useStyles();
    const query = useQuery()
    const history  = useHistory() 
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')
    const[search, setSearch] = useState('')
    const[tags, setTags] = useState([])
    const[toggle, setToggle]=useState(false)
  

   

    const searchPost = ()=>{
        if(search.trim() || tags){
            dispatch(getPostsBySearch({search, tags:tags.join(',')}))
            history.push(`/posts/search?searchQuery=${search ||'none'}&tags=${tags.join(',')}`)
        }

        history.push('/')
        

    }

     const handleKeyPress = (e)=>{
        if(e.keyCode === 13){
           searchPost()
        }
    }

   
 

    const handleAdd = (tag)=>setTags([...tags,tag])

    const handleDelete =(tagToDelete)=>setTags(tags.filter((tag)=>tag!== tagToDelete))

    return (
       <Grow in>       
           <Container maxWidth="xl">

              <Banner/>
              
               <Grid container justify="space-between" alignItems="strech" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField style={{bordeRadius:'20px'}} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e)=>setSearch(e.target.value)} onKeyPress={handleKeyPress} />
                            <ChipInput
                                style={{margin:'10px 0',bordeRadius:'20px'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search Tags"
                                variant="outlined"
                            />
                            <Button onClick={searchPost} variant="contained" className={classes.searchButton}>Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    
                        {(!searchQuery  && !tags.length) && (
                            <Paper className={classes.pagination} elevation={6}>
                                <Paginate page={page} className={classes.pagination}/>
                            </Paper>
                        )}
                       
                    </Grid>
               </Grid>
           </Container>

       </Grow>
    )
}

export default Home
