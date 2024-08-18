import { TextField } from "@mui/material"

function SMInput(props) {
    const {label,type,required,value,onChange}=props
  return (
<>
<TextField id="outlined-basic"
type={type}
label={label}
required={required}
onChange={onChange}
value={value}
varient="outlined"/>

</>
  )
}

export default SMInput