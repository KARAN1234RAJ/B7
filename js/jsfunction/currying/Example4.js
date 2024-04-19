const sendReq = greet => name => message =>
`${greet} ${name}, ${message}`
sendReq('Hello')('Karan')('Can you please add me in your Group ?')
