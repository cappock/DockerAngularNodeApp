export default class Business {
    person_name: String;
    business_name: String;
    business_gst_number: Number;

    constructor(person_name : String, business_name : String, business_gst_number : Number){
        this.person_name = person_name;
        this.business_name = business_name;
        this.business_gst_number = business_gst_number;
    }
}