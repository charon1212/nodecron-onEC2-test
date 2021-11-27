import * as cron from 'node-cron';

const main = () => {
  console.log('register')
  cron.schedule('*/3 * * * * *', () => {
    console.log('hello')
  })
};

main();
