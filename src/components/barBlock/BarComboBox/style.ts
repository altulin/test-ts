export const sx = {
  width: "100%",
  borderRadius: "0.3125rem",

  "& .MuiOutlinedInput-root": {
    pt: "0.1875rem",
    pb: "0.1875rem",
  },
  "& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment": {
    display: "flex",
    alignItems: "center",
    right: 0,
    top: 0,
    height: "100%",
    borderRadius: "0",
  },
  "&  .MuiAutocomplete-popupIndicator": {
    borderRadius: "0 0.3125rem 0.3125rem 0",
    width: "1.75rem",
    alignSelf: "stretch",
    bgcolor: "#072659",
    mr: 0,
  },
  "&  .MuiAutocomplete-popupIndicator:hover": {
    bgcolor: "#072659",
  },
  "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
    p: 0,
  },
};
