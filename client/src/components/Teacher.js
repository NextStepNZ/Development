import React, { useRef } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
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
            .then((response) => {
                setStudentDetails(response.data)
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
                    component={Paper}
                    sm={12}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        component={Paper}
                        inputRef={studentFNInput}
                        label="First Name"
                        variant="outlined"
                        onChange={(event) => {
                            setStudentFName(event.target.value);
                        }}
                    />
                    <TextField
                        component={Paper}
                        inputRef={studentLNInput}
                        label="Last Name"
                        variant="outlined"
                        onChange={(event) => {
                            setStudentLName(event.target.value);
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={searchStudent}
                        component={Paper}
                    >Search</Button>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="studentSearchResultTable">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">First Name</TableCell>
                                <TableCell align="left">Last Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Username</TableCell>
                                <TableCell align="left">GroupID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {studentDetails.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.LastName}</TableCell>
                                    <TableCell align="left">{row.FirstName}</TableCell>
                                    <TableCell align="left">{row.Email}</TableCell>
                                    <TableCell align="left">{row.Username}</TableCell>
                                    <TableCell align="left">{row.GroupID}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default Teacher