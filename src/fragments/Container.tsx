import React from "react";
import ArrowPage from "../components/ArrowPage";

type Props = {
  children: React.ReactNode;
  title: string;
  numberPages?: undefined | string | number | null;
  currentPages?: undefined | string | number | null;
};

const Container = ({ children, title, numberPages, currentPages }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-[50%]">
          <div className="flex flex-row justify-between">
            <h2 className="text-3xl font-semibold text-teal-600 inline-block mb-7 relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:rounded-full">
              {title}
            </h2>
            {numberPages && (
              <ArrowPage numberPages={numberPages} currentPage={currentPages} />
            )}
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Container;
