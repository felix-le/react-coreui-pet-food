```bash
const userDetails = user
? Object.entries(user)
: [
    [
      "id",
      <span>
        <i className="text-muted icon-ban"></i> Not found
      </span>,
    ],
  ];


{userDetails.map(([key, value]) => {
  return (
    <tr key={key}>
      <td>{`${key}:`}</td>
      <td>
        <strong>
          {value === user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              style={{ maxHeight: "300px" }}
            />
          ) : (
            value
          )}
        </strong>
      </td>
    </tr>
  );
})}
```
