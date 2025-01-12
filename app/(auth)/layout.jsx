import React from "react";
import css from "@/styles/authLayout.module.css";
import Image from "next/image";
export const metadata = {
  title: "Authentication",
};
const AuthLayout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <sdiv className={css.container}>
        <div className={css.left}>{children}</div>
        <div className={css.right}>
          <Image
            src="/images/auth3.png"
            alt="branding-image"
            quality={100}
            width={450}
            height={450}
          />
        </div>
      </sdiv>
    </div>
  );
};

export default AuthLayout;
