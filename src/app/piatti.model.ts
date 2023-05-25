export interface Piatti
{
    primi: Primo[];
    secondi: Secondo[];
    
}
export class Primo{
    public id: number;
    public nome: string;
    public prezzo:number;

}
export class Secondo{
    public id:number;
    public nome:string;
    public contorno:string;
    public prezzo:number;
}