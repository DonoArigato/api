// Demos for Apis

// (function() {
//     $.get("data/computer-science-hall-of-fame.json").then(function(data) {
//         var list = $("#hall-of-fame-list");

//         data.tiny.forEach(function(entry) { /*forEach is a method. tiny is the Array, data is object*/
//             list.append('<li>' +
//                 'In ' + entry.year + ' <em>' + entry.name + '</em> invented ' + entry.invented + '.' +
//             '</li>');
//         });
//     });
// })();

// for every Element within the tiny Array.
"use strict:"

$(document).ready(() => {
 $.get(' https://www.reddit.com/r/aww/.json', (data) => {
        // Put all your code to handle the response inside this function.
        for (let post of data.data.children) {
            
            console.log(data);
            console.log(data.data.children["0"].data.permalink);
            console.log(post.data.preview.images["0"].source.url);
            console.log(post.data.title);
            
            $("body").append(`<div id="pet">
              <h2>${post.data.author}</h2>
            
              <img src="${post.data.preview.images["0"].source.url}">
              <p> <a href="https://www.reddit.com/${post.data.permalink}">${post.data.title}

           
              </div>
            `)
    


        // console.log(Data);
    
};
})
});


//         responseData.posts.forEach(posts => {
//             console.log(posts.title);
//         });

//         responseData.posts.forEach(posts => {
//          for( let posts = 0 ;i < responseData.posts.length; i++)
//          console.log(posts.tags)

       
           
        
        


//   });   
// });

// var promise = $.get("http://api.example.com/things");
// // later...
// promise.then((responseData) => {
// console.log(responseData);
// });

// var promise = $.get("http://api.example.com/things");
// // later...
// promise.then((responseData) => {
// console.log(responseData);
// });

// var promise = $.get("http://api.example.com/things");
// // later...
// promise.then((responseData) => {
// console.log("Look at this", responseData);
// });
// // later...
// promise.then((responseData) => {
// console.log("And here it is again, responseData);
// });

// const oneSecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve("It's been a second");
//     }, 1000);
//     });

//     const confirmationPromise = new Promise((resolve, reject) => {
//         $("#confirm-button").click(() => {
//         resolve("User confirmed.")
//         });
//         setTimeout(() => {
//         reject("User did not confirm within 30 seconds");
//         }, 30000);
//         })
//     });