import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval: number;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setIsFinished(true);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimeLeft(5 * 60);
    setIsRunning(false);
    setIsFinished(false);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      hours: hrs.toString().padStart(2, '0'),
      minutes: mins.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0'),
    };
  };

  const time = formatTime(timeLeft);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full max-w-4xl px-4">
        <div className="bg-black/90 rounded-[2rem] p-8 backdrop-blur-sm border border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-white f1-font">
              <div className="text-2xl mb-1">2024</div>
              <div className="text-4xl font-bold">TP FINAL GRUPO 1</div>
            </div>
            <div className="text-white f1-font text-right">
              <div className="text-xl text-[#e10600]">GRAND PRIX</div>
              <div className="text-sm">TIMER</div>
            </div>
          </div>

          {/* Timer Display */}
          <div className="flex justify-center items-center gap-8 my-12">
            <TimeUnit value={time.hours} label="HRS" />
            <Divider />
            <TimeUnit value={time.minutes} label="MINS" />
            <Divider />
            <TimeUnit value={time.seconds} label="SECS" />
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={toggleTimer}
              className="bg-[#e10600] hover:bg-[#b30500] text-white px-8 py-4 rounded-md flex items-center gap-2 f1-font font-bold transition-colors uppercase tracking-wider"
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
              onClick={resetTimer}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-md flex items-center gap-2 f1-font font-bold transition-colors uppercase tracking-wider"
            >
              <RotateCcw size={24} /> Reset
            </button>
          </div>

          {isFinished && (
            <div className="mt-8 text-2xl text-center text-[#e10600] f1-font font-bold animate-pulse">
              TIME'S UP!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const TimeUnit = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center">
    <div className="text-[5rem] f1-font font-bold leading-none tracking-wider text-white">
      {value}
    </div>
    <div className="text-gray-400 text-sm f1-font tracking-widest mt-2">{label}</div>
  </div>
);

const Divider = () => (
  <div className="h-20 w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
);

export default App;