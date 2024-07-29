export default function Card({ image, name, onClick, id }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center bg-green-500 max-w-max p-12 rounded-xl hover:bg-green-600 hover:scale-105 shadow-lg"
    >
      <img src={image} height="auto" alt={name} className="w-48" />
      <div className="font-semibold text-white">{name}</div>
    </div>
  );
}
