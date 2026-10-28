import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value) {
  return `${value}`;
}


//export const Sidebar = ({button, setButton}) => (
//  <div className="aside">
//    <aside>
//      <p>Lat: {button.geometry?.coordinates?.[1] ?? ""}</p>
//      <p>Lon: {button.geometry?.coordinates?.[0] ?? ""}</p>
//      <p>Ort: {button.properties?.place ?? ""}</p>
//      <p>Magnitude: {button.properties?.mag ?? ""}</p>
//      <p>Datum: {button.properties?.time
//  ? new Date(button.properties.time).toLocaleString()
//  : ""}</p>
//      </aside>
//  </div>
//); 

export default function Sidebar({button, slider, setSlider}) {
  const handleChange = (event, newValue) => {
  setSlider(newValue);
  return (
    console.log (newValue)
  )
};

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
          Erdbebendetails
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
         <div className="aside">
          <aside>
          <p>Lat: {button.geometry?.coordinates?.[1] ?? ""}</p>
          <p>Lon: {button.geometry?.coordinates?.[0] ?? ""}</p>
          <p>Ort: {button.properties?.place ?? ""}</p>
          <p>Magnitude: {button.properties?.mag ?? ""}</p>
          <p>Datum: {button.properties?.time ? new Date(button.properties.time).toLocaleString() : ""}</p>
        <Box sx={{ width: 200, p: 2 }}>
          <Slider
            aria-label='Faktor'
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            value={slider}
            step={0.5}
            shiftStep={1}
            marks
            min={1}
            max={3}
            onChange={handleChange}
            >
          </Slider>
        </Box>
          </aside>
         </div>
        </Typography>
        </CardContent>
        
    </Card>
  );
}