import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    jType: String,
    password: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;