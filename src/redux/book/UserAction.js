import { toast } from "react-toastify";
import { fetchUserProfile, loginUser } from "../../helper/axiosHelper";
import { loginSuccess, requestFailed, requestPending } from "./UserSlice";

export const userLoginAction = (data) => async (dispatch) => {
  try {
    // display loader
    dispatch(requestPending());

    //call axios
    const { status, message, tokens } = await loginUser(data);

    if (status === "success" && tokens?.accessJWT) {
      const {accessJWT, refreshJWT} = tokens

      sessionStorage.setItem("accessJWT", accessJWT)
      localStorage.setItem("refreshJWT", refreshJWT)

     dispatch(FetchUserProfileAction())
      toast[status](message)
    }
  } catch (error) {
    dispatch(requestFailed(error));
  }
};

export const FetchUserProfileAction = () => async( dispatch) => {
  //call axios to get user profile

  const {status, user} = await fetchUserProfile()
  if (status==="success" && user?._id) {
    dispatch(loginSuccess(user))
  }
}
