import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '90vh', width: '100%',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-200%, -200%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
}));