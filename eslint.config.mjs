import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const HEX = '#[0-9a-fA-F]{3,8}\\b'

const config = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      'legacy/**',
      '.next/**',
      'node_modules/**',
      'next-env.d.ts',
      'reports/**',
      '.lighthouseci/**',
    ],
  },
  {
    // Design tokens only: no raw hex colours in components or routes.
    files: ['components/**/*.tsx', 'app/**/*.tsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: `Literal[value=/${HEX}/]`,
          message: 'Use a design token (Tailwind class or lib/tokens.ts), not a raw hex colour.',
        },
        {
          selector: `TemplateElement[value.raw=/${HEX}/]`,
          message: 'Use a design token (Tailwind class or lib/tokens.ts), not a raw hex colour.',
        },
      ],
    },
  },
]

export default config
