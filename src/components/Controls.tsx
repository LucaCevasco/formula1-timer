import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

type ControlsProps = {
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
};

export const Controls = ({ isRunning, onToggle, onReset }: ControlsProps) => (
  <div className="flex justify-center gap-4">
    <button
      onClick={onToggle}
      className="bg-[#e10600] hover:bg-[#b30500] text-white px-8 py-4 rounded-md flex items-center gap-2 font-bold transition-colors uppercase tracking-wider"
    >
      {isRunning ? (
        <>
          <Pause size={24} /> Pause
        </>
      ) : (
        <>
          <Play size={24} /> Start
        </>
      )}
    </button>
    <button
      onClick={onReset}
      className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-md flex items-center gap-2 font-bold transition-colors uppercase tracking-wider"
    >
      <RotateCcw size={24} /> Reset
    </button>
  </div>
);