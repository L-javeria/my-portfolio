import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-[#323232] text-[#edcf83]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#faa916] text-[#d5a970] ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-[Rokkitt] font-medium text-[#faa916]">
                    <p>Hi, I'm Javeria. Nice to meet you. Please take a look around.</p>
            </div>
            <div className="tracking-wide">
                <p>
                I'm a passionate developer with a relentless drive for innovation. 
                My expertise spans the dynamic realm of AWS and full-stack development, 
                where I craft solutions that redefine possibilities. Armed with a deep understanding of
                AWS infrastructure and a knack for full-stack intricacies, 
                I fuel projects with efficiency and transformative capabilities. 
                My goal is simple yet ambitious: to revolutionize experiences by harnessing the power of 
                AWS and seamlessly integrating it with the versatility of full-stack development. 
                Let's embark on a journey where innovation knows no bounds.
                </p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
