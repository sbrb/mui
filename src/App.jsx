import * as React from 'react';
import { Grid, Box } from '@mui/material';

export default function App() {
  return (
    <>
      <h1>Grid</h1>
      {/* <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='yellow' p={5} textAlign='center'>1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='green' p={5} textAlign='center'>2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='red' p={5} textAlign='center'>3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='blue' p={5} textAlign='center'>4</Box>
        </Grid>
      </Grid> */}


      {/* <Grid container spacing={2} direction='row'>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='yellow' p={5} textAlign='center'>1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='green' p={5} textAlign='center'>2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='red' p={5} textAlign='center'>3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='blue' p={5} textAlign='center'>4</Box>
        </Grid>
      </Grid> */}


      {/* <Grid container spacing={2} direction='row' justifyContent='center'>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='yellow' p={5} textAlign='center'>1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='green' p={5} textAlign='center'>2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='red' p={5} textAlign='center'>3</Box>
        </Grid>
      </Grid> */}


      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='yellow' p={5} textAlign='center'>
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor='red' p={5} textAlign='center'>1-1</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor='blue' p={5} textAlign='center'>1-2</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor='green' p={5} textAlign='center'>1-3</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='green' p={5} textAlign='center'>2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='red' p={5} textAlign='center'>3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor='blue' p={5} textAlign='center'>
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor='red' p={5} textAlign='center'>4-1</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor='yellow' p={5} textAlign='center'>4-2</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor='green' p={5} textAlign='center'>4-3</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>


      {/* <h3>Paper</h3>
    <Grid container spacing={4}>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Paper elevation={9}>
          <Box p={5} textAlign="center">1</Box>
        </Paper>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Paper variant="outlined">
          <Box p={5} textAlign="center">2</Box>
        </Paper>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Box bgcolor="red" p={5} textAlign="center">3</Box>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Box bgcolor="blue" p={5} textAlign="center">4</Box>
      </Grid>
    </Grid> */}

      {/* <h3>Card</h3>
    <Grid container spacing={4}>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card>
          <CardHeader title="Card hai ye" subheader="September 14, 2016" />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Material UI 1
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Material UI 2
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Box bgcolor="red" p={5} textAlign="center">3</Box>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Box bgcolor="blue" p={5} textAlign="center">4</Box>
      </Grid>
    </Grid> */}
    </>
  );
}


