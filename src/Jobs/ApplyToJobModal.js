import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ApplicantForm from './ApplicantForm';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ApplyToJobModal({open, setIsOpen, onSubmit}) {
  const classes = useStyles();

  const renderBody = (
    <div className={classes.paper}>
      <h2 id="apply-modal-title">Apply To Job</h2>
      <ApplicantForm onSubmit={onSubmit} />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setIsOpen(false)}
        aria-labelledby="apply-modal-title"
        aria-describedby="apply-modal-description"
      >
        {renderBody}
      </Modal>
    </div>
  );
}
