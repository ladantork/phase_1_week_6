const notifyByEmail = (email)=>{

    return 'Email sent to: <EMAIL>';
}

const notifyByText = (text) =>{
    return 'Text sent to: <PHONE NUMBER>';
}

const notify = (method, notifyFunction) => {
    return notifyFunction(method);
}

notify('hello@makers.tech.test', notifyByEmail);
notify('+10000000000', notifyByText);