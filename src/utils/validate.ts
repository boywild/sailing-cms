export default {
  isIdCard(value: string) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
  },
  isEmail(value: string) {
    return /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(value)
  },
  isCH(value: string) {
    return /[^\u4e00-\u9fa5]/.test(value)
  },
  isPhone(value: string) {
    return /^1[0-9]{10}$/.test(value)
  },
  isUrl(value: string) {
    return /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(value)
  },
  isNumber(value: string) {
    return /^\d+(\.\d+)?$/.test(value)
  },
  isAndroid() {
    const u = navigator.userAgent.toLowerCase()
    return /android/.test(u) || /linux/.test(u)
  },
  isIOS() {
    return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
  },
  isSpecialCharacter(value: string) {
    return /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/.test(value)
  }
}
