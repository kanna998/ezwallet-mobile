export const getImagePath = type => {
    let imagePath = "";
    console.log(type);
    switch (type) {
        case "HealthCard":
            imagePath = require('uPortMobile/assets/images/health_portal.png');
            break;
        case "AadharCard":
            imagePath = require('uPortMobile/assets/images/govt_portal.png');
            break;
        case "AadharCard":
            imagePath = require('uPortMobile/assets/images/clinic_portal.png');
            break;
        default:
            imagePath = require('uPortMobile/assets/images/ethereum-white-icon.png');
            break;
    }
    return imagePath;
};