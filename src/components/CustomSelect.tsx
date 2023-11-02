import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { InputLabel, SxProps, Typography } from '@mui/material';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  style?: SxProps
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange, style }) => {



  return (
    <FormControl sx={{ minWidth: 150, ...style }}>
      <InputLabel id="simple-select-label">Language</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={value}
        onChange={onChange}
        label="Language"
      >
        <MenuItem value="">
          <Typography>All</Typography>
        </MenuItem>
        {options.map((option) =>
          <MenuItem value={option.value}><Typography>{option.label}</Typography></MenuItem>
        )}

      </Select>
    </FormControl >


  );
};

export default CustomSelect;
