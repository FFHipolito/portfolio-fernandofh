import { ImageResponse } from 'next/og'
 
export const size = {
  width: 40,
  height: 40,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: '#4f46e5', 
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%',
          fontWeight: 700,
        }}
      >
        FFH
      </div>
    ),
    {
      ...size,
    }
  )
}
