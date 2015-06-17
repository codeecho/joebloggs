'use strict';

angular.module('cvTemplate')
  .controller('MainCtrl', function($scope) {
    $scope.cv = {
      avatar: "../assets/images/avatar.jpg",
      firstName: "Joe",
      surname: "Bloggs",
      title: "Web Designer",
      dob: "11th June 1984",
      email: "joebloggs@email.com",
      website: "http://www.joebloggs.com",
      links: {
        youtube: "#",
        digg: "#",
        github: "#"
      },
      introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida nisi et porttitor porttitor. Mauris id augue posuere, aliquet nibh vitae, posuere leo. Phasellus gravida eu dolor ut ultrices. Nullam ultricies, ex nec ultricies auctor, arcu nisi convallis velit, a fringilla neque nulla ac nisi. Nulla nisl nulla, placerat vel ultrices sed, luctus in quam. Morbi ultricies augue vel purus ultricies efficitur. Nulla ac ullamcorper justo, ac condimentum leo. Fusce pretium vitae elit eu varius. Sed vitae metus sagittis, laoreet risus ut, dapibus justo. Morbi sit amet sodales metus. Nullam varius, magna a tincidunt congue, libero lorem mattis ipsum, vel varius ipsum orci aliquet urna.",
      qualifications: [
        {
          title: "Degree in Computer Science",
          location: "University Of Southampton",
          date: "2002-2005",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida nisi et porttitor porttitor. Mauris id augue posuere, aliquet nibh vitae, posuere leo. Phasellus gravida eu dolor ut ultrices. Nullam ultricies, ex nec ultricies auctor, arcu nisi convallis velit, a fringilla neque nulla ac nisi. Nulla nisl nulla, placerat vel ultrices sed, luctus in quam. Morbi ultricies augue vel purus ultricies efficitur. Nulla ac ullamcorper justo, ac condimentum leo. Fusce pretium vitae elit eu varius. Sed vitae metus sagittis, laoreet risus ut, dapibus justo. Morbi sit amet sodales metus. Nullam varius, magna a tincidunt congue, libero lorem mattis ipsum, vel varius ipsum orci aliquet urna."
        },{
          title: "Degree in Computer Science",
          location: "University Of Southampton",
          date: "2002-2005",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida nisi et porttitor porttitor. Mauris id augue posuere, aliquet nibh vitae, posuere leo. Phasellus gravida eu dolor ut ultrices. Nullam ultricies, ex nec ultricies auctor, arcu nisi convallis velit, a fringilla neque nulla ac nisi. Nulla nisl nulla, placerat vel ultrices sed, luctus in quam. Morbi ultricies augue vel purus ultricies efficitur. Nulla ac ullamcorper justo, ac condimentum leo. Fusce pretium vitae elit eu varius. Sed vitae metus sagittis, laoreet risus ut, dapibus justo. Morbi sit amet sodales metus. Nullam varius, magna a tincidunt congue, libero lorem mattis ipsum, vel varius ipsum orci aliquet urna."
        }
      ],
      work:[
        {
          company: "Foobar Ltd",
          date: "2014-Present",
          title: "Web Designer",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida nisi et porttitor porttitor. Mauris id augue posuere, aliquet nibh vitae, posuere leo. Phasellus gravida eu dolor ut ultrices. Nullam ultricies, ex nec ultricies auctor, arcu nisi convallis velit, a fringilla neque nulla ac nisi. Nulla nisl nulla, placerat vel ultrices sed, luctus in quam. Morbi ultricies augue vel purus ultricies efficitur. Nulla ac ullamcorper justo, ac condimentum leo. Fusce pretium vitae elit eu varius. Sed vitae metus sagittis, laoreet risus ut, dapibus justo. Morbi sit amet sodales metus. Nullam varius, magna a tincidunt congue, libero lorem mattis ipsum, vel varius ipsum orci aliquet urna."
        },{
          company: "Core Box Ltd",
          date: "2005-2014",
          title: "Web Designer",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida nisi et porttitor porttitor. Mauris id augue posuere, aliquet nibh vitae, posuere leo. Phasellus gravida eu dolor ut ultrices. Nullam ultricies, ex nec ultricies auctor, arcu nisi convallis velit, a fringilla neque nulla ac nisi. Nulla nisl nulla, placerat vel ultrices sed, luctus in quam. Morbi ultricies augue vel purus ultricies efficitur. Nulla ac ullamcorper justo, ac condimentum leo. Fusce pretium vitae elit eu varius. Sed vitae metus sagittis, laoreet risus ut, dapibus justo. Morbi sit amet sodales metus. Nullam varius, magna a tincidunt congue, libero lorem mattis ipsum, vel varius ipsum orci aliquet urna."
        }
      ],
      skills:{
        "Java": 80,
        "Javascript": 76,
        "CSS": 50
      },
      interests: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida nisi et porttitor porttitor. Mauris id augue posuere, aliquet nibh vitae, posuere leo. Phasellus gravida eu dolor ut ultrices. Nullam ultricies, ex nec ultricies auctor, arcu nisi convallis velit, a fringilla neque nulla ac nisi. Nulla nisl nulla, placerat vel ultrices sed, luctus in quam. Morbi ultricies augue vel purus ultricies efficitur. Nulla ac ullamcorper justo, ac condimentum leo. Fusce pretium vitae elit eu varius. Sed vitae metus sagittis, laoreet risus ut, dapibus justo. Morbi sit amet sodales metus. Nullam varius, magna a tincidunt congue, libero lorem mattis ipsum, vel varius ipsum orci aliquet urna."
    }
    window.document.title = $scope.cv.firstName + " " + $scope.cv.surname;
  });