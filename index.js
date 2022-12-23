#! /usr/bin/env node
import lodash from 'lodash'
import kit from '@elzup/kit'
import repl from 'repl'

const registerContext = (key, value) =>
  Object.defineProperty(r.context, key, { enumerable: true, value })

// start message
console.log('anozon node repl (^•ω•^)')

const libs = {
  _: lodash,
  kit,
}

const r = repl.start({ prompt: 'node> ' })

Object.entries(libs).forEach(([key, value]) => registerContext(key, value))
