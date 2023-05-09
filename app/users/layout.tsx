type UsersLayoutProps = {
  children: React.ReactNode;
  new: React.ReactNode;
  todos: React.ReactNode;
};
export default function UsersLayout(props: UsersLayoutProps) {
  return (
    <section className="grid gap-4">
      {props.children}
      <div className="grid grid-cols-2 gap-4">
        {props.new}
        {props.todos}
      </div>
    </section>
  );
}
