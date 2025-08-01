import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipCode: String
}, { _id: false });

const providerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email']
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        match: [/^\+?[1-9]\d{1,14}$/]
    },
    serviceType: {
        type: String,
        enum: ['Electrician', 'Plumber', 'Carpenter', 'Cleaner', 'Technician'],
        required: true
    },
    address: addressSchema,
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Provider = mongoose.model('Provider', providerSchema);
export default Provider;