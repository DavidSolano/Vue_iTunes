function LibraryItem(media, removeMethod){
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out',
        PURCHASED: 'purchased', NOT_PURCHASED: 'not-purchased'}

    media.status = STATUSES.CHECKED_IN;
    media.purchased = STATUSES.NOT_PURCHASED;

    media.checkIn = function (){
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function (){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function (){
        return this.status === STATUSES.CHECKED_IN && this.purchased === STATUSES.NOT_PURCHASED;
    }

    media.remove = removeMethod;

    return media;
}


class Music {
    imgee = '';
    songTitle = '';
    artist = '';
    genre = '';
    songNumber = '';

    constructor(imagee, songTitle, artist, genre, songNumber) {
        this.imgee = imagee
        this.songTitle = songTitle;
        this.artist = artist;
        this.genre = genre;
        this.songNumber = songNumber;
    }
}

class Podcast {
    imgee = '';
    author = '';
    title = '';
    rlsDate = '';
    genre = '';

    constructor(imagee, title, author, rlsDate, genre) {
        this.imgee = imagee;
        this.title = title;
        this.author = author;
        this.rlsDate = rlsDate;
        this.genre = genre;
    }
}

class AudioBook {
    imgee = '';
    author = '';
    bookTitle = '';
    rlsDate = '';
    description = '';

    constructor(imagee, author, bookTitle, rlsDate, description) {
        this.imgee = imagee;
        this.bookTitle = bookTitle;
        this.author = author;
        this.rlsDate = rlsDate;
        this.description = description;
    }
}

export {LibraryItem, Music, Podcast, AudioBook};