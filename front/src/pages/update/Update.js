import React from 'react'
import { Container } from '@mui/system'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Navbar from "../../components/navbar/Navbar.js"

const Update = () => {
  return (
    <div>
      <Navbar />
<Container


>
<h2>Create A Note</h2>

<TextField id="standard-basic"
label="Title"
variant='outlined'
fullWidth
sx={{
    marginTop: "14px"
}}

/>

<form autoCapitalize='off'>
<TextField
label="Description"
variant='outlined'
fullWidth
multiline
rows={4}
sx={{
    marginTop: "14px"
}}

/>

<InputLabel
id="demo-multiple-name-label"


>Name</InputLabel>
<Select
multiple
value="Sports"

>



</Select>


<Button
sx={{
    padding: "20px",
    marginTop: "20px"
}}
>Submit</Button>

</form>
</Container>
</div>
  )
}

export default Update