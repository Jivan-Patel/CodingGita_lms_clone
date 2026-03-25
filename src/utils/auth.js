export const loginCredentials = {
    uid: "108796",
    password: "123456",
    name: "Patel Jivan",
    email: "patel.jivan.cg@gmail.com",
    university: "SUxCG 714",

    image: "https://res.cloudinary.com/dkohpqbdj/image/upload/v1770271335/profile_nbhijj.jpg",

    attendance: {
        Semester: "Semester 2",
        present: 141,
        total: 152,
        bonus: 0,
        percentLabel: 93,
        startDate: "9/01/2026",
        endDate: "30/06/2026"
    },

    subjects: [
        "SU11 - GIT & GITHUB",
        "SU12 - C Language",
        "SU13 - HTML/CSS/JS",
        "SU14 - UI/UX FIGMA",
        "SU15 - MATHS",
        "SU16 - JavaScript",
        "SU0201 - ReactJS",
        "SU0202 - NodeJS",
        "SU0203 - NoSQL",
        "SU0204 - OOPS",
        "SU0205 - Maths 2",
        "SU0206 - EVS",
        "SU0207 - IR 01",
        "SU0208 - IR 02",
    ],
    mentors: [
        {
            name: "Ankita",
            batch: "SUxCG 714",
        },
    ],

    assignments: 0,
    pendingAssignments: 0,
    events: [],

    todaysAttendance: [
        {
            subject: "SU0204 - OOPS(C++)",
            markedBy: "Ankita",
            status: "present"
        },
        {
            subject: "SU0201 - ReactJS",
            markedBy: "Ankita",
            status: "present"
        },
        {
            subject: "SU0202 - NodeJS",
            markedBy: "Ankita",
            status: "present"
        },
        {
            subject: "SU0203 - NoSQL Database(MongoDB/Redis)",
            markedBy: "Ankita",
            status: "present"
        },
    ]
}

export const loginDetails = (uid, password) => {
    if (uid === loginCredentials.uid && password === loginCredentials.password) {
        
        localStorage.setItem("user", JSON.stringify(loginCredentials));
        return true;
    }
    return false;
}