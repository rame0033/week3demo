function rows(counters){
    // display table date from counters array
    return counters
    .map( counters =>
        `<tr>
              <th scope="row">${counters.index}</th>
              <td>${counters.name}</td>
              <td>${counters.bean}</td>
              <td>${counters.count}</td>
            </tr>` 
    ).join(" ")
}

//search function
function search(counters, query){
    return counters.filter(counters => counters.name.toLowerCase().includes(query.toLowerCase()) || counters.bean.toLowerCase().includes(query.toLowerCase())
);
}

//Combining the values
function total(counters){
    return counters.reduce((total, counters) => (total += counters.count), 0)
}

function order(counters, property){
    return counters.sort((a, b) => {
        if (a[property] < b[property]){
            return -1 //ascending order
        } else if (a[property] > b[property]){
            return 1 //descending order
        } else {
            return 0 //no change
        }
    })
}