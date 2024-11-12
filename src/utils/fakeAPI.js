const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    return new Promise((resolve) => {
        let result = [];
        let random = seededRandom(new Date(date).getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ":00");
            }
            if (random() < 0.5) {
                result.push(i + ":30");
            }
        }

        resolve(result);  // Resolve with the array of times
    });
};
export const submitAPI = function(formData) {
    return new Promise((resolve) => {
        console.log("Mock submitting form data:", formData);
        // Simulate a delay if desired
        setTimeout(() => {
            resolve(true);  // Resolves with `true` to indicate success
        }, 1000);
    });
};