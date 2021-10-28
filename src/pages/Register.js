import React from 'react'
import { RadioGroup, Checkbox, TextField, Select, MenuItem, FormControlLabel, Radio, InputLabel} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import '../styles.css';

const Register = () => {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const formInputs = [
        {value: 'firstName', text: 'First name', type:'text'},
        {value: 'lastName', text: 'Last name',type:'text'},
        {value: 'ninNumber', text: 'NIN Number', type:'number'},
        {value: 'emailAddress', text: 'Email Address', type:'email'},
    
    ];

    
  const renderFormInputs =  formInputs.map(formInput => {
        return <div className="formInput">
      <TextField
          required
          id="outlined-required"
          label={formInput.text}
          type={formInput.type}
          value={value}
          variant="outlined"
          defaultValue={formInput.text}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
        ;
    });



    const zones = [
                'Ikeja',
                'Agege',
                'Ikorodu',
                'Island',
                'Mainland 1',
                'Mainland 2'
      ];
    const orderOfImportance = [
        'Urgent',
        'High',
        'Low'
    ];  
    return (
        <div>
        <div className="header">
                <div className="overlay"></div>
                <div className="headerContent">
                        <button variant="contained" className="topButton">
                            Register user
                        </button>
                        <div className='topHeading'>
                            Register to become a chef in your neighborhood
                        </div>
                </div>
             </div>
            <div className="formDiv">
            <div className="formHeader">
                <h3 className="h3">Please enter your details below</h3>
                <p>Disclaimer: Any information inputted is confidential and not to be re-shared with any party.</p>
            </div>
          <form>
                <FormControl component="fieldset">
                            <RadioGroup row aria-label="type" name="row-radio-buttons-group">
                            <FormControlLabel 
                            value="individual" 
                            control={<Radio />}
                            label="Individual">
                            </FormControlLabel>
                            <FormControlLabel 
                            value="corporate" 
                            control={<Radio />}
                            label="Corporate">
                            </FormControlLabel>                            
                            </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                <FormControlLabel 
                            value="family" 
                            control={<Checkbox />}
                            label="Add a family member">
                   </FormControlLabel>
                </FormControl>
                {renderFormInputs}
                <div className="formInput">
                <FormControl variant="outlined"
                    InputLabelProps={{
                                shrink: true,
                            }}
                    >
                <InputLabel required htmlFor="zones">Zones</InputLabel>
                    <Select
                    label="Zones"
                    inputProps={{
                        id: 'zones',
                    }}
                    variant="outlined"
                    >
                    {zones.map((zone) => (
                        <MenuItem key={zone} value={zone}>
                        {zone}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                </div>
                <div className="formInput">
                <FormControl variant="outlined"
                    InputLabelProps={{
                                shrink: true,
                            }}
                    > 
                    <InputLabel required htmlFor="importance">Order of importance</InputLabel>
                    <Select
                    label="importance"
                    inputProps={{
                        id: 'importance',
                    }}
                    variant="outlined"

                    >

                    {orderOfImportance.map((importance) => (
                        <MenuItem key={importance} value={importance}>
                        {importance}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                </div>
                <div className="formInput">
                <FormControl variant="outlined"
                    InputLabelProps={{
                                shrink: true,
                            }}
                    >
                     <InputLabel required htmlFor="zones">Limited importance</InputLabel>
                    <Select
                    label="Zones"
                    inputProps={{
                        id: 'zones',
                    }}
                                        variant="outlined"

                    >

                    {zones.map((zone) => (
                        <MenuItem key={zone} value={zone}>
                        {zone}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                    <div className="formInput">
                    <button className="submitButton">
                                Submit
                    </button>
                    </div>
                    
               </div>
                </form>
                
            </div>
            <div className="footer">
                        <div className="footerElements">
                           <h3 className="footerHeading">Contact:</h3> 
                           <p className="footerItems"> <i className="fa fa-phone"></i> 07012345678</p>
                           <p className="footerItems"> <i className="fa fa-envelope	
"></i> customercare@gmail.com</p>
                        </div>
                </div>
        </div>
    )
}

export default Register;
