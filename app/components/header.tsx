import { useLocation } from "@remix-run/react";

const formatPathname = (pathname: string): string => {
  // Remove the leading slash
  const formattedPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  // Capitalize the first letter
  return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
};

export default function Header() {
  const navigation = useLocation();
  const formattedPathname = formatPathname(navigation.pathname);

  return (
    <>
      <div className="prose flex h-full items-center justify-between border-b p-4">
        <h3>{formattedPathname}</h3>
      </div>
    </>
  );
}
