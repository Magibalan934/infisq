export default function FooterDetailsLoader({ title, datas }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary font-semibold text-xl">{title}</h1>
      <ul className="flex flex-col gap-3">
        {datas.map((data, index) => {
          return <li key={index}>{data}</li>;
        })}
      </ul>
    </div>
  );
}
