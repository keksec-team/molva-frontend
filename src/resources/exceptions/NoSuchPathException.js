export function NoSuchPathException(message) {
    const error = new Error(message);

    error.code = "NO_SUCH_PATH";
    return error;
}

NoSuchPathException.prototype = Object.create(Error.prototype);
