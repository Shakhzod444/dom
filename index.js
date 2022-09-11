let form = document.forms.login
let inps = form.querySelectorAll('input')
let b = document.querySelector('.txt2')
let b2 = document.querySelector('.txt')
let btn = document.querySelector("button")
let box = document.querySelector('.box')
let pattern = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    phone: /^9989[012345789][0-9]{7}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    surname: /^[a-z ,.'-]+$/i,
    age: /^[0-9]{2,}$/,
    about: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    html: /^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
    school: /^[0-9]{2,}$/,
    car: /^[a-z ,.'-]+$/i,
    friend: /^[a-z ,.'-]+$/i,
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
        btn.style.background = 'rgb(0, 0, 103)';


    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
        btn.style.background = 'red';


    }
}

inps.forEach(inp => {
    inp.onkeyup = () => {
        validate(inp, pattern[inp.name])
    }
});

form.onsubmit = e => {
    e.preventDefault()
    let errCount = 0
    let succses = 0
    inps.forEach(inp => {
        if (inp.value.length === 0 || inp.classList.contains('invalid')) {
            errCount++
            inp.classList.add('invalid')
            box.style.display = 'block'

        }
    })
    inps.forEach(inp => {
        if (inp.value.length > 0 || inp.classList.contains('valid')) {
            succses++
            inp.classList.add('valid')
            box.style.display = 'none'


        }
    })



    b.innerHTML = errCount
    b2.innerHTML = succses

    if (errCount === 0) {
        submit(form)
    }
}

function submit(elem) {
    let user = {
        id: Math.random()
    }

    let fm = new FormData(elem)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}