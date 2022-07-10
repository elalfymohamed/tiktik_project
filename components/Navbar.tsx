import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

// import useAuthStore from "../store/authStore";
// import { IUser } from "../types";
import { createOrGetUser } from "../utils";
import Logo from "../utils/tiktik-logo.png";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            alt="TikTik"
            src={Logo}
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
};
