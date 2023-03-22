import { Stack, Button, IconButton, ButtonGroup, Fab, Checkbox, FormControlLabel, Radio, FormControl, FormLabel, RadioGroup, Rating, Select, InputLabel, MenuItem, Box } from '@mui/material';
import { Delete, Add, Edit, Favorite, Navigation, FavoriteBorder } from '@mui/icons-material';
import * as React from 'react';
import "./App.css";


function App() {
  // select start
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // select end

  return (
    <div className="App">
      <h2>Button</h2>
      <Stack spacing={2} direction="row">
        <Button color="primary" variant="text">Text</Button>
        <Button color="secondary" variant="contained">Contained</Button>
        <Button color="error" variant="outlined">Outlined</Button>
      </Stack>

      <h2>button size</h2>
      <Stack spacing={2} direction="row">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Stack>

      <h2>button box</h2>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" size="small"> Small </Button>
        <Button variant="contained" size="medium" disabled> Medium </Button>
        {/* customised */}
        <Button className='ss' variant="contained" size="large" href='https://google.com'> Link </Button>
      </Stack>

      <h2>Button with icon</h2>
      <Stack spacing={2} direction="row">
        <Button color="warning" variant="contained" startIcon={<Delete />}> Contained </Button>
        <Button color="warning" variant="contained" endIcon={<Delete />}> Contained </Button>
        {/*  Icon Button with custom style*/}
        <IconButton
          style={{ color: 'green' }}
          onClick={() => { alert('clicked') }}
        >
          <Delete />
        </IconButton>
      </Stack>


      <h2> Button Group</h2>
      <Stack spacing={2} direction="row">
        {/* Horizantal */}
        <div>
          <ButtonGroup variant="outlined" >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>

        {/* Vertical */}
        <ButtonGroup
          variant="contained"
          orientation='vertical'
          color='secondary'
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>


      <h2>Floating Action Button</h2>
      <Stack spacing={2} direction="row">
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <Edit />
        </Fab>
        <Fab variant="extended">
          <Navigation sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like">
          <Favorite />
        </Fab>
      </Stack>


      <h2> Checkbox </h2>
      <Stack spacing={2} direction="row">
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />
        <Checkbox defaultChecked color='success' />
        <Checkbox indeterminate />
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteBorder />} />
        <Checkbox onChange={() => alert('checked')} />
        <FormControlLabel control={<Checkbox />} label="I agree" labelPlacement="top" />
        <FormControlLabel control={<Checkbox />} label="I agree" labelPlacement="start" />
        <FormControlLabel control={<Checkbox />} label="I agree" labelPlacement="bottom" />
        <FormControlLabel control={<Checkbox />} label="I agree" labelPlacement="end" />
      </Stack>


      <h2> Radio Button </h2>
      <Stack spacing={2} direction="row">
        <FormControl>
          <FormLabel id="abc">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="abc"
            name="xyz"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
      </Stack>


      <h2> Rating  </h2>
      <Stack spacing={2} direction="row">
        <Rating />
        <Rating value={2} />
        <Rating value={4} readOnly/>
        <Rating defaultValue={1.5} precision={0.5} />
      </Stack>


      <h2> Select </h2>
        <Box sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
            <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

    </div>
  );
}

export default App;


