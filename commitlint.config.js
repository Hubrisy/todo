module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'trello-ticket': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'trello-ticket': ({ subject }) => [
          /\[EV-[0-9]+\]$/.test(subject),
          `Your commit message should contain TRELLO ticket number in the end. Example: fix: message [EV-1234]`,
        ],
      },
    },
  ],
};
