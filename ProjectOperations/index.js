const { Command } = require('commander')
const program = new Command()

program
  .requiredOption("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");


program.parse(process.argv)

const argv = program.opts()

const actionHandler = require('./actionHandler')

// invokeAction(argv).then(() =>
//   console.log(chalk.green.bold('Operation Success!')),
// )

;(async () => {
    await actionHandler(argv);
  })();