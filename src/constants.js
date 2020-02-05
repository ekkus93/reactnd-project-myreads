const validShelves = ["currentlyReading", "wantToRead", "read", "none"];
const visibleShelves = validShelves.filter(shelf => shelf !== 'none');
const visibleShelveNameDict = {
    wantToRead: "Currently Reading",
    currentlyReading: "Want to Read",
    read: "Read",
};

export { validShelves, visibleShelves, visibleShelveNameDict };
