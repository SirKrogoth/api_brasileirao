import { DestroyOptions } from "sequelize";
import accountModel, { iAccountModel } from './AccountModel';
import { iAccount } from "./iAccount";

function findByEmail(emailFilter: string){
    return accountModel.findOne<iAccountModel>({
        where: {
            email: emailFilter
        }
    });
}

function add(account: iAccount){
    return accountModel.create(account);
}

export default {
    findByEmail,
    add
}