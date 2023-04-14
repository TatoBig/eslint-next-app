import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <h1>Página principal</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/locations">Locations</Link>
        </li>
      </ul>
    </section>
  );
}
