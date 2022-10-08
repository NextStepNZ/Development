import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, Grid, Button} from "@mui/material";

function Teacher() {
    return (
        <>
            <div className="App">

                <Typography variant="h2" gutterBottom>
                    Teacher Panel
                </Typography>

                <Typography variant="h5" gutterBottom>
                    Student Search
                </Typography>

                <Box
                    component="form"
                    sx={10}
                    noValidate
                    autoComplete="off"
                >

                            <TextField id="studentIDInput" label="ID Number" variant="outlined" />

                            <TextField id="studentFNInput" label="First Name" variant="outlined" />

                            <TextField id="studentLNInput" label="Last Name" variant="outlined" />

                            <Button variant="contained">Search</Button>

                </Box>

            </div>
        </>
    );
}

export default Teacher