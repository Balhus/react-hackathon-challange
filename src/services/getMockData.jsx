
//getMockData -> Creates mock data an returns an object with: transactions of last month, transactions os today, totalRevenue, 
//weeklyExpenses, conversion, transactionsLastYear
const mockData = {
    tLastMonth: 35,
    tToday: 3,
    totalRevenue: '76685.41$',
    weeklyExpenses: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [10000, 15000, 13500, 27000, 12300, 18500, 14800, 35000, 0],
    },
    conversion: {
        labels: ['Screens', 'PCs', 'Phones', 'Others'],
        data: [3800, 578, 2562, 1589],
    },
    transactionsLastYear: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data: [25, 23, 28, 26, 24, 25, 24, 22, 29]
    }
}

//returns the object
export default function getMockData() {
    return (mockData)
}
