let grade = [
    {grade : "A", nilai : "95"}
    {grade : "B", nilai : "75"}
    {grade : "C", nilai : "60"}
]
grade.forEach(function(item) {
    let hasilgrade = "";

    switch (item.grade) {
        case "A"
        hasilgrade ="nilai sangat baik"
        break;
        case "B"
        hasilgrade ="nilai rata rata"
        break;
        case "C"
        hasilgrade ="nilai dibawah rata rata"
        break;
        default:
    }
    console.log(`${item.grade} mendapat ${hasilgrade}`)
}
