'use client';

import { Input } from "@/components/ui/input";

export default function Filter({ setFilter }: { setFilter: (value: string) => void }) {
  return (
    <Input
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search by name, email, company, city"
      className="w-full"
    />
  );
}
