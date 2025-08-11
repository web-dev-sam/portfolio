import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  rules: {
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
  },
  ignores: [
    '**/fixtures',
  ],
})
