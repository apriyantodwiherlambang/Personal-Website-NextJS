import React, { FC } from "react";
import Card from "@/components/Card";

interface LandingPage3Props {}

const LandingPage3: FC<LandingPage3Props> = ({}) => {
  return (
    <>
      <div className="flex justify-center mt-[150px] font-bold">My Service</div>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-4">
          <Card
            title="Web Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget orci auctor."
            imageUrl="https://via.placeholder.com/300"
          />
          <Card
            title="Web Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget orci auctor."
            imageUrl="https://via.placeholder.com/300"
          />
          <Card
            title="App Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget orci auctor."
            imageUrl="https://via.placeholder.com/300"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage3;
