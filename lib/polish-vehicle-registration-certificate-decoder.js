"use strict";
/// <reference types="node" />
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var polish_vehicle_registration_certificate_new_format_data_1 = require("./polish-vehicle-registration-certificate-new-format-data");
var polish_vehicle_registration_certificate_old_format_data_1 = require("./polish-vehicle-registration-certificate-old-format-data");
var nrv2e_decompress_1 = tslib_1.__importDefault(require("nrv2e-decompress"));
var polish_vehicle_registration_certificate_new_format_data_2 = require("./polish-vehicle-registration-certificate-new-format-data");
exports.PolishVehicleRegistrationCertificateNewFormatData = polish_vehicle_registration_certificate_new_format_data_2.PolishVehicleRegistrationCertificateNewFormatData;
var polish_vehicle_registration_certificate_old_format_data_2 = require("./polish-vehicle-registration-certificate-old-format-data");
exports.PolishVehicleRegistrationCertificateOldFormatData = polish_vehicle_registration_certificate_old_format_data_2.PolishVehicleRegistrationCertificateOldFormatData;
var fuelCodes = {
    P: 'benzyna',
    D: 'olej napędowy',
    M: 'mieszanka (paliwo-olej)',
    LPG: 'gaz płynny (propan-butan)',
    CNG: 'gaz ziemny sprężony (metan)',
    H: 'wodór',
    LNG: 'gaz ziemny skroplony (metan)',
    BD: 'biodiesel',
    E85: 'etanol',
    EE: 'energia elektryczna',
    999: 'inne',
};
// prettier-ignore
var fieldsDefinition = {
    format: { name: 'nd.', description: 'identyfikator formatu', newFormatIndex: 0 },
    seriaDr: { name: 'SERIA DR', description: '', newFormatIndex: 1, oldFormatIndex: 0 },
    kodTerytorialnyUrzedu: { name: 'nd.', description: '', newFormatIndex: 2 },
    organWydajacy: { name: 'ORGAN WYDAJĄCY', description: '', newFormatIndex: 3, oldFormatIndex: 1, lines: 4 },
    numerRejestracyjnyPojazdu: { name: 'A', description: 'numer rejestracyjny pojazdu', newFormatIndex: 7, oldFormatIndex: 5 },
    markaPojazdu: { name: 'D.1', description: 'marka pojazdu', newFormatIndex: 8, oldFormatIndex: 6 },
    typPojazdu: { name: 'D.2', description: 'typ pojazdu', newFormatIndex: 9 },
    wariantPojazdu: { name: 'D.2', description: 'wariant, jeżeli występuje', newFormatIndex: 10 },
    wersjaPojazdu: { name: 'D.2', description: 'wersja, jeżeli występuje', newFormatIndex: 11 },
    modelPojazdu: { name: 'D.3', description: 'model pojazdu', newFormatIndex: 12, oldFormatIndex: 10 },
    numerIdentyfikacyjnyPojazdu: { name: 'E', description: 'numer identyfikacyjny pojazdu (numer VIN albo numer nadwozia, podwozia lub ramy)', newFormatIndex: 13, oldFormatIndex: 11 },
    dataWydaniaDowoduRejestracyjnego: { name: 'I', description: 'data wydania dowodu rejestracyjnego (YYYY-MM-DD)', newFormatIndex: 14, oldFormatIndex: 12 },
    okresWaznosciDowoduRejestracyjnego: { name: 'H', description: 'okres ważności dowodu, jeżeli występuje takie ograniczenie', newFormatIndex: 15, oldFormatIndex: 13 },
    pelneNazwiskoLubNazwaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.1', description: 'pełne nazwisko lub nazwa posiadacza dowodu rejestracyjnego', newFormatIndex: 16, oldFormatIndex: 14 },
    imiePosiadaczaDowoduRejestracyjnego: { name: 'C.1.1', description: 'imię posiadacza dowodu rejestracyjnego', newFormatIndex: 17 },
    nazwiskoPosiadaczaDowoduRejestracyjnego: { name: 'C.1.1', description: 'nazwisko posiadacza dowodu rejestracyjnego', newFormatIndex: 18 },
    nazwaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.1', description: 'nazwa posiadacza dowodu rejestracyjnego', newFormatIndex: 19 },
    numerPESELLubREGONPosiadaczaDowoduRejestracyjnego: { name: 'C.1.2', description: 'numer PESEL lub REGON posiadacza dowodu rejestracyjnego', newFormatIndex: 20, oldFormatIndex: 15 },
    adresPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'adres posiadacza dowodu rejestracyjnego', oldFormatIndex: 16, lines: 2 },
    kodPocztowyPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'kod pocztowy posiadacza dowodu rejestracyjnego', newFormatIndex: 21 },
    miejscowoscPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'miejscowość posiadacza dowodu rejestracyjnego', newFormatIndex: 22 },
    gminaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'gmina posiadacza dowodu rejestracyjnego', newFormatIndex: 23 },
    ulicaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'ulica posiadacza dowodu rejestracyjnego', newFormatIndex: 24 },
    nrDomuPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'nr domu posiadacza dowodu rejestracyjnego', newFormatIndex: 25 },
    nrMieszkaniaPosiadaczaDowoduRejestracyjnego: { name: 'C.1.3', description: 'nr mieszkania posiadacza dowodu rejestracyjnego', newFormatIndex: 26 },
    pelneNazwiskoLubNazwaWlascicielaPojazdu: { name: 'C.2.1', description: 'pełne nazwisko lub nazwa właściciela pojazdu', newFormatIndex: 27, oldFormatIndex: 18 },
    imieWlascicielaPojazdu: { name: 'C.2.1', description: 'imię właściciela pojazdu', newFormatIndex: 28 },
    nazwiskoWlascicielaPojazdu: { name: 'C.2.1', description: 'nazwisko właściciela pojazdu', newFormatIndex: 29 },
    nazwaWlascicielaPojazdu: { name: 'C.2.1', description: 'nazwa właściciela pojazdu', newFormatIndex: 30 },
    numerPESELLubREGONWlascicielaPojazdu: { name: 'C.2.2', description: 'numer PESEL lub REGON właściciela pojazdu', newFormatIndex: 31, oldFormatIndex: 19 },
    adresWlascicielaPojazdu: { name: 'C.2.3', description: 'adres właściciela pojazdu', oldFormatIndex: 20, lines: 2 },
    kodPocztowyWlascicielaPojazdu: { name: 'C.2.3', description: 'kod pocztowy właściciela pojazdu', newFormatIndex: 32 },
    miejscowoscWlascicielaPojazdu: { name: 'C.2.3', description: 'miejscowość właściciela pojazdu', newFormatIndex: 33 },
    gminaWlascicielaPojazdu: { name: 'C.2.3', description: 'gmina właściciela pojazdu', newFormatIndex: 34 },
    ulicaWlascicielaPojazdu: { name: 'C.2.3', description: 'ulica właściciela pojazdu', newFormatIndex: 35 },
    nrDomuWlascicielaPojazdu: { name: 'C.2.3', description: 'nr domu właściciela pojazdu', newFormatIndex: 36 },
    nrMieszkaniaWlascicielaPojazdu: { name: 'C.2.3', description: 'nr mieszkania właściciela pojazdu', newFormatIndex: 37 },
    maksymalnaMasaCalkowitaPojazduKg: { name: 'F.1', description: 'maksymalna masa całkowita pojazdu, wyłączając motocykle i motorowery (w kg)', newFormatIndex: 38, oldFormatIndex: 22 },
    dopuszczalnaMasaCalkowitaPojazduKg: { name: 'F.2', description: 'dopuszczalna masa całkowita pojazdu (w kg)', newFormatIndex: 39, oldFormatIndex: 23 },
    dopuszczalnaMasaCalkowitaZespoluPojazdowKg: { name: 'F.3', description: 'dopuszczalna masa całkowita zespołu pojazdów (w kg)', newFormatIndex: 40, oldFormatIndex: 24 },
    masaWlasnaPojazduKg: { name: 'G', description: 'masa własna pojazdu; w przypadku pojazdu ciągnącego innego niż kategoria M1 masa własna pojazdu obejmuje urządzenie sprzęgające (w kg)', newFormatIndex: 41, oldFormatIndex: 25 },
    kategoriaPojazdu: { name: 'J', description: 'kategoria pojazdu', newFormatIndex: 42 },
    numerSwiadectwaHomologacjiTypuPojazdu: { name: 'K', description: 'numer świadectwa homologacji typu pojazdu, jeżeli występuje', newFormatIndex: 43 },
    liczbaOsi: { name: 'L', description: 'liczba osi', newFormatIndex: 44, oldFormatIndex: 28 },
    maksymalnaMasaCalkowitaPrzyczepyZHamulcemKg: { name: 'O.1', description: 'maksymalna masa całkowita przyczepy z hamulcem (w kg)', newFormatIndex: 45, oldFormatIndex: 29 },
    maksymalnaMasaCalkowitaPrzyczepyBezHamulcaKg: { name: 'O.2', description: 'maksymalna masa całkowita przyczepy bez hamulca (w kg)', newFormatIndex: 46, oldFormatIndex: 30 },
    stosunekMocyDoMasyWlasnejKWkg: { name: 'Q', description: 'stosunek mocy do masy własnej (w kW/kg); dotyczy motocykli i motorowerów', newFormatIndex: 47 },
    pojemnoscSilnikaCm3: { name: 'P.1', description: 'pojemność silnika (w cm3)', newFormatIndex: 48, oldFormatIndex: 32 },
    maksymalnaMocNettoSilnikaKW: { name: 'P.2', description: 'maksymalna moc netto silnika (w kW)', newFormatIndex: 49, oldFormatIndex: 33 },
    rodzajPaliwa: { name: 'P.3', description: 'rodzaj paliwa', newFormatIndex: 50, oldFormatIndex: 34 },
    dataPierwszejRejestracjiPojazdu: { name: 'B', description: 'data pierwszej rejestracji pojazdu (YYYY-MM-DD)', newFormatIndex: 51, oldFormatIndex: 36 },
    liczbaMiejscSiedzacych: { name: 'S.1', description: 'liczba miejsc siedzących, włączając siedzenie kierowcy', newFormatIndex: 52, oldFormatIndex: 37 },
    liczbaMiejscStojacych: { name: 'S.2', description: 'liczba miejsc stojących, jeżeli występuje', newFormatIndex: 53, oldFormatIndex: 38 },
    rodzajPojazdu: { name: 'RODZAJ POJAZDU', description: '', newFormatIndex: 54, oldFormatIndex: 39 },
    przeznaczenie: { name: 'PRZEZNACZENIE', description: '', newFormatIndex: 55, oldFormatIndex: 40 },
    rokProdukcji: { name: 'ROK PRODUKCJI', description: '', newFormatIndex: 56, oldFormatIndex: 41 },
    dopuszczalnaLadownosc: { name: 'DOPUSZCZALNA ŁADOWNOŚĆ', description: '', newFormatIndex: 57, oldFormatIndex: 42 },
    najwiekszyDopNaciskOsi: { name: 'NAJWIĘKSZY DOP. NACISK OSI', description: '', newFormatIndex: 58, oldFormatIndex: 43 },
    nrKartyPojazdu: { name: 'NR KARTY POJAZDU', description: '', newFormatIndex: 59, oldFormatIndex: 44 },
    kodIdentyfikacyjny: { name: 'OCR', description: 'kod identyfikacyjny', newFormatIndex: 60, oldFormatIndex: 45 },
    rodzajKod: { name: '?', description: 'rodzaj - kod', newFormatIndex: 61 },
    podrodzajKod: { name: '?', description: 'podrodzaj - kod', newFormatIndex: 62 },
    przeznaczenieKod: { name: '?', description: 'przeznaczenie - kod', newFormatIndex: 63 },
    nieznane1: { name: '?', description: '', newFormatIndex: 64 },
    nieznane2: { name: '?', description: '', newFormatIndex: 65 }
};
var PolishVehicleRegistrationCertificateDecoder = /** @class */ (function () {
    function PolishVehicleRegistrationCertificateDecoder(b64Input) {
        var binInput = Buffer.from(b64Input, 'base64');
        // 4 first bytes are output length
        var outputLength = binInput.readUInt32LE(0);
        var utf16Output = Buffer.alloc(outputLength);
        var compressedInput = binInput.slice(4);
        nrv2e_decompress_1.default(compressedInput, utf16Output);
        var textOutput = utf16Output.toString('utf16le');
        this.data = PolishVehicleRegistrationCertificateDecoder.parseText(textOutput);
    }
    PolishVehicleRegistrationCertificateDecoder.parseText = function (textOutput) {
        var outputFields = textOutput.split(/\||\r?\n/);
        var isNewFormat = outputFields[0].startsWith('XX');
        var data = isNewFormat
            ? new polish_vehicle_registration_certificate_new_format_data_1.PolishVehicleRegistrationCertificateNewFormatData()
            : new polish_vehicle_registration_certificate_old_format_data_1.PolishVehicleRegistrationCertificateOldFormatData();
        for (var _i = 0, _a = Object.keys(fieldsDefinition); _i < _a.length; _i++) {
            var key = _a[_i];
            var field = fieldsDefinition[key];
            if ((isNewFormat && field.newFormatIndex !== undefined) || (!isNewFormat && field.oldFormatIndex !== undefined)) {
                var newDataField = {
                    name: field.name,
                    description: field.description,
                };
                var index = isNewFormat ? field.newFormatIndex : field.oldFormatIndex;
                if (index !== undefined) {
                    if (field.lines) {
                        ;
                        newDataField.value = outputFields.slice(index, index + field.lines).map(function (s) { return s.trim(); });
                    }
                    else {
                        newDataField.value = outputFields[index].trim();
                    }
                    if (key === 'rodzajPaliwa') {
                        var fuel = newDataField.value;
                        newDataField.valueDescription = fuelCodes[fuel];
                    }
                    data[key] = newDataField;
                }
            }
        }
        return data;
    };
    return PolishVehicleRegistrationCertificateDecoder;
}());
exports.PolishVehicleRegistrationCertificateDecoder = PolishVehicleRegistrationCertificateDecoder;
exports.default = PolishVehicleRegistrationCertificateDecoder;
