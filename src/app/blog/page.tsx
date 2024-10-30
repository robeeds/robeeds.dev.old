import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    const title = "Blog";
    const description = "Updates from RobeeDS";

    const ogImageUrl = `/api?title=${title}&desc=${description}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url:ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: "Blog - Open Graph Image",
                },
            ],
        },
    };
}

export default function Blog() {
    return (
        <div className="flex flex-1 justify-center p-4">
            <div className="flex flex-col items-center">
                <p className="text-[48px]">
                    Coming Soon!
                </p>
            </div>
        </div>
    )
}