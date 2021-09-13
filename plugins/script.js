export default ({ i18n, store }, inject) => {
    // pass content key
    inject('key', (str) => {
        try {
            let lang = i18n.locale.toUpperCase();
            let content = store.state.locales.content;
            let keyObj = content.default.find(arr => arr.KEY.includes(str.toUpperCase()));

            return !keyObj ? str : !keyObj[`${lang}`] ? keyObj['EN'] : keyObj[`${lang}`]
        } catch (error) { console.error(error) }
    }),
        // Turn an Object into Query String Parameters
        inject('objectToQueryString', (obj) => {
            try {
                return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
            } catch (error) { console.error(error) }
        })
}