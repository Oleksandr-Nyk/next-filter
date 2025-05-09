export class UserService {
  static async fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      next: { revalidate: 60 }, // optional caching
    });
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  }
}
