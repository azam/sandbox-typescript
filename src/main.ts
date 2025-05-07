import { add } from './lib';

async function main(): Promise<void> {
  console.log('Hello, world!');
  console.log('add(1, 2) = ' + add(1, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
