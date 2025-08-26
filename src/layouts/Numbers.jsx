import { useEffect, useState } from 'react';

const Experience = () => {

  const [commit, setCommit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCommit(prev => {
        if (prev >= 100) {
          clearInterval(interval); 
          return prev;
        }
        return prev + 1;
      });
    }, 70);

    return () => clearInterval(interval); 
  }, []);




  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    tech: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => {
        const next = { ...prev };

        if (next.experience < 10) next.experience += 1;
        if (next.projects < 20) next.projects += 1;
        if (next.tech < 8) next.tech += 1;

        if (
          next.experience >= 10 &&
          next.projects >= 20 &&
          next.tech >= 8
          
        ) {
          clearInterval(interval);
        }

        return next;
      });
    }, 300); // change speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="width flex items-center justify-center gap-10 text-[#00FD9A]
    max-tablet:grid max-tablet:grid-cols-2 max-tablet:gap-2max-tablet:place-items-center max-tablet:text-center max-tablet:w-[70%] max-tablet:gap-9 max-tablet:mx-auto 
    "
    >
      <div className="gap-2 flex items-center w-[250px] max-tablet:flex-col max-tablet:gap-1 max-tablet:w-[100%]">
        <p className="font-bold text-[56px] max-tablet:text-[40px]">
          {String(counts.experience).padStart(2, "0")}
        </p>
        <p className="w-[60%] text-[#dadadb] max-tablet:w-full max-tablet:text-[12px]">
          Year(s) of Total career experience
        </p>
      </div>
      <div className="gap-2 flex items-center w-[250px] max-tablet:flex-col max-tablet:gap-1 max-tablet:w-[100%] ">
        <p className="font-bold text-[56px] max-tablet:text-[40px]">
          {String(counts.projects).padStart(2, "0")}
        </p>
        <p className="w-[40%] text-[#dadadb] max-tablet:w-full max-tablet:text-[12px]">
          Total Projects completed
        </p>
      </div>
      <div className="gap-2 flex items-center w-[250px] max-tablet:flex-col max-tablet:gap-1 max-tablet:w-[100%]">
        <p className="font-bold text-[56px] max-tablet:text-[40px]">
          {String(counts.tech).padStart(2, "0")}
        </p>
        <p className="w-[40%] text-[#dadadb] max-tablet:w-full max-tablet:text-[12px]">
          Creative Tools mastered
        </p>
      </div>
      <div className="gap-2 flex items-center w-[250px] max-tablet:flex-col max-tablet:gap-1 max-tablet:w-[100%]">
        <p className="font-bold text-[56px] max-tablet:text-[40px]">{commit}+</p>
        <p className="w-[40%] text-[#dadadb] max-tablet:w-full max-tablet:text-[12px] max-tablet:mt-">
          Minimum Code commits{" "}
        </p>
      </div>
    </div>
  );
};

export default Experience;
