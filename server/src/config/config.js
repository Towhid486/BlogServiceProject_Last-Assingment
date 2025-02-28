export const PORT=2080;
export const DATABASE="mongodb+srv://devtowhid:devtowhid486@cluster01.j4mr8.mongodb.net/BlogServicesProject?retryWrites=true&w=majority";

export const JWT_SECRET = "5EC7CEFA1BE7C9354A639369A2AA8";
export const JWT_EXPIRATION_TIME = 60*60*24*30;

export const EMAIL_HOST = "smtp.titan.email";
export const EMAIL_PORT = "465";
export const EMAIL_USER = "support@laravelpoint.com";
export const EMAIL_PASSWORD = "Rup77_4827";
export const MAIL_ENCRYPTION = "ssl";

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 10*60*1000; //15 minute
export const REQUEST_LIMIT_NUMBER = 600; // Per 15 Minute 6000 Request Allowed

export const WEB_CACHE=false;

export function UPLOAD_FOLDER(fileName){
    return path.resolve(process.cwd(), 'storage', fileName)
}