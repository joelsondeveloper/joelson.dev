"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stat = ({ text, number, symbol }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="flex flex-col gap-2 justify-center items-center">
      <span className="font-bold text-2xl color-azul">
        {inView ? <CountUp end={number} duration={3}/> : 0}
        {symbol}
      </span>
      <p className="text-sm font-medium color-cinza">{text}</p>
    </div>
  );
};

export default Stat;
