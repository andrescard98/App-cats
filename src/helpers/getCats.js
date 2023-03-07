export const getCats = async() => {

    const url = "http://localhost:8080/api/cats?limite=10";

    /* const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }; */

      const resp = await fetch(url);

      const { cats } = await resp.json();

      console.log(cats)
      
      /* fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); */
    

}