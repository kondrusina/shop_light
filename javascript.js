fetch('https://private-anon-6ab09308be-lampshop.apiary-mock.com/lamps')
    .then(response => (response.json())
        .then(array => console.log(array[0].name)))
    .catch(error => console.log(error));
