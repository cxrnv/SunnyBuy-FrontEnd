export interface GetCart 
{
    cartId     : number;
    productId  : string;
    datetime   : Date;
    image      : string;
    name       : string;
    price      : number;
    detail     : string;
    deleted    : boolean;
    total      : number;
    count      : number;
}