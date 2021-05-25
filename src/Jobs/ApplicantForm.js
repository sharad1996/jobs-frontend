import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { values } from 'mobx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ApplicantForm({onSubmit}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({});

  const handleChange = (key, value) => {
    setValues({...values, [key]: value});
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          variant="outlined"
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          variant="outlined"
          onChange={(e) => handleChange('number', e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSubmit(values)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
