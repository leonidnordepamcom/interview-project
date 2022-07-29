function groupByName(people) {
    const outputArray = [];

    people.forEach(el =>{
        if (outputArray.length > 0){
            let next = false;
            for (let i = 0; outputArray.length > i; i++){
                if (el.name === outputArray[i].name && next === false){
                    outputArray[i].groupItems.push(el)
                    next = true;
                } else if (outputArray.length === i+1 && next === false) {
                    const obj = {
                        name: el.name,
                        groupItems: [el]
                    }
                    next = true;
                    outputArray.push(obj)
                }
            }
        } else {
            const obj = {
                name: el.name,
                groupItems: [el]
            }
            outputArray.push(obj)
        }
    })
    return outputArray;
}

function groupByNameOptimized(people) {
    const outputArray = [];
    const sortObj = people.reduce((processedVal, currentVal) => {
        (processedVal[currentVal['name']] = processedVal[currentVal['name']] || []).push(currentVal);
        return processedVal;
    }, {});
    const key = Object.keys(sortObj);
    key.forEach(element => {
        const obj = {
            name: element,
            groupItems: sortObj[element]
        }
        outputArray.push(obj)
    })
    return outputArray;
}

module.exports = {groupByName, groupByNameOptimized};