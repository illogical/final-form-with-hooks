var _ = require('lodash');

export const objectToArray = (obj: any) => {
    // change this back to an array to be displayed in the Message component
    const errorArray: any[] = [];
    _.each(Object.keys(obj), (key: string)=> {
      errorArray.push(obj[key]);
    });

    return errorArray;
};
