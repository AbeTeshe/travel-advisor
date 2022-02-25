import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions} from '@mui/material';
import {LocationOn, Phone} from '@mui/icons-material';
import Rating from '@mui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({place, selected, refProp}) => {
const classes = useStyles();

if(selected) refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"});

  return (
    <Card elevation={6}>
      <CardMedia 
        style={{height: 350, marginTop: '20px'}}
        image={place.photo ? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
         <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">Out of {place.num_reviews} reviews</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award, i) => (
          <Box key={i} my={1}  display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {/* {place?.cuisine?.map(({name}) => (
          <Chip key={name} size="small" label={name} className={classes.chip}/>
        ))} */}
        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
            <LocationOn /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
            <Phone /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions> 
      </CardContent>
    </Card>
  )
}

export default PlaceDetails;