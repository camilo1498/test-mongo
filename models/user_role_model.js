const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userRoleSchema = new Schema({
    roleName: String,
    roleDescription: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

userRoleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

userRoleSchema.plugin(uniqueValidator)

const UserRoleModel = model('user_role', userRoleSchema)


module.exports = UserRoleModel