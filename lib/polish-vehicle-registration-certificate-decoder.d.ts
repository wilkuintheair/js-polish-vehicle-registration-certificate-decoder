import { PolishVehicleRegistrationCertificateNewFormatData } from './polish-vehicle-registration-certificate-new-format-data';
import { PolishVehicleRegistrationCertificateOldFormatData } from './polish-vehicle-registration-certificate-old-format-data';
export { PolishVehicleRegistrationCertificateNewFormatData, } from './polish-vehicle-registration-certificate-new-format-data';
export { PolishVehicleRegistrationCertificateOldFormatData, } from './polish-vehicle-registration-certificate-old-format-data';
export declare type PolishVehicleRegistrationCertificateData = PolishVehicleRegistrationCertificateOldFormatData | PolishVehicleRegistrationCertificateNewFormatData;
export declare class PolishVehicleRegistrationCertificateDecoder {
    readonly data: PolishVehicleRegistrationCertificateData;
    constructor(b64Input: string);
    static parseText(textOutput: string): PolishVehicleRegistrationCertificateData;
}
export default PolishVehicleRegistrationCertificateDecoder;
