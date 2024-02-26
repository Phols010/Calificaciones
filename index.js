document.getElementById('calificaciones-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var numAlumnos = parseInt(document.getElementById('num-alumnos').value);
    var nombres = [];
    var calificacionesEspañol = [];
    var calificacionesMatematicas = [];
    var calificacionesHistoria = [];
    var sumaCalificacionesEspañol = 0;
    var sumaCalificacionesMatematicas = 0;
    var sumaCalificacionesHistoria = 0;

   
    for (var i = 0; i < numAlumnos; i++) {
        var nombre = prompt("Ingrese el nombre del alumno " + (i + 1) + ":");
        nombres.push(nombre);

        var calificacionEspañol = parseFloat(prompt("Ingrese la calificación de Español para " + nombre + ":"));
        calificacionesEspañol.push(calificacionEspañol);
        sumaCalificacionesEspañol += calificacionEspañol;

        var calificacionMatematicas = parseFloat(prompt("Ingrese la calificación de Matemáticas para " + nombre + ":"));
        calificacionesMatematicas.push(calificacionMatematicas);
        sumaCalificacionesMatematicas += calificacionMatematicas;

        var calificacionHistoria = parseFloat(prompt("Ingrese la calificación de Historia para " + nombre + ":"));
        calificacionesHistoria.push(calificacionHistoria);
        sumaCalificacionesHistoria += calificacionHistoria;
    }

   
    var promedioGeneralEspañol = sumaCalificacionesEspañol / numAlumnos;
    var promedioGeneralMatematicas = sumaCalificacionesMatematicas / numAlumnos;
    var promedioGeneralHistoria = sumaCalificacionesHistoria / numAlumnos;

    
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; 

    for (var j = 0; j < numAlumnos; j++) {
        var mensaje = '';
        var promedioAlumno = (calificacionesEspañol[j] + calificacionesMatematicas[j] + calificacionesHistoria[j]) / 3;
        if (promedioAlumno >= 7) {
            mensaje = " ha Aprobado con un promedio de " + promedioAlumno.toFixed(2) + ". ¡Felicidades!";
        } else {
            mensaje = " ha Reprobado con un promedio de " + promedioAlumno.toFixed(2) + ". Debes esforzarte más.";
        }
        resultadosDiv.innerHTML += '<p>' + nombres[j] + mensaje + '</p>';
    }

    resultadosDiv.innerHTML += '<p>Promedio general de Español: ' + promedioGeneralEspañol.toFixed(2) + '</p>';
    resultadosDiv.innerHTML += '<p>Promedio general de Matemáticas: ' + promedioGeneralMatematicas.toFixed(2) + '</p>';
    resultadosDiv.innerHTML += '<p>Promedio general de Historia: ' + promedioGeneralHistoria.toFixed(2) + '</p>';
});
