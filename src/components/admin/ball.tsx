export function Ball({ color }: any) {
  return (
    <div
      className={`h-2 w-2 bg-${color}-500 rounded-full ml-2`}
      style={{ backgroundColor: color }}
    ></div>
  );
}
