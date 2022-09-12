// utils
import axios from "../utils/axios";

// get all books
const GetAllBooks = async () => {
  const response = await axios.get("/books");
  const { data } = response;
  return data;
};

// get all books
const GetBookDetail = async (bookId) => {
  const response = await axios.get(`/book/${bookId}`);
  const { data } = response;
  console.log(data);
  return data;
};

// get Issued Book Detail
const GetIssuedBookDetail = async (bookId) => {
  const response = await axios.get(`book/${bookId}/issued-details`);
  const { data } = response;
  console.log(data);
  return data;
};

// post check-out details
const PostCheckOutDetail = async (details) => {
  let { bookId, name, phoneNo, nationalID, checkOutDate } = details;
  console.log("nationalID", nationalID);
  console.log("checkOutDate", checkOutDate);
  const response = await axios.post(`/book/${bookId}/check-out`, {
    bookId,
    name,
    phoneNo,
    nationalID,
    checkOutDate,
    returnDate: "2022-09-15T17:38:55.267Z",
  });
  const { data } = response;
  console.log(data);
  return data;
};

// post check-in confirmation
const PostBookCheckIn = async (bookId) => {
  const response = await axios.post(`/book/${bookId}/check-in`);
  const { data } = response;
  console.log(data);
  return data;
};

export {
  GetAllBooks,
  GetBookDetail,
  GetIssuedBookDetail,
  PostCheckOutDetail,
  PostBookCheckIn,
};
