export default function formatCurrency(num) {
    if (num !== null) {
        // num = num.toFixed(1);
        // return "$" + Number(num).toLocaleString() + " " ;
        //ES6 method
        return Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(num);
    }
}