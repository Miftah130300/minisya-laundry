export default function ButtonCyan({ src }) {
  return (
    <a
      href={src}
      className={`font-medium rounded-xl border-2 border-cyan-600 p-3 text-white bg-cyan-600 w-[160px] cursor-pointer`}
      target='_blank'
      rel="noopener noreferrer"
    >Pesan sekarang</a>
  );
}
