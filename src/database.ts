
import { connect } from 'mongoose';
const dbConnection = (async () => {
    try {
        await connect('mongodb+srv://manuel:manuel@cluster0-nnwjz.mongodb.net/test?retryWrites=true&w=majority')
    } catch (e: any) {
        console.log(`mongo connection not possible, cause: ${e.message}`)
    }

});

export default dbConnection;