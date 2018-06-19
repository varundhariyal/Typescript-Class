console.log('Youtube Class Section');
// youtube class
var YoutubeVideo = /** @class */ (function () {
    // constructor
    function YoutubeVideo(title, views, channel, aboutVideo, likes, dislikes, subscriber, comments, nextvideos) {
        var _this = this;
        // setter method .Moreover,we can directly access fields as access modifier is public
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.getYoutubeChannel = function () {
            return _this.youtubeChannel;
        };
        this.getnumberOFLikes = function () {
            return _this.numberOfLikes;
        };
        this.getNumberOfDislikes = function () {
            return _this.numberOfDislikes;
        };
        this.getNumberOfSubscriber = function () {
            return _this.numberOfSubscriber;
        };
        this.getComments = function () {
            return _this.numberOfComments;
        };
        this.getNextVideo = function () {
            return _this.upnextVideos;
        };
        this.getAbout = function () {
            return _this.videoDescription;
        };
        // getter method
        this.setViews = function (viewsUpdate) {
            return _this.numberOfViews = viewsUpdate;
        };
        this.setSubscriber = function (updateSubscriber) {
            return _this.numberOfSubscriber = updateSubscriber;
        };
        this.videoTitle = title;
        this.numberOfViews = views;
        this.youtubeChannel = channel;
        this.numberOfLikes = likes;
        this.videoDescription = aboutVideo;
        this.numberOfDislikes = dislikes;
        this.numberOfSubscriber = subscriber;
        this.numberOfComments = comments;
        this.upnextVideos = nextvideos;
    } // end constructor
    return YoutubeVideo;
}());
// end class
// defining a object
var Sanju = new YoutubeVideo('Sanju Official Trailer', 40000000, 'Fox Star Hindi', 'Sanju is a hilarious and heartbreaking exploration of one man’s battle against his own wild self and the formidable external forces trying to crush him. ', 795000, 32000, 1300000, 73000, 10);
console.log('Video Title', Sanju.getVideoTitle());
console.log('views =', Sanju.getNumberOfViews());
// update views
console.log('Updated Views =', Sanju.setViews(5000000));
console.log('Subscriber =', Sanju.getNumberOfSubscriber());
// update subscriber
console.log('Updated Subscriber =', Sanju.setSubscriber(1400000));
console.log('Likes=', Sanju.getnumberOFLikes());
console.log('Dislikes =', Sanju.getNumberOfDislikes());
console.log('Youtube Channel =', Sanju.getYoutubeChannel());
console.log('Video Description =', Sanju.getAbout());
console.log('Comments =', Sanju.getComments());
console.log('Upnext Videos =', Sanju.getNextVideo());
// Facebook class
var SocialProfile = /** @class */ (function () {
    // will be using public access modifier & define fields inside a constructor
    function SocialProfile(profileName, about, birthday, email, phoneNumber, currentPlace, hometown, education, friends, languages, relationship, numberOfPhotos, pageLiked, numberOfAppsandGames, numberOfCheckins) {
        var _this = this;
        this.profileName = profileName;
        this.about = about;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.currentPlace = currentPlace;
        this.hometown = hometown;
        this.education = education;
        this.friends = friends;
        this.languages = languages;
        this.relationship = relationship;
        this.numberOfPhotos = numberOfPhotos;
        this.pageLiked = pageLiked;
        this.numberOfAppsandGames = numberOfAppsandGames;
        this.numberOfCheckins = numberOfCheckins;
        // getter method,we can directly access fields as access modifier is public also.
        this.getage = function () {
            return _this.birthday;
        };
        this.getname = function () {
            return _this.profileName;
        };
        this.getabout = function () {
            return _this.about;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.getphonenumber = function () {
            return _this.phoneNumber;
        };
        this.getcurrentplace = function () {
            return _this.currentPlace;
        };
        this.gethome = function () {
            return _this.hometown;
        };
        this.getedu = function () {
            return _this.education;
        };
        this.getfriends = function () {
            return _this.friends;
        };
        this.getlang = function () {
            return _this.languages;
        };
        this.getphotos = function () {
            return _this.numberOfPhotos;
        };
        this.getpagelike = function () {
            return _this.pageLiked;
        };
        this.getapp = function () {
            return _this.numberOfAppsandGames;
        };
        this.getcheckin = function () {
            return _this.numberOfCheckins;
        };
        // setter method
        // update currentplace
        this.setcurrentplace = function (updateplace) {
            return _this.currentPlace = updateplace;
        };
        // update number of friends
        this.setfriends = function (updatefriend) {
            return _this.friends = updatefriend;
        };
        this.profileName = profileName;
        this.about = about;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.currentPlace = currentPlace;
        this.hometown = hometown;
        this.education = education;
        this.friends = friends;
        this.languages = languages;
        this.relationship = relationship;
        this.numberOfPhotos = numberOfPhotos;
        this.pageLiked = pageLiked;
        this.numberOfAppsandGames = numberOfAppsandGames;
        this.numberOfCheckins = numberOfCheckins;
    }
    return SocialProfile;
}());
// define a object
console.log('Facebook Class Section');
var Varun = new SocialProfile('Varun Dhariyal', 'Rise Till Nirvana', '23 October', 'varundhariyal@gmail.com', '8800xxxxxx', 'Noida', 'Lucknow', 'Galgotias College', 1200, 'Hindi,English', 'Single', 23, 31, 5, 10);
console.log('Name=', Varun.profileName);
console.log('About Me=', Varun.about);
console.log('Birthday is on ', Varun.getage());
console.log('Email =', Varun.getemail());
console.log('Mobile NUmber ', Varun.getphonenumber());
console.log('Current place= ', Varun.getcurrentplace());
// update current place to delhi
console.log("updated current place=", Varun.setcurrentplace('Delhi'));
console.log("Hometown=", Varun.hometown);
console.log('Studies In ', Varun.getedu());
console.log('Friends =', Varun.friends);
// update friend count
console.log('Updated Friends Count =', Varun.setfriends(1223));
console.log('Languages Known ', Varun.languages);
console.log('Relationship Status ', Varun.relationship);
console.log('NUmber Of Photos Uploaded =', Varun.getphotos());
console.log("Pages Liked =", Varun.getpagelike());
console.log('Number of Apps & Games', Varun.getapp());
console.log('Number Of Checkins =', Varun.getcheckin());
