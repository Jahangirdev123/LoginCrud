import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


function SMbutton(props) {
  const {label,onClick,loading,disabled}=props;
  
    return (
    <>
          <Button sx={{backgroundColor:"black"}} disabled={disabled||loading}
          onClick={onClick}variant="contained">
            {loading && <CircularProgress/>}{label}
            </Button>

    
    </>
  )
}

export default SMbutton