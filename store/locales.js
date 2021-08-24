const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

export const state = () => ({
    contentArr: []
})

export const mutations = {
    updateData(state, contentArr) {
        state.contentArr = contentArr;
    },
}

export const actions = {
    getData({ state, commit }) {
        try {
            if (typeof fs.readFileSync !== 'function') return;
            const file = excelToJson({
                // source: fs.readFileSync('./locales.xlsx'),
                sourceFile: './locales.xlsx',
                header: {
                    // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
                    rows: 1
                },
                columnToKey: {
                    // {{columnHeader}} will follow the config header.rows or, in case it is not specified, it will always treat the first row as a header.
                    '*': '{{columnHeader}}'
                },
                sheetStubs: true
            });
            commit('updateData', file);

        } catch (error) {
            console.error(error);
        }
    }
}