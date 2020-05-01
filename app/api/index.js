//import axios from 'axios'

export const getReportedCases = () => {
    // make api call
    // return the result
    const mockData = [
        {
            id: '1252',
            age: '34',
            symptoms: "Cough, headache and nausea",
            coordinates: { latitude: '43.483135999999995', longitude: '-79.7179904'},
            confirmed: false,
            reportedDate: '04/15/2020'
        },
        {
            id: '22',
            age: '21',
            symptoms: "Headache",
            coordinates: { latitude: '43.4858584', longitude: '-79.7217003'},
            confirmed: false,
            reportedDate: '04/25/2020'
        },
        {
            id: '11',
            age: '13',
            symptoms: "Runny nose",
            coordinates: { latitude: '43.4854378', longitude: '-79.7128227'},
            confirmed: false,
            reportedDate: '03/15/2020'
        },
        {
            id: '142',
            age: '98',
            symptoms: "Difficuty breathing",
            coordinates: { latitude: '43.4900209', longitude: '79.7007823'},
            confirmed: false,
            reportedDate: '04/01/2020'
        },
        {
            id: '763',
            age: '87',
            symptoms: "Sore throat",
            coordinates: { latitude: '43.4895168', longitude: '79.7106751'},
            confirmed: true,
            reportedDate: '04/28/2020'
        }
    ]
    return mockData;
}