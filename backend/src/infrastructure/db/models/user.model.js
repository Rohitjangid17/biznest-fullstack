import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters'],
            maxlength: [50, 'Name cannot exceed 50 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            validate: [validator.isEmail, 'Please provide a valid email address'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters'],
            select: false,
        },
        role: {
            type: String,
            enum: ['admin', 'provider', 'customer'],
            default: 'customer',
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date,
        phone: {
            type: String,
            trim: true,
            validate: {
                validator: v => /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v),
                message: props => `${props.value} is not a valid phone number!`,
            },
        },
        avatarUrl: {
            type: String,
            validate: [validator.isURL, 'Invalid URL'],
        },
    },
    { timestamps: true }
);

// Hash password before saving, only if password changed
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    // Update passwordChangedAt timestamp
    this.passwordChangedAt = Date.now() - 1000;
    next();
});

// Instance method: Check entered password is correct
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

// Instance method: Check if password changed after JWT was issued
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimestamp < changedTimestamp;
    }
    return false;
};

export default mongoose.model('User', userSchema);
