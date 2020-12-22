import md5 from 'md5'

function randomStr(len = 4): string {
  const chSmall = 'a'
  let strSmall = ''
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * 26)
    strSmall += String.fromCharCode(chSmall.charCodeAt(0) + charIndex)
  }
  return strSmall
}

export default function setCommonParams() {
  const timestamp = Date.now()
  const suffix = 'lixinkeji'
  const nonce = randomStr()
  const sign = md5(timestamp + nonce + suffix)
  return {
    timestamp,
    nonce,
    sign
  }
}
