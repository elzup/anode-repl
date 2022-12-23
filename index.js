#! /usr/bin/env node
import _ from 'lodash'
import _ from 'lodash'
import repl from 'repl'

console.log('anozon node repl (^•ω•^)')

const r = repl.start({ prompt: 'node> ' })

r.context._ = _
r.context._ = _
