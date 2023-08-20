import axios from "axios";

const rootUrl = process.env.REACT_APP_ROOT_URL;
const userApi = rootUrl + "/user";
const bookApi = rootUrl + "/book";

//register user
export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//login user
export const loginUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi + "/login", userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//get user profile

export const fetchUserProfile = async () => {
  try {
    const headers = {
      Authorization: sessionStorage.getItem("accessJWT"),
    };
    const { data } = await axios.get(userApi, { headers });

    return data;
  } catch (error) {
    return error.message;
  }
};

// ====
// BOOK
// ====
export const addBook = async (bookInfo) => {
  try {
    const headers = {
      Authorization: sessionStorage.getItem("accessJWT"),
    };

    const { data } = await axios.post(bookApi, bookInfo, {
      headers,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getBooks = async () => {
  try {
    const headers = {
      Authorization: sessionStorage.getItem("accessJWT"),
    };

    const { data } = await axios.get(bookApi, {
      headers,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const borrowBook = async (bookId) => {
  try {
    const headers = {
      Authorization: sessionStorage.getItem("accessJWT"),
    };

    const { data } = await axios.post(
      bookApi + "/borrow",
      { bookId },
      { headers }
    );

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteBook = async (bookId) => {
  try {
    const headers = {
      Authorization: sessionStorage.getItem("accessJWT"),
    };

    const { data } = await axios.delete(bookApi, {
      data: { bookId },
      headers,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getBorrowedBooks = async () => {
  try {
    const headers = {
      Authorization: sessionStorage.getItem("accessJWT"),
    };

    const { data } = await axios.get(bookApi + "/borrowedByUser", {
      headers,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const returnBook = async (bookId) => {
  try {
    const headers = {
      Authorization: sessionStorage.getItem("accessJWT"),
    };

    const { data } = await axios.patch(
      bookApi + "/return",
      { bookId },
      {
        headers,
      }
    );
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
