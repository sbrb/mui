import * as React from 'react';
import { FormatAlignLeft, FormatAlignCenter, FormatAlignRight, FormatAlignJustify, FormatBold, FormatItalic, FormatUnderlined, FormatColorFill, ArrowDropDown, Assignment, Pageview, Folder } from '@mui/icons-material';
import { styled, Divider, Paper, ToggleButtonGroup, ToggleButton, Avatar, Stack, AvatarGroup } from '@mui/material';
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      {/* Toggle Button */}
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeft />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenter />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRight />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustify />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFill />
            <ArrowDropDown />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>

      {/* Avatar */}
      {/* Letter avatars */}
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Stack>

      {/* Icon avatars */}
      <Stack direction="row" spacing={2}>
        <Avatar>
          <Folder />
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <Pageview />
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }}>
          <Assignment />
        </Avatar>
      </Stack>

      {/* Image avatars */}
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
      </Stack>

      {/* Total avatars */}
      <AvatarGroup total={24}>
        <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="https://mui.com//static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/5.jpg" />
      </AvatarGroup>
    </>
  );
}


