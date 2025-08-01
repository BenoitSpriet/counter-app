
type Props = {
  id: number;
  name: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
};

export default function CounterCard({
//   id,
  name,
  value,
  onIncrement,
  onDecrement,
  onDelete,
}: Props) {
  return (
    <div className="border rounded-xl p-4 mb-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-4xl font-bold my-2 text-blue-600">{value}</p>
      <div className="flex gap-2">
        <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={onIncrement}>➕</button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={onDecrement}>➖</button>
        <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={onDelete}>🗑️</button>
      </div>
    </div>
  );
}
