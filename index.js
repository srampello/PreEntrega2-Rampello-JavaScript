//* Mercado Pago Finance
//* Elementos en la plataforma
//  funciones -> esEntero tickerValido cantidad 

//! Base de datos
const datoscedear = [
    {ticker: "ARKK", name: "Ark Innovation", value: 3238.5, var: -0.67, cat: "ETFS"},
    {ticker: "DIA", name: "Dow Jones", value: 12787.5, var: +0.005, cat: "ETFS"},
    {ticker: "EEM", name: "MSCI Emerging Market", value: 5733.5, var: +0.53, cat: "ETFS"},
    {ticker: "EWZ", name: "MSCI Brazil", value: 11300.0, var: +1.50, cat: "ETFS"},
    {ticker: "IWM", name: "Russell 2000", value: 13621.0, var: +0.16, cat: "ETFS"},
    {ticker: "QQQ", name: "Nasdaq 100", value: 13752.0, var: -0.04, cat: "ETFS"},
    {ticker: "SPY", name: "S&P 50", value: 16478.5, var: +0.15, cat: "ETFS"},
    {ticker: "XLE", name: "Energy SPDR", value: 34031.0, var: +1.09, cat: "ETFS"},
    {ticker: "XLF", name: "Financial SPDR", value: 13665.5, var: +0.23, cat: "ETFS"},
    {ticker: "BiTF", name: "Bitfarms", value: 4478.5, var: -4.22, cat: "CRYPTO"},
    {ticker: "COIN", name: "Coinbase", value: 2240.5, var: +0.13, cat: "CRYPTO"},
    {ticker: "HUT", name: "HUT 8 Mining", value: 8270.0, var: -3.15, cat: "CRYPTO"},
    {ticker: "MSTR", name: "MicroStrategy", value: 13233.5, var: +1.24, cat: "CRYPTO"},
    {ticker: "SI", name: "Silvergate", value: 22.45, var: -61.82, cat: "CRYPTO"},
    {ticker: "AAPL", name: "Apple", value: 13185.5, var: +0.26, cat: "TOP"},
    {ticker: "AMD", name: "Advanced Mico Devices", value: 7842.0, var: -0.46, cat: "Top"},
    {ticker: "AMZN", name: "Amazon", value: 710.0, var: +0.42, cat: "TOP"},
    {ticker: "BABA", name: "Alibaba", value: 7384.5, var: +0.05, cat: "TOP"},
    {ticker: "BA.C", name: "Bank of America", value: 10467.0, var: +0.57, cat: "TOP"},
    {ticker: "BIOX", name: "Bioceres", value: 16549.5, var: -1.16, cat: "TOP"},
    {ticker: "BRKB", name: "Berkshire Hathaway", value: 12205.5, var: +0.35, cat: "TOP"},
    {ticker: "C", name: "Citigroup", value: 9995.5, var: -0.78, cat: "TOP"},
    {ticker: "CVX", name: "Chevron", value: 15430.0, var: +0.22, cat: "TOP"},
    {ticker: "DESP", name: "Despegar", value: 5989.5, var: +3.30, cat: "TOP"},
    {ticker: "GLOB", name: "Globant", value: 8287.5, var: -1.51, cat: "TOP"},
    {ticker: "GOLD", name: "Barrick Gold", value: 11675.0, var: +0.24, cat: "TOP"},
    {ticker: "GGOGL", name: "Google", value: 1735.5, var: +0.67, cat: "TOP"},
    {ticker: "MELI", name: "Mercado Libre", value: 17592.5, var: -0.54, cat: "TOP"},
    {ticker: "META", name: "Meta (Facebook)", value: 9161.0, var: -0.21, cat: "TOP"},
    {ticker: "NFLX", name: "Netflix", value: 20428.5, var: -0.18, cat: "TOP"},
    {ticker: "NVDA", name: "Nvidia", value: 14004.0, var: -1.69, cat: "TOP"},
    {ticker: "PBR", name: "Petroleo brasileiro", value: 10855.5, var: +0.87, cat: "TOP"},
    {ticker: "PFE", name: "Pfizer", value: 12688.5, var: +0.24, cat: "TOP"},
    {ticker: "PYPL", name: "Paypal", value: 5644.0, var: -0.97, cat: "TOP"},
    {ticker: "QCOM", name: "Qualcomm", value: 7121.5, var: -0.38, cat: "TOP"},
    {ticker: "SHOP", name: "Shopify", value: 427.5, var: -3.50, cat: "TOP"},
    {ticker: "SQ", name: "Square", value: 1962.0, var: -5.47, cat: "TOP"},
    {ticker: "T", name: "AT&T", value: 3544.5, var: +1.56, cat: "TOP"},
    {ticker: "TEN", name: "Tenaris", value: 23523.5, var: +1.27, cat: "TOP"},
    {ticker: "TSLA", name: "Tesla", value: 12226.5, var: -1.31, cat: "TOP"},
    {ticker: "TSM", name: "Taiwan se", value: 7325.0, var: -0.75, cat: "TOP"},
    {ticker: "TWTR", name: "Twitter", value: 8311.0, var: +1.86, cat: "TOP"},
    {ticker: "TXR", name: "Ternium", value: 15023.5, var: -0.74, cat: "TOP"},
    {ticker: "V", name: "Visa", value: 10176.5, var: +0.43, cat: "TOP"},
    {ticker: "VALE", name: "Companhia vale do rio doce", value: 4904.0, var: +0.99, cat: "TOP"},
    {ticker: "VIST", name: "Vista Oil & Gas", value: 18324.5, var: -2.25, cat: "TOP"},
    {ticker: "WMT", name: "Walmart", value: 20219.0, var: +0.58, cat: "TOP"},
    {ticker: "ZM", name: "Zoom Video", value: 1132.5, var: -2.45, cat: "TOP"}
]

