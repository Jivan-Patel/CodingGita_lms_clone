export const loginCredentials = {
    uid: "108796",
    password: "123456",
}

export const loginDetails = (uid, password) => {
    if (uid === loginCredentials.uid && password === loginCredentials.password) {
        const user = {
            uid,
            role: "Students",
            name: "Patel Jivan"
        }
        localStorage.setItem("user", JSON.stringify(user));
        return true;
    }
    return false;
}