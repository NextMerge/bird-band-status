import { SidebarContent } from "./SidebarContent";

export function Sidebar() {
  return (
    <aside className="flex w-80 shrink-0 flex-col gap-5 overflow-y-auto p-4">
      <SidebarContent />
    </aside>
  );
}
