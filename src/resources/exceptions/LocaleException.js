export function LocaleException(message) {
    const error = new Error(message);

    error.code = "NO_SUCH_LOCALE";
    return error;
}

LocaleException.prototype = Object.create(Error.prototype);
