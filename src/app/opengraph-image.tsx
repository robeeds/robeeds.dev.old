import { ImageResponse } from 'next/og'

export const config = {
  runtime: 'edge',
};

const OpenGraph = async (request: NextRequest) => {
  const title = 'RobeeDS';
  const description = 'Full Stack Developer';

  try {
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'black',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <div style={{ fontSize: '48px' }}>{title}</div>
          <div style={{ fontSize: '16px' }}>{description}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    return new Response(error.message || error.toString(), {
      status: 500,
    });
  }
};

export default OpenGraph;
