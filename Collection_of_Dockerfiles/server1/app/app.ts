import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import bookRouter from './routers/bookRouter';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
const GOOGLE_LOGIN_REDIRECT_URI = 'http://localhost:3000/login/redirect';
const GOOGLE_SIGNUP_REDIRECT_URI = 'http://localhost:3000/signup/redirect';

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Root page
app.get('/', (req: Request, res: Response) => {
    res.send(`
        <h1>OAuth</h1>
        <a href="/login">Log in</a>
        <a href="/signup">Sign up</a>
    `);
});

// Login redirect
app.get('/login', (req: Request, res: Response) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${GOOGLE_CLIENT_ID}`;
    url += `&redirect_uri=${GOOGLE_LOGIN_REDIRECT_URI}`;
    url += '&response_type=code';
    url += '&scope=email profile';
    res.redirect(url);
});

// Signup redirect
app.get('/signup', (req: Request, res: Response) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${GOOGLE_CLIENT_ID}`;
    url += `&redirect_uri=${GOOGLE_SIGNUP_REDIRECT_URI}`;
    url += '&response_type=code';
    url += '&scope=email profile';
    res.redirect(url);
});

// Handle Google login redirect
app.get('/login/redirect', (req: Request, res: Response) => {
    const code = req.query.code as string | undefined;
    console.log(`code: ${code}`);
    res.send('ok');
});

// Handle Google signup redirect
app.get('/signup/redirect', async (req: Request, res: Response) => {
    const code = req.query.code as string | undefined;

    if (!code) {
        return res.status(400).send('Invalid code');
    }

    console.log(`code: ${code}`);

    try {
        // Exchange authorization code for access token
        const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
        const tokenResponse = await axios.post(GOOGLE_TOKEN_URL, new URLSearchParams({
            code,
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            redirect_uri: GOOGLE_SIGNUP_REDIRECT_URI,
            grant_type: 'authorization_code',
        }).toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        // Fetch user info
        const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v2/userinfo';
        const userInfoResponse = await axios.get(GOOGLE_USERINFO_URL, {
            headers: {
                Authorization: `Bearer ${tokenResponse.data.access_token}`,
            },
        });

        res.json(userInfoResponse.data);
    } catch (error) {
        console.error('Error fetching Google user info:', error);
        res.status(500).send('Error fetching user info');
    }
});

// Use routers
app.use('/users', userRouter);
app.use('/books', bookRouter);

export default app;