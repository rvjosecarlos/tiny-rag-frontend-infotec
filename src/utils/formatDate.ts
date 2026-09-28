export function formatDate(date: string){
    const fecha = new Date(date);
    return new Intl.DateTimeFormat("es-MX", {
        dateStyle: "short"
    }).format(fecha);
};