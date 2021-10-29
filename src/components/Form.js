import React from "react";
import FormControl from "@material-ui/core/FormControl";
import "../styles.css";
import {
  RadioGroup,
  Checkbox,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  InputLabel,
  TextField,
} from "@material-ui/core";

const zones = [
  "Ikeja",
  "Agege",
  "Ikorodu",
  "Island",
  "Mainland 1",
  "Mainland 2",
];

const orderOfImportance = ["Urgent", "High", "Low"];

const Form = () => {
  return (
    <div className="formDiv">
      <div className="formHeader">
        <h3 className="h3">Please enter your details below</h3>
        <p>
          Disclaimer: Any information inputted is confidential and not to be
          re-shared with any party.
        </p>
      </div>

      <form>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="type" name="row-radio-buttons-group">
            <FormControlLabel
              value="individual"
              control={<Radio />}
              label="Individual"
            ></FormControlLabel>
            <FormControlLabel
              value="corporate"
              control={<Radio />}
              label="Corporate"
            ></FormControlLabel>
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormControlLabel
            value="family"
            control={<Checkbox />}
            label="Add a family member"
          ></FormControlLabel>
        </FormControl>
        <div className="formInput">
          <TextField
            id="outlined-number"
            label="First Name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div className="formInput">
          <TextField
            id="outlined-number"
            label="Last Name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div className="formInput">
          <TextField
            id="outlined-number"
            label="Email Address"
            type="email"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div className="formInput">
          <TextField
            id="outlined-number"
            label="NIN Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div className="formInput">
          <FormControl
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          >
            <InputLabel required htmlFor="zones">
              Zones
            </InputLabel>
            <Select
              label="Zones"
              inputProps={{
                id: "zones",
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
          <FormControl
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          >
            <InputLabel required htmlFor="importance">
              Order of importance
            </InputLabel>
            <Select
              label="importance"
              inputProps={{
                id: "importance",
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
          <FormControl
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          >
            <InputLabel required htmlFor="limited">
              Limited importance
            </InputLabel>
            <Select
              label="Limited Importance"
              inputProps={{
                id: "zones",
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
          <div className="formInput">
            <button className="submitButton">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
