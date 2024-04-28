// javascript code goes here
let tbody = document.getElementsByTagName("tbody")[0]
let url = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";
fetch(url).then((response) => {
    response.json()
        .then((result) => {
            result.sort((a, b) => a.NRR - b.NRR)
                .forEach((item) => {
                    let tr = document.createElement("tr");
                    Object.keys(item).forEach((key) => {
                        let td = document.createElement("td");
                        td.innerText = item[key];
                        tr.appendChild(td);
                    })
                    tbody.appendChild(tr);

                })
        })
})