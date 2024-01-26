import React from "react";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((render, index) => (
          <div
            key={index}
            className="w-[200px] h-[200px] flex-grow flex justify-center items-center text-black"
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            }}
          >
            {render}
          </div>
        ))}
      </div>
    </div>
  );
}
