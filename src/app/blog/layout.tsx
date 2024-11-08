import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    const title = "Blog";
    const description = "Updates from RobeeDS";

    const ogImageUrl = `/api/?title=${title}&desc=${description}`;

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

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div lang="en" className="flex flex-1 flex-col justify-center items-center antialiased font-poppins text-dimWhite bg-black">
        <div
          className={`flex flex-col justify-center w-full max-w-[1440px]`}
        >
          {children}
        </div>
      </div>
    );
  }