//! Declaraciones
let ticker = [];
let disponibilidad = [];
let cantidad, precio_final, op, cat;

//? Ingreso a la plataforma
ingreso();

//? Que operacion desea realizar?
do{
    op = prompt("¿Que operacion desea realizar? 1-Compra CEDEAR 2-Compra Dolar MEP 3-CEDEARs disponibles 4-Salir");
}while(op < 1 || op > 4);

console.log(op);

switch(op){
    case "1":
        ticker = tickerValido();
        cantidad = cantidadCompra();
        //! Compra de CEDEARs
        precio_final = parseFloat(cantidad * ((ticker.value * 0.005) + ticker.value)) 
        //! Alerts
        alert("Compra: " + cantidad + "x " + ticker.ticker + " $" + precio_final.toFixed(2));
        break;
    case "2":
        cantidad = dolarMEP();
        alert("Usted compro: " + cantidad.toFixed(0) + " Bonos, en 24Hs seran vendidos en Dolares");
        break;
    case "3":
        cat = catValido(); 
        console.log(cat);
        muestraDispoible(cat);
        //tickerFilter(cat, disponibilidad);
        //console.log(disponibilidad.ticker);
        break;
    default:
        alert("Bienvenido a Mercado Pago Finance");
        break;
}


//! Fucniones
function ingreso(){
    let usuario = prompt("Ingrese su usuario");
    console.log("Usuario " + usuario);
    let salida = "¡Hola " + usuario + "!";
    alert(salida);
}

function tickerValido(){
    let valor;
    let cedear = prompt("¿Que CEDEARs desea comprar?").toUpperCase();
    let resultado = datoscedear.find((el) => el.ticker === cedear);
    while(resultado === undefined){
        cedear = prompt("¿Que CEDEARs desea comprar?").toUpperCase();
        resultado = datoscedear.find((el) => el.ticker === cedear);
    }
    return resultado;
}

function dolarMEP(){
    let cantBonos;
    let bono = 209.00;
    let pesos = prompt("Monto en pesos que desea invertir. Valor Bono AL30: $" + bono);
    cantBonos = pesos/bono; 
    console.log(cantBonos);
    return cantBonos;
}

function catValido(){
    let valor;
    let cat = prompt("Categorias: ETFs, Crypto, Top").toUpperCase();
    let resultado = datoscedear.find((el) => el.cat === cat);
    while(resultado === undefined){
        cat = prompt("Categorias: ETFs, Crypto, Top").toUpperCase();
        resultado = datoscedear.find((el) => el.cat === cat);
    }
    return resultado.cat;
}

function muestraDispoible(categoria){
    let dispo = [];
    dispo = datoscedear.filter((el) => el.cat === categoria);
    console.log(dispo);
}

/*
function tickerFilter(categoria,cat){
    dispo = datoscedear.filter((el) => el.cat.includes(categoria));
    return dispo;
}
*/

function cantidadCompra(){
    let cant;
    do{
        cant = prompt("¿Cantidad de CEDEARs que desea comprar? (Numero enteros). Comision CEDEARs 0.50%");
        while(cant % 1 != 0){
            cant = prompt("¿Cantidad de CEDEARs que desea comprar? (Numero enteros). Comision CEDEARs 0.50%");
        }
    }while(cant < 1);
    return cant;
}





