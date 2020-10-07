import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const textColor = "#adadad";
const activeColor = "#f3dfa2";
export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Comfortaa, serif'
        ]
    },
    palette: {
        text: { primary: textColor}
    },
    overrides: {
        MuiInput: {
            underline: {
                "&:before": {
                    borderBottom: `1px solid ${textColor}`
                },
                "&:after": {
                    borderBottom: `2px solid ${activeColor}`
                }
            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: '1px solid ${textColor}',
                "&:after": {
                    borderBottom: `2px solid ${activeColor}`
                }
            }
        }
    }
});