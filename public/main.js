getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/1.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}
getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
getXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName(`warning`)[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', "/4.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.hobby
        }
    }
    request.send()
}
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}.json`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                list.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};