import axios from "axios";
import { useState } from "react";
import { API_URL, STORAGE_KEYS } from "../utils/utility";

const useUserAuth = () => {
  const [error, setError] = useState("");

  const createUser = async (data) => {
    const sessionToken = sessionStorage.getItem(STORAGE_KEYS.sessionKey);
    setError("");
    if (!sessionToken || !data) {
      setError("reload-page");
    } else {
      await axios
        .post(`${API_URL}v1/onboard/${sessionToken}`, data)
        .then((response) => {
          console.log("onboard", response);
          sessionStorage.setItem(
            STORAGE_KEYS.userSession,
            response?.data?.userSession
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return {
    createUser,
    error,
  };
};

export default useUserAuth;
