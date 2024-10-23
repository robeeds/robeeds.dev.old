import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
// Image metadata
export const alt = 'My Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const title = 'My Portfolio'
export const description = 'Happy Coding!'
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {

  // Font
  const poppinsSemibold = fetch(new URL('./fonts/Poppins-Semibold.ttf', import.meta.url)).then((res) => res.arrayBuffer())
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          backgroundImage: 'url(http://robeeds.tech/images/og-bg.png)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#E5E9E9',
          paddingTop: '50px',
        }}
      >

        <p 
          style={{ 
            fontSize: 96, 
            margin: 0, 
            paddingLeft: '22px',
          }}
        >{title}</p>

        <p 
          style={{ 
            fontSize: 54, 
            margin: 0, 
            paddingLeft: '25px', 
          }}
        >{description}</p>

      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: await poppinsSemibold,
          style: 'normal',
          weight: 400,
        }
      ]
    }
  )
}