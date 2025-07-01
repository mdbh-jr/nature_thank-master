"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${nextLocale}/${path}`);
  };
  return (
    <label className="border-2 rounded">
      <select
        defaultValue={localActive}
        className="bg-white py-2 px-2 text-black"
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="si">සිංහල</option>
      </select>
    </label>
  );
}
