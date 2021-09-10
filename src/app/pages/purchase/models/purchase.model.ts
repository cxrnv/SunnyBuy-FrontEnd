export interface Purchase 
{
    purchaseId      : number;
    complete        : number;
    paymentTypeEnum : number; 
    clientId        : number;
    creditCardId    : string;
    operator        : string;
    number          : string;
    name            : string;
    email           : string;
    address         : string;
    total           : number;
    datePurchase    : Date;
    product_name    : string;
    
}