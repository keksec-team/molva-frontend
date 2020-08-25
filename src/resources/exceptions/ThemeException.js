export function ThemeException(message) {
    const error = new Error(message);

    error.code = "NO_SUCH_THEME";
    return error;
}

ThemeException.prototype = Object.create(Error.prototype);