import { HEALTH_CARD, GOVT_CARD, VACCINATION_CARD } from '../constants/RequestActionTypes';

export const getImagePath = type => {
    let imagePath = "";
    console.log(type);
    switch (type) {
        case HEALTH_CARD:
            imagePath = require('uPortMobile/assets/images/health_portal.png');
            break;
        case GOVT_CARD:
            imagePath = require('uPortMobile/assets/images/govt_portal.png');
            break;
        case VACCINATION_CARD:
            imagePath = require('uPortMobile/assets/images/clinic_portal.png');
            break;
        default:
            imagePath = require('uPortMobile/assets/images/ethereum-white-icon.png');
            break;
    }
    return imagePath;
};

export const getBGcolor = type => {
    switch(type){
        case HEALTH_CARD:
            return "#448AFF"; 
        case GOVT_CARD:
            return "#ffc400";
        case VACCINATION_CARD:
            return "#ec407a";
        default:
            return "#448AFF";
    }
};