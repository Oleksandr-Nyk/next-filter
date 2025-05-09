'use client';

import { useState } from 'react';
import Card from './Card';
import Filter from './Filter';

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name:string;
  };
  address: {
    city: string;
  };
};

export default function UserList({ users }: { users: User[] }) {
  const [filter, setFilter] = useState('');

  const filteredUsers = users.filter((user) => {
    const search = filter.toLowerCase();
    const fieldsToSearch = [
      user.name,
      user.email,
      user.company.name,
      user.address.city,
    ];

    return fieldsToSearch.some((field) =>
      field.toLowerCase().includes(search)
    );
  });

  return (
    <div className="p-4 space-y-4">
      <Filter setFilter={setFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
