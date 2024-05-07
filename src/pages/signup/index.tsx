import React, { useEffect } from "react";
import { LoadIndicator } from "@/components";
import { useSelector } from "react-redux";
import { useDispatch } from "@/hooks";
import { getEulaThunk } from "@/thunks";
import { selectIsEulaLoading } from "@/selectors";

import styles from "./Signup.module.scss";

const Signup = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEulaThunk("en-US"));
  }, [dispatch]);

  const isLoading = useSelector(selectIsEulaLoading);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <LoadIndicator
          className={styles.sections}
          isLoading={isLoading}
          loadingMessage="Loading..."
        >
          <h1>Hello</h1>
        </LoadIndicator>
      </div>
    </div>
  );
};

export default Signup;
