#! /usr/bin/env node
import lodash from 'lodash'
import kit from '@elzup/kit'
import repl from 'repl'

// start message
console.log('anozon node repl (^•ω•^)')

const r = repl.start({ prompt: 'node> ' })

Object.defineProperty(r.context, '_', {
  configurable: false,
  enumerable: true,
  value: lodash,
})

r.context.kit = kit
