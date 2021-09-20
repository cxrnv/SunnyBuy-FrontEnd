export interface Employee 
{
    employeeId     : number;
    name           : string;
    email          : string;
    password       : string;
    image          : string | ArrayBuffer;
    position       : string;
    personTypeEnum : number;
}