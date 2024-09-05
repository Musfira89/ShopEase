import React, { useState } from "react";
import axios from "axios"; // Import Axios at the top

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
import LeftImg from "../../assets/Form/LeftImg.jpg"; // Importing the image
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Logo from "../../assets/logo.png";


const Root = styled("div")({
  display: "flex",
  height: "100vh",
});

const ImageSection = styled(Box)({
  width: "60%", // Updated width for the image section
  backgroundImage: `url(${LeftImg})`, // Using the imported image
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const FormSection = styled(Box)({
  width: "40%", // Updated width for the form section
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "40px",
});

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
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
// Update the handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Make an Axios POST request to the backend signup endpoint
    const response = await axios.post("http://localhost:8000/auth/signup", {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      phoneNumber: formData.phoneNumber,
      gender: formData.gender,
      streetAddress: formData.streetAddress,
      city: formData.city,
      preferredCategory: formData.preferredCategory,
      termsAccepted: formData.termsAccepted,
      newsletterSubscription: formData.newsletterSubscription,
    });

    // Display success message or navigate user
    console.log(response.data);
    alert("User created successfully!");
  } catch (error) {
    // Handle error response
    console.error("Error signing up:", error.response?.data?.detail || error.message);
    alert(error.response?.data?.detail || "An error occurred during signup.");
  }
};


  return (
    <Root>
      <ImageSection />
      <FormSection>
        <form onSubmit={handleSubmit}>
          <Box textAlign="center" mb={3}>
            {/* Decreased the size of the logo */}
            <img
              src={Logo}
              alt="Logo"
              style={{ marginBottom: 16, width: "100px" }}
            />
            {/* Increased the font size and made it bold */}
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginBottom: 10 }}
            >
              Sign up with Shop Ease
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Gender"
                variant="outlined"
                fullWidth
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Street Address"
                variant="outlined"
                fullWidth
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <HomeIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                name="city"
                value={formData.city}
                onChange={handleChange}
                autoComplete="off"
                select
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LocationCityIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="Karachi">Karachi</MenuItem>
                <MenuItem value="Islamabad">Islamabad</MenuItem>
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="Peshawar">Peshawar</MenuItem>
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
                autoComplete="off"
                select
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CategoryIcon style={{ color: "lightgrey" }} />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
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
            style={{ marginTop: 16 }}
          >
            SIGN UP
          </Button>
          <Typography align="center" style={{ marginTop: 16 }}>
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
