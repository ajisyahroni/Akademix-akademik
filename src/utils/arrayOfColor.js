import colors from 'vuetify/lib/util/colors'
const arrayOfColor = [
    colors.amber,
    colors.blue,
    colors.brown,
    colors.deepOrange,
    colors.green,
    colors.grey,
    colors.indigo,
    colors.lightBlue,
    colors.lightGreen,
    colors.lightBlue,
    colors.lime,
    colors.orange,
    colors.pink,
    colors.purple,
    colors.red,
    colors.shades,
    colors.teal,
    colors.yellow
]
function getRandomColor() {
    let length = arrayOfColor.length
    return arrayOfColor[Math.floor(Math.random() * length)].darken3
}
export default getRandomColor