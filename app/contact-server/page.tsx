const fetchContact = () =>
  fetch("http://localhost:3000/api/contact").then((res) => res.json());
const ContactPage = async () => {
  const contact = await fetchContact();

  return (
    <div>
      <h1>Contact server page</h1>
      <div>
        <pre>{JSON.stringify(contact, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ContactPage;
