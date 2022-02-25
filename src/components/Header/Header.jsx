import React , {useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import useStyles from './styles';

const Header = ({setCoordinates}) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlacesChanged = () => {
    const lat = autoComplete.getPlaces().geometry.location.lat();
    const lng = autoComplete.getPlaces().geometry.location.lng();

    setCoordinates({lat, lng});
  }
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography style={{marginTop:'7px'}} variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>

            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header