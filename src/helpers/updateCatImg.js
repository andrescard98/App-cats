
export const updateCatImg = async (formState, uid) => {

    try {


        const url = `http://localhost:8080/api/uploads/64026fecd9f98408f0e089f9`;

        const requestOptions = {
            method: 'PUT',
            body: formState.img,
            redirect: 'follow'
        };
        const resp = await fetch(url, requestOptions);

        const newCat = await resp.json();

        console.log(newCat.cat);

    } catch (error) {
        console.log(error)
    }
    
}
