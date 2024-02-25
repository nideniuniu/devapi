export function endsWith(str: string, suffix: string) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// @ts-ignore
export const isWeAPP = () => typeof wx !== 'undefined';
