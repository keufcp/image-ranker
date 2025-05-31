import React from 'react'

interface ProgressBarProps {
  current: number
  total: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100
  
  return (
    <div className="w-full h-5 bg-gray-200 rounded-xl overflow-hidden relative">
      <div
        className="h-full bg-custom-olive transition-all duration-500 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ProgressBar
