// imports from packages
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';

// import page layout
import { PageLayout } from "./GenericComponents/PageLayout";

// import page components

const Pages = (props) => {

  return(
    <Routes>
      <Route path='/' element={<p>Test Div</p>}/>
    </Routes>
  );
}

function App() {
  return (
    <>
      <PageLayout>
        <Grid container justifyContent="center" alignContent="center">
          <Pages/>
        </Grid>
      </PageLayout>
    </>
  );
}

export default App;
