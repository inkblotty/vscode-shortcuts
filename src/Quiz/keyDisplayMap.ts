interface MappedKeys {
  [key: string]: string;
}
const mappedKeys : MappedKeys = {
  AltLeft: 'Option',
  KeyD: 'd',
  KeyP: 'p',
  KeyU: 'u',
  KeyW: 'w',
  MetaLeft: 'Command',
};
export const isMappableKey = (keyToCheck: any) : keyToCheck is keyof MappedKeys => {
  return typeof keyToCheck === 'number' && mappedKeys.hasOwnProperty(keyToCheck)
}
export default mappedKeys;
