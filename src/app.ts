const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.send();

xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);

        const table = document.createElement("table");

        data.forEach((item: any) => {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            const cell3 = row.insertCell();
            cell1.innerHTML = item.id;
            cell2.innerHTML = item.title;
            cell3.innerHTML = item.completed;
        });

        document.body.appendChild(table);
    } else {
        console.error('Error fetching data');
    }
};

