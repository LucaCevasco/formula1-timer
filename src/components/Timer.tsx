import React from 'react';

type TimerProps = {
  hours: string;
  minutes: string;
  seconds: string;
};

export const Timer = ({ hours, minutes, seconds }: TimerProps) => (
  <div className="flex items-center justify-center gap-4 my-8">
    <TimeUnit value={hours} label="HRS" />
    <Divider />
    <TimeUnit value={minutes} label="MINS" />
    <Divider />
    <TimeUnit value={seconds} label="SECS" />
  </div>
);

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-[5rem] font-bold leading-none font-formula tracking-wider text-white">
      {value}
    </div>
    <div className="text-gray-400 text-sm tracking-widest mt-2">{label}</div>
  </div>
);

const Divider = () => (
  <div className="h-20 w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
);