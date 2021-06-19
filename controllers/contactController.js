const fs = require("fs");
const chalk = require("chalk");

const add_contact = (fullname, phone, email) => {
  const contacts = load_contact();
  const duplicateContact = contacts.find(c => c.fullname === fullname);
  if (!duplicateContact) {
    const contact = JSON.stringify([...contacts, { fullname, phone, email }]);
    fs.writeFileSync("data/contacts.json", contact);
    console.log(chalk.greenBright("Conatct Saved."));
  } else {
    console.log(chalk.redBright("Conatct alredy exists."));
  }
};

const load_contact = () => {
  try {
    const data = fs.readFileSync("data/contacts.json");
    return JSON.parse(data.toString());
  } catch (error) {
    return [];
  }
};

const list_contact = () => {
  const contacts = load_contact();
  if (contacts[0]) {
    console.table(contacts);
  } else {
    console.log(chalk.redBright("You don't have any contact."));
  }
};

const deleteContact = fullname => {
  const contacts = load_contact();

  const filterdContact = contacts.filter(
    conatct => conatct.fullname !== fullname
  );

  if (contacts.length > filterdContact.length) {
    const contact = JSON.stringify([...filterdContact]);
    fs.writeFileSync("data/contacts.json", contact);
    console.log(chalk.greenBright("Conatct deleted."));
  } else {
    console.log(chalk.redBright("Contact not found !"));
  }
};

exports.create_conatct = add_contact;
exports.list_contact = list_contact;
exports.deleteContact = deleteContact;
