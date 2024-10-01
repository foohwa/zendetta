import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "~/components/sidebar";
import Header from "~/components/header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet, as: "style" },
];

// export function Layout({ children }: { children: React.ReactNode }) {
//
// }

export default function App() {
  return (
    <html lang="en" data-theme="bumblebee" className="antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="grid min-h-screen grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
        <Sidebar className="col-start-1 col-end-2 row-start-1 row-end-3" />
        <div className="col-start-2 col-end-3 row-start-1 row-end-2">
          <Header />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 p-4">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
