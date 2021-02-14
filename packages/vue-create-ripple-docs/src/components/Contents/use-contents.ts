import { reactive, readonly, VNode } from "vue";

interface RenderHeader {
  (): VNode[];
}

export interface RegisteredHeader {
  id: string;
  render: RenderHeader;
  children: Omit<RegisteredHeader, 'children'>[]
}

export default function useContents() {
  const registered = reactive<RegisteredHeader[]>([]);

  function register(id: string, sub: boolean, render: RenderHeader): string {
    if (sub) {
      // Ищу последний
      const last = registered[registered.length - 1];
      const actualId = `${last.id}-${id}`;
      last.children.push({ id: actualId, render });
      return actualId;
    }
    
    registered.push({
      id, render, children: [],
    })

    return id;
  }

  return readonly({
    registered,
    register
  })
}
