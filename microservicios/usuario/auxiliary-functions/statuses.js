const Active = 0;
const Suspended = 1;

const getStatusAccount = (status) => {
    switch (status) {
        case Active:
            return "activa";
        case Suspended:
            return "suspended";
        default:
            return;
    }
}

module.exports = {
    getStatusAccount,
}