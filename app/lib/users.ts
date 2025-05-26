interface User {
  id: number;
  name: string;
  prof: string;
}

export const users: User[] = [
  { id: 0, name: "Taro", prof: "developer" },
  { id: 1, name: "Jiro", prof: "designer" },
  { id: 2, name: "Saburo", prof: "manager" },
];
