import { useEffect, useState } from "react";
// react-router-dom
import { useParams, useNavigate } from "react-router-dom";
// notistack
import { useSnackbar } from "notistack";
// mui
import { TextField, Stack, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// Date picker
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputMask from "react-input-mask";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// Yup
import * as Yup from "yup";
// API
import { PostCheckOutDetail } from "../../Api";
// hooks
import moment from "moment-business-days";
import * as rMoment from "moment";

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const CheckOutForm = () => {
  const { bookId } = useParams();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const calcReturnDate = (checkOutDate, businessDays) => {
    // calculating the date after business days
    return rMoment(
      moment(checkOutDate, "MM/DD/YYYY").businessAdd(businessDays)._d
    ).format("MM/DD/YYYY");
  };

  useEffect(() => {
    // 15 are the default business days
    const date = calcReturnDate(checkOutDate, 15);

    setCheckInDate(date);
  }, [checkOutDate]);

  const CheckOutSchema = Yup.object().shape({
    name: Yup.string().required("The Name of Borrower is required."),
    phoneNo: Yup.string().required("The Phone Number  is required."),
    nationalID: Yup.string().required(
      "The nationalID of Borrower is required."
    ),
  });
  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNo: "",
      nationalID: "",
      checkOutDate: "",
      returnDate: "",
    },
    validationSchema: CheckOutSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        console.log({
          bookId,
          ...values,
          checkOutDate: rMoment(checkOutDate).format(),
          returnDate: rMoment(checkInDate).format(),
        });
        const result = await PostCheckOutDetail({
          bookId,
          ...values,
          checkOutDate: rMoment(checkOutDate).format(),
          returnDate: rMoment(checkInDate).format(),
        });
        console.log(result);
        if (result && result.status === "Success") {
          enqueueSnackbar("Post success!", { variant: "success" });
          await delay(500);
          navigate("/books");
        } else {
          setErrors({ afterSubmit: result?.message || "Login failed" });
          enqueueSnackbar("Post failed!", { variant: "error" });
        }
      } catch (error) {
        // resetForm();
        setSubmitting(false);
        setErrors({ afterSubmit: error.message });
        enqueueSnackbar("Error occured!", { variant: "error" });
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
    getFieldProps,
  } = formik;

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
          <InputMask
            mask="99-999 9999"
            value={values.phoneNo}
            disabled={false}
            maskChar=" "
            onChange={(e) => setFieldValue("phoneNo", e.target.value)}
          >
            {() => (
              <TextField
                label="Phone Number"
                error={Boolean(touched.phoneNo && errors.phoneNo)}
                helperText={touched.phoneNo && errors.phoneNo}
                sx={{
                  [`& fieldset`]: {
                    borderRadius: 3,
                  },
                }}
              />
            )}
          </InputMask>
          <InputMask
            mask="99999999999"
            value={values.nationalID}
            disabled={false}
            maskChar=" "
            onChange={(e) => setFieldValue("nationalID", e.target.value)}
          >
            {() => (
              <TextField
                label="National ID"
                error={Boolean(touched.nationalID && errors.nationalID)}
                helperText={touched.nationalID && errors.nationalID}
                sx={{
                  [`& fieldset`]: {
                    borderRadius: 3,
                  },
                }}
              />
            )}
          </InputMask>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              openTo="year"
              views={["year", "month", "day"]}
              label="Checkout Date"
              value={checkOutDate}
              onChange={(newValue) => {
                // const newDate = convertDate(newValue);
                console.log(newValue);
                setCheckOutDate(newValue);
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
            <DatePicker
              openTo="year"
              views={["year", "month", "day"]}
              label="Return Date"
              value={checkInDate}
              onChange={(newValue) => {
                console.log(newValue);
                setCheckInDate(newValue);
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
