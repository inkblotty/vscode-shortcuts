interface MappedKeys {
  [key: string]: string;
}
const mappedKeys : MappedKeys = {
  AltLeft: 'Option',
  AltRight: 'Option',
  KeyD: 'd',
  KeyP: 'p',
  KeyU: 'u',
  KeyW: 'w',
  MetaLeft: 'Command',
  MetaRight: 'Command',
};
export const isMappableKey = (keyToCheck: any) : keyToCheck is keyof MappedKeys => {
  return typeof keyToCheck === 'string' && mappedKeys.hasOwnProperty(keyToCheck)
}
export default mappedKeys;
