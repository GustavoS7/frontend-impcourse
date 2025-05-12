import { TCourseInfo } from '@/core/entities';
import { formatCurrency } from '@/helper';
import Link from 'next/link';

type TCursoProps = {
  course: TCourseInfo;
};

export function Curso({ course }: TCursoProps) {
  return (
    <Link
      href={`/curso/` + course.id}
      className="w-fit"
    >
      <div className="w-72">
        <img
          src={course.cover ?? ''}
          alt={course.title}
          className="h-40 w-full rounded-md cover"
        />
        <div className="py-1 px-4 h-20">
          <p className="text-black90 font-bold">{course.title}</p>
          <p className="text-sm text-primary">{course.author.name}</p>{' '}
          <p className="font-bold text-xl">{formatCurrency(course.price)}</p>
        </div>
      </div>
    </Link>
  );
}
