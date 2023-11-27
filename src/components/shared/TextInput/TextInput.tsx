import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { onNumberValidator } from "../../../constants/utils/utils";

export type ITextInputProps = {
  placeholder?: string | React.ReactNode;
  label?: string;
  type?: string;
  required?: boolean;
  labelStyle?: string;
  customStyles?: string;
  onChange?: any;
  value?: any;
  name?: string;
  error?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  extenstion?: React.ReactNode | string;
  isNumber?: string;
  inputRef?: any;
};

const TextInput = ({
  label,
  labelStyle,
  required,
  customStyles,
  error,
  name,
  value,
  icon,
  disabled,
  type,
  placeholder,
  onChange,
  extenstion,
  isNumber,
  inputRef,
}: ITextInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Box className="w-full">
      <Typography
        variant="h1"
        className={`font-SF text-[1rem] font-[600] mb-5 text-[#483D3D] ${labelStyle}`}
      >
        {label} {required && <span className="text-[red]">*</span>}
      </Typography>

      <Box className="mb-7">
        <Box
          component="div"
          className={` relative py-1   bg-black/0 w-full  ${
            error ? "border-red-500" : " border-tableHeader "
          } border border-solid   rounded-[0.75rem] flex items-center  h-[3.5rem] mb-2 ${customStyles} ${
            disabled && "text-black"
          }`}
        >
          {icon && (
            <Box className="absolute top-[36%] left-4 cursor-pointer">
              {icon}
            </Box>
          )}
          <TextField
            placeholder={placeholder as string}
            type={showPassword && type === "password" ? "text" : type}
            className="bg-black/0   rounded-md  MuiOutlinedInput-notchedOutline"
            name={name}
            value={
              type === "date" && value
                ? new Date(value)?.toISOString().split("T")[0]
                : value
            }
            disabled={disabled}
            onChange={
              isNumber
                ? (e: ChangeEvent<HTMLInputElement>) => {
                    onNumberValidator(e, onChange);
                  }
                : onChange
            }
            error={!!error && error.length > 0}
            inputProps={{
              min: new Date()?.toISOString().split("T")[0],
            }}
            inputRef={inputRef}
            //onKeyDown={onKeyDown}
          />
          {type === "password" && (
            <Box
              onClick={handleClickShowPassword}
              className="absolute top-[36%] right-4 cursor-pointer"
            >
              {showPassword ? (
                <BsEyeSlash />
              ) : (
                <BsEye className="text-[20px]" />
              )}
            </Box>
          )}

          {extenstion && (
            <Box className="w-[30%] h-[54px]    cursor-pointer">
              {extenstion}
            </Box>
          )}
        </Box>

        {error && (
          <Typography
            variant="body1"
            className=" text-primaryRed font-SF font-[400] text-[14px] leading-[20px] capitalize"
          >
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TextInput;
