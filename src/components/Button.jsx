import React from "react";

import styles from "../styles/Global";

const Button = ({ assertUrl, link }) => {
  return (
    <div
      className={`${styles.btnBlack}`}
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <img src={assertUrl} alt="expo-icon" className={`${styles.btnIcon}`} />

      <div className={`flex flex-col justify-start ml-4`}>
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
