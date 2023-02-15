import app from './app';
import database from './database/data';

(async () => {

    try {

        const port = parseInt(`${process.env.PORT}`);

        await database.sync();
        console.log(`Running database ${process.env.DB_NAME}`);

        app.listen(port, () => {
            console.log('Running on port ' + port);
        });   

    } catch (error) {
        console.log(`Erro na classe server.ts. Message: ${error}`);
    }

})();