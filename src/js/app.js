function makeRequest(method, url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
        done(null, xhr.response);
    };
    xhr.onerror = function() {
        done(xhr.response);
    };
    xhr.send();
}


// function addScripts() {
//     let script = document.createElement('script');
//     script.src = "https://fixdevice.pro/js/swiper.min.js";
//     document.body.appendChild(script)

// }



// async function bar() {
//     await makeRequest('GET', 'https://fixdevice.pro/js/swiper.min.js', function(err, datums) {
//         if (err) { throw err; }
//         // console.log(datums)
//     });

//     await addScripts();
//     console.log('swiper load')




// }

// bar()



// And we'd call it as such:






// const p = new Promise((resolve, reject) => {

//     makeRequest('GET', 'https://fixdevice.pro/js/swiper.min.js', function(err, datums) {
//         if (err) { throw err; }
//         resolve(datums)
//     });

// })

// p.then((data) => {
//     // console.log(data);
//     let script = document.createElement('script');
//     script.src = "https://fixdevice.pro/js/swiper.min.js";
//     document.body.appendChild(script)
//     console.log('swiper load')

// })

// .catch((e) => {
//     console.log(e);
// })