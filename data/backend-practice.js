const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {

    console.log( xhr.response);
});
// in the eventlistner first we have to add the event = load and then function 

xhr.open('GET', 'http://supersimplebackend.dev/products/first'); 
xhr.send();
 
// get means we get info from the backend like name image id etc 