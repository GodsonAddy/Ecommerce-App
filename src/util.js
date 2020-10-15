export default {
    formatCurrency: function(num){
        return '$' + Number.parseFloat(num).toFixed(2).toLocaleString() + ' ';
    }
}