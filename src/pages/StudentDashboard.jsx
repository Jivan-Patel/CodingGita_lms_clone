
function Student() {
  const data = JSON.parse(localStorage.getItem("user"));

  if (!data) {
    return (
      <div>
        No user Found
      </div>
    )
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold text-3xl">Student Dashboard</h1>
        <p>UID: {data.uid}</p>
        <p>UID: {data.role}</p>
        <p>UID: {data.name}</p>
      </div>
    </section>
  )
}

export default Student
