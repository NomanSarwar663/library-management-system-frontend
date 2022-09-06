import { TextField, Stack, Button } from "@mui/material";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// Yup
import * as Yup from "yup";
// hooks
import { PostCheckOutDetail } from "../../Api";

const CheckOutForm = () => {
  const [date, setDate] = React.useState(new Date());

  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  }

  const navigate = useNavigate();

  const CheckOutSchema = Yup.object().shape({
    name: Yup.string().required("The Name of Borrower is required."),
    phoneNo: Yup.number().required("The Phone Number  is required."),
    NIC: Yup.string().required("The NIC of Borrower is required."),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNo: "",
      NIC: "",
      checkoutDate: "",
    },
    validationSchema: CheckOutSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        let newDate = convertDate(date);
        const result = await PostCheckOutDetail({
          bookId: "123",
          ...values,
          checkoutDate: newDate,
        });
        console.log(result);
        if (result && result.status === "Success") {
          navigate("/books");
        } else {
          setErrors({ afterSubmit: result?.message || "Login failed" });
        }
      } catch (error) {
        resetForm();
        setSubmitting(false);
        setErrors({ afterSubmit: error.message });
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <TextField
            variant="outlined"
            label="Name of Borrower"
            {...getFieldProps("name")}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
            sx={{
              [`& fieldset`]: {
                borderRadius: 3,
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Phone Number"
            type="number"
            {...getFieldProps("phoneNo")}
            error={Boolean(touched.phoneNo && errors.phoneNo)}
            helperText={touched.phoneNo && errors.phoneNo}
            sx={{
              [`& fieldset`]: {
                borderRadius: 3,
              },
            }}
          />
          <TextField
            variant="outlined"
            label="National ID"
            type="number"
            {...getFieldProps("NIC")}
            error={Boolean(touched.NIC && errors.NIC)}
            helperText={touched.NIC && errors.NIC}
            sx={{
              [`& fieldset`]: {
                borderRadius: 3,
              },
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              openTo="year"
              views={["year", "month", "day"]}
              label="Checkout Date"
              value={date}
              onChange={(newValue) => {
                const newDate = convertDate(newValue);
                console.log(newDate);
                setDate(newDate);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: 3,
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
          <Button
            variant="contained"
            disableElevation
            type="submit"
            sx={{ marginTop: "20px", height: "56px", borderRadius: 3 }}
          >
            Check Out
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default CheckOutForm;
