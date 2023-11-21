import {Aperture} from 'lucide-react'

interface LogoProps {
  width?: number
  height?: number
}

export const Logo = ({width, height}:LogoProps) => {
  return (
    <div className='flex items-center gap-2'>
      <Aperture width={width || 48} height={height || 48} color='#877EFF' />
      <span className='font-sans font-bold text-3xl'>SGRAM</span>
    </div>
  )
}
