import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(revert: )?(feat|fix|perf|refactor|test|types|docs|style|ci|build|release|workflow|dx|chore|wip|update|optimize)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error('Invalid commit message.')
  console.warn('Please fill in the submission information in the correct format.')
  console.warn('For example:')
  console.info('feat: add a feature')
  console.info('fix: fix a bug')
  console.info('keyword: feat|fix|perf|refactor|test|types|docs|style|ci|build|release|workflow|dx|chore|wip|update|optimize')
  process.exit(1)
}
