import express from 'express'
import Users from '../models/Users.js';
import bcryptjs from 'bcryptjs'
const router = express.Router()

router.post('/register', async (req, res, next) => {
    console.log('inside post')
    console.log(req.body)
    try {
        const { name, email, password_hash } = req.body;
        if (!name || !email || !password_hash) {
            res.status(400).send('Please fill all required fields.');

        } else {
            const isAlreadyExists = await Users.findOne({ email: email });

            if (isAlreadyExists) { 
                res.status(400).send('User Already Exists.')
            } else {
                const newUser = new Users({ name, email });
                bcryptjs.hash(password_hash, 10, (err, hashedPassword) => {
                    newUser.set('password', hashedPassword);
                    newUser.save()
                    next();
                })
                return res.status(200).json({message:'User Registered Successfully'})
            }
        }
    } catch (err) {
        console.log(err)
    }
})

router.post('/login', async (req, res, next) => {
    // console.log('inside post')
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send('Please fill all required fields.');

        } else {
            const user = await Users.findOne({ email: email });

            if (!user) {
                res.status(400).send('User Email or Password is Incorrect.')
            } else {
                const validateUser = await bcryptjs.compare(password, user.password);
                if (!validateUser) {
                    res.status(400).send('User Email or Password is Incorrect.')
                } else {
                    const payload = {
                        userId: user._id,
                        email: user.email
                    }
                    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_A_JWT_SECRET_KEY';

                    jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 84600 }, async (err, token) => {
                        await Users.updateOne({ _id: user._id }, {
                            $set: { token }
                        })
                        user.save();
                        return res.status(200).json({ user: { id: user._id, email: user.email, fullName: user.fullName }, token: token })
                        // next();
                    })

                }
            }
        }
    } catch (err) {
        console.log(err)
    }
})

export default router