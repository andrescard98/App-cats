export const postCat = async (cat) => {

    try {

        const url = "http://localhost:8080/api/cats";

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cat),
            redirect: 'follow'
        };
        const resp = await fetch(url, requestOptions);

        const newCat = await resp.json();

        console.log(newCat.cat);

    } catch (error) {
        console.log(error)
    }

}