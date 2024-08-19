import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact, getContact } from "../contacts";

// Loader function to fetch the contact data based on the contactId parameter
export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

// Action function to handle form submission and update the contact
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

// EditContact component
export default function EditContact() {
  const { contact } = useLoaderData(); // Fetches the contact data
  const navigate = useNavigate(); // Allows navigation within the app

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1); // Navigates back to the previous page when "Cancel" is clicked
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
