import { toast } from "react-toastify";
import { loginUser } from "../../helper/axiosHelper";
import { loginSuccess, requestFailed, requestPending } from "./UserSlice";

export const userLoginAction = (data) => async (dispatch) => {
  try {
    // display loader
    dispatch(requestPending());

    //call axios
    const { status, message, user } = await loginUser(data);

    status === "success"
      ? dispatch(loginSuccess(user)) && toast[status](message)
      : dispatch(requestFailed(message)) && toast[status](message);
  } catch (error) {
    dispatch(requestFailed(error));
  }
};
