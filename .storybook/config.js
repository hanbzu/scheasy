import { configure } from '@kadira/storybook'
import '../src/index.css'

const req = require.context('../src', true, /.stories.js$/)

const loadStories = () =>
  req.keys().forEach((filename) => req(filename))

configure(loadStories, module)
