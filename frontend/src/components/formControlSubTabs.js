import * as React from "react";
import { useRadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

export const PreStyledFormControlLabel = styled((props) => (
  <FormControlLabel
    {...props}
    sx={{
      mx: 1,
      ".MuiFormControlLabel-label": {
        fontFamily: "Roboto , Helvetica , Arial , sans-serif",
        fontSize: "14px",
        fontWeight: "200",
        margin: "auto",
        padding: "0.5em",
        width: "8em",
        border: "1px solid",
        borderColor: "#F27C38",
        borderRadius: "8px",
        textAlign: "center",
        //to change onChecked
        color: "#F27C38",
        backgroundColor: "white",
      },
    }}
  />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: "white",
    backgroundColor: "#F27C38",
  },
}));

export function StyledFormControlLabel(props) {
  // MUI UseRadio Group
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <PreStyledFormControlLabel checked={checked} {...props} />;
}
