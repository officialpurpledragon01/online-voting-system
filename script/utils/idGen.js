export function userIdGen() {
  return 'VOTER-' + Math.floor(Math.random() * 1000) + '-' + Math.floor(Math.random() * 2000);
}