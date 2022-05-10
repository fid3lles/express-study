import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:QfzJl85dPAq48Scw@nodestudies.7b2qp.mongodb.net/gabriel-node?retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;