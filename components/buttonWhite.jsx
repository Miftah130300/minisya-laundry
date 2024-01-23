import React from 'react';

export default function ButtonWhite({ src }) {
  return (
    <a
      href={src}
      className={`font-medium rounded-xl border-2 border-cyan-600 p-3 text-cyan-600 bg-white w-[160px] cursor-pointer`}
      target='_blank'
      rel="noopener noreferrer"
    >Pesan sekarang</a>
  );
}
