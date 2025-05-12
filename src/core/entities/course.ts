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

export type TCourseInfo = {
  id: string;
  title: string;
  description: string;
  category: string | null;
  price: number;
  cover: string | null;
  author: {
    name: string;
  };
  content: {
    title: string;
    type: string;
    position: number;
  }[];
};
