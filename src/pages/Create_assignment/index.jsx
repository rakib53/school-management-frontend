import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useCreateAssignmentMutation } from "../../redux/features/assignment/assignmentApi";

export default function CreateAssignment() {
  const [assignment, setAssignment] = useState({
    title: "",
    instructions: "",
    topic: "",
  });
  const dispatch = useDispatch();
  const [createAssignment, { data, isLoading, isError, isSuccess }] =
    useCreateAssignmentMutation();

  const handleSubmitAssignment = () => {
    createAssignment({});
  };

  useEffect(() => {}, []);

  return (
    <div className="w-[700px]">
      {/* <div className="flex justify-between">
        <div className="flex justify-between items-center gap-2">
          <AiOutlineClose className="text-red-600" />
          <CiCalendarDate />
          <h1 className="text-black">Assignment</h1>
        </div>
        <button>submit</button>
      </div> */}
      <div className="p-1"></div>
      <div className="flex justify-between gap-2 mb-3">
        <div className="w-full flex flex-col gap-3">
          <input
            type="text"
            placeholder="Title"
            className="w-full text-black rounded-md py-2 px-7 outline-none border-none"
            value={assignment?.title}
            onChange={(e) => {
              setAssignment({ ...assignment, title: e.target.value });
            }}
          />
          <textarea
            type="text"
            placeholder="Instructions(optional)"
            className="w-full text-black h-[250px] rounded-md py-2 px-7 outline-none border-none resize-none"
            value={assignment?.instructions}
            onChange={(e) => {
              setAssignment({ ...assignment, instructions: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Attachment"
            className="w-full text-black rounded-md py-2 px-7 outline-none border-none"
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <input
            type="number"
            placeholder="Points"
            className="w-full text-black rounded-md py-2 px-7 outline-none border-none"
          />
          <input
            type="text"
            placeholder="Topic"
            className="w-full text-black rounded-md py-2 px-7 outline-none border-none resize-none"
          />
          <input
            type="text"
            placeholder="For"
            className="w-full text-black rounded-md py-2 px-7 outline-none border-none"
          />
        </div>
      </div>

      <button
        onClick={handleSubmitAssignment}
        className="w-full text-white py-3 rounded-md bg-secondary hover:bg-hoverSecondary"
      >
        {isLoading ? "Loading..." : "Publish assignment"}
      </button>
    </div>
  );
}
