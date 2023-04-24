import accountModel, { iAccountModel } from './AccountModel';
import { iAccount } from "./iAccount";

function findByEmail(emailFilter: string){
    return accountModel.findOne<iAccountModel>({
        where: {
            email: emailFilter
        }
    });
}

function addAccount(account: iAccount){
    return accountModel.create(account);
}

function findAll(){
    return accountModel.findAll();
}

export default {
    findByEmail,
    addAccount,
    findAll
}