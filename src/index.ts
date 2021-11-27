import * as cron from 'node-cron';
import * as fs from 'fs';

const main = () => {
  console.log('register')
  fs.mkdirSync('sample', { recursive: true });
  cron.schedule('*/3 * * * * *', () => {
    console.log('hello')
    fs.appendFileSync('sample/test.txt', 'newline\n', {});
  })
};

main();
