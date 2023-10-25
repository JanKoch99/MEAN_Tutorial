import mongoose, {Schema} from "mongoose"

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        profileImage: {
            type: String,
            required: false,
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclX4cwjSC1Q0tZ34HzFhC-ietlIVtTEpinoP5kWGDcFh0UeLAprNDirBqDXAiNRap2gk&usqp=CAU'
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        roles: {
            type: [Schema.Types.ObjectId],
            required: true,
            ref: "Role"
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', UserSchema)