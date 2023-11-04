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

/**
 * CustomSelect component is a reusable dropdown select component with customizable options.
 *
 * @param {Object} props - The component's properties.
 * @param {Array} props.options - An array of SelectOption objects to populate the dropdown.
 * @param {function} props.onChange - A callback function to handle the selection change.
 * @param {Object} [props.style] - Additional style properties to customize the component's appearance.
 *
 * @returns {JSX.Element} The CustomSelect component that allows the user to select from the provided options.
 */
export default function CustomSelect({ options, onChange, style }: CustomSelectProps) {
  const [value, setValue] = useState('');

  /**
   * Handles the change event when a new value is selected in the dropdown.
   *
   * @param {Object} event - The change event object.
   */
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
        {/* Default "All" option */}
        <MenuItem value="">
          <Typography>All</Typography>
        </MenuItem>
        {/* Map through the provided options and create menu items */}
        {options?.map((option) => (
          <MenuItem value={option.value} key={option.label}>
            <Typography>{option.label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
