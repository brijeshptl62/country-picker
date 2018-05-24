import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CountryServiceProvider {

  constructor(public http: HttpClient) {
  }

  const
  allCountries =
    [
      {
        "name": "Afghanistan",
        "countryCode": "AF",
        "callingCodes": [
          "93"
        ],
        "numberExample": "070 123 4567"
      },
      {
        "name": "Åland Islands",
        "countryCode": "AX",
        "callingCodes": [
          "358"
        ],
        "numberExample": ""
      },
      {
        "name": "Albania",
        "countryCode": "AL",
        "callingCodes": [
          "355"
        ],
        "numberExample": "066 212 3456"
      },
      {
        "name": "Algeria",
        "countryCode": "DZ",
        "callingCodes": [
          "213"
        ],
        "numberExample": "0551 23 45 67"
      },
      {
        "name": "American Samoa",
        "countryCode": "AS",
        "callingCodes": [
          "1684"
        ],
        "numberExample": "(684) 733-1234"
      },
      {
        "name": "Angola",
        "countryCode": "AO",
        "callingCodes": [
          "244"
        ],
        "numberExample": "923 123 456"
      },
      {
        "name": "Anguilla",
        "countryCode": "AI",
        "callingCodes": [
          "1264"
        ],
        "numberExample": "(264) 235-1234"
      },
      {
        "name": "Antarctica",
        "countryCode": "AQ",
        "callingCodes": [
          "672"
        ],
        "numberExample": ""
      },
      {
        "name": "Antigua and Barbuda",
        "countryCode": "AG",
        "callingCodes": [
          "1268"
        ],
        "numberExample": "(268) 464-1234"
      },
      {
        "name": "Argentina",
        "countryCode": "AR",
        "callingCodes": [
          "54"
        ],
        "numberExample": "011 15-2345-6789"
      },
      {
        "name": "Armenia",
        "countryCode": "AM",
        "callingCodes": [
          "374"
        ],
        "numberExample": "077 123456"
      },
      {
        "name": "Aruba",
        "countryCode": "AW",
        "callingCodes": [
          "297"
        ],
        "numberExample": "560 1234"
      },
      {
        "name": "Australia",
        "countryCode": "AU",
        "callingCodes": [
          "61"
        ],
        "numberExample": "0412 345 678"
      },
      {
        "name": "Austria",
        "countryCode": "AT",
        "callingCodes": [
          "43"
        ],
        "numberExample": "0664 123456"
      },
      {
        "name": "Azerbaijan",
        "countryCode": "AZ",
        "callingCodes": [
          "994"
        ],
        "numberExample": "040 123 45 67"
      },
      {
        "name": "Bahamas",
        "countryCode": "BS",
        "callingCodes": [
          "1242"
        ],
        "numberExample": "(242) 359-1234"
      },
      {
        "name": "Bahrain",
        "countryCode": "BH",
        "callingCodes": [
          "973"
        ],
        "numberExample": "3600 1234"
      },
      {
        "name": "Bangladesh",
        "countryCode": "BD",
        "callingCodes": [
          "880"
        ],
        "numberExample": "01812-345678"
      },
      {
        "name": "Barbados",
        "countryCode": "BB",
        "callingCodes": [
          "1246"
        ],
        "numberExample": "(246) 250-1234"
      },
      {
        "name": "Belarus",
        "countryCode": "BY",
        "callingCodes": [
          "375"
        ],
        "numberExample": "8 029 491-19-11"
      },
      {
        "name": "Belgium",
        "countryCode": "BE",
        "callingCodes": [
          "32"
        ],
        "numberExample": "0470 12 34 56"
      },
      {
        "name": "Belize",
        "countryCode": "BZ",
        "callingCodes": [
          "501"
        ],
        "numberExample": "622-1234"
      },
      {
        "name": "Benin",
        "countryCode": "BJ",
        "callingCodes": [
          "229"
        ],
        "numberExample": "90 01 12 34"
      },
      {
        "name": "Bermuda",
        "countryCode": "BM",
        "callingCodes": [
          "1441"
        ],
        "numberExample": "(441) 370-1234"
      },
      {
        "name": "Bhutan",
        "countryCode": "BT",
        "callingCodes": [
          "975"
        ],
        "numberExample": "17 12 34 56"
      },
      {
        "name": "Bolivia (Plurinational State of)",
        "countryCode": "BO",
        "callingCodes": [
          "591"
        ],
        "numberExample": "71234567"
      },
      {
        "name": "Bonaire, Sint Eustatius and Saba",
        "countryCode": "BQ",
        "callingCodes": [
          "5997"
        ],
        "numberExample": ""
      },
      {
        "name": "Bosnia and Herzegovina",
        "countryCode": "BA",
        "callingCodes": [
          "387"
        ],
        "numberExample": "061 123 456"
      },
      {
        "name": "Botswana",
        "countryCode": "BW",
        "callingCodes": [
          "267"
        ],
        "numberExample": "71 123 456"
      },
      {
        "name": "Brazil",
        "countryCode": "BR",
        "callingCodes": [
          "55"
        ],
        "numberExample": "(11) 96123-4567"
      },
      {
        "name": "British Indian Ocean Territory",
        "countryCode": "IO",
        "callingCodes": [
          "246"
        ],
        "numberExample": "380 1234"
      },
      {
        "name": "Virgin Islands (British)",
        "countryCode": "VG",
        "callingCodes": [
          "1284"
        ],
        "numberExample": "(284) 300-1234"
      },
      {
        "name": "Virgin Islands (U.S.)",
        "countryCode": "VI",
        "callingCodes": [
          "1 340"
        ],
        "numberExample": "(340) 642-1234"
      },
      {
        "name": "Brunei Darussalam",
        "countryCode": "BN",
        "callingCodes": [
          "673"
        ],
        "numberExample": "712 3456"
      },
      {
        "name": "Bulgaria",
        "countryCode": "BG",
        "callingCodes": [
          "359"
        ],
        "numberExample": "048 123 456"
      },
      {
        "name": "Burkina Faso",
        "countryCode": "BF",
        "callingCodes": [
          "226"
        ],
        "numberExample": "70 12 34 56"
      },
      {
        "name": "Burundi",
        "countryCode": "BI",
        "callingCodes": [
          "257"
        ],
        "numberExample": "79 56 12 34"
      },
      {
        "name": "Cambodia",
        "countryCode": "KH",
        "callingCodes": [
          "855"
        ],
        "numberExample": "091 234 567"
      },
      {
        "name": "Cameroon",
        "countryCode": "CM",
        "callingCodes": [
          "237"
        ],
        "numberExample": "6 71 23 45 67"
      },
      {
        "name": "Canada",
        "countryCode": "CA",
        "callingCodes": [
          "1"
        ],
        "numberExample": "(204) 234-5678"
      },
      {
        "name": "Cabo Verde",
        "countryCode": "CV",
        "callingCodes": [
          "238"
        ],
        "numberExample": "991 12 34"
      },
      {
        "name": "Cayman Islands",
        "countryCode": "KY",
        "callingCodes": [
          "1345"
        ],
        "numberExample": "(345) 323-1234"
      },
      {
        "name": "Central African Republic",
        "countryCode": "CF",
        "callingCodes": [
          "236"
        ],
        "numberExample": "70 01 23 45"
      },
      {
        "name": "Chad",
        "countryCode": "TD",
        "callingCodes": [
          "235"
        ],
        "numberExample": "63 01 23 45"
      },
      {
        "name": "Chile",
        "countryCode": "CL",
        "callingCodes": [
          "56"
        ],
        "numberExample": "9 6123 4567"
      },
      {
        "name": "China",
        "countryCode": "CN",
        "callingCodes": [
          "86"
        ],
        "numberExample": "131 2345 6789"
      },
      {
        "name": "Christmas Island",
        "countryCode": "CX",
        "callingCodes": [
          "61"
        ],
        "numberExample": "0412 345 678"
      },
      {
        "name": "Cocos (Keeling) Islands",
        "countryCode": "CC",
        "callingCodes": [
          "61"
        ],
        "numberExample": "0412 345 678"
      },
      {
        "name": "Colombia",
        "countryCode": "CO",
        "callingCodes": [
          "57"
        ],
        "numberExample": "321 1234567"
      },
      {
        "name": "Comoros",
        "countryCode": "KM",
        "callingCodes": [
          "269"
        ],
        "numberExample": "321 23 45"
      },
      {
        "name": "Congo",
        "countryCode": "CG",
        "callingCodes": [
          "242"
        ],
        "numberExample": "06 123 4567"
      },
      {
        "name": "Congo (Democratic Republic of the)",
        "countryCode": "CD",
        "callingCodes": [
          "243"
        ],
        "numberExample": "0991 234 567"
      },
      {
        "name": "Cook Islands",
        "countryCode": "CK",
        "callingCodes": [
          "682"
        ],
        "numberExample": "71 234"
      },
      {
        "name": "Costa Rica",
        "countryCode": "CR",
        "callingCodes": [
          "506"
        ],
        "numberExample": "8312 3456"
      },
      {
        "name": "Croatia",
        "countryCode": "HR",
        "callingCodes": [
          "385"
        ],
        "numberExample": "092 123 4567"
      },
      {
        "name": "Cuba",
        "countryCode": "CU",
        "callingCodes": [
          "53"
        ],
        "numberExample": "05 1234567"
      },
      {
        "name": "Curaçao",
        "countryCode": "CW",
        "callingCodes": [
          "599"
        ],
        "numberExample": "9 518 1234"
      },
      {
        "name": "Cyprus",
        "countryCode": "CY",
        "callingCodes": [
          "357"
        ],
        "numberExample": "96 123456"
      },
      {
        "name": "Czech Republic",
        "countryCode": "CZ",
        "callingCodes": [
          "420"
        ],
        "numberExample": "601 123 456"
      },
      {
        "name": "Denmark",
        "countryCode": "DK",
        "callingCodes": [
          "45"
        ],
        "numberExample": "20 12 34 56"
      },
      {
        "name": "Djibouti",
        "countryCode": "DJ",
        "callingCodes": [
          "253"
        ],
        "numberExample": "77 83 10 01"
      },
      {
        "name": "Dominica",
        "countryCode": "DM",
        "callingCodes": [
          "1767"
        ],
        "numberExample": "(767) 225-1234"
      },
      {
        "name": "Dominican Republic",
        "countryCode": "DO",
        "callingCodes": [
          "1809",
          "1829",
          "1849"
        ],
        "numberExample": ""
      },
      {
        "name": "Ecuador",
        "countryCode": "EC",
        "callingCodes": [
          "593"
        ],
        "numberExample": "099 123 4567"
      },
      {
        "name": "Egypt",
        "countryCode": "EG",
        "callingCodes": [
          "20"
        ],
        "numberExample": "0100 123 4567"
      },
      {
        "name": "El Salvador",
        "countryCode": "SV",
        "callingCodes": [
          "503"
        ],
        "numberExample": "7012 3456"
      },
      {
        "name": "Equatorial Guinea",
        "countryCode": "GQ",
        "callingCodes": [
          "240"
        ],
        "numberExample": "222 123 456"
      },
      {
        "name": "Eritrea",
        "countryCode": "ER",
        "callingCodes": [
          "291"
        ],
        "numberExample": "07 123 456"
      },
      {
        "name": "Estonia",
        "countryCode": "EE",
        "callingCodes": [
          "372"
        ],
        "numberExample": "5123 4567"
      },
      {
        "name": "Ethiopia",
        "countryCode": "ET",
        "callingCodes": [
          "251"
        ],
        "numberExample": "091 123 4567"
      },
      {
        "name": "Falkland Islands (Malvinas)",
        "countryCode": "FK",
        "callingCodes": [
          "500"
        ],
        "numberExample": "51234"
      },
      {
        "name": "Faroe Islands",
        "countryCode": "FO",
        "callingCodes": [
          "298"
        ],
        "numberExample": "211234"
      },
      {
        "name": "Fiji",
        "countryCode": "FJ",
        "callingCodes": [
          "679"
        ],
        "numberExample": "701 2345"
      },
      {
        "name": "Finland",
        "countryCode": "FI",
        "callingCodes": [
          "358"
        ],
        "numberExample": "041 2345678"
      },
      {
        "name": "France",
        "countryCode": "FR",
        "callingCodes": [
          "33"
        ],
        "numberExample": "06 12 34 56 78"
      },
      {
        "name": "French Guiana",
        "countryCode": "GF",
        "callingCodes": [
          "594"
        ],
        "numberExample": "0694 20 12 34"
      },
      {
        "name": "French Polynesia",
        "countryCode": "PF",
        "callingCodes": [
          "689"
        ],
        "numberExample": "87 12 34 56"
      },
      {
        "name": "Gabon",
        "countryCode": "GA",
        "callingCodes": [
          "241"
        ],
        "numberExample": "06 03 12 34"
      },
      {
        "name": "Gambia",
        "countryCode": "GM",
        "callingCodes": [
          "220"
        ],
        "numberExample": "301 2345"
      },
      {
        "name": "Georgia",
        "countryCode": "GE",
        "callingCodes": [
          "995"
        ],
        "numberExample": "555 12 34 56"
      },
      {
        "name": "Germany",
        "countryCode": "DE",
        "callingCodes": [
          "49"
        ],
        "numberExample": "01512 3456789"
      },
      {
        "name": "Ghana",
        "countryCode": "GH",
        "callingCodes": [
          "233"
        ],
        "numberExample": "023 123 4567"
      },
      {
        "name": "Gibraltar",
        "countryCode": "GI",
        "callingCodes": [
          "350"
        ],
        "numberExample": "57123456"
      },
      {
        "name": "Greece",
        "countryCode": "GR",
        "callingCodes": [
          "30"
        ],
        "numberExample": "691 234 5678"
      },
      {
        "name": "Greenland",
        "countryCode": "GL",
        "callingCodes": [
          "299"
        ],
        "numberExample": "22 12 34"
      },
      {
        "name": "Grenada",
        "countryCode": "GD",
        "callingCodes": [
          "1473"
        ],
        "numberExample": "(473) 403-1234"
      },
      {
        "name": "Guadeloupe",
        "countryCode": "GP",
        "callingCodes": [
          "590"
        ],
        "numberExample": "0690 00 12 34"
      },
      {
        "name": "Guam",
        "countryCode": "GU",
        "callingCodes": [
          "1671"
        ],
        "numberExample": "(671) 300-1234"
      },
      {
        "name": "Guatemala",
        "countryCode": "GT",
        "callingCodes": [
          "502"
        ],
        "numberExample": "5123 4567"
      },
      {
        "name": "Guernsey",
        "countryCode": "GG",
        "callingCodes": [
          "44"
        ],
        "numberExample": "07781 123456"
      },
      {
        "name": "Guinea",
        "countryCode": "GN",
        "callingCodes": [
          "224"
        ],
        "numberExample": "601 12 34 56"
      },
      {
        "name": "Guinea-Bissau",
        "countryCode": "GW",
        "callingCodes": [
          "245"
        ],
        "numberExample": "955 012 345"
      },
      {
        "name": "Guyana",
        "countryCode": "GY",
        "callingCodes": [
          "592"
        ],
        "numberExample": "609 1234"
      },
      {
        "name": "Haiti",
        "countryCode": "HT",
        "callingCodes": [
          "509"
        ],
        "numberExample": "34 10 1234"
      },
      {
        "name": "Holy See",
        "countryCode": "VA",
        "callingCodes": [
          "379"
        ],
        "numberExample": ""
      },
      {
        "name": "Honduras",
        "countryCode": "HN",
        "callingCodes": [
          "504"
        ],
        "numberExample": "9123-4567"
      },
      {
        "name": "Hong Kong",
        "countryCode": "HK",
        "callingCodes": [
          "852"
        ],
        "numberExample": "5123 4567"
      },
      {
        "name": "Hungary",
        "countryCode": "HU",
        "callingCodes": [
          "36"
        ],
        "numberExample": "(20) 123 4567"
      },
      {
        "name": "Iceland",
        "countryCode": "IS",
        "callingCodes": [
          "354"
        ],
        "numberExample": "611 1234"
      },
      {
        "name": "India",
        "countryCode": "IN",
        "callingCodes": [
          "91"
        ],
        "numberExample": "081234 56789"
      },
      {
        "name": "Indonesia",
        "countryCode": "ID",
        "callingCodes": [
          "62"
        ],
        "numberExample": "0812-345-678"
      },
      {
        "name": "Côte d'Ivoire",
        "countryCode": "CI",
        "callingCodes": [
          "225"
        ],
        "numberExample": "01 23 45 67"
      },
      {
        "name": "Iran (Islamic Republic of)",
        "countryCode": "IR",
        "callingCodes": [
          "98"
        ],
        "numberExample": "0912 345 6789"
      },
      {
        "name": "Iraq",
        "countryCode": "IQ",
        "callingCodes": [
          "964"
        ],
        "numberExample": "0791 234 5678"
      },
      {
        "name": "Ireland",
        "countryCode": "IE",
        "callingCodes": [
          "353"
        ],
        "numberExample": "085 012 3456"
      },
      {
        "name": "Isle of Man",
        "countryCode": "IM",
        "callingCodes": [
          "44"
        ],
        "numberExample": "07924 123456"
      },
      {
        "name": "Israel",
        "countryCode": "IL",
        "callingCodes": [
          "972"
        ],
        "numberExample": "050-123-4567"
      },
      {
        "name": "Italy",
        "countryCode": "IT",
        "callingCodes": [
          "39"
        ],
        "numberExample": "312 345 6789"
      },
      {
        "name": "Jamaica",
        "countryCode": "JM",
        "callingCodes": [
          "1876"
        ],
        "numberExample": "(876) 210-1234"
      },
      {
        "name": "Japan",
        "countryCode": "JP",
        "callingCodes": [
          "81"
        ],
        "numberExample": "090-1234-5678"
      },
      {
        "name": "Jersey",
        "countryCode": "JE",
        "callingCodes": [
          "44"
        ],
        "numberExample": "07797 712345"
      },
      {
        "name": "Jordan",
        "countryCode": "JO",
        "callingCodes": [
          "962"
        ],
        "numberExample": "07 9012 3456"
      },
      {
        "name": "Kazakhstan",
        "countryCode": "KZ",
        "callingCodes": [
          "76",
          "77"
        ],
        "numberExample": "8 (771) 000 9998"
      },
      {
        "name": "Kenya",
        "countryCode": "KE",
        "callingCodes": [
          "254"
        ],
        "numberExample": "0712 123456"
      },
      {
        "name": "Kiribati",
        "countryCode": "KI",
        "callingCodes": [
          "686"
        ],
        "numberExample": "72001234"
      },
      {
        "name": "Kuwait",
        "countryCode": "KW",
        "callingCodes": [
          "965"
        ],
        "numberExample": "500 12345"
      },
      {
        "name": "Kyrgyzstan",
        "countryCode": "KG",
        "callingCodes": [
          "996"
        ],
        "numberExample": "0700 123 456"
      },
      {
        "name": "Lao People's Democratic Republic",
        "countryCode": "LA",
        "callingCodes": [
          "856"
        ],
        "numberExample": "020 23 123 456"
      },
      {
        "name": "Latvia",
        "countryCode": "LV",
        "callingCodes": [
          "371"
        ],
        "numberExample": "21 234 567"
      },
      {
        "name": "Lebanon",
        "countryCode": "LB",
        "callingCodes": [
          "961"
        ],
        "numberExample": "71 123 456"
      },
      {
        "name": "Lesotho",
        "countryCode": "LS",
        "callingCodes": [
          "266"
        ],
        "numberExample": "5012 3456"
      },
      {
        "name": "Liberia",
        "countryCode": "LR",
        "callingCodes": [
          "231"
        ],
        "numberExample": "077 012 3456"
      },
      {
        "name": "Libya",
        "countryCode": "LY",
        "callingCodes": [
          "218"
        ],
        "numberExample": "091-2345678"
      },
      {
        "name": "Liechtenstein",
        "countryCode": "LI",
        "callingCodes": [
          "423"
        ],
        "numberExample": "660 234 567"
      },
      {
        "name": "Lithuania",
        "countryCode": "LT",
        "callingCodes": [
          "370"
        ],
        "numberExample": "(8-612) 34567"
      },
      {
        "name": "Luxembourg",
        "countryCode": "LU",
        "callingCodes": [
          "352"
        ],
        "numberExample": "628 123 456"
      },
      {
        "name": "Macao",
        "countryCode": "MO",
        "callingCodes": [
          "853"
        ],
        "numberExample": "6612 3456"
      },
      {
        "name": "Macedonia (the former Yugoslav Republic of)",
        "countryCode": "MK",
        "callingCodes": [
          "389"
        ],
        "numberExample": "072 345 678"
      },
      {
        "name": "Madagascar",
        "countryCode": "MG",
        "callingCodes": [
          "261"
        ],
        "numberExample": "032 12 345 67"
      },
      {
        "name": "Malawi",
        "countryCode": "MW",
        "callingCodes": [
          "265"
        ],
        "numberExample": "0991 23 45 67"
      },
      {
        "name": "Malaysia",
        "countryCode": "MY",
        "callingCodes": [
          "60"
        ],
        "numberExample": "012-345 6789"
      },
      {
        "name": "Maldives",
        "countryCode": "MV",
        "callingCodes": [
          "960"
        ],
        "numberExample": "771-2345"
      },
      {
        "name": "Mali",
        "countryCode": "ML",
        "callingCodes": [
          "223"
        ],
        "numberExample": "65 01 23 45"
      },
      {
        "name": "Malta",
        "countryCode": "MT",
        "callingCodes": [
          "356"
        ],
        "numberExample": "9696 1234"
      },
      {
        "name": "Marshall Islands",
        "countryCode": "MH",
        "callingCodes": [
          "692"
        ],
        "numberExample": "235-1234"
      },
      {
        "name": "Martinique",
        "countryCode": "MQ",
        "callingCodes": [
          "596"
        ],
        "numberExample": "0696 20 12 34"
      },
      {
        "name": "Mauritania",
        "countryCode": "MR",
        "callingCodes": [
          "222"
        ],
        "numberExample": "22 12 34 56"
      },
      {
        "name": "Mauritius",
        "countryCode": "MU",
        "callingCodes": [
          "230"
        ],
        "numberExample": "5251 2345"
      },
      {
        "name": "Mayotte",
        "countryCode": "YT",
        "callingCodes": [
          "262"
        ],
        "numberExample": "0639 01 23 45"
      },
      {
        "name": "Mexico",
        "countryCode": "MX",
        "callingCodes": [
          "52"
        ],
        "numberExample": "044 222 123 4567"
      },
      {
        "name": "Micronesia (Federated States of)",
        "countryCode": "FM",
        "callingCodes": [
          "691"
        ],
        "numberExample": "350 1234"
      },
      {
        "name": "Moldova (Republic of)",
        "countryCode": "MD",
        "callingCodes": [
          "373"
        ],
        "numberExample": "0621 12 345"
      },
      {
        "name": "Monaco",
        "countryCode": "MC",
        "callingCodes": [
          "377"
        ],
        "numberExample": "06 12 34 56 78"
      },
      {
        "name": "Mongolia",
        "countryCode": "MN",
        "callingCodes": [
          "976"
        ],
        "numberExample": "8812 3456"
      },
      {
        "name": "Montenegro",
        "countryCode": "ME",
        "callingCodes": [
          "382"
        ],
        "numberExample": "067 622 901"
      },
      {
        "name": "Montserrat",
        "countryCode": "MS",
        "callingCodes": [
          "1664"
        ],
        "numberExample": "(664) 492-3456"
      },
      {
        "name": "Morocco",
        "countryCode": "MA",
        "callingCodes": [
          "212"
        ],
        "numberExample": "0650-123456"
      },
      {
        "name": "Mozambique",
        "countryCode": "MZ",
        "callingCodes": [
          "258"
        ],
        "numberExample": "82 123 4567"
      },
      {
        "name": "Myanmar",
        "countryCode": "MM",
        "callingCodes": [
          "95"
        ],
        "numberExample": "09 212 3456"
      },
      {
        "name": "Namibia",
        "countryCode": "NA",
        "callingCodes": [
          "264"
        ],
        "numberExample": "081 123 4567"
      },
      {
        "name": "Nauru",
        "countryCode": "NR",
        "callingCodes": [
          "674"
        ],
        "numberExample": "555 1234"
      },
      {
        "name": "Nepal",
        "countryCode": "NP",
        "callingCodes": [
          "977"
        ],
        "numberExample": "984-1234567"
      },
      {
        "name": "Netherlands",
        "countryCode": "NL",
        "callingCodes": [
          "31"
        ],
        "numberExample": "06 12345678"
      },
      {
        "name": "New Caledonia",
        "countryCode": "NC",
        "callingCodes": [
          "687"
        ],
        "numberExample": "75.12.34"
      },
      {
        "name": "New Zealand",
        "countryCode": "NZ",
        "callingCodes": [
          "64"
        ],
        "numberExample": "021 123 4567"
      },
      {
        "name": "Nicaragua",
        "countryCode": "NI",
        "callingCodes": [
          "505"
        ],
        "numberExample": "8123 4567"
      },
      {
        "name": "Niger",
        "countryCode": "NE",
        "callingCodes": [
          "227"
        ],
        "numberExample": "93 12 34 56"
      },
      {
        "name": "Nigeria",
        "countryCode": "NG",
        "callingCodes": [
          "234"
        ],
        "numberExample": "0802 123 4567"
      },
      {
        "name": "Niue",
        "countryCode": "NU",
        "callingCodes": [
          "683"
        ],
        "numberExample": "1234"
      },
      {
        "name": "Norfolk Island",
        "countryCode": "NF",
        "callingCodes": [
          "672"
        ],
        "numberExample": "3 81234"
      },
      {
        "name": "Korea (Democratic People's Republic of)",
        "countryCode": "KP",
        "callingCodes": [
          "850"
        ],
        "numberExample": "0192 123 4567"
      },
      {
        "name": "Northern Mariana Islands",
        "countryCode": "MP",
        "callingCodes": [
          "1670"
        ],
        "numberExample": "(670) 234-5678"
      },
      {
        "name": "Norway",
        "countryCode": "NO",
        "callingCodes": [
          "47"
        ],
        "numberExample": "406 12 345"
      },
      {
        "name": "Oman",
        "countryCode": "OM",
        "callingCodes": [
          "968"
        ],
        "numberExample": "9212 3456"
      },
      {
        "name": "Pakistan",
        "countryCode": "PK",
        "callingCodes": [
          "92"
        ],
        "numberExample": "0301 2345678"
      },
      {
        "name": "Palau",
        "countryCode": "PW",
        "callingCodes": [
          "680"
        ],
        "numberExample": "620 1234"
      },
      {
        "name": "Palestine, State of",
        "countryCode": "PS",
        "callingCodes": [
          "970"
        ],
        "numberExample": "0599 123 456"
      },
      {
        "name": "Panama",
        "countryCode": "PA",
        "callingCodes": [
          "507"
        ],
        "numberExample": "6123-4567"
      },
      {
        "name": "Papua New Guinea",
        "countryCode": "PG",
        "callingCodes": [
          "675"
        ],
        "numberExample": "7012 3456"
      },
      {
        "name": "Paraguay",
        "countryCode": "PY",
        "callingCodes": [
          "595"
        ],
        "numberExample": "0961 456789"
      },
      {
        "name": "Peru",
        "countryCode": "PE",
        "callingCodes": [
          "51"
        ],
        "numberExample": "912 345 678"
      },
      {
        "name": "Philippines",
        "countryCode": "PH",
        "callingCodes": [
          "63"
        ],
        "numberExample": "0905 123 4567"
      },
      {
        "name": "Pitcairn",
        "countryCode": "PN",
        "callingCodes": [
          "64"
        ],
        "numberExample": ""
      },
      {
        "name": "Poland",
        "countryCode": "PL",
        "callingCodes": [
          "48"
        ],
        "numberExample": "512 345 678"
      },
      {
        "name": "Portugal",
        "countryCode": "PT",
        "callingCodes": [
          "351"
        ],
        "numberExample": "912 345 678"
      },
      {
        "name": "Puerto Rico",
        "countryCode": "PR",
        "callingCodes": [
          "1"
        ],
        "numberExample": "(787) 234-5678"
      },
      {
        "name": "Qatar",
        "countryCode": "QA",
        "callingCodes": [
          "974"
        ],
        "numberExample": "3312 3456"
      },
      {
        "name": "Republic of Kosovo",
        "countryCode": "XK",
        "callingCodes": [
          "383"
        ],
        "numberExample": "043 201 234"
      },
      {
        "name": "Réunion",
        "countryCode": "RE",
        "callingCodes": [
          "262"
        ],
        "numberExample": "0692 12 34 56"
      },
      {
        "name": "Romania",
        "countryCode": "RO",
        "callingCodes": [
          "40"
        ],
        "numberExample": "0712 034 567"
      },
      {
        "name": "Russian Federation",
        "countryCode": "RU",
        "callingCodes": [
          "7"
        ],
        "numberExample": "8 (912) 345-67-89"
      },
      {
        "name": "Rwanda",
        "countryCode": "RW",
        "callingCodes": [
          "250"
        ],
        "numberExample": "0720 123 456"
      },
      {
        "name": "Saint Barthélemy",
        "countryCode": "BL",
        "callingCodes": [
          "590"
        ],
        "numberExample": "0690 00 12 34"
      },
      {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "countryCode": "SH",
        "callingCodes": [
          "290"
        ],
        "numberExample": "51234"
      },
      {
        "name": "Saint Kitts and Nevis",
        "countryCode": "KN",
        "callingCodes": [
          "1869"
        ],
        "numberExample": "(869) 765-2917"
      },
      {
        "name": "Saint Lucia",
        "countryCode": "LC",
        "callingCodes": [
          "1758"
        ],
        "numberExample": "(758) 284-5678"
      },
      {
        "name": "Saint Martin (French part)",
        "countryCode": "MF",
        "callingCodes": [
          "590"
        ],
        "numberExample": "0690 00 12 34"
      },
      {
        "name": "Saint Pierre and Miquelon",
        "countryCode": "PM",
        "callingCodes": [
          "508"
        ],
        "numberExample": "055 12 34"
      },
      {
        "name": "Saint Vincent and the Grenadines",
        "countryCode": "VC",
        "callingCodes": [
          "1784"
        ],
        "numberExample": "(784) 430-1234"
      },
      {
        "name": "Samoa",
        "countryCode": "WS",
        "callingCodes": [
          "685"
        ],
        "numberExample": "72 12345"
      },
      {
        "name": "San Marino",
        "countryCode": "SM",
        "callingCodes": [
          "378"
        ],
        "numberExample": "66 66 12 12"
      },
      {
        "name": "Sao Tome and Principe",
        "countryCode": "ST",
        "callingCodes": [
          "239"
        ],
        "numberExample": "981 2345"
      },
      {
        "name": "Saudi Arabia",
        "countryCode": "SA",
        "callingCodes": [
          "966"
        ],
        "numberExample": "051 234 5678"
      },
      {
        "name": "Senegal",
        "countryCode": "SN",
        "callingCodes": [
          "221"
        ],
        "numberExample": "70 123 45 67"
      },
      {
        "name": "Serbia",
        "countryCode": "RS",
        "callingCodes": [
          "381"
        ],
        "numberExample": "060 1234567"
      },
      {
        "name": "Seychelles",
        "countryCode": "SC",
        "callingCodes": [
          "248"
        ],
        "numberExample": "2 510 123"
      },
      {
        "name": "Sierra Leone",
        "countryCode": "SL",
        "callingCodes": [
          "232"
        ],
        "numberExample": "(025) 123456"
      },
      {
        "name": "Singapore",
        "countryCode": "SG",
        "callingCodes": [
          "65"
        ],
        "numberExample": "8123 4567"
      },
      {
        "name": "Sint Maarten (Dutch part)",
        "countryCode": "SX",
        "callingCodes": [
          "1721"
        ],
        "numberExample": "(721) 520-5678"
      },
      {
        "name": "Slovakia",
        "countryCode": "SK",
        "callingCodes": [
          "421"
        ],
        "numberExample": "0912 123 456"
      },
      {
        "name": "Slovenia",
        "countryCode": "SI",
        "callingCodes": [
          "386"
        ],
        "numberExample": "031 234 567"
      },
      {
        "name": "Solomon Islands",
        "countryCode": "SB",
        "callingCodes": [
          "677"
        ],
        "numberExample": "74 21234"
      },
      {
        "name": "Somalia",
        "countryCode": "SO",
        "callingCodes": [
          "252"
        ],
        "numberExample": "7 1123456"
      },
      {
        "name": "South Africa",
        "countryCode": "ZA",
        "callingCodes": [
          "27"
        ],
        "numberExample": "071 123 4567"
      },
      {
        "name": "South Georgia and the South Sandwich Islands",
        "countryCode": "GS",
        "callingCodes": [
          "500"
        ],
        "numberExample": ""
      },
      {
        "name": "Korea (Republic of)",
        "countryCode": "KR",
        "callingCodes": [
          "82"
        ],
        "numberExample": "010-0000-0000"
      },
      {
        "name": "South Sudan",
        "countryCode": "SS",
        "callingCodes": [
          "211"
        ],
        "numberExample": "0977 123 456"
      },
      {
        "name": "Spain",
        "countryCode": "ES",
        "callingCodes": [
          "34"
        ],
        "numberExample": "612 34 56 78"
      },
      {
        "name": "Sri Lanka",
        "countryCode": "LK",
        "callingCodes": [
          "94"
        ],
        "numberExample": "071 234 5678"
      },
      {
        "name": "Sudan",
        "countryCode": "SD",
        "callingCodes": [
          "249"
        ],
        "numberExample": "091 123 1234"
      },
      {
        "name": "Suriname",
        "countryCode": "SR",
        "callingCodes": [
          "597"
        ],
        "numberExample": "741-2345"
      },
      {
        "name": "Svalbard and Jan Mayen",
        "countryCode": "SJ",
        "callingCodes": [
          "4779"
        ],
        "numberExample": "412 34 567"
      },
      {
        "name": "Swaziland",
        "countryCode": "SZ",
        "callingCodes": [
          "268"
        ],
        "numberExample": "7612 3456"
      },
      {
        "name": "Sweden",
        "countryCode": "SE",
        "callingCodes": [
          "46"
        ],
        "numberExample": "070-123 45 67"
      },
      {
        "name": "Switzerland",
        "countryCode": "CH",
        "callingCodes": [
          "41"
        ],
        "numberExample": "078 123 45 67"
      },
      {
        "name": "Syrian Arab Republic",
        "countryCode": "SY",
        "callingCodes": [
          "963"
        ],
        "numberExample": "0944 567 890"
      },
      {
        "name": "Taiwan",
        "countryCode": "TW",
        "callingCodes": [
          "886"
        ],
        "numberExample": "0912 345 678"
      },
      {
        "name": "Tajikistan",
        "countryCode": "TJ",
        "callingCodes": [
          "992"
        ],
        "numberExample": "917 12 3456"
      },
      {
        "name": "Tanzania, United Republic of",
        "countryCode": "TZ",
        "callingCodes": [
          "255"
        ],
        "numberExample": "0621 234 567"
      },
      {
        "name": "Thailand",
        "countryCode": "TH",
        "callingCodes": [
          "66"
        ],
        "numberExample": "081 234 5678"
      },
      {
        "name": "Timor-Leste",
        "countryCode": "TL",
        "callingCodes": [
          "670"
        ],
        "numberExample": "7721 2345"
      },
      {
        "name": "Togo",
        "countryCode": "TG",
        "callingCodes": [
          "228"
        ],
        "numberExample": "90 11 23 45"
      },
      {
        "name": "Tokelau",
        "countryCode": "TK",
        "callingCodes": [
          "690"
        ],
        "numberExample": "7290"
      },
      {
        "name": "Tonga",
        "countryCode": "TO",
        "callingCodes": [
          "676"
        ],
        "numberExample": "771 5123"
      },
      {
        "name": "Trinidad and Tobago",
        "countryCode": "TT",
        "callingCodes": [
          "1868"
        ],
        "numberExample": "(868) 291-1234"
      },
      {
        "name": "Tunisia",
        "countryCode": "TN",
        "callingCodes": [
          "216"
        ],
        "numberExample": "20 123 456"
      },
      {
        "name": "Turkey",
        "countryCode": "TR",
        "callingCodes": [
          "90"
        ],
        "numberExample": "0501 234 56 78"
      },
      {
        "name": "Turkmenistan",
        "countryCode": "TM",
        "callingCodes": [
          "993"
        ],
        "numberExample": "8 66 123456"
      },
      {
        "name": "Turks and Caicos Islands",
        "countryCode": "TC",
        "callingCodes": [
          "1649"
        ],
        "numberExample": "(649) 231-1234"
      },
      {
        "name": "Tuvalu",
        "countryCode": "TV",
        "callingCodes": [
          "688"
        ],
        "numberExample": "901234"
      },
      {
        "name": "Uganda",
        "countryCode": "UG",
        "callingCodes": [
          "256"
        ],
        "numberExample": "0712 345678"
      },
      {
        "name": "Ukraine",
        "countryCode": "UA",
        "callingCodes": [
          "380"
        ],
        "numberExample": "039 123 4567"
      },
      {
        "name": "United Arab Emirates",
        "countryCode": "AE",
        "callingCodes": [
          "971"
        ],
        "numberExample": "050 123 4567"
      },
      {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "countryCode": "GB",
        "callingCodes": [
          "44"
        ],
        "numberExample": "07400 123456"
      },
      {
        "name": "United States of America",
        "countryCode": "US",
        "callingCodes": [
          "1"
        ],
        "numberExample": "(201) 555-0123"
      },
      {
        "name": "Uruguay",
        "countryCode": "UY",
        "callingCodes": [
          "598"
        ],
        "numberExample": "094 231 234"
      },
      {
        "name": "Uzbekistan",
        "countryCode": "UZ",
        "callingCodes": [
          "998"
        ],
        "numberExample": "8 91 234 56 78"
      },
      {
        "name": "Vanuatu",
        "countryCode": "VU",
        "callingCodes": [
          "678"
        ],
        "numberExample": "591 2345"
      },
      {
        "name": "Venezuela (Bolivarian Republic of)",
        "countryCode": "VE",
        "callingCodes": [
          "58"
        ],
        "numberExample": "0412-1234567"
      },
      {
        "name": "Viet Nam",
        "countryCode": "VN",
        "callingCodes": [
          "84"
        ],
        "numberExample": "091 234 56 78"
      },
      {
        "name": "Wallis and Futuna",
        "countryCode": "WF",
        "callingCodes": [
          "681"
        ],
        "numberExample": "50 12 34"
      },
      {
        "name": "Western Sahara",
        "countryCode": "EH",
        "callingCodes": [
          "212"
        ],
        "numberExample": "0650-123456"
      },
      {
        "name": "Yemen",
        "countryCode": "YE",
        "callingCodes": [
          "967"
        ],
        "numberExample": "0712 345 678"
      },
      {
        "name": "Zambia",
        "countryCode": "ZM",
        "callingCodes": [
          "260"
        ],
        "numberExample": "095 5123456"
      },
      {
        "name": "Zimbabwe",
        "countryCode": "ZW",
        "callingCodes": [
          "263"
        ],
        "numberExample": "071 234 5678"
      }
    ];


  getAllCountry() {
    return new Promise(resolve => {
     let result = this.allCountries.map(function (obj) {
        return {
          name: obj.name,
          countryCode: obj.countryCode,
          dialCode: "+" + obj.callingCodes[0],
          flag: "flag-icon-" + obj.countryCode.toLowerCase(),
          numberExample: obj.numberExample,
          flagImg: "http://www.geonames.org/flags/x/"+ obj.countryCode.toLowerCase() +".gif",

        }
      });
      resolve(result);
    });
  }

  getUserCountry() {
    return this.http.get("https://api.ipdata.co").toPromise().then(data => {

      var countryResponce: any = data;
      var countryCodes: any = (countryResponce.country_code).toLowerCase();
      var activeFlag = "http://www.geonames.org/flags/x/" + countryCodes + ".gif";

      var activeCountryArray: any;
      activeCountryArray = this.allCountries.filter((obj) => {
        return obj.countryCode == countryCodes.toUpperCase();
      });
      var activeCountry = activeCountryArray[0];
      var numberPlaceholder;
      if (activeCountry.numberExample) {
        numberPlaceholder = activeCountry.numberExample;
      } else {
        numberPlaceholder = "Mobile Number";
      }

      let userCountry = {activeFlag: activeFlag, activeCountry: activeCountry, numberPlaceholder: numberPlaceholder};
      return userCountry
    }).catch(
      (err) => {
        return err;
      }
    );
  }

}
