'use client';

import { Arrow } from 'assets/icons';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-[100px] font-black sm:text-[150px]">404</p>
      <p className="text-2xl font-black sm:text-4xl">Page Not Found</p>
      <button
        className={
          'mt-7 flex items-center gap-1 rounded-full border-2 border-gray-800 bg-white px-4 py-2 font-medium text-gray-800 sm:px-8 sm:py-3'
        }
        type="button"
        onClick={() => router.back()}
      >
        <Arrow />
        <span>Go Home</span>
      </button>
    </div>
  );
}
