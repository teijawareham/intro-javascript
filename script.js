var client = contentful.createClient({
    space: 'kixvueiswqpv',
    accessToken: 'QZCfAeAEXa9yEVO_VtL5_Rkjqi3OMxbbiJ0hC23puEc'
});


var entryDiv = document.getElementById('entryDiv');
var cardHeading = document.getElementById('card-heading');

// client.getEntries({content_type:'cars'}).then(function (entries) {
//     // log the title for all the entries that have it

//     var autoDiv = document.createElement('div');
//     autoDiv.classList.add('auto-div');

//     entries.items.forEach(function (entry) {
//       if (entry.fields.title) {
//         // console.log("Car:", entry.fields.title);
//         // var title = document.createElement('h2');
//         // var website = document.createElement('a');

//         cardHeading.innerHTML = entry.fields.title;
//         console.log("cardHeading", cardHeading)
//         // autoDiv.appendChild(title)
        
//         // title.innerHTML = entry.fields.title

//         // website.innerHTML = entry.fields.website
//         // website.href = entry.fields.website
//         // autoDiv.appendChild(website)

//         // entryDiv.appendChild(autoDiv)

//       }
//     });
//   });

//   title.classList.add('title');
// title.innerHTML = 'Example Title';

// var placeForContent = document.getElementById('place-for-content');

// // gets all the entries as a json
// client.getEntries().then(function (entries) {
// // loops through the json to look at one entry at a time
//     entries.items.forEach(function (entry) {
//         // if statement chechs that this field exists
//         var entryDiv = document.createElement('div');
//         entryDiv.classList.add('entry-div');

//         if (entry.fields.name) {
//             var name = document.createElement('h2');
//             name.innerHTML = entry.fields.name;
//             entryDiv.appendChild(name);

//             var link = document.createElement('a');
//             link.innerHTML = "link to " + entry.fields.name;
//             link.href = entry.fields.link;
//             entryDiv.appendChild(link);
//             placeForContent.appendChild(entryDiv);
//         }

//     });
// });


// var cars = [
//     {
//         title: "Ferrari",
//         website: "https://ferrari.com",
//         models: [
//             { color: "red" },
//             { color: "black" },
//         ]
//     },
//     {
//         title: "Bugatti",
//         website: "https://buggati.com",
//         models: [
//             { color: "yellow" },
//             { color: "green" },
//         ]
//     },
// ];

// console.log("cars", cars)
// cars.forEach(function (car) {
//     console.log("cars name is " + car.title);
//     car.models.forEach(function (model) {
//         console.log("Model is " + model.color);
//     })
// });



// console.log(students[1].courses[0].name);

// students.forEach(function (student) {
//     console.log("student name is " + student.name);
//     student.courses.forEach(function (course) {
//         console.log("Course is " + course.name);
//     })
// });

// function getName(student) {
//     console.log(student.name);
// }
// getName(students[0]);


// Images
// client.getEntries({content_type:'cars'}).then(function (entries) {
//   entries.items.forEach(function (entry) {
//       if (entry.fields.title && entry.fields.image) { // Assuming 'image' is the field for the image
//           var autoDiv = document.createElement('div');
//           autoDiv.classList.add('auto-div');

//           var title = document.createElement('h2');
//           var website = document.createElement('a');
//           var image = document.createElement('img'); // Create an img element

//           title.innerHTML = entry.fields.title;
//           autoDiv.appendChild(title);

//           website.innerHTML = entry.fields.website;
//           website.href = entry.fields.website;
//           autoDiv.appendChild(website);

//           image.src = entry.fields.image.fields.file.url; // Set the src of the img element
//           autoDiv.appendChild(image); // Add the image to the autoDiv

//           entryDiv.appendChild(autoDiv);
//       }
//   });
// });


var cardsContainer = document.getElementById('cardsContainer');
var websiteDiv = document.getElementById('website');


client.getEntries({content_type:'cars'}).then(function (entries) {
  entries.items.forEach(function (entry) {
 
    var heading1 = document.createElement('h1');
    heading1.innerHTML = entry.fields.title
    console.log("heading1", heading1)








    var li = document.createElement('li');
    li.classList.add('slide-wrapper');

     // Create and append the image
     console.log('entry',entry)
     var imageUrl = "https:" + entries.items.fields.website + "?fit=thumb&h=500&w=500";

    //images.ctfassets.net/bf6jxq3vxx6p/7kpoLxDOwUIkYHGnn4oTrf/27ee05bac2b119c413229f6585584df4/Ferrari_F430_Montreal_Exotic_600x.jpg
    //  console.log(imageUrl)

     var img = document.createElement('img');
     img.classList.add('photo');
     img.src = imageUrl; // Placeholder, replace with actual image URL if available
     li.appendChild(img);

    // Create the content div
    var contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

     // Create and append the heading
     var h2 = document.createElement('h2');
     h2.innerHTML = entry.fields.title; // Assuming 'title' is the field for the title
     contentDiv.appendChild(h2);

     // Append content div to li
     li.appendChild(contentDiv);

    cardsContainer.appendChild(li);

  });
});

var testDiv = document.getElementById("test")

client.getEntries({content_type:'cars'}).then(function (entries) {
  entries.items.forEach(function (entry) {

    var h1 = document.createElement('h1')
    


  });
});