export type TCourse = {
  id: string;
  title: string;
  description: string;
  category: string | null;
  price: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};
