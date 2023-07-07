import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';



const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


interface Props  {
   color? : "error" | "warning" | "info" |  "success",
   message? : string,
   className? : string,
   isOpen? : boolean,
   time? : number,
   setOpen : any
  //  isOpen: (open: boolean) => void 
}

export default function CustomizedSnackbars(props:Props) {
  const [open, setOpen] = React.useState(props.isOpen);

  React.useEffect(() => {
    setOpen(props.isOpen || false); // Set initial open state based on the isOpen prop
  }, [props.isOpen]);

  const handleClick = () => {
    // setOpen(true);
    // props.setOpen(true); // Call the setOpen function passed as a prop
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar open={open} autoHideDuration={props.time ?? 5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.color} className={props.className} sx={{ width: '100%' }}>
            {props.message}
        </Alert>
      </Snackbar>
 
    </Stack>
  );
}
