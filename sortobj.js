const arr = [{
        name: "Vyshnav",
        age: 24,
        place: "Kozhikode"
    },
    {
        name: "Renjith",
        age: 21,
        place: "Malappuram"

    },
    {
        name: "Arun",
        age: 23,
        place: "Kozhikode"

    }
]

const result = arr.sort(function(a, b) {
    return a.name.localeCompare(b.name)

})
for (i in result) {
    console.log(result[i])


}