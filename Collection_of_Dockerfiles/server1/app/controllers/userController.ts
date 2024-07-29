import { RequestHandler } from 'express'; 
import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient(); 

export const createUser: RequestHandler = async (req, res, next) => { 
  const { username, password, email } = req.body; 
  try { 
    const newUser = await prisma.user.create({ 
      data: { 
        username: username, 
        password: password, 
        email: email,
      }, 
    }); 
    return res.status(201).json({ message: "Created user!", user: newUser }); 
  } catch (error) { 
    next(error); 
  } 
};

