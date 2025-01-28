import { cn } from '@/lib/utils'
import React from 'react'

interface MaxWidthProps{
  className : string
  children: React.ReactNode
}
function MaxWidthWrapper({className, children}: MaxWidthProps) {
  return (
    <div className={cn('mx-auto max-w-screen-xl w-full my-12', "className")}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper