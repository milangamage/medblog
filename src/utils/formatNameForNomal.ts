export function formatURLNameToNormal(name: string): string {
    if (typeof name !== 'string') {
      console.error('Expected a string but received:', name);
      return '';
    }
  
    return name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  