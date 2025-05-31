import React from 'react'

interface ProgressBarProps {
  current: number
  total: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100

  return (
    <div className='relative h-5 w-full overflow-hidden rounded-xl bg-gray-200'>
      <div
        className='bg-custom-olive h-full transition-all duration-500 ease-in-out'
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ProgressBar
