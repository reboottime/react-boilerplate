import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * To get an id for html element, usually used when you want to create a htmlFor value
 * @param id string | undefined
 * @returns  string
 */
export function useHtmlElementId(id: string | undefined) {
  return useRef<string>(id ?? uuidv4());
}
