function fromWhere(car_registration_number) {
    if (car_registration_number.startsWith('CY')) {
        return 'Bellville';
    } else if (car_registration_number.startsWith('CJ')) {
        return 'Paarl';
    } else if (car_registration_number.startsWith('CA')) {
        return 'Cape Town';
    } else {
        return 'Some other place!';
    }
}
console.log(fromWhere('ZN 568593'));