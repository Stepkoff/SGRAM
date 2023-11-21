import z from "zod";

// USER =============================== 
export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(30, { message: "Name must be maximum 30 characters." }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(30, { message: "Username must be maximum 30 characters." }),
  email: z.string().email('Should be a valid email.'),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(40, { message: "Password must be maximum 40 characters." })
});

export const SigninValidation = z.object({
  email: z.string().email('Should be a valid email.'),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(40, { message: "Password must be maximum 40 characters." })
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(30, { message: "Name must be maximum 30 characters." }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(30, { message: "Username must be maximum 30 characters." }),
  email: z.string().email('Should be a valid email.'),
  bio: z.string(),
});


// POST =============================== 
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});