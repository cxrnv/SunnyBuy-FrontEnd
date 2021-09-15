export interface Client 
{
    clientId    : number;
    clientCpf?  : string;
    image       : string | ArrayBuffer;
    disabled    : boolean;
    name        : string;
    email       : string;
    password    : string;
    address     : string;
    phone       : string;
}