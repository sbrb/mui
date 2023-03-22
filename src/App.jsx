import * as React from 'react';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Box, Stack, Slider } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];
function App() {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        <Slider color="secondary" defaultValue={70} aria-label="slider" />
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />


        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
      </Box>

      <Stack sx={{ height: 300 }} spacing={1} direction="row">
        <Slider
          aria-label="Temperature"
          orientation="vertical"
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          defaultValue={30}
        />
        <Slider
          aria-label="Temperature"
          orientation="vertical"
          defaultValue={30}
          valueLabelDisplay="auto"
          disabled
        />
        <Slider
          getAriaLabel={() => 'Temperature'}
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={[20, 37]}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Stack>
    </>
  );
}

export default App;
