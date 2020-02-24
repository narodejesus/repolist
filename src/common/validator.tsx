
export const isEmail = (email: string = '') => {
    var emailExperssion = /\S+@\S+\.\S+/;

    return emailExperssion.test(email)
}

export const isNotEmpty = (value: string = '') => {
    return value.length >= 1
}