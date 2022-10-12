import React, { useRef } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Teacher() {

    const [studentFName, setStudentFName] = useState("");
    const [studentLName, setStudentLName] = useState("");
    const [studentDetails, setStudentDetails] = useState([]);
    const studentFNInput = useRef(null);
    const studentLNInput = useRef(null);
    const searchStudent = () => {
        console.log("🚀 ~ file: Teacher.js ~ line 14 ~ Teacher ~ studentFName", studentFName)
        console.log("🚀 ~ file: Teacher.js ~ line 15 ~ Teacher ~ studentLName", studentLName)
        axios.post('http://localhost:3001/searchStudent', { studentFName: studentFName, studentLName: studentLName })
            .then((Response) => {
                console.log("🚀 ~ file: Teacher.js ~ line 11 ~ searchStudent ~ Response", Response)
                setStudentDetails(Response.data)
            }
        )
        studentFNInput.current.value = '';
        studentLNInput.current.value = '';
    }

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
                    sm={12}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        inputRef={studentFNInput}
                        label="First Name"
                        variant="outlined"
                        onChange={(event) => {
                            setStudentFName(event.target.value);
                        }}
                    />
                    <TextField
                        inputRef={studentLNInput}
                        label="Last Name"
                        variant="outlined"
                        onChange={(event) => {
                            setStudentLName(event.target.value);
                        }}
                    />
                    <Button variant="contained" onClick={searchStudent}>Search</Button>

                </Box>

            </div>
        </>
    );
}

export default Teacher