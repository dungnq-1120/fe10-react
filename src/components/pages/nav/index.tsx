import "./index.css";

export default function Nav({
  number,
  title,
  logDataNav,
}: {
  number: number;
  title: string;
  logDataNav: (params: number) => void;
}) {
  const count = 100;

  logDataNav(count);

  return (
    <>
      <div>nav abc {number}</div>
      <div>nav abc {title}</div>
    </>
  );
}
