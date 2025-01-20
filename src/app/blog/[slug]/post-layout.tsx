export default function PostLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div lang="en" className="flex flex-1 flex-col justify-center items-center antialiased text-dimWhite bg-black">
        <div
          className={`flex flex-col w-full justify-center items-center max-w-[1000px] p-6`}
        >
          {children}
        </div>
      </div>
    );
  }