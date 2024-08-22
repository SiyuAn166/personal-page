export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex justify-center items-start min-h-screen pb-20">
            {children}
        </div>
    );
  }