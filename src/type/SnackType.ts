//SnackType.ts

class SnackType {
    public snk_no : number;
    public snk_name : String;
    public snk_potion : number;
    public snk_calorie : number;
    public snk_company : String;

    constructor(snk_no:number, snk_name : String, snk_potion : number, snk_calorie : number, snk_company : String) {
        this.snk_no = snk_no;
        this.snk_name = snk_name;
        this.snk_potion = snk_potion;
        this.snk_calorie = snk_calorie;
        this.snk_company = snk_company;
    }

}
export default SnackType;
