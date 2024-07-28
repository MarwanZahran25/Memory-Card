export default function Card({ image, id, name }) {
  return (
    <div key={id} className="flex flex-col">
      <img src={id} alt={name} />
      <div>Cat</div>
    </div>
  );
}
