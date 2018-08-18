const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}




















// const argv = {

//     crear: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer'

//     },

//     actualizar: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer'

//     },

//     completado: {
//         default: true,
//         alias: 'c',
//         desc: 'Marca como completado o pendiente la tarea'
//     }

// }



// const argv = require('yargs')
//     .command('crear', 'Crea una tera por hacer', argv)
//     .command('actualizar', 'Modifica la tarea por hacer', argv)
//     // .command('completado', 'Marca la tarea que se ah completado', argv)
//     .help()
//     .argv;


// module.exports = {
//     argv
// }