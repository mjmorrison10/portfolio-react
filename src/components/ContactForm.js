import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import styled from "styled-components";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "default", e.target, "user_hL2fhPM4Y6fcuc4qZxYfB")

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Container className="App">
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            align="center"
          >
            Contact us
          </Typography>
          <Typography
            variant="body2"
            align="center"
            component="p"
            color="textSecondary"
          >
            Fill out the form below and our team will get back to you within 48
            hours!
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form noValidate onSubmit={sendEmail}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <Field
                      as={TextField}
                      label="First Name"
                      name="firstName"
                      value={props.values.firstName}
                      onChange={props.handleChange}
                      placeholder="Enter first name"
                      variant="outlined"
                      fullWidth
                      required
                      error={props.errors.firstName && props.touched.firstName}
                      helperText={<ErrorMessage name="firstName" />}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Field
                      as={TextField}
                      label="Last Name"
                      name="lastName"
                      {...props.getFieldProps("lastName")}
                      placeholder="Enter last name"
                      variant="outlined"
                      fullWidth
                      required
                      error={props.errors.lastName && props.touched.lastName}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Field
                      as={TextField}
                      type="email"
                      label="Email"
                      name="email"
                      {...props.getFieldProps("email")}
                      placeholder="Enter email"
                      variant="outlined"
                      fullWidth
                      required
                      error={props.errors.email && props.touched.email}
                      helperText={<ErrorMessage name="email" />}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Field
                      as={TextField}
                      type="number"
                      label="Phone"
                      name="phoneNumber"
                      {...props.getFieldProps("phoneNumber")}
                      placeholder="Enter phone number"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Field
                      as={TextField}
                      label="Message"
                      name="message"
                      {...props.getFieldProps("message")}
                      multiline
                      rows={4}
                      placeholder="Type your message here."
                      variant="outlined"
                      fullWidth
                      required
                      error={props.errors.message && props.touched.message}
                      helperText={<ErrorMessage name="message" />}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
}

// export default ContactForm;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const onSubmit = (values, props) => {
  alert(JSON.stringify(values), null, 2);
  props.resetForm();
};

const phoneRegExp = /^[2-9]{2}[0-9]{8}/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "It's too short")
    .required("First name required"),
  lastName: Yup.string()
    .min(3, "It's too short")
    .required("Last name required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "enter valid phone number"),
  email: Yup.string().email("Enter valid email").required("Enter valid email"),
  message: Yup.string()
    .min(50, "Minimum 50 characters")
    .required("Message required"),
});


const Container = styled.div`
  h1,
  h2,
  h3,
  p {
    text-shadow: none!important;
  }
`;
