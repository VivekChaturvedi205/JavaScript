const User={
    _email:'original.ai',
    _password:'123',

    get email(){
        return this._email.toLowerCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea=Object.create(User);
// console.log(tea.email);