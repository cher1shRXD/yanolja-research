"use client";

import { SHORTCUTS } from "@/constants/shortcuts";
import ShortcutItem from "./ShortcutItem";

const Shortcuts = () => {
  return (
    <ul className="flex-1 flex flex-col gap-4 pt-[50px]">
      {
        SHORTCUTS.map((shortcut, idx) => <ShortcutItem {...shortcut} key={idx} />)
      }
    </ul>
  )
}

export default Shortcuts