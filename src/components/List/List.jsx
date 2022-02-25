import React, {useState, useEffect, createRef} from 'react'
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from "./styles";

const List = ({ places, type, setType, rating, setRating, isLoading, childClicked}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  
  
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, []);

  return (
    <div className={classes.container}>
      <Typography style={{marginBottom: '20px', fontWeight: '900'}} variant="h5">Restaurants, Hotels and Attractions around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem"/>
        </div>
      ): (
      <>
      <FormControl spacing={2} className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select variant="standard" style={{width: "120px", marginRight: "10px"}} value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl spacing={2} className={classes.formControl}>
        <InputLabel>Rating</InputLabel>  
        <Select variant="standard" style={{width: "120px"}} value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid  item key={i} xs={12}>
            <PlaceDetails 
              key={i}
              place={place}
              selected={Number(childClicked) ===i}
              refProp={elRefs[i]}
            />
          </Grid>
        ))}
      </Grid>
      </>)}
    </div>
  )
}

export default List