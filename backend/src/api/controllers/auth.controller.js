import jwt from 'jsonwebtoken';
import User from '../../infrastructure/db/models/user.model.js';

const createToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
};

export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already exists' });

        const user = await User.create({ name, email, password, role });

        const token = createToken(user._id);

        res.status(201).json({
            status: 'success',
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = createToken(user._id);

        res.status(200).json({
            status: 'success',
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}