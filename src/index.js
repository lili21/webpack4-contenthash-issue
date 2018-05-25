import _ from 'lodash'

_.get({ a: 'a' }, 'a')

console.log('webpack content hash issue')

const d = document.createElement('div')

d.style.color = 'red'
d.innerText = 'Hello, dynamic text'

document.getElementById('root').appendChild(d)
