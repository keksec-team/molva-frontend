import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const CustomInputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'var(--text-color-gray)',
        },
        '& label.MuiFormLabel-root': {
            color: 'var(--text-color-gray)',
            fontFamily: 'Comfortaa'
        },
        '& .MuiFilledInput-underline.Mui-error:after': {
            borderColor: '#f44336',
        },
        '& .Mui-error': {
            color: "#f44336",
            fontFamily: 'Comfortaa',
        },
        '& .MuiInputBase-root': {
            backgroundColor: 'var(--background-color-dark)',
            color: "var(--text-color-gray)",
            fontFamily: 'Comfortaa',
        },
        '& .MuiInputBase-root:hover': {
            backgroundColor: 'rgba(0,0,0,0.2)',
        },
        '& .MuiFilledInput-underline:before': {
            borderColor: 'var(--text-color-gray-light)',
        },
        '& .MuiFilledInput-underline:after': {
            borderColor: 'var(--highlighted-text)',
        },
        '& .MuiFilledInput-root': {
            '& fieldset': {
                borderColor: 'var(--text-color-gray-light)',
            },
            '&:hover fieldset': {
                borderColor: 'var(--highlighted-text)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--highlighted-text)',
            },
        },
    },
})(TextField);
export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    }
}));


