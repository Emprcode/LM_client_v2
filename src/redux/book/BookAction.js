import { toast } from "react-toastify";
import { addBook, getBooks } from "../../helper/axiosHelper";
import { requestPending, setBookSuccess } from "./BookSlice";

export const addBookAction = (data) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const { status, message } = await addBook(data);
    if (status === "success") {
   
      toast[status](message);

      
    }
  } catch (error) {
    return error.message;
  }
};

export const getBooksAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const { status, books } = await getBooks();
    if (status === "success") {
      dispatch(setBookSuccess(books));
    }
  } catch (error) {
    console.log(error);
  }
};
