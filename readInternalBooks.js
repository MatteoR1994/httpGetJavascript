fetch("./assets/books.json")
.then(manageResonse)
.then(onDataReady)
.catch(onError);


function manageResonse(response) {
    console.log(response);
    return response.json();
}

function onDataReady(data) {
    const listOfBooksTitle = document.getElementById("book-list");

    for (const book of data) {
        const lisItem = document.createElement('li');
        lisItem.className += "book" + " ";

        addTextToHtmlElement(lisItem, book.title, true, "bold large-font");
        addTextToHtmlElement(lisItem, book.author, true, "large-font");
        addTextToHtmlElement(lisItem, book.publisher, true);
        addTextToHtmlElement(lisItem, book.price);

        listOfBooksTitle.appendChild(lisItem);
    }
}

function addTextToHtmlElement(htmlElement, text, isNewLine = false, className) {
    const span = document.createElement('span');
    span.className += className + " ";
    const textNode = document.createTextNode(text);
    span.appendChild(textNode);
    htmlElement.appendChild(span);
    if (isNewLine) {
        htmlElement.appendChild(document.createElement('br'));
    }
}

function onError(error) {
    console.log(error);
}