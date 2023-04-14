import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Student {
  id: string;
  name: string;
}

const students: Student[] = [
  { id: '1', name: 'Paolo Veliz' },
  { id: '2', name: 'Pablo Isaac' },
  { id: '3', name: 'Alejandra Santos' },
  { id: '4', name: 'Alison Ramos' },
  { id: '5', name: 'Jeffrey Reyes' },
];

export default function StudentPage() {
  const [name, setName] = useState<string>('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const student = students.find(s => s.id === id);

      if (student) {
        setName(student.name);
      } else {
        router.push('/404');
      }
    }
  }, [id]);

  return (
    <section>
      <h1>Student {id}</h1>
      <h2>{name}</h2>
    </section>
  );
}
