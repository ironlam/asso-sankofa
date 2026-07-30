export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1180px] px-5 md:px-7 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
