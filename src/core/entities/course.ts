export type TCourse = {
  id: string;
  title: string;
  description: string;
  category: string | null;
  price: number;
  authorId: string;
  cover: string | null;
  createdAt: Date;
  updatedAt: Date;
};
