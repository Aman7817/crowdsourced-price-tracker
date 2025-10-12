// src/pages/Dashboard/components/StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value, icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    green: 'bg-green-500/20 border-green-500/30 text-green-300',
    purple: 'bg-purple-500/20 border-purple-500/30 text-purple-300',
    yellow: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300'
  };

  return (
    <div className={`${colorClasses[color]} backdrop-blur-sm rounded-xl border p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="text-2xl">{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;