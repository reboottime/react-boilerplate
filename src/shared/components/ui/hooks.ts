import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function useHtmlElementId(id: string | undefined) {
  return useRef<string>(id ?? uuidv4());
}
