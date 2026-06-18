import bcrypt, { hash } from 'bcrypt';

import { findUserByEmail, createUser } from '../repositories/userRepository.js';
import { generateToken } from '../utils/generateToken.js';

export const registerUser = async (name, email, password) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await createUser({ name, email, password: hashedPassword });
    return user;
}

export const loginUser = async (email, password) => {

    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Invalid credentials')
    }

    const token = generateToken(user);
    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        },
    };
};
