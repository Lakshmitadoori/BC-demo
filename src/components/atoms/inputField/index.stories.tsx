import { Button, IconButton, InputAdornment } from "@mui/material";
import { InputField, InputFieldProps } from ".";
import { Meta, Story } from "@storybook/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const meta: Meta = {
  title: "atoms/InputField",
  component: InputField
};
export default meta;
const Templete: Story<InputFieldProps> = (args) => <InputField {...args} />;
export const Default = Templete.bind({});
Default.args = {
  variant: "outlined",
  label: "First name"
};
export const DateField = Templete.bind({});
DateField.args = {
  variant: "outlined",
  type: "date",
  label: "Date",
  sx: { width: "15rem" },
  InputLabelProps: { shrink: true }
};
export const PasswordVisibleOff = Templete.bind({});
PasswordVisibleOff.args = {
  variant: "outlined",
  type: "password",
  label: "Password",
  endAdornment: (
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" edge="end">
        <Visibility />
      </IconButton>
    </InputAdornment>
  )
};
export const PasswordVisible = Templete.bind({});
PasswordVisible.args = {
  variant: "outlined",
  type: "text",
  label: "Password",
  endAdornment: (
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" edge="end">
        <VisibilityOff />
      </IconButton>
    </InputAdornment>
  )
};