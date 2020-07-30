export default function formatCurrency(num) {
    if (num !== undefined) {

        return "$" + Number(num.toFixed(1)).toLocaleString() + " " ;
    }
}