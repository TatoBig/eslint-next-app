import Link from 'next/link';

export default function StudentsPage() {
  const students = [1, 2, 3, 4, 5];
  return (
    <section>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student}>
            <Link href={`/students/${student}`}>Estudiantes {student}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
