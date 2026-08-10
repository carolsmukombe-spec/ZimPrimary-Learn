import React, { useState } from 'react';
import { Smartphone, Monitor, Wifi, Battery, Signal, ArrowLeft, Home, Square } from 'lucide-react';

interface AndroidFrameProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  learnerName: string;
  grade: string;
}

export const AndroidFrame: React.FC<AndroidFrameProps> = ({
  children,
  activeTab,
  setActiveTab,
  learnerName,
  grade
}) => {
  const [isMobileFrame, setIsMobileFrame] = useState(false);

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (!isMobileFrame) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
        {/* Toggle Bar */}
        <div className="bg-slate-950 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-emerald-400">ZimPrimary Learn • Flutter Android Engine Active</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">MoPSE 2024 Curriculum</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileFrame(true)}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition cursor-pointer"
              title="Preview inside Android Phone Frame"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android Phone View</span>
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      {/* Top Banner Control */}
      <div className="w-full max-w-sm mb-3 flex items-center justify-between text-xs text-slate-300">
        <span className="text-emerald-400 font-medium flex items-center gap-1">
          <Smartphone className="w-4 h-4" /> Android Device Mode
        </span>
        <button
          onClick={() => setIsMobileFrame(false)}
          className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded transition cursor-pointer"
        >
          <Monitor className="w-3.5 h-3.5" /> Wide View
        </button>
      </div>

      {/* Android Device Shell */}
      <div className="w-full max-w-[400px] h-[820px] bg-slate-900 border-[8px] border-slate-700 rounded-[42px] shadow-2xl flex flex-col overflow-hidden relative">
        {/* Android Top Speaker & Camera Notch */}
        <div className="bg-slate-900 py-1.5 flex justify-center items-center z-20">
          <div className="w-16 h-4 bg-slate-950 rounded-full flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
            <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
          </div>
        </div>

        {/* Android Status Bar */}
        <div className="bg-slate-900 px-5 py-1 flex items-center justify-between text-[11px] text-slate-300 font-medium z-20 border-b border-slate-800/50">
          <span>{currentTime}</span>
          <div className="flex items-center space-x-1.5">
            <Signal className="w-3 h-3 text-slate-300" />
            <Wifi className="w-3 h-3 text-slate-300" />
            <Battery className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* App Content inside phone screen */}
        <div className="flex-1 overflow-y-auto bg-slate-900 text-slate-100 flex flex-col">
          {children}
        </div>

        {/* Flutter Bottom Navigation Bar */}
        <div className="bg-slate-950 border-t border-slate-800 py-2.5 px-6 flex items-center justify-around z-20">
          <button
            onClick={() => setActiveTab('lessons')}
            className="flex flex-col items-center text-slate-400 hover:text-emerald-400 cursor-pointer"
            title="Back / Previous"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('syllabus')}
            className="flex flex-col items-center text-slate-400 hover:text-emerald-400 cursor-pointer"
            title="Home"
          >
            <Home className="w-5 h-5 text-emerald-400" />
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className="flex flex-col items-center text-slate-400 hover:text-emerald-400 cursor-pointer"
            title="Recent Apps / Progress"
          >
            <Square className="w-4 h-4" />
          </button>
        </div>

        {/* Android Home Indicator Pill */}
        <div className="bg-slate-950 pb-1.5 flex justify-center z-20">
          <div className="w-28 h-1 bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
