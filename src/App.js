import * as React from "react";
import Dialog from "@reach/dialog";
import "@reach/dialog/styles.css";
import "./styles.css";

function UserTypeDialog({ isOpen, initialType, onDismiss }) {
  const [userType, setUserType] = React.useState(initialType);

  React.useEffect(() => {
    if (!isOpen) setUserType("USER");
  }, [isOpen]);

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss}>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="SUPERADMIN">Superadmin</option>
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
      </select>
    </Dialog>
  );
}

const users = [
  {
    id: 1,
    userType: "USER",
    name: "User 1"
  },
  {
    id: 2,
    userType: "ADMIN",
    name: "User 2"
  }
];

export default function App() {
  const [user, setUser] = React.useState();
  const [open, setOpen] = React.useState(false);

  function handleChangeUserType(user) {
    setUser(user);
    setOpen(true);
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <>
            <li>
              {user.name} ({user.userType})
            </li>
            <button onClick={() => handleChangeUserType(user)}>
              Set user type
            </button>
          </>
        ))}
      </ul>

      <UserTypeDialog
        key={user?.id}
        initialType={user?.userType}
        isOpen={Boolean(user)}
        onDismiss={() => setUser(null)}
      />
    </div>
  );
}
