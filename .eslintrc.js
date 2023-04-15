module.exports = {
  parserOptions: { project: './tsconfig.json' },
  overrides    : [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef'                       : 'off',
        'comma-dangle'                   : 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      },
    },
  ],
}
