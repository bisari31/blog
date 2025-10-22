'use client';

import { useEffect, useRef } from 'react';

export default function Utterances() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const makeComments = () => {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.async = true;
      script.setAttribute('repo', 'bisari31/blog');
      script.setAttribute('issue-term', 'title');
      script.setAttribute('label', 'comments');
      script.setAttribute('theme', 'github-dark');
      element?.appendChild(script);
    };
    makeComments();
    return () => element?.querySelector('.utterances')?.remove();
  }, []);

  return <div className="mt-20" ref={ref} />;
}

{
  /* <script src="https://utteranc.es/client.js"
        repo="[ENTER REPO HERE]"
        issue-term="pathname"
        label="comments"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script> */
}
