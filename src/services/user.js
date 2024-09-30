import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, STORAGE_KEYS } from "../utils/utility";

const useUserAuth = () => {
  const [sessionToken, setSessionToken] = useState(
    sessionStorage.getItem(STORAGE_KEYS.sessionKey)
  );
  const [isTokenValid, setIsTokenValid] = useState(false);

  const getToken = async () => {
    setIsTokenValid(!!sessionToken);
    if (!sessionToken) {
      await axios
        .get(`${API_URL}v1/session`)
        .then((response) => {
          console.log("session", response);
          setIsTokenValid(true);
          setSessionToken(response?.data?.session_token);
          sessionStorage.setItem(
            STORAGE_KEYS.sessionKey,
            response?.data?.session_token
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return {
    isTokenValid,
    getToken,
    sessionToken,
  };
};

export default useUserAuth;
