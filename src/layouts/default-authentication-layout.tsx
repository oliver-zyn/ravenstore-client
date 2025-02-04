import { Outlet } from "react-router";

export function DefaultAuthenticationLayout() {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  )
}