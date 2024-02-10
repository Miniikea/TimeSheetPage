import { AppBar, Box, Toolbar, Typography } from '@mui/material';

function NavBar(props) {

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        Beyond Expectations Timesheet Manager
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;