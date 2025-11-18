import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, defs, linearGradient, stop } from 'recharts';

const VisitorChart = () => {
  const data = [
    {
      year: '2022',
      visitors: 320,
      fill: '#00DBA3'
    },
    {
      year: '2023', 
      visitors: 1103,
      fill: '#3182f6'
    },
    {
      year: '2024',
      visitors: 1636,
      fill: '#667eea'
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '16px',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <p style={{ 
            margin: '0 0 8px 0', 
            fontWeight: '800', 
            color: '#1a202c',
            fontSize: '18px'
          }}>
            {label}년
          </p>
          <p style={{ 
            margin: 0, 
            color: '#667eea',
            fontSize: '20px',
            fontWeight: '700'
          }}>
            방문객: {payload[0].value.toLocaleString()}만 명
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '500px',
      backgroundColor: 'transparent',
      position: 'relative'
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#667eea" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#667eea" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00DBA3"/>
              <stop offset="50%" stopColor="#3182f6"/>
              <stop offset="100%" stopColor="#667eea"/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(255, 255, 255, 0.1)" 
            strokeWidth={1}
          />
          <XAxis 
            dataKey="year" 
            tick={{ 
              fill: 'rgba(255, 255, 255, 0.9)', 
              fontSize: 16,
              fontWeight: '700'
            }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
          />
          <YAxis 
            tick={{ 
              fill: 'rgba(255, 255, 255, 0.9)', 
              fontSize: 16,
              fontWeight: '700'
            }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            tickFormatter={(value) => `${value}만`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="visitors"
            stroke="url(#lineGradient)"
            strokeWidth={4}
            fill="url(#colorGradient)"
            animationBegin={5000}
            animationDuration={3000}
            animationEasing="ease-out"
            dot={{ 
              fill: '#667eea', 
              stroke: '#fff', 
              strokeWidth: 3, 
              r: 6,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
            }}
            activeDot={{ 
              r: 8, 
              stroke: '#667eea', 
              strokeWidth: 3, 
              fill: '#fff',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorChart;