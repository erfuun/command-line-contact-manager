const {
  list_contact,
  create_conatct,
  deleteContact
} = require("./controllers/contactController");

const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "create",
  aliases: ["c"],
  describe: `${chalk.green("Create new contact")}`,
  builder: {
    fullname: {
      describe: `${chalk.red.bgCyanBright("Conatact fullname")}`,
      alias: "f",
      demandOption: true,
      type: "string"
    },
    phone: {
      describe: `${chalk.red.bgCyanBright("Contact phone number")}`,
      alias: "p",
      demandOption: true,
      type: "number"
    },
    email: {
      describe: `${chalk.red.bgCyanBright("Contact email")}`,
      alias: "e",
      demandOption: true,
      type: "string"
    }
  },
  handler({ fullname, phone, email }) {
    create_conatct(fullname, phone, email);
  }
});
yargs.command({
  command: "list",
  aliases: ["l"],
  describe: `${chalk.green("List all contact")}`,
  handler() {
    list_contact();
  }
});

yargs.command({
  command: "delete",
  aliases: ["d"],
  describe: `${chalk.green("delete person")}`,
  builder: {
    fullname: {
      describe: `${chalk.red.bgCyanBright("Contact Fullname")}`,
      alias: "f",
      demandOption: true,
      type: "string"
    }
  },
  handler({ fullname }) {
    deleteContact(fullname);
  }
});

yargs.parse();
