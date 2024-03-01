class User{
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }

    get email() { 
        return this._email.toLowerCase();
    }

    set email(email1) { 
        this._email=email1;
    }

    get password(){
        return this._password.toLowerCase();

    }

    set password(n_password){
        this._password = n_password.toLowerCase();
    }
}

const hitesh= new User("hitesh.ai","123");
console.log(hitesh.email);