export default function PostLayout({
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