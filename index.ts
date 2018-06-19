console.log('Youtube Class Section')
// youtube class
class YoutubeVideo {
    // fields/properties with public access modifier
    videoTitle: string;
    numberOfViews: number;
    youtubeChannel: string;
    videoDescription: string;
    numberOfLikes: number;
    numberOfDislikes: number;
    numberOfSubscriber: number;
    numberOfComments: number;
    upnextVideos: number;
    // constructor
    constructor(title: string, views: number, channel: string, aboutVideo: string, likes: number, dislikes: number, subscriber: number, comments: number, nextvideos: number) {
        this.videoTitle = title;
        this.numberOfViews = views;
        this.youtubeChannel = channel;
        this.numberOfLikes = likes;
        this.videoDescription = aboutVideo;
        this.numberOfDislikes = dislikes;
        this.numberOfSubscriber = subscriber;
        this.numberOfComments = comments;
        this.upnextVideos = nextvideos;
    }// end constructor
    // setter method .Moreover,we can directly access fields as access modifier is public
    getVideoTitle = () => {
        return this.videoTitle;
    }
    getNumberOfViews = () => {
        return this.numberOfViews;
    }
    getYoutubeChannel = () => {
        return this.youtubeChannel;
    }
    getnumberOFLikes = () => {
        return this.numberOfLikes;
    }
    getNumberOfDislikes = () => {
        return this.numberOfDislikes;
    }
    getNumberOfSubscriber = () => {
        return this.numberOfSubscriber;
    }
    getComments = () => {
        return this.numberOfComments;
    }
    getNextVideo = () => {
        return this.upnextVideos;
    }
    getAbout = () => {
        return this.videoDescription;
    }
    // getter method
    setViews = (viewsUpdate: number) => {
        return this.numberOfViews = viewsUpdate;
    }
    setSubscriber = (updateSubscriber: number) => {
        return this.numberOfSubscriber = updateSubscriber;
    }
}
// end class
// defining a object
let Sanju = new YoutubeVideo('Sanju Official Trailer', 40000000, 'Fox Star Hindi', 'Sanju is a hilarious and heartbreaking exploration of one man’s battle against his own wild self and the formidable external forces trying to crush him. ', 795000, 32000, 1300000, 73000, 10)
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
class SocialProfile {
    // will be using public access modifier & define fields inside a constructor
    constructor(public profileName: string, public about: string, public birthday: string, public email: string, public phoneNumber: string, public currentPlace: string, public hometown: string, public education: string, public friends: number, public languages: string, public relationship: string, public numberOfPhotos: number, public pageLiked: number, public numberOfAppsandGames: number, public numberOfCheckins: number) {
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
    // getter method,we can directly access fields as access modifier is public also.
    getage = () => {
        return this.birthday;
    }
    getname = () => {
        return this.profileName;
    }
    getabout = () => {
        return this.about;
    }
    getemail = () => {
        return this.email;
    }
    getphonenumber = () => {
        return this.phoneNumber;
    }
    getcurrentplace = () => {
        return this.currentPlace;
    }
    gethome = () => {
        return this.hometown;
    }
    getedu = () => {
        return this.education;
    }
    getfriends = () => {
        return this.friends;
    }
    getlang = () => {
        return this.languages;
    }
    getphotos = () => {
        return this.numberOfPhotos;
    }
    getpagelike = () => {
        return this.pageLiked;
    }
    getapp = () => {
        return this.numberOfAppsandGames;
    }
    getcheckin = () => {
        return this.numberOfCheckins;
    }
    // setter method
    // update currentplace
    setcurrentplace = (updateplace: string) => {
        return this.currentPlace = updateplace;
    }
    // update number of friends
    setfriends = (updatefriend: number) => {
        return this.friends = updatefriend;
    }
}
// define a object
console.log('Facebook Class Section')
let Varun = new SocialProfile('Varun Dhariyal', 'Rise Till Nirvana', '23 October', 'varundhariyal@gmail.com', '8800xxxxxx', 'Noida', 'Lucknow', 'Galgotias College', 1200, 'Hindi,English', 'Single', 23, 31, 5, 10)
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