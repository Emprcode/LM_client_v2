import axios from 'axios'

const userApi  = process.env.REACT_APP_ROOT_URL + "/user"



//register user
export const registerUser = async(userObj) => {
  try {
      const {data} = await axios.post(userApi, userObj)
      console.log(data)
      return data
  } catch (error) {
    return({
        status:"error",
        message:error.message
    })
    
  }
}
//login user
export const loginUser = async(userObj) => {
  try {
      const {data} = await axios.post(userApi + "/login", userObj)
      console.log(data)
      return data
  } catch (error) {
    return({
        status:"error",
        message:error.message
    })
    
  }
}

//get user profile

export const fetchUserProfile = async() => {
  try {
    const headers ={
      Authorization : sessionStorage.getItem("accessJWT")
    }
    const {data} = await axios.get(userApi, {headers})

    return data
  } catch (error) {
    return error.message
  }
}