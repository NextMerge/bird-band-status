import { TanStackDevtools } from "@tanstack/react-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { LocaleProvider } from "../verticals/bird-status/locale/LocaleContext";

import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <LocaleProvider>
        <Outlet />
      </LocaleProvider>
      <TanStackDevtools
        config={{
          position: "top-right",
        }}
        plugins={[
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
}
