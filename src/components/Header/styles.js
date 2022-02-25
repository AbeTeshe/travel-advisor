import { makeStyles} from '@mui/styles';


export default makeStyles((theme) => ({
  title: {
    textAlign: 'center'
  },
  search: {
    marginLeft: '20px',
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#42a5f5',
    display: 'flex',
    alignItems: 'center',
    padding: '7px'
  },
  searchIcon: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center'
  },
  inputRoot: {
    color: 'inherit',
    marginLeft: '30px'
  },
  inputInput: {
    
     
  },
  toolbar: {
    display: 'flex', 
    justifyContent: 'space-between',
  },
}));