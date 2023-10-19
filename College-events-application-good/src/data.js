export const categories = [
    'Educatin',
    'Ux/Ui',
    'Scrurty',
    'AI'
]
export const nameRequest= [
    'AllRequest',
    'Approved',
    'Deliced',
]

export const eventData = [
    {
        id: 1,
        title: 'Learn Python',
        description: "Join us for an interactive session where we dive into the fundamentals of Python programming. Whether you're a beginner or looking to brush up on your skills, this event is perfect for you. Get ready to explore the syntax, data types, and control structures of Python in a fun and engaging way. Don't miss this opportunity to level up your coding game! #Python #CodingEvent",

        date: '2023-10-01',
        time: '10:00 AM',
        location: 'hall 1',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png',
        category: categories[0],
    },
    {
        id: 2,
        title: 'Event Learn Javascript',
        description: "Calling all aspiring web developers! Join us for an exciting session where we unravel the mysteries of JavaScript. Whether you're new to programming or want to enhance your JavaScript skills, this event is perfect for you. Discover the power of JavaScript as we delve into variables, functions, loops, and more. Get ready to build interactive web applications and bring your ideas to life! Don't miss out on this opportunity to level up your coding skills. #JavaScript #WebDevelopment #CodingEvent",
        date: '2023-05-02',
        time: '11:00 AM',
        location: 'Location 2',
        photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6a%2FJavaScript-logo.png&f=1&nofb=1&ipt=fc8ff21b83c4c2029d71fcbc98af377ba05a1382081a0c672d6a88e955cacedd&ipo=images',
        category: categories[1],
    },
    {
        id: 3,
        title: 'Event 3',
        description: 'Description 3',
        date: '2023-05-03',
        time: '12:00 PM',
        location: 'Location 3',
        photo: 'https://picsum.photos/700',
        category: categories[2],
    },
    {
        id: 4,
        title: 'Event 4',
        description: 'Description 4',
        date: '2023-05-04',
        time: '01:00 PM',
        location: 'Location 4',
        photo: 'https://picsum.photos/400',
        category: categories[2],
    }
]
export const eventrequest =[
    {
        id: 1,
        user:"joud",
        title: 'Learn Python',
        description: "Join us for an interactive session where we dive into the fundamentals of Python programming. Whether you're a beginner or looking to brush up on your skills, this event is perfect for you. Get ready to explore the syntax, data types, and control structures of Python in a fun and engaging way. Don't miss this opportunity to level up your coding game! #Python #CodingEvent",

        date: '2023-10-01',
        time: '10:00 AM',
        location: 'hall 1',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png',
        nameRequest: nameRequest[1],
    },
    {
        id: 2,
        user:"nada",
        title: 'Event Learn Javascript',
        description: "Calling all aspiring web developers! Join us for an exciting session where we unravel the mysteries of JavaScript. Whether you're new to programming or want to enhance your JavaScript skills, this event is perfect for you. Discover the power of JavaScript as we delve into variables, functions, loops, and more. Get ready to build interactive web applications and bring your ideas to life! Don't miss out on this opportunity to level up your coding skills. #JavaScript #WebDevelopment #CodingEvent",
        date: '2023-05-02',
        time: '11:00 AM',
        location: 'Location 2',
        photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6a%2FJavaScript-logo.png&f=1&nofb=1&ipt=fc8ff21b83c4c2029d71fcbc98af377ba05a1382081a0c672d6a88e955cacedd&ipo=images',
        nameRequest: nameRequest[1],
    },
    {
        id: 3,
        user: "Atheer",
        title: 'jave',
        description: 'Description 3',
        date: '2023-05-03',
        time: '12:00 PM',
        location: 'Location 3',
        photo: 'https://picsum.photos/700',
        nameRequest: nameRequest[2],

    },
    {
        id: 4,
        user:"shaden",
        title: 'Ux/Ui',
        description: 'Description 4',
        date: '2023-05-04',
        time: '01:00 PM',
        location: 'Location 4',
        photo: 'https://picsum.photos/400',
        nameRequest: nameRequest[2],
    }

]

const users=[
{
    name: "Atheer",
    email:"atheer@gmail.com",
    isadmin:true,
},
{
name: "juod",
email:"joud@gmail.com",
isadmin:false,
}
]