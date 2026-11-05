class ValidationError extends Error{
    constructor(statusCode, message){
        super(message);
        this.name = "ValidationError";
        this.statusCode = statusCode;
    }
}

export default ValidationError;