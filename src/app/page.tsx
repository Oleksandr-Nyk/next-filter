// app/page.tsx
import { UserService } from './services/UserService';
import UserList from './components/UserList';
import Header from './components/Header';


export default async function HomePage() {
  const users = await UserService.fetchUsers();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <UserList users={users} />
    </main>
  );
}
