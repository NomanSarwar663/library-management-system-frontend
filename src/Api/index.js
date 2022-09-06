// utils
import axios from "../utils/axios";

// get all books
const GetAllBooks = async () => {
  const response = await axios.get("/books");
  const { data } = response;
  console.log(data);
  return data;
};

// get all books
const GetBookDetail = async ({ bookId }) => {
  const response = await axios.get(`/book/${bookId}`);
  const { data } = response;
  console.log(data);
  return data;
};

// get check in detail
const CheckInDetail = async ({ bookId }) => {
  const response = await axios.get(`/book/${bookId}/check-in`);
  const { data } = response;
  console.log(data);
  return data;
};

// post check-out details
const PostCheckOutDetail = async (details) => {
  let { bookId, name, phoneNo, NIC, checkoutDate } = details;
  const response = await axios.get(`/book/${bookId}/check-out`, {
    bookId,
    name,
    phoneNo,
    NIC,
    checkoutDate,
  });
  const { data } = response;
  console.log(data);
  return data;
};

export { GetAllBooks, GetBookDetail, CheckInDetail, PostCheckOutDetail };
