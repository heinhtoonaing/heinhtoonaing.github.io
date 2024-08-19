import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Fetch contacts with optional query
export async function getContacts(query) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem("contacts") || [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

// Create a new contact
export async function createContact(contact) {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let newContact = { id, createdAt: Date.now(), ...contact };
  let contacts = await getContacts();
  contacts.unshift(newContact);
  await set(contacts);
  return newContact;
}

// Get a specific contact by ID
export async function getContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts") || [];
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}

// Update an existing contact by ID
export async function updateContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts") || [];
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error(`No contact found with ID ${id}`);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

// Delete a contact by ID
export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts") || [];
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

// Helper function to save contacts to localforage
function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// Simulate network delay
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
