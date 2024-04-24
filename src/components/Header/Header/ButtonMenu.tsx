"use client";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import { SetIsActive } from "@/lib/redux/dataSlice/dataSlice";
import { cn } from "@/utils/cn";

import "@/assets/styles/main.scss";

export default function ButtonMenu() {
  const { isActive } = useAppSelector((state) => state.dataTemplate);
  const dispatch = useDispatch<AppDispatch>();
  const hasActive = isActive ? "btnBurgerActive" : "";

  return (
    <>
      <div
        onClick={() => {
          dispatch(SetIsActive(!isActive));
        }}
        className="btnMenu flex items-center justify-center last:px-0"
      >
        <div className={cn("btnBurger", hasActive)}></div>
      </div>
    </>
  );
}
