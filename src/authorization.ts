import jwt, { VerifyOptions } from 'jsonwebtoken';
import fs from 'fs';

const privateKey = fs.readFileSync('./keys/private.key', 'utf-8');
const publicKey = fs.readFileSync('./keys/public.key', 'utf-8');
const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
const jwtAlgorithm = "RS256";
type Token = { accountId: number }

function sing(accountId: number){
    const token : Token = { accountId }

    return jwt.sign(token, privateKey, {
        expiresIn: jwtExpires, 
        algorithm: jwtAlgorithm
       });
}

async function verify(token: string){
    try {
        const decoded : Token = await jwt.verify(token, publicKey, { algorithms: [jwtAlgorithm] } as VerifyOptions) as Token;
        return { accountId: decoded.accountId }
    } catch (error) {
        console.log(`verify: ${error}`);
        return null;
    }
}

export default {
    sing,
    verify
}