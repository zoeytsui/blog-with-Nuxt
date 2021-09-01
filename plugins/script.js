export default (context, inject) => {
    // pass content key
    inject('key', (str) => {
        try {
            let result;
            let lang = context.i18n.locale.toUpperCase();
            let contentArr = context.store.state.locales.contentArr;

            contentArr.default.find(arr => { arr.KEY === str.toUpperCase() ? result = arr[`${lang}`] : null });

            return result;
        } catch (error) { console.error(error) }
    }),
        // Turn an Object into Query String Parameters
        inject('objectToQueryString', (obj) => {
            try {
                return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
            } catch (error) { console.error(error) }
        })
}