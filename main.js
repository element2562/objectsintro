let elizabethsanger = {
    congressionalDistrict: "eigth",
    platformStatements: {
        taxes: "they should be lower and stuff",
        jobs: "there should be more of those ya know?",
        infrastructure: "it should be strong so tornadoes don't knock it down",
        healthCare: "it should be available for errbody",
        crimeAndEnforcement: "definitely don't want no crime on the streets"
    },
    donationForm: "www.gimmemoneyrightnow.com",
    eventCalendar: "www.myeventcalendar.com",
    volunteerInfo: {
        name: "John Smith",
        address: " 123 fakeaddress ln",
        email: "johnsmith@johnsmith.johnmith",
        phoneNumber: "615-555-1234",
        availability: "never",
        availableActivities: "nothing"
    },
biography: "insert info here",
    imageGallery: {
        headShot: "fakeimg.jpg",
        familyPhoto: "fakeimg2.jpg",
        constituentsPhoto: "fakeimg3.jpg"
    },
missionStatement: "make more doing less",
voteRegisterUrl: "www.registertovoteformepls.gov"
}
function changeEverything(objectSelector, keySelector, valueSelector){
objectSelector[`${keySelector}`] = `${valueSelector}`;
}
let testText = "testing for whatever";
changeEverything(elizabethsanger, 'myCreation', "none of yo beezwax");
const createArticle = () => {
    const createdElement = document.createElement("article");
    const textInside = document.createTextNode(elizabethsanger.platformStatements);
    createdElement.setAttribute("id", elizabethsanger.congressionalDistrict);
    createdElement.appendChild(textInside);
    const bodySelector = document.querySelector("body");
    bodySelector.appendChild(createdElement);
}


createArticle();
