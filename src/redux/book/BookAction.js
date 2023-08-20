import { toast } from "react-toastify";
import { addBook, deleteBook, getBooks } from "../../helper/axiosHelper";
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


export const deleteBookAction = (data) => async(dispatch) => {
  try {
    const {status, message} = await deleteBook(data)
    if (status === "success") {
      dispatch(getBooksAction());
      toast[status](message)
      
    }
  } catch (error) {
    console.log(error)
    
  }
}