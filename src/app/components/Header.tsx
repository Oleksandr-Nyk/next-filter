import { ThemeSwitcher } from "./ThemeSwitcher"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-2xl font-bold">User Cards</h1>
      <ThemeSwitcher />
    </header>
  );
}
