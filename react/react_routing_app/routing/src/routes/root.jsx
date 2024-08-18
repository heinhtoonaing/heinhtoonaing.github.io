import {
    Outlet,
    NavLink,
    Form,
    useLoaderData,
    useNavigation,
    useSubmit,
    redirect,
  } from "react-router-dom";
  import { getContacts, createContact } from "../contacts";
  import { useEffect } from "react";
  
  // Loader function to fetch contacts and query parameters
  export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
  }
  
  // Action function to handle the creation of a new contact
  export async function action() {
    await createContact(); // Create a new contact with default values
    return redirect("/"); // Redirect to the root page
  }
  
  // Main component for the Root route
  export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
  
    // Update the search input value when query changes
    useEffect(() => {
      document.getElementById("q").value = q;
    }, [q]);
  
    // Determine if a search is in progress
    const searching =
      navigation.location &&
      new URLSearchParams(navigation.location.search).has("q");
  
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            {/* Search form */}
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });
                }}
                className={searching ? "loading" : ""}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
            </Form>
            {/* Form to create a new contact */}
            <Form method="post">
              <button type="submit">New</button>
            </Form>
            {/* Navigation links */}
            <nav>
              {contacts.length ? (
                <ul>
                  {contacts.map((contact) => (
                    <li key={contact.id}>
                      <NavLink
                        to={`contacts/${contact.id}`}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }
                      >
                        {contact.first || contact.last ? (
                          <>
                            {contact.first} {contact.last}
                          </>
                        ) : (
                          <i>No Name</i>
                        )}{" "}
                        {contact.favorite && <span>★</span>}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  <i>No contacts</i>
                </p>
              )}
            </nav>
          </div>
        </div>
        <div
          id="detail"
          className={navigation.state === "loading" ? "loading" : ""}
        >
          <Outlet />
        </div>
      </>
    );
  }
  