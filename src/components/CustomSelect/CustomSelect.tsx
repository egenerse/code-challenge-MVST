import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { InputLabel, SxProps, Typography } from '@mui/material';
import { useState } from 'react';

export type SelectOption = {
  value: string;
  label: string;
};

interface CustomSelectProps {
  options: SelectOption[];
  onChange: (newSelectedLanguage: string) => void;
  style?: SxProps;
}

export default function CustomSelect({ options, onChange, style }: CustomSelectProps) {
  const [value, setValue] = useState('');

  const handleOnChange = (event: SelectChangeEvent<string>) => {
    const newSelectedLanguage = event.target.value;
    setValue(newSelectedLanguage);
    onChange(newSelectedLanguage);
  };

  return (
    <FormControl sx={{ minWidth: 150, ...style }}>
      <InputLabel id="simple-select-label">Language</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={value}
        onChange={handleOnChange}
        label="Language"
        inputProps={{ style: { padding: 0, margin: 0 } }}
      >
        <MenuItem value="">
          <Typography>All</Typography>
        </MenuItem>
        {options?.map((option) => (
          <MenuItem value={option.value}>
            <Typography>{option.label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
