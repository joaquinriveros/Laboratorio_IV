// Obtener la fecha y hora actual en formato [YYYY-MM-DD HH:MM:SS]
const getCurrentTime = () => {
    const now = new Date();
    return now.toISOString().replace('T', ' ').slice(0, 19); // .ToISOString() devuelve la fecha en formato ISO
}

module.exports = { getCurrentTime };