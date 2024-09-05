import React, { useState } from "react";
import axiosInstance from "../axiosInstance"; // Use axiosInstance instead of axios
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  Person,
  Email,
  Lock,
  Phone,
  Home,
  Category,
  LocationCity,
} from "@mui/icons-material";
import LeftImg from "../../assets/Form/LeftImg.jpg";
import Logo from "../../assets/logo.png";

const Root = styled("div")({ display: "flex", height: "100vh" });
const ImageSection = styled(Box)({
  width: "60%",
  backgroundImage: `url(${LeftImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});
const FormSection = styled(Box)({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "40px",
});

const formFields = [
  { name: "fullName", label: "Full Name", icon: <Person /> },
  { name: "email", label: "Email", icon: <Email /> },
  { name: "password", label: "Password", type: "password", icon: <Lock /> },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    icon: <Lock />,
  },
  { name: "phoneNumber", label: "Phone Number", icon: <Phone /> },
  { name: "streetAddress", label: "Street Address", icon: <Home /> },
];

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    streetAddress: "",
    city: "",
    preferredCategory: "",
    termsAccepted: false,
    newsletterSubscription: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/signup", formData);
      alert("User created successfully!");
    } catch (error) {
      alert(error.response?.data?.detail || "An error occurred during signup.");
    }
  };

  return (
    <Root>
      <ImageSection />
      <FormSection>
        <Box textAlign="center" mb={3}>
          <img
            src={Logo}
            alt="Logo"
            style={{ marginBottom: 16, width: "100px" }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 3 }}>
            Sign up with ShopEase
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {formFields.map((field) => (
              <Grid item xs={6} key={field.name}>
                <TextField
                  label={field.label}
                  variant="outlined"
                  fullWidth
                  name={field.name}
                  type={field.type || "text"}
                  value={formData[field.name]}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ color: "lightgrey" }}
                      >
                        {field.icon}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={6}>
              <TextField
                label="Gender"
                variant="outlined"
                fullWidth
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                autoComplete="off"
                select
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Person style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                name="city"
                value={formData.city}
                onChange={handleChange}
                select
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LocationCity style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              >
                {["Karachi", "Islamabad", "Lahore", "Peshawar"].map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Preferred Category"
                variant="outlined"
                fullWidth
                name="preferredCategory"
                value={formData.preferredCategory}
                onChange={handleChange}
                select
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Category style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              >
                {["Women", "Men", "Kids"].map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
            }
            label="I accept the terms and conditions"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="newsletterSubscription"
                checked={formData.newsletterSubscription}
                onChange={handleChange}
              />
            }
            label="Subscribe to our newsletter"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ marginTop: 2 }}
          >
            SIGN UP
          </Button>
          <Typography align="center" sx={{ marginTop: 2 }}>
            Already have an account?{" "}
            <a href="#sign-in" style={{ color: "#007bff" }}>
              Sign in
            </a>
          </Typography>
        </form>
      </FormSection>
    </Root>
  );
};

export default SignUpForm;
