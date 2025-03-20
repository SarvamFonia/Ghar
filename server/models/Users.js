import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type : String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password_hash:{
        type: String,
        require: true
    },
    token: {
        type: String,
    },
    role: {
        type: String
    },
    created_at: {
        type: Date
    }
});
const Users = mongoose.model('User', userSchema);
export default Users