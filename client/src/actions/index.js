export const TEST = 'TEST';

export function testAction() {
  console.log('testAction called');
  return {
    type: TEST,
    payload: 'TeSt'
  };
}
