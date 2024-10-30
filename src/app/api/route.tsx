import { ImageResponse } from "next/og";

export const runtime = "edge"
export const alt = "My Portfolio"
export const size = {
    width: 1200,
    height: 630,
}

export async function GET(request: Request) {
    try {

        // Extract search parameters from the request URL
        const { searchParams } = new URL(request.url)

        // Extract Title
        const hasTitle = searchParams.has("title")
        const title = hasTitle ? searchParams.get("title")?.slice(0,100) : "My Portfolio"

        // Extract description
        const hasDesc = searchParams.has("desc")
        const desc = hasDesc ? searchParams.get("desc")?.slice(0,100) : "Happy Coding!"
        

        // Importing Font
        const poppinsSemibold = fetch(new URL('/public/fonts/Poppins-Semibold.ttf', import.meta.url)).then((res) => res.arrayBuffer());

        return new ImageResponse(
            (
                <div
                    style={{
                    backgroundImage: 'url(http://localhost:3000/images/og-bg.png)',
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
                    >{desc}</p>

                </div>
            ),{
                fonts: [
                    {
                        name: 'Poppins',
                        data: await poppinsSemibold,
                        style: 'normal',
                        weight: 400,
                    },
                ],
            }
        )

    } catch (e: any) {

        return new Response("Failed to generate OG Image", { status: 500})

    }
}