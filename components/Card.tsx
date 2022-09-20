import React, { FC } from "react";

interface Props {
  task: string;
}

const Card: FC<Props> = ({ task }) => {
  return (
    <div className="flex justify-between items-center bg-white px-5 rounded-md h-16 w-3/6">
      <h2 className="text-xl">Dummy Task</h2>

      <div className="">
        <button className="bg-red-400 text-white px-10 h-10 mx-2 rounded-md">Remove</button>
      </div>
    </div>
  );
};

export default Card;
