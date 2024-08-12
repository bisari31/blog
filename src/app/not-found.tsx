'use client';

import { useScrollHidden } from 'hooks';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  useScrollHidden();

  return (
    <div>
      <p>404</p>
      <p>Page Not Found</p>
      <button type="button" onClick={() => router.back()}>
        돌아가기
      </button>
    </div>
  );
}
