import {
  GETLICENSE
} from '../constants/License';

export const licenseActions = {
  getLicense

};

function getLicense(licenseData) {
  return {
    type: 'GETLICENSE',
    licenseData
  };
}

