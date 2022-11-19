

export class ApiError extends Error{
    status;
    error;

    constructor(status, message: string, error = []) {
        super(message);
        this.status = status;
        this.error = error;
    }

    static UnauthorizedError(){
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static BadRequest(message, errors=[]){
        return new ApiError(400, message, errors)
    }
}

