import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import {validatePassword} from'../utils/validateInput'

/////////////////////////////////////////////////////////////
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const SignupForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const SignupSchema = Yup.object().shape({
        name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
   
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().min(8,'minimum 8 characters').required("Password is required").test('one-uppercase character special character and a number', 'Password must contain at least one uppercase letter, one special character and one number', value => validatePassword(value)),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirmmmmjjj password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword:""
    },
    validationSchema: SignupSchema,
    onSubmit: (() => {
          localStorage.setItem("name",formik.values.name)
          localStorage.setItem("email", formik.values.email)
          localStorage.setItem("password", formik.values.password)

      setTimeout(() => {
        // setAuth(true);
        alert(`user Registered ${formik.values.name}`)
        navigate("/login", { replace: true });
      }, 2000);
    }),
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
console.log('form values', formik.values)
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              label=" name"
              {...getFieldProps("name")}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={Boolean(touched.name && errors.name)}
              
              helperText={touched.name && errors.name}
            />

          </Stack>

          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
            //   autoComplete="username"
              type="email"
              label="Email address"
              {...getFieldProps("email")}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {/* <Icon
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      /> */}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
         <TextField label="Confirm Password" type="password" 
           {...getFieldProps("confirmPassword")}
         error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}/>

          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Sign up
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;
