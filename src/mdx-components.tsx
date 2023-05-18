import type { MDXComponents } from 'mdx/types';

export default function useMDXComponents(
  components: MDXComponents,
): MDXComponents {
  return {
    code: ({ children }) => (
      <code
        style={{
          padding: '0 7px',
          borderRadius: '5px',
          backgroundColor: 'var(--code)',
        }}
      >
        {children}
      </code>
    ),
    ...components,
  };
}
